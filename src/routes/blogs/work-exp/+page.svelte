<script>
    import { fetchBlogData } from '$lib';
    import BlogPage from "../../../components/BlogPage.svelte";
    import { onMount } from 'svelte';

    let blogPost = null;
    let blogContent = '';
    let chapters = []; // Array to store chapters
    let loading = true; // Loading state
    let loadingDots = ''; // Dots for the loading animation

    // Animate the loading dots
    let interval;
    onMount(() => {
        interval = setInterval(() => {
            loadingDots = '.'.repeat((loadingDots.length % 3) + 1); // Cycle through 1, 2, 3 dots
        }, 500);

        // Fetch data
        fetchData('work-exp');

        return () => clearInterval(interval); // Cleanup interval on component destroy
    });

    async function fetchData(link) {
        try {
            const { blogPost: fetchedBlogPost, chapters: fetchedChapters, blogContent: fetchedBlogContent } = await fetchBlogData(link);

            blogPost = fetchedBlogPost;
            chapters = fetchedChapters;
            blogContent = fetchedBlogContent;
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            // Add a delay before hiding the loading state
            setTimeout(() => {
                loading = false; // Set loading to false after the delay
                clearInterval(interval); // Stop the loading animation
            }, 1000);
        }
    }
</script>

<style>
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full viewport height */
        text-align: center;
    }

    h2 {
        font-size: 2rem;
        color: #555; /* Adjust color as needed */
    }

    .centered-container {
        display: flex;
        flex-direction: column; /* Stack children vertically */
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full viewport height */
        text-align: center;
    }
</style>

<main>
    {#if loading}
        <div class="loading-container">
            <h2>Hold on{loadingDots}</h2>
        </div>
    {:else if blogPost && blogContent && chapters.length > 0}
        <BlogPage 
            blogPost={blogPost} 
            BlogComponent={blogContent} 
            chapters={chapters} 
        />
    {:else}
    <div class="centered-container">
        <h2>This blog took a detour 😬</h2>
        <p>Feel free to <a href="javascript:history.back()" style="color: inherit;">head back</a></p>
    </div>
    {/if}
</main>

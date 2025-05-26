<script>
    import { fetchPaperData } from '$lib';
    import BlogPage from "../../../components/BlogPage.svelte";
    import { onMount } from 'svelte';
    export let data; // This will be passed from the route

    let loading = true; // Loading state
    let loadingDots = ''; // Dots for the loading animation
    let paperPost = data.paperPost; // To store the blog post data
    let paperContent = null; // To store the blog content
    let chapters = []; // Array to store chapters

    // Animate the loading dots
    let interval;
    onMount(() => {
        interval = setInterval(() => {
            loadingDots = '.'.repeat((loadingDots.length % 3) + 1); // Cycle through 1, 2, 3 dots
        }, 500);

        // Fetch data
        paperPost = data.paperPost;
        paperContent = data.paperContent;
        chapters = data.chapters;

        setTimeout(() => {
             // Set loading to false after the delay
             loading = false;
            clearInterval(interval); // Stop the loading animation
        }, 1500);
    });
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
    {:else if paperPost && paperContent && chapters.length > 0}
        <BlogPage 
            blogPost={paperPost} 
            BlogComponent={paperContent} 
            chapters={chapters} 
        />
    {:else}
    <div class="centered-container">
        <h2>This page took a detour 😬</h2>
        <p>Feel free to <a href="javascript:history.back()" style="color: inherit;">head back</a></p>
    </div>
    {/if}
</main>

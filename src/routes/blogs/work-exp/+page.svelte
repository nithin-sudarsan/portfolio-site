<script>
    import { createClient } from '@supabase/supabase-js';
    import BlogPage from "../../../components/BlogPage.svelte";
    import { onMount } from 'svelte';
    import { marked } from 'marked';

    const supabaseUrl = 'https://amaanalwvougcmmejbyf.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtYWFuYWx3dm91Z2NtbWVqYnlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDU5MTgsImV4cCI6MjA1ODkyMTkxOH0.GFS1vqWBQCSJa-wM5aQIxMyxpoWZZlFqEyG7hbEo_DQ';
    const supabase = createClient(supabaseUrl, supabaseKey);

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
        fetchData();

        return () => clearInterval(interval); // Cleanup interval on component destroy
    });

    async function fetchData() {
        try {
            // Fetch blog metadata
            const { data: blogData, error: blogError } = await supabase
                .from('blogs') // Replace with your table name
                .select('*')
                .eq('link', 'work-exp')
                .single();

            if (blogError) {
                console.error(blogError);
                return;
            }

            blogPost = blogData;

            // Fetch chapters for the blog using blog_id
            const { data: chapterData, error: chapterError } = await supabase
                .from('chapters') // Replace with your table name
                .select('chapter_title, chapter_id')
                .eq('blog_id', blogPost.id); // Use the blog's ID to fetch related chapters

            if (chapterError) {
                console.error(chapterError);
                return;
            }

            // Map the chapters into the desired format
            chapters = chapterData.map(chapter => ({
                chapterTitle: chapter.chapter_title,
                chapterId: chapter.chapter_id
            }));

            // Fetch blog content (Markdown file)
            const { data: fileData, error: fileError } = await supabase
                .storage
                .from('markdown-files') // Replace with your storage bucket name
                .download('work-exp.md');

            if (fileError) {
                console.error(fileError);
                return;
            }

            blogContent = await fileData.text();
            blogContent = marked.parse(blogContent);
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
            filename={"work-exp"} 
        />
    {:else}
    <div class="centered-container">
        <h2>This blog took a detour 😬</h2>
        <p>Feel free to <a href="javascript:history.back()" style="color: inherit;">head back</a></p>
    </div>
    {/if}
</main>

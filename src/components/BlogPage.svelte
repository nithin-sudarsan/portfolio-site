<script>
    import Giscus from "@giscus/svelte";
    import blogData from '$lib/blogs.json';
    import {parse, format} from 'date-fns';
    import { capitalize } from "$lib";
    import BackToBlogs from "./BackToBlogs.svelte";
    import TableOfContents from "./TableOfContents.svelte";
    import { onMount } from "svelte";
    import { isDarkMode } from '$lib/themeStore';
    export let blogPost;

    function calculateReadTime(content) {
        const WORDS_PER_MINUTE = 100;
        let totalWords = 0;
        
        // Count words in all chapters
        content.forEach(chapter => {
            // Split by whitespace and count non-empty strings
            const words = chapter.chapterBody.split(/\s+/).filter(word => word.length > 0);
            totalWords += words.length;
        });
        
        // Calculate minutes
        const minutes = Math.ceil(totalWords / WORDS_PER_MINUTE);
        
        // Return formatted string
        return minutes === 1 ? '1 min' : `${minutes} mins`;
    }

    function formatBlogDate(dateString) {
        const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());
        return format(parsedDate, 'MMMM d, yyyy');
    }

    const date = blogPost ? formatBlogDate(blogPost.date) : '';
    $: readTime = blogPost ? calculateReadTime(blogPost.content) : '';
    $: theme = $isDarkMode ? 'dark' : 'light';
</script>

<main>
    <BackToBlogs />
    <div class="blog-metadata">
        <p>{date}</p>
        <p style="font-weight: bold;">•</p>
        <p>{readTime} read</p>
    </div>
    <div class="blog-content">
        <div class="blog-title title2">
            {capitalize(blogPost.title)}
        </div>
        <TableOfContents chapters={blogPost.content} />
        <div class="blog-body">
            {#each blogPost.content as chapter}
            <div class="chapter-section" id={chapter.chapterId}>
                <p class="title4">{capitalize(chapter.chapterTitle)}</p>
                <p>{capitalize(chapter.chapterBody)}</p>
            </div>
            {/each}
        </div>
    </div>

    <div class = "comments">
        <Giscus
            id="comments"
            repo="nithin-sudarsan/portfolio-site"
            repoId="R_kgDONQl2Cw"
            category="General"
            categoryId="DIC_kwDONQl2C84CnZg_"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme}
            lang="en"
        />
    </div>

</main>

<style>
    .blog-metadata{
        display: flex;
        gap: 20px;
        font-size: small;
        color: lightgrey;
    }

    :global(body.light-mode) .blog-metadata {
    color: black;
    }

    .comments {
        margin-top: 40px;
    }

</style>
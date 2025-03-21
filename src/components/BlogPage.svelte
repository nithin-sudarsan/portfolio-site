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

    function formatBlogDate(dateString) {
        const parsedDate = parse(dateString, 'dd-MM-yyyy', new Date());
        return format(parsedDate, 'MMMM d, yyyy');
    }

    const date = blogPost ? formatBlogDate(blogPost.date) : '';

    $: theme = $isDarkMode ? 'dark' : 'light';
</script>

<main>
    <BackToBlogs />
    <div class="blog-metadata">
        <p>{date}</p>
        <p style="font-weight: bold;">•</p>
        <p>{blogPost.timeTaken} read</p>
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
<script>
    import blogData from '$lib/blogs.json';
    import {parse} from 'date-fns';
    import BlogBlock from './BlogBlock.svelte';
    
    // Sort blogs by date (descending order)
    const sortedBlogs = [...blogData].sort((a, b) => {
        const dateA = parse(a.date, 'dd-MM-yyyy', new Date());
        const dateB = parse(b.date, 'dd-MM-yyyy', new Date());
      return dateB - dateA; 
    });
    
    // Get only the first 5 blogs
    const firstFiveBlogs = sortedBlogs.slice(0, 5);
</script>

<main>
    <div class="latest-posts-title">
        <div class="with-WIP">
        <p class="title2">Latest Posts</p>
            <div class="wip-container">
                <div class="wip-badge">
                    <span class="wip-icon">⚠️</span>
                    <span class="wip-text">Work in Progress</span>
                </div>
            </div>
        </div>
        <p class="all-posts"><a href="/blogs">See all posts</a></p>
    </div>
        {#each firstFiveBlogs as blog}
            <BlogBlock content = {blog}/>
        {/each}
</main>

<style>
    a{
        text-decoration: none;
        color: #999;
    }
    .all-posts :hover{
        text-decoration: underline;
    }

    .latest-posts-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .with-WIP {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .wip-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .wip-badge {
        display: flex;
        align-items: center;
        background-color: #ffe81c55;
        color: #ffe81c;
        font-weight: bold;
        padding: 8px 12px;
        border-radius: 30px;
        text-align: center;
        letter-spacing: 1px;
        transition: all 0.3s ease;
        overflow: hidden;
        max-width: 50px;
    }
    
    .wip-badge:hover {
        max-width: 250px; 
        padding: 8px 20px;
    }
    
    .wip-icon {
        margin-right: 0;
        transition: margin 0.3s ease;
    }
    
    .wip-badge:hover .wip-icon {
        margin-right: 8px;
    }
    
    .wip-text {
        white-space: nowrap;
        opacity: 0;
        width: 0;
        transition: opacity 0.3s ease, width 0.3s ease;
    }
    
    .wip-badge:hover .wip-text {
        opacity: 1;
        width: auto;
    }
</style>
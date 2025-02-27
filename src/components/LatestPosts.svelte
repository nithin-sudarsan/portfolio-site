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
        <p class="title2">Latest Posts</p>
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
</style>
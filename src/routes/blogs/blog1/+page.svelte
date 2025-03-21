<script>
    import blogData from '$lib/blogs.json';
    import BlogPage from "../../../components/BlogPage.svelte";
    
    const blog = blogData.find(blog => blog.link === "blog1");
    const blogPost = blog ? blog : null;
</script>

<main>
    <BlogPage blogPost = {blogPost}/>
</main>

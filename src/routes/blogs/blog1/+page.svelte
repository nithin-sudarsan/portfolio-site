<script>
    import blogData from '$lib/blogs.json';
    import BlogPage from "../../../components/BlogPage.svelte";
    import BlogComponent from '$lib/page2.md';
    
    const blog = blogData.find(blog => blog.link === "blog1");
    const blogPost = blog ? blog : null;
</script>

<main>
    <BlogPage blogPost = {blogPost} BlogComponent = {BlogComponent} filename = {"page2"}/>
</main>

<script>
    import blogData from '$lib/blogs.json';
    import BlogPage from "../../../components/BlogPage.svelte";
    import BlogComponent from '$lib/content/work-exp.md';
    
    const blog = blogData.find(blog => blog.link === "work-exp");
    const blogPost = blog ? blog : null;
</script>

<main>
    <BlogPage blogPost = {blogPost} BlogComponent = {BlogComponent} filename = {"work-exp"}/>
</main>

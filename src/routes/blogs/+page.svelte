<script>
    import About from "../../components/About.svelte";
    import Header from "../../components/Header.svelte";
    import BlogBlock from "../../components/BlogBlock.svelte";
    import SecondaryHeader from "../../components/SecondaryHeader.svelte";
    import blogData from '$lib/blogs.json';

    // Group blogs by year
    function groupBlogsByYear(blogs) {
    const grouped = {};

    blogs.forEach(blog => {
        const year = blog.date.split('-')[2];
        if (!grouped[year]) {
        grouped[year] = [];
        }
        
        grouped[year].push(blog);
    });

    return Object.keys(grouped)
        .sort((a, b) => b - a)
        .map(year => ({
        year,
        posts: grouped[year]
        }));
    }

    const blogsByYear = groupBlogsByYear(blogData);
</script>

<main>
    {#each blogsByYear as yearGroup}
      <div class="blogs">
        <div class="year">{yearGroup.year}</div>
        <div class="blog-list">
          {#each yearGroup.posts as post}
            <BlogBlock content = {post}/>
          {/each}
        </div>
      </div>
    {/each}
</main>

<style>
    .blogs{
        margin: 30px 0px;
    }
    .year{
        margin: 10px 0px;
        font-size: large;
    }
</style>

<script>
    import About from "../../components/About.svelte";
    import Header from "../../components/Header.svelte";
    import BlogBlock from "../../components/BlogBlock.svelte";
    import SecondaryHeader from "../../components/SecondaryHeader.svelte";
    export let data; 

     // To store blogs grouped by year
    let loading = data.loading;
    let blogsByYear = data.blogsByYear;
    
</script>

<main>
    {#if loading}
        <div class="loading-container">
            <h2>Loading blogs...</h2>
        </div>
    {:else if blogsByYear.length > 0}
        {#each blogsByYear as yearGroup}
            <div class="blogs">
                <div class="year">{yearGroup.year}</div>
                <div class="blog-list">
                    {#each yearGroup.posts as post}
                        <BlogBlock content={post} />
                    {/each}
                </div>
            </div>
        {/each}
    {:else}
        <div class="loading-container">
            <h2>No blogs found.</h2>
        </div>
    {/if}
</main>

<style>
    .blogs {
        margin: 30px 0px;
    }
    .year {
        margin: 10px 0px;
        font-size: large;
    }
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
    }
</style>

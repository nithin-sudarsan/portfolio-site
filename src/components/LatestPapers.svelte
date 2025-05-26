<script>
    import { fetchPapersFromDB } from '$lib';
    import BlogBlock from './BlogBlock.svelte';
    import { onMount } from 'svelte';
    export let data;
    console.log(data);

    let latestPapers = data.latestPapers; // To store the latest blogs
    let loading = true; // Loading state

    onMount(() => {

        setTimeout(() => {
             loading = false;
        }, 1000);
    });
</script>

<main>
    <div class="latest-posts-title">
        <div class="with-WIP">
            <p class="title2">Latest Papers Reviewed</p>
            <div class="wip-container">
                <div class="wip-badge">
                    <span class="wip-icon">⚠️</span>
                    <span class="wip-text">WIP</span>
                </div>
            </div>
        </div>
        <p class="all-posts"><a href="/papers">See all papers</a></p>
    </div>

    {#if loading}
        <div class="loading-container">
            <h2>Loading latest posts...</h2>
        </div>
    {:else if latestPapers.length > 0}
        {#each latestPapers as blog}
            <BlogBlock content={blog} paper=true/>
        {/each}
    {:else}
        <div class="loading-container">
            <h2>No posts found.</h2>
        </div>
    {/if}

    <hr>
</main>

<style>
    a {
        text-decoration: none;
        color: #999;
    }

    .all-posts:hover {
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
        gap: 10px;
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

    :global(body.light-mode) .wip-badge {
        background-color: #ffe81c76;
        color: black;
    }

    :global(body:not(.light-mode)) .wip-badge {
        background-color: #ffe81c55;
        color: #ffe81c;
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

    .loading-container {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (max-width: 460px) {
        .title2 {
            font-size: 25px;
            width: 95px;
        }

        .with-WIP {
            align-items: center;
            gap: 0px;
        }

        .wip-container {
            display: flex;
            justify-content: center;
            margin: 0px 0px;
        }

        .all-posts {
            width: 100px;
        }
    }

    @media (min-width: 460px) and (max-width: 577px) {
        .title2 {
            width: 125px;
        }
    }

    @media (min-width: 578px) and (max-width: 650px) {
        .title2 {
            width: 150px;
        }
    }
</style>
<script>
    import img from '$lib/images/up-arrow.png';
    export let showOnPx = 150;
    let hidden = true;

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
        return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
        } else {
        hidden = true;
        }
    }

</script>

<style>
    .back-to-top {
        opacity: 1;
        transition: opacity 0.5s, visibility 0.5s;
        position: fixed;
        z-index: 99;
        right: 20px;
        user-select: none;
        bottom: 70px;
        color: white;
    }

    .back-to-top.hidden {
        opacity: 0;
        visibility: hidden;
    }

    .back-to-top:hover {
        cursor: pointer;
    }

    .back-to-top-btn {
        background-color: lightgray;
        border-radius: 5px;
        height: 35px;
        border: none;
        font-size: large;
        padding: 10px;
        padding-bottom: 0px;
        transition: transform 0.3s ease;
    }

    .back-to-top-btn:hover {
        transform: translateY(-3px);
    }

    .back-to-top-img {
    height: 25px;
    width: 25px;
}


</style>

<svelte:window on:scroll={handleOnScroll} />
<div class="back-to-top" on:click={goTop} class:hidden>
    <div class="back-to-top-btn">
        <img
        src="{img}"
        alt="Back to top"
        class="back-to-top-img"
        />
    </div>
</div>
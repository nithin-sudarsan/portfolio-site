<script>
    import About from "../components/About.svelte";
    import Contact from "../components/Contact.svelte";
    import Header from "../components/Header.svelte";
    import Projects from "../components/Projects.svelte";
    import BackToTop from "../components/BackToTop.svelte";
    import ArtWork from "../components/ArtWork.svelte";
    import WorkExp from "../components/WorkExp.svelte";
    import LatestPosts from "../components/LatestPosts.svelte";
</script>

<main>
    <slot><Header /></slot>
    <slot><About /></slot>
    <slot><WorkExp /></slot>
    <slot><Projects /></slot>
    <slot><LatestPosts /></slot>
    <slot><ArtWork /></slot>
    <slot><Contact /></slot>
    <BackToTop />
</main>

<style>

</style>
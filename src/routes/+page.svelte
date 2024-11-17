<script>
  import About from "../components/About.svelte";
  import Contact from "../components/Contact.svelte";
    import Header from "../components/Header.svelte";
  import Projects from "../components/Projects.svelte";
</script>
<main>
    <slot><Header /></slot>
    <slot><About /></slot>
    <slot><Projects /></slot>
    <slot><Contact /></slot>
</main>

<style>
    
</style>
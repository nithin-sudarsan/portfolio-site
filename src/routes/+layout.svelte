<script>
    import { initializeTheme } from '$lib/themeStore';
    import { onMount } from 'svelte';
    import Footer from '../components/Footer.svelte';

    onMount(() => {
        initializeTheme();
    });

</script>
<main>
    <div class="grid-background"></div>
    <div class="dot-pattern"></div>
    <slot></slot>
    <Footer />
</main>
<style>
    main {
        width: 80%;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        transition: background-color 0.7s ease, color 0.7s ease;
        font-size: large;
        z-index: 1;
    }

    /* Grid background */
    .grid-background {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            linear-gradient(rgba(100, 100, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 100, 255, 0.03) 1px, transparent 1px);
        background-size: 20px 20px;
        z-index: -2;
        pointer-events: none;
    }

    /* Dot pattern */
    .dot-pattern {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: radial-gradient(circle, rgba(100, 100, 100, 0.1) 1px, transparent 1px);
        background-size: 30px 30px;
        z-index: -1;
        pointer-events: none;
        z-index: 1;
    }

    :global(body) {
      margin: 0;
      /* font-family: "Geist Mono", monospace; */
      font-family: "Kumbh Sans", sans-serif;
    }
    
    :global(body.light-mode) {
        background-color: #f8f5f1; /* Cream tint instead of stark white */
        color: #000000;
    }
    
    :global(body:not(.light-mode)) {
        background-color: #161617; /* Subtle blue-black instead of pure black */
        color: #f8f5f1; /* Slightly blue-tinted light gray */
    }

    :global(.tooltip.light-mode) {
        background-color: #333;
        color: lightgrey;
    }

    :global(.tooltiptext:not(.light-mode)) {
        background-color: lightgrey;
        color: #333;
    }

    :global(.title1) {
        font-weight: bold;
        font-size : 40px;
    }
    :global(.title2) {
        font-weight: bold;
        font-size : 35px;
    }
    :global(.title3) {
        font-weight: bold;
        font-size : 30px;
    }
    :global(.title4) {
        font-weight: bold;
        font-size : 25px;
    }

    :global(hr) {
        width: 90%;
        opacity: 60%;
        margin-top: 40px;
        text-align: center;
    }

    :global(.tooltip) {
        position: relative;
        display: inline-block;
        text-decoration-style: dotted;
    }

    :global(.tooltip .tooltiptext) {
        visibility: hidden;
        width: 200px;
        /* background-color: #333; */
        /* color: white; */
        text-align: center;
        padding: 8px;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 0.875rem;
    }

    :global(.tooltip:hover .tooltiptext) {
        visibility: visible;
        opacity: 1;
    }

    :global(.light-mode) {
        color: green;
    }
   
</style>
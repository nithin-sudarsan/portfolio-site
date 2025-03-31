<script>
    import { initializeTheme } from '$lib/themeStore';
    import { onMount } from 'svelte';
    import Footer from '../components/Footer.svelte';

    onMount(() => {
        initializeTheme();
    });

</script>
<main>
    <div class="app-container">
        <div class="grid-background"></div>
        <div class="dot-pattern"></div>
        <slot></slot>
    </div>
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
        flex: 1;
    }

    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 85vh; /* This ensures the container takes at least the full viewport height */
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
        background-image: radial-gradient(circle, rgba(100, 100, 100, 0.2) 1px, transparent 1px);
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
   :global(pre) {
        background-color: rgb(41, 50, 63);
        color: white;
        padding: 20px;
        border-style: solid; 
        border-radius: 15px;
        border-width: 1px;
        margin: 20px;
   }

   :global(body.light-mode pre) {
        background-color: lightgrey;
        color: #333;
        border-color: grey;
   }

   :global(code:not(pre code)) {
        background-color: #3c3c4170;
        padding: 2px 7px;
        border-radius: 7px;
        color: rgb(223, 76, 39);
        margin: 2px 2px;
    }

    :global(body.light-mode code:not(pre code)) {
        background-color: #cecbc6;
        padding: 2px 7px;
        border-radius: 7px;
        color: rgb(223, 76, 39);
        margin: 2px 2px;
    }

    :global(.md-a) {
        text-decoration: underline;
        color: inherit;
        font-style: italic;
    }

    /* Dark mode table (default) */
    :global(table) {
        margin: 0 auto;
        color: lightgrey;
        background: hsl(233, 15%, 12%);
        font-size: 12pt;
        border-collapse: separate;
        border-spacing: 0;
        width: 70%;
        border-radius: 10px;
        overflow: hidden;
        border: 3px solid hsl(0, 0%, 28%);
    }

    /* Light mode table */
    :global(body.light-mode table) {
        color: #333;
        background: #f8f8f8;
        border: 3px solid #ccc;
    }

    /* Dark mode th/td */
    :global(th,td) {
        padding: .5em;
        border: 1px solid hsl(0, 0%, 0%);   
    }

    /* Light mode th/td */
    :global(body.light-mode th, body.light-mode td) {
        border: 1px solid #ddd;
    }

    /* Dark mode th */
    :global(th) {
        background: hsl(232, 10%, 16%);
    }

    /* Light mode th */
    :global(body.light-mode th) {
        background: #e6e6e6;
    }

    :global(img:not(.image)) {
        max-width: 90%;
        width: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 15px;
    }

    /* turn off WIP badge */
    :global(.wip-container) {
        display:none !important;  
    }

    /* turn off WIP badge */
    :global(#blog-title) {
        display:none !important;  
    }

    :global(p code){
    display: inline-block; /* Keeps code elements inline while respecting wrapping */
    white-space: nowrap; /* Prevents individual commands from breaking */
    margin-right: 4px; /* Adds spacing between commands */
}

</style>
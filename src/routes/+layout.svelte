<script>

</script>
<main>
    <slot></slot>
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
    }

    :global(body) {
      margin: 0;
      font-family: "Geist Mono", monospace;
    }
    
    :global(body.light-mode) {
      background-color: #ffffff;
      color: #000000;
    }
    
    :global(body:not(.light-mode)) {
      background-color: #000000;
      color: #ffffff;
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
   
</style>
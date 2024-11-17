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
      font-family: 'Courier New', Courier, monospace;
    }
    
    :global(body.light-mode) {
      background-color: #ffffff;
      color: #000000;
    }
    
    :global(body:not(.light-mode)) {
      background-color: #000000;
      color: #ffffff;
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
        /* margin: 20px 0px; */
        margin-top: 40px;
        text-align: center;
    }


   

</style>
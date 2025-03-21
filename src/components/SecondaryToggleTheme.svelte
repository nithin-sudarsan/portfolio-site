<script>
    export let handleToggle;
    export let isDarkMode;
</script>

<main>
    <button on:click={handleToggle} class="secondaryToggleButton">
        <svg id="light-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display={$isDarkMode ? "none" : "block"}>
            <path
                        fill="currentColor"
                        d="
                        M 23, 5
                        A 12 12 0 1 0 23, 25
                        A 12 12 0 0 1 23, 5"
                      />
        </svg>
        <svg id="dark-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display={$isDarkMode ? "block" : "none"}>
            <circle cx="15" cy="15" r="6" fill="currentColor" />
              
                      <line
                        id="ray"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        x1="15"
                        y1="1"
                        x2="15"
                        y2="4"
                      ></line>
              
                      <use href="#ray" transform="rotate(45 15 15)" />
                      <use href="#ray" transform="rotate(90 15 15)" />
                      <use href="#ray" transform="rotate(135 15 15)" />
                      <use href="#ray" transform="rotate(180 15 15)" />
                      <use href="#ray" transform="rotate(225 15 15)" />
                      <use href="#ray" transform="rotate(270 15 15)" />
                      <use href="#ray" transform="rotate(315 15 15)" />
            
        </svg>
    </button>
</main>

<style>
    button {
        cursor: pointer;
    }

    .secondaryToggleButton {
        background-color: lightgray;
        border-radius: 5px;
        height: 40px;
        border: none;
        font-size: large;
        margin: 10px;
        color: black;
        text-decoration: none;
    }
</style>

<script>
    import { onMount } from 'svelte';
    import img from '$lib/images/img.png';
    import SecondaryToggleTheme from './SecondaryToggleTheme.svelte';
    import { isDarkMode, toggleTheme, initializeTheme } from '$lib/themeStore';
  
    onMount(() => {
        initializeTheme();
    });
</script>

<main>
    
    <div style="display: flex;" class = "header-main">
        <div class = "header-left">
            <div class = "title">
                <span class="title1"> Hey! I'm <span class ="tooltip bmac1"><a href="https://buymeacoffee.com/notnothin" target="_blank" class = "bmac2">Nithin</a><span class="tooltiptext">Buy me a coffee ☕️</span></span><span class="notbmac">Nithin</span></span>
                <div class="secondaryToggleButton">
                    <SecondaryToggleTheme isDarkMode = {isDarkMode} handleToggle = {toggleTheme} />
                </div>
            </div>
            <p>
                Welcome to my personal site! I'm not the biggest fan of web development 
                so I'm keeping it simple.
            </p>
        </div>
        <div class= "header-right">
            <div class = "tooltip">
                <a href="https://buymeacoffee.com/notnothin" target="_blank"><img
                src="{img}"
                alt="Profile"
                class="profilePicture"
                /></a>
                <span class="tooltiptext"> Buy me a coffee ☕️</span>
            </div>
            <div>
                <button
                    onclick={toggleTheme}
                    class = "toggleButton"
                > Toggle theme
                </button>
            </div>
        </div>
    </div>
    <hr>
    
</main>

<style>
    
    div:hover {
      transition: transform 0.2s ease;
    }

    .toggleButton{
        background-color: lightgray;
        border-radius: 5px;
        height: 40px;
        width: 160px;
        border: none;
        font-size: large;
        margin: 10px;
        color: black;
    }

    .toggleButton:hover, .secondaryToggleButton:hover{
        cursor: pointer;
    }

    .profilePicture{
        border-radius: 100%;
        height: 110px;
        margin: 5 px;
    }

    .header-right {
        text-align: center;
    }

    /* Mobile styles (smaller than 640px) */
    @media (max-width: 677px) {
        .header-right {
            display: none;
        }
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            justify-content: space-between;
        }
        .notbmac {
            display : none;
        }
        .bmac2 {
            color: inherit;
            text-decoration: none;
        }

    }

    @media (min-width: 678px) {
        .secondaryToggleButton {
            display: none;
        }
        .bmac1 {
            display: none
        }
        
    }

</style>
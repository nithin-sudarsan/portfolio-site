<script>
    import { onMount } from 'svelte';
    import img from '$lib/images/img.png';
  
    let isDarkMode = true;

    function toggleTheme() { 
        const lightIcon = document.getElementById("light-icon");
        const darkIcon = document.getElementById("dark-icon");
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('light-mode');
        if (isDarkMode) {
            lightIcon.setAttribute("display", "block");
            darkIcon.setAttribute("display", "none");
        } else {
            lightIcon.setAttribute("display", "none");
            darkIcon.setAttribute("display", "block");
        }
    }

    onMount(async () => {
		const lightIcon = document.getElementById("light-icon");
        const darkIcon = document.getElementById("dark-icon");
        lightIcon.setAttribute("display", "block");
        darkIcon.setAttribute("display", "none");
	});

</script>

<main>
    
    <div style="display: flex;" class = "header-main">
        <div class = "header-left">
            <div class = "title">
                <span class="title1"> Hey! I'm <span class ="tooltip bmac1"><a href="https://buymeacoffee.com/notnothin" target="_blank" class = "bmac2">Nithin</a><span class="tooltiptext">Buy me a coffee ☕️</span></span><span class="notbmac">Nithin</span></span> 
                <button onclick={toggleTheme} class = "secondaryToggleButton">
                    <svg width="30" height="30" id="light-icon">
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
                    <svg width="30" height="30" id="dark-icon">
                      <path
                        fill="currentColor"
                        d="
                        M 23, 5
                        A 12 12 0 1 0 23, 25
                        A 12 12 0 0 1 23, 5"
                      />
                    </svg>
                  </button>
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
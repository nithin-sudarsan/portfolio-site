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

    let isDragging = false;
    let rotation = 0;
    let startAngle = 0;
    let startRotation = 0;

    function getAngle(event, element) {
    const rect = element.getBoundingClientRect();
    const center = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
    return Math.atan2(
        event.clientY - center.y,
        event.clientX - center.x
    ) * (180 / Math.PI);
    }

    function handleMouseDown(event) {
    isDragging = true;
    const element = event.target;
    startAngle = getAngle(event, element);
    startRotation = rotation;
    }

    function handleMouseMove(event) {
    if (!isDragging) return;

    const element = event.target;
    const currentAngle = getAngle(event, element);
    const angleDiff = currentAngle - startAngle;
    rotation = startRotation + angleDiff;

    // Prevent text selection while dragging
    event.preventDefault();
    }

    function handleMouseUp() {
    isDragging = false;
    }

</script>

<main>
    
    <div style="display: flex;" class = "header-main">
        <div class = "header-left">
            <div class = "title">
                <span class="title1"> Ayo! I'm Nithin </span> 
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
            <div class="profile-container tooltip">
                <img
                    src={img}
                    alt="Profile"
                    class="profilePicture"
                    style="transform: rotate({rotation}deg)"
                    onmousedown={handleMouseDown}
                    onmousemove={handleMouseMove}
                    onmouseup={handleMouseUp}
                    onmouseleave={handleMouseUp}
                />
                <div class="tooltiptext">
                    Try rotating me ;)
                </div>
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

    .profile-container {
        display: inline-block;
        cursor: grab;
    }

    .profile-container:active {
        cursor: grabbing;
    }

    .profilePicture {
        border-radius: 100%;
        height: 110px;
        margin: 5px;
        user-select: none;
        transition: transform 0.1s ease-out;
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
    }

    @media (min-width: 678px) {
        .secondaryToggleButton {
            display: none;
        }
    }

    .tooltip {
        position: relative;
        display: inline-block;
        text-decoration-style: dotted;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 200px;
        background-color: #333;
        color: white;
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

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
</style>
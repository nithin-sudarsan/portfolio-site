<script>
    import { isDarkMode, toggleTheme } from '$lib/themeStore';
    import SecondaryToggleTheme from './SecondaryToggleTheme.svelte';
    
    // You can use this to conditionally apply styles based on the current theme
    let darkMode;
    
    // Subscribe to the store to get updates
    isDarkMode.subscribe(value => {
      darkMode = value;
    });
    
    function handleToggle() {
      toggleTheme();
    }
</script>
  
<div class="theme-toggle-container">
    <SecondaryToggleTheme handleToggle={handleToggle} isDarkMode = {isDarkMode}/>
</div>
  
<style>
    .theme-toggle-container {
        /* position: fixed; */
        bottom: 20px;
        right: 20px; /* Changed from left to right */
        z-index: 100;
    }
    
    button {
        background: none;
        border: none;
        border-radius: 6px;
        padding: 6px;
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
    
    svg {
        vertical-align: middle;
    }
</style>
import { writable } from 'svelte/store';

// Create a writable store for tracking theme state
export const isDarkMode = writable(true);

// Function to safely check if we're in a browser environment
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Function to toggle theme
export function toggleTheme() {
    isDarkMode.update(current => {
        const newValue = !current;
        
        // Only run browser-specific code if in browser
        if (isBrowser) {
            // Update localStorage
            localStorage.setItem('theme', newValue ? 'dark' : 'light');
            
            // Update body class
            if (newValue) {
                document.body.classList.remove('light-mode');
            } else {
                document.body.classList.add('light-mode');
            }
            
            // Update icons if they exist
            const lightIcon = document.getElementById("light-icon");
            const darkIcon = document.getElementById("dark-icon");
            
            if (lightIcon && darkIcon) {
                if (newValue) {
                    lightIcon.setAttribute("display", "block");
                    darkIcon.setAttribute("display", "none");
                } else {
                    lightIcon.setAttribute("display", "none");
                    darkIcon.setAttribute("display", "block");
                }
            }
        }
        
        return newValue;
    });
}

// Function to initialize theme (call this in onMount of your root layout)
export function initializeTheme() {
    if (isBrowser) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        const isDark = savedTheme === 'dark';
        
        isDarkMode.set(isDark);
        
        if (!isDark) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        
        const lightIcon = document.getElementById("light-icon");
        const darkIcon = document.getElementById("dark-icon");
        
        if (lightIcon && darkIcon) {
            if (isDark) {
                lightIcon.setAttribute("display", "block");
                darkIcon.setAttribute("display", "none");
            } else {
                lightIcon.setAttribute("display", "none");
                darkIcon.setAttribute("display", "block");
            }
        }
    }
}
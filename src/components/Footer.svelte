<script>
    import ToggleTheme from './ToggleTheme.svelte'; // Adjust the path as needed
    
    // You can make these dynamic if needed
    const currentYear = new Date().getFullYear();
    const blogName = "Nithin's blog";
  </script>
  
  <footer>
    <div class="footer-content">
      <div class="copyright">
        © {currentYear} • {blogName} <span class="pencil-icon">✏️</span>
      </div>
      <div class="theme-toggle">
        <ToggleTheme />
      </div>
    </div>
  </footer>
  
  <style>
    footer {
      padding: 16px 0;
      width: 100%;
      border-top: 1px solid #eaeaea;
      margin-top: 10px; /* Pushes the footer to the bottom */
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .copyright {
      font-size: 14px;
      color: #666;
    }
    
    .pencil-icon {
      font-size: 16px;
    }
    
    .theme-toggle {
      /* The ToggleTheme component will handle its own styling */
    }
    
    /* For dark mode, if your site supports it */
    :global(body.dark-mode) .copyright {
      color: #aaa;
    }
  </style>
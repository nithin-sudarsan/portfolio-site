<main>
    <div class="header-main">
      <div class="title">
        <a href="/"><span class="title1">Nithin's portfolio</span></a>
      </div>
      <div class="nav-links">
        <div class="backToHome">
          <a href="/blogs">Blogs</a>
        </div> |
        <div class="backToHome">
          <a href="/papers">Paper reviews</a>
        </div> |
        <div class="backToHome">
          <a href="/cv">CV</a>
        </div>
      </div>
    </div>
    <div class="wip-container">
        <div class="wip-badge">
            ⚠️ Work In Progress
        </div>
    </div>
    <hr>
  </main>
  
  <style>
    .header-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    
    .backToHome a, .backToBlogs a {
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease;
      font-style: normal;
    }
    
    .backToHome a:hover, .backToBlogs a:hover {
      text-decoration: underline;
    }
    a{
        text-decoration: none;
        color: #ffffff;
    }

    .wip-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }

    .wip-badge {
        display: inline-block;
        background-color: #ffe81c55;
        color: #ffe81c;
        font-weight: bold;
        padding: 8px 20px;
        border-radius: 30px;
        text-align: center;
        letter-spacing: 1px;
    }

    /* Theme-aware */
    :global(body.light-mode) .title1 {
      color: #333;
    }
    
    :global(body:not(.light-mode)) .title1 {
      color: #f8f5f1
    }
  
    :global(body:not(.light-mode)) a {
      color: f8f5f1;
    }
    :global(body.light-mode) a {
      color: #333
    }

    :global(body:not(.light-mode)) .wip-badge {
      color: f8f5f1;
    }
    :global(body.light-mode) .wip-badge {
      color: #333
    }
  </style>
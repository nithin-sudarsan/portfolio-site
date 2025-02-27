<main>
    <div class="header-main">
      <div class="title">
        <a href="/blogs"><span class="title1">Blog posts</span></a>
      </div>
      <div class="nav-links">
        <div class="backToHome">
          <a href="/">Home</a>
        </div>
        <div class="backToBlogs">
          <a href="/blogs">Blogs</a>
        </div>
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
  </style>
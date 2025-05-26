<script>
    export let content;
    export let paper;
    let pageType = "blogs"; // Default to "blogs", can be set to "papers" if needed
    if (paper) {
        pageType = "papers";
    }
    console.log(pageType)
  </script>
  
  <main>
    <a href="/{pageType}/{content.link}">
      <div class="blog-card">
        <div class="content">
          <p class="blog-title">{content.title}</p>
          <p class="blog-desc">{content.description}</p>
        </div>
        <div class="arrow-container">
          <div class="arrow-default">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
          <div class="arrow-hover">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </a>
  </main>
  
  <style>
    .blog-title {
      font-weight: bold;
      font-size: large;
      margin: 5px 0px 5px 0px;
    }
    .blog-desc {
      color: rgb(155, 155, 155);
      margin: 5px 0px 5px 0px;
    }
    .blog-card {
      padding: 5px 30px;
      border-radius: 6px;
      margin: 10px 0px;
      font-size: small;
      transition: all 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #444;
    }

    /* Theme-aware */
    :global(body.light-mode) .blog-card:hover {
      background-color: #dbd7cda2;
      cursor: pointer;
    }
    
    :global(body:not(.light-mode)) .blog-card:hover {
      background-color: #333;
      cursor: pointer;
    }
    a {
      font-style: normal;
      text-decoration: none;
      color: inherit;
    }
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .arrow-container {
      position: relative;
      width: 24px;
      height: 24px;
      color: #999;
    }
    .arrow-default, .arrow-hover {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(10px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .arrow-hover {
      opacity: 0;
    }
    .blog-card:hover .arrow-default {
      opacity: 0;
    }
    .blog-card:hover .arrow-hover {
      opacity: 1;
      transform: translateX(3px);
    }
  </style>
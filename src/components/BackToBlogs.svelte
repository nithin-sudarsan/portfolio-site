<main>
    <a href="javascript:history.go(-1)">
      <!-- To be renamed to "Go Back button" -->
      <div class="back-to-blogs">
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
        <span class="back-text">Go back</span>
      </div>
    </a>
  </main>
  
  <style>
    a {
      text-decoration: none;
      color: inherit;
    }
    
    .back-to-blogs {
      display: inline-flex;
      align-items: center; /* This centers items vertically */
      gap: 8px; /* This adds space between the arrow and text */
      padding: 10px;
      margin: 10px 0px;
      border-radius: 6px;
      font-size: small;
    }

    :global(body:not(.light-mode)) .back-to-blogs {
      background-color: #222;
    }
    :global(body.light-mode) .back-to-blogs {
      background-color: #dbd7cda2;
    }
    
    .arrow-container {
      position: relative;
      width: 24px;
      height: 24px;
      color: #999;
      transform: rotate(180deg);
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
    .back-to-blogs:hover .arrow-default {
      opacity: 0;
    }
    .back-to-blogs:hover .arrow-hover {
      opacity: 1;
      transform: translateX(3px);
    }
  </style>
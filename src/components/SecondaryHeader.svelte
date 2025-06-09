<script>
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<main>
  <div class="header-main">
    <div class="title">
      <a href="/"><span class="title1">Nithin's portfolio</span></a>
    </div>
    <button class="hamburger" on:click={toggleMenu} aria-label="Toggle navigation">
      <svg width="28" height="28" viewBox="0 0 20 20" fill="currentColor" style="color: inherit;">
        <rect y="3" width="20" height="2" rx="1"/>
        <rect y="9" width="20" height="2" rx="1"/>
        <rect y="15" width="20" height="2" rx="1"/>
      </svg>
    </button>
    <nav class:open={menuOpen}>
      <div class="nav-links">
        <div class="backToHome">
          <a href="/blogs">Blogs</a>
        </div>
        <div class="backToHome">
          <a href="/papers">Paper reviews</a>
        </div>
        <div class="backToHome">
          <a href="/cv">CV</a>
        </div>
      </div>
    </nav>
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
    position: relative;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .backToHome {
    margin: 0.3rem 0;
  }

  .backToHome a {
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease, background 0.2s;
    font-style: normal;
    padding: 0.7rem 1.2rem;
    border-radius: 8px;
    display: block;
  }

  .backToHome a:hover {
    text-decoration: underline;
    background: rgba(255,255,255,0.08);
  }

  .hamburger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    color: inherit;
    padding: 0.5rem;
  }

  nav {
    display: flex;
  }

  /* Responsive styles */
  @media (max-width: 700px) {
    .nav-links {
      flex-direction: column;
      gap: 0.5rem;
      background: var(--background, #beb0a2);
      position: absolute;
      top: 100%;
      right: 0;
      left: 0;
      z-index: 10;
      padding: 1rem 0;
      display: none;
      border-radius: 0 0 10px 10px;
    }
    .hamburger {
      display: block;
      margin-left: auto;
    }
    nav.open .nav-links {
      display: flex;
      padding: 10px;
    }
    nav:not(.open) .nav-links {
      display: none;
    }
  }

  a {
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
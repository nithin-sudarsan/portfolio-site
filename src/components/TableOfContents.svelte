<script>
  import { onMount } from 'svelte';
  import { capitalize } from '$lib';
  
  // Props: chapter content from parent
  export let chapters = [];
  
  // State for expanded/collapsed
  let isExpanded = false;
  
  // Toggle expanded state
  function toggleExpand() {
    isExpanded = !isExpanded;
  }
  
  // Function to handle clicking on a ToC entry
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<div class="toc-container">
  <div class="toc-header" on:click={toggleExpand}>
    <span class="toc-arrow">
        <div class={isExpanded ? "arrow arrow-rotated" : "arrow"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
    </span>
    <span class="toc-title">Table of Contents</span>
  </div>
  
  {#if isExpanded}
    <div class="toc-content">
      <ul class="toc-list">
        {#each chapters as chapter, index}
          <li class="toc-item">
            <a 
              href={'#' + chapter.chapterId} 
              on:click|preventDefault={() => scrollToSection(chapter.chapterId)}
            >
              {capitalize(chapter.chapterTitle)}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .toc-container {
    margin: 20px 0;
    border: 1px solid #444;
    border-radius: 6px;
    overflow: hidden;
  }
  
  .toc-header {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
  }
  
  .toc-arrow {
    color: #999;
    font-size: 14px;
    margin-right: 12px;
  }
  
  .toc-title {
    font-weight: 500;
    font-size: 18px;
  }
  
  .toc-content {
    border-top: 1px solid #444;
    padding: 12px 16px;
  }
  
  .toc-list {
    list-style-type: disc;
    margin: 0;
    padding-left: 24px;
  }
  
  .toc-item {
    padding: 6px 0;
  }
  
  .toc-item a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  
  .toc-item a:hover {
    color: white;
    text-decoration: underline;
  }

  .arrow {
    transition: transform 0.3s ease; /* This creates the smooth animation */
  }

  .arrow-rotated {
    transform: rotate(90deg);
  }

  :global(body:not(.light-mode)) .toc-container {
    background-color: #222;
  }
  :global(body.light-mode) .toc-container {
    background-color: rgba(186, 178, 178, 0.766);
  }

  :global(body.light-mode) .toc-item a {
    color: black;
  }

</style>
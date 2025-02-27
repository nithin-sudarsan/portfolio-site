<script>
    import {page} from '$app/stores';
    
    let cards = [];
    let flipped = [];
    let matched = [];
    let moves = 0;
    let isPlaying = false;
    
    const emojis = ['🌟', '🎨', '🎮', '🎵', '📚', '💻', '🎯', '🎪'];
    
    function initializeGame() {
      cards = [...emojis, ...emojis]
        .sort(() => Math.random() - 0.5)
        .map((emoji, index) => ({ id: index, emoji, isFlipped: false }));
      flipped = [];
      matched = [];
      moves = 0;
      isPlaying = true;
    }
    
    function handleCardClick(id) {
      if (!isPlaying || flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return;
      
      flipped = [...flipped, id];
      
      if (flipped.length === 2) {
        moves += 1;
        const [first, second] = flipped;
        if (cards[first].emoji === cards[second].emoji) {
          matched = [...matched, first, second];
          if (matched.length === cards.length) {
            isPlaying = false;
          }
        }
        setTimeout(() => {
          flipped = [];
        }, 1000);
      }
    }
  </script>
  
  <div class="container">
    <h1>Plot twist:</h1>
    <p class="tooltip">This page is playing hide and seek <span class="tooltiptext">and it's winning 😉</span></p>
    <p>Try heading back to the <a href="/">homepage</a></p>
    <p class="game-intro">Or try your luck with this memory game while you're here!</p>
    
    <div class="game-container">
      {#if !isPlaying && cards.length === 0}
        <button 
          on:click={initializeGame}
          class="start-button"
        >
          Start Game
        </button>
      {/if}
      
      {#if isPlaying}
        <div class="moves">
          Moves: {moves}
        </div>
      {/if}
  
      <div class="card-grid">
        {#each cards as card (card.id)}
          <div
            on:click={() => handleCardClick(card.id)}
            class="card"
            class:flipped={flipped.includes(card.id) || matched.includes(card.id)}
            class:matched={matched.includes(card.id)}
          >
            {#if flipped.includes(card.id) || matched.includes(card.id)}
              {card.emoji}
            {/if}
          </div>
        {/each}
      </div>
  
      {#if !isPlaying && cards.length > 0}
        <div class="game-complete">
          <p>Game Complete! Moves: {moves}</p>
          <button 
            on:click={initializeGame}
            class="start-button"
          >
            Play Again
          </button>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    .container {
      padding: 2rem;
    }
    
    a {
      color: inherit;
    }
    
    a:hover {
      cursor: pointer;
    }
    
    .tooltip {
      cursor: pointer;
      position: relative;
      display: inline-block;
    }
    
    .tooltiptext {
      visibility: hidden;
      background-color: #333;
      color: white;
      text-align: center;
      padding: 5px;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  
    .game-intro {
      color: #666;
      margin: 2rem 0;
    }
  
    .game-container {
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
      padding: 1rem;
    }
  
    .moves {
      color: #666;
      margin-bottom: 1rem;
    }
  
    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin: 1rem 0;
    }
  
    .card {
      aspect-ratio: 1;
      background-color: #f0f0f0;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
  
    .card:hover {
      transform: scale(1.05);
    }
  
    .card.flipped {
      background-color: white;
      transform: rotateY(180deg);
    }
  
    .card.matched {
      opacity: 0.5;
    }
  
    .start-button {
      background-color: #333;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;
    }
  
    .start-button:hover {
      background-color: #444;
    }
  
    .game-complete {
      margin-top: 1rem;
      color: #666;
    }
  </style>
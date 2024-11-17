<script>
    export let link = '';
    export let image = '';
    export let title = '';
  </script>
  
  <main>
    <div class="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div class="image-container">
            <img src={image} alt={title}  class="image"/>
        </div>
        <p class="project-title title2">{title}</p>
      </a>
    </div>
  </main>
  
  <style>
    .project-card {
      width: 275px; /* Fixed width for square */
      aspect-ratio: 1; /* Makes it square */
      border-radius: 8px;
      overflow: hidden;
    }

  
    .project-card a {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
  
    .project-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }

    .image-container {
        position: absolute;
        width: calc(100% + 10px); /* Slightly wider than container */
        height: calc(100% + 10px); /* Slightly taller than container */
        left: -5px; /* Center the expanded container */
        top: -5px;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: filter 0.3s ease;
    }

    .project-card:hover .image-container img {
        filter: blur(5px);
    }
  
    .project-title {
      position: absolute;
      inset: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      font-size: 1.25rem;
      padding: 1rem;
      text-align: center;
      transition: opacity 0.2s ease;
      font-weight: bold;
    }
  
  </style> 
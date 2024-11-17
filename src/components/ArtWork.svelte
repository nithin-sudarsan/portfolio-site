<script>
    import ProjectCard from "./ProjectCard.svelte";
    let desc = "abcd"
    import img1 from '$lib/images/img1.png';
    import img2 from '$lib/images/img2.png';
    import img3 from '$lib/images/img3.png';
    import ArtCard from "./ArtCard.svelte";
  
    const links = {
      link1 : `https://www.behance.net/gallery/122028745/Photography`,
      link2 : `https://www.behance.net/gallery/122029471/Digital-Art`,
      link3 : `https://www.behance.net/gallery/157077967/Finance-App`,
    }
  </script>
  
  <main>
      <span class="title2">Stuff I do when I'm bored</span>
      <div class = "projects">
        <div class="grid-item">
          <ArtCard class = "grid-item" title = "Photography" image = {img1} link = {links.link1}/>
        </div>
        <div class="grid-item">
          <ArtCard class = "grid-item" title = "Digital Art" image = {img2} link = {links.link2}/>
        </div>
        <div class="grid-item">
          <ArtCard class = "grid-item" title = "UI Designs" image = {img3} link = {links.link3}/>
        </div>
      </div>
      
      <hr>
  </main>
  
  <style>
    main {
        margin: 50px 0px;
    }
    .projects {
        /* background-color: green; */
      display: grid;
      grid-template-columns: auto auto auto; 
      margin: 20px 0px;
      justify-content: center;
    }
    .grid-item {
    border-radius: 10px;
    margin: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    /* padding: 0px 20px; */
    text-align: center;
    transition: transform 0.4s ease;
  
    }
  
    .grid-item:hover {
        transform: scale(1.05); 
        cursor: pointer;
    }
  
  
  
    @media (max-width: 1024px) {
      .projects {
        grid-template-columns: auto auto; 
      }
    }
  
    @media (max-width: 677px) {
      .projects {
        grid-template-columns: auto;
      }
      .grid-item {
        width:  90%;
      }
    }
  </style>
<script>
  import ProjectCard from "./ProjectCard.svelte";
  let desc = "abcd"
  const icons = {
    icon1 : `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
  </svg>`
  }

  const descs = {
    desc1 : `A computer vision approach to improve performance of elite athletes in javelin throw`,
    desc2 : `Convolutional Neural Network (CNN) built from scratch only using NumPy and SciPy`,
    desc3 : `Linear Regression build from scratch using numpy and pandas, visualized using matplotlib`,
    desc4 : `Deep learning computer-vision model to monitor patient pain levels by analyzing facial expressions`,
    desc5 : `Full-stack web application that provides a portal for users to try out different APIs that can be added using OpenAPI specification, and see the real-time responses`,
    desc6 : `Java library that offers a comprehensive solution for parsing, transforming, and mapping JSON or XML files to Java beans, driven by a given set of rules`,
  }

  const links = {
    link1 : `https://github.com/nithin-sudarsan/javelin-throw-analysis`,
    link2 : `https://github.com/nithin-sudarsan/convolutional-neural-network`,
    link3 : `https://github.com/nithin-sudarsan/linear-regression-from-scratch`,
    link4 : `https://github.com/nithin-sudarsan/patient-monitoring-system`,
    link5 : `https://github.com/nithin-sudarsan/api-playground`,
    link6 : `https://github.com/nithin-sudarsan/data-mapper`,
  }
</script>

<main>
    <span class="title2">Some of my projects</span>
    <div class = "projects">
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "Javelin Throw Analysis" desc = {descs.desc1} link = {links.link1}/>
      </div>
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "CNN Impl" desc = {descs.desc2} link = {links.link2}/>
      </div>
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "Linear Reg Impl" desc = {descs.desc3} link = {links.link3}/>
      </div>
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "Patient Monitoring System" desc = {descs.desc4} link = {links.link4}/>
      </div>
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "API Playground" desc = {descs.desc5} link = {links.link5}/>
      </div>
      <div class="grid-item">
        <ProjectCard class = "grid-item" icon ={icons.icon1} title = "Data-mapper" desc = {descs.desc6} link = {links.link6}/>
      </div>
    </div>
    
    <hr>
</main>

<style>
  .projects {
    display: grid;
    grid-template-columns: auto auto auto; 
    margin: 20px 0px;
    justify-items: center;
  }
  .grid-item {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 0px 20px;
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
      width:  80%;
    }
  }
</style>
<script>
    export let title = "";
    export let desc = "";
    export let icon;
    export let link = "";
</script>

<main>
    <div class="project-card">
        <a href="{link}" target="_blank">
            <p class="project-icon" > {@html icon}</p>
            <div class="project-content">
                <p class = "project-title">{title}</p>
                <p class = project-desc>{desc}</p>
            </div>
        </a>
    </div>
</main>

<style>
    main {
    justify-content: center;
  }
  
  .project-card {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .project-icon {
    /* background-color: green; */
    margin: 0;  /* Remove default margin */
    height: 50px;  /* Set specific height as needed */
  }

  .project-content {
    /* background-color: blue; */
    margin: 0;  /* Remove margin */
    padding: 10px;  /* Add padding if needed */

  }

  .project-title {
    font-size: 25px;
    font-weight: bold;
    text-transform: capitalize;
    margin: 0;  /* Remove default margin */
    margin-bottom: 10px;
    font-family: "Cousine", monospace;
  }

  .project-desc {
    margin: 0;  /* Remove default margin */
    opacity: 60%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
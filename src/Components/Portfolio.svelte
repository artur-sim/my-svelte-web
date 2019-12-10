<script>
  import Section from "./Section.svelte";
  let filters = ["All", "Online-Store", "Back-end", "Front-end", "API"];
</script>

<style>
  #filters {
    display: inline-block;
    list-style: none;
  }

  #filters > li {
    display: inline-block;
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.3s;
  }

  #filters > li:hover {
    color: #ccc;
  }
</style>

<Section>
  <div slot="header">
    <h1>Portfolio</h1>
  </div>
  <div class="filters">
    <span>Filters:</span>
    <ul id="filters">
      {#each filters as filter}
        <li>{filter}</li>
      {/each}
    </ul>
  </div>
</Section>

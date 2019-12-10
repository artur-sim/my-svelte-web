<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../Ui/Button.svelte";

  let dispatch = createEventDispatcher();
</script>

<style>
  nav {
    grid-area: 1/1/11/5;
    background: #111;
    width: 100%;
    height: 100%;
  }
  .nav-wrapper {
    display: grid;
    height: 100%;
    justify-content: center;
    align-content: center;
  }
</style>

<nav>
  <div class="nav-wrapper">
    <Button mode="nav-btn" type="button" on:click={() => dispatch('showHome')}>
      HOME
    </Button>
    <Button
      mode="nav-btn"
      type="button"
      on:click={() => dispatch('showResume')}>
      RESUME
    </Button>
    <Button
      mode="nav-btn"
      type="button"
      on:click={() => dispatch('showPortfolio')}>
      PORTFOLIO
    </Button>
    <Button mode="nav-btn" type="button" on:click={() => dispatch('showBlog')}>
      BLOG
    </Button>
    <Button
      mode="nav-btn"
      type="button"
      on:click={() => dispatch('showContacts')}>
      CONTACTS
    </Button>
  </div>
</nav>

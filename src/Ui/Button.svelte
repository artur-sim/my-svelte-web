<script>
  export let href = null;
  export let type;
  export let mode = "";
</script>

<style>
  a[type="button"] {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #111;
    border-radius: 2px;
    text-decoration: none;
  }
  a[type="button"]:hover {
    background: #fff;
    color: #222;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .nav-btn {
    border: none;
    background: transparent;
    font-size: 1.6rem;
    font-weight: 200;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
    color: #fff;
    transition: 200ms;
  }

  .nav-btn:after {
    content: "";
    width: 0px;
    height: 1px;
    display: block;
    background: #fff;
    transition: 300ms;
  }
  .nav-btn:hover {
    font-size: 1.8rem;
    cursor: pointer;
  }
  .nav-btn:hover::after {
    width: 100%;
  }
  .dark {
    background: #111;
    color: #fff;
    transition: 0.2s;
  }
  .dark:hover {
    background: #fff;
    color: #222;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .padding {
    padding: 0.5rem 2.5rem;
  }
</style>

{#if href}
  <a {href} type="button">
    <slot />
  </a>
{:else}
  <button class={mode} {type} on:click>
    <slot />
  </button>
{/if}

<script>
  import { fly } from "svelte/transition";
  import Button from "../Ui/Button.svelte";
</script>

<style>
  .content {
    grid-area: 1/5/11/21;
    height: 100%;
    width: 100%;
    background: #fff;
    overflow-y: scroll;
  }
  .gap {
    padding: 2rem;
  }
  address {
    display: grid;
    grid-template-rows: minmax(50px, auto);
    justify-content: center;
    align-items: center;
  }
</style>

<div class="content" transition:fly={{ x: 100, duration: 800 }}>
  <div class="gap">
    <slot name="header">
      <h1>Title</h1>
    </slot>
    <hr />
    <slot />
    <slot name="footer">
      <address>
        <a href="mailto:contact@r2rcoding.com" mode="dark">
          contact@r2rcoding.com
        </a>
      </address>
    </slot>
  </div>
</div>

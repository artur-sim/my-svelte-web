<script>
  import Section from "./Section.svelte";
  import { fade, fly, slide } from "svelte/transition";
  import Button from "../Ui/Button.svelte";
</script>

<style>
  .content {
    grid-area: 1/5/11/21;
    width: 100%;
    height: 100%;
  }
  .content-layout {
    display: grid;
    height: 100%;
    padding-left: 2rem;
    align-content: center;
  }
  .intro > h3 {
    font-size: 2rem;
  }
  .intro > h1 {
    font-size: 3rem;
  }
  .icons {
    margin-top: 1rem;
    cursor: pointer;
  }
</style>

<div class="content" transition:fade={{ delay: 250, duration: 350 }}>
  <div class="content-layout">
    <div class="intro">
      <h3>Hi, I'm</h3>
      <h1>Artur Odekov</h1>
      <h2>Full-Stack Developer</h2>
      <Button type="button" mode="dark padding">Dowload Resume</Button>
    </div>
    <div class="icons">
      <a href="">
        <img src="./media/icons/icons8-linkedin-26.png" alt="" />
      </a>
      <a href="">
        <img src="./media/icons/icons8-youtube-26.png" alt="" />
      </a>
    </div>
  </div>
</div>

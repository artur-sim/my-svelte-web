<script>
  import { onMount, onDestroy } from "svelte";

  import { cubicOut } from "svelte/easing";
  import Nav from "./Components/Nav.svelte";
  import Home from "./Components/Home.svelte";
  import Section from "./Components/Section.svelte";
  import Profile from "./Components/Profile.svelte";
  import Portfolio from "./Components/Portfolio.svelte";
  import Blog from "./Components/Blog.svelte";
  import Contacts from "./Components/Contacts.svelte";

  let selected = Home;

  function showResume() {
    selected = Profile;
  }
  function showPortfolio() {
    selected = Portfolio;
  }
  function showBlog() {
    selected = Blog;
  }
  function showContacts() {
    selected = Contacts;
  }
  function showHome() {
    selected = Home;
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
  main {
    font: 400 14px "Poppins", sans-serif;
  }
  .grid {
    width: 100%;
    height: 100vh;
    background-image: url("./media/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: repeat(10, 1fr);
    align-items: center;
    justify-items: center;
    overflow: hidden;
  }
</style>

<main class="grid">
  <Nav
    on:showHome={showHome}
    on:showResume={showResume}
    on:showPortfolio={showPortfolio}
    on:showBlog={showBlog}
    on:showContacts={showContacts} />
  <svelte:component this={selected} } />
</main>

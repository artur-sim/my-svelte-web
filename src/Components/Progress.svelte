<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  export let value = 0;
  let progress = tweened(0, {
    duration: 3000,
    easing: cubicOut
  });

  progress.set(value);
</script>

<style>
  progress {
    width: 100%;
    height: 4px;
    background-color: #000 !important;
  }
  progress::-moz-progress-bar {
    background-color: #000 !important;
  }

  progress::-webkit-progress-value {
    background-color: #000 !important;
  }
  progress::-webkit-progress-value::after {
    content: ".....";
    color: red;
  }
</style>

<progress value={$progress} />

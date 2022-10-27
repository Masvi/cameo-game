<script>
  import Welcome from "./views/Welcome.svelte";

  let state = "welcome";
</script>

<main>
  {#if state === "welcome"}
    <Welcome />
  {:else if state === "playing"}
    <p>playing</p>
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

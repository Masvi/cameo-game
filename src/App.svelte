<script>
  import Welcome from "./views/Welcome.svelte";
  import { loadCelebrities } from "./api/api";
  import { onMount } from "svelte";

  let state = "welcome";
  let celebritiesPromise;

  const gameStart = async ({ detail }) => {
    const { celebs, lookup } = await celebritiesPromise;
    const selectedCategory = detail.category.toLowerCase();
    state = "playing";
  };

  onMount(() => {
    celebritiesPromise = loadCelebrities();
  });
</script>

<main>
  {#if state === "welcome"}
    <Welcome on:select={gameStart} />
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

<script>
  import Welcome from "./views/Welcome.svelte";
  import Game from "./views/Game.svelte";

  import { loadCelebrities } from "./api/api";
  import { onMount } from "svelte";
  import { select } from "./utils/select";

  let state = "welcome";
  let celebritiesPromise;
  let selectedCategory;

  const gameStart = async ({ detail }) => {
    const { celebs, lookup } = await celebritiesPromise;
    state = "playing";
    selectedCategory = select(celebs, lookup, detail.category.slug);
  };

  onMount(() => {
    celebritiesPromise = loadCelebrities();
  });
</script>

<main>
  {#if state === "welcome"}
    <Welcome on:select={gameStart} />
  {:else if state === "playing"}
    <Game
      selection={selectedCategory}
      on:backHome={() => (state = "welcome")}
    />
  {/if}
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>

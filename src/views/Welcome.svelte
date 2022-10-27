<script>
  import Button from "../components/Button.svelte";

  const categories = [
    { id: 1, name: "Actors" },
    { id: 2, name: "Athletes" },
    { id: 3, name: "Comedians" },
    { id: 4, name: "Creators" },
    { id: 5, name: "Models" },
    { id: 6, name: "Musicians" },
    { id: 7, name: "Reality TV" },
  ];
</script>

<div class="welcome">
  <h1>CAMEO GAME</h1>
  <div class="welcome__subtitle">
    <p>
      On <a target="_blank" href="https://www.cameo.com/" rel="noreferrer"
        >cameo.com</a
      >
      you can buy personalised video clips from everyone from Lindsay Lohan to Ice
      T. But who commands the highest price? Pick a category to play a game:
    </p>
  </div>
  <div>
    {#each categories as category}
      <Button>{category.name}</Button>
    {/each}
  </div>
</div>

<style lang="scss">
  .welcome {
    &__subtitle {
      padding: 1rem;
    }
  }
</style>

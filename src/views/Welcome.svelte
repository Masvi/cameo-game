<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../components/Button.svelte";

  const categories = [
    { slug: "actors", label: "Actors" },
    { slug: "athletes", label: "Athletes" },
    { slug: "comedians", label: "Comedians" },
    { slug: "creators", label: "Creators" },
    { slug: "models", label: "Models" },
    { slug: "musicians", label: "Musicians" },
    { slug: "reality_tv", label: "Reality TV" },
  ];

  const dispatch = createEventDispatcher();

  const handleSelectCategory = (category) => {
    console.log('here....')
    console.log(category);
  }
</script>

<div class="welcome">
  <h1>CAMEO GAME</h1>
  <div class="welcome__subtitle">
    <p>
      On <a target="_blank" href="https://www.cameo.com/" rel="noreferrer"
        >cameo.com</a
      >
      you can buy personalised vslugeo""clips from everyone from Lindsay Lohan to Ice
      T. But who commands the highest price? Pick a category to play a game:
    </p>
  </div>
  <div class="welcome__categories">
    {#each categories as category}
      <Button onClick={handleSelectCategory}>{category.label}</Button>
    {/each}
  </div>
</div>

<style lang="scss">
  .welcome {
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    &__subtitle {
      padding: 1rem;
    }

    &__categories {
      max-width: 450px;
    }
  }
</style>

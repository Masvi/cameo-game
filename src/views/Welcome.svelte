<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { element } from "svelte/internal";
  import Button from "../components/Button.svelte";

  let celebritiesPromise;

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

  const handleClick = (category) => {
    dispatch("select", { category: category.target.innerText });
  };

  const loadCelebrities = async () => {
    const response = await fetch(
      "https://cameo-explorer.netlify.app/celebs.json"
    );

    const data = await response.json();

    const lookup = new Map();
    const subset = new Set();

    data.forEach((element) => lookup.set(element.id, element));
    data.forEach((element) => {
      if (element.reviews >= 50) {
        subset.add(element);
        element.similar.forEach((id) => {
          subset.add(lookup[id]);
        });
      }
    });

    return {
      celebs: Array.from(subset),
      lookup,
    };
  };

  onMount(() => {
    celebritiesPromise = loadCelebrities();
  });
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
  <div class="welcome__categories">
    {#each categories as category}
      <Button {handleClick}>{category.label}</Button>
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

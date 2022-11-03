<script>
  import Card from "../components/Card.svelte";
  import { loadCelebritiesDetails } from "../api/api";
  import Button from "../components/Button.svelte";

  export let selection;
  let buttonValue = { label: "Same price" };

  const promises = selection.map((round) =>
    Promise.all([
      loadCelebritiesDetails(round.a),
      loadCelebritiesDetails(round.b),
    ])
  );

  const handleSamePrice = () => {
    console.log('click...');
  };

  let i = 0;
</script>

<div class="game">
  {#await promises[i] then [a, b]}
    <div class="game__container">
      <div class="game__box">
        <Card celeb={a} />
      </div>
      <div class="game__box">
        <Button handleClick={handleSamePrice} {buttonValue}>Same price</Button>
      </div>
      <div class="game__box">
        <Card celeb={b} />
      </div>
    </div>
  {:catch}
    <p>error... load data</p>
  {/await}
</div>

<style lang="scss">
  .game {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1rem;
    padding: 1rem;

    &__container {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }

    &__box {
      display: flex;
      flex-flow: row wrap;
    }
  }

  @media (min-width: 600px) {
    .game {
      &__container {
        display: flex;
        flex-flow: row;
      }
    }
  }
</style>

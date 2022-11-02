<script>
  import { loadCelebritiesDetails } from "../api/api";

  export let selection;

  const promises = selection.map((round) =>
    Promise.all([
      loadCelebritiesDetails(round.a),
      loadCelebritiesDetails(round.b),
    ])
  );

  let i = 0;
</script>

<div class="game">
  {#await promises[i] then [a, b]}
    <div class="game__container">
      <div class="game__box">
        {a.name}
      </div>
      <div class="game__box">
        <button>same price</button>
      </div>
      <div class="game__box">
        {b.name}
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
    align-items: center;
 
    &__container {
      display: flex;
      padding: 1rem;
      background-color: aqua;
    }

    &__box {
      padding: 1rem;
      background-color: antiquewhite;
    }
  }
</style>

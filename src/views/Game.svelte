<script>
  import Card from "../components/Card.svelte";
  import { loadCelebritiesDetails } from "../api/api";
  import Button from "../components/Button.svelte";
  import Wizard from "../components/Wizard.svelte";

  import { createEventDispatcher } from "svelte";

  export let selection;
  let buttonValue = { label: "Same price" };
  let buttonHome = { label: "home" };

  const dispatch = createEventDispatcher();

  const promises = selection.map((round) =>
    Promise.all([
      loadCelebritiesDetails(round.a),
      loadCelebritiesDetails(round.b),
    ])
  );

  const handleSamePrice = () => {};

  const handleBackHome = () => {
    dispatch("backHome");
  };

  const submit = (left, right, sign) => {
    const result =
      Math.sign(left.price - right.price) === sign ? "correct" : "wrong";

    console.log(result);
  };

  let i = 0;
</script>

<div class="game">
  <div class="game__header">
    <Button handleClick={handleBackHome} buttonValue={buttonHome}>home</Button>
  </div>
  <p>
    Tap on the more monetisable celebrety's face, or tap "same price" button
  </p>
  {#await promises[i] then [a, b]}
    <div class="game__container">
      <div class="game__box">
        <Card celeb={a} on:select={() =>submit(a, b, 1)} />
      </div>
      <div class="game__box">
        <Button handleClick={handleSamePrice} {buttonValue}>Same price</Button>
      </div>
      <div class="game__box">
        <Card celeb={b} on:select={() =>submit(a, b, -1)} />
      </div>
    </div>
    <div class="game__container">
      <Wizard />
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

    &__container {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    &__box {
      display: flex;
      flex-flow: row wrap;
    }

    &__header {
      display: flex;
      width: 100%;
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

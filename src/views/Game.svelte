<script>
  import Card from "../components/Card.svelte";
  import { loadCelebritiesDetails } from "../api/api";
  import Button from "../components/Button.svelte";
  import { sleep } from "../utils/utils";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let selection;

  let buttonValue = { label: "Same price" };
  let buttonHome = { label: "Back to main screen" };
  let result;

  let i = 0;
  let done = false;

  const promises = selection.map((round) =>
    Promise.all([
      loadCelebritiesDetails(round.a),
      loadCelebritiesDetails(round.b),
    ])
  );

  const results = Array(selection.length);
  $: score = results.filter((x) => x === "correct").length;

  const handleBackHome = () => {
    dispatch("backHome");
  };

  const submit = async (left, right, sign) => {
    result = Math.sign(left.price - right.price) === sign ? "correct" : "wrong";

    await sleep(1500);

    results[i] = result;
    result = null;

    if (i < selection.length - 1) {
      i += 1;
    } else {
      done = true;
    }
  };
</script>

<div class="game">
  {#if done}
    <div class="game__done">
      <strong>{score}/{results.length}</strong>
      <Button handleClick={handleBackHome} buttonValue={buttonHome} />
    </div>
  {:else}
    <div class="game__header">
      <Button handleClick={handleBackHome} buttonValue={buttonHome}>home</Button
      >
      <p>
        Tap on the more monetisable celebrety's face, or tap "same price" button
      </p>
    </div>
    {#await promises[i] then [a, b]}
      <div class="game__container">
        <div class="game__box">
          <Card celeb={a} on:select={() => submit(a, b, 1)} />
        </div>
        <div class="game__box">
          <Button handleClick={() => submit(a, b, 0)} {buttonValue}
            >Same price</Button
          >
        </div>
        <div class="game__box">
          <Card celeb={b} on:select={() => submit(a, b, -1)} />
        </div>
      </div>
    {:catch}
      <p>error... load data</p>
    {/await}
  {/if}
</div>

{#if result}
  <img
    class="game__result"
    alt="{result} anser"
    src="src/assets/{result}.svg"
  />
{/if}

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

    &__result {
      position: fixed;
      width: 50vmin;
      height: 50vmin;
      left: calc(50vw - 25vmin);
      opacity: 0.7;
    }

    &__done {
      background-color: red;
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

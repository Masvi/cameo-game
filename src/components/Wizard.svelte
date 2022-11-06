<script>
  let items = [
    { status: false, default: true },
    { status: false, default: false },
    { status: false, default: false },
    { status: false, default: false }, 
    { status: false, default: false },
    { status: false, default: false },
    { status: false, default: false },
    { status: false, default: false },
    { status: false, default: false },
    { status: false, default: false }
  ];

  console.log("-------------");
  console.log(items);
</script>

<div class="wiz">
  <ul class="wiz__list">
    {#each items as item}
      <li class="wiz__bullet" class:wiz__active={item.default}>{item.status}</li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .wiz {
    display: flex;

    &__list {
      display: flex;
      flex-flow: row wrap;
      flex-flow: row wrap;
      list-style-type: none;
    }

    &__bullet {
      color: aqua;
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
      margin: 1rem;
    }

    &__active {
      color: red
    }

  }
</style>

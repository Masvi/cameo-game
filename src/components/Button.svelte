<script>
  export let handleClick;
  export let buttonValue;
</script>

<button class="base-button" on:click={handleClick(buttonValue)}>
 {buttonValue.label}
</button>

<style lang="scss">
  .base-button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    margin: 2px;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  button:hover {
    border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>

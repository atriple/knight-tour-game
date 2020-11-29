<script>
  /**
   * Square.svelte
   * Make each cell aware of its position and value.
   */
  import { createEventDispatcher } from "svelte";
  import { GRID_STATE } from "../data";

  export let value, row, col;

  $: isDark = (row + col) % 2 === 0;
  $: blocked = value === GRID_STATE.BLOCKED;
  $: knight = value === GRID_STATE.CURRENT;

  const dispatch = createEventDispatcher();

  function sendPosition() {
    dispatch("position", {
      row: row,
      col: col,
    });
  }
</script>

<style>
  div {
    padding-top: 100%;
    position: relative;
    border: 2px solid rgb(73, 73, 73);
    margin: 1px;
  }

  /* .dark {
    background-color: #333333;
  }

  .light {
    background-color: #dcccbc;
  } */

  .blocked {
    background-image: url("/img/pawn-black-hi.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 54px;
  }

  .knight {
    background-image: url("/img/knight-black-hi.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 54px;
  }
</style>

<div
  class={isDark ? 'dark' : 'light'}
  class:blocked
  class:knight
  on:click={sendPosition} />

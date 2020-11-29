<script>
  import { afterUpdate } from "svelte";
  export let grid;
  import Square from "./Square.svelte";
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-rows: auto;
  }
</style>

<div
  class="grid-container"
  style="grid-template-columns: repeat({grid.length}, 64px); padding-left: calc(50% - {(64 * grid.length) / 2}px);">
  {#each grid as row_list, row_pos}
    <!-- this piece of shit don't want to update even though grid is updated -->
    {#each row_list as value, col_pos}
      <Square {value} row={row_pos} col={col_pos} />
    {/each}
  {/each}
</div>

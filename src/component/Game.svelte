<script>
  import Board from "./Board.svelte";
  import { getLevelData, getTotalLevel } from "../data";
  import { STATE, currentState, currentLevel } from "../stores";
  import ButtonToMenu from "./button/ButtonToMenu.svelte";

  export let debug = false;

  $: data = getLevelData($currentLevel);

  let score = 0;
  function nextLevel() {
    $currentLevel += 1;
    score = 0;
    localStorage.setItem("currentLevel", $currentLevel);
  }
</script>

<style>
</style>

<p>Level {$currentLevel + 1}</p>
<Board grid={data.grid} />
{#if $currentLevel < getTotalLevel() - 1}
  <button on:click={nextLevel}>Next Level</button>
{/if}
<ButtonToMenu />

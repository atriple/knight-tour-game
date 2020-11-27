<script>
  import { STATE, currentState, currentLevel } from "../stores";

  $currentLevel = Number(localStorage.getItem("currentLevel")) || 0;

  function newGame() {
    $currentLevel = 0;
    $currentState = STATE.GAME;
  }
</script>

<style>
  p:hover {
    color: var(--blue);
    cursor: pointer;
  }
</style>

<p on:click={newGame}>New Game</p>
{#if $currentLevel !== 0}
  <p on:click={() => ($currentState = STATE.GAME)}>
    Continue (Level
    {$currentLevel + 1})
  </p>
{/if}
<p on:click={() => ($currentState = STATE.CHOOSE_LEVEL)}>Choose Level</p>
<p on:click={() => ($currentState = STATE.HOW_TO_PLAY)}>How To Play</p>

<script>
  import ButtonToMenu from "./button/ButtonToMenu.svelte";
  import { STATE, finishedLevel, currentLevel, currentState } from "../stores";

  function selectLevel(level) {
    $currentLevel = level;
    $currentState = STATE.GAME;
    localStorage.setItem("currentLevel", $currentLevel);
  }
</script>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 64px);
    grid-template-rows: auto;
    justify-content: space-evenly;
  }

  .item {
    font-size: 32px;
    padding-top: calc(100% - 32px);
    position: relative;
    border: 2px solid rgb(73, 73, 73);
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .item:hover {
    background-color: var(--red);
    color: var(--white);
    cursor: pointer;
  }

  .conquered {
    background-color: var(--blue);
    color: var(--white);
  }

  .button {
    margin-top: 16px;
  }
</style>

<p>Select a level</p>

<div class="grid-container">
  {#each $finishedLevel as value, index}
    <div
      class="item"
      class:conquered={value === 1}
      on:click={() => selectLevel(index)}>
      {index + 1}
    </div>
  {/each}
</div>

<div class="button">
  <ButtonToMenu />
</div>

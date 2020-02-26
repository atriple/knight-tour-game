<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import {
    choosed_count,
    current_level,
    win_condition,
    current_index,
    level_list,
    loadLastSession,
    resetSession
  } from "./stores.js";
  import Board from "./Board.svelte";
  import Reset from "./Reset.svelte";
  import ProgressBar from "./ProgressBar.svelte";

  let menuState = "begin";

  const playGame = () => {
    menuState = "game";
  };
</script>

<style>
  .header-gap {
    order: 3;
    width: 25%;
    margin-right: 0px;
  }

  .game {
    margin: 50px auto;
    text-align: center;
    width: 50%;
  }
</style>

{#if menuState == 'begin'}
  <h1>Knight Adventure</h1>
  <button on:click={playGame}>New Game</button>
  <button>Continue</button>
{/if}

{#if menuState == 'game'}
  <header class="flex flex-row justify-between">
    <Reset />
    <h2 class="level">Knight Adventure</h2>
    <p>How to play?</p>
  </header>

  <div class="game">
    <Board />
    <ProgressBar />
  </div>
{/if}

<div>

  {#if $choosed_count == $win_condition + 1}
    <div align="center">
      <h1>YOU WIN! 🏆</h1>
    </div>
  {/if}
</div>

<footer>Created by atriple with QM team.</footer>

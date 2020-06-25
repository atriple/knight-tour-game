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
  .button {
    @apply bg-purple-300 rounded-md w-32 h-12 text-center text-xl shadow-md my-12 mx-4;
  }

  .game {
    margin: 50px auto;
    text-align: center;
    width: 50%;
  }
</style>

{#if menuState == 'begin'}
  <div class="w-1/2 h-screen text-center m-auto py-20">
    <h1 class="font-bold">Knight Adventure</h1>
    <button
      on:click={playGame}
      class="button hover:bg-purple-600 hover:text-white">
      New Game
    </button>
    <button class="button hover:bg-purple-600 hover:text-white">
      Continue
    </button>
  </div>
{/if}

{#if menuState == 'game'}
  <header class="flex justify-between">
    <Reset />
    <h2 class="w-1/2 m-auto text-center">Knight Adventure</h2>
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

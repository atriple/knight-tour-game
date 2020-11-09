<script>
  import Board from "./component/Board.svelte";

  const STATE = {
    BEGIN: "begin",
    GAME: "game",
    CHOOSE_LEVEL: "choose level",
    HOW_TO_PLAY: "how to play",
  };

  let current_state = STATE.BEGIN;
  let current_level = {
    id: 1,
    grid: [
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  function newGame() {
    //Reset local storage
    //Start from first level
  }

  function nextLevel() {
    current_level.id++;
  }

  const changeState = (state) => {
    current_state = state;
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff4000;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  p:hover {
    color: var(--blue);
    cursor: pointer;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Knight Adventure</h1>
  {#if current_state === STATE.BEGIN}
    <p on:click={() => changeState(STATE.GAME)}>New Game</p>
    <p>Continue</p>
    <p>Choose Level</p>
    <p on:click={() => changeState(STATE.HOW_TO_PLAY)}>How To Play</p>
  {:else if current_state === STATE.GAME}
    <p>Level {current_level.id}</p>
    <Board grid={current_level.grid} />
    <button on:click={nextLevel}>Next Level</button>
  {:else if current_state === STATE.HOW_TO_PLAY}
    <p>How to play the game</p>
  {/if}

  <p>
    Made by atriple.
    <a href="https://github.com/atriple/knight-tour-game">Github</a>
  </p>
</main>

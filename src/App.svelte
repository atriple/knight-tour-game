<script>
  import Game from "./component/Game.svelte";
  import HowToPlay from "./component/HowToPlay.svelte";
  import SelectLevel from "./component/SelectLevel.svelte";
  import Start from "./component/Start.svelte";
  import { STATE, currentState } from "./stores";

  export const debug = false;
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: var(--red);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  p {
    max-width: auto;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Knight Adventure</h1>
  {#if $currentState === STATE.BEGIN}
    <Start />
  {:else if $currentState === STATE.GAME}
    <Game {debug} />
  {:else if $currentState === STATE.CHOOSE_LEVEL}
    <SelectLevel />
  {:else if $currentState === STATE.HOW_TO_PLAY}
    <HowToPlay />
  {/if}

  <p>
    Made by atriple.
    <a href="https://github.com/atriple/knight-tour-game">Github</a>
  </p>
</main>

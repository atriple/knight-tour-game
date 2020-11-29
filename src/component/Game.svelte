<script>
  import Board from "./Board.svelte";
  import { getLevelData, getTotalLevel, GRID_STATE } from "../data";
  import { currentLevel, finishedLevel } from "../stores";
  import ButtonToMenu from "./button/ButtonToMenu.svelte";

  export const debug = false;

  $: data = getLevelData($currentLevel);
  $: isFinished = visitedCount === data.goal;
  $: if (isFinished) {
    $finishedLevel[$currentLevel] = 1;
  }
  /**
   * Allowed knight moves, consist of list of pair value [x, y]
   */
  const modifierPair = [-2, -1, 1, 2].flatMap((n1) =>
    [-2, -1, 1, 2]
      .map((n2) => [n1, n2])
      .filter((pair) => pair[0] != pair[1] && pair[0] != pair[1] * -1)
  );

  let visitedCount = 0;
  let prevKnightPosition;
  let prevDestination = [];

  /**
   * Mark allowed knight moves position to GRID_STATE.DESTINATION
   */
  function traceDestination(row, col) {
    modifierPair.forEach((pair) => {
      const destination = {
        row: row + pair[1],
        col: col + pair[0],
      };

      const maxSize = data.grid.length; //It's guaranteed that row & column will have the same size on this game
      const isNotInBound =
        destination.row < 0 ||
        destination.col < 0 ||
        destination.row >= maxSize ||
        destination.col >= maxSize;

      if (
        !isNotInBound &&
        data.grid[destination.row][destination.col] === GRID_STATE.EMPTY
      ) {
        data.grid[destination.row][destination.col] = GRID_STATE.DESTINATION;
        prevDestination = [
          ...prevDestination,
          [destination.col, destination.row],
        ];
      }
    });
  }

  /**
   * Set all previous destination to GRID_STATE.EMPTY
   */
  function cleanDestination() {
    prevDestination.forEach((destination) => {
      if (data.grid[destination[1]][destination[0]] === GRID_STATE.DESTINATION)
        data.grid[destination[1]][destination[0]] = GRID_STATE.EMPTY;
    });
    prevDestination = [];
  }

  function nextLevel() {
    $currentLevel += 1;
    visitedCount = 0;
    localStorage.setItem("currentLevel", $currentLevel);
  }

  function resetLevel() {
    visitedCount = 0;
    data = getLevelData($currentLevel);
  }

  function updateGridState(event) {
    const { row, col } = event.detail;
    const gridState = data.grid[row][col];

    if (visitedCount === 0 && gridState === GRID_STATE.EMPTY) {
      visitedCount += 1;
      data.grid[row][col] = GRID_STATE.CURRENT;
      traceDestination(row, col);
      prevKnightPosition = { row: row, col: col };
    } else if (gridState === GRID_STATE.DESTINATION) {
      visitedCount += 1;
      data.grid[row][col] = GRID_STATE.CURRENT;
      cleanDestination();
      traceDestination(row, col);
      data.grid[prevKnightPosition.row][prevKnightPosition.col] =
        GRID_STATE.VISITED;
      prevKnightPosition = { row: row, col: col };
    }
  }
</script>

<style>
  .buttonList {
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .win {
    color: var(--blue);
  }
</style>

<p>Level {$currentLevel + 1}</p>
{#if debug}
  <p>Visited Count {visitedCount}</p>
{/if}
<Board grid={data.grid} on:position={updateGridState} />
{#if isFinished}
  <p class="win">Land Conquered</p>
{/if}
<div class="buttonList">
  <ButtonToMenu />
  <button on:click={resetLevel}>Reset</button>
  {#if $currentLevel < getTotalLevel() - 1}
    <button on:click={nextLevel}>Next Level</button>
  {/if}
</div>

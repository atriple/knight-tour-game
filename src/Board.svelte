<script>
	import Square from './Square.svelte';
	import { current_level, active_grid } from './stores.js';
</script>

<style>
	.board {
		display: grid;
		grid-template-columns: auto;
		justify-content: center;
	}
</style>

<div class="board" style={"grid-template-columns: "+ "auto ".repeat($current_level.size) + ";"}>
	{#each $active_grid as row_list, row_pos}
		{#each row_list as state, col_pos}
			<div>
			<Square {state} {row_pos} {col_pos}/>
			</div>	
		{/each} 

	{/each}
</div>




<script>
	import Square from './Square.svelte';
	import { choosed_count, current_level, win_condition, active_grid } from './stores.js';


	//$: squares = Array.from(Array($current_level.size), () => new Array($current_level.size));
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




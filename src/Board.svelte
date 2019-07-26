<script>
	import Square from './Square.svelte';
	import { choosed_count, current_level, win_condition } from './stores.js';


	//$: squares = Array.from(Array($current_level.size), () => new Array($current_level.size));
</script>

<style>
	h1 {
		text-align: center;
	}

</style>

<h1>Level {$current_level.id}</h1>
<div>
	{#each $current_level.grid as row_list, row_pos}
		{#each row_list as state, col_pos}
			<Square {state} {row_pos} {col_pos}/>
		{/each}
		<br>
	{/each}
</div>





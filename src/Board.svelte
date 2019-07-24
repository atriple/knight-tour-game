<script>
	import Square from './Square.svelte';
	
	export let level;
	export let size;

	let squares = Array.from(Array(4), () => new Array(4).fill(''))
</script>

<style>
	h1 {
		text-align: center;
	}

</style>

<h1>Level {level}</h1>
<div>
	{#each state.squares as row_list, row}
		{#each row_list as cell, col}
			<Square {row_list} on:click={e => handleClick(row)}/>
		{/each}
		<br>
	{/each}
</div>


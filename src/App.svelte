<script>
	import { choosed_count, current_level, win_condition, current_index, level_list} from './stores.js';
	import Board from './Board.svelte';
	import NextButton from './NextButton.svelte'
	import Reset from './Reset.svelte'

	let game_menu = true;
	let game_finish = false;
</script>

<div class="game">
	{#if game_menu}
	<div>
		<h1>Welcome to the game!</h1>
		<button on:click={() => game_menu = false}>Start Game</button>
	</div>
	{:else if game_finish}
		<h1>Finished the Game!</h1>
	{:else}
	<div>
		<Board />
		<Reset />
		{#if $choosed_count == $win_condition + 1 && $current_index < $level_list.length - 1}
		<NextButton />
		{/if}
		{#if $choosed_count == $win_condition + 1 && $current_index == $level_list.length - 1}
		<button on:click={() => game_finish = true}>Finish</button>
		{/if}
	</div>	
	{/if}
</div>

<!-- <h2>Debug Status</h2>
<h3>
Winning cond {$win_condition} Choosed count {$choosed_count}
Index {$current_index}
</h3> -->


<style>
	.game {
		font: 14px "Century Gothic", Futura, sans-serif;
		margin: auto;
		display: flex;
		flex-direction: row;
	}

	.game-info {
		margin-left: 20px;
	}

	ol {
		padding-left: 30px;
	}
</style>

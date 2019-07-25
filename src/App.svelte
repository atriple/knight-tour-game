<script>
	import { choosed_count, current_level, win_condition, current_index } from './stores.js';
	import Board from './Board.svelte';
	import NextButton from './NextButton.svelte'

	let game_active = false;
	let game_finish = false;
</script>

<div class="game">
	{#if game_active}
	<div>
		<Board />
		{#if $choosed_count == $win_condition}
		<NextButton />
		{/if}
	</div>
	{:else}
	<div>
		<h1>Welcome to the game!</h1>
		<button on:click={() => game_active = true}>Start Game</button>
	</div>
	{/if}
</div>

<h2>Debug Status</h2>
<h3>
Winning cond {$win_condition} Choosed count {$choosed_count}
Index {$current_index}
</h3>


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

<script>
	import { choosed_count, current_level, win_condition, current_index, level_list} from './stores.js';
	import Board from './Board.svelte';
	import NextButton from './NextButton.svelte';
	import Reset from './Reset.svelte';
	import ProgressBar from './ProgressBar.svelte';

	let game_menu = true;
	let game_finish = false;
</script>

	{#if game_menu}
		<div class="menu">
			<h1>GAME TITLE</h1>
			<button on:click={() => game_menu = false}>START</button>
		</div>
	{/if}


<div>
	{#if game_finish}
		<h1>Finish!</h1>
	{:else if !game_menu}
			<header>
				<Reset /> 
				<h2 class="level">LEVEL {$current_level.id}</h2>	
				<div class="header-gap"></div>	
			</header>
		<hr> 
		
		<div class="game">
			<Board />
			<ProgressBar />
		</div>
		
		<div class="game-button">
			{#if $choosed_count == $win_condition + 1 && $current_index < $level_list.length - 1}
			<NextButton />
			{:else}
			<button class="btn-disable">Next Level</button>
			{/if}
			{#if $choosed_count == $win_condition + 1 && $current_index == $level_list.length - 1}
			<button on:click={() => game_finish = true}>Finish</button>
			{/if}
		</div>	
	{/if}
</div>

<footer>Created by atriple with QM team.</footer>

<style>
	header{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.level{
		text-align: center;
		order: 2;
		width: 50%;
		margin: auto;
	}

	.header-gap{
		order: 3;
		width: 25%;
		margin-right:0px;
	}

	.game {
		margin: 50px auto;
		text-align: center;
		width: 50%;
	}

	.game-button {
		text-align: right;
		margin: auto;
		margin-right: 25px;
	}

	footer{
		position: absolute;
		bottom: 0;
		width: auto;
		padding-bottom: 10px;
		color: #C4A5B5;
	}

	.btn-disable{
		color: gray;
	}

	.menu{
		padding-top: 2%;
		margin: auto;
  		width: 50%;
		text-align: center;
	}
</style>

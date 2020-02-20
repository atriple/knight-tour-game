<script>
	import { 
		choosed_count, 
		current_level, 
		win_condition, 
		current_index, 
		level_list,
		loadLastSession,
		resetSession
		} from './stores.js';
	import Board from './Board.svelte';
	import Reset from './Reset.svelte';
	import ProgressBar from './ProgressBar.svelte';
</script>

<div>
	<header>
		<Reset /> 
		<h2 class="level">Knight Adventure</h2>	
		<div class="header-gap"></div>	
	</header>	
	<hr> 
	<div class="game">
		<Board />
		<ProgressBar />
	</div>
	{#if $choosed_count == $win_condition + 1}
	<div align="center">
		<h1>YOU WIN! 🏆</h1>
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

	.danger{
		background:maroon;
		color: white;
		border: none;
	}

	.menu{
		padding-top: 2%;
		margin: auto;
  		width: 50%;
		text-align: center;
	}
</style>

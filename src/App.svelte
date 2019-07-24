<script>
	import Board from './Board.svelte';
	
	const level = [
        {
            level: 1,
            size: 4,
            block: [[0,0], [3,0]]
        },
        {
            level: 1,
            size: 5,
            block: [
                [0,0],[3,0],[4,0],
                [0,1],[2,1],
                [4,2],
                [1,3],[2,3],
                [0,4],[3,4],[4,4]
            ]
        }
    ]
</script>

<div class="game">
	<div class="game-board">
		<Board />
	</div>
	<div class="game-info">
		<div></div>
		<ol></ol>
	</div>
</div>

<style>
	h1 {
		color: purple;
	}

	.game {
		font: 14px "Century Gothic", Futura, sans-serif;
		margin: 20px;
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

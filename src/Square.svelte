<script>
	import { initiated, current_level, choosed_count, win_condition, active_grid } from './stores.js';

	export let state;
	export let row_pos;
	export let col_pos;

	/*
	current_level.subscribe(val => {
		if(isExist(val.blocks, str_pos)){
			state.blocked = true;
		}
	})
	
	function isExist(list, val){
		for(let item of list){
			if(item === val) return true;
		}
		return false
	}
	*/

	function choose(){
		if(!$initiated && state == 0){
			console.log("Initial Button Pressed");
			$active_grid[row_pos][col_pos] = 4;
			enableKnightMove(row_pos, col_pos);	
			choosed_count.update(n => n + 1);
			$initiated = true;
		}

		if(state == 3){
			console.log("Moveable button pressed");
			$active_grid[row_pos][col_pos] = 2;
			whitenMove();
			enableKnightMove(row_pos, col_pos);
			choosed_count.update(n => n + 1);
		}

		if(state == 5){
			console.log("Win Achieved!");
			whitenMove();
			$active_grid[row_pos][col_pos] = 2;
			choosed_count.update(n => n + 1);
		}
	}

	function enableKnightMove(row, col){
		var modifiers = [1, 2, -1, -2];
		for (var i in modifiers){
			for (var j in modifiers){
				if (modifiers[j] == modifiers[i]) continue;
				if (modifiers[j] == -modifiers[i]) continue;
				// console.log(modifiers[j]);
				// console.log(typeof modifiers[j]);
				var r = Number(row)+Number(modifiers[i]);
				var c = Number(col)+Number(modifiers[j]);
				// console.log(r);
				// console.log(c);
				if (r >= 0 && c >= 0 && r < $current_level.size && c < $current_level.size){
					if($active_grid[r][c] == 0){
						$active_grid[r][c] = 3;
					}
					if($choosed_count == $win_condition - 1 && $active_grid[r][c] == 4){
						$active_grid[r][c] = 5;
					}
				}			
			}		
		}	
	}

	function whitenMove(){
		for(let i in $active_grid){
			 for(let j in $active_grid[i]){
				if($active_grid[i][j] == 3) $active_grid[i][j] = 0;
			}
		}
	}
	
</script>

<button class:blocked={state == 1} class:pressed={state == 2} class:pressable={state == 3} class:initial={state == 4} class:win={state == 5} on:click={choose}>
</button>

<style>
	button {
		background: #fff;
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		line-height: 34px;
		height: 34px;
		margin-right: -1px;
		margin-top: -1px;
		margin-bottom: -1px;
		padding: 0;
		text-align: center;
		width: 34px;
	}
	button:focus { 
		outline: none; 
	}

	.pressed {
		background-color: #ff3e00;
	}

	.blocked {
		background-color: gray;
	}

	.pressable{
		background-color: lightgreen;
	}

	.initial{
		background-color:lightblue;
	}
	
	.win{
		background-color:goldenrod;
	}
</style>
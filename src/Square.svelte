<script>
	import { current_level, choosed_count } from './stores.js'

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
		if(state == 0){
			console.log("Pressed");
			$current_level.grid[row_pos][col_pos] = 2;
			enableKnightMove(row_pos, col_pos);
			choosed_count.update(n => n + 1);
		}
		//if state is blocked, make sure they don't react to anything
		//if state is pressed, make sure they don't react to anything
		//if state is available, you can process to get to pressed status, also make sure count the variables
		//if choosed_count reach the choosed_target, declare win(global var from stores.js)
	}

	function enableKnightMove(row, col){
		var modifiers = [1, 2, -1, -2];
		for (var i in modifiers){
			for (var j in modifiers){
				if (modifiers[j] == modifiers[i]) continue;
				if (modifiers[j] == -modifiers[i]) continue;
				var r = Number(row)+Number(modifiers[i]);
				var c = Number(col)+Number(modifiers[j]);

				if (r >= 0 && c >= 0 && r < $current_level.size && c < $current_level.size){
					$current_level.grid[r][c] = 3;
				}			
			}		
		}	
	}

	function whitenMove(){
		for(let )
	}
	
</script>

<button class:pressed={state == 2} class:blocked={state == 1} class:pressable={state == 3} on:click={choose}>
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
</style>
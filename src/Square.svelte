<script>
	import { current_level, choosed_count } from './stores.js'
	let state = {
		blocked: false,
		pressed: false,
		moveable: true
	};
	let active = false;

	export let row_pos;
	export let col_pos;
	let str_pos = row_pos.toString() + ',' + col_pos.toString();

	
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

	function choose(){
		if(state.blocked == false && state.pressed == false && state.moveable == true){
			console.log("Pressed");
			state.pressed = true;
			choosed_count.update(n => n + 1)
		}
		//if state is blocked, make sure they don't react to anything
		//if state is pressed, make sure they don't react to anything
		//if state is available, you can process to get to pressed status, also make sure count the variables
		//if choosed_count reach the choosed_target, declare win(global var from stores.js)
	}
</script>

<button class:pressed={state.pressed} class:blocked={state.blocked} on:click={choose}>
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
</style>
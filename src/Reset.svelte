<script>
    import { current_level, active_grid, initiated, choosed_count, knight_row_pos, knight_col_pos } from './stores.js';
    import { deepCopy } from './utils.js';

    function reset(){
        //console.log("Reset button pressed");
        $active_grid = deepCopy($current_level.grid);
        initiated.set(false);
        choosed_count.set(0);
        $knight_row_pos = null;
        $knight_col_pos = null;
    }

</script>

<style>
    button{
        background: palevioletred;
        color: white;
        border: none;
        align-self: center;
        text-align: center;
        width: 5%;
        min-width: 75px;
        margin-left: 0px;
        margin-top: 0px;
        margin-bottom:0px;
        margin-right: 20%;
    }

    button:hover{
        background-color: pink;
    }

    button:active {
	    position: relative;
	    top: 1px;
    }

</style>

<button on:click={reset}>
    Reset
</button>

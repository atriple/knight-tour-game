<script>
    import { choosed_count, current_index, level_list, initiated, initial_current_grid_state } from './stores.js';

    function reset(){
        console.log($initial_current_grid_state);
        $level_list[$current_index].grid = $initial_current_grid_state.slice();
        // console.log("What?")
        // $current_level.grid = $level_list[$current_index].grid;
        //  console.log("Went through?")
        // level_list.subscribe(val => current_level.set(val[$current_index]));
        // //current_level.subscribe(val => win_condition.set((val.size ** 2) - val.blocks));
        $initiated = false;
        // choosed_count.set(0);
        }

</script>

<button on:click={reset}>
Reset
</button>
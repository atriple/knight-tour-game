<script>
    import { deepCopy, current_level, active_grid, initiated, choosed_count } from './stores.js';

    function reset(){
        console.log("Reset button pressed");
        $active_grid = deepCopy($current_level.grid);
        initiated.set(false);
        choosed_count.set(0);
        }

</script>

<button on:click={reset}>
Reset
</button>
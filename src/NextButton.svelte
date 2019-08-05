<script>
    import { choosed_count, current_level, win_condition, current_index, level_list, initiated } from './stores.js';

    function nextLevel(){
        current_index.update(n => n + 1);
        $current_level = $level_list[$current_index]
        $initiated = false;
        choosed_count.set(0);
    }

</script>

<button on:click={nextLevel}>
Next Level
</button>
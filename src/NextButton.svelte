<script>
    import { choosed_count, current_level, win_condition, current_index, level_list } from './stores.js';

    let index;

    function nextLevel(){
        current_index.update(n => n + 1);
        current_index.subscribe(val => index = val);
        level_list.subscribe(val => current_level.set(val[index]));
        current_level.subscribe(val => win_condition.set((val.size ** 2) - val.blocks.length));
        choosed_count.set(0);
        console.log("Complete");}

</script>

<button on:click={nextLevel}>
Next Level
</button>
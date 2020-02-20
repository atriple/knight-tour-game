<script>
    import { choosed_count, current_level, current_index, level_list, initiated, score, hint_visible } from './stores.js';

    function nextLevel(){
        $score[$current_index] = 2;
        localStorage.setItem('score', JSON.stringify($score));
        current_index.update(n => n + 1);
        localStorage.setItem('level_index', $current_index);
        $current_level = $level_list[$current_index]
        $initiated = false;
        $hint_visible = false;
        choosed_count.set(0);    
    }

</script>

<button on:click={nextLevel}>
Pass
</button>

<style>
    button{
        background-color: #f9e090;
    }

</style>

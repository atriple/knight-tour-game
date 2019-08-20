<script>
    import { choosed_count, current_level, current_index, level_list, initiated } from './stores.js';

    function nextLevel(){
        current_index.update(n => n + 1);
        localStorage.setItem('level_index', $current_index);
        $current_level = $level_list[$current_index]
        $initiated = false;
        choosed_count.set(0);
    }

</script>

<button>
Pass
</button>

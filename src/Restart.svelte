<script>
    import { resetSession } from './stores.js';

    function restart(){
        resetSession();
    }
</script>

<button on:click={restart}>
New Game
</button>
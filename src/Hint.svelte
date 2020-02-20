<script>
    import { current_level, hint_visible } from './stores.js';
    import { fade } from 'svelte/transition';
</script>

{#if !$hint_visible}
    <button on:click={() => $hint_visible = true}>Hint</button>
{:else}
    <span transition:fade>
        {$current_level.hint}
    </span>
    
{/if}


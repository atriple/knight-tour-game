<script>
	import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { choosed_count, win_condition} from './stores.js';

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
    });
    
    choosed_count.subscribe(val => {
        progress.set(val / ($win_condition + 1));
    });
    
</script>

<style>
    .bar{
        margin: 10px;
    }

    progress[value]{
        border-radius: 10px;
        width: 500px;
    }

	progress[value]::-webkit-progress-bar {
        background-color: #F1F2EF;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
    }

    progress[value]::-webkit-progress-value{
        background-color: limegreen;
        border-radius: 10px;
    }
    
</style>

<div class="bar">
    <progress value={$progress}></progress>
    {$choosed_count} / {$win_condition + 1}
</div>
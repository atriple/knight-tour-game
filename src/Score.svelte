<script>
    import { score } from './stores.js';
</script>

<div class="score" align="center">
    {#each $score as state, index}
        <span class="dot" class:completed={state == 1} class:passed={state == 2}>{index + 1}</span>
    {/each}
</div>


<style>
.dot {
    height: 25px;
    width: 25px;
    background-color: #F1F2EF;
    color: gray;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    margin: 2px 5px 0px;
}

.completed {
    background-color: limegreen;
    color: white;
}

.passed {
    background-color: red;
    color: white;
}

</style>
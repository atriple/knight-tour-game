<script>
  import { STATE, currentState } from "../../stores";
</script>

<button on:click={() => ($currentState = STATE.BEGIN)}>Back to menu</button>

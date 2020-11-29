<script>
  import ButtonToMenu from "./button/ButtonToMenu.svelte";
</script>

<style>
  p {
    margin: auto;
  }

  div {
    margin-top: 24px;
  }
</style>

<p>Conquer the land for the glory of our king!<br /></p>
<p>
  <br />The game has similar mechanism to
  <a href="https://en.wikipedia.org/wiki/Knight%27s_tour">Knight Tour Problems</a>.
  <br />
  You have a piece of knight chess where you need to visit every empty block
  once.
  <br />
</p>
<p>You can start your campaign at any position you like!</p>
<div>
  <ButtonToMenu />
</div>

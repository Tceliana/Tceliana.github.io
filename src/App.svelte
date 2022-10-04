<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "@/Pages/Home.svelte";
  import Header from "@/Components/Header/Header.svelte";
  import Games from "@/Pages/Games.svelte";
</script>

<main
  style="
--COLOR_PRIMARY:            #fae035;
--COLOR_SECONDARY:          #0064c8;
--COLOR_TERTIARY:           #FFBC20;
--COLOR_BEACH:              #008aff;
--COLOR_BACKGROUND:         #ffffff;
--COLOR_BUBBLE_BACKGROUND:  #4f4f4f;
"
>
  <Header />
  <Router>
    <Route path="/" component={Home} />
    <Route path="/games" component={Games} />
  </Router>
</main>

<style>
</style>

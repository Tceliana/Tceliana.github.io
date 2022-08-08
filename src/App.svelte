<script lang="ts">
    import { Router, Route } from "svelte-routing";

    import Home from "./Pages/Home.svelte";
    import Header from "./Components/Header/Header.svelte";
    import Games from "./Pages/Games.svelte";
</script>

<main
    style="
--COLOR_PRIMARY:#fae035;
--COLOR_SECONDARY:#0064c8;
--COLOR_BEACH: #008aff;
"
>
    <Header />
    <Router>
        <Route path="/" component={Home} />
        <Route path="/games" component={Games} />
    </Router>
</main>

<style>
    main {
        min-height: 1000vh;
    }
</style>

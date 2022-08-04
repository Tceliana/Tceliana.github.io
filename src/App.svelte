<script lang="ts">
    import Home from "./Pages/Home.svelte";
    import Header from "./Components/Header.svelte";
    import Rating from "./Components/Rating.svelte";
</script>

<main
    style="
--COLOR_PRIMARY:#fae035;
--COLOR_SECONDARY:#0064c8;
"
>
    <Header />
    <Home />
    <Rating
        name="CarlosMushuTV"
        stars={5}
        review="Intento aprender de su contenido pero me es imposible por que me hornea demasiado verlo "
        startPercentage={10}
        endPercentage={20}
        mode="L"
    />
    <Rating
        name="WilmiRosa"
        stars={5}
        review="Mejor programador de UwU!"
        startPercentage={40}
        endPercentage={50}
        mode="R"
    />
</main>

<style>
</style>

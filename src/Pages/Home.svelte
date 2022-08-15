<script lang="ts">
    import Bird             from "../Components/Bird.svelte";
    import LandingStory     from "../Components/Story/LandingStory.svelte";
    import RatingFiller     from "../Components/Ratings/RatingFiller.svelte";
    import Fireworks        from "../Components/Decorations/Fireworks.svelte";
    import KeyboardTeclas   from "../Components/KeyboardTeclas.svelte";

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () 
    {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });
</script>

<RatingFiller />

<div style="min-height: 1000vh; z-index=-2">
    <div class="rows">
        <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); margin-top:20%; ">Teclas</h1>
        <Bird />
        <p>The story begins.</p>
        <LandingStory />
        <img class="heart" src="/Images/heart.svg" alt="heart SVG <3"/>
        <Fireworks showTrigger /> 
        <KeyboardTeclas />
    </div>
</div>


<style>
    .heart {
        width: 120vw;
        user-select:none;
        position:absolute;
        z-index:-1;
    }
</style>

<script lang="ts">
    import Bird             from "../Components/Bird.svelte";
    import LandingStory     from "../Components/Story/LandingStory.svelte";
    import RatingFiller     from "../Components/Ratings/RatingFiller.svelte";
    import Fireworks        from "../Components/Decorations/Fireworks.svelte";
    import KeyboardTeclas   from "../Components/KeyboardTeclas.svelte";
    import HomeFooter       from "../Components/HomeFooter/HomeFooter.svelte";
    import Matrix           from "../Components/Matrix.svelte";
    let title: HTMLElement = null;
    window.addEventListener("scroll", function () 
    {
        let value: number = window.scrollY;
        title.style.rotate = value + "deg";
        title.style.paddingLeft = value * 5 + "px";
    });
</script>

<RatingFiller />
<div style="min-height: 1000vh; z-index=-2">
    <div class="rows">
        <h1 bind:this={title} class="title">Teclas</h1>
        <p>The story begins.</p>
        <LandingStory />
        <img class="heart" src="/Images/heart.svg" alt="heart SVG <3"/>
        <Fireworks showTrigger /> 
        <KeyboardTeclas show />
        <HomeFooter />
    </div>
</div>


<style>
    .heart {
        width:          120vw;
        user-select:    none;
        position:       absolute;
        z-index:        -1;
        top:            0;
    }

    .title
    {
        font-family:    earthsmightiestbold; 
        color:          var(--COLOR_PRIMARY); 
        margin-top:     0%; 
        margin-bottom:  0;
    } 

</style>

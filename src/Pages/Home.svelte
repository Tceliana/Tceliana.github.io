<script lang="ts">
    import LandingStory     from "../Components/Story/LandingStory.svelte";
    import RatingFiller     from "../Components/Ratings/RatingFiller.svelte";
    import Fireworks        from "../Components/Decorations/Fireworks.svelte";
    import KeyboardTeclas   from "../Components/KeyboardTeclas.svelte";
    import HomeFooter       from "../Components/HomeFooter.svelte";
    import PaperPlane       from "../Components/Decorations/PaperPlane.svelte";
import Plane from "../Components/Decorations/plane.svelte";
    let title: HTMLElement = null;
    window.addEventListener("scroll", function () 
    {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });

</script>

<RatingFiller />
<Plane />
<PaperPlane />
<Fireworks showTrigger />

<div class="mainContainer">
    <div class="rows">
        <h1 bind:this={title} class="title">Teclas Me Hornea Mushu</h1>
        <p>The story begins.</p>
        <LandingStory />
        <img class="heart" src="/images/heart.svg" alt="heart SVG <3"/>
        <KeyboardTeclas show />
        <HomeFooter />
    </div>
</div>


<style>
    .mainContainer
    {
        min-height: 1000vh; 
        z-index:-100;
    }
    
    .heart {
        width:          120vw;
        user-select:    none;
        position:       absolute;
        z-index:        -100;
        top:            0;
    }

    .title
    {
        font-family:    earthsmightiestbold; 
        color:          var(--COLOR_PRIMARY); 
        margin-top:     0%; 
        margin-bottom:  0;
        white-space:    nowrap;
    } 

</style>

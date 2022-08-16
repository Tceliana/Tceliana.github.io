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
        <Bird />
        <div class="footer">
            <!-- <img class="footer_image" src="/Images/TcelaDibus/big_tcela.png" alt="Big tcela as the footer of the webpage"/> -->
            <div class="footer_image" />
        </div>
    </div>
</div>


<style>
    .heart {
        width: 120vw;
        user-select:none;
        position:absolute;
        z-index:-1;
        top:0;
    }

    .title
    {
        font-family: earthsmightiestbold; 
        color: var(--COLOR_PRIMARY); 
        margin-top:0%; 
        margin-bottom: 0;
    } 
        

    .footer
    {
        position:absolute;
        bottom:0;
        margin-bottom:0;
        width:100vw;
        height:50vh;
    }

    .footer_image{
        background-image:       url("/Images/TcelaDibus/big_tcela.png");
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 185%;
        width:100%;
        height:100%;
        margin-bottom: 0%;
        position:absolute;
    }
</style>

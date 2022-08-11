<script lang="ts">
    import Bird from "../Components/Bird.svelte";
    import LandingStory from "../Components/Story/LandingStory.svelte";
    import RatingFiller from "../Components/Ratings/RatingFiller.svelte";
    import RatingFireworks from "../Components/Ratings/RatingFireworks.svelte";

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });
</script>
<RatingFireworks 
    showTrigger
    autoPlayFireworks
/>
<RatingFiller />

<div style="min-height: 1000vh;">
    <div class="rows">
        <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">Teclas</h1>
        <Bird />
        <p>The story begins.</p>
        <LandingStory />
        <img class="hearth" src="/Images/hearth.svg" alt="hearth SVG" />
    </div>
</div>


<style>
    .hearth {
        width: 120vw;
    }
</style>

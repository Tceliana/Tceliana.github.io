<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import Bird from "../Components/Bird.svelte";
    import RatingFiller from "../Components/Ratings/RatingFiller.svelte";

    gsap.registerPlugin(ScrollTrigger);

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });

    console.log("Inner Height = " + window.innerHeight);
    console.log("Inner Width = " + window.innerWidth);
</script>

<RatingFiller />
<div style="min-height: 1000vh;">
    <div class="rows">
        <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">Tceliana</h1>
        <Bird />
        <p>The story begins.</p>
        <img class="hearth" src="/Images/hearth.svg" alt="hearth SVG" />
    </div>
</div>

<style>
    .hearth {
        width: 120vw;
    }
</style>

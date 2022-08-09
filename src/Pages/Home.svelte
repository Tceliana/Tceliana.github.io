<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import RatingFiller from "../Components/Ratings/RatingFiller.svelte";

    gsap.registerPlugin(ScrollTrigger);

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });

    console.log("Inner Height = " + window.innerHeight);
    console.log("Inner Width = " + window.innerWidth);

    onMount(() => {
        gsap.fromTo(
            "#bird",
            { opacity: 1 },
            {
                y: -250,
                x: 800,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: "0% top",
                    end: "10% top",
                    scrub: 1,
                    onEnter: function () {
                        gsap.to("#bird", { scaleX: 1, rotation: 0 });
                    },
                    onLeave: function () {
                        gsap.to("#bird", { scaleX: -1, rotation: -15 });
                    },
                },
            }
        );
    });
</script>

<RatingFiller />
<div style="min-height: 1000vh;">
    <div class="rows">
        <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">Tceliana</h1>
        <p id="bird">BIRD</p>
        <p>The story begins.</p>
        <img class="hearth" src="/Images/hearth.svg" alt="hearth SVG" />
    </div>
</div>

<style>
    .hearth {
        width: 120vw;
    }
</style>

<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import Rating from "../Components/Rating.svelte";
    gsap.registerPlugin(ScrollTrigger);

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });

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

<main class="rows">
    <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">Tceliana</h1>

    <p id="bird">BIRD</p>

    <Rating name="NAME" stars={5} review="REVIEW" />

    <p>The story begins.</p>

    <img class="hearth" src="./Images/hearth.svg" alt="hearth SVG" />
</main>

<style>
    .hearth {
        width: 120vw;
    }
</style>

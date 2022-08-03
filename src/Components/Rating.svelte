<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import RatingCard from "./RatingCard.svelte";
    gsap.registerPlugin(ScrollTrigger);
    export let name: string;
    export let stars: number;
    export let review: string;

    export let startPercentage: number;
    export let endPercentage: number;

    let firstQuartile = (startPercentage + endPercentage) / 4;
    let thirdQuartile = ((startPercentage + endPercentage) * 3) / 4;

    let mainDiv: HTMLElement = null;

    console.log(window.innerWidth * 0.2);

    onMount(() => {
        gsap.fromTo(
            mainDiv,
            { opacity: 1 },
            {
                y: 0,
                x: window.innerWidth * 0.9,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: startPercentage + "% top",
                    end: firstQuartile + "% top",
                    scrub: 1,
                },
            }
        );

        gsap.fromTo(
            mainDiv,
            { opacity: 1 },
            {
                y: 0,
                x: 0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: thirdQuartile + "% top",
                    end: endPercentage + "% top",
                    scrub: 1,
                },
            }
        );
    });
</script>

<div bind:this={mainDiv} class="rating columns flex_left">
    <img src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
    <div style="flex-grow: 1">
        <RatingCard {name} {stars} {review} />
    </div>
</div>

<style>
    .rating img {
        width: 50%;
        height: 50%;
    }
    .rating {
        position: fixed;
        justify-content: space-between;
        top: 5%;
        align-self: flex-start;
        width: 45vw;
        margin-left: calc(-45vw * 2);
    }
</style>

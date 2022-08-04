<script lang="ts">
    import gsap from "gsap";

    import RatingCard from "./RatingCard.svelte";
    gsap.registerPlugin(ScrollTrigger);
    export let name: string;
    export let stars: number;
    export let review: string;
    export let startPercentage: number;
    export let mode: "U" | "R" | "L" | "D";
    export let endPercentage: number;

    const DEBUG_ACTIVE_ANIMATIONS: boolean = true;

    let firstQuartile = (startPercentage + endPercentage) / 4;
    let thirdQuartile = ((startPercentage + endPercentage) * 3) / 4;

    let mainDiv: HTMLElement = null;
    let YPosition: number;

    function addMovement() {
        if (DEBUG_ACTIVE_ANIMATIONS === false) return;
        function getDeltaY(): number {
            if (["L", "R"].indexOf(mode) != -1) return 0;
            if (mode == "D") return window.innerWidth * 0.9;
            return -window.innerWidth * 0.9;
        }
        function getDeltaX(): number {
            if (["U", "D"].indexOf(mode) != -1) return 0;
            if (mode == "L") return window.innerWidth * 0.9;
            return -window.innerWidth * 0.9;
        }
        gsap.fromTo(
            mainDiv,
            { opacity: 1 },
            {
                x: getDeltaX(),
                y: getDeltaY(),
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
        return true;
    }

    function isActive(YPosition: number): boolean {
        if (
            YPosition > ((startPercentage - 5) / 100) * document.body.scrollHeight &&
            YPosition < ((endPercentage + 5) / 100) * document.body.scrollHeight
        ) {
            addMovement();
            return true;
        }
        return false;
    }
</script>

{#if isActive(YPosition)}
    {#if mode === "L"}
        <div bind:this={mainDiv} class="{mode} columns ">
            <img class="TcelaImage" src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
            <RatingCard {name} {stars} {review} />
        </div>
    {:else if mode === "R"}
        <div bind:this={mainDiv} class="columns  {mode}">
            <RatingCard {name} {stars} {review} />
            <img class="TcelaImage flipX" src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
        </div>
    {/if}
{/if}

<svelte:window bind:scrollY={YPosition} />

<style>
    .TcelaImage {
        width: 10vw;
    }

    .flipX {
        transform: scaleX(-1);
    }
    .R {
        right: 0;
        position: fixed;
        top: 5%;
        align-self: flex-start;
        width: fit-content;
        margin-right: calc(-45vw * 2);
    }

    .L {
        left: 0;
        position: fixed;
        top: 5%;
        align-self: flex-start;
        margin-left: calc(-45vw * 2);
        width: fit-content;
    }

    .U {
        top: 0;
    }

    .D {
        bottom: 0;
    }
</style>

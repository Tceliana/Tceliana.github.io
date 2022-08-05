<script lang="ts">
    import gsap from "gsap";

    gsap.registerPlugin(ScrollTrigger);
    export let startPercentage: number;
    export let endPercentage: number;
    export let mode: "U" | "R" | "L" | "D";
    export let deltaSize: number;

    const DEBUG_ACTIVE_ANIMATIONS: boolean = true;

    let firstQuartile = (startPercentage + endPercentage) / 4;
    let thirdQuartile = ((startPercentage + endPercentage) * 3) / 4;

    let mainDiv: HTMLElement = null;
    let YPosition: number;

    function addMovement() {
        if (DEBUG_ACTIVE_ANIMATIONS === false) return;
        function getDeltaY(): number {
            if (["L", "R"].indexOf(mode) != -1) return 0;
            if (mode == "D") return window.innerWidth * deltaSize;
            return -window.innerWidth * deltaSize;
        }
        function getDeltaX(): number {
            if (["U", "D"].indexOf(mode) != -1) return 0;
            if (mode == "L") return window.innerWidth * deltaSize;
            return -window.innerWidth * deltaSize;
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
            YPosition > ((startPercentage - 3) / 100) * document.body.scrollHeight &&
            YPosition < ((endPercentage + 3) / 100) * document.body.scrollHeight
        ) {
            addMovement();
            return true;
        }
        return false;
    }
</script>

{#if isActive(YPosition)}
    <div bind:this={mainDiv} class="{mode} columns " style="--deltaSize:{-deltaSize * 100 + 'vw'}">
        <slot />
    </div>
{/if}

<svelte:window bind:scrollY={YPosition} />

<style>
    .L {
        left: 0;
        position: fixed;
        top: 5%;
        align-self: flex-start;
        margin-left: var(--deltaSize);
        width: fit-content;
    }

    .R {
        right: 0;
        position: fixed;
        top: 5%;
        align-self: flex-start;
        width: fit-content;
        margin-right: var(--deltaSize);
    }

    .U {
        top: 0;
    }

    .D {
        bottom: 0;
    }
</style>

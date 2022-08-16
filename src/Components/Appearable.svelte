<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import { getRandomNumber } from "../maths";

    gsap.registerPlugin(ScrollTrigger);
    export let startPercentage: number;
    export let endPercentage: number;
    export let mode: "U" | "R" | "L" | "D";
    export let movingQuantity: number = 0.7;
    let stylish=$$props.style;

    let offset:number = getRandomNumber(20,60);

    const DO_ANIMATIONS: boolean = true;

    let firstQuartile = startPercentage + (endPercentage-startPercentage) / 5;
    let thirdQuartile =startPercentage + (endPercentage-startPercentage) *4/ 5;

    let mainDiv: HTMLElement = null;
    let YPosition: number;

    function addMovement() {
        if (DO_ANIMATIONS === false) return;
        function getDeltaY(): number {
            if (["L", "R"].includes(mode)) return 0;
            if (mode == "D") return -window.innerHeight * movingQuantity;
            return window.innerHeight * movingQuantity;
        }
        function getDeltaX(): number {
            if (["U", "D"].includes(mode)) return 0;
            if (mode == "L") return window.innerWidth * movingQuantity;
            return -window.innerWidth * movingQuantity;
        }
        if (mainDiv === null) return;
        gsap.fromTo(
            mainDiv,
            {},
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
            {},
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
    }

    onMount(() => addMovement())
    

</script>


{#if ["L", "R"].includes(mode)}
    <div
        bind:this={mainDiv}
        class="Appearable columns {mode} "
        style=" {stylish};
    --deltaSize:{-movingQuantity * 100 + 'vw'}; 
    --offset:{offset + '%'}"
    >
        <slot />
    </div>
{:else if ["U", "D"].includes(mode)}
    <div
        bind:this={mainDiv}
        class="Appearable rows {mode} "
        style="{stylish};
    --deltaSize:{-movingQuantity * 100 + 'vh'}; 
    --offset:{offset + '%'}"
    >
        <slot />
    </div>
{/if}


<svelte:window bind:scrollY={YPosition} />

<style>
    .Appearable {
        position: fixed;
        align-self: flex-start;
        width: fit-content;
        height: fit-content;
    }
    .L {
        left: 0;
        top: var(--offset);
        margin-left: var(--deltaSize);
    }

    .R {
        right: 0;
        top: var(--offset);
        margin-right: var(--deltaSize);
    }

    .U {
        top: 0;
        right: var(--offset);
        margin-top: var(--deltaSize);
    }

    .D {
        bottom: 0;
        right: var(--offset);
        margin-bottom: var(--deltaSize);
    }
</style>

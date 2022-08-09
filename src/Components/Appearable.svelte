<script lang="ts">
    import gsap from "gsap";

    gsap.registerPlugin(ScrollTrigger);
    export let startPercentage: number;
    export let endPercentage: number;
    export let mode: "U" | "R" | "L" | "D";
    export let deltaSizePercentage: number;

    const offset: number = Math.floor(Math.random() * 50);

    const DEBUG_ACTIVE_ANIMATIONS: boolean = true;

    let firstQuartile = (startPercentage + endPercentage) / 4;
    let thirdQuartile = ((startPercentage + endPercentage) * 3) / 4;

    let mainDiv: HTMLElement = null;
    let YPosition: number;

    function addMovement() {
        if (DEBUG_ACTIVE_ANIMATIONS === false) return;
        function getDeltaY(): number {
            if (["L", "R"].includes(mode)) return 0;
            if (mode == "D") return -window.innerHeight * deltaSizePercentage;
            return window.innerHeight * deltaSizePercentage;
        }
        function getDeltaX(): number {
            if (["U", "D"].includes(mode)) return 0;
            if (mode == "L") return window.innerWidth * deltaSizePercentage;
            return -window.innerWidth * deltaSizePercentage;
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

    function isActive(YPosition: number): boolean {
        const max_scrollbar_height: number = document.body.scrollHeight - window.innerHeight;

        if (max_scrollbar_height <= 0) {
            // No scrollbar!
            if (startPercentage <= 0) return true;
            return false;
        }

        if (
            (YPosition / max_scrollbar_height) * 100 > startPercentage - 5 &&
            (YPosition / max_scrollbar_height) * 100 < endPercentage + 5
        ) {
            addMovement();
            return true;
        }
        return false;
    }
</script>

{#if isActive(YPosition)}
    {#if ["L", "R"].includes(mode)}
        <div
            bind:this={mainDiv}
            class="Appearable columns {mode} "
            style="
        --deltaSize:{-deltaSizePercentage * 100 + 'vw'}; 
        --offset:{offset + '%'}"
        >
            <slot />
        </div>
    {:else if ["U", "D"].includes(mode)}
        <div
            bind:this={mainDiv}
            class="Appearable rows {mode} "
            style="
        --deltaSize:{-deltaSizePercentage * 100 + 'vh'}; 
        --offset:{offset + '%'}"
        >
            <slot />
        </div>
    {/if}
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

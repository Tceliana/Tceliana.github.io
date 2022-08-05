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
            if (["L", "R"].indexOf(mode) != -1) return 0;
            if (mode == "D") return window.innerWidth * deltaSizePercentage;
            return -window.innerWidth * deltaSizePercentage;
        }
        function getDeltaX(): number {
            if (["U", "D"].indexOf(mode) != -1) return 0;
            if (mode == "L") return window.innerWidth * deltaSizePercentage;
            return -window.innerWidth * deltaSizePercentage;
        }
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
    <div
        bind:this={mainDiv}
        class="{mode} columns Appearable "
        style="
        --deltaSize:{-deltaSizePercentage * 100 + 'vw'}; 
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
    }

    .D {
        bottom: 0;
    }
</style>

<script lang="ts">
    import GameDescription from "./GameDescription.svelte";
    import SvgScrollPath from "./SVGScrollPath.svelte";
    import type { GameInfo } from "../../gameInfo";
    import { getPercentage } from "../../maths";
    import EmbeddedLink from "./EmbeddedLink.svelte";

    export let gameInfo: GameInfo;

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;
    const startScrollUpAtPixelY = startAtPixelY + (endAtPixelY - startAtPixelY) * 0.8;

    let YPosition: number;
    let pathPercentage: number = 0; // 0 to 1 between StartAtPixelY and startScrollUpAtPixelY
    let scrollUpPercentage: number = 0; // 0 to 1 between startScrollUpAtPixelY and endAtPixelY

    let imageOpacity: number = 0;
    let gameDescriptionOpacity: number = 0;
    let gameDescriptionAppearance: number = 0;

    window.addEventListener("scroll", () => {
        if (YPosition < startAtPixelY || YPosition > endAtPixelY) {
            pathPercentage = 0;
            scrollUpPercentage = 0;
            return;
        }
        if (YPosition < startScrollUpAtPixelY) {
            pathPercentage = getPercentage(startAtPixelY, startScrollUpAtPixelY, YPosition);
            scrollUpPercentage = 0;
        } else {
            pathPercentage = 1;
            scrollUpPercentage = getPercentage(startScrollUpAtPixelY, endAtPixelY, YPosition);
        }

        imageOpacity = getPercentage(0.2, 0.5, pathPercentage);
        gameDescriptionOpacity = getPercentage(0.7, 0.8, pathPercentage);
        gameDescriptionAppearance = getPercentage(0.5, 0.8, pathPercentage);
    });
</script>

{#if YPosition > startAtPixelY && YPosition < endAtPixelY}
    <div class="gameView" style="margin-top:{-scrollUpPercentage * window.innerHeight}px">
        <SvgScrollPath {flipX} percentageCompleted={pathPercentage} />
        <div class="columns">
            <div class="midScreen" style="opacity:{flipX ? imageOpacity : gameDescriptionOpacity}">
                {#if flipX}
                    <div class="ImagePositionerL">
                        <EmbeddedLink embeddedLink={gameInfo.embeddedLink} aspectRatio={gameInfo.embeddedAspect} />
                    </div>
                {:else}
                    <div class="TextPositioner" style="margin-left:-{100 - gameDescriptionAppearance * 100}%;">
                        <GameDescription {gameInfo} />
                    </div>
                {/if}
            </div>
            <div class="midScreen" style="opacity:{flipX ? gameDescriptionOpacity : imageOpacity}">
                {#if flipX}
                    <div class="TextPositioner" style="margin-left:-{100 - gameDescriptionAppearance * 100}%;">
                        <GameDescription {gameInfo} />
                    </div>
                {:else}
                    <div class="ImagePositionerR">
                        <EmbeddedLink embeddedLink={gameInfo.embeddedLink} aspectRatio={gameInfo.embeddedAspect} />
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<svelte:window bind:scrollY={YPosition} />

<style>
    .gameView {
        position: fixed;
        top: 0;
    }

    .midScreen {
        width: 50vw;
        height: 100vh;
    }

    .ImagePositionerL {
        position: absolute;
        width: 38.8%;
        left: 11.25%;
        height: 62.4%;
        bottom: 22.45%;
    }
    .ImagePositionerR {
        position: absolute;
        width: 38.8%;
        right: 11.05%;
        height: 62.4%;
        bottom: 22.45%;
    }

    .TextPositioner {
        position: absolute;
        height: 62.4%;
        bottom: 22.45%;
        width: 50%;
    }
</style>

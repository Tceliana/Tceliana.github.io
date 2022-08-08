<script lang="ts">
    import GameDescription from "./GameDescription.svelte";
    import SvgScrollPath from "./SVGScrollPath.svelte";
    import type { GameInfo } from "../../gameInfo";
    import { Clamp } from "../../maths";

    export let gameInfo: GameInfo;

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;
    export let scrollUpAtPercentage: number = 80;

    let YPosition: number;
    let scrollUpOffset: number = 0;
    let percentageCompleted: number = 0;

    let imageOpacity: number = 0;
    let gameDescriptionOpacity: number = 0;

    const startScrollAtPixelY = startAtPixelY + ((endAtPixelY - startAtPixelY) * scrollUpAtPercentage) / 100;

    window.addEventListener("scroll", () => {
        if (YPosition < startAtPixelY || YPosition > endAtPixelY) {
            percentageCompleted = 0;
            scrollUpOffset = 0;
            return;
        }
        if (YPosition < startScrollAtPixelY) {
            percentageCompleted = (YPosition - startAtPixelY) / (startScrollAtPixelY - startAtPixelY);

            scrollUpOffset = 0;
        } else {
            percentageCompleted = 1;
            scrollUpOffset =
                window.innerHeight * ((YPosition - startScrollAtPixelY) / (endAtPixelY - startScrollAtPixelY));
        }

        imageOpacity = getOpacityByPercentageScroll(0.2, 0.5, percentageCompleted);
        gameDescriptionOpacity = getOpacityByPercentageScroll(0.6, 0.7, percentageCompleted);
    });

    function getOpacityByPercentageScroll(startAtPercentage, endAtPercentage, percentageCompleted: number): number {
        let returned = (percentageCompleted - startAtPercentage) / (endAtPercentage - startAtPercentage);
        return Clamp(0, 1, returned);
    }
</script>

{#if YPosition > startAtPixelY && YPosition < endAtPixelY}
    <div class="gameView" style="margin-top:{-scrollUpOffset}px">
        <SvgScrollPath {flipX} {percentageCompleted} />
        <div class="columns">
            <div class="midScreen" style="opacity:{flipX ? imageOpacity : gameDescriptionOpacity}">
                {#if flipX}
                    <div class="ImagePositionerL">
                        <img src={gameInfo.embeddedLink} alt="dsadsa" style="width:100%; height:100%;" />
                    </div>
                {:else}
                    <GameDescription {gameInfo} style="width:50vw;" />
                {/if}
            </div>
            <div class="midScreen" style="opacity:{flipX ? gameDescriptionOpacity : imageOpacity}">
                {#if flipX}
                    <GameDescription {gameInfo} style="width:50vw;" />
                {:else}
                    <div class="ImagePositionerR">
                        <img src={gameInfo.embeddedLink} alt="dsadsa" style="width:100%;height:100%;" />
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
        z-index: -1;
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
</style>

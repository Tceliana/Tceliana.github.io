<script lang="ts">
    import GameDescription from "./GameDescription.svelte";
    import SvgScrollPath from "./SVGScrollPath.svelte";
    import type { GameInfo } from "../../gameInfo";

    export let gameInfo: GameInfo;

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;
    export let scrollUpAtPercentage: number = 80;

    let YPosition: number;
    let scrollUpOffset: number = 0;
    let percentageCompleted: number = 0;

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
    });
</script>

<div class="gameView" style="margin-top:{-scrollUpOffset}px">
    <SvgScrollPath {flipX} {percentageCompleted}>
        <div class="midScreen">
            {#if flipX}
                <img src={gameInfo.embeddedLink} alt="dsadsa" style="width:50vw;" />
            {:else}
                <GameDescription {gameInfo} style="width:50vw;" />
            {/if}
        </div>
        <div class="midScreen">
            {#if flipX}
                <GameDescription {gameInfo} style="width:50vw;" />
            {:else}
                <img src={gameInfo.embeddedLink} alt="dsadsa" style="width:50vw;" />
            {/if}
        </div>
    </SvgScrollPath>
</div>

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
</style>

<script lang="ts">
    import GameDescription from "./GameDescription.svelte";
    import SvgScrollPath from "./SVGScrollPath.svelte";
    import type { GameInfo } from "../../gameInfo";

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;

    export let gameInfo: GameInfo;
</script>

<div class="gameView">
    <SvgScrollPath {flipX} {startAtPixelY} {endAtPixelY}>
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

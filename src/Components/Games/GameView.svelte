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
        <GameDescription {gameInfo} style="width:50vw;" />
        <img src={gameInfo.embeddedLink} alt="dsadsa" style="width:50vw;" />
    </SvgScrollPath>
</div>

<style>
    .gameView {
        position: fixed;
        top: 0;
        z-index: -1;
    }
</style>
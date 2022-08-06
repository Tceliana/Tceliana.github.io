<script lang="ts">
    import SvgScrollPath from "./SVGScrollPath.svelte";

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;
</script>

<div class="gameView">
    <SvgScrollPath {flipX} {startAtPixelY} {endAtPixelY} />
</div>

<style>
    .gameView {
        position: fixed;
        top: 0;
        z-index: -1;
    }
</style>

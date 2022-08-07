<script lang="ts">
    import SvgScrollPath from "./SVGScrollPath.svelte";

    export let flipX: boolean = false;
    export let startAtPixelY: number;
    export let endAtPixelY: number;

    export let gameName: string;
    export let description: string;
    export let link: string;
    export let imageLink: string;
</script>

<div class="gameView">
    <SvgScrollPath {flipX} {startAtPixelY} {endAtPixelY}>
        <div>Wathing My Daughter Go Black</div>
        <div>Wathing My Daughter Go Black</div>
    </SvgScrollPath>
</div>

<style>
    .gameView {
        position: fixed;
        top: 0;
        z-index: -1;
    }
</style>

<script lang="ts">
    import SvgScrollPath from "./SVGScrollPath.svelte";

    export let flipX: boolean = false;
    export let startPercentage: number;
    export let endPercentage: number;
</script>

<div class="gameView">
    <SvgScrollPath {flipX} {startPercentage} {endPercentage} />
</div>

<style>
    .gameView {
        position: fixed;
        top: 0;
    }
</style>

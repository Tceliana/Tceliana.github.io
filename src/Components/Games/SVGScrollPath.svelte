<script lang="ts">
    import { onMount } from "svelte";
    import SVGPath from "../../SvgPath";

    export let flipX                : boolean = false;
    export let percentageCompleted  : number;

    let svgPath     : SVGGeometryElement;
    let currentPath : SVGPath = SVGPath.LoadFromFile("/images/lines/game_container.svg");
    let totalLength : number = 0;

    onMount(() => { totalLength = svgPath.getTotalLength(); });
</script>

<svg
    class="fullScreen"
    viewBox="{currentPath.getViewPort()}"
    preserveAspectRatio="none"
    style="transform:scaleX({flipX ? -1 : 1}); position:fixed"
>
    <path
        bind:this={svgPath}
        fill="none"
        d={currentPath.svgPath}
        style="stroke-dasharray: {totalLength} {totalLength};stroke-dashoffset: {-totalLength -
            totalLength * percentageCompleted}; "
    />
</svg>

<style>

    .fullScreen 
    {
        width:  100vw;
        height: 100vh;
    }

    path 
    {
        stroke:     #444;
        stroke-width: 0.01vw;
    }
</style>

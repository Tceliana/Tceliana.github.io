<script lang="ts">
    import { onMount } from "svelte";
    interface SVGPath {
        xOffset: number;
        yOffset: number;
        width: number;
        height: number;
        svgPath: string;
    }

    export let flipX: boolean = false;
    export let percentageCompleted: number;

    let svgPath: SVGGeometryElement;
    let currentPath: SVGPath = {
        xOffset: 0,
        yOffset: 0,
        width: 160,
        height: 102,
        svgPath:
            "m 80.000046,0 v 84.920757 c 0,0 -0.03596,11.295795 -5.659505,15.109623 -5.623544,3.81382 -18.30359,-7.012114 -18.339352,-13.445058 -0.03591,-6.432945 11.020489,-7.72074 23.998857,-7.517655 23.110874,0.361626 48.630514,0.202319 62.258284,0.271408 15.36889,0.07793 17.06597,4.785061 17.04389,10.064048 -0.0287,6.838609 -7.87756,12.643037 -13.0522,10.390022 -5.17463,-2.25301 -4.03551,-4.002943 -3.99169,-20.454074 0.0438,-16.451126 -0.0265,-50.737687 0,-64.120496 0.0208,-10.5417936 1.42921,-14.62358552 6.20194,-14.62358552 6.60335,0 10.48953,4.37577862 10.48954,9.72358852 0,5.34781 -3.89723,4.827364 -16.69148,4.917773 -13.5831,0.09598 -59.887862,0.21673 -62.258284,0.21673 -2.370421,0 -17.935255,2.19429 -19.633027,-0.353269 C 58.669248,12.552253 63.77847,0.36801657 69.367752,1.0809835 74.957035,1.7939504 80.16105,10.281089 80.000046,15.453081 80.763511,24.66764 76.448193,42.199593 77.102368,59.467137 77.534505,70.873789 80.000046,94.579449 80.000046,102",
    };

    let totalLength: number = 0;

    onMount(() => {
        totalLength = svgPath.getTotalLength();
    });
</script>

<svg
    class="fullScreen"
    viewBox="{currentPath.xOffset} {currentPath.yOffset} {currentPath.width} {currentPath.height}"
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
    .fullScreen {
        width: 100vw;
        height: 100vh;
    }
    path {
        stroke: #444;
        stroke-width: 0.01vw;
    }
</style>

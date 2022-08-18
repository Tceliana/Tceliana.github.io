<script type="ts" >
    import { onMount } from "svelte";
    import { getRandomNumber } from "../maths";

    import SVGPath from "../SvgPath";
	
    let planes: string[] = [
        "./Images/planes/red_plane.png",
        "./Images/planes/yellow_plane.png",
        "./Images/planes/blue_plane.png",
    ];

    let paths: SVGPath[] = [
        SVGPath.LoadFromFile("./Images/planes/curve1.svg"), 
        SVGPath.LoadFromFile("./Images/planes/curve2.svg"),
        SVGPath.LoadFromFile("./Images/planes/curve3.svg"),
    ];

    let currentPath: SVGPath = paths[getRandomNumber(0, paths.length - 1)];

    let totalLength: number = 0;
    let svgPath: SVGGeometryElement;

	let duration = 5000;
	let value = 0;
	function addCurve() {
		let precision = 30;
		for (let i: number = 0; i < duration / precision; i++) {
			setTimeout(() => {
				value = -totalLength - ((totalLength * i) / duration) * precision;
			}, i * precision);
		}
	}

	onMount(() => {
        totalLength= svgPath.getTotalLength();
        addCurve();
     });


    let condition = true;
</script>

<button on:click={() => (condition = !condition)}> Show svg </button>

<svg
    viewBox="{currentPath.getViewPort()}"
    xmlns="http://www.w3.org/2000/svg"
>
    {#if condition}
        <path
            bind:this={svgPath}
            d={currentPath.svgPath}
            fill="none"
            stroke="cornflowerblue"
            id="theMotionPath"
            style="stroke-dasharray: {totalLength} {totalLength}; stroke-dashoffset: {value}; "
        />

        <path
            d={currentPath.svgPath}
            fill="none"
            stroke="var(--COLOR_BACKGROUND)"
            stroke-width="3px"
            style="stroke-dasharray: 4 8;"
        />

        <path
            d={currentPath.svgPath}
            fill="none"
            stroke="var(--COLOR_BACKGROUND)"
            stroke-width="3px"
            style="stroke-dasharray: {totalLength} {totalLength}; stroke-dashoffset: {value + 100}; "
        />

        <image
            class="plane"
            xlink:href={planes[getRandomNumber(0, planes.length - 1)]}
            y="-15"
            x="-15"
            width="30px"
            height="30px"
        >
            <animateMotion dur="5s" repeatCount="2" rotate="auto" calcMode="linear">
                <mpath href="#theMotionPath" />
            </animateMotion>
        </image>
    {/if}
</svg>

<style>
    svg {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index: -1;
    }

    /* path {
        stroke-dasharray: 40 10 20 30;
    } */
    .plane {
        transform: scaleY(-1);
    }
</style>

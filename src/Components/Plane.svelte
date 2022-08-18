<script type="ts" >
    import { onMount } from "svelte";
    import { getRandomNumber } from "../maths";

    import SVGPath from "../SvgPath";
	
    let planes: string[] = [
        "./images/planes/red_plane.png",
        "./images/planes/yellow_plane.png",
        "./images/planes/blue_plane.png",
    ];

    let paths: SVGPath[] = [
        SVGPath.LoadFromFile("./images/lines/curve1.svg"), 
        SVGPath.LoadFromFile("./images/lines/curve2.svg"),
        SVGPath.LoadFromFile("./images/lines/curve3.svg"),
    ];

    let currentPath: SVGPath = paths[getRandomNumber(0, paths.length - 1)];

    let totalLength: number = 0;
    let svgPath: SVGGeometryElement;

	let secondsDuration = 5;
	let value = 0;
	function addCurve() {
		let precision = 30;
		for (let i: number = 0; i < secondsDuration*1000 / precision; i++) {
			setTimeout(() => {
				value = -totalLength - ((totalLength * i) / (secondsDuration*1000)) * precision;
			}, i * precision);
		}
	}

	onMount(() => {
        totalLength= svgPath.getTotalLength();
        addCurve();
     });

</script>

<svg
    viewBox="{currentPath.getViewPort()}"
    xmlns="http://www.w3.org/2000/svg"
>
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
            y="-1.5vh"
            x="-1.5vw"
            width="3vw"
            height="3vh"
        >
            <animateMotion dur="{secondsDuration}s" repeatCount="2" rotate="auto" calcMode="linear">
                <mpath href="#theMotionPath" />
            </animateMotion>
        </image>
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
    image
    {
        filter: drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
    }
</style>

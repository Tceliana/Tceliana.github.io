<script type="ts" >
    import { onMount } from "svelte";
    import { getRandomNumber } from "../maths";

    import SVGPath from "../SvgPath";

    let showPlane = true;
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
	let currentLength = 0;
	function addCurve() {
		let precision = 50;
		for (let i: number = 0; i < secondsDuration*1000 / precision; i++) {
			setTimeout(() => {
                currentLength = -totalLength - ((totalLength * i) / (secondsDuration*1000)) * precision;
                if(i===0)
                    showPlane = true;
                if((i+1) >= secondsDuration*1000 / precision)
                    showPlane = false;
                }, i * precision);
		}
	}

    let animationMotion;

	onMount(() => {
        totalLength= svgPath.getTotalLength();
        AutoPlay();
     });

    let scrollY = 0;
    function AutoPlay()
    {
        addCurve();
        scrollY = window.scrollY;

        setTimeout(() => {AutoPlay()}, getRandomNumber(8,9)*1000)
    }

</script>

{#if showPlane}
<svg
    viewBox="{currentPath.getViewPort()}"
    xmlns="http://www.w3.org/2000/svg"
    style="top: {scrollY}px;"
>
        <path
            bind:this={svgPath}
            d={currentPath.svgPath}
            fill="none"
            stroke="var(--COLOR_SECONDARY)"
            id="theMotionPath"
            style="stroke-dasharray: {totalLength} 4 10 5 10 10 12 10 15 10 15 10 10 1 {totalLength}; stroke-dashoffset: {currentLength}; "
        />

        <image
                class="plane"
                xlink:href={planes[getRandomNumber(0, planes.length - 1)]}
                y="-1.5vh"
                x="-1.5vw"
                width="3vw"
                height="3vh"            
            >
                <animateMotion bind:this={animationMotion} dur="{secondsDuration}s" repeatCount="indefinite" restart="always" rotate="auto" calcMode="linear">
                    <mpath href="#theMotionPath" />
                </animateMotion>
            </image>
        </svg>
{/if}

<style>
    svg {
        position: absolute;
        height: 100vh;
        width: 100vw;
        z-index:0;
    }

    .plane {
        transform: scaleY(-1);
    }
    image
    {
        filter: drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
    }

</style>

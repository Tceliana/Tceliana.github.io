<script type="ts" >
    import { draw } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { getRandomNumber } from "../maths";

    import SVGPath from "../SvgPath";

	let s = SVGPath.LoadFromFile("./Images/planes/curve1.svg")
	console.log(s.getViewPort());

    interface SVGPath {
        xOffset: number;
        yOffset: number;
        width: number;
        height: number;
        svgPath: string;
    }

    let planes: string[] = [
        "./Images/planes/red_plane.png",
        "./Images/planes/yellow_plane.png",
        "./Images/planes/blue_plane.png",
    ];

    let paths: SVGPath[] = [
        {
            xOffset: 0,
            yOffset: 0,
            width: 423.33332,
            height: 238.12501,
            svgPath:
                "m 484.72137,106.91555 c -41.79186,1.11155 -82.58976,2.19666 -112.18773,4.81612 -29.59796,2.61946 -47.49813,6.75992 -71.4197,13.27146 -23.92158,6.51154 -53.86298,15.39373 -77.63883,14.8312 -23.77584,-0.56253 -41.38497,-10.56978 -59.97053,-14.44638 -18.58556,-3.8766 -38.14634,-1.62222 -55.99699,4.39025 -17.850655,6.01247 -33.989993,15.78262 -61.106256,16.89782 -27.116262,1.1152 -64.823135,-6.3484 -102.723417,-13.85028",
        },
        {
            xOffset: 0,
            yOffset: 0,
            width: 423.33332,
            height: 238.12501,
            svgPath:
                "m 423.33333,49.464512 c -14.31124,2.841839 -28.62275,5.683731 -35.53827,28.975741 -6.91553,23.292007 -6.4348,67.033107 -31.19786,88.783647 -24.76307,21.75053 -74.76858,21.51001 -108.91184,5.23066 -34.14327,-16.27934 -52.42078,-48.59584 -47.67398,-72.4496 4.74681,-23.853769 32.51744,-39.241548 54.88155,-45.5099 22.36411,-6.268351 39.31882,-3.416632 48.22875,3.37331 8.90993,6.789943 9.7743,17.517057 -15.03621,38.282845 C 263.27496,116.917 212.79251,147.71929 160.49819,151.55973 108.20387,155.40016 54.102636,132.27763 0,109.1545",
        },
        {
            xOffset: 0,
            yOffset: 0,
            width: 423.33332,
            height: 238.12501,
            svgPath:
                "m 423.33333,16.513797 c -22.99333,-2.46251 -45.98696,-4.925053 -57.34132,4.936712 -11.35435,9.861766 -11.06916,32.046714 -23.38028,40.43241 -12.31113,8.385695 -37.21789,2.97211 -49.50954,13.240168 -12.29165,10.268058 -11.96739,36.216623 -26.50017,43.790813 -14.53279,7.57418 -43.92175,-3.22596 -58.9139,6.30663 -14.99215,9.53258 -15.58665,39.40105 -31.65557,47.3769 -16.06891,7.97585 -47.61134,-5.9387 -64.15884,0.87912 -16.547494,6.81781 -18.099046,34.36707 -32.27873,38.9244 -14.179683,4.55732 -40.986717,-13.87707 -55.022419,-11.5955 -14.035702,2.28156 -15.2991689,25.2785 -22.9412469,29.36036 -7.6420779,4.08185 -22.0912291,-11.2049 -36.3265251,-26.2654",
        },
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
    viewBox="{currentPath.xOffset} {currentPath.yOffset} {currentPath.width} {currentPath.height}"
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

<script type="ts">
    import { getRandomNumber } from "../../Scripts/maths";
    import SVGPath from "../../Scripts/SvgPath";

    let planes: { url: string; tilt: number }[] = [
        { url: "./images/planes/red_plane.png",     tilt: 0 },
        { url: "./images/planes/yellow_plane.png",  tilt: 0 },
        { url: "./images/planes/blue_plane.png",    tilt: 0 },
        { url: "./images/planes/red_plane1.png",    tilt: 0 },
        { url: "./images/planes/yellow_plane1.png", tilt: 0 },
        { url: "./images/planes/blue_plane1.png",   tilt: 0 },
        { url: "./images/planes/green_plane1.png",  tilt: 0 },
        { url: "./images/planes/red_plane2.png",    tilt: 25 },
        { url: "./images/planes/yellow_plane2.png", tilt: 25 },
        { url: "./images/planes/blue_plane2.png",   tilt: 25 },
        { url: "./images/planes/green_plane2.png",  tilt: 25 },
        { url: "./images/planes/red_plane3.png",    tilt: 25 },
        { url: "./images/planes/yellow_plane3.png", tilt: 25 },
        { url: "./images/planes/blue_plane3.png",   tilt: 25 },
        { url: "./images/planes/green_plane3.png",  tilt: 25 },
    ];

    let paths: SVGPath[] = [
        SVGPath.LoadFromFile("./images/lines/curve1.svg"),
        SVGPath.LoadFromFile("./images/lines/curve2.svg"),
        SVGPath.LoadFromFile("./images/lines/curve3.svg"),
    ];

    let showPlane = true;
    let secondsDuration = 5;
    let scrollY = 0;
    let planeIndex = 0;

    let path: SVGPath = paths[getRandomNumber(0, paths.length - 1)];
    let currentLength = 0;

    function addCurve() {
        let precision = 150;
        for (let i: number = 0; i < (secondsDuration * 1000) / precision; i++) {
            setTimeout(() => {
                currentLength = -path.length - ((path.length * i) / (secondsDuration * 1000)) * precision;

                if (i === 0) showPlane = true;
                if (i + 1 >= (secondsDuration * 1000) / precision) showPlane = false;
            }, i * precision);
        }
    }

    function AutoPlay() {
        planeIndex = getRandomNumber(0, planes.length - 1);
        path = paths[getRandomNumber(0, paths.length - 1)];

        addCurve();
        scrollY = window.scrollY;

        setTimeout(AutoPlay, getRandomNumber(8,9)*1000);
    }

    AutoPlay();
</script>

{#if showPlane}
    <svg viewBox={path.viewBox} style="top: {scrollY}px; transform:scaleX({[-1, 1][getRandomNumber(0, 1)]}) ">
        <path
            d={path.svgPath}
            fill="none"
            stroke="var(--COLOR_SECONDARY)"
            id="theMotionPath"
            style="stroke-dasharray: {path.length} 0 10 4 10 5 10 10 12 10 15 10 15 10 10 1 {path.length}; stroke-dashoffset: {currentLength}; "
        />

        <image
            class="plane"
            xlink:href={planes[planeIndex].url}
            y="-1.5vh"
            x="-1.5vw"
            width="3vw"
            height="3vh"
            style="transform: scaleY(-1) rotate({planes[planeIndex].tilt}deg)"
        >
            <animateMotion dur="{secondsDuration}s" repeatCount="indefinite" restart="always" rotate="auto" calcMode="linear">
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
    }

    image {
        filter: drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
    }
</style>

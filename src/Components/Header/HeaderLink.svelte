<script lang="ts">
    export let linkName: string;
    export let path: string;

    interface SVGPath {
        xOffset: number;
        yOffset: number;
        width: number;
        height: number;
        svgPath: string;
    }

    let currentCircle: SVGPath = undefined;
    let tiltDegree: number = 0;

    const circlePaths: SVGPath[] = [
        {
            xOffset: 0,
            yOffset: 0,
            width: 500,
            height: 150,
            svgPath:
                "M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7",
        },
        {
            //Info origin: open a circle drawn with svg as a text file ^^
            xOffset: 21,
            yOffset: 161,
            width: 550,
            height: 175,
            svgPath:
                "M 569.72016,223.64202 C 330.39752,132.64711 135.65748,192.14391 95.113378,205.04791 39.452836,222.7274 21.633455,239.1876 22.634543,262.55707 c 1.401525,32.92043 52.256842,54.86739 142.755277,64.72316 66.27208,7.21407 212.43104,7.62049 273.7978,-8.43332 64.47013,-16.86663 104.41356,-58.52521 33.83681,-99.77733 C 404.1495,178.73187 286.82004,158.32044 206.94142,167.56811",
        },
        {
            xOffset: 60,
            yOffset: 109,
            width: 475,
            height: 180,
            svgPath:
                "m 504.66168,198.59717 c 12.24472,-22.57838 -8.0893,-48.3058 -16.47383,-55.44726 -21.5613,-18.36473 -135.09468,-28.41731 -179.53508,-28.44773 -44.44039,-0.0298 -123.4527,10.29753 -151.19318,18.83014 -39.46262,12.1382 -98.748294,47.94787 -97.545748,75.20772 1.202547,27.25985 47.240748,61.35996 128.827228,70.94417 81.58653,9.58418 229.2278,6.31131 284.20925,-28.87466 54.98144,-35.18595 57.7187,-66.06607 60.11001,-101.04467",
        },
    ];

    GenerateNewCircle();

    function GenerateNewCircle(): void {
        currentCircle = circlePaths[Math.floor(Math.random() * circlePaths.length)];
        tiltDegree = Math.random() * 40 - 20;
    }
</script>

<div class="button">
    <a on:mouseenter={GenerateNewCircle} href={path}>{linkName} </a>

    <svg
        viewBox="{currentCircle.xOffset} {currentCircle.yOffset} {currentCircle.width} {currentCircle.height}"
        preserveAspectRatio="none"
        style="transform:rotate({tiltDegree}deg)"
    >
        <path fill="none" d={currentCircle.svgPath} />
    </svg>
</div>

<style>
    .button {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .button a {
        padding: 8px 16px;
        border: none;
        background: none;
        outline: none;
        color: var(--COLOR_SECONDARY);
        text-decoration: none;
    }

    .button svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .button path {
        stroke: #444;
        stroke-width: 8px;
        stroke-dasharray: 0 1500;
    }

    .button:hover path {
        animation: draw 0.6s forwards;
    }

    @keyframes draw {
        from {
            stroke-dasharray: 0 1500;
        }

        to {
            stroke-dasharray: 1500 1500;
        }
    }
</style>

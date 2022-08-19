<script lang="ts">
    import SVGPath from "../../SvgPath";
	import { draw } from 'svelte/transition';
    import { getRandomNumber } from "../../maths";

    let tiltDegree      : number    = 0;
    let currentCircle   : SVGPath   = undefined;


    const circlePaths: SVGPath[] = [
        SVGPath.LoadFromFile("/images/lines/circle1.svg"), 
        SVGPath.LoadFromFile("/images/lines/circle2.svg"), 
        SVGPath.LoadFromFile("/images/lines/circle3.svg"),
    ]

    GenerateNewCircle();

    function GenerateNewCircle() : void 
    {
        currentCircle   = circlePaths[getRandomNumber(0, circlePaths.length-1)];
        tiltDegree      = Math.random() * 40 - 20;
    }
</script>


<svg
    viewBox="{currentCircle.viewBox}"
    preserveAspectRatio="none"
    style="transform:rotate({tiltDegree}deg)"
>
    <path transition:draw="{{duration: 300}}" fill="none" d={currentCircle.svgPath} />
</svg>


<style>
    
    svg 
    {
        position:       absolute;
        top:            0;
        left:           0;
        width:          100%;
        height:         100%;
        pointer-events: none;
    }

     path 
    {
        stroke:             #444;
        stroke-width:       8px;        
    }

</style>

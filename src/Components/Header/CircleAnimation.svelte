<script lang="ts">
    import SVGPath from "../../SvgPath";

    let tiltDegree      : number    = 0;
    let currentCircle   : SVGPath   = undefined;


    const circlePaths: SVGPath[] = [
        SVGPath.LoadFromFile("/Images/Lines/Circle1.svg"), 
        SVGPath.LoadFromFile("/Images/Lines/Circle2.svg"), 
        SVGPath.LoadFromFile("/Images/Lines/Circle3.svg"),
    ]

    GenerateNewCircle();

    function GenerateNewCircle() : void 
    {
        currentCircle   = circlePaths[Math.floor(Math.random() * circlePaths.length)];
        tiltDegree      = Math.random() * 40 - 20;
    }
</script>


<svg
    viewBox="{currentCircle.getViewPort()}"
    preserveAspectRatio="none"
    style="transform:rotate({tiltDegree}deg)"
>
    <path fill="none" d={currentCircle.svgPath} />
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
        stroke-dasharray:   0 1500;
        animation:          draw 0.6s forwards;
    }

    @keyframes draw {
        from 
        {
            stroke-dasharray: 0 1500;
        }

        to 
        {
            stroke-dasharray: 1500 1500;
        }
    }
</style>

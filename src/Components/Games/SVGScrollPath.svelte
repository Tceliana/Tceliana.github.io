<script lang="ts">
    import SVGPath from "../../SvgPath";

    export let flipX                : boolean = false;
    export let percentageCompleted  : number;

    let path : SVGPath = SVGPath.LoadFromFile("/images/lines/game_container.svg");

</script>

<svg
    class               =   "fullScreen"
    viewBox             =   "{path.viewBox}"
    preserveAspectRatio =   "none"
    style               =   "transform:scaleX({flipX ? -1 : 1}); position:fixed"
>
    <path
        fill    =   "none"
        d       =   {path.svgPath}
        style   =   "stroke-dasharray: {path.length} {path.length};stroke-dashoffset: {-path.length - path.length * percentageCompleted}; "
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

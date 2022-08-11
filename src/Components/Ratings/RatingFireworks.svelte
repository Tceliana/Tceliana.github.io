<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    export let showTrigger = false;
    export let autoPlayFireworks = true;
    const firePosition = {x: 0, y: 0};
    let stage = null;

    window.onpointerdown = window.onpointermove = (e) =>
    {
        firePosition.x = e.clientX;
        firePosition.y = e.clientY;
    }


    function fire(firePosition)
    {

        const firework = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        trail = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        ring = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        hsl = 'hsl('+gsap.utils.random(0,360,1)+',100%,50%)'

        stage.appendChild(firework);
        firework.appendChild(trail);
        firework.appendChild(ring);

        for (let i=1; i<5; i++)
        {
            const trailDrawer = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            gsap.fromTo(trailDrawer, {x:firePosition.x, y:innerHeight,
            attr:{d:'M0,0 0,'+innerHeight, 'stroke-width':i, opacity:0.25, stroke:hsl}},
            {y:firePosition.y, ease:'expo'});
            
            trail.appendChild(trailDrawer);
        }

        for(let i=1; i<gsap.utils.random(5,8,1); i++)
        {
            const fwCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            gsap.set(fwCircle, {x:firePosition.x, y:firePosition.y, attr:
            {class:'core', r:()=>(i+1)*25, fill:'none', stroke:hsl, 
            'stroke-width':gsap.utils.random(1.5,3.4), 
            'stroke-dasharray':'1 '+gsap.utils.random(15,30,1)}});
            ring.appendChild(fwCircle);
        
        }
        gsap.timeline({onComplete:()=>stage.removeChild(firework)})
        .to(trail.children, 
        {duration:0.2, attr:{d:'M0,0 0,0'}, stagger:-0.08, ease:'expo.inOut'}, 0)
        .to(trail.children, 
        {duration:0.4, scale:()=>gsap.utils.random(40,80,1), attr:
            {stroke:hsl}, stagger:-0.15, ease:'expo'}, 0.4)
        .to(trail.children, 
        {duration:0.3, opacity:0, ease:'power2.inOut', stagger:-0.1}, 0.5)
        .from(ring.children, 
        {duration:1, scale:0, stagger:0.05, ease:'expo'}, 0.4)
        .to(ring.children, 
        {opacity:0, stagger:0.1, ease:'sine.inOut'}, 0.7)
        .to(ring.children, 
        {duration:1, y:'+=30', ease:'power2.in'}, 0.7)
    }

    function toggleAuto()
    {
        autoPlayFireworks = !autoPlayFireworks;
        if (autoPlayFireworks) autoPlay();
    }

    function autoPlay()
    {
        for (let i=0; i<gsap.utils.random(3,9,1); i++)
        {
            gsap.delayedCall(i/2, fire, 
                [{x:gsap.utils.random(99, innerWidth-99, 1), 
                y:gsap.utils.random(99, innerHeight-99, 1)}])
        }  
        (autoPlayFireworks) ? gsap.delayedCall(3.5,autoPlay) : gsap.killTweensOf(autoPlay)
}
onMount(() =>
{
    stage = document.querySelector(".stage");

    stage.onpointerup = (e) =>
    {
        gsap.killTweensOf(autoPlay);
        gsap.killTweensOf(fire);
        autoPlayFireworks = true;
        toggleAuto();
        fire(firePosition);
    }
});
</script>
    {#if showTrigger}
        <svg stroke="#fff" stroke-linecap="round">
            <g class="stage">
                <rect width="100%" height="100%" fill="rgba(0,0,0,0)" stroke="none"/>
            </g>
        </svg>
    {/if}
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@600&display=swap');

    svg
    {
        width:100%;
        height:100%;
        overflow:hidden;
        position:absolute;
        top:0;
        font-size:19px;
    }
</style>
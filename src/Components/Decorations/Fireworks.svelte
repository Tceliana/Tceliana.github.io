<script type="ts">

    import { onMount }  from "svelte";
    import gsap         from "gsap";

    export let showTrigger       : boolean  = false;
    export let autoPlayFireworks : boolean  = true;
    export let autoStartY        : number   = 1500;

    const firePosition   : { x : number, y : number } = { x: 0, y: 0 };
    const svgElementType : string   = 'http://www.w3.org/2000/svg';

    let stage : any = null;
    

    window.addEventListener("scroll", () => 
    {
        if(window.scrollY > autoStartY && !autoPlayFireworks) 
        {
            toggleAuto();
        }
        else if(window.scrollY < autoStartY && autoPlayFireworks) 
        {
            toggleAuto();
        }
    } )

    window.onpointerdown = window.onpointermove = (mouse : MouseEvent) =>
    {
        firePosition.x = mouse.clientX;
        firePosition.y = mouse.clientY + window.scrollY;
    }

    function fire(firePositionArg : { x : number, y : number }) : void
    {
        const 
        g       : string = 'g',
        path    : string = 'path',
        circle  : string = 'circle',
        firework : Element = 
            document.createElementNS(svgElementType, g),

        trail : Element = 
            document.createElementNS(svgElementType, g),

        ring : Element = 
            document.createElementNS(svgElementType, g),

        hsl : string = 
            'hsl('+gsap.utils.random(0,360,1)+',100%,50%)'

        stage.appendChild(firework);
        firework.appendChild(trail);
        firework.appendChild(ring);

        for (let i : number = 1; i < 5; i++)
        {
            const trailDrawer : Element = 
                document.createElementNS(svgElementType, path);

            gsap.fromTo
            (
                trailDrawer, 
                {
                    x:  firePositionArg.x, 
                    y:  firePositionArg.y + innerHeight,
                    attr:
                    {
                        d:          'M0,0 0,'+innerHeight, 'stroke-width':i,
                        opacity:    0.25, 
                        stroke:     hsl
                    }
                },
                {
                    y:      firePositionArg.y, 
                    ease:   'expo'
                }
            );
            
            trail.appendChild(trailDrawer);
        }

        for(let i : number = 1; i < gsap.utils.random(5,8,1); i++)
        {
            const fwCircle : Element = 
                document.createElementNS(svgElementType, circle);

            gsap.set
            (
                fwCircle, 
                {
                    x:  firePositionArg.x, 
                    y:  firePositionArg.y, 
                    attr:
                    {
                        class:              'core', 
                        r:                  () => (i + 1) * 25, 
                        fill:               'none', 
                        stroke:             hsl, 
                        'stroke-width':     gsap.utils.random(1.5,3.4), 
                        'stroke-dasharray': '1 '+gsap.utils.random(15,30,1)
                    }
                }
            );

            ring.appendChild(fwCircle);
        }

        gsap.timeline(
            {
                onComplete: () => stage.removeChild(firework)
            })
                .to(
                    trail.children, 
                    {
                        duration:   0.2, 
                        attr:       { d:'M0,0 0,0' }, 
                        stagger:    -0.08, 
                        ease:       'expo.inOut'
                    }, 
                    0
                )
                .to(
                    trail.children, 
                    {
                        duration:   0.4, 
                        scale:      () => gsap.utils.random(40,80,1), 
                        attr:       { stroke:hsl }, 
                        stagger:    -0.15, 
                        ease:       'expo'
                    }, 
                    0.4
                )
                .to(
                    trail.children, 
                    {
                        duration:   0.3, 
                        opacity:    0, 
                        ease:       'power2.inOut', 
                        stagger:    -0.1
                    }, 
                    0.5
                )
                .from(
                    ring.children, 
                    {
                        duration:   1, 
                        scale:      0, 
                        stagger:    0.05, 
                        ease:       'expo'
                    }, 
                    0.4
                )
                .to(
                    ring.children, 
                    {
                        opacity:    0, 
                        stagger:    0.1, 
                        ease:       'sine.inOut'
                    }, 
                    0.7
                )
                .to(
                    ring.children, 
                    {
                        duration:   1, 
                        y:          '+=30', 
                        ease:       'power2.in'
                    }, 
                    0.7
                );
    }

    function toggleAuto() : void
    {
        autoPlayFireworks = !autoPlayFireworks;
        if (autoPlayFireworks) autoPlay();
    }

    function autoPlay() : void
    {
        for (let i : number = 0; i < gsap.utils.random(3,9,1); i++)
        {
            gsap.delayedCall(
                i/2, 
                fire, 
                [{ //no consigo hacer que el auto se vea en screen :c
                    x:gsap.utils.random(99, innerWidth-99, 1), 
                    y:gsap.utils.random(window.scrollY, 
                        window.scrollY + innerHeight,
                        1)
                }]
            );
        }  

        (autoPlayFireworks) ? 
            gsap.delayedCall(3.5,autoPlay) : gsap.killTweensOf(autoPlay);
}
onMount(() =>
{
    stage = document.querySelector(".stage");

    stage.onpointerup = (mouse : MouseEvent) =>
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
        width:      100%;
        height:     100%;
        overflow:   hidden;
        position:   absolute;
        top:        0;
        font-size:  19px;
    }

</style>
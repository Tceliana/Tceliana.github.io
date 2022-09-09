<script type="ts">

    import { onMount }          from "svelte";
    import gsap                 from "gsap";
    import { getRandomNumber }  from "@/Scripts/maths";

    export let showTrigger       : boolean  = false;
    export let autoPlayFireworks : boolean  = true;
    export let autoStartY        : number   = 1500;

    type VectorPos = { x: number; y: number };

    const firePosition   : VectorPos    = { x: 0, y: 0 };
    const svgElementType : string       = 'http://www.w3.org/2000/svg';

    let stage : any = null;

    window.addEventListener("scroll", () => 
    {
        let isScrollSurpassed : boolean = window.scrollY > autoStartY;
        if(isScrollSurpassed && !autoPlayFireworks)         toggleAuto();
        else if(!isScrollSurpassed && autoPlayFireworks)    toggleAuto();
    });

    window.onpointerdown = window.onpointermove = (mouse : MouseEvent) =>
    {
        firePosition.x = mouse.clientX;
        firePosition.y = mouse.clientY + window.scrollY;
    }

    function fire(firePositionArg : { x : number, y : number }) : void
    {
        const 
        g           : string    = 'g',
        path        : string    = 'path',
        circle      : string    = 'circle',
        firework    : Element   = 
            document.createElementNS(svgElementType, g),

        trail       : Element   = 
            document.createElementNS(svgElementType, g),

        ring        : Element   = 
            document.createElementNS(svgElementType, g),

        hsl         : string    = 
            'hsl('+getRandomNumber(0,360)+',100%,50%)'

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
                },
                {
                    y:      firePositionArg.y, 
                    ease:   'expo',
                    attr:
                    {
                        d: 'M0,0 0,'+innerHeight, 
                        'stroke-width':i,
                        opacity:    0.25, 
                        stroke:     hsl
                    },
                    duration: 0,
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
                        'stroke-dasharray': '1 '+ getRandomNumber(15,30)
                    }
                }
            );

            ring.appendChild(fwCircle);
        }

        gsap.timeline({onComplete: () => stage.removeChild(firework)})
                .to(trail.children, 
                    {
                        duration:   0.2, 
                        attr:       { d:'M0,0 0,0' }, 
                        stagger:    -0.08, 
                        ease:       'expo.inOut'
                    }, 
                    0
                )
                .to(trail.children, 
                    {
                        duration:   0.4, 
                        scale:      () => getRandomNumber(40,80),
                        attr:       { stroke:hsl }, 
                        stagger:    -0.15, 
                        ease:       'expo'
                    }, 
                    0.4
                )
                .to(trail.children, 
                    {
                        duration:   0.3, 
                        opacity:    0, 
                        ease:       'power2.inOut', 
                        stagger:    -0.1
                    }, 
                    0.5
                )
                .from(ring.children, 
                    {
                        duration:   1, 
                        scale:      0, 
                        stagger:    0.05, 
                        ease:       'expo'
                    }, 
                    0.4
                )
                .to(ring.children, 
                    {
                        opacity:    0, 
                        stagger:    0.1, 
                        ease:       'sine.inOut'
                    }, 
                    0.7
                )
                .to(ring.children, 
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
        for (let i : number = 0; i < getRandomNumber(3,9); i++)
        {
            gsap.delayedCall(
                i/2, 
                fire, 
                [{
                    x:getRandomNumber(99, innerWidth-99), 
                    y:getRandomNumber(window.scrollY, window.scrollY + innerHeight)
                }]
            );
        }  

        (autoPlayFireworks) ? 
            gsap.delayedCall(3.5,autoPlay) : gsap.killTweensOf(autoPlay);
}
onMount(() =>
{
    stage = document.querySelector(".stage");

    stage.onpointerup = (_ : MouseEvent) =>
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
    <svg stroke="#fff" stroke-linecap="round" style={$$props.style}>
        <g class="stage">
            <rect width="100%" height="100%" fill="rgba(0,0,0,0)" stroke="none"/>
        </g>
    </svg>
{/if}

<style>

    svg
    {
        width:      100%;
        height:     100%;
        overflow:   hidden;
        position:   absolute;
        top:        0;
        font-size:  19px;
        z-index:    300;
    }

</style>
<script lang="ts">
    import { getRandomNumber } from "../../maths";
    import {onMount} from "svelte";
    import gsap from "gsap";

    const image = "/Images/leafs/leaf"+getRandomNumber(1,10)+".svg";
    var leaf: HTMLElement;
    const scale = Math.random() * (2 - 0.5 + 1) + 0.5;

    onMount(()=>{
  		let leafWidth = leaf.clientWidth;
        let leafHeight = leaf.clientHeight;

		let screenWidth = window.innerWidth;

        const leafTimeline = gsap.timeline();
        leafTimeline.delay(Math.random() * 4);
        
        let AmplitudeX =  scale * getRandomNumber(1*leafWidth, 3*leafWidth);
        let startX = getRandomNumber(leafWidth, screenWidth-leafWidth);
        let duration = getRandomNumber(20,50)*scale;
        
        let numOscilations = scale*getRandomNumber(2,6);        
        let positionY:number = -leafHeight;
        let positionYDecrease = (window.innerHeight + 2*leafHeight)/(2*numOscilations);
        let apexTime = duration/((3*2*numOscilations))
        let altitude: number = 50;
        for(let i:number = 0; i < numOscilations; i++)
        {
            leafTimeline
            .fromTo(leaf, { x: startX - AmplitudeX/2,  }, { x: startX + AmplitudeX/2, ease: "Power2.easeInOut" , duration:duration/(2*numOscilations)})

            .fromTo(leaf, { y: positionY-altitude,  }, { y: positionY + positionYDecrease, ease: "Power1.easeInOut" , duration:duration/(2*numOscilations)-apexTime}, "<")
            .fromTo(leaf, { y: positionY + positionYDecrease,  }, { y: positionY + positionYDecrease -altitude, ease: "Power1.easeInOut" , duration:apexTime},">")
            
            .fromTo(leaf, { x: startX + AmplitudeX/2,  }, { x: startX - AmplitudeX/2, ease: "Power2.easeInOut" , duration:duration/(2*numOscilations)})

            .fromTo(leaf, { y: positionY + positionYDecrease -altitude,  }, { y: positionY + 2*positionYDecrease, ease: "Power1.easeInOut" , duration:duration/(2*numOscilations)-apexTime}, "<")
            .fromTo(leaf, { y: positionY + 2*positionYDecrease,  }, { y: positionY + 2*positionYDecrease -altitude, ease: "Power1.easeInOut" , duration:apexTime}, ">")

            positionY = positionY + 2*positionYDecrease;          
        }
        leafTimeline.repeat(-1).play();
    })

</script>
    <div bind:this={leaf} class="leaf" style=" background-image: url('{image}'); transform: scale({scale});" />
<style>
    .leaf
    {
        position:               static;
        width:                  10vw;
        height:                 10vh;
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 100%;
        top:                    0;
        left:                   0;
        overflow:               hidden;
    }

</style>

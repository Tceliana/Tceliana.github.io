<script lang="ts">
    import { getRandomNumber } from "../../maths";
    import {onMount} from "svelte";
    import gsap from "gsap";

    const image = "/Images/leafs/leaf"+getRandomNumber(1,9)+".svg";
    var leaf: HTMLElement;

    onMount(()=>{
  		let leafWidth = leaf.clientWidth;
        let leafHeight = leaf.clientHeight;

		let screenWidth = window.innerWidth;

        const leafTimeline = gsap.timeline();
        let scale = getRandomNumber(0.2,2);
        
        let AmplitudeX =  scale * getRandomNumber(1*leafWidth, 3*leafWidth);
        let startX = getRandomNumber(leafWidth, screenWidth-leafWidth);
        let duration = getRandomNumber(20,50);
        
        let numOscilations = getRandomNumber(1,3);
        
        let positionY:number = -leafHeight;
        let positionYDecrease = (window.innerHeight + 2*leafHeight)/(2*numOscilations);
        let apexTime = duration/((3*2*numOscilations))
        // let apexTime = 10;
        let altitude: number = 50;
        for(let i:number = 0; i < numOscilations; i++)
        {
            leafTimeline
            .fromTo(leaf, { x: startX - AmplitudeX/2, rotation: 0 }, { x: startX + AmplitudeX/2, rotation: 0, ease: "Power2.easeInOut" , duration:duration/(2*numOscilations)})

            .fromTo(leaf, { y: positionY-altitude, rotation: 0 }, { y: positionY + positionYDecrease, rotation: 0, ease: "Power1.easeInOut" , duration:duration/(2*numOscilations)-apexTime}, "<")
            .fromTo(leaf, { y: positionY + positionYDecrease, rotation: 0 }, { y: positionY + positionYDecrease -altitude, rotation: 0, ease: "Power1.easeInOut" , duration:apexTime},">")
            
            .fromTo(leaf, { x: startX + AmplitudeX/2, rotation: 0 }, { x: startX - AmplitudeX/2, rotation: 0, ease: "Power2.easeInOut" , duration:duration/(2*numOscilations)})

            .fromTo(leaf, { y: positionY + positionYDecrease -altitude, rotation: 0 }, { y: positionY + 2*positionYDecrease, rotation: 0, ease: "Power1.easeInOut" , duration:duration/(2*numOscilations)-apexTime}, "<")
            .fromTo(leaf, { y: positionY + 2*positionYDecrease, rotation: 0 }, { y: positionY + 2*positionYDecrease -altitude, rotation: 0, ease: "Power1.easeInOut" , duration:apexTime}, ">")

            positionY = positionY + 2*positionYDecrease;
            
            // .fromTo(leaf, { y: positionY, rotation: 0 }, { y: positionY - positionYDecrease, rotation: 0, ease: "Power4.easeInOut" , duration:duration/(2*numOscilations)}, 1)

        }

        leafTimeline.repeat(-1).play();
        
    })

</script>
    <div bind:this={leaf} class="leaf" style=" background-image: url('{image}')" />
<style>
    .leaf
    {
        position:static;
        width:10vw;
        height:10vh;
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 100%;
        top:0;
        left:0;
        transform : scaleY(-1);
        transform : rotate3d(1, 0, 0, 45deg);
        overflow: hidden;
    }

</style>

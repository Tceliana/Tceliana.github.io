<script lang="ts">
    import { getRandomNumber } from "../../maths";
    import {onMount} from "svelte";
    import gsap from "gsap";

    const image = "/images/leafs/leaf"+getRandomNumber(1,9)+".svg";
    var plane: HTMLElement;

    onMount(()=>{
  		let planeWidth = plane.clientWidth;
		let screenWidth = window.window.innerWidth;

        const flight = gsap.timeline();


        flight
        	.fromTo(plane, { x: - planeWidth, rotation: 0 }, { x: screenWidth, rotation: -45, ease: "Power4.easeIn" , duration:4})
        	.fromTo(plane, { y: 5 }, { y: -200, ease: "Power4.easeIn" , duration: 1,}, 3)
        	.fromTo(plane, { x: -planeWidth }, { x: screenWidth, ease: "Power0.easeNone", duration:1})
        	.to(plane, {y: -280, rotation: 0, ease: "Power1.easeOut", duration: .5}, 4)
        	.to(plane, {y: -200, rotation: 18, ease: "Power1.easeIn", duration: .5}, 4.5)
        	.addLabel('landing')
        	.fromTo(plane, { x: - planeWidth, rotation: 18 }, { x: screenWidth, rotation: 0, ease: "Power4.easeOut", duration: 5 })
        	.to(plane, { y:5, ease: "Power4.easeOut", duration:2, }, 'landing');
        flight.repeat(-1).play();
    })

</script>
    <div bind:this={plane} class="footer" style=" background-image: url('{image}')" />
<style>
    .footer
    {
        position:absolute;
        width:10vw;
        height:10vh;
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 100%;
        
    }

</style>

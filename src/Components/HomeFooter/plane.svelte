<script lang="ts">
    import {onMount} from "svelte";
    import gsap from "gsap";

    const image = "/images/tcela_dibus/tcela_plane.svg";
    var plane: HTMLElement;
    var defaultDuration :number= 2.5;
    onMount(()=>{
  		let planeWidth = plane.clientWidth;
		let screenWidth = window.window.innerWidth;

        const flight = gsap.timeline();

        flight
        	.fromTo(plane, { x: - planeWidth, rotation: 0 }, { x: screenWidth, rotation: -45, ease: "Power4.easeIn" , duration: defaultDuration+ 4})
        	.fromTo(plane, { y: 5 }, { y: -200, ease: "Power4.easeIn" , duration: defaultDuration+1,}, defaultDuration+3)
        	.fromTo(plane, { x: -planeWidth }, { x: screenWidth, ease: "Power0.easeNone", duration:defaultDuration+2})
        	.to(plane, {y: -280, rotation: 0, ease: "Power1.easeOut", duration: defaultDuration+.5}, defaultDuration+4)
        	.to(plane, {y: -200, rotation: 18, ease: "Power1.easeIn", duration: defaultDuration+.5}, defaultDuration+4.5)
        	.addLabel('landing')
        	.fromTo(plane, { x: - planeWidth, rotation: 18 }, { x: screenWidth, rotation: -15, ease: "Power4.easeOut", duration:defaultDuration+ 5 })
        	.to(plane, { y:5, ease: "Power4.easeOut", duration:defaultDuration+2, }, 'landing');
        flight.repeat(-1).play();
    })

</script>
<div class="bottom">
    <div bind:this={plane} class="footer" style=" background-image: url('{image}')" />
</div>
<style>
    .bottom
    {
        width:100vw;
        height:100vh;
        position:fixed;
        top: 0;
        z-index:100;
    }
    .footer
    {
        width:100vw;
        height:100vh;
        background-repeat:      no-repeat;
        background-position:    center bottom;
        background-size:        15% 15%;
    }

</style>

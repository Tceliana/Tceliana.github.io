<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        gsap.fromTo(
            "#bird",
            { opacity: 1 },
            {
                y: -250,
                x: 800,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: "0% top",
                    end: "10% top",
                    scrub: 1,
                    onEnter: function () {
                        gsap.to("#bird", { scaleX: 1, rotation: 0 });
                    },
                    onLeave: function () {
                        gsap.to("#bird", { scaleX: -1, rotation: -15 });
                    },
                },
            }
        );
    });
</script>

<p id="bird">BIRD</p>

<style>
</style>

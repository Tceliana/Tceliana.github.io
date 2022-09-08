<script lang="ts">
    import SocialNetLink from "./SocialNetLink.svelte";
    import gsap from "gsap";
    import { onMount } from "svelte";
    import { socialNetworks } from "@/Database/socialNetworks";

    onMount(() => {
        let duration: number = 4;
        const timeline = gsap.timeline();
        timeline.fromTo(".container", { x: "0vw" }, { x: "-100vw", duration: duration, ease: "expo.out" });
        timeline.fromTo(".container", { x: "-100vw" }, { x: "-200vw", delay: 4, duration: duration, ease: "expo.in" });
        timeline.fromTo(".container", { x: "-200vw" }, { x: "-200vw", delay: 0.2, ease: "expo.in" });
        timeline.fromTo(".container", { x: "-200vw" }, { x: "-125vw", duration: duration, ease: "expo.out" });
        timeline.fromTo(".container", { x: "-125vw" }, { x: "0vw", delay: 4, duration: duration, ease: "expo.in" });
        timeline.repeat(-1).play();
    });
</script>

<div class="container columns">
    <img class="balloon" src="/images/hot_air_balloons/hot_air_balloon.png" alt="Balloon" />
    <div class="leftTriangle" />
    <div class="banner columns">
        {#each socialNetworks as socialnet}
            <SocialNetLink
                link={socialnet.link}
                imageUrl={socialnet.imageURL}
                backgroundColor={socialnet.backgroundCol}
            />
        {/each}
    </div>
    <div class="rightTriangle" />
    <img
        class="balloon"
        src="/images/hot_air_balloons/hot_air_balloon.png"
        alt="Balloon"
        style="transform: scaleX(-1);"
    />
</div>

<style>
    .container {
        position: absolute;
        margin-top: 1%;
        justify-content: center;
        width: fit-content;
        right: -100%;
    }

    .balloon {
        width: 15vw;
        filter: drop-shadow(4px 5px 10px rgba(0, 0, 0, 0.4));
    }

    .banner {
        width: max-content;
        background-color: #bde4f7; /*#78cef5;*/
        height: 10vh;
        box-sizing: border-box;
        padding: 10px 10px;
        gap: 10px;
        align-content: space-between;
        filter: drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
    }

    .leftTriangle {
        width: 0;
        height: 0;
        border: 5vh solid transparent;
        border-left: 0;
        border-right: 10vh solid #bde4f7;
        filter: drop-shadow(5px 7px 2px rgba(0, 0, 0, 0.4));
    }

    .rightTriangle {
        width: 0;
        height: 0;
        border: 5vh solid transparent;
        border-right: 0;
        border-left: 10vh solid #bde4f7;
        filter: drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));
    }
</style>

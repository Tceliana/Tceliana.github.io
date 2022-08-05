<script lang="ts">
    import gsap from "gsap";
    import Appearable from "./Appearable.svelte";

    import RatingCard from "./RatingCard.svelte";
    gsap.registerPlugin(ScrollTrigger);
    export let name: string;
    export let stars: number;
    export let review: string;
    export let startPercentage: number;
    export let mode: "U" | "R" | "L" | "D";
    export let endPercentage: number;
</script>

<Appearable {startPercentage} {endPercentage} {mode} deltaSizePercentage={0.9}>
    {#if mode === "L"}
        <img class="TcelaImage" src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
        <RatingCard {name} {stars} {review} />
    {:else if mode === "R"}
        <RatingCard {name} {stars} {review} />
        <img class="TcelaImage flipX" src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
    {:else if mode === "U"}
        <img class="TcelaImage rotate90" src="./Images/TcelaDibus/patotataV.png" alt="Tcela speaking" />
        <RatingCard {name} {stars} {review} />
    {:else if mode === "D"}
        <RatingCard {name} {stars} {review} />
        <img class="TcelaImage flipY" src="./Images/TcelaDibus/patotataV.png" alt="Tcela speaking" />
    {/if}
</Appearable>

<style>
    .TcelaImage {
        width: 10vw;
    }

    .flipX {
        transform: scaleX(-1);
    }

    .flipY {
        transform: scaleY(-1);
    }
</style>

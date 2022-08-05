<script lang="ts">
    import Appearable from "../Appearable.svelte";
    import RatingLetter from "./RatingLetter.svelte";

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
        <RatingLetter {name} {stars} {review} />
    {:else if mode === "R"}
        <RatingLetter {name} {stars} {review} />
        <img class="TcelaImage flipX" src="./Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
    {:else if mode === "U"}
        <img class="TcelaImage rotate90" src="./Images/TcelaDibus/patotataV.png" alt="Tcela speaking" />
        <RatingLetter {name} {stars} {review} />
    {:else if mode === "D"}
        <RatingLetter {name} {stars} {review} />
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

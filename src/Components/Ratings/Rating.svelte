<script lang="ts">
    import Appearable   from "../Appearable.svelte";
    import RatingLetter from "./RatingLetter.svelte";
    import type { RatingInfo } from "../../ratings";

    export let ratingInfo       : RatingInfo;
    export let startPercentage  : number;
    export let endPercentage    : number;
    export let mode             : "U" | "R" | "L" | "D";
</script>

<Appearable {startPercentage} {endPercentage} {mode} deltaSizePercentage={0.9}>
    {#if mode === "L"}
        <img class="TcelaImage" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
        <RatingLetter {ratingInfo} />
    {:else if mode === "R"}
        <RatingLetter {ratingInfo} />
        <img class="TcelaImage flipX" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking" />
    {:else if mode === "U"}
        <img class="TcelaImage rotate90" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking" />
        <RatingLetter {ratingInfo} />
    {:else if mode === "D"}
        <RatingLetter {ratingInfo} />
        <img class="TcelaImage flipY" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking" />
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

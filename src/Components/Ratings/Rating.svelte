<script lang="ts">
    import Appearable   from "../Appearable.svelte";
    import RatingLetter from "./RatingLetter.svelte";
    import type { RatingInfo } from "../../ratings";

    export let ratingInfo       : RatingInfo;
    export let startPercentage  : number;
    export let endPercentage    : number;
    export let mode             : "U" | "R" | "L" | "D";

    let displayLetter = false;

</script>

<Appearable {startPercentage} {endPercentage} {mode} style="z-index:1">
    {#if mode === "L"}
        <img class="TcelaImage" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}/>
        <div class = "LetterContainer" style="left:100%;">
            {#if displayLetter}            
                <RatingLetter {ratingInfo} />
            {/if}           
        </div>
    {:else if mode === "R"}
        <div class = "LetterContainer" style="right:100%;">
            {#if displayLetter}            
                <RatingLetter {ratingInfo} />
            {/if}           
        </div>
        <img class="TcelaImage flipX" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}/>
    {:else if mode === "U"}
        <img class="TcelaImage rotate90" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}/>
        <div class = "LetterContainer" style="top:100%;">
            {#if displayLetter}            
                <RatingLetter {ratingInfo} />
            {/if}           
        </div>
    {:else if mode === "D"}
        <div class = "LetterContainer" style="bottom:100%">
            {#if displayLetter}
                <RatingLetter {ratingInfo} />
            {/if}
        </div>
        <img class="TcelaImage flipY" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}/>
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

    .LetterContainer
    {
        position:absolute;
        width:max-content;
    }
    
</style>

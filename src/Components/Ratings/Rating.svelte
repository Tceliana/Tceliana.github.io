<script lang="ts">
    import RatingLetter from "./RatingLetter.svelte";
    import ActiveByScroll from "@/Components/ActiveByScroll.svelte";
    import type { RatingInfo } from "@/Database/ratings";
    import { fly } from "svelte/transition";
    import { getRandomNumber } from "@/Scripts/maths";

    type Directions = "U" | "R" | "L" | "D";

    export let ratingInfo: RatingInfo;
    export let startPercentage: number;
    export let endPercentage: number;
    export let mode: Directions;

    let appearDuration = 340;

    let displayLetter: boolean = false;
    let setDisplayLetter = (value: boolean) => (displayLetter = value);

    let DISPLAY_ALLWAYS = false;
    if (DISPLAY_ALLWAYS) {
        displayLetter = true;
        setDisplayLetter = (value: boolean) => (displayLetter = true);
    }
</script>

<ActiveByScroll {startPercentage} {endPercentage}>
    {#if mode === "L"}
        <div
            class="Rating columns"
            style="left: 0; top:{getRandomNumber(5, 70)}%"
            transition:fly={{ x: -window.innerWidth / 2, duration: appearDuration }}
            on:mouseenter={() => setDisplayLetter(true)}
            on:mouseleave={() => setDisplayLetter(false)}
        >
            <div class="ImageContainer">
                <img class="TcelaImage" src="/images/tcela_dibus/patotata.png" alt="Tcela speaking" />
            </div>
            <div class="LetterContainer" style="left:100%;">
                {#if displayLetter}
                    <div transition:fly={{ x: -window.innerWidth / 2, duration: appearDuration }}>
                        <RatingLetter {ratingInfo} />
                    </div>
                {/if}
            </div>
        </div>
    {:else if mode === "R"}
        <div
            class="Rating columns"
            style="right: 0; top:{getRandomNumber(5, 70)}%"
            transition:fly={{ x: window.innerWidth / 2, duration: appearDuration }}
            on:mouseenter={() => setDisplayLetter(true)}
            on:mouseleave={() => setDisplayLetter(false)}
        >
            <div class="LetterContainer" style="right:100%;">
                {#if displayLetter}
                    <div transition:fly={{ x: window.innerHeight / 2, duration: appearDuration }}>
                        <RatingLetter {ratingInfo} />
                    </div>
                {/if}
            </div>
            <div class="ImageContainer">
                <img class="TcelaImage flipX" src="/images/tcela_dibus/patotata.png" alt="Tcela speaking" />
            </div>
        </div>
    {:else if mode === "U"}
        <div
            class="Rating rows"
            style="top: 0; left:{getRandomNumber(15, 75)}%"
            transition:fly={{ y: -window.innerHeight / 2, duration: appearDuration }}
            on:mouseenter={() => setDisplayLetter(true)}
            on:mouseleave={() => setDisplayLetter(false)}
        >
            <div class="ImageContainer">
                <img class="TcelaImage rotate90" src="/images/tcela_dibus/patotatav.png" alt="Tcela speaking" />
            </div>
            <div class="LetterContainer" style="top:100%;">
                {#if displayLetter}
                    <div transition:fly={{ y: -window.innerHeight / 2, duration: appearDuration }}>
                        <RatingLetter {ratingInfo} />
                    </div>
                {/if}
            </div>
        </div>
    {:else if mode === "D"}
        <div
            class="Rating rows"
            style="bottom: 0; right:{getRandomNumber(15, 75)}%"
            transition:fly={{ y: window.innerHeight / 2, duration: appearDuration }}
            on:mouseenter={() => setDisplayLetter(true)}
            on:mouseleave={() => setDisplayLetter(false)}
        >
            <div class="LetterContainer" style="bottom:100%">
                {#if displayLetter}
                    <div transition:fly={{ y: window.innerHeight / 2, duration: appearDuration }}>
                        <RatingLetter {ratingInfo} />
                    </div>
                {/if}
            </div>
            <div class="ImageContainer">
                <img class="TcelaImage flipY" src="/images/tcela_dibus/patotatav.png" alt="Tcela speaking" />
            </div>
        </div>
    {/if}
</ActiveByScroll>

<style>
    .Rating {
        position: fixed;
        align-self: flex-start;
        width: fit-content;
        height: fit-content;
        z-index: 400;
    }

    .TcelaImage {
        width: 10vw;
        vertical-align: bottom;
    }

    .flipX {
        transform: scaleX(-1);
    }

    .flipY {
        transform: scaleY(-1);
    }

    .LetterContainer {
        position: absolute;
        width: max-content;
    }

    .ImageContainer:hover {
        animation: shake 250ms 2 linear;
    }
</style>

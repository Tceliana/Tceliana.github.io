<script lang="ts">
    import { getRandomNumber } from "@/Scripts/maths";
    import type { RatingInfo } from "@/Database/ratings";
    import { onMount } from "svelte";
    export let ratingInfo: RatingInfo;
    const starsPath = [
        "/images/tickectsvg/estrellitas/patitoROUGE.svg",
        "/images/tickectsvg/estrellitas/patoNOIR.svg",
        "/images/tickectsvg/estrellitas/patapatoROUGE.svg",
        "/images/tickectsvg/estrellitas/patoROUGE.svg",
        "/images/tickectsvg/estrellitas/patitoNOIR.svg",
        "/images/tickectsvg/estrellitas/patapatoNOIR.svg",
    ];
    const getRandomStar = () => starsPath[getRandomNumber(0, starsPath.length - 1)];

    let textReview: HTMLElement;
    let scrollPercentage = -0.1;
    let backgroundScroll = 0;

    onMount(() => {
        if (HasScroll(textReview)) StartAutoScroll();
    });

    let HasScroll = (element: HTMLElement) => element.clientHeight * 1.1 <= element.scrollHeight;

    function StartAutoScroll() {
        let velocity = 0.0007;

        function AutoScroll() {
            if (textReview === null) return;
            textReview.scrollTop = Math.floor(scrollPercentage * textReview.scrollHeight);
            backgroundScroll = textReview.scrollTop - 0.248 * window.innerWidth;

            scrollPercentage += velocity;

            if (scrollPercentage > 1) scrollPercentage = -0.05;
        }
        setInterval(AutoScroll, 50);
    }
</script>

<div class="frame" style="background-image: url('images/pnggolden/goldenticketred.png');">
    <div class="rating rows">
        <div class="starsContainer">
            {#each Array(ratingInfo.stars) as _}
                <span class="full-star" style="background-image: url('{getRandomStar()}');" />
            {/each}
        </div>

        <div class="review-text" bind:this={textReview} style="background-position: center {-backgroundScroll}px">
            <b>{ratingInfo.name}</b>
            <br />
            {@html ratingInfo.review}
        </div>
    </div>
</div>

<style>
    .frame {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        padding: 1vh 4.1vw 0vh 4.8vw;
        height: 35vh;
        box-sizing: border-box;
    }

    .rating {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border: 100vw 100px;
    }

    .full-star {
        display: inline-block;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        color: #ef5025 !important;
        width: 4vh;
        height: 4vh;
        background-position: center center;
    }
    .starsContainer {
        display: flex;
        justify-content: flex-start;
        margin-left: 5vw;
        gap: 10px;
    }

    .review-text {
        background-image: url("/images/tickectsvg/9lineasrougeCentered.svg");

        text-align: center;

        width: 30vw;
        height: 24.5vh;

        word-wrap: break-word;
        overflow-y: hidden;
        font-size: 2.5vw;

        line-height: 1.55vw;
        line-height: 1.7vw;
    }
</style>

<script lang="ts">
    import { getRandomNumber } from "../../maths";
    import type { RatingInfo } from "../../ratings";
    import { onMount } from "svelte";
    export let ratingInfo : RatingInfo;

    const getRandomStar= () =>"/images/stars/star"+ getRandomNumber(1,3)+".png"
    
    let textReview:HTMLElement;
    
    onMount(() => {

        if(HasScroll(textReview))
            StartAutoScroll(textReview);

    });

    function HasScroll(element:HTMLElement):boolean    { return element.clientHeight*1.01 <= element.scrollHeight; }

    function StartAutoScroll(element:HTMLElement)
    {    
        let scrollPercentage = -0.05;
        function AutoScroll() {           
            element.scrollTop= Math.floor(scrollPercentage * element.scrollHeight);
            scrollPercentage+=0.0007
        
            if(scrollPercentage > 1)
                scrollPercentage=-0.05                        
        }
        setInterval(AutoScroll, 50);
    }
    
    let bgImage = "images/frames/cartek7.png";

</script>

<div class="frame" style="background-image: url('{bgImage}');">
    <div class="rating rows">
        <p>{ratingInfo.name}</p>
        <div class="starsContainer">
            {#each Array(ratingInfo.stars) as _}
                <span class="full-star" style= "background-image: url('{getRandomStar()}');"/>
            {/each}
        </div>
        <div class="review-separator" />
        <span class="review" bind:this="{textReview}">
            {ratingInfo.review}
        </span>
    </div>
</div>

<style>
    .frame {
        background-size:        cover;
        background-repeat:      no-repeat;
        background-position:    center center;
        background-size:        100% 100%;
        padding:                8vh 10vh;
        width:                  fit-content;
        box-sizing:             border-box;
    }

    .rating {
        display:            flex;
        justify-content:    flex-start;
        align-items:        flex-start;
        border:             10vw 10px;
    }
    .rating p {
        margin: 10px;
    }

    .review-separator {
        margin-bottom:          0px;
        height:                 6vh;
        width:                  100%;
        background-image:       url("/images/lines/hr.png");
        background-repeat:      no-repeat;
        background-position:    center center;
        background-size:        100% 100%;
    }
    .full-star {
        display:                inline-block;
        position:               relative;
        background-repeat:      no-repeat;
        background-position:    center center;
        background-size:        100% 100%;
        color:                  #ef5025 !important;
        width:                  1em;
        height:                 1em;
    }
    .starsContainer {
        display:            flex;
        justify-content:    flex-start;
    }

    .review {
        max-width: 30vw;
        max-height: 30vh;
        word-wrap: break-word;
        overflow-y: hidden;
        font-size:2.5vw;

        position: relative;
        display: inline-block !important;
        /* text-decoration:underline black 2px; */

        background-image:       url("/images/frames/underlines.png");
        background-size:        cover;
        width:                  fit-content;
        box-sizing:             border-box;
        background-size:        100% 14.1vw;
        background-position:    center 0.25vw;
        line-height:            1.7vw;
    }

</style>

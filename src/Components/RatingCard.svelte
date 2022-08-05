<script lang="ts">
    export let name: string;
    export let stars: number;
    export let review: string;
</script>

<div class="frame">
    <div class="rating rows">
        <p>{name}</p>
        <div class="starsContainer">
            {#each Array(stars) as _}
                <span class="full-star" />
            {/each}
        </div>
        <div class="review-separator" />
        <span class="review"><p>{review}</p></span>
    </div>
</div>

<style>
    .frame {
        background-image: url("/Images/Lines/ReviewFrame.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        padding: 8vh 10vh;
        width: fit-content;
        box-sizing: border-box;
    }

    .rating {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        border: 10vw 10px;
    }
    .rating p {
        margin: 10px;
    }

    .review-separator {
        margin-bottom: 0px;
        height: 6vh;
        width: 100%;
        background-image: url("/Images/Lines/hr.png");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
    }
    .full-star {
        display: inline-block;
        position: relative;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        background-image: url("/Images/Lines/star1.png");
        color: #ef5025 !important;
        width: 1em;
        height: 1em;
    }
    .starsContainer {
        display: flex;
        justify-content: flex-start;
    }

    .review {
        max-width: 30vw;
        word-wrap: break-word;
    }
</style>

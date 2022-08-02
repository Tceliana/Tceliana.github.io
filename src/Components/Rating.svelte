<script lang="ts">
    export let name: string;
    export let stars: number;
    export let review: string;
</script>

<div class="rating col-12 col-lg-4">
    <div class="review-item">
        <p>{name}</p>
        <div>
            {#each Array(stars) as _}
                <span class="full-star" />
            {/each}
        </div>
        <hr class="review-separator" />
        <span class="review"><p>{review}</p></span>
    </div>
</div>

<style>
    .rating {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0px 10px;
        background-color: #f4f4f4;
        border-radius: 1vh;
        box-shadow: 0 1px 10px 0 rgb(0 0 0 /30%);
    }

    .review-separator {
        margin-bottom: 10px;
    }
    .full-star:before {
        display: inline-block;
        position: relative;
        width: 1.1em;
        content: "\2605";
        color: #ef5025 !important;
    }
</style>

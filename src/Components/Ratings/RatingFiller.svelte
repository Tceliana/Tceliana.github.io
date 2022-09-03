<script lang="ts">
    import Rating from "./Rating.svelte";
    import { AllRatings } from "@/Database/ratings";
    import { getRandomNumber } from "@/Scripts/maths";

    const startPercentages = [...Array(AllRatings.length)].map(() => getRandomNumber(10, 70));
    function getNextMode(i: number): "U" | "D" | "R" | "L" {
        return ["U", "D", "R", "L"][i % 4] as any;
    }
</script>

{#each AllRatings as rating, i}
    <Rating
        ratingInfo={rating}
        startPercentage={startPercentages[i]}
        endPercentage={startPercentages[i] + 20}
        mode={getNextMode(i)}
    />
{/each}

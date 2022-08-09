<script lang="ts">
    import Rating from "./Rating.svelte";
    import { AllRatings } from "../../ratings";
    import { shuffleArray } from "../../maths";

    type UwuListType = { StartPercentage: number; mode: "U" | "D" | "R" | "L" }[];
    var uwuList: UwuListType = getUwUList();

    function getUwUList(): UwuListType {
        let returned: UwuListType = [];
        for (var i = 0; i <= 25; i++) {
            returned.push({
                StartPercentage: Math.floor(Math.random() * 25) + 70,
                mode: ["U", "D", "R", "L"][Math.floor(Math.random() * 4)] as "U" | "D" | "R" | "L",
            });
        }
        return returned;
    }

    shuffleArray(AllRatings);
    const ratingRange = [10, 60];
    const deltaPercentage = (ratingRange[1] - ratingRange[0]) / AllRatings.length;
    function getNextMode(i: number): "U" | "D" | "R" | "L" {
        return ["U", "D", "R", "L"][i % 4] as any;
    }
</script>

{#each AllRatings as rating, i}
    <Rating
        ratingInfo={rating}
        startPercentage={ratingRange[0] + i * deltaPercentage}
        endPercentage={ratingRange[0] + (i + 1) * deltaPercentage}
        mode={getNextMode(i)}
    />
{/each}
{#each uwuList as uwuItem}
    <Rating
        ratingInfo={{ name: "", stars: 5, review: "UWU" }}
        startPercentage={uwuItem.StartPercentage}
        endPercentage={100}
        mode={uwuItem.mode}
    />
{/each}

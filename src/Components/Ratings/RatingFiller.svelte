<script lang="ts">
    import Rating from "./Rating.svelte";
    import { AllRatings }   from "../../ratings";
    import { getRandomNumber, shuffleArray } from "../../maths";

    type UwuListType = { StartPercentage: number; mode: "U" | "D" | "R" | "L" }[];
    var uwuList: UwuListType = getUwUList();

    function getUwUList(): UwuListType {
        let returned: UwuListType = [];
        for (var i = 0; i <= 4; i++) {
            returned.push({
                StartPercentage: getRandomNumber(70,95),
                mode: ["U", "D", "R", "L"][getRandomNumber(0,3)] as "U" | "D" | "R" | "L",
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
        endPercentage={101}
        mode={uwuItem.mode}
    />
{/each}

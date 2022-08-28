<script lang="ts">
    import Rating from "./Rating.svelte";
    import { AllRatings }   from "../../Database/ratings";
    import { getRandomNumber} from "../../Scripts/maths";

    type UwuListType = { StartPercentage: number; mode: "U" | "D" | "R" | "L" }[];
    var uwuList: UwuListType = getUwUList();

    function getUwUList(): UwuListType {
        let returned: UwuListType = [];
        for (var i = 0; i < 5; i++) {
            returned.push({
                StartPercentage: getRandomNumber(70,80),
                mode: ["U", "D", "R", "L"][getRandomNumber(0,3)] as "U" | "D" | "R" | "L",
            });
        }
        return returned;
    }

    const startPercentages = [...Array(AllRatings.length)].map(()=> getRandomNumber(10,60))
    function getNextMode(i: number): "U" | "D" | "R" | "L" {
        return ["U", "D", "R", "L"][i % 4] as any;
    }

</script>

{#each AllRatings as rating, i}
    <Rating
        ratingInfo={rating}
        startPercentage={startPercentages[i]}
        endPercentage={startPercentages[i]+20}
        mode={getNextMode(i)}
    />
{/each}
{#each uwuList as uwuItem}
    <Rating
        ratingInfo={{ name: "", stars: 5, review: "UWU" }}
        startPercentage={uwuItem.StartPercentage}
        endPercentage={90}
        mode={uwuItem.mode}
    />
{/each}

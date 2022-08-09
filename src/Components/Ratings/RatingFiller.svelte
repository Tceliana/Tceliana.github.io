<script lang="ts">
    import Rating from "./Rating.svelte";

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
</script>

<Rating
    name="CarlosMushuTV"
    stars={1}
    review="Intento aprender de su contenido pero me es imposible por que me hornea demasiado verlo."
    startPercentage={10}
    endPercentage={20}
    mode="U"
/>
<Rating
    name="WilmiRosa"
    stars={5}
    review="¡Mejor programador de UwU!"
    startPercentage={15}
    endPercentage={25}
    mode="R"
/>
<Rating
    name="WayraisBleu"
    stars={5}
    review="Felizmente me encontré con este programador y me pareció una persona muy amable y atenta, por lo que casé con él."
    startPercentage={27}
    endPercentage={37}
    mode="L"
/>
<Rating
    name="Chicken"
    stars={5}
    review="Felizmente me encontré con este programador y me pareció una persona muy amable y atenta, por lo que casé con él."
    startPercentage={50}
    endPercentage={60}
    mode="D"
/>
{#each uwuList as uwuItem}
    <Rating
        name=""
        stars={5}
        review="UWU"
        startPercentage={uwuItem.StartPercentage}
        endPercentage={100}
        mode={uwuItem.mode}
    />
{/each}

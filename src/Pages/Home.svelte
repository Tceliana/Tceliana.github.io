<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import Rating from "../Components/Ratings/Rating.svelte";

    gsap.registerPlugin(ScrollTrigger);

    let title: HTMLElement = null;
    window.addEventListener("scroll", function () {
        let value: number = window.scrollY;
        title.style.paddingLeft = value * 5 + "px";
    });

    console.log("Inner Height = " + window.innerHeight);
    console.log("Inner Width = " + window.innerWidth);

    var uwuList = [];
    function FillList() {
        for (var i = 0; i <= 25; i++) {
            uwuList.push({
                StartPercentage: Math.floor(Math.random() * 25) + 70,
                mode: ["U", "D", "R", "L"][Math.floor(Math.random() * 4)],
            });
        }
    }
    FillList();

    onMount(() => {
        gsap.fromTo(
            "#bird",
            { opacity: 1 },
            {
                y: -250,
                x: 800,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".scrollElement",
                    start: "0% top",
                    end: "10% top",
                    scrub: 1,
                    onEnter: function () {
                        gsap.to("#bird", { scaleX: 1, rotation: 0 });
                    },
                    onLeave: function () {
                        gsap.to("#bird", { scaleX: -1, rotation: -15 });
                    },
                },
            }
        );
    });
</script>

<div style="min-height: 1000vh;">
    <div class="rows">
        <h1 bind:this={title} style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">Tceliana</h1>
        <p id="bird">BIRD</p>
        <p>The story begins.</p>
        <img class="hearth" src="./Images/hearth.svg" alt="hearth SVG" />
    </div>
</div>
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

<style>
    .hearth {
        width: 120vw;
    }
</style>

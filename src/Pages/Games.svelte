<script lang="ts">
    import Fireworks from "@/Components/Decorations/Fireworks.svelte";
    import GameView from "@/Components/Games/GameView.svelte";
    import Games from "@/Database/gameInfo";
    import Background from "@/Components/Games/background.svelte";

    const gameHeight: number = window.innerHeight;
    const pageHeight: number = gameHeight * Games.length + 4 * window.innerHeight; // surplus in order to fit the footer image U
</script>

<Fireworks showTrigger autoStartY={0} style="z-index:0;" />

<Background />
<div style="min-height: {pageHeight}px;">
    <div class="background" />
    <div class="rows">
        <h1 class="title">JUEGOS</h1>
        {#each Games as game, index}
            <GameView
                flipX={index % 2 != 0}
                startAtPixelY={(index + 1) * gameHeight}
                endAtPixelY={(index + 2) * gameHeight}
                gameInfo={game}
            />
        {/each}
    </div>
    <img class="footer" src="/images/tcela_dibus/footergames2.png" alt="Tcela looking at infinitum xD" />
</div>

<style>
    .title {
        font-family: "earthsmightiestbold";
        color: var(--COLOR_PRIMARY);
        font-size: 2em;
        filter: drop-shadow(6px 5px 1px #fc6342);
    }
    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        z-index: -1;
    }
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        background-image: (var(--COLOR_BACKGROUND), var(--COLOR_BACKGROUND), var(--COLOR_BEACH));
        z-index: -100;
    }
</style>

<script lang="ts">
    import Fireworks from "@/Components/Decorations/Fireworks.svelte";
    import GameView from "@/Components/Games/GameView.svelte";
    import Games from "@/Database/gameInfo";
    const pageHeight: number = (Games.length + 1) * 1;
    let max_scrollbar_height: number = window.innerHeight * pageHeight;
</script>

<Fireworks showTrigger style="z-index:0;" />

<div style="min-height: {(pageHeight + 1.8) * 100}vh;">
    <div class="background" />
    <div class="rows">
        <h1 style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY); ">GAMES</h1>
        {#each Games as game, index}
            <GameView
                flipX = {index % 2 != 0}
                startAtPixelY={index * max_scrollbar_height / Games.length}
                endAtPixelY={(index + 1) * max_scrollbar_height / Games.length}
                gameInfo={game}
            />
        {/each}
    </div>
    <img class="footer" src="/images/tcela_dibus/beach.png" alt="Tcela looking at infinitum xD" />
</div>

<style>
    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        margin-left: 0px;
    }
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        background-image: linear-gradient(var(--COLOR_BACKGROUND), var(--COLOR_BACKGROUND), var(--COLOR_BEACH));
        z-index: -100;
    }
</style>

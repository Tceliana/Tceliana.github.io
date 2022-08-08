<script lang="ts">
    import GameView from "../Components/Games/GameView.svelte";
    import Games from "../gameInfo";
    const max_scrollbar_height: number = document.body.scrollHeight - window.innerHeight;

    console.log(Games[0]);
</script>

<div class="background" />
<div class="rows">
    <h1 style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY);">GAMES</h1>
    <GameView startAtPixelY={0.1 * max_scrollbar_height} endAtPixelY={0.3 * max_scrollbar_height} gameInfo={Games[0]} />
    <GameView
        flipX
        startAtPixelY={0.3 * max_scrollbar_height}
        endAtPixelY={0.5 * max_scrollbar_height}
        gameInfo={Games[0]}
    />
</div>
<img class="footer" src="./Images/TcelaDibus/beach.png" alt="Tcela looking at infinitum xD" />

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
        z-index: -2;
    }
</style>

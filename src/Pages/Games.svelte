<script lang="ts">
    import GameView from "../Components/Games/GameView.svelte";
    import Games from "../gameInfo";
    const max_scrollbar_height: number = document.body.scrollHeight - window.innerHeight;

    console.log(Games[0]);
</script>

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

<style>
</style>

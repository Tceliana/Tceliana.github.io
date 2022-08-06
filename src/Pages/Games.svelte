<script lang="ts">
    import GameView from "../Components/Games/GameView.svelte";

    const max_scrollbar_height: number = document.body.scrollHeight - window.innerHeight;
</script>

<div class="rows">
    <h1 style="font-family: earthsmightiestbold; color: var(--COLOR_PRIMARY);">GAMES</h1>
    <GameView flipX startAtPixelY={0.1 * max_scrollbar_height} endAtPixelY={0.3 * max_scrollbar_height} />
</div>

<style>
</style>

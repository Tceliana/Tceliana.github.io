<script lang="ts">
    import type { GameInfo } from "../../gameInfo";
    export let gameInfo: GameInfo;
    let stylish = $$props.style;
</script>

<div class="gameView" style={stylish}>
    <a href={gameInfo.link[0]}>{gameInfo.title}</a>
    <div>{gameInfo.description}</div>
</div>

<style>
</style>

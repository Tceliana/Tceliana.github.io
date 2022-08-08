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
    .gameView {
        box-sizing: border-box;
        margin-left: 1vw;
        padding: 5vh 1vw;
        filter: drop-shadow(0px 2px 3px rgba(0, 0, 255, 0.5));
        background-color: rgb(255 255 255 /10%);
        border-radius: 0.5vh;
        box-shadow: 0 1px 9px 0 rgb(0 0 0 / 20%);
        height: fit-content;
        max-height: 100%;
        margin: 1vh 2vw;
    }
</style>

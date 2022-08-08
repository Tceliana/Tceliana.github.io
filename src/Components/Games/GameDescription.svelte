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
        padding: 2vh 1vw;
        filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.2));
        box-shadow: 20px;

        background-color: rgb(255 255 255 /10%);
        border-radius: 0.5vh;
        box-shadow: 0 1px 10px 0 rgb(0 0 0 /5%);
    }
</style>

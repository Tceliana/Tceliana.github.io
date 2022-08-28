<script lang="ts">
    import type { GameInfo } from "../../Database/gameInfo";

    export let gameInfo : GameInfo;
    
    let stylish : any = $$props.style;
</script>

<div class="gameView" style={stylish}>
    <h2>
        <a href={gameInfo.link[0]}>{gameInfo.title}</a>
    </h2>
    <div>{@html gameInfo.description}</div>
</div>

<style>
    
    h2 
    {
        position:                   relative;
        margin:                     0 0 1vh 0;
        color:                      var(--COLOR_SECONDARY);
        margin-left:                auto;
        margin-right:               auto;
        width:                      fit-content;
        font-weight:                lighter;
        text-decoration:            underline;
        text-decoration-thickness:  0.3vh;
    }

    a 
    {
        text-decoration:    none;
        color:              inherit;
    }

    h2:hover 
    {
        font-weight: bolder;
    }

    .gameView 
    {
        box-sizing:         border-box;
        margin-left:        1vw;
        padding:            1vh 1vw 2vh 1vw;
        filter:             drop-shadow(0px 2px 3px rgba(0, 0, 255, 0.3));
        background-color: rgb(255 255 255 /10%);
        border-radius:      0.5vh;
        box-shadow:         0 1px 9px 0 rgb(0 0 0 / 20%);
        height:             fit-content;
        max-height:         100%;
        margin:             1vh 2vw;
    }
    
</style>

<script lang="ts">
    import GameDescription      from "./GameDescription.svelte";
    import SvgScrollPath        from "./SVGScrollPath.svelte";
    import EmbeddedLink         from "./EmbeddedLink.svelte";
    import { getPercentage }    from "../../maths";
    import type { GameInfo }    from "../../gameInfo";

    export let gameInfo         : GameInfo;
    export let flipX            : boolean = false;
    export let startAtPixelY    : number;
    export let endAtPixelY      : number;

    const startScrollUpAtPixelY : number 
        = startAtPixelY + (endAtPixelY - startAtPixelY) * 0.8;

    let YPosition                   : number;
    let pathPercentage              : number = 0; // 0 to 1 between StartAtPixelY and startScrollUpAtPixelY
    let scrollUpPercentage          : number = 0; // 0 to 1 between startScrollUpAtPixelY and endAtPixelY
    let imageOpacity                : number = 0;
    let gameDescriptionOpacity      : number = 0;
    let gameDescriptionAppearance   : number = 0;

    let hasEnteredDisplay = false;

    function resetVariables()
    {
        pathPercentage = 0;
        scrollUpPercentage = 0;
        imageOpacity = 0;
        gameDescriptionOpacity = 0;
        gameDescriptionAppearance = 0;
    }

    window.addEventListener("scroll", () => 
    {
        if(isDisplayed(YPosition) === false)
        {
            resetVariables();
            return;
        }
        
        if (YPosition < startScrollUpAtPixelY)
            scrollUpPercentage = 0;
        else 
            scrollUpPercentage = getPercentage(startScrollUpAtPixelY, endAtPixelY, YPosition);
    });

    function Animation(miliSecondsDuration:number = 1200)
    {
        const frameRate = 30;
        let animationPercentage = 0;
        let animationID = null;
        
        function Update()
        {
            animationPercentage += frameRate/miliSecondsDuration;
            pathPercentage = Math.min(animationPercentage, 1);
            imageOpacity = getPercentage(0.2, 0.5, pathPercentage);
            gameDescriptionOpacity = getPercentage(0.5, 0.8, pathPercentage);
            gameDescriptionAppearance = getPercentage(0, 0.8, pathPercentage);

            if(animationPercentage >=1 || isDisplayed(YPosition) === false)
                clearInterval(animationID);            

        }
        animationID = setInterval(Update, frameRate)
    }

    function isDisplayed(Ypos : number) : boolean 
    {
        const returned = Ypos > startAtPixelY && Ypos < endAtPixelY;
        if(returned === true && hasEnteredDisplay == false)
        {
            hasEnteredDisplay = true;
            Animation();
        }
        else if(returned === false)
        {
            resetVariables();
            hasEnteredDisplay = false;
        }
        return returned;
    }
</script>

<div
    class="gameView"
    style="margin-top:{-scrollUpPercentage * window.innerHeight}px; opacity:{isDisplayed(YPosition)
        ? 1
        : 0}; margin-right:{isDisplayed(YPosition) ? 0 : 200}vw "
> 
    {#if isDisplayed(YPosition)}
        <SvgScrollPath {flipX} percentageCompleted={pathPercentage} />
    {/if}
    <div class="columns">
        <div class="midScreen" style="opacity:{flipX ? imageOpacity : gameDescriptionOpacity}">
            {#if flipX}
                <div class="ImagePositionerL">
                    <EmbeddedLink
                        embeddedLink={gameInfo.embeddedLink}
                        aspectRatio={gameInfo.embeddedAspect}
                        isDisplayed={isDisplayed(YPosition)}
                    />
                </div>
            {:else}
                <div class="TextPositioner" style="margin-left:-{100 - gameDescriptionAppearance * 100}%;">
                    <GameDescription {gameInfo} />
                </div>
            {/if}
        </div>
        <div class="midScreen" style="opacity:{flipX ? gameDescriptionOpacity : imageOpacity}">
            {#if flipX}
                <div class="TextPositioner" style="margin-left:-{100 - gameDescriptionAppearance * 100}%;">
                    <GameDescription {gameInfo} />
                </div>
            {:else}
                <div class="ImagePositionerR">
                    <EmbeddedLink
                        embeddedLink={gameInfo.embeddedLink}
                        aspectRatio={gameInfo.embeddedAspect}
                        isDisplayed={isDisplayed(YPosition)}
                    />
                </div>
            {/if}
        </div>
    </div>
</div>

<svelte:window bind:scrollY={YPosition} />

<style>
    
    .gameView 
    {
        position:   fixed;
        top:        0;
    }

    .midScreen 
    {
        width:  50vw;
        height: 100vh;
    }

    .ImagePositionerL 
    {
        position:   absolute;
        width:      38.8%;
        left:       11.25%;
        height:     62.4%;
        bottom:     22.45%;
    }
    .ImagePositionerR 
    {
        position:   absolute;
        width:      38.8%;
        right:      11.05%;
        height:     62.4%;
        bottom:     22.45%;
    }

    .TextPositioner 
    {
        position:   absolute;
        height:     62.4%;
        bottom:     22.45%;
        width:      50%;
    }

</style>

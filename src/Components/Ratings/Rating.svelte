<script lang="ts">
    import Appearable   from "../Appearable.svelte";
    import RatingLetter from "./RatingLetter.svelte";
    import type { RatingInfo } from "../../ratings";

    export let ratingInfo       : RatingInfo;
    export let startPercentage  : number;
    export let endPercentage    : number;
    export let mode             : "U" | "R" | "L" | "D";

    let displayLetter = false;

</script>

<Appearable {startPercentage} {endPercentage} {mode} style="z-index:1">
    {#if mode === "L"}
        <div class="ImageContainer" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}>
            <img class="TcelaImage" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking"/>
        </div>
        <div class = "LetterContainer" style="left:100%;">
            {#if displayLetter}            
                <div class ="MoveLR" >
                    <RatingLetter {ratingInfo} />
                </div>
            {/if}           
        </div>
    {:else if mode === "R"}
        <div class = "LetterContainer" style="right:100%;">
            {#if displayLetter}            
                <div class ="MoveRL" >
                    <RatingLetter {ratingInfo} />
                </div>
            {/if}           
        </div>
        <div class="ImageContainer" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}>
            <img class="TcelaImage flipX" src="/Images/TcelaDibus/patotata.png" alt="Tcela speaking"/>
        </div>
    {:else if mode === "U"}
        <div class="ImageContainer" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}>
            <img class="TcelaImage rotate90" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking"/>
        </div>
        <div class = "LetterContainer" style="top:100%;">
            {#if displayLetter}
                <div class ="MoveUD" >
                    <RatingLetter {ratingInfo} />
                </div>
            {/if}           
        </div>
    {:else if mode === "D"}
        <div class = "LetterContainer" style="bottom:100%">
            {#if displayLetter}
                <div class ="MoveDU" >
                    <RatingLetter {ratingInfo} />
                </div>
            {/if}
        </div>
        <div class="ImageContainer" on:mouseenter={()=> displayLetter = true} on:mouseleave={()=> displayLetter = false}>
            <img class="TcelaImage flipY" src="/Images/TcelaDibus/patotataV.png" alt="Tcela speaking"/>
        </div>
    {/if}
</Appearable>

<style>
    .TcelaImage {
        width: 10vw;
        vertical-align: bottom;
    }

    .flipX {
        transform: scaleX(-1);
    }

    .flipY {
        transform: scaleY(-1);
    }

    .LetterContainer
    {
        position:absolute;
        width:max-content;
    }

     .ImageContainer{
        z-index:1;
    } 

    .ImageContainer:hover {
		  animation: shake 250ms 2 linear;
    }

    @keyframes shake {
		  0% {
		    transform: translate(3px, 0);
		  }
          25%
          {
            transform: scaleX(1.2) scaleY(0.8);
          }
		  50% {
		    transform: translate(-3px, 0);
		  }
          75%
          {
            transform: scaleX(0.8) scaleY(1.2);
          }
		  100% {
		    transform: translate(0, 0) scale(1);
		  }
		}


        .MoveUD{
            animation: UD 500ms 1 ease-out;
        }
        @keyframes UD {
		  0%    {transform: translate(0, -100vh);	}
          50%   {transform: translate(0, -100vh);	}          
		  100%  {transform: translate(0, 0);		}
		}

        .MoveDU{
            animation: DU 500ms 1 ease-out;
        }
        @keyframes DU {
		  0%    {transform: translate(0, 100vh);	}
          50%   {transform: translate(0, 100vh);	}          
		  100%  {transform: translate(0, 0);		}
		}

        .MoveLR{
            animation: LR 500ms 1 ease-out;
        }
        @keyframes LR {
		  0%    {transform: translate(-100vw, 0);	}
          50%   {transform: translate(-100vw, 0);	}          
		  100%  {transform: translate(0, 0);		}
		}

        .MoveRL{
            animation: RL 500ms 1 ease-out;
        }
        @keyframes RL {
		  0%    {transform: translate(100vw, 0);	}
          50%   {transform: translate(100vw, 0);	}          
		  100%  {transform: translate(0, 0);		}
		}


</style>

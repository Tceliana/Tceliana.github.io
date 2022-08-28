<script lang="ts">
    import MovingContainer      from "./MovingContainer.svelte";
    import RatingLetter         from "./RatingLetter.svelte";
    import ActiveByScroll       from "../ActiveByScroll.svelte";
    import type { RatingInfo }  from "../../Database/ratings";

    type Directions = "U" | "R" | "L" | "D";

    export let ratingInfo       : RatingInfo;
    export let startPercentage  : number;
    export let endPercentage    : number;
    export let mode             : Directions;

    let displayLetter   : boolean = false;
    function setDisplayLetter(value:boolean) {displayLetter = value;}
</script>

<ActiveByScroll {startPercentage} {endPercentage}>
    <MovingContainer {startPercentage} {endPercentage} {mode} style="z-index:400">
        {#if mode === "L"}
            <div class="columns" on:mouseenter={()=>setDisplayLetter(true)} on:mouseleave={()=>setDisplayLetter(false)}>
                <div class="ImageContainer">
                    <img class="TcelaImage" src="/images/tcela_dibus/patotata.png" alt="Tcela speaking"/>
                </div>
                <div class = "LetterContainer" style="left:100%;">
                    {#if displayLetter}            
                        <div class ="MoveLR" >
                            <RatingLetter {ratingInfo} />
                        </div>
                    {/if}           
                </div>
            </div>
        {:else if mode === "R"}
            <div class="columns" on:mouseenter={()=>setDisplayLetter(true)} on:mouseleave={()=>setDisplayLetter(false)}>
                <div class = "LetterContainer" style="right:100%;">
                    {#if displayLetter}            
                        <div class ="MoveRL" >
                            <RatingLetter {ratingInfo} />
                        </div>
                    {/if}           
                </div>
                <div class="ImageContainer">
                    <img class="TcelaImage flipX" src="/images/tcela_dibus/patotata.png" alt="Tcela speaking"/>
                </div>
            </div>
        {:else if mode === "U"}
            <div class="rows" on:mouseenter={()=>setDisplayLetter(true)} on:mouseleave={()=>setDisplayLetter(false)}>
                <div class="ImageContainer">
                    <img class="TcelaImage rotate90" src="/images/tcela_dibus/patotatav.png" alt="Tcela speaking"/>
                </div>
                <div class = "LetterContainer" style="top:100%;">
                    {#if displayLetter}
                        <div class ="MoveUD" >
                            <RatingLetter {ratingInfo} />
                        </div>
                    {/if}           
                </div>
            </div>
        {:else if mode === "D"}
            <div class="rows" on:mouseenter={()=>setDisplayLetter(true)} on:mouseleave={()=>setDisplayLetter(false)}>
                <div class = "LetterContainer" style="bottom:100%">
                    {#if displayLetter}
                        <div class ="MoveDU" >
                            <RatingLetter {ratingInfo} />
                        </div>
                    {/if}
                </div>
                <div class="ImageContainer">
                    <img class="TcelaImage flipY" src="/images/tcela_dibus/patotatav.png" alt="Tcela speaking"/>
                </div>
            </div>
        {/if}
    </MovingContainer>
</ActiveByScroll>

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
        z-index:399;
    } 

    .ImageContainer:hover {
		  animation: shake 250ms 2 linear;
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

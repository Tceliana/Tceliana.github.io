<script type="ts">
import all from "gsap/all";

    import { onMount } from "svelte";
    import Matrix from "./Matrix.svelte";

    const timestamps  : any[]     = [];

    export let show   : boolean   = false;
    export let setPasswordUnlocked  : (v:boolean) => void;

    export let passworUnlock : boolean   = false;
    let currentKey    : string    = "T";

    timestamps.unshift(getTimestamp());

    function getRandomAnimatecss() : string
    {
      const animations = ["animate__bounce"
                          ,"animate__flash"
                          ,"animate__pulse"
                          ,"animate__rubberBand"
                          ,"animate__shakeX"
                          ,"animate__shakeY"
                          ,"animate__headShake"
                          ,"animate__swing"
                          ,"animate__tada"
                          ,"animate__wobble"
                          ,"animate__jello"
                          ,"animate__heartBeat"
                          ,"animate__bounceIn"
                          ,"animate__bounceInDown"
                          ,"animate__bounceInLeft"
                          ,"animate__bounceInRight"
                          ,"animate__bounceInUp"
                          ,"animate__bounceOut"
                          ,"animate__bounceOutDown"
                          ,"animate__bounceOutLeft"
                          ,"animate__bounceOutRight"
                          ,"animate__bounceOutUp"
                          ,"animate__fadeIn"
                          ,"animate__fadeInDown"];
      return animations[Math.floor(Math.random() * animations.length)];
    }

    function getRandomKey() : string
    {
        if (currentKey === "T")
        {
            currentKey = "C";
            return "T";
        }
        else if (currentKey === "C")
        {
            currentKey = "E";
            return "C";
        }
        else if (currentKey === "E")
        {
            currentKey = "L";
            return "E";
        }
        else if (currentKey === "L")
        {
            currentKey = "A";
            return "L";
        }
        else if (currentKey === "A")
        {
            currentKey = "Q";
            return "A";
        }
        else if (currentKey === "Q")
        {
          var keyboard = document.getElementsByClassName("keyboard")[0];
          var allLi = keyboard.getElementsByTagName("li");
          for (var i = 0; i < allLi.length; i++) {
            allLi[i].classList.add("animate__animated");
            allLi[i].classList.add(getRandomAnimatecss());
            allLi[i].classList.add("animate__infinite");
            
          }
          setTimeout(() => {
            for (var i = 0; i < allLi.length; i++) allLi[i].classList.add("disolve");
            
            setTimeout(() => {
              passworUnlock = true;
              setPasswordUnlocked(true);
              show = false;
            }, 200);
            return "ç";
          }, 1000);
          
        }
        //return keys[getRandomNumber(0, keys.length - 1)];
    }

    function targetRandomKey() : void
    {
        const key : HTMLElement = document.getElementById(getRandomKey());
        console.log(key);
        key.classList.add("selected");
        let start : number = Date.now()
    }

function getTimestamp() : number
{
    return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => 
{
    const 
    keyPressed      : string        = String.fromCharCode(event.keyCode),
    keyElement      : HTMLElement   = document.getElementById(keyPressed),
    highlightedKey  : Element       = document.querySelector(".selected");
    console.log(keyPressed);
    console.log(keyElement);
    console.log(highlightedKey);
    keyElement.classList.add("hit");
    keyElement.addEventListener('animationend', () => 
    {
        keyElement.classList.remove("hit")
    })

    if (keyPressed === highlightedKey.innerHTML) 
    {
        timestamps.unshift(getTimestamp());
        const elapsedTime : number = timestamps[0] - timestamps[1];
        console.log(`Character per minute ${60/elapsedTime}`)
        highlightedKey.classList.remove("selected");
        targetRandomKey();
    } 
})

onMount(() => 
{ 
  if(!show) return;
  targetRandomKey();
  let deleteElement = document.getElementById("delete");
  deleteElement.remove();
})
</script>
<div class="disolve selected pinky ring middle pointer1st pointer2nd fill-out-key hit" id="delete"></div>
{#if show}
<li id="ç" style="list-style: none;"></li>
<div class="keyboard">
    <ul class="rowkb row-0">
        <li class="pinky" id="esc">ESC</li>
        <li class="pinky" id="1">1</li>
        <li class="ring" id="2">2</li>
        <li class="middle" id="3">3</li>
        <li class="pointer1st" id="4">4</li>
        <li class="pointer2nd" id="5">5</li>
        <li class="pointer2nd" id="6">6</li>
        <li class="pointer1st" id="7">7</li>
        <li class="middle" id="8">8</li>
        <li class="ring" id="9">9</li>
        <li class="pinky" id="10">0</li>
        <li class="pinky" >-</li>
        <li class="pinky" >+</li>
        <li class="pinky" id="back">BACK</li>
    </ul>
    <ul class="rowkb row-1">
        <li class="pinky" id="tab">TAB</li>
        <li class="pinky" id="Q">Q</li>
        <li class="ring" id="W">W</li>
        <li class="middle" id="E">E</li>
        <li class="pointer1st" id="R">R</li>
        <li class="pointer2nd" id="T">T</li>
        <li class="pointer2nd" id="Y">Y</li>
        <li class="pointer1st" id="U">U</li>
        <li class="middle" id="I">I</li>
        <li class="ring" id="O">O</li>
        <li class="pinky" id="P">P</li>
        <li class="pinky" >[</li>
        <li class="pinky" >]</li>
        <li class="pinky" >\</li>
    </ul>
    <ul class="rowkb row-2">
        <li class="pinky" id="caps">CAPS</li>
        <li class="pinky" id="A">A</li>
        <li class="ring" id="S">S</li>
        <li class="middle" id="D">D</li>
        <li class="pointer1st" id="F">F</li>
        <li class="pointer2nd" id="G">G</li>
        <li class="pointer2nd" id="H">H</li>
        <li class="pointer1st" id="J">J</li>
        <li class="middle" id="K">K</li>
        <li class="ring" id="L">L</li>
        <li class="pinky" >:</li>
        <li class="pinky" >''</li>
        <li class="pinky" id="enter">ENTER</li>
    </ul>
    <ul class="rowkb row-3">
        <li class="pinky" id="left-shift">SHIFT</li>
        <li class="pinky" id="Z">Z</li>
        <li class="ring" id="X">X</li>
        <li class="middle" id="C">C</li>
        <li class="pointer1st" id="V">V</li>
        <li class="pointer2nd" id="B">B</li>
        <li class="pointer2nd" id="N">N</li>
        <li class="pointer1st" id="M">M</li>
        <li class="middle" >,</li>
        <li class="ring" >.</li>
        <li class="pinky" >;</li>
        <li class="pinky" id="right-shift">SHIFT</li>
    </ul>
</div>
{/if}
{#if passworUnlock}
<Matrix />
<div><h2 id="pwd">Password Unlocked</h2>
</div>
<Matrix />
{/if}
<style>
#pwd {
    position: absolute;
    color: #80ff80;
    text-align: center;
    font-size: 3vw;
    letter-spacing: 2vw;
    transform: translate(-50%, -50%);
    z-index: 2;
    filter: drop-shadow(2px 2px 2px #80ff00);
}

    .keyboard 
    {
      margin-top:     20vw;
      display:        flex;
      flex-direction: column;
      max-width:      90%;
    }

  .rowkb 
  {
    list-style: none;
    display:    flex;
    margin:     0px;
    margin-top: 0.5vw;

  }

  li 
  {
    height:         2em;
    width:          3em;
    color:          rgba(0,0,0,0.7);
    border-radius:  0.4em;
    line-height:    3em;
    letter-spacing: 1px;
    margin:         0.2vw;
    transition:     0.3s;
    text-align:     center;
    font-size:      2vw;
  }

  #tab 
  {
    width: 5em;
  }

  #caps 
  {
    width: 6em;
  }

  #left-shift 
  {
    width: 8em;
  }

  #enter 
  {
    width: 6em;
  }

  #right-shift 
  {
    width: 8em;
  }

  #back 
  {
    width: 5em;
  }

  .pinky 
  { 
    background-color: crimson;
    border:           2px solid crimson;
  }

  .pinky.selected 
  {
    color: crimson;
  }

  .ring 
  { 
    background-color: coral;
    border:           2px solid coral;
  }
  .ring.selected 
  {
    color: coral;
  }

  .middle 
  { 
    background-color: darkorange;
    border:           2px solid darkorange;
  }
  .middle.selected  
  {
    color: darkorange;
  }

  .pointer1st 
  {
    background-color: gold;
    border:           2px solid gold;
  }
  .pointer1st.selected 
  {
    color: gold;
  }

  .pointer2nd { 
    background-color: khaki;
    border: 2px solid khaki;
  }
  .pointer2nd.selected {
    color: khaki;
  }

  .fill-out-key {
    background-color: slategrey;
    border: 2px solid slategrey;
  }

  .selected 
  {
    background-color: transparent;
    -webkit-animation: vibrate-1 0.3s linear infinite both;
    animation: vibrate-1 0.3s linear infinite both;
  }

  .hit {
    -webkit-animation: hit 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: hit 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  .disolve
  {
    animation: disolve 0.2s;
  }

  @-webkit-keyframes hit {
    0% {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes hit {
    0% {
      -webkit-transform: scale(1.2);
              transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }

  @-webkit-keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  }
  @keyframes vibrate-1 {
    0% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
    20% {
      -webkit-transform: translate(-2px, 2px);
              transform: translate(-2px, 2px);
    }
    40% {
      -webkit-transform: translate(-2px, -2px);
              transform: translate(-2px, -2px);
    }
    60% {
      -webkit-transform: translate(2px, 2px);
              transform: translate(2px, 2px);
    }
    80% {
      -webkit-transform: translate(2px, -2px);
              transform: translate(2px, -2px);
    }
    100% {
      -webkit-transform: translate(0);
              transform: translate(0);
    }
  }
  @keyframes disolve {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
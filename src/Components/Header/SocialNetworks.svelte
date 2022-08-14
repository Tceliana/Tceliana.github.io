<script lang="ts">

</script>


<div class="container">
  <div class="pointer"></div>
    <div class="columns bubble flexContainer">
      <div class="icon icon--instagram">
        <a target="_blank" href="https://www.instagram.com/donvictort/">
            <i class="fa-solid fa-heart"></i>
          </a>
      </div>
      <div class="icon icon--youtube">
        <a target="_blank" href="https://www.youtube.com/user/tenecela19?sub_confirmation=1">
          <i class="fa-solid fa-heart"></i>
        </a>
      </div>
      <div class="icon icon--itchio">
        <a target="_blank" href="https://tcela.itch.io/">
          <i class="fa-solid fa-heart"></i>
        </a>
      </div>
      <div class="icon icon--twitch">
        <a target="_blank" href="https://www.twitch.tv/tcela">
          <i class="fa-solid fa-heart"></i>
        </a>
      </div>
      <!-- <div class="icon icon--spotify">
        <a target="_blank" href="#">
          <i class="fa-solid fa-heart"></i>
        </a>
      </div> -->
      <div class="icon icon--github">
        <a target="_blank" href="https://github.com/tenecela19">
          <i class="fa-solid fa-heart"></i>
        </a>
      </div>
    </div>
</div>

<style>

.pointer {
    height: 3vw;
    width: 3vw;
    background: var(--COLOR_BUBBLE_BACKGROUND);
    margin: 0 auto;
    transform: rotate(45deg);
    border-radius: 12px 0 0 0;
    position: absolute;
    margin-left:2.25vw;
}

.bubble {
    height: 8vh;
    width:fit-content;
    background: var(--COLOR_BUBBLE_BACKGROUND);
    margin: 1.5vw 0px;
    border-radius: 20px;
    text-align: center;
    position:absolute;
    right:2vw;
    padding:1vw;
    box-sizing: border-box;
}

.flexContainer
{
    justify-content: space-around;
    gap: 0.5vw;
}

.icon {
  float: left;
  position: relative;
  width: 7vh;
  height: 7vh;
}

.icon:last-of-type {
  margin-right: 0;
}

.icon a {
  display: block;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  background-color: #fff;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.2s ease-out;
}

.icon a:hover {
  background-color: #222;
  background-size: 0%;
  transition: all 0.2s ease-out;
}

i {
  position: absolute;
  top: 25%;
  width: 100%;
  color: #fff;
  text-align: center;
  transition: all 0.3s ease-out;
  opacity: 0;
  filter: blur(25px);
  transform: translateZ(0);
  will-change: transform;
  left: 0px;
}

.icon:hover i {
  transition: all 0.3s ease-out;
  opacity: 1;
  filter: blur(0);
}

.icon--instagram a {
  background-color:#7c1afb;
  background-image: url("/Images/icons/instagram.svg"), linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(120,17,247,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(254,197,0,.8), rgba(0,0,255,0) 70.71%);
  background-size: 100% 100%;
}

.icon--itchio a {
  background-color: #fa5c5c;
  background-image: url("/Images/icons/itchio.svg"); 
}

.icon--twitch a {
  background-color: #9147ff;
  background-image: url("/Images/icons/twitch.svg"); 
}

.icon--youtube a {
  background-color: #ff0000;
  background-image: url("/Images/icons/YouTube.svg"); 
}

.icon--spotify a {
  background-color: #80b719;
  background-image: url("/Images/icons/spotify.svg"); 
}

.icon--github a {
  background-color: #4078c0;
  background-image: url("/Images/icons/github.svg");
}

</style>

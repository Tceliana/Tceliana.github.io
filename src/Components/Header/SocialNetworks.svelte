<script lang="ts">

</script>


<div class="container">
  <div class="pointer"></div>
    <div class="columns bubble flexContainer">
        <div class="icon icon--instagram">
          <a href="#">
            <i class="fa-solid fa-heart"></i>
          </a>
        </div>
        <div class="icon icon--flickr">
          <a href="#">
            <i class="fa-solid fa-heart"></i>
          </a>
        </div>
        <div class="icon icon--spotify">
          <a href="#">
            <i class="fa-solid fa-heart"></i>
          </a>
        </div>
        <div class="icon icon--github">
          <a href="#">
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
  background-color: #405de6;
  background-image: url("https://benhodgson.net/img/social/instagram.svg");
}

.icon--flickr a {
  background-color: #ff0084;
  background-image: url("https://benhodgson.net/img/social/flickr.svg");
}

.icon--spotify a {
  background-color: #80b719;
  background-image: url("https://benhodgson.net/img/social/spotify.svg");
}

.icon--github a {
  background-color: #4078c0;
  background-image: url("https://benhodgson.net/img/social/github.svg");
}

</style>

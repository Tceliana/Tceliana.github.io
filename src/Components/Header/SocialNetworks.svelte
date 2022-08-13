<script lang="ts">

</script>


<div class="container">
    <div class="pointer"></div>
    <div class="columns bubble">
        <div class="icon icon--twitter">
          <a href="#">
            <span class="icon__name">Twitter</span>
          </a>
        </div>
        <div class="icon icon--linkedin">
          <a href="#">
            <span class="icon__name">LinkedIn</span>
          </a>
        </div>
        <div class="icon icon--angellist">
          <a href="#">
            <span class="icon__name">Angellist</span>
          </a>
        </div>
        <div class="icon icon--instagram">
          <a href="#">
            <span class="icon__name">Instagram</span>
          </a>
        </div>
        <div class="icon icon--flickr">
          <a href="#">
            <span class="icon__name">Flickr</span>
          </a>
        </div>
        <div class="icon icon--spotify">
          <a href="#">
            <span class="icon__name">Spotify</span>
          </a>
        </div>
        <div class="icon icon--soundcloud">
          <a href="#">
            <span class="icon__name">Soundcloud</span>
          </a>
        </div>
        <div class="icon icon--songkick">
          <a href="#">
            <span class="icon__name">Songkick</span>
          </a>
        </div>
        <div class="icon icon--github">
          <a href="#">
            <span class="icon__name">GitHub</span>
          </a>
        </div>
          <div class="icon icon--codepen">
          <a href="#">
            <span class="icon__name">Codepen</span>
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
	height: 6vw;
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
}

.icon {
  float: left;
  position: relative;
  width: 5vw;
  height: 5vw;
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

.icon__name {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -7px;
  color: #fff;
  font-size: 13px;
  text-align: center;
  transition: all 0.3s ease-out;
  opacity: 0;
  filter: blur(25px);
  transform: translateZ(0);
  will-change: transform;
}
.icon:hover .icon__name {
  transition: all 0.3s ease-out;
  opacity: 1;
  filter: blur(0);
}

.icon--codepen a {
  background-color: #111;
  background-image: url("https://benhodgson.net/img/social/codepen.svg");
}

.icon--twitter a {
  background-color: #00aced;
  background-image: url("https://benhodgson.net/img/social/twitter.svg");
}

.icon--linkedin a {
  background-color: #007fb1;
  background-image: url("https://benhodgson.net/img/social/linkedin.svg");
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

.icon--soundcloud a {
  background-color: #f60;
  background-image: url("https://benhodgson.net/img/social/soundcloud.svg");
}

.icon--songkick a {
  background-color: #f80046;
  background-image: url("https://benhodgson.net/img/social/songkick.svg");
}

.icon--angellist a {
  background-color: #eee;
  background-image: url("https://benhodgson.net/img/social/angellist.svg");
}

.icon--github a {
  background-color: #4078c0;
  background-image: url("https://benhodgson.net/img/social/github.svg");
}

</style>

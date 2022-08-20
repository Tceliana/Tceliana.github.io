<script lang="ts">

  export let link :string;
  export let imageUrl :string;
  export let backgroundColor :string;

</script>

<div class="icon">
  <a target="_blank" href="{link}" style="background-color:{backgroundColor}; background-image:url({imageUrl})">
    <img class="heart" src="/images/heart.svg" alt="heart SVG <3"/> 
  </a>
</div>

<style>

.icon {
  float:      left;
  position:   relative;
  width:      7vh;
  height:     7vh;
}

.icon:last-of-type {
  margin-right: 0;
}

.icon a {
  display:              block;
  left:                 0;
  width:                100%;
  height:               100%;
  border:               0;
  border-radius:        10px;
  background-color:     #fff;
  background-size:      100%;
  background-repeat:    no-repeat;
  background-position:  center center;
  transition:           all 0.2s ease-out;
  filter:               drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
}

.icon a:hover {
  background-color: #222;
  background-size:  0%;
  transition:       all 0.2s ease-out;
}

img {
  width:          70%;
  color:        #fff;
  position:       absolute;
  left:           0;
  right:          0;
  top:            0;
  bottom:         0;
  margin:         auto;
  transition:     all 0.3s ease-out;
  opacity:        0;
  filter:         blur(25px);
  will-change:    transform;
}

.icon:hover img {
  transition: all 0.3s ease-out;
  opacity:    1;
  filter:     blur(0);
}

</style>

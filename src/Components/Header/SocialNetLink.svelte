<script lang="ts">

  export let link :string;
  export let imageUrl :string;
  export let backgroundColor :string;

</script>

<div class="icon">
  <a target="_blank" href="{link}" style="background-color:{backgroundColor}; background-image:url({imageUrl})">
      <i class="fa-solid fa-heart"></i>
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
  background-size:      70%;
  background-repeat:    no-repeat;
  background-position:  center center;
  transition:           all 0.2s ease-out;
}

.icon a:hover {
  background-color: #222;
  background-size:  0%;
  transition:       all 0.2s ease-out;
}

i {
  position:     absolute;
  top:          25%;
  width:        100%;
  color:      #fff;
  text-align:   center;
  transition:   all 0.3s ease-out;
  opacity:      0;
  filter:       blur(25px);
  transform:    translateZ(0);
  will-change:  transform;
  left:         0px;
}

.icon:hover i {
  transition: all 0.3s ease-out;
  opacity:    1;
  filter:     blur(0);
}

</style>

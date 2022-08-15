<script lang="ts">
import SocialNetLink from "./SocialNetLink.svelte";


const socialNets : {link:string, imageURL:string, backgroundCol:string}[]=
[
  {
    link:"https://www.twitch.tv/tcela",
    imageURL:"/Images/icons/twitch.svg",    
    backgroundCol:"#9147ff",
  },
  {
    link:"https://www.youtube.com/user/tenecela19?sub_confirmation=1",
    imageURL:"/Images/icons/YouTube.svg",    
    backgroundCol:"#ff0000",
  },
  {
    link:"https://tcela.itch.io/",
    imageURL:"/Images/icons/itchio.svg",    
    backgroundCol:"#fa5c5c",
  },
  {
    link:"https://github.com/tenecela19",
    imageURL:"/Images/icons/github.svg",    
    backgroundCol:"#4078c0",
  },
  {
    link:"https://www.instagram.com/donvictort/",
    imageURL:"/Images/icons/instagram.svg",
    backgroundCol:"#f800a0",
  }
]




</script>


<div class="container">
    <div class="columns bubble flexContainer">
      {#each  socialNets as socialnet}
        <SocialNetLink link={socialnet.link} imageUrl={socialnet.imageURL} backgroundColor={socialnet.backgroundCol} />
      {/each}
    </div>
</div>

<style>


.bubble {
    height:         8vh;
    width:          fit-content;
    background:     var(--COLOR_BUBBLE_BACKGROUND);
    margin:         1.5vw 0px;
    border-radius:  20px;
    text-align:     center;
    position:       absolute;
    right:          2vw;
    padding:        1vw;
    box-sizing:     border-box;
    filter: drop-shadow(-2px 5px 2px rgba(0, 0, 0, 0.4));
}

.flexContainer
{
    justify-content:  space-around;
    gap:              0.5vw;
}



</style>

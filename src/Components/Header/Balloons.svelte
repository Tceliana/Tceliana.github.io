<script lang="ts">
      import SocialNetLink    from "./SocialNetLink.svelte";
      import gsap             from "gsap";
      import {onMount}        from "svelte";

      let socialNets : {link:string, imageURL:string, backgroundCol:string}[]=
      [
      {
            link:"https://www.twitch.tv/tcela",
            imageURL:"/Images/icons/twitch.png",    
            //backgroundCol:"#9147ff",
            backgroundCol:"#b27fff",
      },
      {
            link:"https://tcela.itch.io/",
            imageURL:"/Images/icons/itchio.png",    
            //backgroundCol:"#fa5c5c",
            backgroundCol:"#faa3a3",
      },
      {
            link:"https://www.instagram.com/donvictort/",
            imageURL:"/Images/icons/instagram.png",
            //backgroundCol:"#f800a0",
            backgroundCol:"#f87ccc",
      },
      {
            link:"https://www.youtube.com/user/tenecela19?sub_confirmation=1",
            imageURL:"/Images/icons/YouTube.png",    
            //backgroundCol:"#ff0000",
            backgroundCol:"#ff7f7f",
      },
      {
            link:"https://github.com/tenecela19",
            imageURL:"/Images/icons/github.png",    
            //backgroundCol:"#4078c0",
            backgroundCol:"#80b7ff",
      },
      //   {
      //       link:"https://www.instagram.com/donvictort/",
      //       imageURL:"/Images/icons/linkedin.png",
      //       //backgroundCol:"#0077b5",
      //       backgroundCol:"#7fd3ff",
      //   },
      {
            link:"https://www.instagram.com/donvictort/",
            imageURL:"/Images/icons/spotify.png",
            //backgroundCol:"#1dd05d",
            backgroundCol:"#80ffad",
      },
      {
            link:"https://twitter.com/tenecela19",
            imageURL:"/Images/icons/twitter.png",
            //backgroundCol:"#1d9bf0",
            backgroundCol:"#7dcbff",
      },
      ]


      onMount(() => 
      {
            let duration : number = 4;
            const timeline = gsap.timeline();
            timeline.fromTo(".container", 
                  {x:"0vw", }, 
                  {x:"-100vw", duration: duration, ease: "expo.out"}
                  );
            timeline.fromTo(".container", 
                  {x:"-100vw", }, 
                  {x:"-200vw", delay:4, duration: duration, ease: "expo.in"}
                  );
            timeline.fromTo(".container", 
                  {x:"-200vw", }, 
                  {x:"-200vw", delay:0.2, ease: "expo.in"}
                  );
            timeline.fromTo(".container", 
                  {x:"-200vw", }, 
                  {x:"-125vw", duration: duration, ease: "expo.out"}
                  );
            timeline.fromTo(".container", 
                  {x:"-125vw", }, 
                  {x:"0vw", delay:4, duration: duration, ease: "expo.in"}
                  );
            timeline.repeat(-1).play();
      });

</script>


<div class="container columns">
      <img class="balloon" src="/Images/hot_air_balloons/hot_air_balloon.png" alt="Balloon"/>
      <div class="leftTriangle"></div>
      <div class="banner columns">
            {#each  socialNets as socialnet}
                  <SocialNetLink link={socialnet.link} imageUrl={socialnet.imageURL} backgroundColor={socialnet.backgroundCol} />
            {/each}
      </div>
      <div class="rightTriangle"></div>
      <img class="balloon" src="/Images/hot_air_balloons/hot_air_balloon.png" alt="Balloon" style="transform: scaleX(-1);"/>  
</div>

<style>
      .container
      {
            position:         absolute;
            margin-top:       1%;
            justify-content:  center;
            width:            fit-content;
            right:            -100%;
      }

      .balloon
      {
            width: 15vw;
      }

      .banner
      {
            width:            max-content;
            background-color:#bde4f7; /*#78cef5;*/
            height:           10vh;
            box-sizing:       border-box;
            padding:          10px 10px;
            gap:              10px;
            align-content:    space-between;
            filter:           drop-shadow(4px 5px 2px rgba(0, 0, 0, 0.4));
      }

      .leftTriangle
      {
            width:            0;
            height:           0;
            border:           5vh solid transparent;
            border-left:      0;
            border-right:     10vh solid #bde4f7;
            filter:           drop-shadow(5px 7px 2px rgba(0, 0, 0, 0.4));
      }

      .rightTriangle
      {
            width:            0;
            height:           0;
            border:           5vh solid transparent;
            border-right:     0;
            border-left:      10vh solid #bde4f7;
            filter:           drop-shadow(3px 5px 2px rgba(0, 0, 0, 0.4));
      }

</style>

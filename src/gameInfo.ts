
export interface GameInfo{
    title: string;
    description: string;
    link: [string];
	embeddedLink: string; //png,gif,mp4
    embeddedAspect: "expand" | "preserveRatio";

}



const Games: GameInfo[] =
[

{title:"UwU",
description: `UwU`,
link: ["https://www.twitch.tv/tcela"],
embeddedLink:"https://www.icegif.com/wp-content/uploads/2022/02/icegif-924.gif",
embeddedAspect :"expand"
},
    
    {title:"Tcela and Jayrumi dance",
description: `Yeah, this is not a game, but.. well, it's Tcela and Jayrumi dancing UwU.
`,
link: ["https://www.twitch.tv/tcela"],
embeddedLink:"https://user-images.githubusercontent.com/83143288/183411849-2297da5e-f505-4494-a920-7dd757433685.mp4",
embeddedAspect :"expand"
},

    {title:"Tentacles Ship",
description: `Miche jam game made with Unity.
Popular game for everyone.
2 fays of development and a lot.
Hope you like it. If not, give me feedback. Thanks!
`,
link: ["https://tcela.itch.io/tentacles-ship"],
embeddedLink:"https://user-images.githubusercontent.com/83143288/183268397-f2cbc797-ff76-44fd-8aca-866e16d18ede.png",
embeddedAspect :"expand"
},




{title:"Project (Paraminia)",
description: `Experiment # 7 wake up.
The military base is being destroyed by a failure in the system. 
One of the most promising experiments of the new century. 
Travel back in time, it has corrupted and freeing all the experiments saved for years. 
Destroying everything in its path and destroying the building. 
Creating a  breakdown in space time. We become the only option to be able to reverse what it may be the end of the world.
`,
link: ["https://tcela.itch.io/paraminia"],
embeddedLink:"https://www.youtube.com/watch?v=xoG298XpNLM",
embeddedAspect :"preserveRatio"
},

]

export default Games;
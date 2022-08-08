
export interface GameInfo{
    title: string;
    description: string;
    link: [string];
	embeddedLink: string; //png,gif,mp4
    embeddedAspect: "expand" | "preserveRatio";

}



const Games: GameInfo[] =
[{title:"Tentacles Ship",
description: `MICHE JAM GAME MADE WITH UNITY.
POPULAR GAME FOR EVERYONE. 
2 DAYS OF DEVELEPMENT AND A LOT.
HOP YOU LIKE IT. IF NOT GIVE ME A FEEDBACK. THANKS 

MICHE JAM GAME MADE WITH UNITY.
POPULAR GAME FOR EVERYONE. 
2 DAYS OF DEVELEPMENT AND A LOT.
HOP YOU LIKE IT. IF NOT GIVE ME A FEEDBACK. THANKS 


`,
link: ["https://tcela.itch.io/tentacles-ship"],
embeddedLink:"https://user-images.githubusercontent.com/83143288/183268397-f2cbc797-ff76-44fd-8aca-866e16d18ede.png",
embeddedAspect :"expand"
},

{title:"Tentacles Ship",
description: `MICHE JAM GAME MADE WITH UNITY.
POPULAR GAME FOR EVERYONE. 
2 DAYS OF DEVELEPMENT AND A LOT.
HOP YOU LIKE IT. IF NOT GIVE ME A FEEDBACK. THANKS 
`,
link: ["https://tcela.itch.io/tentacles-ship"],
embeddedLink:"https://user-images.githubusercontent.com/83143288/183268397-f2cbc797-ff76-44fd-8aca-866e16d18ede.png",
embeddedAspect :"preserveRatio"
},

]

export default Games;
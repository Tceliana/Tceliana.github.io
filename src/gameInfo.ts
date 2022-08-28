
export interface GameInfo{
    title: string;
    description: string;
    link: [string];
	embeddedLink: string; //png,gif,mp4
    embeddedAspect: "expand" | "preserveRatio";

}

const Games: GameInfo[] =
[    
{
    title:"Horror game (WIP)",
    description: `Under development (TODO TALK WITH MUSHU PILOT)`,
    link: ["https://www.twitch.tv/tcela"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/184445754-6798ff82-6ec8-4e25-b4a5-d7751938b0d2.mp4",
    embeddedAspect :"expand"
}, 
{
    title:"Super Dungeon",
    description: `Survival game where agility and strategy is the number one key to
    Get the victory, fight the hordes and advance all levels to the end.`,
    link: ["https://play.google.com/store/apps/details?id=com.TcelaGames.SuperDungeon"],
    embeddedLink:"https://www.youtube.com/watch?v=SYMWNhR8hdg",
    embeddedAspect :"expand"
}, 
{
    title:"Free Fall",
    description: `You will have to demonstrate your dodging skills, where the ball will have to dodge the walls until it reaches the goal. You can you can cross on the sides, or under them, all to your imagination.
    A game of strategy and speed.
    The higher the level, the more difficult it will be to reach the goal. Are you able to do it?`,
    link: ["https://play.google.com/store/apps/details?id=com.Tcela.FreeFall"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/187065006-f9c88b1f-8fc5-4bbc-8330-30f88e38712b.png",
    embeddedAspect :"expand"
}, 

{
    title:"Procedural Dungeon",
    description: `A basic way to develop a random and procedural 3D Dungeon with customized prefabs (models). Available on github!`,
    link: ["https://github.com/tenecela19/Dungeon_Procedural"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/184445747-ec89b0ea-8503-4dff-aac9-378c0c91ebf6.mp4",
    embeddedAspect :"expand"   
},    
{
    title:"Spatial Game",
    description: `The famous spatial game.`,
    link: ["https://www.twitch.tv/tcela"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/184445736-e8fd52fe-0961-4d05-aecc-c6a2d8e79aaf.mp4",
    embeddedAspect :"expand"
},
{
    title:"Tcela and Jayrumi dance",
    description: `Yeah, this is not a game, but.. well, it's Tcela and Jayrumi dancing!`,
    link: ["https://www.twitch.tv/tcela"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/183411849-2297da5e-f505-4494-a920-7dd757433685.mp4",
    embeddedAspect :"expand"
},
{
    title:"Tentacles Ship",
    description: `Miche jam game made with Unity.
    Popular game for everyone.
    2 fays of development and a lot.
    Hope you like it. If not, give me feedback. Thanks!`,
    link: ["https://tcela.itch.io/tentacles-ship"],
    embeddedLink:"/videos/TentaclesShip.mp4",
    embeddedAspect :"expand"
},
{
    title:"Project (Paraminia)",
    description: `Experiment # 7 wake up.
    The military base is being destroyed by a failure in the system. 
    One of the most promising experiments of the new century. 
    Travel back in time, it has corrupted and freeing all the experiments saved for years. 
    Destroying everything in its path and destroying the building. 
    Creating a  breakdown in space time. We become the only option to be able to reverse what it may be the end of the world.`,
    link: ["https://tcela.itch.io/paraminia"],
    embeddedLink:"https://www.youtube.com/watch?v=xoG298XpNLM",
    embeddedAspect :"preserveRatio"
},
{
    title:"UwU",
    description: `UwU`,
    link: ["https://www.twitch.tv/tcela"],
    embeddedLink:"https://www.icegif.com/wp-content/uploads/2022/02/icegif-924.gif",
    embeddedAspect :"expand"
},
{
    title:"The cake game?",
    description: `Sweetly made for you `,
    link: ["https://www.twitch.tv/tcela"],
    embeddedLink:"https://user-images.githubusercontent.com/83143288/184445812-c63af07f-c7aa-4628-837a-ec9548da0596.mp4",
    embeddedAspect :"expand"
},
{
    title:"El despertar de Arari",
    description: `El reposo de Arari fue interrumpido cuando un grupo de traficantes de fósiles extrajeron ilícitamente sus restos y los llevaron a un museo lejano. Ahora necesita tu ayuda para recuperar y restaurar la mitad de su cráneo.
    Explora distintos escenarios, presta atención a los objetos que te rodean y resuelve acertijos para que Arari pueda descansar en paz y para repatriar otros fósiles extraídos y vendidos ilegalmente.
    Tu misión será arriesgada, pero Arari estará junto a ti para guiarte.`,
    link: ["https://faramilner.itch.io/el-despertar-de-arari"],
    embeddedLink:"https://www.youtube.com/watch?v=EQQGTiAKNUk&t",
    embeddedAspect :"preserveRatio"
},

]

export default Games;
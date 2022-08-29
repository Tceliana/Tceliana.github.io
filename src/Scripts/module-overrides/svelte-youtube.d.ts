declare module 'svelte-youtube' {
  import { SvelteComponentTyped } from 'svelte';

  // THE PROPS ARE LOCATED IN: nodemodules/svelte-youtube/src/index.svelte
  // Read the docs of that library to know the accepted keys of the prop "options"

  interface YoutubeProps {
    class?:string;             // HTML class names for container element (optional)
    id?:string;                // HTML element ID for player (optional)
    videoId:string;            // Youtube video ID (required)
    options?:any = undefined;  // YouTube player options (optional)
  }
  
  export default class Youtube extends SvelteComponentTyped<YoutubeProps> {}
  
}
<script lang="ts">
    import Youtube from "svelte-youtube";
    
    type EmbeddedType = "png" | "gif" | "mp4" | "webm" | "youtube" | "tiktok";

    export let embeddedLink : string;
    export let aspectRatio  : "expand" | "preserveRatio" = "preserveRatio";
    export let isDisplayed  : boolean;

    let videoID         : string        = null;
    let embeddedType    : EmbeddedType  = getEmbeddedType(embeddedLink);
    let videoElement    : HTMLVideoElement;
    let youtubeVideo    : { playVideo: () => void; pauseVideo: () => void } = null;

    $: OnDisplay(isDisplayed), isDisplayed; // <- Reactive: executes OnDisplay(isDisplayed) each time the variable isDisplayed change its value

    function OnDisplay(isDisplayed : boolean) : void 
    {
        if (isVideoFormat(embeddedType) == false) return;

        if (isDisplayed) TryStartVideo();

        else PauseVideo();
    }

    function TryStartVideo() : void
    {
        if (videoElement)       videoElement.play();
        else if (youtubeVideo)  youtubeVideo.playVideo();
    }

    function PauseVideo() : void
    {
        if (videoElement)       videoElement.pause();
        else if (youtubeVideo)  youtubeVideo.pauseVideo();
    }

    function isVideoFormat(embeddedType : EmbeddedType) : boolean 
    {
        return ["mp4", "webm", "youtube", "tiktok"].includes(embeddedType);
    }

    function getEmbeddedType(link : string) : EmbeddedType 
    {
        if (embeddedLink.startsWith("https://www.youtube.com") || embeddedLink.startsWith("www.youtube.com")) 
        {
            videoID = getYoutubeId(link);
            
            if (videoID === null) 
            {
                console.error("TYPE " + link + " Isn't recognized.");
                return;
            }
            
            return "youtube";
        }
        if (embeddedLink.startsWith("https://www.tiktok.com") || embeddedLink.startsWith("www.tiktok.com")) 
        {
            videoID = embeddedLink.split("/")[embeddedLink.split("/").length - 1];
            
            return "tiktok";
        }

        if      (embeddedLink.endsWith(".png"))     return "png";
        else if (embeddedLink.endsWith(".gif"))     return "gif";
        else if (embeddedLink.endsWith(".mp4"))     return "mp4";
        else if (embeddedLink.endsWith(".webm"))    return "webm";

        console.error("TYPE " + link + " Isn't recognized.");
    }

    function getYoutubeId(link : string) : string | null 
    {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = link.match(regExp);
        return match && match[7].length == 11 ? match[7] : null;
    }

    const YoutubeOptions = 
    {
        width:  "100%",
        height: "100%",
        playerVars: 
        {
            rel:            0,
            modestbranding: 1,
            autoplay:       0
        }
    };

    function onYTVideoStart(event : any) : void 
    {
        youtubeVideo = event.detail.target;
    }
</script>

{#if embeddedType === "png"}
    <img src={embeddedLink} alt="Embedded link" class={aspectRatio} />
{:else if embeddedType === "gif"}
    <div class="expand ">
        <img src={embeddedLink} alt="Embedded link" class={aspectRatio} />
    </div>
{:else if embeddedType === "mp4" || embeddedType === "webm"}
    <div class="expand blackBackground">
        <video src={embeddedLink} class={aspectRatio} loop controls bind:this={videoElement} muted><track kind="captions" /></video>
    </div>
{:else if embeddedType === "youtube"}
    <Youtube videoId={videoID} options={YoutubeOptions} class="YOUTUBE_VIDEO_CONTAINER" on:ready={onYTVideoStart} />
{:else if embeddedType === "tiktok"}
    <!-- <blockquote
        class="tiktok-embed"
        cite="https://www.tiktok.com/@tceladev/video/{videoID}"
        data-video-id={videoID}
        style="width: 500px; height: 500px; scroll:hidden;"
    >
        <section />
    </blockquote> -->
    <iframe title="tiktok video" src="https://www.tiktok.com/embed/v2/{videoID}" class={aspectRatio} />
{/if}

<style>
    
    .blackBackground 
    {
        background-color: black;
    }
    
    .expand 
    {
        width:      100%;
        height:     100%;
        display:    block;
    }

    .preserveRatio 
    {
        width:      100%;
        position:   absolute;
        top:        50%;
        left:       50%;
        transform:  translate(-50%, -50%);
    }

</style>

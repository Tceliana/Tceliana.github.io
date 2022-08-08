<script lang="ts">
    import Youtube from "svelte-youtube";
    type EmbeddedType = "png" | "gif" | "mp4" | "webm" | "youtube";

    export let embeddedLink: string;
    export let aspectRatio: "expand" | "preserveRatio" = "preserveRatio";

    let videoID: string = null;
    let embeddedType: EmbeddedType = getEmbeddedType(embeddedLink);

    function getEmbeddedType(link: string): EmbeddedType {
        if (embeddedLink.startsWith("https://www.youtube.com") || embeddedLink.startsWith("www.youtube.com")) {
            videoID = getYoutubeId(link);
            console.log(videoID);
            if (videoID === null) {
                console.error("TYPE " + link + " Isn't recognized.");
                return;
            }
            return "youtube";
        }
        if (embeddedLink.endsWith(".png")) return "png";
        else if (embeddedLink.endsWith(".gif")) return "gif";
        else if (embeddedLink.endsWith(".mp4")) return "mp4";
        else if (embeddedLink.endsWith(".webm")) return "webm";

        console.error("TYPE " + link + " Isn't recognized.");
    }

    function getYoutubeId(link: string): string | null {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = link.match(regExp);
        return match && match[7].length == 11 ? match[7] : null;
    }

    const YoutubeOptions = {
        width: "100%",
        height: "100%",
        playerVars: {
            rel: 0,
            modestbranding: 1,
            autoplay: 1,
        },
    };

    function onYTVideoEnd(event) {
        event.detail.target.playVideo();
    }
</script>

{#if embeddedType === "png"}
    <img src={embeddedLink} alt="Embedded link" class={aspectRatio} />
{:else if embeddedType === "gif"}
    <div class="expand ">
        <img src={embeddedLink} alt="Embedded link" class={aspectRatio} />
        <video src={embeddedLink} class="expand" autoplay loop><track kind="captions" /></video>
    </div>
{:else if embeddedType === "mp4" || embeddedType === "webm"}
    <div class="expand blackBackground">
        <video src={embeddedLink} class="expand" autoplay loop><track kind="captions" /></video>
    </div>
{:else if embeddedType === "youtube"}
    <Youtube videoId={videoID} options={YoutubeOptions} class="YOUTUBE_VIDEO_CONTAINER" on:end={onYTVideoEnd} />
{/if}

<style>
    .blackBackground {
        background-color: black;
    }
    .expand {
        width: 100%;
        height: 100%;
        display: block;
    }

    .preserveRatio {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

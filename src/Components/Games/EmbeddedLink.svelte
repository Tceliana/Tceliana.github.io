<script lang="ts">
    type EmbeddedType = "png" | "gif" | "mp4";

    export let embeddedLink: string;
    export let aspectRatio: "expand" | "preserveRatio" = "preserveRatio";
    // TODO: Parse link to deduce type: png / gif / mp4 etc etc etc etc
    console.log(embeddedLink);

    let embeddedType: EmbeddedType = getEmbeddedType(embeddedLink);

    function getEmbeddedType(link: string): EmbeddedType {
        if (embeddedLink.endsWith(".png")) return "png";
        else if (embeddedLink.endsWith(".gif")) return "gif";
        else if (embeddedLink.endsWith(".mp4")) return "mp4";
        console.error("TYPE " + link + " Isn't recognized.");
    }

    console.log(embeddedType);
</script>

{#if embeddedType === "png"}
    <img src={embeddedLink} alt="Embedded link" class={aspectRatio} />
{:else if embeddedType === "gif"}
    <div />
{:else if embeddedType === "mp4"}
    <div />
{/if}

<style>
    .expand {
        width: 100%;
        height: 100%;
    }

    .preserveRatio {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

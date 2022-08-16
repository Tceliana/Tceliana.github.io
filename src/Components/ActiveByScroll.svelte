<script lang="ts">
    export let startPercentage: number = -1;
    export let endPercentage: number = 101;

    let YPosition : number = 0;

    function isActive(YPosition: number): boolean 
    {
        const max_scrollbar_height: number = document.body.scrollHeight - window.innerHeight;
        
        if (max_scrollbar_height <= 0) 
        {
            // No scrollbar!
            if (startPercentage <= 0) return true;
            return false;
        }
        
        let currentPercentage = (YPosition / max_scrollbar_height) * 100;
        if (startPercentage < currentPercentage && currentPercentage < endPercentage)
        {
            return true;        
        }
        return false;
    }
</script>

{#if isActive(YPosition)}
    <slot />
{/if}

<svelte:window bind:scrollY={YPosition} />


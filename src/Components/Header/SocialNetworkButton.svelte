<script lang="ts">
    import CircleAnimation from "./CircleAnimation.svelte";
import SocialNetworks from "./SocialNetworks.svelte";
    let isHovering: boolean         = false;
    let showSocialNetwork: boolean  = true;

</script>

<div class="button" on:mousedown={() => showSocialNetwork = !showSocialNetwork} >
    <span on:mouseenter={()=>isHovering=true} on:mouseleave={()=>isHovering=false}>Networks</span>
    {#if isHovering}
        <CircleAnimation />
    {/if}
</div>
{#if showSocialNetwork}
    <SocialNetworks />
{/if}


<style>
    
    .button 
    {
        position:   relative;
        display:    inline-block;
        cursor:     pointer;
    }

    span
    {
        padding:            8px 16px;
        border:             none;
        background:         none;
        outline:            none;
        color:              var(--COLOR_SECONDARY);
        text-decoration:    none;
    }

</style>

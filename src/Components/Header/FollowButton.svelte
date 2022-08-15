<script lang="ts">
    import Balloons from "./Balloons.svelte";
    import CircleAnimation from "./CircleAnimation.svelte";
    let isHovering: boolean             = false;
    let showSocialNetworks: boolean     = false;

</script>

<div class="button" on:mousedown={() => showSocialNetworks = !showSocialNetworks} >
    <span on:mouseenter={()=>isHovering=true} on:mouseleave={()=>isHovering=false}>
        <i class="fa-solid fa-heart header-fa-icon"></i> Follow me
    </span>
    {#if isHovering}
        <CircleAnimation />
    {/if}
</div>
{#if showSocialNetworks}
    <Balloons />
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
    
    .button:hover{    
        font-weight:    600;
        animation:      shake 150ms 1 linear;   
    }
</style>

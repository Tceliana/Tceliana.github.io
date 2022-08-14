<script lang="ts">
    import CircleAnimation from "./CircleAnimation.svelte";

    export let linkName : string;
    export let path     : string;
    export let icon     : string;

    let isHovering: boolean = false;

</script>

<div class="button">
    <a on:mouseenter={()=>isHovering=true} on:mouseleave={()=>isHovering=false} href={path}>
        <i class="fa-solid fa-{icon} header-fa-icon"></i> {linkName}
    </a>
    {#if isHovering}
        <CircleAnimation />
    {/if}
</div>

<style>
    
    .button 
    {
        position:   relative;
        display:    inline-block;
        cursor:     pointer;
    }

    .button a 
    {
        padding:            8px 16px;
        border:             none;
        background:         none;
        outline:            none;
        color:              var(--COLOR_SECONDARY);
        text-decoration:    none;
    }



</style>

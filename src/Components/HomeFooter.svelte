<script lang="ts">
import ActiveByScroll   from "./ActiveByScroll.svelte";
import Leaf             from "./Decorations/Leaf.svelte";

</script>

<div class="footer">
    <div class="footer_image" />
    <ActiveByScroll startPercentage={90}>
        {#each Array(10) as _}
            <Leaf />
        {/each}
    </ActiveByScroll>
</div>

<style>
    .footer
    {
        position:       absolute;
        bottom:         0;
        margin-bottom:  0;
        width:          100vw;
        height:         100vh;
        overflow:       hidden;
    }

    .footer_image
    {
        background-image:       url("/images/tcela_dibus/big_tcela.png");
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 100%;
        width:                  100%;
        height:                 100%;
        margin-bottom:          -20%;
        bottom:                 0;
        position:               absolute;
    }
</style>

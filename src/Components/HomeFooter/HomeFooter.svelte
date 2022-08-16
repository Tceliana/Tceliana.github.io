<script lang="ts">
import Leaf from "./Leaf.svelte";


    
</script>

<div class="footer">
    <div class="footer_image" />
    <Leaf />
    <Leaf />
    <Leaf />
    <Leaf />
    <Leaf />
    <Leaf />
</div>

<style>
        .footer
    {
        position:absolute;
        bottom:0;
        margin-bottom:0;
        width:100vw;
        height:50vh;
    }

    .footer_image{
        background-image:       url("/Images/TcelaDibus/big_tcela.png");
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 185%;
        width:100%;
        height:100%;
        margin-bottom: 0%;
        position:absolute;
    }
</style>

<script lang="ts">
import { getRandomNumber } from "../../maths";

const image = "/Images/leafs/leaf"+getRandomNumber(1,9)+".svg";


</script>

<div class="footer" style=" background-image: url('{image}')">
</div>

<style>
        .footer
    {
        position:absolute;
        bottom:0;
        margin-bottom:0;
        width:10vw;
        height:10vh;
        background-repeat:      no-repeat;
        background-position:    center top;
        background-size:        100% 185%;

    }
</style>

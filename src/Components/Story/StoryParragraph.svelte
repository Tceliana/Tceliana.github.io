<script type="ts">
    import 'animate.css';

    export let capitalWords         : string    = "";
    export let parragraph           : string;
    export let centerWords          : string    = "";
    export let secondaryParragraph  : string    = "";
    export let lastWords            : string    = "";
    export let order                : number;
</script>

<div class="scroll" id="parrafo{order}">
    <p>
        <span class="animate__animated animate__jackInTheBox">
            {capitalWords}
        </span>
        {parragraph}
        <span class="animate__animated animate__jackInTheBox">
            {centerWords}
        </span>
        {secondaryParragraph}
        <span class="animate__animated animate__jackInTheBox">
            {lastWords}
        </span>
    </p>
</div>

<style>

    span 
    {
        display:    inline-block;
        color:      var(--COLOR_SECONDARY);
    }
    
    span:hover 
    {
        color:      var(--COLOR_BEACH);
    }
    
    .scroll 
    {
        animation:                  scrollText;
        animation-duration:         4s;
        animation-iteration-count:  1;
    }
    
    
    @keyframes scrollText 
    {
        0%   { transform: translateY(100%); }
        100% { transform: translateY(0%); }
    }

</style>
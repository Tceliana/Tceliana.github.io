<script lang="ts">
    import HeaderLink from "./HeaderLink.svelte";
    import SocialNetworkButton from "./SocialNetworkButton.svelte";
</script>

<header class="columns">
    <a href=".." class="logo">La leyenda</a>
    <ul id="nav_menu">
        <li class="menu_tab">
            <HeaderLink linkName="Home" path=".." icon="home" />
        </li>
        <li class="menu_tab">
            <HeaderLink linkName="Games" path="/games" icon="gamepad" />
        </li>
        <li class="menu_tab">
            <HeaderLink linkName="Work" path=".." icon="briefcase" />
        </li>
        <li class="menu_tab">
            <HeaderLink linkName="Contact" path=".." icon="envelopes-bulk" />
        </li>
        <li class="menu_tab">
           <SocialNetworkButton/>
       </li> 
    </ul>
</header>

<style>
    header 
    {
        position:           relative;
        top:                0;
        left:               0;
        width:              100%;
        padding:            1vh 1vw;
        display:            flex;
        justify-content:    space-between;
        align-items:        center;
        z-index:            1;
        box-sizing:         border-box;
    }

    header .logo 
    {
        color:              var(--COLOR_SECONDARY);
        font-weight:        700;
        text-decoration:    none;
        font-size:          2em;
        text-transform:     uppercase;
        letter-spacing:     2px;
    }

    header ul 
    {
        display:            flex;
        justify-content:    center;
        align-items:        center;
    }

    header ul li 
    {
        list-style:     none;
        margin-right:   20px;
    }

    .menu_tab
    {
        right:      3vw;
    }

    .menu_tab:hover{
        font-weight:    600;
        animation:      shake 150ms 1 linear;   
    }

    li:last-child
    {
        margin-right: 1vw;
    }

</style>

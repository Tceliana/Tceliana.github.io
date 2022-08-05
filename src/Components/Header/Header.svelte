<script lang="ts">
    import HeaderLink from "./HeaderLink.svelte";
</script>

<header class="columns">
    <a href=".." class="logo">La leyenda</a>
    <ul>
        <li><HeaderLink linkName="Home" path=".." /></li>
        <li><HeaderLink linkName="Games" path="/games" /></li>
        <li><HeaderLink linkName="Work" path=".." /></li>
        <li><HeaderLink linkName="Contact" path=".." /></li>
    </ul>
</header>

<style>
    header {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        margin: 1vh 1vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header .logo {
        color: var(--COLOR_SECONDARY);
        font-weight: 700;
        text-decoration: none;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    header ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header ul li {
        list-style: none;
        margin-left: 20px;
    }
</style>

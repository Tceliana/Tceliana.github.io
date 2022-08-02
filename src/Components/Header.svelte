<script lang="ts">
</script>

<header class="columns">
    <a href=".." class="logo">La leyenda</a>
    <ul>
        <li><a href="..">Home</a></li>
        <li><a href="..">About</a></li>
        <li><a href="..">Work</a></li>
        <li><a href="..">Contact</a></li>
    </ul>
</header>

<style>
    header {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        margin: 30px 1px;
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

    header ul li a {
        text-decoration: none;
        padding: 6px 15px;
        color: var(--COLOR_SECONDARY);
        border-radius: 20px;
    }

    header ul li a:hover {
        background-color: #fff;
        color: #2b1055;
    }
</style>

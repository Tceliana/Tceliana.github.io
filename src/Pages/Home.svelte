<script lang="ts">
    import Counter from "../lib/Counter.svelte";
</script>

<main>
    <header>
        <a href="#" class="logo">Logo</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
    <h1 style="font-family: earthsmightiestbold;">Tceliana</h1>

    <div class="card">
        <Counter />
    </div>

    <p>
        Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte
        app framework powered by Vite!
    </p>
</main>

<style>
</style>

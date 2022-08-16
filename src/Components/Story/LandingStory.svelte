<script lang="ts">
    import StoryParragraph from "./StoryParragraph.svelte";
    import 'animate.css';

    let currentYscroll = 0;

    window.addEventListener('scroll', () => 
    {
        currentYscroll = window.scrollY;
    });
</script>

<article class="landingStory">
    {#if currentYscroll > 80}
    <StoryParragraph
        capitalWords="La historia de este programador"
        parragraph="es que se trata de un programador que se dedica a programar, y que se dedica a programar mucho."
        order={0}
    />
    {/if}
    {#if currentYscroll > 160}
    <StoryParragraph
        capitalWords="Nació en 2001"
        parragraph="en Ecuador, y se graduó en Artes Gráficas en la Universidad."
        order={1}
    />
    {/if}
    {#if currentYscroll > 220}
    <StoryParragraph
        parragraph="Con el tiempo descubrió que no era un programador,"
        lastWords="era un artista."
        order={2}
    />
    {/if}
    {#if currentYscroll > 300}
    <StoryParragraph
        parragraph="También conoció a"
        centerWords="WilmiRosa"
        secondaryParragraph="el cual también era un programador de"
        lastWords="videojuegos."
        order={3}
    />
    {/if}
    {#if currentYscroll > 380}
    <StoryParragraph
        parragraph="Pero no se quedó en el mundo de los videojuegos,"
        lastWords="se decidió empezar a programar."
        order={4}
    />
    {/if}
    {#if currentYscroll > 460}
    <StoryParragraph
        parragraph="En el año"
        centerWords="2020"
        secondaryParragraph="se decidió empezar a programar"
        lastWords="en C#."
        order={5}
    />
    {/if}
</article>
<style>

    .landingStory 
    {
        color:          var(--COLOR_TERTIARY);
        font-size:      4vw;
        line-height:    2.5vw;
        font-weight:    2vw;
        padding:        5vw;
        font-style:     italic;
        text-align:     center;
    }

</style>
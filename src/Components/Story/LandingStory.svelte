<script lang="ts">
    import StoryParragraph from "./StoryParragraph.svelte";
    import 'animate.css';
</script>

<article class="landingStory">
    <StoryParragraph
        capitalWords="La historia de este programador"
        parragraph="es que se trata de un programador que se dedica a programar, y que se dedica a programar mucho."
        order={0}
    />
    <StoryParragraph
        capitalWords="Nació en 2001"
        parragraph="en Ecuador, y se graduó en Artes Gráficas en la Universidad."
        order={1}
    />
    <StoryParragraph
        parragraph="Con el tiempo descubrió que no era un programador,"
        lastWords="era un artista."
        order={2}
    />
    <StoryParragraph
        parragraph="También conoció a"
        centerWords="WilmiRosa"
        secondaryParragraph="el cual también era un programador de"
        lastWords="videojuegos."
        order={3}
    />

</article>

<style>
    .landingStory 
    {
        color: var(--COLOR_TERTIARY);
        font-size: 2rem;
        line-height: 1.5rem;
        font-weight: 3rem;
        padding: 1rem;
        font-style: italic;
        text-align: center;
    }
</style>
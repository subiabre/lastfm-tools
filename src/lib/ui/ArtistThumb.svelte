<script lang="ts">
    import type { Artist } from "$lib/lastfm";

    export let artist: Artist;
</script>

<a href={artist.url}>
    <figure>
        <img src={artist.image} alt="Image for {artist.name}" />
        <figcaption>
            <p class="artist-name">{artist.name}</p>
            <slot />
        </figcaption>
    </figure>
</a>

<style>
    figure {
        margin: 0;
        position: relative;

        max-width: 410px;
        max-height: 410px;
    }

    figure > img {
        width: 100%;
    }

    figure > figcaption {
        padding: 3rem 1rem 1rem 1rem;
        width: calc(100% - 2rem);

        position: absolute;

        text-shadow: 4px 4px solid rgba(0, 0, 0, 1);

        bottom: 0;
        color: rgba(250, 250, 250);
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
    }

    figure > figcaption > .artist-name {
        font-size: x-large;
    }
</style>

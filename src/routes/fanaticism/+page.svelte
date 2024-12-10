<script lang="ts">
    import { lastfm, type Artist } from "$lib/lastfm";
    import Table from "$lib/ui/Table.svelte";
    import ArtistRow from "./ArtistRow.svelte";

    let artistName: string;

    let artists: Artist[] = [];

    async function handleSubmit() {
        const artist = await lastfm.artist.getInfo(artistName);

        artists = [...artists, artist];
        artistName = "";
    }
</script>

<svelte:head>
    <title>Fanaticism | Last.fm Tools</title>
</svelte:head>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Artist name" bind:value={artistName} />
    <button type="submit">Add artist</button>
</form>

{#if artists.length > 0}
    <Table>
        {#each artists as artist}
            <ArtistRow {artist} />
        {/each}
    </Table>
{:else}
    <p>Fanaticism.</p>
    <p>
        Use this tool to analyze how much fanaticism an artist has. i.e: how much it gets listened to, on average, by each listener.
    </p>
{/if}

<style>
    input {
        width: 100%;
        padding: 1rem;

        border: 1px solid #ebebeb;
        border-radius: 0;
    }

    button {
        margin: 1rem;
    }

    p {
        margin: 1rem;
    }
</style>

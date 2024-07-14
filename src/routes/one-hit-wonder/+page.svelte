<script lang="ts">
    import { lastfm, type Artist, type ArtistTopTrack } from "$lib/lastfm";
    import TrackRow from "./TrackRow.svelte";

    let artistName: string;
    let topTrackCount: string;

    let data:
        | Promise<{ artist: Artist; topTracks: ArtistTopTrack[] }>
        | undefined;

    async function handleSubmit() {
        const correctName = await lastfm.artist.getCorrection(artistName);

        data = getData(correctName);
    }

    async function getData(name: string) {
        const artist = await lastfm.artist.getInfo(name);
        const topTracks = await lastfm.artist.getTopTracks(name, topTrackCount);

        return { artist, topTracks };
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Artist name" bind:value={artistName} />
    <select bind:value={topTrackCount}>
        <option value="5" selected>Top 5 tracks</option>
        <option value="10">Top 10 tracks</option>
        <option value="20">Top 20 tracks</option>
        <option value="30">Top 30 tracks</option>
        <option value="50">Top 50 tracks</option>
    </select>
    <button type="submit">Submit</button>
</form>

{#if typeof data !== "undefined"}
    {#await data}
        <p>Loading</p>
    {:then data}
        <table>
            {#each data.topTracks as topTrack}
                <TrackRow track={topTrack} artist={data.artist} />
            {/each}
        </table>
    {/await}
{:else}
    <p>No artist</p>
{/if}

<style>
    input {
        width: 100%;
        padding: 1rem;

        border: 1px solid #ebebeb;
        border-radius: 0;
    }

    select {
        margin: 1rem;
    }

    table {
        width: 100%;

        border-collapse: collapse;
    }
</style>

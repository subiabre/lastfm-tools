<script lang="ts">
    import { lastfm, type Artist, type ArtistTopTrack } from "$lib/lastfm";
    import { calcPlaycount } from "$lib/stats";
    import Percentage from "$lib/ui/Percentage.svelte";
    import TrackRow from "./TrackRow.svelte";
    import { getRandomExample } from "./examples";

    const example = getRandomExample();

    let artistName: string;
    let topTrackCount: string;

    interface OneHitWonderData {
        artist: Artist;
        topTracks: ArtistTopTrack[];
        topTracksPlaycount: number;
    }

    let data: Promise<OneHitWonderData> | undefined;

    async function handleSubmit() {
        const correctName = await lastfm.artist.getCorrection(artistName);

        data = getData(correctName);
    }

    async function getData(name: string) {
        const artist = await lastfm.artist.getInfo(name);
        const topTracks = await lastfm.artist.getTopTracks(name, topTrackCount);

        return {
            artist,
            topTracks,
            topTracksPlaycount: calcPlaycount(topTracks),
        };
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
        <p>
            {data.artist.name}'s top {data.topTracks.length} has <Percentage
                part={data.topTracksPlaycount}
                total={data.artist.playcount}
            /> of their total plays.
        </p>
        <table>
            {#each data.topTracks as topTrack}
                <TrackRow track={topTrack} artist={data.artist} />
            {/each}
        </table>
    {/await}
{:else}
    <p>
        <a href="https://en.wikipedia.org/wiki/One-hit_wonder">One-hit wonder</a
        > calculator.
    </p>
    <p>
        Use this tool to analyze how much weight does an artist's top tracks
        hold against their total plays and listener counts. e.g: <button
            type="button"
            on:click={() => (data = getData(example))}>{example}</button
        >
    </p>
{/if}

<style>
    input {
        width: 100%;
        padding: 1rem;

        border: 1px solid #ebebeb;
        border-radius: 0;
    }

    p {
        margin: 1rem;
    }

    select {
        margin: 1rem;
    }

    table {
        width: 100%;

        border-collapse: collapse;
    }
</style>

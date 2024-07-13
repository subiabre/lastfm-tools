<script lang="ts">
    import { lastfm, type Artist, type Track } from "$lib/lastfm";
    import { calcPlaycount } from "$lib/stats";
    import ArtistThumb from "$lib/ui/ArtistThumb.svelte";

    let artistName: string;
    let topTrackCount: string;

    let artist: Artist | undefined;
    let topTracks: Track[] | undefined;
    let topTracksPercentage: number | undefined;

    async function handleSubmit() {
        artist = await lastfm.artist.getInfoImproved(artistName);
        topTracks = await lastfm.artist.getTopTracks(
            artist.name,
            topTrackCount,
        );

        topTracksPercentage = calcPlaycountPercentage(
            calcPlaycount(topTracks),
            artist.playcount,
        );
    }

    function calcPlaycountPercentage(playcount: number, total: number) {
        return Math.round((playcount * 100) / total);
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

{#if artist}
    <ArtistThumb {artist}>
        <p>
            <strong>{topTracksPercentage}%</strong> of {artist.name} listens are
            among their
            <strong
                >top {topTracks?.length}
                tracks</strong
            >.
        </p>
    </ArtistThumb>
{/if}

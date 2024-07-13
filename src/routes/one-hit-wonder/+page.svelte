<script lang="ts">
    import { lastfm, type Artist, type Track } from "$lib/lastfm";

    let artistName: string;
    let topTrackCount: string;

    let artist: Artist | undefined;
    let topTracks: Track[] | undefined;
    let topTracksPercentage: number | undefined;

    async function handleSubmit() {
        const correctName = await lastfm.artist.getCorrection(artistName);

        artist = await lastfm.artist.getInfo(correctName);
        topTracks = await lastfm.artist.getTopTracks(
            correctName,
            topTrackCount,
        );

        topTracksPercentage = calcPlaycountPercentage(
            calcTracksPlaycount(topTracks),
            artist.playcount,
        );
    }

    function calcTracksPlaycount(tracks: Track[]) {
        let playcount = 0;

        for (let index = 0; index < tracks.length; index++) {
            const track = tracks[index];

            playcount = playcount + track.playcount;
        }

        return playcount;
    }

    function calcPlaycountPercentage(playcount: number, total: number) {
        return Math.round((playcount * 100) / total);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" bind:value={artistName} />
    <select bind:value={topTrackCount}>
        <option value="5" selected>5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
    </select>
    <button type="submit">Submit</button>
</form>

{#if artist}
    <p>{topTracksPercentage}% of {artist.name} listens are in the top {topTracks?.length} tracks.</p>
{/if}

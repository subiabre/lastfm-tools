<script lang="ts">
    import type { Artist, ArtistTopTrack } from "$lib/lastfm";
    import TableRow from "$lib/ui/TableRow.svelte";
    import TrackBar from "./TrackBar.svelte";
    import TrackTitle from "./TrackTitle.svelte";

    export let track: ArtistTopTrack;
    export let artist: Artist;
</script>

<TableRow>
    <td>
        <p>#{track.rank}</p>
    </td>
    <td>
        <p><TrackTitle {track} /></p>
        <p>
            <TrackBar
                part={track.listeners}
                total={artist.listeners}
                text="of listeners"
            />
        </p>
        <p>
            <TrackBar
                part={track.playcount}
                total={artist.playcount}
                text="of plays"
            />
        </p>
    </td>
</TableRow>

<style>
    td {
        padding: 1rem 1rem 1rem 0;

        vertical-align: top;
    }

    td:first-child {
        padding: 1rem 0 1rem 1rem;
    }

    p {
        margin: 0 0 0.5rem 0;
    }

    p:last-child {
        margin: 0;
    }
</style>

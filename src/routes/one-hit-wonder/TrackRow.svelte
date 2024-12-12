<script lang="ts">
    import type { Artist, ArtistTopTrack } from "$lib/lastfm";
    import GraphBar from "$lib/ui/GraphBar.svelte";
    import Percentage from "$lib/ui/Percentage.svelte";
    import TableRow from "$lib/ui/TableRow.svelte";
    import TableRowTitle from "$lib/ui/TableRowTitle.svelte";

    export let track: ArtistTopTrack;
    export let artist: Artist;

    $: barSize = Math.round((track.playcount * 100) / artist.playcount);
</script>

<TableRow>
    <td>
        <p><TableRowTitle title="#{track.rank} — {track.title}" /></p>
        <p>
            <GraphBar size={barSize}>
                <Percentage total={artist.playcount} part={track.playcount} />
                of plays
            </GraphBar>
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

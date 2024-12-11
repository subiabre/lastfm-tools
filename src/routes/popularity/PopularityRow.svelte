<script lang="ts">
    import type { Artist } from "$lib/lastfm";
    import GraphBar from "$lib/ui/GraphBar.svelte";
    import Percentage from "$lib/ui/Percentage.svelte";
    import TableRow from "$lib/ui/TableRow.svelte";
    import TableRowTitle from "$lib/ui/TableRowTitle.svelte";

    export let artist: Artist;
    export let totalListeners: number;

    $: barSize = Math.round((artist.listeners * 100) / totalListeners);
</script>

<TableRow>
    <td>
        <p><TableRowTitle title={artist.name} /></p>
        <p>
            <GraphBar size={barSize}>
                <Percentage part={artist.listeners} total={totalListeners} /> of total listeners
            </GraphBar>
        </p>
    </td>
</TableRow>

<style>
    td {
        padding: 1rem;

        vertical-align: top;
    }

    p {
        margin: 0 0 0.5rem 0;
    }

    p:last-child {
        margin: 0;
    }
</style>

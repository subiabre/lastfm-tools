<script lang="ts">
    import type { Artist } from "$lib/lastfm";
    import TableRow from "$lib/ui/TableRow.svelte";
    import TableRowTitle from "$lib/ui/TableRowTitle.svelte";
    import ListensPerListenerBar from "./ListensPerListenerBar.svelte";

    export let artist: Artist;
</script>

<TableRow>
    <td>
        <p><TableRowTitle title={artist.name} /></p>
        <p>
            <ListensPerListenerBar {artist} />
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

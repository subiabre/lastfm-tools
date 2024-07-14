<script lang="ts">
    import type { Artist, ArtistTopTrack } from "$lib/lastfm";
    import Percentage from "$lib/ui/Percentage.svelte";
    import TrackBar from "./TrackBar.svelte";
    import TrackTitle from "./TrackTitle.svelte";

    export let track: ArtistTopTrack;
    export let artist: Artist;
</script>

<tr>
    <td>
        #{track.rank}
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
</tr>

<style>
    tr {
        border-bottom: 1px solid #ebebeb;
    }

    td {
        padding: 1rem 0;

        vertical-align: top;
    }

    td:first-child {
        text-align: center;
    }

    p {
        margin: 0 0 0.5rem 0;
    }

    p:last-child {
        margin: 0;
    }
</style>

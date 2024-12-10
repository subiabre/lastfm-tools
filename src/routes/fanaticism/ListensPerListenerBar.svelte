<script lang="ts">
    import type { Artist } from "$lib/lastfm";
    import GraphBar from "$lib/ui/GraphBar.svelte";

    export let artist: Artist;

    let listensPerListener: number = calcListensPerListener();

    function calcListensPerListener() {
        return Math.round(artist.playcount / artist.listeners);
    }
</script>

<GraphBar
    title="{artist.playcount} total plays / {artist.listeners} total listeners"
    size={listensPerListener / 10}
>
    {listensPerListener} listens per listener
</GraphBar>

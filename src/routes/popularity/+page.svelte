<script lang="ts">
    import { lastfm, type Artist } from "$lib/lastfm";
    import BigNumber from "$lib/ui/BigNumber.svelte";
    import Table from "$lib/ui/Table.svelte";
    import PopularityRow from "./PopularityRow.svelte";

    let artistName: string;

    interface LineUpData {
        artists: Artist[];
        totalListeners: number;
    }

    let lineup: LineUpData = {
        artists: [],
        totalListeners: 0,
    };

    async function handleSubmit() {
        const artist = await lastfm.artist.getInfo(artistName);

        lineup = {
            artists: [...lineup.artists, artist],
            totalListeners: lineup.totalListeners + artist.listeners,
        };

        console.log(lineup);

        artistName = "";
    }
</script>

<svelte:head>
    <title>Popularity contest | Last.fm Tools</title>
</svelte:head>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Artist name" bind:value={artistName} />
    <button type="submit">Add artist</button>
</form>

<p>Popularity contest.</p>
<p>
    Check how much more or less popular are certain artists relative to others.
</p>

{#if lineup.artists.length > 0}
    <p>
        The selected artists have a combined total of
        <BigNumber number={lineup.totalListeners} /> listeners.
    </p>
    <Table>
        {#each lineup.artists as artist}
            <PopularityRow {artist} totalListeners={lineup.totalListeners} />
        {/each}
    </Table>
{/if}

<style>
    input {
        width: 100%;
        padding: 1rem;

        border: 1px solid #ebebeb;
        border-radius: 0;
    }

    button {
        margin: 1rem;
    }

    p {
        margin: 1rem;
    }
</style>

<script lang="ts">
    import { lastfm, type Artist } from "$lib/lastfm";
    import BigNumber from "$lib/ui/BigNumber.svelte";
    import Table from "$lib/ui/Table.svelte";
    import LineupRow from "./LineupRow.svelte";

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
    <title>Line-up composer | Last.fm Tools</title>
</svelte:head>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Artist name" bind:value={artistName} />
    <button type="submit">Add artist</button>
</form>

<p>Line-up composer.</p>
<p>
    If you were to decide the line-up of a festival, this is how much calling
    each artist would have.
</p>

{#if lineup.artists.length > 0}
    <p>
        This line-up could add up to <BigNumber
            number={lineup.totalListeners}
        /> total attendees.
    </p>
    <Table>
        {#each lineup.artists as artist}
            <LineupRow {artist} totalListeners={lineup.totalListeners} />
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

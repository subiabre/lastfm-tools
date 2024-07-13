<script lang="ts">
    import { lastfm, type Artist, type User } from "$lib/lastfm";
    import { calcPlaycount } from "$lib/stats";
    import ArtistThumb from "$lib/ui/ArtistThumb.svelte";
    import UserThumb from "$lib/ui/UserThumb.svelte";

    let username: string;
    let topArtistCount: string;

    let user: User | undefined;
    let topArtists: Artist[] = [];
    let topArtistsPercentage: string | undefined;

    async function handleSubmit() {
        user = await lastfm.user.getInfo(username);
        topArtists = await lastfm.user.getTopArtists(username, topArtistCount);

        console.log(calcPlaycount(topArtists));

        topArtistsPercentage = calcArtistPercentage(
            calcPlaycount(topArtists),
            user.playcount,
        );
    }

    function calcArtistPercentage(playcount: number, total: number) {
        return ((playcount * 100) / total).toFixed(2);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="last.fm username" bind:value={username} />
    <select bind:value={topArtistCount}>
        <option value="5" selected>Top 5</option>
        <option value="10">Top 10</option>
        <option value="20">Top 20</option>
        <option value="30">Top 30</option>
        <option value="30">Top 50</option>
    </select>
    <button type="submit">Submit</button>
</form>

{#if user}
    <UserThumb {user}>
        {topArtistsPercentage}% of {user.name}
        listens are in their top {topArtists.length} artists.
    </UserThumb>
    {#each topArtists as topArtist}
        <ArtistThumb artist={topArtist}>
            <p>
                <strong
                    >{calcArtistPercentage(
                        topArtist.playcount,
                        user?.playcount,
                    )}%</strong
                >
                of {user?.name} total listens are for {topArtist.name}.
            </p>
        </ArtistThumb>
    {/each}
{/if}

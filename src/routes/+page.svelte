<script>
    import { base } from "$app/paths";
</script>

<svelte:head>
    <title>Last.fm Tools</title>
</svelte:head>

<h1>Last.fm Tools</h1>
<p>
    A collection of tools to generate music statistics with data from <a
        href="http://last.fm">Last.fm</a
    >.
</p>
<a href="{base}/one-hit-wonder"><h2>One-hit wonder calculator</h2></a>
<a href="{base}/popularity"><h2>Popularity contest</h2></a>

<style>
    h1, h2 {
        margin: 1rem;
    }

    p {
        margin: 1rem;
    }
</style>

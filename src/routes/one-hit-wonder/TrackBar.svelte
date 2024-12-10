<script lang="ts">
    import GraphBar from "$lib/ui/GraphBar.svelte";
    import Percentage from "$lib/ui/Percentage.svelte";

    export let part: number;
    export let total: number;

    export let text: string;

    let size: number = calcBarSize();
    function calcBarSize() {
        return Math.round((part * 100) / total);
    }
</script>

<GraphBar {size}>
    <Percentage {total} {part} />
    {text}
</GraphBar>

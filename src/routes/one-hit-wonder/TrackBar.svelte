<script lang="ts">
    import Percentage from "$lib/ui/Percentage.svelte";

    export let part: number;
    export let total: number;

    export let text: string;

    let barSize: number = calcBarSize();
    function calcBarSize() {
        return Math.round((part * 100) / total);
    }

    const c0020 = "#648fff80";
    const c2040 = "#785ef080";
    const c4060 = "#dc267f80";
    const c6080 = "#fe610080";
    const c8000 = "#ffb00080";

    let barColor: string = getBarColor();
    function getBarColor() {
        if (barSize > 80) {
            return c8000;
        }

        if (barSize > 60) {
            return c6080;
        }

        if (barSize > 40) {
            return c4060;
        }

        if (barSize > 20) {
            return c2040;
        }

        return c0020;
    }
</script>

<div style="--bar-size: {barSize}%; --bar-color: {barColor}">
    <Percentage {total} {part} />% {text}
</div>

<style>
    div {
        width: 100%;

        padding: 0.25rem;

        background-image: linear-gradient(
            to right,
            var(--bar-color) var(--bar-size),
            rgba(0, 0, 0, 0) var(--bar-size)
        );
    }
</style>

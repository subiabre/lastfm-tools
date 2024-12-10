<script lang="ts">
    export let size: number;
    export let title: string = "";

    const c0020 = "#648fff80";
    const c2040 = "#785ef080";
    const c4060 = "#dc267f80";
    const c6080 = "#fe610080";
    const c8000 = "#ffb00080";

    let color: string = getColor();

    function getColor() {
        if (size > 80) {
            return c8000;
        }

        if (size > 60) {
            return c6080;
        }

        if (size > 40) {
            return c4060;
        }

        if (size > 20) {
            return c2040;
        }

        return c0020;
    }
</script>

<div {title} style="--bar-size: {size}%; --bar-color: {color}">
    <slot />
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

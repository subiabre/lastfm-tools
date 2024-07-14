<script lang="ts">
    export let part: number;
    export let total: number;

    function fmt(v: number) {
        const formatter = new Intl.NumberFormat(navigator.language ?? "en-US");

        return formatter.format(v);
    }

    function calcPercentage(part: number, total: number) {
        return ((part * 100) / total).toFixed(2);
    }
</script>

<span title="{fmt(part)} out of {fmt(total)}">
    {calcPercentage(part, total)}%
</span>

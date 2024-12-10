<script lang="ts">
    export let number: number;

    function fmt(v: number) {
        const formatter = new Intl.NumberFormat(navigator.language ?? "en-US");

        return formatter.format(v);
    }
</script>

<span title={number.toString()}>
    {fmt(number)}
</span>

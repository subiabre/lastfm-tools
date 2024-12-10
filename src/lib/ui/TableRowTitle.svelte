<script lang="ts">
    export let title: string;
</script>

<span {title}>
    {title}
</span>

<style>
    span {
        max-width: 80vw;

        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<script lang="ts">
    export let track: { title: string };
</script>

<span title={track.title}>{track.title}</span>

<style>
    span {
        max-width: 80vw;

        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

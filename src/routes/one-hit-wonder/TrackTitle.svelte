<script lang="ts">
    export let track: { title: string };
</script>

<span title={track.title}>{track.title}</span>

<style>
    span {
        display: inline-block;
        max-width: 30ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

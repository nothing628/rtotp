<template>
    <div class="h-1 absolute right-0 bottom-0 transition-all"
        :style="{ width: width, 'background-color': backgroundColor }">
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    progress: number
    progressMax: number
    progressThreshold: number;
}>()

const percent = computed(() => {
    const percent = 100 - props.progress / props.progressMax * 100;
    return percent;
})
const backgroundColor = computed(() => {
    const remain = props.progressMax - props.progress;

    if (remain < props.progressThreshold) {
        return "rgb(239,68,68)";
    }

    return "rgb(34,197,94)"
})
const width = computed(() => {
    return percent.value.toFixed(2) + "%";
})
</script>
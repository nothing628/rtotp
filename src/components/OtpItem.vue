<template>
    <div class="flex flex-row p-4 justify-between items-center bg-slate-100 relative">
        <ProgressBar :progress="progressVal" :progress-max="30" :progress-threshold="5"></ProgressBar>
        <div class="flex flex-row items-center">
            <img class="w-16 h-16 mr-4" src="../assets/firefox-logo.png" />
            <div class="flex flex-col">
                <p class="text-slate-900 text-base font-bold">Firefox</p>
                <p class="text-slate-900/70 text-xs leading-none">test@test.com</p>
                <p class="text-slate-900 text-2xl font-bold mt-2 leading-none">002 200</p>
                <p class="text-slate-900/70 text-xs leading-none">
                    <span v-if="isShowNext">440 440</span>
                    <span v-else>&nbsp;</span>
                </p>
            </div>
        </div>

        <div>
            <!-- Timer here -->
            <p class="text-slate-900/70 font-bold text-xl">{{ 30 - progressVal }}s</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue';
import { computed } from 'vue'

const props = defineProps<{
    progressVal: number
}>()

const isShowNext = computed(() => {
    return (30 - props.progressVal) < 5
})
</script>

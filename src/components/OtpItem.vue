<template>
    <div class="flex flex-row p-4 justify-between items-center bg-slate-100 relative">
        <ProgressBar :progress="progressVal" :progress-max="30" :progress-threshold="5"></ProgressBar>
        <div class="flex flex-row items-center">
            <img class="w-16 h-16 mr-4" src="../assets/firefox-logo.png" />
            <div class="flex flex-col">
                <p class="text-base font-bold">Firefox</p>
                <p class="text-xs leading-none">test@test.com</p>
                <p class="text-2xl font-bold mt-2 leading-none">002 200</p>
                <p class="text-xs leading-none">444 245</p>
            </div>
        </div>

        <div>
            <!-- Timer here -->
            <p>{{30-progressVal}}s</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import ProgressBar from './ProgressBar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

const progressVal = ref(0)
const intervalId = ref<any>(null)

onMounted(() => {
    intervalId.value = setInterval(() => {
        let val = progressVal.value + 1;

        if (val >= 30) {
            val = 0;
        }

        progressVal.value = val
    }, 1000);
})

onBeforeUnmount(() => {
    if (intervalId.value) {
        clearInterval(intervalId.value)
    }
})

</script>

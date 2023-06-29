<template>
    <div>
        <h1>Homex</h1>
        <a @click="onBack">Back</a>
    </div>
    <div class="flex flex-col">
        <OtpItem :progress-val="progressVal"></OtpItem>
        <OtpItem :progress-val="progressVal"></OtpItem>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTicks } from '../hooks/useTicks'
import OtpItem from '../components/OtpItem.vue'

const router = useRouter();
const { progressVal } = useTicks()
const onBack = () => {
    router.back()
}
</script>

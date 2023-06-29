<template>
    <div>
        <h1>Homex</h1>
        <a @click="onBack">Back</a>
    </div>
    <div class="flex flex-col">
        <OtpItem></OtpItem>
        <OtpItem></OtpItem>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import OtpItem from '../components/OtpItem.vue'

const router = useRouter();
const onBack = () => {
    router.back()
}
</script>

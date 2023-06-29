<template>
    <div>
        <h1>Home</h1>
        <a @click="onBack">Back</a>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();
const onBack = () => {
    router.back()
}
</script>

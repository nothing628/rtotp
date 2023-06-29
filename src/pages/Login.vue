<template>
    <div>
        <h1>Login</h1>
        <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

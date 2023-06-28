<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="flex justify-center" @submit.prevent="greet">
    <input class="mr-1 dark:text-white dark:bg-[#0f0f0f] transition-colors duration-300 rounded-lg border border-transparent py-2 px-3 bg-white text-[#0f0f0f] shadow-lg" v-model="name" placeholder="Enter a name..." />
    <button class="dark:text-white dark:bg-[#0f0f0f] dark:active:bg-[#0f0f0f]/70 transition-colors duration-300 rounded-lg border border-transparent py-2 px-3 bg-white text-[#0f0f0f] shadow-lg hover:border-[#396cd8] active:border-[#396cd8] active:bg-[#e8e8e8]" type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>

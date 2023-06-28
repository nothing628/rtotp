<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
</script>

<template>
  <div class="m-0 pt-[10vh] flex flex-col text-center justify-center">
    <h1>Welcome to Tauri!</h1>

    <div class="flex justify-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo h-24 p-6 duration-700 vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo h-24 p-6 duration-700 tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo h-24 p-6 duration-700 vue" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" class="text-[#646cff] hover:text-[#535bf2] dark:hover:text-[#24c8db]" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" class="text-[#646cff] hover:text-[#535bf2] dark:hover:text-[#24c8db]" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" class="text-[#646cff] hover:text-[#535bf2] dark:hover:text-[#24c8db]" target="_blank"
        >Tauri</a
      >
      +
      <a href="https://github.com/rust-lang/rust-analyzer" class="text-[#646cff] hover:text-[#535bf2] dark:hover:text-[#24c8db]" target="_blank"
        >rust-analyzer</a
      >
    </p>

    <Greet />
  </div>
</template>

<style scoped>
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 2em #24c8db);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>

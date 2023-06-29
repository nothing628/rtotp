<template>
    <div class="w-full pt-12">
        <form class="w-full max-w-sm p-4 mx-auto bg-slate-200 rounded-xl">
            <p class="mb-4 text-slate-800 text-base">Harap masukkan pin anda</p>

            <div class="mb-4 flex flex-col">
                <label class="font-semibold text-slate-700 text-sm">PIN</label>
                <input class="mt-1 p-2 rounded-md text-slate-800" placeholder="Enter your pin" type="text" />
            </div>

            <div class="flex flex-row justify-around">
                <button type="button" @click="login"
                    class="py-1 px-4 rounded-md text-base bg-green-500 text-white">Masuk</button>
                <button type="button" @click="cancel"
                    class="py-1 px-4 rounded-md text-base bg-red-400 text-white">Batal</button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { process } from "@tauri-apps/api"

const router = useRouter()
const login = () => {
    router.push({ name: 'home' })
}

const cancel = async () => {
    await process.exit(0)
}
</script>

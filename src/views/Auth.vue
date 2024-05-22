<template>
    <div class="w-full h-screen overflow-hidden p-12">
        <div class="w-full h-full flex flex-col items-center justify-center gap-8">
            <div class="text-center">
                <h1 class="text-3xl font-bold text-gray-950/80 mb-2">Sign In</h1>
                <p class="text-lg font-normal text-gray-950/60">Employe Management System</p>
            </div>
            <div class="md:w-1/5 w-full bg-gray-100 py-8 px-5 rounded-xl shadow-md">
                <div class="mb-5 text-sm text-center px-2 font-semibold text-gray-950/60">Enter your email and password here</div>
                <form @submit.prevent="authStore.login(form)">
                    <div class="mb-3">
                        <input v-model="form.email" type="email" id="email" class="w-full outline-none py-3 px-4 text-sm rounded-3xl placeholder:text-lg" placeholder="Email" required>
                    </div>
                    <div class="mb-3">
                        <input v-model="form.password" type="password" id="password" class="w-full outline-none py-3 px-4 text-sm rounded-3xl placeholder:text-lg" placeholder="Password" required>
                    </div>
                    <div class="w-full my-5">
                        <button type="submit" class="w-full text-lg font-bold bg-sky-400/80 text-white/80 py-3 rounded-full">Log in</button>
                    </div>
                </form>
            </div>
            <footer class="absolute bottom-20">
                <div>
                    <p class="text-sm font-thin text-gray-950/40">Powered by Hexa</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';

const authStore = useAuthStore()

const form = ref({
    email: '',
    password: ''
})

onMounted (
    async () => {
        authStore.$reset() // ini ketika auth gagal
    }
)
</script>
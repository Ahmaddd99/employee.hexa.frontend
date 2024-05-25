<template>
    <div class="w-full h-screen bg-gray-50 overflow-hidden p-12">
        <div class="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8">
            <div class="">
                <img src="../assets/login.png" alt="" class=" size-80">
            </div>
            <div class="w-full md:w-1/3">
                <h1 class="text-3xl font-bold text-gray-950/80 mb-4 text-center md:text-start">Sign In</h1>
                <form @submit.prevent="authStore.login(form)">
                    <div class="mb-4">
                        <input v-model="form.email" type="email" id="email" class="w-full outline-none p-3 text-sm rounded-lg placeholder:tracking-wide" placeholder="Email" required>
                    </div>
                    <div class="w-full mb-4">
                        <div class="w-full bg-white p-3 flex justify-between rounded-lg">
                            <input v-model="form.password" :type="passwordFieldType" id="password" class="outline-none w-full text-sm placeholder:tracking-wide" placeholder="Password" required>
                            <div @click="switchVisibility" v-if="switchEye === false" class="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black/40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <div @click="switchVisibility" v-if="switchEye === true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black/40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mt-12">
                        <button type="submit" class="w-full text-lg bg-sky-400/80 text-white/80 py-2.5 rounded-lg">Log in</button>
                    </div>
                </form>
            </div>
            <footer class="absolute bottom-20">
                <div>
                    <p class="text-sm font-thin text-gray-950/40">Powered by Hexa</p>
                </div>
            </footer>
        </div>
        <!-- <div class="w-full h-full flex flex-col items-center justify-center gap-8">
            <div class="text-center">
                <h1 class="text-3xl font-bold text-gray-950/80 mb-2">Sign In</h1>
                <p class="text-lg font-normal text-gray-950/60">Employe Management System</p>
            </div>
            <div class="md:w-1/5 w-full bg-white py-8 px-5 rounded-xl shadow-md">
                <div class="mb-5 text-sm text-center px-2 font-semibold text-gray-950/60">Enter your email and password here</div>
                <form @submit.prevent="authStore.login(form)">
                    <div class="mb-3">
                        <input v-model="form.email" type="email" id="email" class="border w-full outline-none py-3 px-4 text-sm rounded-3xl placeholder:tracking-wide" placeholder="Email" required>
                    </div>
                    <div class="w-full mb-3">
                        <div class="w-full bg-white py-3 px-4 flex justify-between rounded-3xl">
                            <input v-model="form.password" :type="passwordFieldType" id="password" class="outline-none w-full text-sm placeholder:tracking-wide" placeholder="Password" required>
                            <div @click="switchVisibility" v-if="switchEye === false" class="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black/40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <div @click="switchVisibility" v-if="switchEye === true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-black/40">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </div>
                        </div>
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
        </div> -->
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

const passwordFieldType = ref("password")
const switchEye = ref(false)

const switchVisibility = () => {
    passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password";
    if (passwordFieldType.value === "password") switchEye.value = !switchEye.value
    else switchEye.value = !switchEye.value
}

onMounted (
    async () => {
        authStore.$reset() // ini ketika auth gagal
    }
)
</script>
<script setup>
import SidebarMobile from '../components/SidebarMobile.vue';
import SidebarDesktop from '../components/SidebarDesktop.vue';
import NavbarBottom from '../components/NavbarBottom.vue';
import { onMounted, ref } from 'vue'
import { useAuthStore } from '@/stores/auth';

const modal = ref(false)

const closeModal = () => {
    modal.value = false
}

const openModal = () => {
    modal.value = true
}

const authStore = useAuthStore()

onMounted(
    async () => {
        console.log(authStore.userAuth.token)
    }
)
</script>
<template>
    <!-- <div class="md:hidden">
        <div class="fixed w-full h-auto flex justify-center items-center py-4 px-4">
            <div @click="openModal" class="absolute left-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </div>
            <div class="text-sm font-medium">
                Dashboard
            </div>
        </div>
        <SidebarMobile :isShow="modal" @close="closeModal" />
    </div> -->    
    <div class="flex w-full h-screen bg-gray-50">
        <div class="md:w-1/6">
            <SidebarDesktop />
        </div>
        <div class="md:w-5/6 w-full px-3 md:px-8 md:py-5 md:mt-4">
            <div class="hidden md:block text-lg font-semibold mb-4">Dashboard</div>
            <div class="w-full flex flex-col justify-start items-center gap-6 pt-4">
                <div class="md:hidden block font-medium text-sm">Dashboard</div>
                <div class="w-full flex flex-col gap-5 md:my-6">
                    <!-- Card Total THP -->
                    <div class="w-full md:w-1/4 rounded-[8px] bg-sky-500/10 p-4 flex gap-4 items-center">
                        <div class="py-2 w-2/12 flex justify-center rounded-[4px] bg-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-white/80">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <div>
                            <h1 class="font-semibold md:font-medium text-black/40 text-sm">Total THP semua karyawan</h1>
                            <p class="font-bold md:font-semibold text-black/80 text-lg">Rp. 200.000.000.000</p>
                        </div>
                    </div>
    
                    <div class="flex flex-col md:flex-row gap-6">
                        <!-- Table employee / divisi -->
                        <div class="w-full flex flex-col">
                            
                            <div class="flex justify-between items-center py-1 px-1 mb-2">
                                <div class="px-2">
                                    <h2 class="text-sm font-medium text-black/80">Total Karyawan</h2>
                                    <p class="text-[10px] md:text-xs text-gray-950/40">Per divisi</p>
                                </div>
                                <RouterLink to="/manage/divisi/index">
                                    <div class="font-semibold text-xs text-sky-500/80 border-b border-b-sky-500/80">Lihat Selengkapnya</div>
                                </RouterLink>
                            </div>
                            <div class="w-full bg-white p-1 rounded-lg shadow-md">
                                
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="collapse md:visible text-xs text-black/90 uppercase ">
                                        <tr>
                                            <th class="block md:hidden px-3 py-3 w-1/12">x</th>
                                            <th class="md:px-6 py-3 w-8/12 text-black/40">Divisi</th>
                                            <th class="px-6 py-3 text-center w-1/12 text-black/40">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white w-full">
                                            <td class="px-3 py-4 md:hidden block"><img src="http://placehold.it/32x32" alt="" class=" size-8 rounded-full object-center object-cover"></td>
                                            <td class="md:px-6 py-4 text-gray-900">Information Technology</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">3</td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-3 py-4 md:hidden block"><img src="http://placehold.it/32x32" alt="" class=" size-8 rounded-full object-center object-cover"></td>
                                            <td class="md:px-6 py-4 text-gray-900">Purcashing</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">5</td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-3 py-4 md:hidden block"><img src="http://placehold.it/32x32" alt="" class=" size-8 rounded-full object-center object-cover"></td>
                                            <td class="md:px-6 py-4 text-gray-900">Marketing Sales</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        
                        <!-- Table employee / status -->
                        <div class="w-full flex flex-col">
                            <div class="flex justify-between items-center py-1 px-2.5 mb-2">
                                <div class="">
                                    <h2 class="text-sm font-medium text-black/80">Total Karyawan</h2>
                                    <p class="text-[10px] md:text-xs text-gray-950/40">Per status</p>
                                </div>
                                <RouterLink :to="{ name : 'status.index'}">
                                    <div class="font-semibold text-xs text-sky-500/80 border-b border-b-sky-500/80">Lihat Selengkapnya</div>
                                </RouterLink>
                            </div>
                            <div class="w-full bg-white p-1 rounded-lg shadow-md">
                                <table class="w-full text-sm text-left text-gray-500">
                                    <thead class="collapse md:visible text-xs text-black/90 uppercase ">
                                        <tr>
                                            <th class="px-6 py-3 w-2/3 text-black/40">Status</th>
                                            <th class="px-6 py-3 text-center w-1/3 text-black/40">Jumlah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 text-gray-900">Kartap</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">23</td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 text-gray-900">Kontrak</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">3</td>
                                        </tr>
                                        <tr class="bg-white">
                                            <td class="px-6 py-4 text-gray-900">Percobaan</td>
                                            <td class="px-6 py-4 font-medium text-gray-900 text-center">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <NavbarBottom />
</template>

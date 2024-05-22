<script setup>
import SidebarMobile from '@/components/SidebarMobile.vue';
import SidebarDesktop from '@/components/SidebarDesktop.vue';
import { ref } from 'vue'

const modal = ref(false)
const NewKaryawan = ref(false)

const closeModal = () => {
    modal.value = false
}

const openModal = () => {
    modal.value = true
}


</script>
<template>
    <div class="md:hidden">
        <div class="fixed w-full h-auto flex justify-center items-center py-4 px-4">
            <div @click="openModal" class="absolute left-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </div>
            <div class="text-sm font-medium">
                Kelola karyawan
            </div>
        </div>
        <SidebarMobile :isShow="modal" @close="closeModal" />
    </div>
    
    <div class="flex w-full">
        <div class="md:w-1/6">
            <SidebarDesktop />
        </div>
        <div class="md:w-5/6 w-full mt-16 px-3 md:px-8 md:py-5 md:mt-4">
            <div class="hidden md:block text-lg font-semibold mb-4">Kelola Karyawan</div>
            <div class="flex flex-col md:flex-row gap-5 md:my-6">
                <div class="md:block hidden w-6/12 rounded-lg shadow-md py-5 px-3">
                    <form action="">
                        <div class="w-full flex items-center justify-between gap-4">
                            <div class="w-6/12">
                                <label for="" class="block text-[12px] font-semibold text-black/90">Nama Lengkap</label>
                                <input type="text" class="w-full border px-2 py-1.5 text-xs rounded-md" placeholder="test">
                            </div>
                            <div class="w-6/12">
                                <label for="" class="block text-[12px] font-semibold text-black/90">Nik</label>
                                <input type="text" class="w-full border px-2 py-1.5 text-xs rounded-md" placeholder="test">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="md:w-6/12 w-full rounded-lg shadow-md border">
                    <div class="p-3">
                        <div class="flex justify-between items-center mb-6">
                            <div class="hidden md:block">
                                Detail Karyawan
                            </div>
                            <div>
                                <input type="text" placeholder="Cari Karyawan" class="border text-xs rounded-lg px-3 py-2">
                            </div>
                            <div class="block md:hidden">
                                <RouterLink to="/manage/karyawan/create">
                                    <button class="text-xs rounded bg-gray-500 px-3 py-2 flex gap-1 items-center">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-3 h-3">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </div>
                                        <div class="text-[12px] font-medium">Buat baru</div>
                                    </button>
                                </RouterLink>
                            </div>
                        </div>

                        <div class="flex flex-col gap-4">

                            <div class="w-full flex items-center justify-between rounded-lg p-3 bg-gray-100">
                                <!-- Detail -->
                                <div class="w-10/12 flex items-center gap-3">
                                    <div>
                                        <img src="http://placehold.it/40x40" alt="" class="rounded-full object-center object-cover w-10 h-10 bg-gray-500">
                                    </div>
                                    <div>
                                        <h1 class="text-sm font-semibold text-black/95">Achmad Abdul Latief</h1>
                                        <p class="text-xs font-medium text-black/60">12007618</p>
                                    </div>
                                </div>
                                
                                <!-- Action -->
                                <div class="w-2/12 flex items-center gap-3 mr-2">
                                    <RouterLink to="/manage/karyawan/edit">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </div>
                                    </RouterLink>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="w-full flex items-center justify-between rounded-md p-2 bg-gray-100">
                                <!-- Detail -->
                                <div class="w-10/12 flex items-center gap-3">
                                    <div>
                                        <img src="http://placehold.it/40x40" alt="" class="rounded-full object-center object-cover w-10 h-10 bg-gray-500">
                                    </div>
                                    <div>
                                        <h1 class="text-sm font-semibold text-black/95">Achmad Abdul Latief</h1>
                                        <p class="text-xs font-medium text-black/60">12007618</p>
                                    </div>
                                </div>
                                
                                <!-- Action -->
                                <div class="w-2/12 flex items-center gap-3 mr-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full flex items-center justify-between rounded-md p-2 bg-gray-100">
                                <!-- Detail -->
                                <div class="w-10/12 flex items-center gap-3">
                                    <div>
                                        <img src="http://placehold.it/40x40" alt="" class="rounded-full object-center object-cover w-10 h-10 bg-gray-500">
                                    </div>
                                    <div>
                                        <h1 class="text-sm font-semibold text-black/95">Achmad Abdul Latief</h1>
                                        <p class="text-xs font-medium text-black/60">12007618</p>
                                    </div>
                                </div>
                                
                                <!-- Action -->
                                <div class="w-2/12 flex items-center gap-3 mr-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full flex items-center justify-between rounded-md p-2 bg-gray-100">
                                <!-- Detail -->
                                <div class="w-10/12 flex items-center gap-3">
                                    <div>
                                        <img src="http://placehold.it/40x40" alt="" class="rounded-full object-center object-cover w-10 h-10 bg-gray-500">
                                    </div>
                                    <div>
                                        <h1 class="text-sm font-semibold text-black/95">Achmad Abdul Latief</h1>
                                        <p class="text-xs font-medium text-black/60">12007618</p>
                                    </div>
                                </div>
                                
                                <!-- Action -->
                                <div class="w-2/12 flex items-center gap-3 mr-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full flex items-center justify-between rounded-md p-2 bg-gray-100">
                                <!-- Detail -->
                                <div class="w-10/12 flex items-center gap-3">
                                    <div>
                                        <img src="http://placehold.it/40x40" alt="" class="rounded-full object-center object-cover w-10 h-10 bg-gray-500">
                                    </div>
                                    <div>
                                        <h1 class="text-sm font-semibold text-black/95">Achmad Abdul Latief</h1>
                                        <p class="text-xs font-medium text-black/60">12007618</p>
                                    </div>
                                </div>
                                
                                <!-- Action -->
                                <div class="w-2/12 flex items-center gap-3 mr-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
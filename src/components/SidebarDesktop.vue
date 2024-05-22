<template>
    <div class="absolute top-0 left-0 h-screen shadow-xl overflow-y-auto py-0 w-1/6 z-10 bg-white hidden md:block">
        <div class="flex flex-col w-full h-screen">
            <div class="flex items-center justify-center pt-8 pb-6 border-b mx-7">
                <div class="font-semibold text-lg">EMS Hexa</div>
            </div>

            <div class="mt-5 mx-7 pb-6 border-b">
                <ul>
                    <div class="py-2">
                        <RouterLink to="/dashboard">
                            <li class="py-2.5 text-[16px] rounded-lg transition ease-out duration-150 font-semibold text-gray-950/85">
                                <div class="text-gray-950/80 flex gap-3 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                                        </svg>                                  
                                    </div>
                                    <div class="text-lg">
                                        Dashboard
                                    </div>
                                </div>
                            </li>
                        </RouterLink>
                    </div>

                    <div class="py-2">
                        <li class="cursor-pointer">
                            <div @click="dataDropdown = !dataDropdown" class="py-2.5 text-[16px] rounded-lg transition ease-out duration-150 flex items-center justify-between w-full h-8 my-1 font-semibold text-gray-950/85">
                                <div class="text-gray-950/80 flex gap-3 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                        </svg>
                                        
                                    </div>
                                    <div class="text-lg">Kelola Data</div>
                                </div>
                                <div>
                                    <div v-show="dataDropdown === false">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </div>
                                    <div v-show="dataDropdown === true" >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <ul v-show="dataDropdown">
                                <div class="py-0.5 pl-5 ml-2">
                                    <RouterLink to="/manage/divisi">
                                        <li class="py-1 px-2 text-[16px] rounded-lg transition ease-out duration-150 flex justify-between">
                                            <div class="text-gray-950/80 font-medium flex gap-3 items-center">
                                                <div class="text-lg">&bull;</div>
                                                <div class="text-lg">Divisi</div>
                                            </div>
                                        </li>
                                    </RouterLink>
                                </div>
                                <div class="py-0.5 pl-5 ml-2">
                                    <RouterLink to="/manage/karyawan/index">
                                        <li class="py-1 px-2 text-[16px] rounded-lg transition ease-out duration-150 flex justify-between">
                                            <div class="text-gray-950/80 font-medium flex gap-3 items-center">
                                                <div class="text-lg">&bull;</div>
                                                <div class="text-lg">Karyawan</div>
                                            </div>
                                        </li>
                                    </RouterLink>
                                </div>
                                <div class="py-0.5 pl-5 ml-2">
                                    <RouterLink to="/manage/status">
                                        <li class="py-1 px-2 text-[16px] rounded-lg transition ease-out duration-150 flex justify-between">
                                            <div class="text-gray-950/80 font-medium flex gap-3 items-center">
                                                <div class="text-lg">&bull;</div>
                                                <div class="text-lg">Status</div>
                                            </div>
                                        </li>
                                    </RouterLink>
                                </div>
                                
                            </ul>
                        </li>
                    </div>

                    <div class="py-2">
                        <RouterLink to="/user">
                            <li class="py-2.5 text-[16px] rounded-lg transition ease-out duration-150 font-semibold text-gray-950/85">
                                <div class="text-gray-950/80 flex gap-3 items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                        </svg>                               
                                    </div>
                                    <div class="text-lg">
                                        Pengguna
                                    </div>
                                </div>
                            </li>
                        </RouterLink>
                    </div>
                </ul>
            </div>
            
            <div class="mt-5 mx-7">
                <div class="py-2">
                    <RouterLink to="/dashboard">
                        <div class="py-2 text-[16px] rounded-lg transition ease-out duration-150 font-semibold text-gray-950/85">
                            <div class="text-red-700 flex gap-3 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                    </svg>
                                </div>
                                <div class="text-lg">
                                    Keluar
                                </div>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { RouterLink } from 'vue-router';

let dataDropdown = ref(false)
</script>
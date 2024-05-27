<template>
    <div class="w-full fixed md:hidden bg-sky-50/40 backdrop-blur-lg bottom-0 left-0 z-10 flex justify-between items-center px-8 pb-6 pt-4">
      <RouterLink to="/dashboard">
        <div class="flex flex-col justify-center items-center gap-1">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-950/60">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div class="text-[10px] text-gray-950/80 font-medium">
            Dashboard
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/manage" class="active:bg-red-500">
        <div class="flex flex-col justify-center items-center gap-1">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-950/60">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <div class="text-[10px] text-gray-950/80 font-medium">
            Kelola Data
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/user">
        <div class="flex flex-col justify-center items-center gap-1">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-950/60">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </div>
          <div class="text-[10px] text-gray-950/80 font-medium">
            Pengguna
          </div>
        </div>
      </RouterLink>

      <div @click="modalLogout = !modalLogout" class="flex flex-col justify-center items-center gap-1">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-700/60">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
        </div>
        <div class="text-[10px] text-red-700/80 font-medium">
          Keluar
        </div>
      </div>
      
    </div>

    <Transition name="scale">
      <div v-if="modalLogout" class="fixed z-30 top-0 left-0 overflow-hidden w-full h-screen flex items-center justify-center bg-black/0 backdrop-blur-xl">
        <div class="w-10/12 h-auto bg-white rounded-3xl py-10 px-6 text-center shadow-xl">
          <div class="text-center mb-10">
            <div class="text-xl font-bold mb-4 text-gray-950/80">Keluar</div>
            <div class="text-lg text-gray-950/40 px-4">
              Anda yakin ingin keluar dari halaman ini?
            </div>
          </div>
          <div class="w-full flex justify-center items-center gap-10">
            <div @click="modalLogout = !modalLogout" class="text-sm px-6 py-4 text-red-700/80">
              Kembali
            </div>
              <div @click="logout" class="border-2 border-black bg-sky-300 text-white/80 rounded-full px-6 py-3 text-sm font-medium">
                Keluar
              </div>
          </div>
        </div>
      </div>
    </Transition>
</template>
<script setup>
import { ref } from 'vue';

const modalLogout = ref(false)

const logout = () => {
  console.log("logout bang")
}
</script>

<style scoped>
.scale-enter-from, .scale-leave-to {
  opacity: 0;
  transform: scale(0.7)
}
.scale-enter-to, .scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
.scale-enter-active, .scale-leave-active {
  transition: all 100ms ease;
}
</style>
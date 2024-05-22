<template>
    <div class="w-full flex flex-col items-center justify-start gap-8">
        <div class=" mt-10">
            <img src="../Verified-ilustration.png" alt="" class=" w-60 h-auto object-cover object-center">
        </div>
        <div class="text-center">
            <h1 class="font-bold text-2xl text-gray-950/80">OTP Verifikasi</h1>
            <p class="px-16 mt-4 text-lg font-normal text-gray-950/40 leading-tight">Masukan kode OTP yang dikirim melalui whatsApp</p>
        </div>
        <div class="flex justify-center items-center gap-3">
            <input type="number" class="border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
            <input type="number" class="border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
            <input type="number" class="border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
            <input type="number" class="border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
        </div>
        <div class="text-center text-sm font-normal text-gray-950/40">
            <div class="mb-1">Tunggu beberapa saat..</div>
            <div class="">Belum menerima kode OTP? <span class="font-bold text-gray-950/60">Kirim ulang</span></div>
        </div>
        <div class="absolute bottom-6 w-full flex justify-center">
            <div class="w-10/12">
                <button class="border w-full bg-sky-400/80 text-white/80 rounded-lg py-2.5 font-semibold">Verifikasi</button>
            </div>
        </div>
    </div>
</template>
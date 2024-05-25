<template>
    <div class="w-full h-screen bg-gray-50 p-8 overflow-hidden">
        <div class="w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
            <div class="">
                <img src="../assets/Verified-ilustration.png" alt="" class="size-80 object-cover object-center">
            </div>
            <div class="w-full md:w-1/3">
                <div class="w-full text-center mb-8">
                    <h1 class="text-2xl mb-4 text-black/80">OTP Verifikasi</h1>
                    <p class="px-14 text-black/40 leading-tight">Masukan kode OTP yang dikirim melalui whatsApp</p>
                </div>
                <form >
                    <div class="flex justify-center items-center gap-3">
                        <input type="number" ref="inputCode" @input="enteredValue($event.target.value, 1)" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                        <input type="number" ref="inputCode" @input="enteredValue($event.target.value, 2)" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                        <input type="number" ref="inputCode" @input="enteredValue($event.target.value, 3)" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                        <input type="number" ref="inputCode" @input="enteredValue($event.target.value, 4)" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                    </div>
                    <div class="text-center text-sm font-normal text-black/40 mt-4">
                        <div class="">Belum menerima kode OTP? <span class="font-bold text-black/60">Kirim ulang</span></div>
                    </div>
                    <div class="w-full mt-12">
                        <button class="border w-full bg-sky-400/80 text-white/80 rounded-lg py-2.5 text-lg">Verifikasi</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- <div>
            <div class="text-center">
                <h1 class="font-bold text-2xl text-gray-950/80">OTP Verifikasi</h1>
                <p class="px-16 mt-4 text-lg font-normal text-gray-950/40 leading-tight">Masukan kode OTP yang dikirim melalui whatsApp</p>
            </div>
            <div class="flex justify-center items-center gap-3">
                <input type="number" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                <input type="number" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                <input type="number" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
                <input type="number" class="code border-b w-2/12 text-2xl text-center py-2 outline-none" maxlength="1" placeholder="0">
            </div>
            <div class="text-center text-sm font-normal text-gray-950/40">
                <div class="mb-1">Tunggu beberapa saat..</div>
                <div class="">Belum menerima kode OTP? <span class="font-bold text-gray-950/60">Kirim ulang</span></div>
            </div>
            <div class="bottom-6 w-full flex justify-center">
                <div class="w-10/12">
                    <button class="border w-full bg-sky-400/80 text-white/80 rounded-lg py-2.5 font-semibold">Verifikasi</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
    
    const enteredValue = (value, index) => {
        const nextIndex = index + 1
        console.log(nextIndex)
        if (value.length >= 1) 
            nextInput.focus();
    }
</script>
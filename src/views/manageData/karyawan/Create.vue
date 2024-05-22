<template>
    <div class="p-4">
        <div class="flex justify-center pb-4">
            <div class="font-semibold text-[16px]">Tambah Karyawan</div>
            <div class="absolute left-4">
                <RouterLink to="/manage/karyawan/index">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </RouterLink>
            </div>
        </div>
        <div class="flex flex-col items-center justify-center my-3">
            <div class="mb-3">
                <div class="mb-1.5">
                    <input type="file" name="foto" id="foto" class="hidden">
                    <label for="foto">
                        <div class="flex justify-center items-center">
                            <img src="http://placehold.it/100x100" alt="" class="bg-gray-300 w-28 h-28 rounded-full object-cover object-center">
                            <div class="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <label for="foto" class="block text-xs font-semibold text-black/80 pt-1 pl-1">Upload Foto Karyawan</label>
            </div>
            <div class="my-1.5 w-full">
                <label for="nama_lengkap" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Nama Lengkap</label>
                <input name="nama_lengkap" id="nama_lengkap" type="text" placeholder="John Doe" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
            </div>
            <div class="my-1.5 w-full">
                <label for="nik" class="block text-xs font-semibold text-black/80 pb-1 pl-1">NIK (Nomor Induk Kependudukan)</label>
                <input name="nik" id="nik" type="text" placeholder="1234567890" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
            </div>
            <div class="my-1.5 w-full">
                <label for="nip" class="block text-xs font-semibold text-black/80 pb-1 pl-1">NIP (Nomor Induk Pegawai)</label>
                <input name="nip" id="nip" type="text" placeholder="12.345678.901" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
            </div>
            <div class="my-1.5 w-full flex justify-between gap-4">
                <div class="w-6/12">
                    <label for="tempat_lahir" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Tempat Lahir</label>
                    <input name="tempat_lahir" id="tempat_lahir" type="text" placeholder="Depok" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
                <div class="w-6/12">
                    <label for="tanggal_lahir" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Tanggal Lahir</label>
                    <input name="tanggal_lahir" id="tanggal_lahir" type="date" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
            </div>
            <div class="my-1.5 w-full flex justify-between gap-4">
                <div class="w-6/12">
                    <label for="rt_rw" class="block text-xs font-semibold text-black/80 pb-1 pl-1">RT/RW</label>
                    <input name="rt_rw" id="rt_rw" type="text" placeholder="01/02" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
                <div class="w-6/12">
                    <label for="kelurahan" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Kelurahan</label>
                    <input name="kelurahan" id="kelurahan" type="text" placeholder="Citapen"class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
            </div>
            <div class="my-1.5 w-full flex justify-between gap-4">
                <div class="w-6/12">
                    <label for="kecamatan" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Kecamatan</label>
                    <input name="kecamatan" id="kecamatan" type="text" placeholder="Ciawi" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
                <div class="w-6/12">
                    <label for="kota" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Kabupaten/Kota</label>
                    <input name="kota" id="kota" type="text" placeholder="Bogor"class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>
            </div>
            <div class="my-1.5 w-full">
                <label for="alamat" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Alamat</label>
                <textarea name="alamat" id="alamat" placeholder="Masukan Alamat disini" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md"></textarea>
            </div>
            
            <div class="w-full mt-3">
                <button @click="step2 = !step2" class="w-full border py-2.5 bg-gray-900 shadow-md text-white/80 rounded-lg text-lg font-normal">Selanjutnya</button>
            </div>
        </div>
    </div>

    <Transition>
        <div v-show="step2"class="fixed left-0 top-0 w-full h-screen bg-white z-10 p-4">
            <div class="flex justify-center pb-4">
                <div class="font-semibold text-[16px]">Tambah Karyawan</div>
                <div class="absolute left-4">
                    <div @click="step2 = !step2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center justify-center my-3">
                <div class="my-1.5 w-full">
                    <label for="nama_ibu" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Nama Ibu Kandung</label>
                    <input name="nama_ibu" id="nama_ibu" type="text" placeholder="John Doe" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>

                <div class="my-1.5 w-full">
                    <label for="email" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Email</label>
                    <input name="email" id="email" type="email" placeholder="Masukan email disini" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                </div>

                <div class="my-1.5 w-full flex justify-between gap-4">
                    <div class="w-8/12">
                        <label for="no_telp" class="block text-xs font-semibold text-black/80 pb-1 pl-1">No hp</label>
                        <input name="no_telp" id="no_telp" type="text" placeholder="Masukan no hp"class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                    </div>
                    <div class="w-4/12">
                        <label for="jumlah_anak" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Jumlah anak</label>
                        <input name="jumlah_anak" id="jumlah_anak" type="text" placeholder="3 (max)" class="border w-full text-sm p-3 rounded-lg outline-none focus:shadow-md">
                    </div>
                </div>

                <div class="my-1.5 w-full flex justify-between gap-4">
                    <div class="w-6/12">
                        <label for="divisi_id" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Divisi</label>
                        <select name="divisi_id" id="divisi_id" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full px-2 py-2.5" required>
                            <option selected disabled>-- Pilih Divisi --</option>
                        </select>
                    </div>
                    <div class="w-6/12">
                        <label for="status_id" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Status</label>
                        <select name="status_id" id="status_id" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full px-2 py-2.5" required>
                            <option selected disabled>-- Pilih Status --</option>
                        </select>
                    </div>
                </div>

                <div class="my-1.5 w-full">
                    <label for="ktp" class="block text-xs font-semibold text-black/80 pb-1 pl-1">Upload Foto KTP</label>
                    <div class="border border-dashed rounded p-2">
                        <input type="file" name="ktp" id="ktp" class="hidden">
                        <label for="ktp">
                            <div class="flex justify-center items-center">
                                <img src="http://placehold.it/160x120" alt="" class="bg-gray-300 w-full h-40 rounded object-cover object-center">
                                <div class="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <div class="absolute bottom-4 w-11/12 flex justify-between items-center gap-4">
                    <div @click="step2 = !step2" class="w-1/2 text-center rounded-lg border border-black/85">
                        <div class="text-lg font-normal py-2.5">Cek kembali</div>
                    </div>
                    <div @click="step2 = !step2" class="w-1/2">
                        <RouterLink to="/manage/karyawan/index">
                            <button class="w-full border py-2.5 bg-black/85 text-white/80 rounded-lg text-lg font-normal">Simpan</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue'

let step2 = ref(false)
</script>
import { userLogin } from "@/http/api";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userAuth: [], // bikin array kosong untuk menampung response login
        checkAuth: false // untuk if condition route maupun permission
    }),
    getters: {
        user: (state) => state.userAuth,
        auth: (state) => state.checkAuth
    },
    actions: {
        async login ( data ) {
            console.log(data);
            try {
                await userLogin(data.email, data.password)
                .then ( response => {
                    console.log(response);
                    this.userAuth = response.data // masukan ke dalam statte 'userAuth'
                    this.checkAuth = true // nah ini berguna untuk if condition di router
                    
                    // langsung redirect ketika berhasil,
                    // sebelum menulis ini pastikan di main js sudah digabungkan antara pinia dan juga router nya
                    this.router.push({ name: 'dashboard'}) 

                })
            } catch (error) {
                console.log(error)
                
            }

            data.email = "",
            data.password = ""
        }
    },
    persist: true
})
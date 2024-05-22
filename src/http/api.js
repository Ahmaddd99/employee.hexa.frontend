import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const login = axios.create({
    baseURL: import.meta.env.VITE_API_AUTH,
    headers: {
        "Content-Type": "Application/json"
    }
})

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// untuk mencegat user bandel yang mau nyoba masuk 
api.interceptors.request.use( req => {
    const authStore = useAuthStore()
    req.headers.Authorization = `Bearer ${authStore.user.token}` // nah ini token bearer yang didapet pas user nya berhasil login
    return req
})

export const userLogin = ( email, password ) => login.post('/login', {email, password})
export const getAllEmployee = () => api.get('/employees')

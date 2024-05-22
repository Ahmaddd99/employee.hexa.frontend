import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Pengguna from '../views/User.vue'
import TFA from '../views/2FA.vue'
import Divisi from '../views/manageData/Divisi.vue'
import KaryawanIndex from '../views/manageData/karyawan/Index.vue'
import KaryawanCreate from '../views/manageData/karyawan/Create.vue'
import KaryawanEdit from '../views/manageData/karyawan/Edit.vue'
import Status from '../views/manageData/Status.vue'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Auth,
      meta: {
        title: "EMS | Login"
      }
    },
    {
      path: '/2fa',
      name: "2fa",
      component: TFA,
      meta: {
        title: "EMS | 2FA"
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: "EMS | Dashboard"
      } 
    },
    {
      path: '/manage/divisi/:id',
      name: 'divisi',
      component: Divisi,
      meta: {
        title: "EMS | Divisi"
      }
    },
    {
      path: '/manage/karyawan/index',
      name: 'karyawan.index',
      component: KaryawanIndex,
      meta: {
        title: "EMS | Karyawan"
      }
    },
    {
      path: '/manage/karyawan/create',
      name: 'karyawan.create',
      component: KaryawanCreate,
      meta: {
        title: "EMS | Karyawan"
      }
    },
    {
      path: '/manage/karyawan/edit',
      name: 'karyawan.edit',
      component: KaryawanEdit,
      meta: {
        title: "EMS | Karyawan"
      }
    },
    {
      path: '/manage/status/:id',
      name: 'status',
      component: Status,
      meta: {
        title: "EMS | Status"
      }
    },
    {
      path: '/user',
      name: 'user',
      component: Pengguna,
      meta: {
        title: "EMS | Pengguna"
      }
    },
  ]
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Vite App'
})

export default router

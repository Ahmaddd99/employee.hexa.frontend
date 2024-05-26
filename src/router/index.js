import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Auth from '../views/Auth.vue'
import Dashboard from '../views/Dashboard.vue'
import Pengguna from '../views/User.vue'
import tfa from '../views/2FA.vue'
import ManageView from '../views/Manage.vue'

import DivisiIndex from '../views/manageData/divisi/Index.vue'
import DivisiCreate from '../views/manageData/divisi/Create.vue'
import DivisiEdit from '../views/manageData/divisi/Edit.vue'

import KaryawanIndex from '../views/manageData/karyawan/Index.vue'
import KaryawanCreate from '../views/manageData/karyawan/Create.vue'
import KaryawanEdit from '../views/manageData/karyawan/Edit.vue'

import StatusIndex from '../views/manageData/status/Index.vue'
import StatusCreate from '../views/manageData/status/Create.vue'
import StatusEdit from '../views/manageData/status/Edit.vue'

import { useAuthStore } from '@/stores/auth'


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
      component: tfa ,
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
      path: '/manage',
      name: 'manage',
      component: ManageView,
      meta: {
        title: "EMS | Manage"
      }
    },

    /**
     * Divisi
     */
    {
      path: '/manage/divisi/index',
      name: 'divisi.index',
      component: DivisiIndex
    },
    {
      path: '/manage/divisi/create',
      name: 'divisi.create',
      component: DivisiCreate,
    },
    {
      path: '/manage/divisi/edit',
      name: 'divisi.edit',
      component: DivisiEdit,
    },

    /**
     * Karyawan
     */
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

    /**
     * Status
     */
    {
      path: '/manage/status/index',
      name: 'status.index',
      component: StatusIndex
    },
    {
      path: '/manage/status/create',
      name: 'status.create',
      component: StatusCreate
    },
    {
      path: '/manage/status/edit',
      name: 'status.edit',
      component: StatusEdit
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

// router.beforeEach( async (to, from, next) => {
//   const authStore = useAuthStore();
//   if (!authStore.auth && to.name !== "login") {
//     next( {name: "login"} )
//   } else if (authStore.auth && !authStore.verify &&  to.name !== "2fa") {
//     next( {name: "2fa"} )
//   } else {
//     next()
//   }
// })

export default router

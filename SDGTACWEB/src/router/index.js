import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Client-Main-Dash-Board/:token/:id',
      name: 'CLIMDB',
      component: () => import('../views/CLIMaindashboard.vue')
    },
    {
      path: '/',
      name: 'LOGIN',
      component: () => import('../views/login.vue')
    },
    {
      path: '/Client-Register-Form',
      name: 'CLIREGISTER',
      component: () => import('../views/ClientRegister.vue')
    },
    {
      path: '/Incident-Report-Form',
      name: 'INCIDENTREP',
      component: () => import('../views/IncidentReport.vue')
    },
    {
      path: '/Payment-Method-Form',
      name: 'PAYREGISTER',
      component: () => import('../views/PaymentMethod.vue')
    },
    {
      path: '/User-Register-Form',
      name: 'USERREGISTER',
      component: () => import('../views/UserRegister.vue')
    },
    {
      path: '/Address-Register-Form',
      name: 'ADDREGISTER',
      component: () => import('../views/AddressRegister.vue')
    },
    {
      path: '/Statement-Register-Form',
      name: 'STATREGISTER',
      component: () => import('../views/StatementsRegister.vue')
    },
    {
      path:  '/Administrator-Main-Dash-Board',
      name: 'ADMMDB',
      component: () => import('../views/ADMMaindashboard.vue')
    },
    {
      path: '/Ejecutivo-Main-Dash-Board',
      name: 'EJV',
      component: ()=>import('../views/EJVMaindasboard.vue')
    },
    {
      path: '/Branch-Register-Form',
      name: 'BRANCHREG',
      component: () => import('../views/StatementsRegister.vue')
    }
  ]
})

export default router

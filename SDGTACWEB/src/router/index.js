import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Client-Main-Dash-Board',
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
      path: '/IncidentReport-Form',
      name: 'INCIDENTREP',
      component: () => import('../views/IncidentReport.vue')
    }
  ]
})

export default router

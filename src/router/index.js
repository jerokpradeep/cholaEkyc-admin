import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import store from '../store'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/main',
      name: 'home',
      component: () => import('../views/main.vue'),
      children: [
        { path: '/dashboard', component: () => import('../views/dashboard.vue') },
        { path: '/opportunity', component: () => import('../views/opportunity/opportunity.vue')},
        { path: '/kycapproval', component: () => import('../views/kyc-approval.vue') },
        { path: '/re', component: () => import('../views/reconcellation.vue') },
        { path: '/lead', component: () => import('../views/lead.vue') },
        { path: '/approvepanel', component: () => import('../views/approve-panel/approve-panel.vue') },
      ],
    },
  ]
});

export default router

router.beforeEach(async (to, from, next) => {
  let userData = localStorage.getItem('userData') && localStorage.getItem('userData') != "undefined" ? JSON.parse(localStorage.getItem('userData')) : null
  store.commit('login/setUserData' , userData)
  let customerData = localStorage.getItem('customerData') && localStorage.getItem('customerData') != "undefined" ? JSON.parse(localStorage.getItem('customerData')) : null
  store.commit('approval/setCustomerData' , customerData)
  next()
})
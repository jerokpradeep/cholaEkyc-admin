import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/main',
      name: 'home',
      component: () => import('../components/main.vue'),
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

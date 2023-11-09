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
        { path: '/preview', component: () => import('../views/image-preview.vue') },
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
  let steps = localStorage.getItem('steps') && localStorage.getItem('steps') != "undefined" ? JSON.parse(localStorage.getItem('steps')) : []
  store.commit('setValidSteps', steps)
  let queries = localStorage.getItem('tabQuries') && localStorage.getItem('tabQuries') != "undefined" ? JSON.parse(localStorage.getItem('tabQuries')) : store.state.defaultQueries
  store.commit("setQuries", { data: queries, action: "intial" });

  let stageData = JSON.parse(localStorage.getItem('stageData'))
  if(stageData) {
    store.commit('approval/setStageData' , stageData)
  }
  let userName = JSON.parse(localStorage.getItem('userName'))
  if(userName) {
    store.commit('login/setUserName' , userName)
  }
  let data = JSON.parse(localStorage.getItem('setCurrentImage'))
  if(data) {
    store.commit('approval/setDocumentData', data)
  }
  next()
})
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
        { path: '/viewOpportunity', component: () => import('../views/opportunity/viewOpportunity.vue')},
        { path: '/kycapproval', component: () => import('../views/kyc-approval.vue') },
        { path: '/re', component: () => import('../views/reconcellation.vue') },
        { path: '/lead', component: () => import('../views/lead.vue') },
        { path: '/approvepanel', component: () => import('../views/approve-panel/approve-panel.vue') },
        { path: '/preview', component: () => import('../views/image-preview.vue') },
        { path: '/ckycReport', component: () => import('../views/ckycReport.vue') },
        { path: '/urlgeneration', component: () => import('../views/urlGeneration.vue') },
        { path: '/logs', component: () => import('../views/logs-pages/logs.vue') },
      ],
    },
  ]
});

export default router
let isValid = true
router.beforeEach(async (to, from, next) => {
  checkValidToken()
  if(!checkValidToken() && isValid && to.path != '/' && from.path != '/') {
    isValid = false
    store.dispatch('errorLog/toaster',{data: {
      "title": 'Your Session has been Invalid, kindly re-login',
      "type": "danger",
      "message": '',
      "duration": 4500
  },position: ''}, {root: true})
    next({ path: '/' })
  }
  let userData = localStorage.getItem('userData') && localStorage.getItem('userData') != "undefined" ? JSON.parse(localStorage.getItem('userData')) : null
  store.commit('login/setUserData' , userData)
  let steps = localStorage.getItem('steps') && localStorage.getItem('steps') != "undefined" ? JSON.parse(localStorage.getItem('steps')) : []
  store.commit('setValidSteps', steps)
  let queries = localStorage.getItem('ekycAdminQuries') && localStorage.getItem('ekycAdminQuries') != "undefined" ? JSON.parse(localStorage.getItem('ekycAdminQuries')) : store.state.defaultQueries
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
  
  if (to.path != '/') {
    let item = store.state.validSteps.filter((el) => el.route == to.path)
    item.length > 0 ? store.dispatch('changeTab', item[0]) : ''
  }
  next()
})

function checkValidToken() {
  if(localStorage.getItem('userData')) {
    let userData = JSON.parse(localStorage.getItem('userData'))
    return userData != null && userData.hasOwnProperty('tempToken') && userData?.tempToken != ''
  } else {
    return false
  }
}
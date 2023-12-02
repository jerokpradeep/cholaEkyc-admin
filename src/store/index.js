import { createStore } from "vuex";
import opportunity from "./modules/opportunity.js";
import tabs from "./modules/tabs.js";
import errorLog from './errorHandle/index.js'
import login from "./modules/login.js"
import approval from "./modules/approval.js"
import httpService from "../services/httpservices.js";
import router from "../router/index.js";
import bo from "./modules/bo.js";
const store = createStore({
  state: {
    version: "1.0.0",
    buildDate: '30_11_2023_20_30',
    isLogout: false,
    tempSteps: [
      {
          name: "Dashboard",
          route: "/dashboard",
          icon: "Reports",
          status: "active",
          active: true,
          svg: "home",
        },
        {
          name: "Lead",
          route: "/lead",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "orders",
        },
        {
          name: "Opportunity",
          route: "/opportunity",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "orders",
        },
        {
          name: "Approval",
          route: "/kycapproval",
          icon: "Reports",
          status: "active",
          active: true,
          svg: "upload",
        },
        {
          name: "Recon",
          route: "/re",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "newsIcon",
        },
        {
          name: "CKYC Download",
          route: "/ckycReport",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "download",
        },
        {
          name: "URL Generation",
          route: "/urlgeneration",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "download",
        },
    ],
    validSteps: [],
    defaultQueries: {
      approvepanel: {
        query: { tab: 0, sTab1: 0, sTab2: 0 },
      },
      kycapproval: {
        query: { tab: 0 },
      },
      opportunity: {
        query: { tab: 0}
      }
    },
    queries: {
      approvepanel: {
        query: { tab: 0, sTab1: 0, sTab2: 0 },
      },
      kycapproval: {
        query: { tab: 0 },
      }, 
      opportunity: {
        query: { tab: 0}
      }
    },
    activeTab: 0,
    isLogoutLoader: false
  },
  mutations: {
    setLogout(state, payload){
      state.isLogout = payload
    },
    setValidSteps(state, payload){
      state.validSteps = payload
      localStorage.setItem('steps', JSON.stringify(payload))
    },
    setQuries(state, payload) {
      let tempQuries = state.queries;
      let path = router.currentRoute.value.path.toString().replace('/', '');
      if(payload.overRideKey && Object.keys(tempQuries).indexOf(payload.overRideKey) > -1){
        if (payload.overRideKey && tempQuries[payload.overRideKey]) {
          payload.data.hasOwnProperty('tab')
            ? (tempQuries[payload.overRideKey].query.tab = payload.data.tab)
            : '';
          payload.data.hasOwnProperty('sTab1')
            ? (tempQuries[payload.overRideKey].query.sTab1 = payload.data.sTab1)
            : '';
          payload.data.hasOwnProperty('sTab2')
            ? (tempQuries[payload.overRideKey].query.sTab2 = payload.data.sTab2)
            : '';
        }
      }else if (payload.action == 'intial') {
        tempQuries = payload.data;
      } else {
        if (path && tempQuries[path]) {
          payload.data.hasOwnProperty('tab')
            ? (tempQuries[path].query.tab = payload.data.tab)
            : '';
          payload.data.hasOwnProperty('sTab1')
            ? (tempQuries[path].query.sTab1 = payload.data.sTab1)
            : '';
          payload.data.hasOwnProperty('sTab2')
            ? (tempQuries[path].query.sTab2 = payload.data.sTab2)
            : '';
        }
      }
      state.queries = tempQuries;
      localStorage.setItem('tabQuries', JSON.stringify(tempQuries));
    },
    setActiveTab(state, payload){
      state.activeTab = payload
    },
    setIsLogoutLoader(state, payload) {
      state.isLogoutLoader = payload
    }
  },
  actions: {
    callLogout({ commit, dispatch }) {
      commit('setIsLogoutLoader', true)
      httpService.callLogout().then((res) => {
        if (res.status == 200) {
          commit('setLogout', false)
          dispatch('errorLog/resetLocal', '', { root: true })
        }
      }, (err) => {
        dispatch('errorLog/checkRouter', err, { root: true })

      }).finally(() => {
        commit('setIsLogoutLoader', false)
      })
    },
    navigateSteps({state, commit}, payload){
      if(payload == 'EKYC Employee' || payload == 'RM'){
        let empArr = ['Approval' , 'Opportunity' , 'CKYC Download']
        let rmArr = ['Approval' , 'Opportunity', 'CKYC Download', 'URL Generation']
        let validArr = payload == 'EKYC Employee'? empArr : payload == 'RM' ? rmArr : []
        let approval = state.tempSteps.filter((el)=> validArr.includes(el.name))
        approval[0].active = true
        commit('setValidSteps', [...approval])
        router.push(approval[0].route).catch(()=>{})
      }
    },
    changeTab({state, commit}, payload){
      state.validSteps.forEach((el) => {
        if (el.route == payload.route) {
          el.active = true;
        } else {
          el.active = false;
        }
      });
      commit('setValidSteps', state.validSteps)
    }
  },
  getters: {
    getIsLogoutLoader: (state) => state.isLogoutLoader
  },
  modules: { opportunity, tabs, errorLog, login, approval, bo },
});
export default store

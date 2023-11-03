import { createStore } from "vuex";
import opportunity from "./modules/opportunity.js";
import tabs from "./modules/tabs.js";
import errorLog from './errorHandle/index.js'
import login from "./modules/login.js"
import approval from "./modules/approval.js"
import httpService from "../services/httpservices.js";
const store = createStore({
  state: {
    version: "1.0.0",
    buildDate: '03_11_2023_24_00',
    isLogout: false,
    isReject: false
  },
  mutations: {
    setLogout(state, payload){
      state.isLogout = payload
    },
    setReject(state, payload){
      state.isReject = payload
    }
  },
  actions: {
    callLogout({commit, dispatch}, payload){
      httpService.callLogout().then((res)=>{
        if(res.status == 200){
          commit('setLogout', false)
          dispatch('errorLog/resetLocal', '', {root: true})
        }
      }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })

        }).finally(() => { 
         })
    }
  },
  getters: {},
  modules: { opportunity, tabs, errorLog, login, approval },
});
export default store

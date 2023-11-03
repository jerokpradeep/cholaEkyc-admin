import { createStore } from "vuex";
import opportunity from "./modules/opportunity.js";
import tabs from "./modules/tabs.js";
import errorLog from './errorHandle/index.js'
import login from "./modules/login.js"
import approval from "./modules/approval.js"
const store = createStore({
  state: {
    version: "1.0.0",
    buildDate: '03_11_2023_11_15'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { opportunity, tabs, errorLog, login, approval },
});
export default store

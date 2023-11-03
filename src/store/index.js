import { createStore } from "vuex";
import opportunity from "./modules/opportunity.js";
import tabs from "./modules/tabs.js";
import errorLog from './errorHandle/index.js'
import login from "./modules/login.js"
const store = createStore({
  state: {
    version: "1.0.0",
    buildDate: '02_11_2023_14_30'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { opportunity, tabs, errorLog, login },
});
export default store

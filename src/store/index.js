import { createStore } from "vuex";
import opportunity from "./modules/opportunity.js";
import tabs from "./modules/tabs.js";
import errorLog from './errorHandle/index.js'
const store = createStore({
  state: {
    brokerName: "gopocket",
    myAppCode:'cBxWZqAtSIyRQIN',
    version: "1.0.0",
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { opportunity, tabs,errorLog },
});
export default store

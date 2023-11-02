import { createStore } from "vuex";
import opportunity from "./modules/opportunity";
import tabs from "./modules/tabs";
export default createStore({
  state: {
    brokerName: "gopocket",
    myAppCode:'cBxWZqAtSIyRQIN',
    version: "1.0.0",
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { opportunity, tabs },
});

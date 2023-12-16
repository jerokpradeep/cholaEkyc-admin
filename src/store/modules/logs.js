import httpService from "../../services/httpservices";

const state = {
    mailLogs: [],
    loginType: "EMAIL",
    loader: false,
    isMailDial: false,
}

const mutations = {
    setLoader(state, payload) {
        state.loader = payload;
      },
    setMailLogs(state, payload) {
        state.mailLogs = payload;
    },
    setLoginType(state, payload) {
        state.loginType = payload;
    },
    setIsMailDial(state, payload) {
        state.isMailDial = payload;
      },
}

const actions = {
    async getMailLogData({ commit, dispatch }, payload) {
        commit("setLoader", true);
        await httpService.getMailLogData(payload).then((response) => {
            if ( response.status == 200 && response.data.result && response.data.result.length > 0 && response.data.result != 'The OffSet Exits the data') {
                commit("setMailLogs", response.data.result);
                commit("setLoginType", payload.type);
            } else if (response.data.result == 'The OffSet Exits the data') {
                commit("setMailLogs", []);
                notify({ group: "auth", type: "error", title: `${response.data.result}`});
            } else {
                commit("setMailLogs", []);
                notify({ group: "auth", type: "error", title: `${response.data.reason}`});
            }
        })
        .catch((err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        })
        .finally(() => {
            commit("setLoader", false);
        });
    },
}

const getters = {
    getLoader: (state) => state.loader,
    getMailLogs: (state) => state.mailLogs,
};

const logs = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default logs
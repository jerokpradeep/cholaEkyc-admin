import httpService from "../../services/httpservices";

const state = {
    mailLogs: [],
    loginType: "EMAIL",
    loader: false,
    isMailDial: false,
    accessLogs:[],
    restLogs:[],
    isShowDialog: false
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
      setAccessLogs(state, payload){
        state.accessLogs = payload
      },
      setRestLogs(state, payload){
        state.restLogs = payload
      },
      setIsShowDialog(state, payload) {
        state.isShowDialog = payload
      } 
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
                dispatch('errorLog/toaster',{data: {
                    "title": response.data.reason,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            } else {
                commit("setMailLogs", []);
                dispatch('errorLog/toaster',{data: {
                    "title": response.data.reason,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
        },(err)=> {
            dispatch('errorLog/checkRouter', err, {root: true})
        }).finally(() => {
            commit("setLoader", false);
        });
    },

    async getAccessLog({ commit, dispatch }, payload) {
        commit("setLoader", true);
        await httpService.getAccessLogDetails(payload).then((response) => {
            if ( response.status == 200 && response.data.result && response.data.result.length > 0 && response.data.result != 'The OffSet Exits the data') {
                commit('setAccessLogs', response.data.result)
            }
        },(err)=> {
            dispatch('errorLog/checkRouter', err, {root: true})
        })
        .finally(() => {
            commit("setLoader", false);
        });
    },
    async getRestLogDetails({ commit, dispatch }, payload) {
        commit("setLoader", true);
        await httpService.getRestLogDetails(payload).then((response) => {
            if ( response.status == 200 && response.data.result && response.data.result.length > 0 && response.data.result != 'The OffSet Exits the data') {
                commit('setRestLogs', response.data.result)
            }
        },(err)=> {
            dispatch('errorLog/checkRouter', err, {root: true})
        })
        .finally(() => {
            commit("setLoader", false);
        });
    },
}

const getters = {
    getLoader: (state) => state.loader,
    getMailLogs: (state) => state.mailLogs,
    getIsShowDialog: (state) => state.isShowDialog
};

const logs = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default logs
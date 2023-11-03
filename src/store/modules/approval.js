import httpService from "../../services/httpservices";
const state = {
    approvalList: []
}

const actions = {
    getApprovalList({ commit, dispatch }, payload) {
        httpService.getApprovalList(payload).then(resp => {
            console.log(resp, 'getApprovalList');
            if(resp.status == 200 && resp.data?.message?.success_key == 1 && resp.data?.message?.Data?.length) {
                commit('setApprovalList', resp.data.message.Data)
            } else {
                commit('setApprovalList', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    },

    updateDocStatus({ commit, dispatch }, payload) {
        httpService.updateDocStatus(payload).then(resp => {
            console.log(resp, 'updateDocStatus');
            if(resp.status == 200) {
                
            } else {
                
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    }
};

const mutations = {
    setApprovalList(state, payload) {
        state.approvalList = payload
    }
};

const getters = {
    getApprovalList: state => state.approvalList
};

const approval = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default approval
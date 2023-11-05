import httpService from "../../services/httpservices";
const state = {
    approvalList: [],
    customerData: [],
    stageData: [],
    isAssign: false
}

const actions = {
    async getApprovalList({ commit, dispatch, rootGetters }) {
        let json = {
            token : rootGetters['login/getUserData']['token'],
            sessId : rootGetters['login/getUserData']['sid']
        }
        await httpService.getApprovalList(json).then(resp => {
            if(resp.status == 200 && resp.data?.message?.success_key == 1 && resp.data?.message?.Data?.length) {
                commit('setApprovalList', resp.data.message.Data)
            } else {
                commit('setApprovalList', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    },

    async updateDocStatus({ state, commit, dispatch }, payload) {
        await httpService.updateDocStatus(payload).then(resp => {
            if(resp.status == 200) {
                
            } else {
                
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { 
            commit('errorLog/setCounter', 0, { root: true })
            dispatch('getStageDetails', state.customerData.name)
         })
    },

    async getCustomerData({ commit, dispatch, rootGetters }, payload) {
        let json = {
            id : payload,
            token : rootGetters['login/getUserData']['token'],
            sessId : rootGetters['login/getUserData']['sid'],
            userId : rootGetters['login/getUserData']['user'],
        }
        await httpService.getCustomerData(json).then(resp => {
            if(resp.status == 200 && resp.data?.data) {
                commit('setCustomerData', resp.data?.data)
            } else {
                commit('setCustomerData', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    },
    async getStageDetails({commit, dispatch, rootGetters}, payload) {
        let json = {
            id : payload,
            token : rootGetters['login/getUserData']['token'],
            sessId : rootGetters['login/getUserData']['sid'],
            userId : rootGetters['login/getUserData']['user'],
        }
        await httpService.getStageDetails(json).then(resp => {
            if(resp.status == 200 && resp.data?.message?.success_key == 1) {
                commit('setStageData', resp.data?.message?.data)
            } else {
                commit('setStageData', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    },
    async callAssignee({commit, dispatch, rootGetters}, payload){
        console.log(payload , 'payload payload');
        await httpService.assignOpportunity(payload).then(resp =>{
            if(resp.status == 200 && resp.data){
                commit('setIsAssign', false)
                dispatch('getApprovalList')
            }
       }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  })
    }
};

const mutations = {
    setApprovalList(state, payload) {
        state.approvalList = payload
    }, 
    setCustomerData(state, payload) {
        state.customerData = payload
        localStorage.setItem('customerData', JSON.stringify(payload))
    },
    setStageData(state, payload) {
        state.stageData = payload
        localStorage.setItem('stageData', JSON.stringify(payload))
    },
    setIsAssign(state, payload){
        state.isAssign = payload
    }
};

const getters = {
    getApprovalList: state => state.approvalList,
    getCustomerData: state => state.customerData,
    getStageData: state => state.stageData
};

const approval = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default approval
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
            token : rootGetters['login/getUserData']['tempToken'],
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

    async updateDocStatus({ commit, dispatch }, payload) {
        await httpService.updateDocStatus(payload).then(resp => {
            if(resp.status == 200) {
                if(resp.data.message.success_key == 0 && resp.data.message.message)   {
                    dispatch('errorLog/toaster',{data: {
                        "title": resp.data.message.message,
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    },position: ''}, {root: true})
                }
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
    },

    async getCustomerData({ commit, dispatch, rootGetters }, payload) {
        let json = {
            id : payload,
            token : rootGetters['login/getUserData']['tempToken'],
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
            token : rootGetters['login/getUserData']['tempToken'],
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
        await httpService.assignOpportunity(payload).then(resp =>{
            if(resp.status == 200 && resp.data){
                commit('setIsAssign', false)
                dispatch('getApprovalList')
            }
       }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  })
    },

    formatJson({state,commit, dispatch, rootGetters}, payload){
        let str = `userId=${rootGetters['login/getUserData']['user']}&id=${state.customerData.name}&status=${payload.status}&document_type=${getDocmentType(payload.tab)}&remarks=${payload.remarks}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`
        if(payload.tab == 7 || payload.tab == 8 || payload.tab == 9){
            str += `&attachmentType=${payload.tab == 7 ? 'Document' : payload.tab == 8 ? 'IPV' : 'ESIGN_ DOCUMENT'}`
        }
        if(payload.tab == 6){
            str +=`&nominee_no=${payload.nomineeId}`
        }
        dispatch('updateDocStatus', str)
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

function getDocmentType(currentTab) {
    let docType = ''
    switch (currentTab) {
        case 1:
            docType = 'Pan'
            break;
        case 2:
            docType = 'Address'
            break;
        case 3:
            docType = 'Profile'
            break;
        case 4:
            docType = 'Bank'
            break;
        case 5:
            docType = 'Segment'
            break;
        case 6:
            docType = 'Nominee'
            break;
        case 7:
            docType = 'Document'
            break;
        case 8:
            docType = 'IPV'
            break;
        case 9:
            docType = 'E-Sign'
            break;
        default:
            docType
            break;
    }
    return docType;
}
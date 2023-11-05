import httpService from "../../services/httpservices";
const state = {
    isStageDetails: false
}

const actions = {
   getOpportunityList({state,commit,dispatch}, payload){
    httpService.getOpportunityList().then(resp =>{
    }, (err) => {
        dispatch('errorLog/checkRouter', err, { root: true })

    }).finally(() => { commit('errorLog/setCounter', 0, { root: true }) })
   }
};

const mutations = {
    setIsStageDetails(state, payload) {
        state.isStageDetails = payload
    }
};

const getters = {
    getIsStageDetails: state => state.isStageDetails
};

const opportunity = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default opportunity
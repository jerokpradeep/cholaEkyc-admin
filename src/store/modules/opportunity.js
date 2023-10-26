// import service from '../httpService'
// import errorHandle from '../../handleError/errorHandling'

const state = {
    isStageDetails: false
}

const actions = {
    // async getBankDataFromApi({ commit }) {
    //     commit('setLoader', true, { root:true })
    //     service.getBankDetails().then(resp => {
    //         if(resp.data?.message?.data?.fsl_bank_details) {
    //             commit('setBankDetails',resp.data.message.data?.fsl_bank_details)
    //         } else {
    //             commit('setBankDetails', [])
    //         }
    //     }).catch((error) => {
    //         errorHandle.handleError(error)
    //     }).finally(() => {
    //         commit('setLoader', false, { root: true })
    //     })
    // },
};

const mutations = {
    setIsStageDetails(state, payload) {
        state.isStageDetails = payload
    }
};

const getters = {
    getIsStageDetails: state => state.isStageDetails
};

const bankDetails = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default bankDetails
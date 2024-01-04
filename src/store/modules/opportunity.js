import httpService from "../../services/httpservices";
const state = {
    isStageDetails: false,
    allOpportunities: []
}

const actions = {
    getOpportunityList({ commit, dispatch, rootGetters }) {
        commit('approval/setIsLoader', true, { root: true })
        let json = {
            token : rootGetters['login/getUserData']['tempToken'],
            sessId : rootGetters['login/getUserData']['sid'],
            userId : rootGetters['login/getUserData']['user'],
        }
        httpService.getOpportunityList(json).then(resp =>{
            if(resp.status == 200 && resp.data?.message?.Data) {
                commit('setAllOpportunities', resp.data?.message?.Data)
            } else {
                commit('setAllOpportunities', [])
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })

        }).finally(() => { 
            commit('approval/setIsLoader', false, { root: true })
            commit('errorLog/setCounter', 0, { root: true }) 
        })
   },
   getFilteredOpportunityList({ commit, dispatch, rootGetters }, payload) {
    commit('approval/setIsLoader', true, { root: true })
    let json = {
        token : rootGetters['login/getUserData']['tempToken'],
        sessId : rootGetters['login/getUserData']['sid'],
        userId : rootGetters['login/getUserData']['user'],
        from_date : payload.from_date,
        to_date : payload.to_date,
        status : payload.status,
        pan_no : payload.pan_no,
        mobile_no : payload.mob_no,
        id : payload.application_id
    }
    httpService[rootGetters['login/getUserData'] && rootGetters['login/getUserData'].Role == 'RM' ? 'getRMOpptuity' : 'getFilteredOpurtunity'](json).then(resp =>{
        if(resp.status == 200 && resp.data?.message?.Data) {
            commit('setAllOpportunities', resp.data?.message?.Data)
        } else {
            commit('setAllOpportunities', [])
        }
    }, (err) => {
        dispatch('errorLog/checkRouter', err, { root: true })

    }).finally(() => { 
        commit('approval/setIsLoader', false, { root: true })
        commit('errorLog/setCounter', 0, { root: true }) 
    })
   }
};

const mutations = {
    setIsStageDetails(state, payload) {
        state.isStageDetails = payload
    },
    setAllOpportunities(state, payload) {
        state.allOpportunities = payload
    }
};

const getters = {
    getIsStageDetails: state => state.isStageDetails,
    getAllOpportunities: state => state.allOpportunities,
};

const opportunity = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default opportunity
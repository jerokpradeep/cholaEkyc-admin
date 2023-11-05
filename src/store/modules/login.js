import httpService from "../../services/httpservices";
import common from "../../mixins/common";
const state = {
    userData: '',
    isLoading: false
}

const actions = {
    getUserSession({ commit, dispatch }, payload) {
        commit('setIsLoading' , true)
        httpService.login(payload).then(resp => {
            if(resp.status == 200 && resp.data.message.success_key == 1) {
                commit('setUserData', resp.data.message.data)
                dispatch('navigateSteps', resp.data.message.data.Role, {root: true})
            } else {
                commit('setUserData', '')
                dispatch('errorLog/toaster', {
                    data: {
                        "title": "Login Failed",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    }, position: ''
                }, { root: true })
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })

        }).finally(() => { 
            commit('setIsLoading' , false)
            commit('errorLog/setCounter', 0, { root: true })
         })
    }
};

const mutations = {
    setUserData(state, payload) {
        state.userData = payload
        localStorage.setItem('userData', JSON.stringify(payload))
        if(payload && payload.system_user && payload.sid){
        common.setCookie('system_user', payload.system_user)
        common.setCookie('sid', payload.sid)
        }
    }, 
    setIsLoading(state, payload) {
        state.isLoading = payload
    }
};

const getters = {
    getUserData: state => state.userData,
    getIsLoading: state => state.isLoading
};

const login = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default login
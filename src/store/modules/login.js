import httpService from "../../services/httpservices";
import common from "../../mixins/common";
const state = {
    userData: '',
    isLoading: false,
    userName: ''
}

const actions = {
    getUserSession({ commit, dispatch }, payload) {
        commit('setIsLoading' , true)
        httpService.login(payload).then(resp => {
            if(resp.status == 200 && resp.data.message.success_key == 1) {
                commit('setUserName', resp.data?.full_name)
                commit('setUserData', resp.data?.message?.data)
                resp.data.message?.data?.Role ? dispatch('navigateSteps', resp.data.message?.data?.Role, { root: true }) : dispatch('errorLog/toaster', {
                    data: {
                        "title": "The user Doesn't have Role. Please contact Administrator.",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    }, position: ''
                }, { root: true })
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
        payload ?  payload.tempToken = payload.token.split(" ")[1] : ''
        state.userData = payload
        localStorage.setItem('userData', JSON.stringify(payload))
    }, 
    setIsLoading(state, payload) {
        state.isLoading = payload
    },
    setUserName(state, payload) {
        state.userName = payload
        localStorage.setItem('userName', JSON.stringify(payload))
    }
};

const getters = {
    getUserData: state => state.userData,
    getIsLoading: state => state.isLoading,
    getUserName: state => state.userName
};

const login = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default login
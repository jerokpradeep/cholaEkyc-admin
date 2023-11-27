import notification from '../../notification'
import router from '../../router'
const state = {
    toasterPalce: 'top-right',
    counter: 0
}

const mutations = {
    setCounter(state, payload){
        state.counter = payload
    }
}

const actions = {

    toaster({state} , payload){
        notification.open(payload.data, payload.position ? payload.position : state.toasterPalce)
    },

    errorLog({state,commit ,dispatch} , payload ){
        let tempToaster 
        if (payload?.response?.status && payload?.response?.status == 404){
            tempToaster = {
                "title": "",
                "type": "danger",
                "message": "We'II Be Back Soon",
                "duration": 4500
              }
            
        }else if (payload.response.status && payload.response.status >= 400 && payload.response.status < 500 && state.counter == 0) {
            commit('setCounter', 1)
            payload.response.status == 401 ? tempToaster = {
                "title": "",
                "type": "danger",
                "message": "Your session has been invalidated. Kindly re-login",
                "duration": 4500
              } : tempToaster = {
                "title": "",
                "type": "danger",
                "message":  payload.response.data ? payload.response.data : payload.response.status,
                "duration": 4500
              }
            dispatch('resetLocal', true)
        } else if (payload.response.status && payload.response.status >= 500) {
            tempToaster = {
                "title": "",
                "type": "danger",
                "message":  "Something went wrong. Please try after sometime",
                "duration": 4500
              }
        }
        dispatch('toaster' ,{data:tempToaster, position: ''}) 
    },

    resetLocal({dispatch, commit,rootGetters}, payload){
        localStorage.clear()
        router.push('/').catch(() =>{})
    },
    checkRouter({ dispatch} , payload){
       let path = router.currentRoute.value.path
       if(path == '/'){
       dispatch('resetLocal' , true)
       }else {
        dispatch('errorLog', payload)
       }
       
    },
}

const getters = {

}

const errorLog = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
export default errorLog
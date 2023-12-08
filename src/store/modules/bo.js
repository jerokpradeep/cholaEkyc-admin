import httpService from "../../services/httpservices";
const state = {

}

const mutations = {

}

const actions = {
    callckyc({rootGetters, dispatch}, payload){
        let str = `applicationId=${rootGetters['approval/getCustomerData']?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`
        httpService.generateCkyc(str).then(resp =>{
            if(resp.status == 200 && resp.data.stat == 0){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.message,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
            if(resp.status == 200 && resp.data.stat == 1){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.message,
                    "type": "success",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  
            
        })
    },
   async callGenUrl({dispatch}, payload){
      await  httpService.genrateUrl(payload.query, payload.json).then(async resp =>{
            if(resp.status == 200 && resp.data.stat == 0){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.reason ? resp.data.reason : resp.data.message,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
            if(resp.status == 200 && resp.data.stat == 1){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.reason,
                    "type": "success",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
          }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  
            
        })
    },
    async callDownload({dispatch}, payload){
     await httpService.downloadCkyc(payload).then(resp => {
            if(resp.status == 200 && resp.data.stat == 0){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.message ? resp.data.message : resp.data.reason,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
            if(resp.status == 200 && resp.data.stat == 1){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.reason,
                    "type": "success",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
       }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  
            
        })
    }
}

const getters = {

}

const bo = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

export default bo
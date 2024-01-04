import httpService from "../../services/httpservices";
const state = {
    approvalList: [],
    customerData: [],
    stageData: [],
    isAssign: false,
    isLoader: false,
    isApproveLoader: false,
    isRejectLoader: false,
    isResetLoader: false,
    documentData: '',
    documentDataClone: '',
    backOfficeLoader: false,
    isDocsLoader: false,
    isMailLoader: false,
    progressPercentage: 0,
    isReject: false,
    boStatusList: [], 
    documents: [],
    isShowKradetails: false,
    xmlValue: '',
    docRejReason: '',
    isDocRejReasonDialog: false,
    clientCode: ''
}

const actions = {
    async getApprovalList({ commit, dispatch, rootGetters }) {
        commit('setIsLoader', true)
        let json = {
            token : rootGetters['login/getUserData']['tempToken'],
            sessId : rootGetters['login/getUserData']['sid'],
            userId : rootGetters['login/getUserData']['user']
        }
        await httpService.getApprovalList(json).then(resp => {
            if(resp.status == 200 && resp.data?.message?.success_key == 1 && resp.data?.message?.Data?.length) {
                commit('setApprovalList', resp.data.message.Data)
            } else {
                commit('setApprovalList', [])  
            }
            if(resp.data?.message?.error){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data?.message?.error,
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { 
            commit('setIsLoader', false)
            commit('errorLog/setCounter', 0, { root: true })
         })
    },

    async updateDocStatus({ state, commit, dispatch }, payload) {
        let status = payload.str?.split('&')[2]
        status = status?.split('=')[1]
        if(status == 'Approved') {
            commit('setIsApproveLoader', true)
        } else if(status == 'Rejected') {
            commit('setIsRejectLoader', true)
        } else {
            commit('setIsResetLoader', true)
        }
        await httpService.updateDocStatus(payload.str).then(resp => {
            
            if(resp.status == 200) {
                let isToaster = false
               var toaster = {
                    "title": '',
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                }
                if(resp.data.message.success_key == 1 && resp.data.message.message){
                    let docsArr = payload?.documentCall?.attachmentType
                    if(docsArr && docsArr.length) {
                        for(let item of docsArr){
                            dispatch('formatJsonDoc', {status: payload.documentCall.status , remarks: payload.documentCall.remarks, attachmentType : item})
                        }
                    }
                    isToaster = true
                    toaster.title = resp.data.message.message
                    toaster.type = "success"
                    resp.data.message.remarks ? toaster.message = resp.data.message.remarks : ''
                }else if((resp.data.message.success_key == 0 && resp.data.message.message) || resp.data?.message?.error && resp.data?.message?.error == 'Document Not Found')   {
                    isToaster = true
                    toaster.title = resp.data?.message?.error ? resp.data?.message?.error : resp.data.message.message 
                    toaster.type = "danger"
                }
                isToaster ? dispatch('errorLog/toaster',{data: toaster ,position: ''}, {root: true}) : ''
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { 
            if(status == 'Approved') {
                commit('setIsApproveLoader', false)
            } else if(status == 'Rejected') {
                commit('setIsRejectLoader', false)
            } else {
                commit('setIsResetLoader', false)
            }
            commit('errorLog/setCounter', 0, { root: true })
            dispatch('getStageDetails', state.customerData?.opportunity_data?.name)
            dispatch('getStageDetails', state.customerData?.opportunity_data?.name)
         })
    },

    async getCustomerData({ commit, dispatch, rootGetters }, payload) {
        commit('setIsLoader', true)
        let json = {
            id : payload,
            token : rootGetters['login/getUserData']['tempToken'],
            sessId : rootGetters['login/getUserData']['sid'],
            userId : rootGetters['login/getUserData']['user'],
        }
        await httpService.getCustomerData(json).then(resp => {
            if(resp.status == 200 && resp.data?.message) {
                commit('setCustomerData', resp.data?.message)
            } else {
                commit('setCustomerData', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { commit('errorLog/setCounter', 0, { root: true }); commit('setIsLoader', false) })
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
            }
       }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  })
    },

    async formatJson({state,commit, dispatch, rootGetters}, payload){
        let str = `userId=${rootGetters['login/getUserData']['user']}&id=${state.customerData?.opportunity_data?.name}&status=${payload.status}&document_type=${getDocmentType(payload.tab)}&remarks=${payload.remarks}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`
        if(payload.tab == 8 || payload.tab == 9){
            str += `&attachmentType=${payload.tab == 8 ? 'IPV' : 'ESIGN_ DOCUMENT'}`
        }
        if(payload.tab == 7){
            str +=`&attachmentType=${payload.attachmentType}`
        }
        if(payload.tab == 6){
            str +=`&nominee_no=${payload.nomineeId}`
        }
        await dispatch('updateDocStatus', {str: str, documentCall:payload.documentCall})
    },
    getDocumentData({state, commit, dispatch}, payload){
        httpService.getDocument(payload.str).then(resp =>{
            if(payload.type == 'preview'){
                commit('setDocumentData',  {data:window.URL.createObjectURL(resp.data), type:resp.data.type})

            } else if(payload.type == 'clone') {
                commit('setDocumentDataClone',  {data:window.URL.createObjectURL(resp.data), type:resp.data.type})
            } else {
                    const url = window.URL.createObjectURL(resp.data);
                    const link = document.createElement('a');
                    link.setAttribute('href', url);
                        link.setAttribute('download', payload.docType);
                    
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  })
    },
    callBo({state, commit,dispatch, rootGetters}){
        commit('setBackOfficeLoader', true)
        httpService.pushToBo(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.stat == 0 && resp.data.message == "Failed"){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.reason,
                    "type": "danger",
                    "message": '',
                    "duration": 5000
                },position: ''}, {root: true})
            }
            if(resp.status == 200 && resp.data.stat == 1 && resp.data.message == "Success"){
                dispatch('errorLog/toaster',{data: {
                    "title": resp.data.reason,
                    "type": "success",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  commit('setBackOfficeLoader', false); dispatch('checkBoStatus'); })
    },
    async getDocuments({state, dispatch, commit, rootGetters}) {
        commit('setIsDocsLoader', true) 
        let json = { 
            id: state.customerData?.opportunity_data?.name,
            userId: rootGetters['login/getUserData'].user,
            sessId: rootGetters['login/getUserData'].sid,
            token: rootGetters['login/getUserData'].tempToken
        }
        await httpService.getDocs(json).then(resp => {
            let status = 'Approved'
            if(resp.status == 200 && resp.data?.message?.success_key == 1) {
                commit('setDocuments', resp.data?.message?.data)
                let ApporveArr = []
                let openArr = []
                let tabs = rootGetters['tabs/getKycApprovalTabs']
                if(resp.data?.message?.data && resp.data?.message?.data.length > 0){
                    ApporveArr =  resp.data?.message?.data.filter(el => {
                      return  el.status == 'Approved'
                    })
                    openArr = resp.data?.message?.data.filter(el => {
                        return  !el.status 
                      })

                      status =  ApporveArr.length == resp.data?.message?.data.length ? 'Approved' : openArr.length > 0 ? 'Open' : 'Rejected' 
                }
                tabs[7].status = status
                commit('tabs/setKycApprovalTabs', tabs, {root: true})
            } else {
                commit('setDocuments', [])  
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {
            commit('setIsDocsLoader', false)
            commit('errorLog/setCounter', 0, { root: true }) 
        })
    },

    async formatJsonDoc({ state, dispatch, rootGetters }, payload) {
        let str = `userId=${rootGetters['login/getUserData']['user']}&id=${state.customerData?.opportunity_data?.name}&status=${payload.status}&document_type=${payload.attachmentType}&remarks=${payload.remarks}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`
        await dispatch('approveDocs', str)
    },

    async approveDocs({ state, commit, dispatch }, payload) {
        let status = payload?.split('&')[2]
        status = status?.split('=')[1]
        if(status == 'Approved') {
            commit('setIsApproveLoader', true)
        } else if(status == 'Rejected') {
            commit('setIsRejectLoader', true)
        } else {
            commit('setIsResetLoader', true)
        }
        await httpService.approveDocs(payload).then(resp => {
            if(resp.status == 200) {
                if(resp.data.message.success_key == 0 && resp.data.message.status)   {
                    dispatch('errorLog/toaster',{data: {
                        "title": resp.data.message.status,
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    },position: ''}, {root: true})
                } else if(resp.data.message.success_key == 1 && status) {
                    dispatch('errorLog/toaster',{data: {
                        "title": `Proof ${status} successfully`,
                        "type": "success",
                        "message": '',
                        "duration": 4500
                    },position: ''}, {root: true})
                }
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => { 
            if(status == 'Approved') {
                commit('setIsApproveLoader', false)
            } else if(status == 'Rejected') {
                commit('setIsRejectLoader', false)
            } else {
                commit('setIsResetLoader', false)
            }
            commit('errorLog/setCounter', 0, { root: true })
            dispatch('getDocuments')
         })
    },

    async sendRejectionMail({ state, commit, dispatch, rootGetters }) {
        commit('setIsMailLoader', true)
        httpService.sendRejectionMail(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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
            commit('setIsMailLoader', false)
         })
    },

    async nseUccUpload({ state, commit, dispatch, rootGetters }) {
        httpService.nseUccUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async bseUccUpload({ state, commit, dispatch, rootGetters }) {
        httpService.bseUccUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async kraUpload({ state, commit, dispatch, rootGetters }) {
        httpService.kraUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async kraFileUpload({ state, commit, dispatch, rootGetters }) {
        httpService.kraFileUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async bseMfUccUpload({ state, commit, dispatch, rootGetters }) {
        httpService.bseMfUccUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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
    
    async bseFatcaUpload({ state, commit, dispatch, rootGetters }) {
        httpService.bseFatcaUpload(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async bseStarAOF({ state, commit, dispatch, rootGetters }) {
        httpService.bseStarAOF(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async pushIwapp({ state, commit, dispatch, rootGetters }) {
        httpService.pushIwapp(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async boThreadPush({ state, commit, dispatch, rootGetters }) {
        let data = {
            "ids":  [state.customerData?.opportunity_data?.name]
        }
        let query = `userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`
        httpService.boThreadPush(query, data).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async sendFinalMail({ state, commit, dispatch, rootGetters }) {
        httpService.sendFinalMail(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
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

    async checkBoStatus({ state, commit, dispatch, rootGetters }) {
        await httpService.checkBoStatus(`applicationId=${state.customerData?.opportunity_data?.name}&userId=${rootGetters['login/getUserData']['user']}&token=${rootGetters['login/getUserData']['tempToken']}&sessId=${rootGetters['login/getUserData']['sid']}`).then(async resp =>{
            if(resp.status == 200 && resp.data.message == 'Success' && resp.data.result?.length){
              await  commit('setBoStatusList', [...resp.data.result , {
                    "key": "Generate CKYC",
                    "value": null,
                    "reason": null,
                    "applicationId": null
                }])
                
            } else {
               await commit('setBoStatusList', [])
            }
            dispatch('setTabStatus', resp.data.result)
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  
            
        })
    },
    getFilteredApprovalList({ commit, dispatch, rootGetters }, payload) {
        commit('setIsLoader', true)
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
        httpService.getFilteredApproval(json).then(resp =>{
            if(resp.status == 200 && resp.data?.message?.success_key == 1 && resp.data?.message?.Data?.length) {
                commit('setApprovalList', resp.data.message.Data)
            } else {
                commit('setApprovalList', [])
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
    
        }).finally(() => { 
            commit('setIsLoader', false)
            commit('errorLog/setCounter', 0, { root: true }) 
        })
       },
       async setTabStatus({ state, commit, dispatch, rootGetters }, payload) {
        commit('setClientCode', '')
           let tabsData = rootGetters['tabs/getKycApprovalTabs']
           let boStatusList = payload
           let status = 'Open'
           if (boStatusList?.length) {
               let isSuccess = boStatusList.every(function (el) {
                   return el.value == 'Success'
               })
               let openArr = boStatusList.filter(el => {
                if(el.key == 'Client Code'){
                    commit('setClientCode', el.reason)
                }
                
                   return (el.value && el.value != 'Success' && el.value != 'Failed') || !el.value
               })
               status = isSuccess ? 'Approved' : openArr.length > 0 ? 'Open' : 'Rejected'
           }
           tabsData.forEach(el => {
               if (el.name == 'Push to BO') {
                   el.status = status
               }
           });
           commit('tabs/setKycApprovalTabs', tabsData, { root: true })
       },
       async getKraDetails({state, commit, dispatch}, payload){
        httpService.getKraDetails(payload).then(resp =>{
            if(resp.status == 200 && resp.data.message == 'Success'){
                commit('setXmlValue', resp.data.result)
            } else {
                commit('setXmlValue', '')
            }
        }, (err) => {
            dispatch('errorLog/checkRouter', err, { root: true })
        }).finally(() => {  })
    },
};

const mutations = {
    setClientCode(state, payload){
        state.clientCode = payload
    },
    setApprovalList(state, payload) {
        state.approvalList = payload
    }, 
    setCustomerData(state, payload) {
        state.customerData = payload
    },
    setStageData(state, payload) {
        state.stageData = payload
    },
    setIsAssign(state, payload){
        state.isAssign = payload
    },
    setIsLoader(state, payload) {
        state.isLoader = payload
    },
    setIsApproveLoader(state, payload) {
        state.isApproveLoader = payload
    },
    setIsRejectLoader(state, payload) {
        state.isRejectLoader = payload
    },
    setIsResetLoader(state, payload) {
        state.isResetLoader = payload
    },
    setDocumentData(state, payload){
        state.documentData = payload
    },
    setDocumentDataClone(state, payload){
        state.documentDataClone = payload
    },
    setBackOfficeLoader(state, payload){
        state.backOfficeLoader = payload
    },
    setDocuments(state, payload) {
        state.documents = payload
    },
    setIsDocsLoader(state, payload) {
        state.isDocsLoader = payload
    },
    setIsMailLoader(state, payload) {
        state.isMailLoader = payload
    },
    setProgressPercentage(state, payload) {
        state.progressPercentage = payload
    },
    setIsReject(state, payload) {
        state.isReject = payload
    },
    setBoStatusList(state, payload) {
        state.boStatusList = payload
    },
    setIsShowKradetails(state, payload) {
        state.isShowKradetails = payload
    },
    setXmlValue(state, payload) {
        state.xmlValue = payload
    },
    setDocRejReason(state, payload) {
        state.docRejReason = payload
    },
    setIsDocRejReasonDialog(state, payload) {
        state.isDocRejReasonDialog = payload
    }
};

const getters = {
    getApprovalList: state => state.approvalList,
    getCustomerData: state => state.customerData,
    getStageData: state => state.stageData,
    getIsLoader: state => state.isLoader,
    getIsApproveLoader: state => state.isApproveLoader,
    getIsRejectLoader: state => state.isRejectLoader,
    getIsResetLoader: state => state.isResetLoader,
    getDocumentData: state => state.documentData,
    getDocumentDataClone: state => state.documentDataClone,
    getDocuments: state => state.documents,
    getIsDocsLoader: state => state.isDocsLoader,
    getIsMailLoader: state => state.isMailLoader,
    getProgressPercentage: state => state.progressPercentage,
    getIsReject: state => state.isReject,
    getBoStatusList: state => state.boStatusList,
    getIsShowKradetails: state => state.isShowKradetails,
    getXmlValue: state => state.xmlValue,
    getDocRejReason: state => state.docRejReason,
    getIsDocRejReasonDialog : state => state.isDocRejReasonDialog,
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

// function getAttachmentType(currentTab) {
//     let docType = ''
//     switch (currentTab) {
//         case 1:
//             docType = 'Pan'
//             break;
//         case 2:
//             docType = 'Address'
//             break;
//         case 3:
//             docType = 'Profile'
//             break;
//         case 4:
//             docType = 'Bank'
//             break;
//         case 5:
//             docType = 'Segment'
//             break;
//         case 6:
//             docType = 'Nominee'
//             break;
//         case 7:
//             docType = 'Document'
//             break;
//         case 8:
//             docType = 'IPV'
//             break;
//         case 9:
//             docType = 'E-Sign'
//             break;
//         default:
//             docType
//             break;
//     }
//     return docType;
// }
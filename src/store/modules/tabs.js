const state = {
    kycApprovalTabs : [
        { name: 'Details', id: 0, active: true, count: '0' , remarks: [], key: ''},
        { name: 'PAN', id: 1, active: false, count: '0', remarks: ['PAN image incomplete, Please upload complete full PAN image','PAN image uploaded is not matching with PAN number, please upload correct PAN image','Invalid PAN image uploaded, please upload correct PAN image','Name in the PAN card and IT PAN website differs',
        'PAN image uploaded is not legible, please upload clear / visible PAN image', 'Others'],status: '', key: 'pan status', docs:['PAN', 'SIGNATURE']},
        { name: 'Address', id: 2, active: false, count: '0', remarks: ['Client name mismatch between Aadhar and Pan','Please mask first 8 digit aadhar number and upload aadhar image','Address proof image uploaded is not legible, please upload clear / visible address proof image','Please upload clear aadhar card-front & back side image with address and other details','Address entered is not matching with Address proof', 'Others'],status: '',  key: 'address status', docs:[]},
        { name: 'Profile', id: 3, active: false, count: '0', remarks:[],status: '',  key: 'profile status',  docs:[]},
        { name: 'Bank', id: 4, active: false, count: '0', remarks: ['Name in Bank records from Razor Pay service is not matching with the name as per PAN','Bank document uploaded is not clear. Please upload clear / legible bank proof','Bank document is Non Personalized. Please upload passbook copy or bank statement','Non personalized cheque, need passbook front page/e-statement with latest transaction','Name difference in bank document & Aadhar-PAN','Uploaded bank document does not contain IFSC / MICR. Provide bank document with complete bank details','Bank proof uploaded is invalid, please upload valid personalized cheque or passbook copy or bank statement', 'Others'],status: '',  key: 'bank status',  docs:['CANCELLED_CHEQUE_OR_STATEMENT']},
        { name: 'Segment', id: 5, active: false, count: '0', remarks: ['Incomplete bank statement, please upload last six months bank statement for F&O segment','Invalid income proof, Please upload last year ITR copy or last month salary slip or last year form 16', 'Others'],status: '',  key: 'segment status', docs:[]},
        { name: 'Nominee', id: 6, active: false, count: '0', remarks: [], status: '',  key: 'nominee', docs:[]},
        { name: 'Document', id: 7, active: false, count: '0', remarks: ['PAN image uploaded is not legible, please upload clear PAN image','Bank image uploaded is not legible, please upload clear bank image','Address proof image uploaded is not legible, please upload clear address proof image','Please upload clear signature image with white background','Please crop only signature and upload the signature image','Name mismatch in bank proof and PAN','Name mismatch in address proof and PAN','Name mismatch between AADHAR and PAN', 'Others'], status: '',  key: '',  docs:[]},
        { name: 'IPV', id: 8, active: false, count: '0', remarks: ['OTP in Video is not audible, Please do IPV again','Picture in Video/photo is not matching with Client Picture in id proof','IPV live photo captured is not proper, please recapture with clear full face with dress','IPV live photo full face is not captured, please recapture the live photo with clear full face', 'Others'],status: '',  key: 'IPV status', docs:['IPV']},
        { name: 'ESign', id: 9, active: false, count: '0', remarks: ['Client name mismatch between Aadhar esign and name as per Pan', 'Others'], status: '',  key: 'Esign status',  docs:['ESIGN_DOCUMENT']},
        { name: 'Push to BO', id: 10, active: false, count: '0', remarks: [],  key: '',  docs:[], status: ''},
    ],
    kycPanelTabs : [
        // { name: 'Reports', id: 0, active: true, count: '0' },
        { name: 'All Approvals', id: 0, active: true, count: '0' },
        // { name: 'My Approvals', id: 2, active: false, count: '0' },
    ],
    opportunityTabs: [
        // { name: 'Reports', id: 0, active: true, count: '0' },
        { name: 'All Opportunities', id: 0, active: true, count: '0' },
        // { name: 'My Opportunities', id: 2, active: false, count: '0' },
    ],
    logsTabs: [
        { name: 'SMS/MAIL', id: 0, active: true, count: '0' },
        { name: 'Data Logs', id: 1, active: false, count: '0' },
    ]
}

const actions = {
    async setActiveTab({ state, commit, rootGetters }, payload) {
        let data = []
        if(payload.path == '/approvepanel') {
            data = state.kycApprovalTabs
        } else if(payload.path == '/kycapproval') {
            data = state.kycPanelTabs
        } else if(payload.path == '/opportunity') {
            data = state.opportunityTabs
        } else if(payload.path == '/logs') {
            data = state.logsTabs
        }

        if(data) {
            data.forEach(el => {
                if(el.id == payload.id) {
                    el.active = true
                } else {
                    el.active = false
                }
            });
        }

        if (payload.path == '/approvepanel') {
            state.kycApprovalTabs = data
        } else if(payload.path == '/kycapproval') {
            state.kycPanelTabs = data
        } else if(payload.path == '/opportunity') {
            state.opportunityTabs = data
        } else if(payload.path == '/logs') {
            state.logsTabs = data
        }
    },
};

const mutations = {
    setKycApprovalTabs(state, payload){
        state.kycApprovalTabs = payload
    }
};

const getters = {
    getKycApprovalTabs: state => state.kycApprovalTabs,
    getKycPanelTabs: state => state.kycPanelTabs,
    getOpportunityTabs: state => state.opportunityTabs,
    getLogsTabs: state => state.logsTabs
};

const tabs = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default tabs


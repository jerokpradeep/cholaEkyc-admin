const state = {
    kycApprovalTabs : [
        { name: 'Details', id: 0, active: true, count: '0' },
        { name: 'PAN', id: 1, active: false, count: '0' },
        { name: 'Address', id: 2, active: false, count: '0' },
        { name: 'Profile', id: 3, active: false, count: '0' },
        { name: 'Bank', id: 4, active: false, count: '0' },
        { name: 'Segment', id: 5, active: false, count: '0' },
        { name: 'Nominee', id: 6, active: false, count: '0' },
        { name: 'Document', id: 7, active: false, count: '0' },
        { name: 'IPV', id: 8, active: false, count: '0' },
        { name: 'ESign', id: 9, active: false, count: '0' },
    ],
    kycPanelTabs : [
        { name: 'Reports', id: 0, active: true, count: '0' },
        { name: 'All Approvals', id: 1, active: false, count: '0' },
        { name: 'My Approvals', id: 2, active: false, count: '0' },
    ]
}

const actions = {
    async setActiveTab({ state, commit, rootGetters }, payload) {
        let data = []
        if(payload.path == '/approvepanel') {
            data = state.kycApprovalTabs
        } else if(payload.path == '/kycapproval') {
            data = state.kycPanelTabs
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
        }
    },
};

const mutations = {
};

const getters = {
    getKycApprovalTabs: state => state.kycApprovalTabs,
    getKycPanelTabs: state => state.kycPanelTabs
};

const tabs = {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

export default tabs


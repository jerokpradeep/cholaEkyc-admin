import axios from "axios";
import { mapGetters } from 'vuex'

const headers = {
    "Content-Type": "application/json",
};

let isLive = true;
let baseUrl = isLive ? "https://trade.cholasecurities.com/" : "https://uattrade.cholasecurities.com/";

const baseUrlTemp = 'https://erp.cholasecurities.com/api/'
const userId = "SKY34914"
export default {
    data: () => ({
        //
    }),
    computed: {
        ...mapGetters('auth',['getUserId'])
    },
    // authHeaders(type) {
    //     let userId = localStorage.getItem("clientId");
    //     let sessionId = localStorage.getItem("sessionId");
    //     let headers = {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + sessionId,
    //     };
    //     return headers;
    // },
    // authHeadersOne(type) {
    //     let userId = localStorage.getItem("clientId");
    //     let sessionId = localStorage.getItem("sessionId");
    //     let headers = {
    //         Authorization: "Bearer " + sessionId,
    //     };
    //     return headers;
    // },

    authHeader() {
        let headers = {
            Authorization: "token 64ffb3da7ea0934:4bda8b7c2bca9cd",
        };
        return headers;
    },

    authHeaderWeb() {
        let token = localStorage.getItem('sessionId') ? localStorage.getItem('sessionId')  : ''
        let headers = {
            'Authorization': `Bearer ${token}`,
        };
        return headers;
    },

    async ssoLogin (payload) {
        return await axios.post(`${baseUrl}authrest/sso/vendor/auth/getUserDetails`, payload)
    },
    // async getVendorDetails (payload) {
    //     return await axios.post(`${baseUrl}ssoauth/vendor/`, payload, {
    //         headers: this.authHeaders()
    //     })
    // },
    // async createVendor (payload) {
    //     return await axios.post(`${baseUrl}ssoauth/vendor/create`, payload, {
    //         headers: this.authHeaders()
    //     })
    // },
    // async updateVendor (payload) {
    //     return await axios.post(`${baseUrl}ssoauth/vendor/update`, payload, {
    //         headers: this.authHeaders()
    //     })
    // },
    // async deleteVendor (appId) {
    //     return await axios.delete(`${baseUrl}ssoauth/vendor/delete/${appId}`, {
    //         headers: this.authHeadersOne()
    //     })
    // },
    // async reGenerateSecretKey (appId) {
    //     return await axios.get(`${baseUrl}ssoauth/vendor/reset/${appId}`, {
    //         headers: this.authHeadersOne()
    //     })
    // },
    // async logout (jsonObj) {
    //     return await axios.post(`https://ant.aliceblueonline.com/rest/AliceBlueAPIService/customer/logout`, jsonObj, {
    //         headers: this.authHeaders(),
    //     });
    // },

    async getProfileDetails() {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}method/ninjafox.custom_api.get_customer_profile?customer=${userId}`, requestOptions).then();
    },

    async getBankDetails() {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}method/ninjafox.custom_api.get_customer_Bank_details?customer=${userId}`, requestOptions).then();
    },

    async getNomineeDetails() {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}method/ninjafox.nominee_details.get_customer_nominee_details?customer=${userId}`, requestOptions).then();
    },

    async addNomineeDetails(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.post(`${baseUrlTemp}method/ninjafox.nominee_details.post_customer_nominee_details`, payload, requestOptions).then();
    },
    async getSegments() {
        let fields = `["fsl_nse","fsl_bse","fsl_nfo","fsl_bfo","fsl_cds","fsl_bcd","fsl_mcx"]`
        let filters = `[["fsl_ucc_code","=","SKY34914"]]`
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}resource/Customer?fields=${fields}&filters=${filters}`, requestOptions).then();
    },

    async getFamilyAccount() {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}method/ninjafox.custom_api.get_customer_family_details?customer=${userId}`, requestOptions).then();
    },

    async getTradeBook() {
        let fields = `["ucc","trade_date","trade_segment","qty"]`
        let filters = `[["ucc","=","SKY34914"],["trade_segment","=","NFO"]]`
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}resource/Trade Log?fields=${fields}&filters=${filters}&timespan=current_year`, requestOptions).then();
    },

    async getPositions() {
        const requestOptions = {
            headers: this.authHeaderWeb(),
        };
        return axios.get(`${baseUrl}porest/positions/`,requestOptions).then();
    }, 

    async getHoldings() {
        const requestOptions = {
            headers: this.authHeaderWeb(),
        };
        return axios.get(`${baseUrl}horest/holdings/`, requestOptions).then();
    },

    async createWithdraw(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.post(`${baseUrlTemp}resource/Withdraw`, payload, requestOptions).then();
    },

    async getWithdraw() {
        let fields = `["date","ucc","withdraw_amount","time"]`
        let filters = `[["ucc","=","SKY34914"]]`
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`${baseUrlTemp}resource/Withdraw?fields=${fields}&filters=${filters}`, requestOptions).then();
    },

    async addBank(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.post(`${baseUrlTemp}method/ninjafox.custom_login.create_bank_details`, payload, requestOptions).then();
    },

    async updateBank(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.put(`${baseUrlTemp}method/ninjafox.bank_details.update_bank_details`, payload, requestOptions).then();
    },

    async changePrimaryBank(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.put(`${baseUrlTemp}method/ninjafox.guardian_validation.change_fsl_bank_details?account_no=${payload}`, '', requestOptions).then();
    },

    async getBranchDataWithIfsc(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.get(`https://ifsc.razorpay.com/${payload}`, requestOptions).then();
    },

    async deleteBank(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.delete(`${baseUrlTemp}method/ninjafox.guardian_validation.delete_fsl_bank_details?account_no=${payload}`, requestOptions).then();
    },

    async addFamilyAcc(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.post(`${baseUrlTemp}method/ninjafox.family_details_api.post_customer_family_details`, payload, requestOptions).then();
    },

    async deleteFamilyAcc(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.delete(`${baseUrlTemp}method/ninjafox.family_details_api.delete_customer_family_details?sub_account=${payload}`, requestOptions).then();
    },

    async supportCodeReset(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        return axios.post(`${baseUrlTemp}method/ninjafox.support_code.support_code?support_code=${payload}`, '', requestOptions).then();
    },

    async deleteNominee(payload) {
        const requestOptions = {
            headers: this.authHeader(),
        };
        
        return axios.delete(`${baseUrlTemp}method/ninjafox.nominee_details.delete_customer_nominee_details?unique_id=${payload}`, requestOptions).then();
    },
    
}
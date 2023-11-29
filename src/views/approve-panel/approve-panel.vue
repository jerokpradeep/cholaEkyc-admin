<template>
        <div>
            <breadcrumbKyc />
        </div>

        <div class="bg-white py-4 px-4 my-2 rounded-lg flex flex-col flex-wrap gap-4 justify-between mx-4">
            <div class="flex flex-wrap gap-4 justify-between">
                <div>
                <div class="text-xs mb-2 secondaryColor">
                    Name
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.opportunity_data?.fsl_user_name }}
                </div>
                </div>
                <div>
                <div class="text-xs mb-2 secondaryColor">
                    Client Code
                </div>
                <div class="text-sm">
                    {{ clientcode }}
                </div>
                </div>
                
                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        Status
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.opportunity_data?.status }}
                    </div>
                </div>

                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        DOB
                    </div>
                    <div class="text-sm">
                        {{ getFormat(getCustomerData?.opportunity_data?.fsl_dob) }}
                    </div>
                </div>

                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        Gender
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.profile_data?.gender }}
                    </div>
                </div>

                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        Mobile
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.opportunity_data?.fsl_mobile_num }}
                    </div>
                </div>

                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        PAN
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.opportunity_data?.fsl_pan_no }}
                    </div>
                </div>
                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        Branch
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.opportunity_data?.fsl_branch }}
                    </div>
                </div>
                <div>
                    <div class="text-xs mb-2 secondaryColor">
                        Refer By
                    </div>
                    <div class="text-sm">
                        {{ getCustomerData?.opportunity_data?.fsl_referral_by }}
                    </div>
                </div>
            </div>

            <div>
              <div class="w-full mb-2 secondary-color dark:text-[#94A3B8] font-medium text-sm">Progress ({{ progress() }}%)</div> 
              <div class="flex items-center">
                <div class="progress-bar bg-[#d9d7d7] dark:bg-gray-600">
                <div class="progress" :style="{width: progress() + '%'}"></div>
              </div>
              </div>
              <!-- <div class="primary-color ml-1 mt-2 font-medium">{{ progress() }}%</div> -->
            </div>
        </div>

        <tabs class="mx-4" @activeTab="changeTab"/>
        <div class="p-4">
            <user_details :cutomerData="getCustomerData" v-if="currentTab == 0"/>
            <pan_details v-if="currentTab == 1"/>
            <address_details :cutomerData="getCustomerData" v-if="currentTab == 2"/>
            <profile_details v-if="currentTab == 3"/>
            <bank_details v-if="currentTab == 4"/>
            <segment_details v-if="currentTab == 5"/>
            <nominee_details v-if="currentTab == 6"/>
            <document_details v-if="currentTab == 7"/>
            <ipv_details v-if="currentTab == 8"/>
            <esign_details v-if="currentTab == 9"/>
            <pushto_bo v-if="currentTab == 10"/>
        </div>
        <div v-if="$route.query?.from != 'opportunity' && getUserData?.Role != 'RM'">
            <div class="flex gap-4 my-4 justify-between absolute right-4 bottom-2 " v-if="currentTab != 0 && currentTab != 7 && currentTab != 6 && currentTab != 10">
                <div class="flex gap-1 justify-center items-center min-w-[120px] h-[36px] py-2 rounded-lg text-white font-bold" :class="getStatusForPage(getStageData) == 'Approved' ? 'bg-green-700' : 'bg-red-700'" v-if="getStatusForPage(getStageData) != '' && getStatusForPage(getStageData) != 'Reset' && getStatusForPage(getStageData)">
                    <div v-html="tickSvg" v-if="getStatusForPage(getStageData) == 'Approved'"></div>
                    <div v-html="cancelSvg" v-else-if="getStatusForPage(getStageData) == 'Rejected'"></div>
                    {{ getStatusForPage(getStageData) }}
                </div>
                <div class="flex gap-1 justify-center items-center min-w-[120px] h-[36px] ml-2 bg-white  py-2 rounded-lg text-blue-700 font-bold border border-blue-700 cursor-pointer" v-if="getStatusForPage(getStageData) && (getStatusForPage(getStageData) == 'Approved' || getStatusForPage(getStageData) == 'Rejected' || getStatusForPage(getStageData) == 'Reset')" @click="approveOrRejectDoc('Reset')">
                    <span class="flex gap-1 items-center" v-if="!getIsResetLoader">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path> </svg>
                        {{ 'Reset'  }}
                    </span>
                    <btnLoader v-else/>
                </div>
                <div class="flex gap-4" v-else>
                    <button type="button" class="min-w-[120px] h-[36px] flex items-center justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="approveOrRejectDoc('Approved')">
                        <span v-if="!getIsApproveLoader" class="flex items-center justify-center gap-1"><div v-html="tickSvg"></div>Approve </span>
                        <btnLoader v-else />
                    </button>
                    <button type="button" class="min-w-[120px] h-[36px] flex items-center justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="this.remarks ? approveOrRejectDoc('Rejected') : isRejectDialog = true">
                        <span class="flex items-center justify-center gap-1"><div v-html="cancelSvg"></div>Reject </span> 
                    </button>
                </div>
            </div>
        </div>
        <rejectDialog v-if="isRejectDialog && currentTab != 6 && currentTab != 7" :active-tab="currentTab" :is-open="isRejectDialog" @send-remarks="getRemarks"/>
</template>

<script>
import breadcrumbKyc from '../../components/utilComponents/breadcrumbKyc.vue';
import tabs from "../../components/utilComponents/tabs.vue"
import pan_details from "./pan-details.vue"
import address_details from "./address.vue"
import profile_details from "./profile-details.vue"
import bank_details from "./bank-details.vue"
import segment_details from "./segment-details.vue" 
import nominee_details from "./nominee-details.vue"
import document_details from "./document-details.vue"
import ipv_details from "./ipv-details.vue"
import user_details from "./details.vue"
import rejectDialog from '../rejectDialog.vue';
import esign_details from "./esign-details.vue"
import pushto_bo from "./pushto-BO.vue"
import { mapGetters } from 'vuex';

const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
export default {
    components: { breadcrumbKyc, tabs, user_details, pan_details, address_details, profile_details, bank_details, segment_details, nominee_details, document_details, ipv_details, rejectDialog, esign_details, pushto_bo },
    
    data() {
        return {
            steps: [
                { name: 'PAN' },
                { name: 'Address' },
                { name: 'Profile' },
                { name: 'Bank' },
                { name: 'Segment' },
                { name: 'Nominee' },
                { name: 'Document' },
                { name: 'IPV' },
                { name: 'ESign' }
            ],
            userDetails: [
                { name: 'THAVAMANI VINOTH KUMAR', status: 'Pending for approval', dob: '18-01-1989', gender: 'Male', mobileNo: '9884986649', panNo: 'AMDPV9160F' }
            ],
            currentTab : 0,
            remarks: '',
            isRejectDialog: false,
            tickSvg, cancelSvg,
            clientcode: ''
        }
    },

    computed: {
        ...mapGetters('approval', ['getCustomerData','getStageData', 'getIsApproveLoader', 'getIsRejectLoader', 'getIsResetLoader', 'getDocuments', 'getBoStatusList']),
        ...mapGetters('login', ['getUserData'])
    },

    methods: {
        changeTab(id) {
            this.currentTab = id
            this.$store.commit('setActiveTab', id)
            this.$store.commit('setQuries', {data: {tab: id}, action: 'change'})
            this.$store.commit('approval/setDocumentData', '')
            this.remarks = ''
        },

        async approveOrRejectDoc(status) {
            await this.$store.dispatch('approval/formatJson', {tab: this.currentTab , status: status , remarks: status == 'Rejected' ? this.remarks : ''})
            this.remarks = ''
        },

        getDocmentType() {
            let docType = ''
            switch (this.currentTab) {
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
        },

        getAttachmentType() {
            let attachType = ''
            switch (this.currentTab) {
                case 1:
                    attachType = 'PAN'
                    break;
                case 2:
                    attachType = 'Photo'
                    break;
                case 3:
                    attachType = 'CANCELLED_CHEQUE_OR_STATEMENT'
                    break;
                case 4:
                    attachType = 'INCOME_PROOF'
                    break;
                case 5:
                    attachType = 'SIGNATURE'
                    break;
                case 6:
                    attachType = 'ESIGN_DOCUMENT'
                    break;
                case 7:
                    attachType = 'PROTECTED_ESIGN_DOCUMENT'
                    break;
                case 8:
                    attachType = 'ADDITIONAL_DOCUMENT'
                    break;
                case 9:
                    attachType = 'POA'
                    break;
                case 10:
                    attachType = 'CLIENT_PHOTO'
                    break;
                case 11:
                    attachType = 'AADHAR_IMAGE'
                    break;
                default:
                    attachType
                    break;
            }
            return attachType;
        },

        async getRemarks(data){
            this.remarks = data.remarks
            if(this.remarks){
                await this.approveOrRejectDoc('Rejected')
            }
            this.isRejectDialog = data.isOpen
        },

        getStatusForPage(data) {
            let status = ''
            switch (this.currentTab) {
                case 1:
                    status = this.stringTrim(data['pan status'])
                    break;
                case 2:
                    status = this.stringTrim(data['address status'])
                    break;
                case 3:
                    status = this.stringTrim(data['profile status'])
                    break;
                case 4:
                    status = this.stringTrim(data['bank status'])
                    break;
                case 5:
                    status = this.stringTrim(data['segment status'])
                    break;
                case 6:
                    status = ''
                    break;
                case 7:
                    status = this.stringTrim(data['document status'])
                    break;
                case 8:
                    status = this.stringTrim(data['IPV status'])
                    break;
                case 9:
                    status = this.stringTrim(data['Esign status']) 
                    break;
                default:
                    status
                    break;
            }
            return status
        },

        stringTrim(data) {
            if(data)
            return data?.toString().trim()
        },

        getFormat(date){
           return window.formatDate(date, 'D')
        },

        progress() {
            if(this.getStageData.hasOwnProperty('nominee')) {
                let statusArray = ['pan status', 'profile status', 'address status', 'bank status', 'segment status', 'IPV status', 'Esign status']
                let data = this.getStageData
                let nomineesArray = this.getStageData.nominee
                let percentage = 0
                let isNomineeApproved = false
                let isRejectAll = false
                let isRejectNominee = false
                let isRejectDoc = false
                for (const property in data) {
                    statusArray.forEach((status)=> {
                        if(property == status && data[property]) {
                            percentage += 11.10
                        }
                    })
                }
                isRejectAll = Object.values(this.getStageData).some(function(status) {
                    return status == 'Rejected'
                })

                if(nomineesArray.length) {
                    let temp = nomineesArray.filter(el => {
                        return el.status == 'Approved' || el.status == 'Rejected'
                    })
                    if(temp.length > 0){
                        let indivualVal = parseFloat(11.10) / temp.length
                        percentage += indivualVal
                    }
                    isNomineeApproved = nomineesArray.every(function(nominee){
                        return nominee.status == 'Approved'
                    })
                    // 
                    isRejectNominee = nomineesArray.some(function(nominee){
                        return nominee.status == 'Rejected'
                    })
                }
                if(this.getDocuments && this.getDocuments.length > 0) {
                    let indivualVal = parseFloat(11.10) / this.getDocuments.length
                    let selectedArr = this.getDocuments.filter((el)=> el.status)
                    let percentageVal = parseFloat(indivualVal * selectedArr.length) 
                    percentage += percentageVal
                    // 
                    if(selectedArr?.length) {
                        isRejectDoc = selectedArr.some(function(el) {
                            return el.status == 'Rejected'
                        })
                    }
                }

                this.$store.commit('approval/setIsReject', isRejectAll || isRejectNominee || isRejectDoc)
                return Math.round(percentage)
            } else {
                return 0
            }
        },
    },
    created(){
        this.currentTab = this.$store.state.queries?.approvepanel ? this.$store.state.queries?.approvepanel.query.tab : 0
        this.$store.commit('setActiveTab', this.currentTab)
    },
   async mounted() {
        if(this.currentTab > -1 && this.currentTab != 10){
           await this.$store.dispatch('approval/getDocuments')
           await this.$store.dispatch('approval/checkBoStatus').finally(()=> {
            for(let item of this.getBoStatusList){
                if(item.key == 'Client Code'){
                    this.clientcode = item.reason ? item.reason : ''
                }
            }
            
           })
        if(this.$route.query?.id ) {
           await this.$store.dispatch('approval/getStageDetails', this.$route.query?.id)
        }
        
        }
        
    },
}
</script>

<style>
.progress-bar {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
}
.progress {
  height: 100%;
  background-color: #753ED7;
  border-radius: 2px;
}
</style>
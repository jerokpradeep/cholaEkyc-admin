<template>
        <div>
            <breadcrumbKyc :cutomerName="getCustomerData?.fsl_user_name" />
        </div>

        <div class="bg-white py-6 px-8 my-2 rounded-lg flex flex-wrap gap-4 justify-between mx-4">
            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Name
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.fsl_user_name }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Status
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.status }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    DOB
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.fsl_dob }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Gender
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.fsl_gender }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Mobile
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.fsl_mobile_num }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    PAN
                </div>
                <div class="text-sm">
                    {{ getCustomerData?.fsl_pan_no }}
                </div>
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
        </div>

        <div class="flex gap-4 my-4 justify-between absolute right-4 bottom-2 " v-if="currentTab != 0 && currentTab != 7 && currentTab != 6 && currentTab != 10">
            <div class="flex gap-1 justify-center items-center min-w-[120px] py-2 rounded-lg text-white font-bold" :class="getStatusForPage(getStageData) == 'Approved' ? 'bg-green-700' : 'bg-red-700'" v-if="getStatusForPage(getStageData) != '' && getStatusForPage(getStageData) != 'Reset' && getStatusForPage(getStageData)">
                <div v-html="tickSvg" v-if="getStatusForPage(getStageData) == 'Approved'"></div>
                <div v-html="cancelSvg" v-else-if="getStatusForPage(getStageData) == 'Rejected'"></div>
                {{ getStatusForPage(getStageData) }}
            </div>
            <div class="flex gap-4" v-else>
                <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="approveOrRejectDoc('Approved')">Approve</button>
                <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="this.remarks ? approveOrRejectDoc('Rejected') : isRejectDialog = true">Reject</button>
            </div>
        </div>
        <rejectDialog v-if="isRejectDialog && currentTab != 6" :is-open="isRejectDialog" @send-remarks="getRemarks"/>
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
    components: { breadcrumbKyc, tabs, user_details, pan_details, address_details, profile_details, bank_details, segment_details, nominee_details, document_details, ipv_details, rejectDialog },
    
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
            tickSvg, cancelSvg
        }
    },

    computed: {
        ...mapGetters('approval', ['getCustomerData','getStageData'])
    },

    props: {
        cutomerName: {type:String}
    },

    methods: {
        changeTab(id) {
            this.currentTab = id
            this.$store.commit('setActiveTab', id)
            this.$store.commit('setQuries', {data: {tab: id}, action: 'change'})
            this.remarks = ''
        },

        approveOrRejectDoc(status) {
            this.$store.dispatch('approval/formatJson', {tab: this.currentTab , status: status , remarks: status == 'Rejected' ? this.remarks : ''})
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
        getRemarks(data){
            this.remarks = data.remarks
            this.isRejectDialog = data.isOpen
            if(this.remarks){
                this.approveOrRejectDoc('Rejected')
            }
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
        }
    },
    created(){
        this.currentTab = this.$store.state.queries['approvepanel'].query.tab
        this.$store.commit('setActiveTab', this.currentTab)
    }
    
}
</script>
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
                    {{ getCustomerData?.gender }}
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

        <div class="flex gap-4 my-4 justify-end absolute right-4 bottom-2" v-if="currentTab != 0 && currentTab != 7">
            <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="approveOrRejectDoc('Approved')">Approve</button>
            <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="this.remarks ? approveOrRejectDoc('Rejected') : isRejectDialog = true">Reject</button>
        </div>
        <rejectDialog v-if="isRejectDialog" :is-open="isRejectDialog" @send-remarks="getRemarks"/>
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
            isRejectDialog: false
        }
    },

    computed: {
        ...mapGetters('approval', ['getCustomerData'])
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
            let json = {
                token: this.$store.state.login.userData.tempToken,
                sessId: this.$store.state.login.userData.sid,
                userId:  this.$store.state.login.userData.user,
                id: this.$store.state.approval.customerData.name,
                status: status,
                docType : this.getDocmentType(),
                remarks : status == 'Rejected' ? this.remarks : '' ,
                // attachmentType: '',
                // nomineeNo : ''
            }
            console.log(json , 'json json json');
            this.$store.dispatch('approval/updateDocStatus', json)
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
            console.log(this.remarks, 'remarks');
            this.isRejectDialog = data.isOpen
            if(this.remarks){
                this.approveOrRejectDoc('Rejected')
            }
        }
    },
    created(){
        this.currentTab = this.$store.state.queries['approvepanel'].query.tab
        this.$store.commit('setActiveTab', this.currentTab)
    }
    
}
</script>
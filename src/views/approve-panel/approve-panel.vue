<template>
    
        <div>
            <breadcrumbKyc />
        </div>

        <div class="bg-white py-6 px-8 my-2 rounded-lg flex flex-wrap gap-4 justify-between mx-4" v-for="(i, id) in userDetails" :key="id">
            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Name
                </div>
                <div class="text-sm">
                    {{ i.name }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Status
                </div>
                <div class="text-sm">
                    {{ i.status }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    DOB
                </div>
                <div class="text-sm">
                    {{ i.dob }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Gender
                </div>
                <div class="text-sm">
                    {{ i.gender }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    Mobile
                </div>
                <div class="text-sm">
                    {{ i.mobileNo }}
                </div>
            </div>

            <div>
                <div class="text-xs mb-2 secondaryColor">
                    PAN
                </div>
                <div class="text-sm">
                    {{ i.panNo }}
                </div>
            </div>
        </div>

        <tabs class="mx-4" @activeTab="changeTab"/>
        <div class="p-4">
            <user_details v-if="currentTab == 0"/>
            <pan_details v-if="currentTab == 1"/>
            <address_details v-if="currentTab == 2"/>
            <profile_details v-if="currentTab == 3"/>
            <bank_details v-if="currentTab == 4"/>
            <segment_details v-if="currentTab == 5"/>
            <nominee_details v-if="currentTab == 6"/>
            <document_details v-if="currentTab == 7"/>
            <ipv_details v-if="currentTab == 8"/>
        </div>

        <div class="flex gap-4 my-4 justify-end absolute right-4 bottom-2" v-if="currentTab != 0 && currentTab != 7">
            <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="approveOrRejectDoc('Approved')">Approve</button>
            <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="approveOrRejectDoc('Rejected')">Reject</button>
        </div>
        
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
import { mapGetters } from 'vuex';
export default {
    components: { breadcrumbKyc, tabs, user_details, pan_details, address_details, profile_details, bank_details, segment_details, nominee_details, document_details, ipv_details },
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
            remarks: ''
        }
    },
    computed: {
        ...mapGetters('approval', ['getCustomerData'])
    },
    methods: {
        changeTab(id) {
            this.currentTab = id
        },

        approveOrRejectDoc(status) {
            let json = {
                id: '',
                status: status,
                document_type : this.getDocmentType(),
                remarks : status == 'Rejected' ? undefined : this.remarks,
                attachment_type: this.getAttachmentType(),
            }
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

        }
    },
    
}
</script>
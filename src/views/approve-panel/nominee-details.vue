<template>
    <div class="">
        <div class="">
            <div class="my-4 flex flex-col gap-4 ">
                <div v-for="(i, id) in nomineeList" :key="id"
                    class="cursor-pointer p-4 shadow rounded-lg bg-white transition duration-1000 ease-in-out w-full">
                    <div class="flex justify-between gap-3" @click="expandNominee(id)">
                        <div class="text-sm font-semibold">
                            Nominee {{ id + 1 }}
                        </div>
                        <div>
                            <div v-html="downArrow" v-if="!i.isOpen"></div>
                            <div v-html="upArrow" v-if="i.isOpen"></div>
                        </div>
                    </div>
                    <div class="" v-if="expanstion == id">
                        <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 md:grid-cols-2 my-4">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 md:col-span-2">

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div class="mt-2">
                                        <input type="text" id="nameAsPan"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.name" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="nameAsPan"
                                        class="block text-sm font-medium leading-6 text-gray-900">DOB</label>
                                    <div class="mt-2">
                                        <input type="text" id="nameAsPan"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.dob" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mobile
                                        No.</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.mobNo" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Email
                                        ID</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.emailId" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof
                                        Type</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.proofType" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof
                                        ID</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.proofId" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Relation OF
                                        Nominee</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.relationOfNominee" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.address" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-full flex justify-end">
                            <div class="flex gap-1 justify-center items-center min-w-[120px] h-[36px] py-2 rounded-lg text-white font-bold"
                            :class="getStatusForPage(i.nomineeId) == 'Approved' ? 'bg-green-700' : 'bg-red-700'"
                            v-if="getStatusForPage(i.nomineeId) && (getStatusForPage(i.nomineeId) == 'Approved' || getStatusForPage(i.nomineeId) == 'Rejected')">
                            <div v-html="tickSvg" v-if="getStatusForPage(i.nomineeId) == 'Approved'"></div>
                            <div v-html="cancelSvg" v-else-if="getStatusForPage(i.nomineeId) == 'Rejected'"></div>
                            {{ getStatusForPage(i.nomineeId) }}
                        </div>
                        <div class="flex gap-1 justify-center items-center min-w-[120px] h-[36px] ml-2  py-2 rounded-lg bg-white  text-blue-700 font-bold border border-blue-700 cursor-pointer" v-if="getStatusForPage(i.nomineeId) && (getStatusForPage(i.nomineeId) == 'Approved' || getStatusForPage(i.nomineeId) == 'Rejected' || getStatusForPage(i.nomineeId) == 'Reset')" @click="callServiceApporve_Reject('Reset')">
                            <span class="flex gap-1 items-center" v-if="!getIsResetLoader">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path> </svg>
                                {{ 'Reset'  }}
                            </span>
                            <btnLoader v-else/>
                        </div>
                        <div class="flex gap-4 my-4 justify-end " v-else>
                            <button type="button" class="min-w-[86px] flex items-center justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="callServiceApporve_Reject('Approved')">
                                <span v-if="!getIsApproveLoader">Approve</span>
                                <btnLoader v-else />
                            </button>
                            <button type="button" class="min-w-[86px] flex items-center justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="remarks ? callServiceApporve_Reject('Rejected') : isRejectDialog = true">Reject</button>
                        </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
    <rejectDialog v-if="isRejectDialog" :is-open="isRejectDialog" @send-remarks="getRemarks" />
</template>

<script>
const upArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
`
const downArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`
const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white font-bold">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
import { mapGetters } from 'vuex'
import rejectDialog from '../rejectDialog.vue'
export default {
    data() {
        return {
            bankName: 'ICICI Bank',
            branchName: 'CHENNAIDLF IT PARK, TAMIL NADU',
            ifscCode: 'ICIC0001547',
            micrCode: '600229061',
            acHolderName: 'T VINOTHKUMAR',
            acNo: '154701501195',
            pennyVerifyStatus: 'Yes',
            address: 'ICICI BANK LTD, DLF IT SEZ PARK, BLOCK-12, NO. 1/12A SHIVAJI GARDENS, NANDAMBAKKAM, POST MOUNT POONAMALEE ROAD, MANAPAKKAM, CHENNAI, TAMIL NADU - 600089',
            upArrow, downArrow,
            isOpen: false,
            nomineeList: [],
            expanstion: 0,
            currectSelectData: '',
            isRejectDialog: false,
            remarks: '',
            tickSvg, cancelSvg
        }
    },
    components: {
        rejectDialog
    },
    computed: {
        ...mapGetters('approval', ['getCustomerData', 'getStageData', 'getIsApproveLoader', 'getIsRejectLoader', 'getIsResetLoader'])
    },
    methods: {
        callServiceApporve_Reject(status) {
            this.$store.dispatch('approval/formatJson', { tab: 6, status: status, remarks: status == 'Rejected' ? this.remarks : '', nomineeId: this.currectSelectData.nomineeId })
        },
        expandNominee(id) {
            this.remarks = ''
            this.isRejectDialog = false
            this.expanstion == id ? '' : this.expanstion = id
            this.currectSelectData = this.nomineeList[id]
        },
        getRemarks(data) {
            this.remarks = data.remarks
            this.isRejectDialog = data.isOpen
            if (this.remarks) {
                this.callServiceApporve_Reject('Rejected')
            }
        },
        getStatusForPage(id) {
            let selectedArray = this.getStageData.nominee.filter((el) => el.nominee_number == id)
            let status = ''
            if (selectedArray && selectedArray.length > 0 && selectedArray[0].status) {
                status = selectedArray[0].status
            }
            return status
        },
    },
    mounted() {
        if (this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.fsl_nominee_table) {

            for (let item of this.getCustomerData.opportunity_data.fsl_nominee_table) {

                this.nomineeList.push({ name: item.name, dob: window.formatDate(item.date_of_birth, 'D'), emailId: item.email_id, mobNo: item.mobile_number, proofId: item.proof_id, proofType: item.proof_type, relationOfNominee: item.relationship, nomineeId: item.nominee_number })
            }
            if (this.nomineeList.length > 0) {
                this.expandNominee(0)
            }
        }
    }
}
</script>
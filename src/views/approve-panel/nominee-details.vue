<template>
    <div class="">
        <div class="">
            <div class="my-4 flex flex-col gap-4 " v-if="nomineeList.length > 0">
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
                                        <textarea type="text" id="panNumber"  readonly
                                            class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-html="i.address" rows="5" />
                                    </div>
                                </div>
                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Nominee Allocation
                                        </label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.percentage_allocation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="i.guardian">
                            <div class="flex justify-between gap-3">
                        <div class="text-sm font-semibold">
                            Guardian
                        </div>
                    </div>
                            <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 md:grid-cols-2 my-4">
                            <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 md:col-span-2">

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div class="mt-2">
                                        <input type="text" id="nameAsPan"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.name" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="nameAsPan"
                                        class="block text-sm font-medium leading-6 text-gray-900">DOB</label>
                                    <div class="mt-2">
                                        <input type="text" id="nameAsPan"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.dob" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mobile
                                        No.</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.mobNo" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Email
                                        ID</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.emailId" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof
                                        Type</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.proofType" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof
                                        ID</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.proofId" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Relation OF
                                        Nominee</label>
                                    <div class="mt-2">
                                        <input type="text" id="panNumber"
                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-model="i.guardian.relationOfNominee" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber"
                                        class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                    <div class="mt-2">
                                        <textarea type="text" id="panNumber"  readonly
                                            class="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                            disabled v-html="i.guardian.address" rows="5" />
                                    </div>
                                </div>
                            </div>
                        </div>    
                        </div>
                        
                        <div class="w-full flex justify-end" v-if="$route.query?.from != 'opportunity' && getUserData?.Role != 'RM'">
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
                            <button type="button" class="min-w-[120px] h-[36px] flex items-center justify-center rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="callServiceApporve_Reject('Approved')">
                                <span v-if="!getIsApproveLoader" class="flex items-center justify-center gap-1"><div v-html="tickSvg"></div>Approve </span>
                                <btnLoader v-else />
                            </button>
                            <button type="button" class="min-w-[120px] h-[36px] flex items-center justify-center rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" @click="remarks ? callServiceApporve_Reject('Rejected') : isRejectDialog = true"><span class="flex items-center justify-center gap-1"><div v-html="cancelSvg"></div>Reject </span></button>
                        </div>
                        </div>
                        <rejectReason class="bg-[#F7F5F5]" v-if="i['nominee_status'] == 'Rejected' && i['nominee_remarks'] != ''" :reason="i['nominee_remarks']"/>
                    </div>
                </div>
            </div>
            <div v-else class="flex items-center justify-center min-h-[50vh]">No Nominees Found</div>
        </div>
    </div>
    <rejectDialog v-if="isRejectDialog" :is-open="isRejectDialog" :active-tab="'6'" @send-remarks="getRemarks" />
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
        ...mapGetters('approval', ['getCustomerData', 'getStageData', 'getIsApproveLoader', 'getIsRejectLoader', 'getIsResetLoader']),
        ...mapGetters('login', ['getUserData'])
    },
    methods: {
        callServiceApporve_Reject(status) {
            this.$store.dispatch('approval/formatJson', { tab: 6, status: status, remarks: status == 'Rejected' ? this.remarks : '', nomineeId: this.currectSelectData.nomineeId })
            if(this.getCustomerData && this.getCustomerData?.opportunity_data && this.getCustomerData?.opportunity_data?.name) {
                setTimeout(() => {
                    this.$store.dispatch('approval/getCustomerData', this.getCustomerData?.opportunity_data.name)
                }, 500);
            }
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
            let selectedArray = this.getStageData.nominee?.filter((el) => el.nominee_number == id)
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

                this.nomineeList.push({ name: `${item.nominee_fname} ${item.nominee_lname}`, dob: window.formatDate(item.date_of_birth, 'D'), emailId: item.email_id, mobNo: item.mobile_number, proofId: item.proof_id, proofType: item.proof_type, relationOfNominee: item.relationship, nomineeId: item.nominee_number,
                address: `${item?.address}&#013;&#010;${item?.address_2}&#013;&#010;${item?.city} - ${item?.pincode}&#013;&#010;${item?.state}`, guardian: underAgeValidate(window.formatDate(item.date_of_birth, 'D')) && !item.proof_id && !item.proof_type ? {name:  `${item.guardian_fname} ${item.guardian_lname}`, dob: window.formatDate(item.guardian_dob, 'D'), emailId: item.guardian_email_id, mobNo: item.guardian_phone_no, proofId: item.guardian_proof_id, proofType: item.guardian_prooftype, relationOfNominee: item.guardian_relationship,
                address: `${item?.guardian_address1}&#013;&#010;${item?.guardian_address2}&#013;&#010;${item?.guardian_city} - ${item?.guardian_pincode}&#013;&#010;${item?.guardian_state}`} : null, nominee_status: item.nominee_status, nominee_remarks: item.nominee_remarks, percentage_allocation: item.percentage_allocation})
            }
            if (this.nomineeList.length > 0) {
                this.expandNominee(0)
            }
        }
    }
}
function underAgeValidate(birthday){
	// it will accept two types of format yyyy-mm-dd and yyyy/mm/dd
    birthday = [new Date(birthday).getFullYear(), new Date(birthday).getMonth() > 9 ? new Date(birthday).getMonth() : `0${new Date(birthday).getMonth()}`, new Date(birthday).getDate() > 9 ? new Date(birthday).getDate() : `0${new Date(birthday).getDate()}`].join('-')
	var optimizedBirthday = birthday.toString().replace(/-/g, "/");
	//set date based on birthday at 01:00:00 hours GMT+0100 (CET)
	var myBirthday = new Date(optimizedBirthday);

	// set current day on 01:00:00 hours GMT+0100 (CET)
	var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';
    
	// calculate age comparing current date and borthday
	var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
    let isUnderAge
    myAge < 18 ? isUnderAge = true : isUnderAge = false
    return isUnderAge;
} 
</script>
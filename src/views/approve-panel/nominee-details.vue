<template>
    <div class="">
        <div class="">
            <div class="my-4 flex flex-col gap-4 ">
                <div v-for="(i, id) in nomineeList" :key="id" class="cursor-pointer p-4 shadow rounded-lg bg-white transition duration-1000 ease-in-out w-full" @click="expanstion == id ? expanstion = -1 : expanstion = id">
                    <div class="flex justify-between gap-3">
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
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div class="mt-2">
                                        <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.name"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">DOB</label>
                                    <div class="mt-2">
                                    <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.dob"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mobile No.</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.mobNo"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Email ID</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.emailId"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof Type</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.proofType"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Proof ID</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.proofId"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Relation OF Nominee</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.relationOfNominee"/>
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                    <div class="mt-2">
                                    <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="i.address"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <!-- <div class="flex gap-4 my-4 justify-end">
        <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Approve</button>
        <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Reject</button>
    </div> -->
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
import { mapGetters } from 'vuex'
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
            nomineeObj: { isOpen: false, name: '', dob: '', mobNo: '', emailId:'', proofType: '', proofId:'', relationOfNominee: '', address: ''},
            expanstion: -1
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData'])
    },
    mounted(){
        if(this.getCustomerData && this.getCustomerData.fsl_nominee_table){
            for(let item of this.getCustomerData.fsl_nominee_table){
                this.nomineeObj.name = item.name
                this.nomineeObj.dob = item.date_of_birth
                this.nomineeObj.emailId = item.email_id
                this.nomineeObj.mobNo = item.mobile_number
                this.nomineeObj.proofId = item.proof_id
                this.nomineeObj.proofType = item.proof_type
                this.nomineeObj.relationOfNominee = item.relationship
                this.nomineeList.push(this.nomineeObj)
            }
        }
    }
}
</script>
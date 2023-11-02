<template>
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 md:grid-cols-3">
        <div class="max-w-[800px]">
            <div class="my-4 flex flex-col gap-4 ">
                <div v-for="(i, id) in nomineeList" :key="id" class="cursor-pointer p-4 shadow rounded-lg bg-white transition duration-1000 ease-in-out w-full" @click="expantion(id)">
                    <div class="flex justify-between gap-3">
                        <div class="text-sm">
                            Nominee {{ id + 1 }}
                        </div>
                        <div>
                            <div v-html="downArrow" v-if="!i.isOpen"></div>
                            <div v-html="upArrow" v-if="i.isOpen"></div>
                        </div>
                    </div>
                    <div class="" v-if="i.isOpen">
                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Name</div>
                            <div class="text-sm">{{ i.name }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">DOB</div>
                            <div class="text-sm">{{ i.dob }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Mobile No.</div>
                            <div class="text-sm">{{ i.mobNo }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Email ID</div>
                            <div class="text-sm">{{ i.emailId }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Proof Type</div>
                            <div class="text-sm">{{ i.proofType }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Proof ID</div>
                            <div class="text-sm">{{ i.proofId }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Relation OF Nominee</div>
                            <div class="text-sm">{{ i.relationOfNominee }}</div>
                        </div>

                        <div class="my-2">
                            <div class="text-xs secondaryColor mb-1">Address</div>
                            <div class="text-sm">{{ i.address }}</div>
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
            nomineeList: [
                { isOpen: false, name: 'VIJI VINOTHKUMAR', dob: '24-09-1989', mobNo: '7010127185', emailId:'viji8920@gmail.com', proofType: 'PAN', proofId:'HBOPP0734E', relationOfNominee: 'Spouse', address: 'O BLOCK 5, 73 STREET R V NAGAR JAFFERKHAN PET, Tamil Nadu CHENNAI 600083'},
                { isOpen: false, name: 'VIJI VINOTHKUMAR', dob: '24-09-1989', mobNo: '7010127185', emailId:'viji8920@gmail.com', proofType: 'PAN', proofId:'HBOPP0734E', relationOfNominee: 'Spouse', address: 'O BLOCK 5, 73 STREET R V NAGAR JAFFERKHAN PET, Tamil Nadu CHENNAI 600083'},
                { isOpen: false, name: 'VIJI VINOTHKUMAR', dob: '24-09-1989', mobNo: '7010127185', emailId:'viji8920@gmail.com', proofType: 'PAN', proofId:'HBOPP0734E', relationOfNominee: 'Spouse', address: 'O BLOCK 5, 73 STREET R V NAGAR JAFFERKHAN PET, Tamil Nadu CHENNAI 600083'}
            ]
        }
    },
    methods: {
        expantion(id) {
            this.nomineeList[id]['isOpen'] = !this.nomineeList[id]['isOpen']
        }
    },
}
</script>
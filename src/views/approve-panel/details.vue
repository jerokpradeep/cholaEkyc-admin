<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-6">
      <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
        <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="mobileNo"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Email ID</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="emailId"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="startDate"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Updated On</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="updatedOn"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mode of Application</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="modeOfApplication"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Branch</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="branch"/>
            </div>
          </div>
      </div>
    </div>
    <div class="col-span-6">
      <stage_table />
    </div> 
  </div>
</template>

<script>
import stage_table from "./stage-table.vue"
export default {
    components: { stage_table },
    data() {
        return {
            mobileNo: '',
            emailId: '',
            startDate: '09-10-2023 13:05:58',
            updatedOn: '09-10-2023 13:59:59',
            modeOfApplication: 'DIRECT',
            branch: 'NotMatch',
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Stage", class: "text-left" },
                { name: "Status", class: "text-left" },
            ],
            tableData: [
                {
                    sno: "1",
                    stage: 'Mobile',
                    status: 'Approved'
                },
                {
                    sno: "2",
                    stage: 'Email',
                    status: 'Approved'
                },
                {
                    sno: "3",
                    stage: 'PAN',
                    status: 'Updated'
                },
                {
                    sno: "4",
                    stage: 'Profile',
                    status: 'Updated'
                },
                {
                    sno: "5",
                    stage: 'Address',
                    status: 'Approved'
                },
                {
                    sno: "6",
                    stage: 'Bank',
                    status: 'Updated'
                },
                {
                    sno: "7",
                    stage: 'Segments',
                    status: 'Updated'
                },
                {
                    sno: "8",
                    stage: 'IPV',
                    status: 'Updated'
                },
                {
                    sno: "9",
                    stage: 'Nominees',
                    status: 'Updated'
                },
                {
                    sno: "10",
                    stage: 'Documents',
                    status: 'Updated'
                },
                {
                    sno: "11",
                    stage: 'E-Sign Doc',
                    status: 'Updated'
                }
            ],
        }
    },
    props: {
      cutomerData: { type: Object }
    },
    mounted() {
        this.mobileNo = this.cutomerData?.fsl_mobile_num
        this.emailId = this.cutomerData?.fsl_email_id
        this.startDate = this.cutomerData?.creation
        this.updatedOn = this.cutomerData?.modified
        this.modeOfApplication = ''
        this.branch = this.cutomerData?.branch
    },
}
</script>
<template>
    <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">PAN Number</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="panNumber"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Name as per PAN</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="nameAsPan"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">PAN Status Code</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="panStatusCode"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Name as per Aadhar</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="nameAsAadhar"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">KRA Response Date</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="kraRespDate"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Track Wiz</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="trackWiz"/>
            </div>
          </div>
        </div>
        </div>
        <div class="col-span-6">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg bg-white border h-[200px] my-4">

          </div>
        </div>        
    </div>
    
    <!-- <div class="flex gap-4 my-4 justify-end">
        <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Approve</button>
        <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Reject</button>
    </div> -->
</template>

<script>
import {mapGetters} from "vuex"
export default {
    data() {
        return {
            panNumber: '',
            nameAsPan: '',
            nameAsAadhar: '',
            panStatusCode: '',
            kraRespDate: '',
            trackWiz: ''
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData']),
    },
    mounted(){
      if(this.getCustomerData && this.getCustomerData?.opportunity_data){
        this.getCustomerData.opportunity_data?.fsl_pan_no  ? this.panNumber = this.getCustomerData.opportunity_data?.fsl_pan_no : ''
        this.getCustomerData.opportunity_data?.fsl_user_name  ? this.nameAsPan = this.getCustomerData.opportunity_data?.fsl_user_name : ''
        this.getCustomerData.opportunity_data?.fsl_user_name  ? this.nameAsAadhar = this.getCustomerData.opportunity_data?.fsl_user_name : ''
        this.getCustomerData.opportunity_data?.fsl_pan_status_code  ? this.panStatusCode = this.getCustomerData.opportunity_data?.fsl_pan_status_code : ''
        this.getCustomerData.opportunity_data?.fsl_kra_response_date  ? this.kraRespDate = this.getCustomerData.opportunity_data?.fsl_kra_response_date : ''
        this.getCustomerData.opportunity_data?.trackwizz_passkey ? this.trackWiz = this.getCustomerData.opportunity_data?.trackwizz_passkey : ''
      }
    }
}
</script>
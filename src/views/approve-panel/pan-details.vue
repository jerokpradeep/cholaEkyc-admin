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
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" :class="trackWiz && trackWiz.toString().toLowerCase() == 'match' ? 'bg-red-600 text-white ring-red-300' : ''" disabled v-model="trackWiz"/>
              </div>
            </div>
        </div>
        
        </div>
        <div class="col-span-6">
          <preview_file :previewType="getDocumentData.type" :previewData="getDocumentData.data" :isPreBtn="true" :preFerence="docType1"/>
          <preview_file :previewType="getDocumentDataClone.type" :previewData="getDocumentDataClone.data" :isPreBtn="false" :preFerence="docType1"/>
        </div>        
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import commonJs from "../../mixins/common"
export default {
  mixins: [commonJs],
    data() {
        return {
            panNumber: '',
            nameAsPan: '',
            nameAsAadhar: '',
            panStatusCode: '',
            kraRespDate: '',
            trackWiz: '',
            docType1: 'PAN',
            docType2: 'SIGNATURE'
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData', 'getDocumentData', 'getDocumentDataClone']),
    },
    mounted(){
      if(this.getCustomerData && this.getCustomerData?.opportunity_data){
        this.getCustomerData.opportunity_data?.fsl_pan_no  ? this.panNumber = this.getCustomerData.opportunity_data?.fsl_pan_no : ''
        this.getCustomerData.opportunity_data?.fsl_esiged_name  ? this.nameAsPan = this.getCustomerData.opportunity_data?.fsl_esiged_name : ''
        this.getCustomerData.opportunity_data?.fsl_esiged_name  ? this.nameAsAadhar = this.getCustomerData.opportunity_data?.fsl_esiged_name : ''
        this.getCustomerData.opportunity_data?.fsl_pan_status_code && this.getCustomerData.opportunity_data?.fsl_pan_status_code_description  ? this.panStatusCode = `${this.getCustomerData.opportunity_data?.fsl_pan_status_code} - ${this.getCustomerData.opportunity_data?.fsl_pan_status_code_description}` : ''
        this.getCustomerData.opportunity_data?.fsl_kra_response_date  ? this.kraRespDate = window.formatDate(this.getCustomerData.opportunity_data?.fsl_kra_response_date , 'D') : ''
        
      }
      if(this.getCustomerData && this.getCustomerData?.profile_data){
        this.getCustomerData.profile_data?.trackwizz_passkey ? this.trackWiz = this.getCustomerData.profile_data?.trackwizz_passkey : ''
      }
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${this.docType1}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'preview' , docType : this.docType1 })
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${this.docType2}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'clone' , docType : this.docType2 })
    },
}
</script>
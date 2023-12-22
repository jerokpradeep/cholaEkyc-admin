<template>
    <div class="grid grid-cols-12">
      <div class="col-span-6">
        
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="col-span-full">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Penny Drop Verification Status</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="pennyVerifyStatus"/>
            </div>
          </div>
          
            <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Account Holder Name</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="acHolderName"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Account Number</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="acNo"/>
            </div>
          </div>
          
          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">IFSC Code</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="ifscCode"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">MICR Code</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="micrCode"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Bank Name</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="bankName"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Branch Name</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="branchName"/>
            </div>
          </div>

          <div class="col-span-full">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Address of Bank</label>
            <div class="mt-2">
                <textarea disabled name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" v-model="address"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6">  
          <div class="rounded-lg my-4 h-[320px]">
            <preview_file :previewType="getDocumentData.type" :previewData="getDocumentData.data" :isPreBtn="true" :preFerence="attachmentName"/>
          </div>
        </div>
    </div>
    <rejectReason v-if="getStageData['bank status'] == 'Rejected' && getStageData['bank remarks'] != ''" :reason="getStageData['bank remarks']"/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            bankName: '',
            branchName: '',
            ifscCode: '',
            micrCode: '',
            acHolderName: '',
            acNo: '',
            pennyVerifyStatus: '',
            address: '',
            attachmentName: 'CANCELLED_CHEQUE_OR_STATEMENT'
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData', 'getDocumentData','getStageData'])
    },
    mounted(){
      if(this.getCustomerData && this.getCustomerData.opportunity_data){
        this.getCustomerData.opportunity_data.fsl_bank_name ? this.bankName  = this.getCustomerData.opportunity_data.fsl_bank_name  : ''
        this.getCustomerData.opportunity_data.fsl_bank_branch ? this.branchName  = this.getCustomerData.opportunity_data.fsl_bank_branch  : ''
        this.getCustomerData.opportunity_data.fsl_bank_ifsc ? this.ifscCode  = this.getCustomerData.opportunity_data.fsl_bank_ifsc  : ''
        this.getCustomerData.opportunity_data.fsl_bank_micr ? this.micrCode  = this.getCustomerData.opportunity_data.fsl_bank_micr  : ''
        this.getCustomerData.opportunity_data.fsl_acc_hname ? this.acHolderName  = this.getCustomerData.opportunity_data.fsl_acc_hname  : ''
        this.getCustomerData.opportunity_data.fsl_verify_acc_number ? this.acNo  = this.getCustomerData.opportunity_data.fsl_verify_acc_number  : ''
        this.getCustomerData.opportunity_data.hasOwnProperty('fsl_penny_confirm') ? this.pennyVerifyStatus  = this.getCustomerData.opportunity_data.fsl_penny_confirm == 1 ? 'Success' : 'Failed'  : ''
        this.getCustomerData.opportunity_data.fsl_bank_address ? this.address  = this.getCustomerData.opportunity_data.fsl_bank_address  : ''
      }
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${this.attachmentName}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'preview' , docType : 'CANCELLED_CHEQUE_OR_STATEMENT' })
    }
}
</script>
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
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="my-4">
            <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow"  @click="$router.push({path:'/preview', query: $route.query})">Compare documents</button>
          </div>
          <div class="rounded-lg my-4">
            <VueCropper v-if="getDocumentData" ref="image1" :img="getDocumentData" 
                :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
                :outputSize="1" alt="Source Image" class="cropper" >
            </VueCropper>
            <div class="rounded-lg my-4">
            <VueCropper v-if="getDocumentDataClone" ref="image1" :img="getDocumentDataClone" 
                :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
                :outputSize="1" alt="Source Image" class="cropper" >
            </VueCropper>
          </div>
          </div>
        </div>        
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import commonJs from "../../mixins/common"
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
export default {
  components: { VueCropper },
  mixins: [commonJs],
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
        ...mapGetters('approval', ['getCustomerData', 'getDocumentData', 'getDocumentDataClone']),
    },
    mounted(){
      if(this.getCustomerData && this.getCustomerData?.opportunity_data){
        this.getCustomerData.opportunity_data?.fsl_pan_no  ? this.panNumber = this.getCustomerData.opportunity_data?.fsl_pan_no : ''
        this.getCustomerData.opportunity_data?.fsl_user_name  ? this.nameAsPan = this.getCustomerData.opportunity_data?.fsl_user_name : ''
        this.getCustomerData.opportunity_data?.fsl_user_name  ? this.nameAsAadhar = this.getCustomerData.opportunity_data?.fsl_user_name : ''
        this.getCustomerData.opportunity_data?.fsl_pan_status_code && this.getCustomerData.opportunity_data?.fsl_pan_status_code_description  ? this.panStatusCode = `${this.getCustomerData.opportunity_data?.fsl_pan_status_code} - ${this.getCustomerData.opportunity_data?.fsl_pan_status_code_description}` : ''
        this.getCustomerData.opportunity_data?.fsl_kra_response_date  ? this.kraRespDate = window.formatDate(this.getCustomerData.opportunity_data?.fsl_kra_response_date , 'D') : ''
        
      }
      if(this.getCustomerData && this.getCustomerData?.profile_data){
        this.getCustomerData.profile_data?.trackwizz_passkey ? this.trackWiz = this.getCustomerData.profile_data?.trackwizz_passkey : ''
      }
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=PAN&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'preview' , docType : 'PAN' })
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=SIGNATURE&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'clone' , docType : 'SIGNATURE' })
    },
}
</script>
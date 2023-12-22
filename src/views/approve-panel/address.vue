<template>
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 md:grid-cols-3">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div class="col-span-full">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
                <textarea disabled name="message" id="message" rows="5" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" v-html="address"></textarea>
            </div>
          </div>
          <div class="col-span-full">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Source</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="source"/>
            </div>
          </div>

          <div v-if="source" class="col-span-full">
            <div v-if="source == 'KRA'" class="flex justify-between">
            <div class="w-[48%]">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">KRA Address Proof</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="kraAddressProof"/>
            </div>
          </div>

          <div class="w-[48%]">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">KRA Proof Id Number</label>
            <div class="flex gap-3">
              <div class="mt-2">
                <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="kraAddressProofId"/>
              </div>
              <div v-if="source == 'KRA'" class="flex items-end w-[24px] cursor-pointer" v-html="infoSvg" @click="getKraDetails()"></div>
            </div>
          </div>
          
          </div>
          
          <div v-else class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Aadhar Number</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="aadharNo"/>
            </div>
          </div>
          

          </div>
        </div>
    </div>
    <rejectReason v-if="getStageData['address status'] == 'Rejected' && getStageData['address remarks'] != ''" :reason="getStageData['address remarks']"/>
    <kraDetails :xmlValue="getXmlValue" v-if="getIsShowKradetails"/>
</template>

<script>
import { mapGetters } from "vuex"
const infoSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>`
import kraDetails from "./kraDetailsXMl.vue"
export default {
    components: { kraDetails },
    data() {
        return {
            address: '',
            aadharNo: '',
            source: '',
            kraAddressProof: '',
            kraAddressProofId: '',
            infoSvg
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData', 'getStageData','getIsShowKradetails', 'getXmlValue'])
    },
    methods: {
      getKraDetails() {
        this.$store.dispatch('approval/getKraDetails' ,`applicationId=${this.getCustomerData?.opportunity_data?.name}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}`).finally(()=> {
          this.$store.commit('approval/setIsShowKradetails', true)
        })
      }
    },
    mounted() {
      

      if(this.getCustomerData && this.getCustomerData.address_data?.fsl_is_kra == 1) {
        this.address = `${this.getCustomerData.address_data?.fsl_kra_address_1 ? this.getCustomerData.address_data?.fsl_kra_address_1 : ''}&#013;&#010;${this.getCustomerData.address_data?.fsl_kra_address_2  ? this.getCustomerData.address_data?.fsl_kra_address_2 : ''}&#013;&#010;${this.getCustomerData.address_data?.fsl_kra_address_3 ? this.getCustomerData.address_data?.fsl_kra_address_3 : ''}&#013;&#010;${this.getCustomerData.address_data?.fsl_kra_city ? this.getCustomerData.address_data?.fsl_kra_city : ''} - ${this.getCustomerData.address_data?.fsl_kra_per_pin ? this.getCustomerData.address_data?.fsl_kra_per_pin : ''}&#013;&#010;${this.getCustomerData.address_data?.fsl_kra_per_state ? this.getCustomerData.address_data?.fsl_kra_per_state : ''}, ${this.getCustomerData.address_data?.fsl_kra_country ? this.getCustomerData.address_data?.fsl_kra_country : ''}.`
         this.aadharNo = ''
        this.source =  'KRA'
        this.getCustomerData.address_data?.fsl_kra_address_proof  ? this.kraAddressProof = this.getCustomerData.address_data?.fsl_kra_address_proof : ''
        this.getCustomerData.address_data?.fsl_kra_proof_idnumber  ? this.kraAddressProofId = this.getCustomerData.address_data?.fsl_kra_proof_idnumber : ''
      }

      if(this.getCustomerData && this.getCustomerData.address_data?.fsl_is_digi == 1) {
        this.getCustomerData.address_data?.fsl_digi_cur_address  ?  this.address =  this.getCustomerData.address_data?.fsl_digi_cur_address : ''
        this.source =  'DIGIO'
        this.getCustomerData  ? this.kraAddressProof = this.getCustomerData : ''
        this.getCustomerData  ? this.kraAddressProofId = this.getCustomerData : ''

        this.getCustomerData.opportunity_data.fsl_aadhar_no  ? this.aadharNo = this.getCustomerData.opportunity_data.fsl_aadhar_no : ''
      }
    }
}
</script>
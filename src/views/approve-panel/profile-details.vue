<template>
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 md:grid-cols-2">
        <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 md:col-span-2">
          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Father's Name</label>
            <div class="mt-2">
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="fathersName"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Mother's Name</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="mothersName"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Occupation</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="occupation"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Trading Experience</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="tradingExp"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Annual Income</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="annualIncome"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Net Worth</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="netWorth"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Marital Status</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="maritalStatus"/>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Politically Exposed Person ?</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="isPoliticalExposedPerson"/>
            </div>
          </div>
          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Tax Outside India</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="taxOutSideIndia"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Settlement Cycle</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="settlementCycle"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Standing Instructions</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="standingInstruction"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">FATCA</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="fatca"/>
            </div>
          </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            fathersName: '',
            mothersName: '',
            occupation: '',
            tradingExp: '',
            annualIncome: '',
            netWorth: '',
            maritalStatus: '',
            isPoliticalExposedPerson: '',
            taxOutSideIndia: '',
            settlementCycle: '',
            standingInstruction: '',
            fatca: ''
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData'])
    },
    mounted() {
      if(this.getCustomerData) {
        if(this.getCustomerData.opportunity_data){
          this.getCustomerData.opportunity_data.fsl_occu  ? this.occupation =  this.getCustomerData.opportunity_data.fsl_occu : ''
          this.getCustomerData?.opportunity_data?.annual_revenue == 0 || this.getCustomerData?.opportunity_data?.annual_revenue  ? this.annualIncome = this.getCustomerData?.opportunity_data.annual_revenue : ''
          this.getCustomerData?.opportunity_data?.fsl_net_worth  ? this.netWorth = this.getCustomerData?.opportunity_data?.fsl_net_worth : ''
          this.getCustomerData?.opportunity_data?.fsl_fatca  ? this.fatca = this.getCustomerData?.opportunity_data?.fsl_fatca : ''
        }
        
        if(this.getCustomerData.profile_data){
          this.getCustomerData?.profile_data.father_name  ?  this.fathersName =  this.getCustomerData?.profile_data?.father_name : ''
          this.getCustomerData?.profile_data?.marital_status  ? this.maritalStatus = this.getCustomerData?.profile_data?.marital_status : ''
          this.getCustomerData?.profile_data?.political_exposure  ? this.isPoliticalExposedPerson = this.getCustomerData?.profile_data?.political_exposure : ''
          this.getCustomerData?.profile_data?.tax_outside_india  ? this.taxOutSideIndia = this.getCustomerData?.profile_data?.tax_outside_india : ''
          this.getCustomerData?.profile_data?.settlement_cycle  ? this.settlementCycle = this.getCustomerData?.profile_data?.settlement_cycle : ''
          this.getCustomerData?.profile_data?.fatca  ? this.fatca = this.getCustomerData?.profile_data?.fatca : ''
          this.getCustomerData?.profile_data?.mother_name ? this.mothersName = this.getCustomerData?.profile_data?.mother_name : ''
        }
        // standingInstruction
      }
    }
}
</script>
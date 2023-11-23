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
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">FATCA</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="fatca"/>
            </div>
          </div>

        </div>
    </div>
    <div class="my-4 flex flex-col gap-4 ">
                <div class="cursor-pointer p-4 shadow rounded-lg bg-white transition duration-1000 ease-in-out w-full">
                    <div class="flex justify-between gap-3" @click="isOpen = !isOpen">
                        <div class="text-sm font-semibold">
                          Standing Instructions
                        </div>
                        <div>
                            <div v-html="downArrow" v-if="!isOpen"></div>
                            <div v-html="upArrow" v-if="isOpen"></div>
                        </div>
                    </div>
                   <div v-if="isOpen" class="mt-4">
                    <div v-for="(item, i) of standingInstrationsArray" :key="i" class="flex align-center text-sm justify-between pb-2">
                     <div>{{ item.content }}</div> <div>{{ item.value }}</div> 
                    </div>
                   </div>
                </div>

            </div>
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
            fatca: '',
            otherStandingIntrustions:[],
            upArrow,downArrow,
            isOpen: false,
            standingInstrationsArray:[
              {
                key :'standing_instruction_one',
                content: 'I/We instruct the DP to receive each and every credit in my/our account (If not marked,the default option would be Yes)',
                value:''
              },
              {
                key :'standing_instruction_two',
                content: 'SMS Alert Facility: Mobile No. +91 Mandatory, if you are giving power of Attorney (POA / DDPI). If POA is not granted & you do not wish to avail of this facility, cancel this option.',
                value:''
              },
              {
                key :'standing_instruction_three',
                content: 'Account Statement Requirement.',
                value:''
              },
              {
                key :'standing_instruction_four',
                content: 'I/We wish to receive all documents viz., Contract Note / Transaction and Holding Statement etc in Electronic mode. Authorisation for sending documents through email id: is being executed.',
                value:''
              },
              {
                key :'standing_instruction_five',
                content: 'I/We wish to receive dividend/interest directly in to my/our bank account provided through ECS [ECS is mandatory for locations notified by SEBI from time to time].',
                value:''
              },
              {
                key :'standing_instruction_six',
                content: 'I/We wish to register myself in CDSL - easi facility (I/We understand that Easi allows a BO to view ISIN balances, transactions and value of the portfolio online).',
                value:''
              },
              {
                key :'standing_instruction_seven',
                content: 'I/We wish to avail the facility of Internet Trading / Wireless Technology.',
                value:''
              },
              {
                key :'standing_instruction_eight',
                content: 'I/We hereby instruct DP to accept all the pledge instructions in my/our account without any other further instructions.',
                value:''
              },
              {
                key :'standing_instruction_nine',
                content: 'I/We would like to share the email ID with the RTA.',
                value:''
              },
              {
                key :'standing_instruction_ten',
                content: 'Do you wish to receive the notifications through Whatsapp.',
                value:''
              },
              {
                key :'standing_instruction_twelve',
                content: 'I/We require the Delivery Instruction Slip at the time of account opening.',
                value:''
              },
              {
                key :'standing_instruction_eleven',
                content: 'I/We would like to receive the Annual Report of companies held by me/us. (Tick the appropriate box. If not marked the default option would be in Physical).',
                value:''
              }
            ]
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData'])
    },
    mounted() {
      if(this.getCustomerData) {
        if(this.getCustomerData.opportunity_data){
          
          this.getCustomerData?.opportunity_data?.annual_revenue == 0 || this.getCustomerData?.opportunity_data?.annual_revenue  ? this.annualIncome = this.getCustomerData?.opportunity_data.annual_revenue : ''
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
          this.getCustomerData?.profile_data?.standinginstructios ? this.standingInstruction = this.getCustomerData?.profile_data?.standinginstructios : '' 
          this.getCustomerData?.profile_data?.occupation  ? this.occupation =  this.getCustomerData?.profile_data?.occupation : ''
          this.getCustomerData?.profile_data?.trading_experience  ? this.tradingExp =  this.getCustomerData?.profile_data?.trading_experience : ''
          this.getCustomerData?.profile_data?.net_worth ? this.netWorth = this.getCustomerData?.profile_data?.net_worth : ''
          for(let item of this.standingInstrationsArray){
            if(this.getCustomerData.profile_data[item.key]){
              item.value = this.getCustomerData.profile_data[item.key]
            }
          }
        }
      }
    }
}
</script>
<template>
    <div class="pb-12 flex gap-4">
        <table class="bg-white w-[48%] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                  <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                      {{ head.name }}
                  </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, id) in tableData" :key="id" class="border-b cursor-pointer hover:bg-gray-50">
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                      {{ id + 1 }}
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                      {{ i.field }} 
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                    <div class="flex gap-2">
                        <div v-if="i.value &&( i.value == 'Yes' || i.value == 'No')">
                          <div v-html="tickSvg" v-if="i.value == 'Yes'"></div>
                          <div v-html="cancelSvg" v-else></div>
                        </div>
                        {{ i.value }}
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>

        <table class="bg-white w-[48%] h-[350px] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                  <th v-for="(head, id) in paymentTableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                      {{ head.name }}
                  </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, id) in paymentTableData" :key="id" class="border-b cursor-pointer hover:bg-gray-50 h-[56px]">
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                      {{ id + 1 }}
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                      {{ i.field }}
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] text-left">
                    <div class="flex gap-2">
                        <div v-if="i.value &&( i.value == 'Yes' || i.value == 'No')">
                          <div v-html="tickSvg" v-if="i.value == 'Yes'"></div>
                          <div v-html="cancelSvg" v-else></div>
                        </div>
                        {{ i.value }}
                    </div>
                  </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            tableHeads: [
              { name: "S.No", class: "text-center" },
              { name: "Segment Details", class: "text-left" },
              { name: "Value", class: "text-left" }
            ],
            tableData: [
              {
                field: 'Equity Cash - NSE',
                value: "",
              },
              {
                field: 'Equity Cash - BSE',
                value: "",
              },
              {
                field: 'Equity Derivaties - NSE',
                value: "",
              },
              {
                field: 'Mutual Funds - NSE',
                value: "",
              },
              {
                field: 'Mutual Funds - BSE',
                value: "",
              },
              {
                field: 'Mutual Funds Depository',
                value: "",
              },
              {
                field: 'SLB - NSE',
                value: "",
              },
              {
                field: 'Currency Derivatives - NSE',
                value: "",
              },
              {
                 field: 'Currency Derivatives Type',
                value: "",
              },
              {
                 field: 'Segment Consent',
                value: "",
              },
              

            ],

            paymentTableHeads: [
              { name: "S.No", class: "text-center" },
              { name: "Payment Details", class: "text-left" },
              { name: "Value", class: "text-left" }
            ],
            paymentTableData: [
              {
                field: 'Trading Scheme',
                value: "",
              },
              {
                field: 'DP Scheme',
                value: "",
              },
              {
                field: 'DDPI',
                value: "",
              },
              {
                field: 'Scheme consent',
                value: "",
              },
              {
                field: 'Amount',
                value: "",
              },
            ],
            tickSvg, cancelSvg
        }
    },
    computed:{
        ...mapGetters('approval', ['getCustomerData'])
    },
    mounted(){
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_equity_cash')){
        this.tableData[0].value  = this.tableData[1].value =  this.getCustomerData.opportunity_data.fsl_equity_cash == 1 ? "Yes" : "No"
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_equity_derivative')){
         this.tableData[2].value = this.getCustomerData.opportunity_data.fsl_equity_derivative == 1 ? "Yes" : "No"
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_mutual_funds')){
         this.tableData[3].value = this.tableData[4].value = this.getCustomerData.opportunity_data.fsl_mutual_funds == 1 ? "Yes" : 'No'
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_mf_phy_or_dig')){
        this.tableData[5].value = this.getCustomerData.opportunity_data.fsl_mf_phy_or_dig
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_slb')){
        this.tableData[6].value = this.getCustomerData.opportunity_data.fsl_slb == 1 ? "Yes" : 'No'
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_currency_derivatives')){
        this.tableData[7].value = this.getCustomerData.opportunity_data.fsl_currency_derivatives == 1 ? "Yes" : 'No'
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_currency_derivatives_type')){
        this.tableData[8].value = this.getCustomerData.opportunity_data.fsl_currency_derivatives_type
      }
      if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.hasOwnProperty('fsl_consent')){
        this.tableData[9].value = this.getCustomerData.opportunity_data.fsl_consent == 1 ? "Yes" : 'No'
      }

      if(this.getCustomerData && this.getCustomerData.trading_scheme && this.getCustomerData.trading_scheme.hasOwnProperty('trading_scheme')){
        this.paymentTableData[0].value = this.getCustomerData.trading_scheme.trading_scheme
      }

      if(this.getCustomerData && this.getCustomerData.trading_scheme && this.getCustomerData.trading_scheme.hasOwnProperty('db_scheme')){
        this.paymentTableData[1].value = this.getCustomerData.trading_scheme.db_scheme
      }

      if(this.getCustomerData && this.getCustomerData.trading_scheme && this.getCustomerData.trading_scheme.hasOwnProperty('ddpi')){
        this.paymentTableData[2].value = this.getCustomerData.trading_scheme.ddpi == 1 ? "Yes" : 'No'
      }

      if(this.getCustomerData && this.getCustomerData.trading_scheme && this.getCustomerData.trading_scheme.hasOwnProperty('ddpi')){
        this.paymentTableData[3].value = "Yes" 
      }
    }
}
</script>
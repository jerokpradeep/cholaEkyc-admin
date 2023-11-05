<template>
    <div class="pb-12">
        <table class="bg-white w-[800px] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
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
                      {{ i.sno }}
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                      {{ i.field }}
                  </td>
                  <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                    <div class="flex gap-2">
                        <div v-if="id < 12">
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

    <!-- <div class="flex gap-4 my-4 justify-end">
        <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Approve</button>
        <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Reject</button>
    </div> -->
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
              { name: "Field", class: "text-left" },
              { name: "Value", class: "text-left" }
            ],
            tableData: [
              {
                sno: "1",
                field: 'Equity Cash - NSE',
                value: "No",
              },
              {
                sno: "2",
                field: 'Equity Cash - BSE',
                value: "No",
              },
              {
                sno: "3",
                field: 'Equity Derivaties - NSE',
                value: "No",
              },
              {
                sno: "4",
                field: 'Equity Funds - NSE',
                value: "No",
              },
              {
                sno: "5",
                field: 'Equity Funds - BSE',
                value: "No",
              },
              {
                sno: "6",
                field: 'SLB - NSE',
                value: "No",
              },
              {
                sno: "7",
                field: 'SLB - BSE',
                value: "No",
              },
              {
                sno: "8",
                field: 'Currency Derivatives - NSE',
                value: "No",
              },
              {
                sno: "9",
                field: 'Category',
                value: "Others",
              },
              {
                sno: "10",
                field: 'Mutual Funds Depository',
                value: "No",
              },
              {
                sno: "11",
                field: 'Consent',
                value: "No",
              },
              {
                sno: "12",
                field: 'DDPI',
                value: "No",
              },
              {
                sno: "13",
                field: 'Trading Scheme',
                value: "Standard Scheme",
              },
              {
                sno: "14",
                field: 'DP Scheme',
                value: "Normal Scheme",
              },
              {
                sno: "15",
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
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_equity_cash == 1){
        this.tableData[0].value  = this.tableData[1].value = "Yes"
      }
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_equity_derivative == 1){
         this.tableData[2].value = "Yes"
      }
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_slb == 1){
        this.tableData[5].value = this.tableData[6].value = "Yes"
      }
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_currency_derivatives == 1){
         this.tableData[7].value = "Yes"
      }
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_mutual_funds == 1){
         this.tableData[9].value = "Yes"
      }
      if(this.getCustomerData && this.getCustomerData.fsl_equity_cash && this.getCustomerData.fsl_consent == 1){
         this.tableData[10].value = "Yes"
      }
      
      
    }
}
</script>
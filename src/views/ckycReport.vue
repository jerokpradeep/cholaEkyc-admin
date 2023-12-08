<template>
    <div class="px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 "> CKYC Download</div>
    <div class="p-4 h-full">
        <div class="card p-4">
            <div class="mb-6 gap-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
          
          <div>
              <p class="primaryColor pb-1 text-sm">From Date</p>
              <VDatePicker :max-date="currentDate" v-model="fromDate" mode="date" :popover="false"
              :masks="{
                input: 'DD-MM-YYYY',
                modelValue: 'YYYY-MM-DD',
              }">
              <template v-slot="{ togglePopover, inputValue, inputEvents }">
                <div class="flex items-center justify-between w-[75%] h-[32px]  border rounded p-2" @click="() => togglePopover()">
                  <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
                    class="w-[90px] text-xs outline-none cursor-pointer" readonly />
                  <button type="button"
                    class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"
                    >
                    <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                    </svg>
                  </button>
                </div>
              </template>
              </VDatePicker>
          </div>
      <div>
          <p class="primaryColor pb-1 text-sm">To Date</p>
          <VDatePicker :max-date="currentDate" v-model="toDate" :min-date="fromDate" mode="date" :popover="false"
              :masks="{
                input: 'DD-MM-YYYY',
                modelValue: 'YYYY-MM-DD',
              }">
              <template v-slot="{ togglePopover, inputValue, inputEvents }">
                <div class="flex items-center justify-between w-[75%] h-[32px]  border rounded p-2" @click="() => togglePopover()">
                  <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
                    class="w-[90px] text-xs outline-none cursor-pointer" readonly />
                  <button type="button"
                    class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"
                    >
                    <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                    </svg>
                  </button>
                </div>
              </template>
          </VDatePicker>
      </div>
      <div class="flex items-end"><button type="button" @click="validateField()"
              class="bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs">
              <p>Submit</p>
          </button></div>
  </div>
</div>
    </div>
   
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'ckyc_report',
    data() {
        return {
            fromDate: '',
            toDate: '',
            currentDate:new Date().toISOString().split('T')[0]
        }
    },
    computed: {
        ...mapGetters('approval', ['getCustomerData']),
        ...mapGetters('login', ['getUserData']),

    },
    methods:{
        async validateField(){
            if(this.fromDate && this.toDate){
                let tempFromDate = [new Date(this.fromDate).getDate() > 9 ? new Date(this.fromDate).getDate() : `0${new Date(this.fromDate).getDate()}`, new Date(this.fromDate).getMonth() > 9 ? new Date(this.fromDate).getMonth() : `0${new Date(this.fromDate).getMonth()}`, new Date(this.fromDate).getFullYear()].join('-')
                let tempToDate = [new Date(this.toDate).getDate() > 9 ? new Date(this.toDate).getDate() : `0${new Date(this.toDate).getDate()}`, new Date(this.toDate).getMonth() > 9 ? new Date(this.toDate).getMonth() : `0${new Date(this.toDate).getMonth()}`, new Date(this.toDate).getFullYear()].join('-')
                let str = `token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}&Todate=${tempToDate}&frmdate=${tempFromDate}`
               await this.$store.dispatch('bo/callDownload', str).finally(()=> {this.fromDate = this.toDate = ''})
            }else{
                this.$store.dispatch('errorLog/toaster', {
                    data: {
                        "title": "Select a From & To Date",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    }, position: ''
                })
            }
        }
    }
}
</script>
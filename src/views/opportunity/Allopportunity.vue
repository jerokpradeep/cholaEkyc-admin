<template>
  <div>
    <form @submit.prevent="getAllOppertunities()" class="flex gap-3 flex-wrap mb-2">
      <VDatePicker :max-date="currentDate"  v-model="fromDate" mode="date" :popover="popover" :persistent="true"
                :masks="{
                  input: 'DD-MM-YYYY',
                  modelValue: 'YYYY-MM-DD',
                }">
                <template v-slot="{ togglePopover, inputValue, inputEvents }">
                  <div class="flex items-center justify-between w-[131px] h-[32px]   border rounded p-2">
                    <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
                      class="w-[90px] text-xs outline-none cursor-pointer !bg-[#F7F5F5]" readonly  />
                    <button type="button"
                      class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"
                      @click="() => togglePopover()">
                      <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                      </svg>
                    </button>
                  </div>
                </template>
      </VDatePicker>
      <VDatePicker :max-date="currentDate" :min-date="fromDate" v-model="toDate" mode="date" :popover="popover" :persistent="true"
                :masks="{
                  input: 'DD-MM-YYYY',
                  modelValue: 'YYYY-MM-DD',
                }">
                <template v-slot="{ togglePopover, inputValue, inputEvents }">
                  <div class="flex items-center justify-between w-[131px] h-[32px]   border rounded p-2">
                    <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
                      class="w-[90px] text-xs outline-none cursor-pointer !bg-[#F7F5F5]" readonly />
                    <button type="button"
                      class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"
                      @click="() => togglePopover()">
                      <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path>
                      </svg>
                    </button>
                  </div>
                </template>
      </VDatePicker><div>
        <Listbox v-model="statusType">
          <div class="relative">
            <ListboxButton class="min-w-[126px] relative w-full cursor-pointer rounded-lg bg-white h-8 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span class="block truncate text-xs">{{ statusType.name || 'Select status' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="z-[1] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="status in $store.state.statusList" :key="status.name" :value="status" as="template">
                  <li :class="[ active ? 'bg-[#F0F6FD] text-[#0081B8]' : 'text-gray-900','relative cursor-pointer select-none py-2 pl-10 pr-4']" @click="getStatusType(status)">
                    <span :class="[ selected ? 'font-medium' : 'font-normal','block truncate text-xs']">{{ status.name }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#0081B8]" >
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <input type="text" v-model="application" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" placeholder="Search: Application">
      <input type="text" v-model="panNo" class="bg-white rounded-lg uppercase border-transparent px-2 text-xs h-8" placeholder="Search: PAN No.">
      <input type="text" v-model="mobileNo" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" placeholder="Search: Mobile No.">
      <button type="submit" :disabled="getIsLoader" class="flex justify-center items-center min-w-[100px] h-[32px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7]">Submit</button>
    </form>
    <table v-if="!getIsStageDetails && !getIsLoader && getAllOpportunities.length > 0"  class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg">
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr>
          <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class"
            class="py-3.5 px-3 text-xs font-medium primaryColor whitespace-nowrap">
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(i, id) in getAllOpportunities" :key="id" class="border-b hover:bg-gray-50 cursor-pointer" @click="goToApprovalPage(i)">
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ id + 1 }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-left">
              {{ i.customer_name }}
            </td>
            <td class="flex py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
              {{ i.fsl_pan_no }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i['phase'] }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative items-center justify-center">
              <div class="flex items-center justify-center" v-if="i?.stage">
                <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="filledSvg" alt="greenstar" v-for="idx in getGreenStarCount(i?.stage)" :key="idx" />
                <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="chevronSvg" alt="graystar" v-for="idx in getGrayStarCount(i?.stage, i.phase)" :key="idx" />
              </div>
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i?.time ? getHours(i.time) : i?.time }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default" :class="i['current phase'] == 'In-Progress'
                    ? 'blue-btn-c': i['current phase'] == 'Open'  ? 'gray-btn-c'
                    : i['current phase'] == 'Completed' || i['current phase'] == 'Approved' ? 'green-btn-c' : 'gray-btn-c'
                  ">
                {{ i['current phase'] }}
              </button>
            </td>
          </tr>
        </tbody>
    </table>
    <div v-else-if="!getIsLoader" class="flex items-center justify-center min-h-[50vh]">No Records Found</div>
  </div>
</template>

<script>
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import Progress from "../../assets/image/process.svg";
import chevronSvg from "../../assets/image/Chevron.svg"
import filledSvg from "../../assets/image/filledSvg.svg"
import { mapGetters } from "vuex"
export default {
  components: { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption,  CheckIcon, ChevronUpDownIcon},
  data() {
    return {
      Progress,
      chevronSvg,
      filledSvg,
      tableHeads: [
        { name: "S.No", class: "text-center" },
        { name: "Customer Name", class: "text-left" },
        { name: "PAN", class: "text-center" },
        { name: "Current phases", class: "text-center" },
        { name: "Phases", class: "text-center" },
        { name: "Hours consumed", class: "text-center" },
        { name: "Progress State", class: "text-center" },
      ],
      fromDate: '',
      toDate: '',
      status: '',
      application: '',
      panNo: '',
      mobileNo: '',
      statusType : {  },
      currentDate : new Date().toISOString().split('T')[0],
          popover:{
            visibility: 'click',
            placement: 'bottom',
          }
    };
  },
  computed: {
    ...mapGetters('opportunity', ['getIsStageDetails', 'getAllOpportunities']),
    ...mapGetters('approval', ['getIsLoader']),
    ...mapGetters('login', ["getUserData"]),
    minDate() {
      const today = new Date();
      today.setDate(today.getDate() - 30);
      return today;
    },
  },
  methods: {
    getFormat(date){
      return window.formatDate(date, 'D&T')
    },
    getHours(dt2) {
      let diffTime = Math.abs(new Date().valueOf() - new Date(dt2).valueOf());
      let days = diffTime / (24*60*60*1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
      if(Number(days) != 0) {
        return `${days}d, ${hours}h : ${minutes}m`
      } else if(Number(hours) != 0) {
        return `${hours}h:${minutes}m`
      } else {
        return `${minutes}m`
      }
    },

    getGrayStarCount(stars, name) {
      if(stars == 13) {
        return []
      }
      let s = Number(stars)
      let arr = []
      s = Math.round(s)
      s = 13 - s
      if(stars && s) {
        for (let index = 0; index < s; index++) {
          arr.push(index)
        }
        return arr
      } else {
        return 12
      }
    },

    getGreenStarCount(stars) {
      let s = Math.round(Number(stars))
      let arr = []
      if(stars && s) {
        for (let index = 0; index < s; index++) {
          arr.push(index)
        }
        return arr
      } else {
        return 13
      }
    },

    getAllOppertunities() {
      let json = {
        from_date : this.fromDate.toISOString().split('T')[0],
        to_date : this.toDate.toISOString().split('T')[0],
        status : this.status,
        application_id: this.application,
        pan_no : this.panNo,
        mob_no : this.mobileNo
      }
      if(this.fromDate || this.toDate || this.status || this.application || this.panNo || this.mobileNo){
        this.$store.dispatch('opportunity/getFilteredOpportunityList', json)
      }else{
        this.$store.dispatch('errorLog/toaster',{data: {
                    "title": 'Please select any field',
                    "type": "danger",
                    "message": '',
                    "duration": 4500
                },position: ''}, {root: true})
      }
    },
    async goToApprovalPage(data) {
      if(this.getUserData?.Role == 'RM') return
      if(data && data.opportunity_id) {
        await this.$store.dispatch('approval/getCustomerData', data?.opportunity_id).finally(()=> {
          this.$router.push(`/approvepanel?id=${data?.opportunity_id}&from=${this.$route.fullPath.toString().replace('/', '')}`).catch(() => { })
          this.$store.commit('setQuries', {data: {tab: 0}, action: 'change' , overRideKey : 'approvepanel'})
          
        })
      }
    },
    getStatusType(type){
      this.status = type.value
    },
    async setDefaultFilter(){
      this.fromDate = this.minDate,
      this.toDate = new Date(),
      this.status = ''
      this.statusType = { name: 'ALL', value:'' }
      this.getAllOppertunities()
    }
  },
  created(){
    this.setDefaultFilter()
  }
};
</script>

<style scoped>
.mv-clr {
  color: #6b4cba;
  background-color: #c8bce65c;
}

.ev-clr {
  color: #ff8f00;
  background-color: #ff910032;
}

.pan-clr {
  color: #4a7fc4;
  background-color: #cadbef;
}

.ad-clr {
  color: #325d34;
  background-color: #d9f5db;
  
}

.pp-clr {
  color: #dd971d;
  background-color: #f5e3c3d3;
}

.ba-clr {
  color: #d03030;
  background-color: #ffd3d3;
}

.ss-clr {
  color: #2189a1;
  background-color: #d9f8ff;
}

.pay-clr {
  color: #6b5b95;
  background-color: #c8bce65c;
}

.nom-clr {
  color: #ed0800;
  background-color: #f9dad9fe;
}

.du-clr {
  color: #233c08;
  background-color: #dfedd0;
}

.ipv-clr {
  color: #1510ad;
  background-color: #c6c4fc;
}

.pdf-clr {
  color: #bf6017;
  background-color: #f4dcca;
}

.esign-clr {
  color: #0a4d61;
  background-color: #c7e1e9;
}
</style>
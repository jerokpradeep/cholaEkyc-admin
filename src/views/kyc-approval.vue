<template>
  <tabs class="mx-4" :removeActive="true" @activeTab="changeTab" />
  <div class="p-4">
    <form @submit.prevent="getAllApproval()" class="flex gap-3 flex-wrap mb-2">
      <VDatePicker class="bg-white" :max-date="currentDate" v-model="fromDate" mode="date" :popover="false" :masks="{
        input: 'DD-MM-YYYY',
        modelValue: 'YYYY-MM-DD',
      }">
        <template v-slot="{ togglePopover, inputValue, inputEvents }">
          <div class="flex items-center justify-between w-[131px] h-[32px] border-transparent rounded-md p-2 bg-white"
            @click="() => togglePopover()">
            <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
              class="w-[90px] text-xs outline-none cursor-pointer bg-white" readonly />
            <button type="button"
              class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700">
              <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
                </path>
              </svg>
            </button>
          </div>
        </template>
      </VDatePicker>
      <VDatePicker :max-date="currentDate" :min-date="fromDate" v-model="toDate" mode="date" :popover="false" :masks="{
        input: 'DD-MM-YYYY',
        modelValue: 'YYYY-MM-DD',
      }">
        <template v-slot="{ togglePopover, inputValue, inputEvents }">
          <div class="flex items-center justify-between w-[131px] h-[32px] border-transparent rounded-md p-2 bg-white"
            @click="() => togglePopover()">
            <input :value="inputValue" placeholder="DD/MM/YYYY" v-on="inputEvents" id="vtd_inp"
              class="w-[90px] text-xs outline-none cursor-pointer bg-white" readonly />
            <button type="button"
              class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700">
              <svg fill="none" stroke="currentColor" class="w-4" stroke-width="1.5" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
                </path>
              </svg>
            </button>
          </div>
        </template>
      </VDatePicker>
      <div>
        <Listbox v-model="statusType">
          <div class="relative">
            <ListboxButton
              class="min-w-[126px] relative w-full cursor-pointer rounded-lg bg-white h-8 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span class="block truncate text-xs">{{ statusType.name || 'Select status' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
              leave-to-class="opacity-0">
              <ListboxOptions
                class="z-[1] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption v-slot="{ active, selected }" v-for="status in $store.state.statusList" :key="status.name"
                  :value="status" as="template" @click="getStatusType(status)">
                  <li
                    :class="[active ? 'bg-[#F0F6FD] text-[#0081B8]' : 'text-gray-900', 'relative cursor-pointer select-none py-2 pl-10 pr-4']">
                    <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate text-xs']">{{ status.name
                    }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#0081B8]">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <input type="text" v-model="application" class="bg-white rounded-lg border-transparent px-2 text-xs h-8"
        placeholder="Search: Application">
      <input type="text" v-model="panNo" class="bg-white rounded-lg border-transparent uppercase px-2 text-xs h-8"
        maxlength="10" placeholder="Search: PAN No.">
      <input type="text" v-model="mobileNo" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" maxlength="10"
        placeholder="Search: Mobile No.">
      <button type="submit" :disabled="getIsLoader"
        class="flex justify-center items-center min-w-[100px] h-[32px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7]">Submit</button>
    </form>

    <div class="bg-white py-4 px-8 my-6 rounded-lg flex gap-2 flex-wrap justify-between" v-if="currentTab == 0">
      <div v-for="(item, id) in applicationSummary" :key="id">
        <div class="flex flex-col gap-2 justify-center items-center">
          <div class="text-xs">{{ item.type }}</div>
          <div class="text-lg font-bold"
            :class="{ 'text-purple-700': item.type == 'In Progress', 'text-gray-800': item.type == 'Pending for Approval', 'text-blue-600': item.type == 'Approved', 'text-green-600': item.type == 'Completed', 'text-red-600': item.type == 'Rejected' }">
            {{ getCount(item.type) }}</div>
        </div>
      </div>
    </div>
    <div class="my-4" v-if="currentTab == 0 && !getIsLoader && getApprovalList.length > 0">
      <table class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg">
        <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
          <tr>
            <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class"
              @mouseover="isHover = true; currentIdx = idx" @mouseleave="isHover = false; currentIdx = -1"
              class="py-3.5 px-3 text-xs font-medium primaryColor whitespace-nowrap" @click="changeSort(head.value)">
              <span class="cursor-pointer" :class="head.alignment">
                <span class="select-none">{{ head.name }}</span>
                <span :class="head.alignment">
                  <span class="whitespace-nowrap" :id="`position_th_${head.text}`">{{ head.text }}</span>
                  <span v-if="head.sortable" class="min-w-[12px] mx-1">
                    <!-- v-if="isHover && currentIdx == id" -->
                    <span>
                      <span v-if="head.isdesc" v-html="upArrow"></span>
                      <span v-if="!head.isdesc" v-html="downArrow"> </span>
                    </span>
                  </span>
                </span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, id) in getApprovalList" :key="id" class="border-b cursor-pointer hover:bg-gray-50"
            @click="goToApprovalPage(i)">
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ id + 1 }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-left ">
              {{ i.customer_name ? i.customer_name : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.opportunity_id ? i.opportunity_id : 'NA' }}
            </td>
            <td
              class="flex py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
              {{ i.fsl_pan_no ? i.fsl_pan_no : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.fsl_mobile_num ? i.fsl_mobile_num : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.reference_id ? i.reference_id : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.referral_name ? i.referral_name : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.branch ? i.branch : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.designation ? i.designation : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i['status'] ? i['status'] : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.assigned_person_name ? i.assigned_person_name : '' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.time && i.time != " " ? getFormat(i.time) : 'NA' }}
            </td>
            <td class="py-4 px-3 text-[13px] primary-color dark:text-[#94A3B8] relative text-center time" :class="getTimeTdClass(i.time)">
              {{ i.time && i.time != " " ? getHours(i, i.time) : 'NA' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="!getIsLoader" class="flex items-center justify-center min-h-[50vh]">No Records Found</div>
    <assigneeDialog v-if="isAssign" :assigneeData="currentAssigneeData" @afterAsigned="getAllApproval()" />
  </div>
</template>

<script>
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import Progress from "../assets/image/process.svg";
import chevronSvg from "../assets/image/Chevron.svg"
import tabs from "../components/utilComponents/tabs.vue"
import { mapGetters, mapState } from 'vuex';
import assigneeDialog from './approve-panel/assigneedialog.vue';

const sortArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
</svg>
`

const upArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 primary-color">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>`

const downArrow = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 primary-color">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
`
export default {
  components: { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, CheckIcon, ChevronUpDownIcon, tabs, assigneeDialog },
  data() {
    return {
      fromDate: '',
      toDate: '',
      status: '',
      application: '',
      panNo: '',
      mobileNo: '',
      applicationSummary: [
        { type: 'Pending for Approval', count: '0' },
        { type: 'In Progress', count: '0' },
        { type: 'Approved', count: '0' },
        { type: 'Completed', count: '0' },
        { type: 'Rejected', count: '0' }
      ],
      statusType: {},
      tableHeads: [
        { name: "S.No", value: '', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Name", value: 'customer_name', class: "text-left", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-start items-center' },
        { name: "Application ID", value: 'opportunity_id', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "PAN No", value: 'fsl_pan_no', class: "text-center", sortable: true, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Mobile No", value: 'fsl_mobile_num', class: "text-center", sortable: true, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Ref ID", value: 'reference_id', class: "text-center", sortable: true, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Referal Name", value: 'referral_name', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Branch", value: 'fsl_branch', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Designation", value: 'designation', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Status", value: 'status', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Assigned to", value: 'assigned_person_name', class: "text-center", sortable: false, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Date", value: 'time', class: "text-center", sortable: true, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
        { name: "Hours consumed", value: 'time', class: "text-center", sortable: true, isSort: false, isdesc: true, alignment: 'flex justify-center items-center' },
      ],
      Progress,
      chevronSvg,
      currentTab: 0,
      currentAssigneeData: '',
      imageTest: 'https://ekyc.cholasecurities.com/uat/assets/headTree-a3444e58.svg',
      currentDate: new Date().toISOString().split('T')[0],
      popover: {
        visibility: 'click',
        placement: 'bottom',
      },
      sortArrow,
      pagination: {
        sortBy: null,
        descending: false
      },
      isHover: false,
      currentIdx: -1,
      upArrow, downArrow
    }
  },
  computed: {
    ...mapGetters('approval', ['getApprovalList', 'getIsLoader']),
    ...mapState('approval', ['isAssign']),
    ...mapGetters('login', ["getUserData"]),
    minDate() {
      const today = new Date();
      today.setDate(today.getDate() - 30);
      return today;
    },
    
  },
  methods: {
    getCount(status){
      let count = 0
      if(this.getApprovalList && this.getApprovalList.length > 0){
      let statusArr = this.getApprovalList.filter(el => {
        if(el.status){
        el.status = el.status.toString().toLowerCase()
         return el.status.includes(status.toString().toLowerCase())
        }
        
      })
      count = statusArr.length
      }
      return count
    },
    async goToApprovalPage(data) {
      if (this.getUserData?.Role == 'RM') return
      if (data && data.fsl_assign_to && data.opportunity_id) {
        this.$router.push(`/approvepanel?id=${data?.opportunity_id}&from=${this.$route.fullPath.toString().replace('/', '')}`).catch(() => { })
          this.$store.commit('setQuries', { data: { tab: 0 }, action: 'change', overRideKey: 'approvepanel' })
          localStorage.setItem('selecteditem', JSON.stringify(data))
      } else {
        if (this.getUserData?.Role != 'RM') {
          this.currentAssigneeData = data
          this.$store.commit('approval/setIsAssign', true)
        } else {
          let tempToaster = {
            "title": "",
            "type": "danger",
            "message": "The Approval Journey of this has not begun yet. Please wait for the KYC team to start their approval process.",
            "duration": 4500
          }
          this.$store.dispatch('errorLog/toaster', { data: tempToaster, position: '' })
        }
      }
    },

    changeTab(id) {
      this.$store.commit('setActiveTab', id)
      this.$store.commit('setQuries', { data: { tab: id }, action: 'change' })
      // id == 1 ?  this.$store.dispatch('approval/getApprovalList') : ''
      this.currentTab = id
    },
    getHours(data, dt2, type) {
      let diffTime = Math.abs(new Date().valueOf() - new Date(dt2).valueOf());
      let days = diffTime / (24 * 60 * 60 * 1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
      if(type != 'hours') {
        if (Number(days) != 0) {
          data.hours = `${days}d, ${hours}h : ${minutes}m`
          return data.hours
        } else if (Number(hours) != 0) {
          data.hours = `${hours}h:${minutes}m`
          return data.hours
        } else {
          data.hours = `${minutes}m`
          return data.hours
        }
      } else {
        return Number(diffTime)
      }
    },
    getFormat(date) {

      return window.formatDate(date, 'D&T')
    },
    getAllApproval() {
      let json = {
        from_date: this.fromDate.toISOString().split('T')[0],
        to_date: this.toDate.toISOString().split('T')[0],
        status: this.status,
        application_id: this.application,
        pan_no: this.panNo,
        mob_no: this.mobileNo
      }
      if (this.fromDate || this.toDate || this.status || this.application || this.panNo || this.mobileNo) {
        this.$store.dispatch('approval/getFilteredApprovalList', json)
      } else {
        this.$store.dispatch('errorLog/toaster', {
          data: {
            "title": 'Please select any field',
            "type": "danger",
            "message": '',
            "duration": 4500
          }, position: ''
        }, { root: true })
      }
    },
    getStatusType(type) {
      this.status = type.value
    },
    async setDefaultFilter() {
      this.fromDate = this.minDate,
        this.toDate = new Date(),
        this.status = ''
      this.statusType = { name: 'ALL', value: '' }
      this.getAllApproval()
    },

    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
      this.getDataFromApi()
    },

    getDataFromApi() {
      return new Promise((resolve, reject) => {
        const { sortBy, descending } = this.pagination
        let items = this.getApprovalList
        if (sortBy) {
          items = this.getApprovalList.sort((a, b) => {
            const sortA = sortBy == 'fsl_pan_no' || sortBy == 'reference_id' || sortBy == 'time' ? a[sortBy] : parseFloat(a[sortBy]?.toString()?.replace(/,/g, ''))
            const sortB = sortBy == 'fsl_pan_no' || sortBy == 'reference_id' || sortBy == 'time' ? b[sortBy] : parseFloat(b[sortBy]?.toString()?.replace(/,/g, ''))
            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
          this.$store.commit('approval/setApprovalList', items)
        }
        this.tableHeads.findIndex((idex) => {
          idex.value == sortBy ? (idex.isSort = true) : (idex.isSort = false);
          idex.value == sortBy ? (idex.isdesc = descending) : "";
        });
      })
    },

    getTimeTdClass(time) {
      let _class = 'bg-white'
      let _hours = this.getHoursOnly(time)
      if(time && time != " ") {
        if(_hours < 1) return 'bg-[#79b38e] !text-[#384f40]'
        else if(_hours <= 24) return 'bg-[#f1e3ad] !text-[#6c654b]'
        else if(_hours >= 24) return 'bg-[#d98383] !text-[#6a3d3d]'
      } else {
        return _class
      }
    },
    getHoursOnly(time) {
      var date1 = new Date(time);
      var date2 = new Date();
      var timestamp1 = date1.getTime();
      var timestamp2 = date2.getTime();
      var timeDiff = Math.abs(timestamp2 - timestamp1);
      var hoursDiff = timeDiff / (1000 * 3600);
      return Math.round(hoursDiff)
    },
  },
  created() {
    this.changeTab(0)
    this.setDefaultFilter()
  },
}
</script>
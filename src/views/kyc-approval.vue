<template>
  <tabs class="mx-4" @activeTab="changeTab"/>
  <div class="p-4">
    <div class="flex gap-3 flex-wrap">
      <input type="date" v-model="fromDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8">
      <input type="date" v-model="toDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8">
      <div>
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
                <ListboxOption v-slot="{ active, selected }" v-for="status in statusList" :key="status.name" :value="status" as="template">
                  <li :class="[ active ? 'bg-[#F0F6FD] text-[#0081B8]' : 'text-gray-900','relative cursor-pointer select-none py-2 pl-10 pr-4']">
                    <span :class="[ selected ? 'font-medium' : 'font-normal','block truncate text-xs']" >{{ status.name }}</span>
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
      <input type="text" v-model="panNo" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" placeholder="Search: PAN No.">
      <input type="text" v-model="mobileNo" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" placeholder="Search: Mobile No.">
    </div>

  <div class="bg-white py-4 px-8 my-6 rounded-lg flex gap-2 flex-wrap justify-between" v-if="currentTab == 0">
      <div v-for="(item,id) in applicationSummary" :key="id">
          <div class="flex flex-col gap-2 justify-center items-center">
              <div class="text-xs">{{ item.type }}</div>
              <div class="text-lg font-bold" :class="{ 'text-purple-700' : item.type == 'In Progress', 'text-gray-800' : item.type == 'Pending for Approval', 'text-blue-600' : item.type == 'Approved', 'text-green-600' : item.type == 'Completed', 'text-red-600' : item.type == 'Rejected'}">{{ item.count }}</div>
          </div>
      </div>
  </div>
  <div class="my-4" v-if="currentTab == 1 && !getIsLoader && getApprovalList.length > 0">
    <table class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg">
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr>
          <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap" >
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, id) in getApprovalList" :key="id" class="border-b cursor-pointer hover:bg-gray-50" @click="goToApprovalPage(i)">
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ id + 1 }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-left">
            {{ i.customer_name ? i.customer_name : 'NA' }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.opportunity_id ? i.opportunity_id : 'NA' }}
          </td>
          <td class="flex py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
            {{ i.fsl_pan_no ? i.fsl_pan_no : 'NA' }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i['current phase'] ? i['current phase'] : 'NA' }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.fsl_mobile_num ? i.fsl_mobile_num : 'NA'  }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.assigned_person_name ? i.assigned_person_name : '' }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.time && i.time != " "  ? getHours(i.time) : 'NA' }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="!getIsLoader" class="flex items-center justify-center min-h-[50vh]">No Records Found</div>
  <assigneeDialog v-if="isAssign" :assigneeData="currentAssigneeData"/>
  </div>
</template>

<script>
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import Progress from "../assets/image/process.svg";
import chevronSvg from "../assets/image/Chevron.svg"
import tabs from "../components/utilComponents/tabs.vue"
import { mapGetters,mapState } from 'vuex';
import assigneeDialog from './approve-panel/assigneeDialog.vue';
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
              { type: 'In Progress', count: '0' },
              { type: 'Pending for Approval', count: '0' },
              { type: 'Approved', count: '0' },
              { type: 'Completed', count: '0' },
              { type: 'Rejected', count: '0' }
          ],
          statusList: [
              { name: 'In Progress' },
              { name: 'Pending' },
              { name: 'Approved' },
              { name: 'Completed' },
              { name: 'Rejected' }
          ],
          statusType : {  },

          tableHeads: [
            { name: "S.No", class: "text-center" },
            { name: "Customer Name", class: "text-left" },
            { name: "Application ID", class: "text-center" },
            { name: "PAN No", class: "text-center" },
            { name: "Status", class: "text-center" },
            { name: "Mobile No", class: "text-center" },
            { name: "Assigned to", class: "text-center" },
            { name: "Hours consumed", class: "text-center" },
          ],
          tableData: [
            {
              SNO: "1",
              applicationId: '2',
              CustomerName: "Akash",
              panNo: "JSJPS0302D",
              Currentphases: "Mobile Verification",
              Progress: "",
              Phases: "3",
              Hoursconsumed: "8.24 Hr ",
              Inferredprogress: "On Track",
              assignedTo: "Akash",
              mobileNo: '8783423442'
            },
            {
              SNO: "2",
              applicationId: '3',
              CustomerName: "Akash",
              panNo: "JSJPS0302D",
              Currentphases: "Email Verification",
              Progress: "",
              Phases: "3",
              Hoursconsumed: "8.24 Hr",
              assignedTo: "Akash",
              mobileNo: '8783423442'
            },
            {
              SNO: "3",
              applicationId: '4',
              CustomerName: "Akash",
              panNo: "JSJPS0302D",
              Currentphases: "PAN Verification",
              Progress: "",
              Phases: "5",
              Hoursconsumed: "8.24 Hr",
              assignedTo: "Akash",
              mobileNo: '8783423442'
            },
            {
              SNO: "4",
              applicationId: '5',
              CustomerName: "Akash",
              panNo: "JSJPS0302D",
              Currentphases: "Address",
              Progress: "",
              Phases: "8",
              Hoursconsumed: "8.24 Hr",
              assignedTo: "Akash",
              mobileNo: '8783423442'
            },
          ],
          Progress,
            chevronSvg,
          currentTab : 0,
          currentAssigneeData: '',
          imageTest: 'https://ekyc.cholasecurities.com/uat/assets/headTree-a3444e58.svg'
      }
  },
  computed: {
        ...mapGetters('approval', ['getApprovalList', 'getIsLoader']),
        ...mapState('approval', ['isAssign'])
    },
  methods: {
    async goToApprovalPage(data) {
      if(data && data.fsl_assign_to && data.opportunity_id) {
        await this.$store.dispatch('approval/getCustomerData', data?.opportunity_id).finally(()=> {
          this.$router.push(`/approvepanel?id=${data?.opportunity_id}`).catch(() => { })
          this.$store.commit('setQuries', {data: {tab: 0}, action: 'change' , overRideKey : 'approvepanel'})
          
        })
      }else{
        this.currentAssigneeData = data
        this.$store.commit('approval/setIsAssign',  true)
      }
    },

    changeTab(id) {
      this.$store.commit('setActiveTab', id)
      this.$store.commit('setQuries', {data: {tab: id}, action: 'change'})
      id == 1 ?  this.$store.dispatch('approval/getApprovalList') : ''
      this.currentTab = id
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
  },
  created() {
    this.$store.commit('setActiveTab', this.$store.state.queries['kycapproval'].query.tab)
    this.changeTab(this.$store.state.queries['kycapproval'].query.tab)
  },
}
</script>
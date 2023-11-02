<template>
  <div class="p-4">
    <div class="flex gap-3 flex-wrap">
      <input type="date" v-model="fromDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8">
      <input type="date" v-model="toDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8">
      <!-- <input type="text" v-model="status" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" placeholder="Search: status"> -->
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

  <div class="bg-white py-4 px-8 my-6 rounded-lg flex gap-2 flex-wrap justify-between">
      <div v-for="(item,id) in applicationSummary" :key="id">
          <div class="flex flex-col gap-2 justify-center items-center">
              <div class="text-xs">{{ item.type }}</div>
              <div class="text-lg font-bold" :class="{ 'text-purple-700' : item.type == 'In Progress', 'text-gray-800' : item.type == 'Pending for Approval', 'text-blue-600' : item.type == 'Approved', 'text-green-600' : item.type == 'Completed', 'text-red-600' : item.type == 'Rejected'}">{{ item.count }}</div>
          </div>
      </div>
  </div>

  <div>
    <table class="w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg">
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr>
          <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 px-3 text-[13px] font-medium text-center  primaryColor whitespace-nowrap" >
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, id) in tableData" :key="id" class="border-b cursor-pointer hover:bg-gray-50" @click="goToApprovalPage(i)">
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.SNO }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.CustomerName }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.applicationId }}
          </td>
          <td class="flex py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
            {{ i.panNo }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[140px] cursor-default"
              :class="i.Currentphases == 'Mobile Verification'
                ? 'mv-clr'
                : i.Currentphases == 'Email Verification'
                  ? 'ev-clr'
                  : i.Currentphases == 'PAN Verification'
                    ? 'pan-clr'
                    : i.Currentphases == 'Address'
                      ? 'ad-clr'
                      : i.Currentphases == 'Personal Profile'
                        ? 'pp-clr'
                        : i.Currentphases == 'Bank Account'
                          ? 'ba-clr'
                          : i.Currentphases == 'Segment Selection'
                            ? 'ss-clr'
                            : i.Currentphases == 'Payment'
                              ? 'pay-clr'
                              : i.Currentphases == 'Nominee'
                                ? 'nom-clr'
                                : i.Currentphases == 'Document Upload'
                                  ? 'du-clr'
                                  : i.Currentphases == 'IPV'
                                    ? 'ipv-clr'
                                    : i.Currentphases == 'PDF Generation'
                                      ? 'pdf-clr'
                                      : i.Currentphases == 'ESIGN'
                                        ? 'esign-clr'
                                        : 'nrml'
                ">
              {{ i.Currentphases }}
            </button>
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.mobileNo  }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.assignedTo }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.Hoursconsumed }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import Progress from "../assets/image/process.svg";
import completed from "../assets/image/100percent.svg";
import chevronSvg from "../assets/image/Chevron.svg"
export default {
  components: { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption, CheckIcon, ChevronUpDownIcon },
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
            { name: "Customer Name", class: "text-center" },
            { name: "Application ID", class: "text-center" },
            { name: "PAN No", class: "text-center" },
            { name: "Current Phase", class: "text-center" },
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
          Progress, completed, chevronSvg
      }
  },
  methods: {
    goToApprovalPage() {
      this.$router.push('/approvepanel').catch(() => { })
    }
  },
}
</script>
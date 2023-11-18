<style>
select option {
  max-width: 100px !important;
  white-space: normal !important;
}
</style>
<template>
    <TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-10 " @close="sentRemarks('close')" >
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel
                  class="w-full max-w-lg transform rounded radius p-6 text-left align-middle bg-white">
                  <DialogTitle as="h3" class="text-base pb-2 font-medium leading-6 primaryColor">
                   <div class="grid">
                    
                    <div v-if="remarksArray.length > 0">
                      <Listbox as="div" v-model="remarks">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Remarks</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <span class="block ">{{ remarks }}</span>
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="(person , id) in remarksArray" :key="id" :value="person" v-slot="{ active, remarks }">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
              <span :class="[remarks ? 'font-semibold' : 'font-normal', 'block ']">{{ person }}</span>

              <span v-if="remarks" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
                    </div>
                    
                    <div  v-else ><label for="reject_content" id="reject_content_label">Remarks</label>
                      <textarea rows="5" name="" id="reject_content" class="w-full border rounded my-2" v-model="remarks" autofocus></textarea>
                    </div>

    
                   </div>
                  </DialogTitle>
  
                  <div class="mt-8 flex justify-end gap-2">
                    <button type="button" class="themeBtn flex items-center justify-center min-w-[86px]" id="logout_btn" @click="sentRemarks('call')">
                      <span v-if="!getIsRejectLoader">Confirm</span>
                      <btnLoader v-else/>
                    </button>
                    <button type="button" class="cancelBtn" id="logout_cancel_btn" @click="sentRemarks('close')" >
                      Cancel
                    </button>
                  </div>
                </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { mapGetters } from 'vuex'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
export default {
  emits:['send-remarks'],
  name: 'reject-dialog',
  components:{
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, CheckIcon, ChevronUpDownIcon
  },
  data(){
    return {
      remarks : '',
      remarksArray:[]
    }
  },
  props:{
    isOpen: {
      type: Boolean
    },
    activeTab:{
      type: String
    }
  },
  computed: {
        ...mapGetters('approval', ['getIsRejectLoader']),
        ...mapGetters("tabs", [
      "getKycApprovalTabs",
      "getKycPanelTabs",
      "getOpportunityTabs"
    ]),
    },
  methods:{
    sentRemarks(key){
      let isOpen = false
      key == 'close' ? this.remarks = '' : ''
      key == 'call' && !this.remarks ? isOpen = true : ''
      this.$emit('send-remarks', {remarks:  this.remarks, isOpen: isOpen})
    }
  },
  mounted(){
    this.remarks = ''
    this.remarksArray = this.getKycApprovalTabs[this.activeTab].remarks
  }
}
</script>
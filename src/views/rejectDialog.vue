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
                  class="w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white">
                  <DialogTitle as="h3" class="text-base pb-2 font-medium leading-6 primaryColor">
                   <div class="grid">
                    <label for="reject_content" id="reject_content_label">Remarks</label>
                    <textarea rows="5" name="" id="reject_content" class="w-full border rounded my-2" v-model="remarks" autofocus></textarea>
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
export default {
  emits:['send-remarks'],
  name: 'reject-dialog',
  components:{
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
  },
  data(){
    return {
      remarks : ''
    }
  },
  props:{
    isOpen: {
      type: Boolean
    },

  },
  computed: {
        ...mapGetters('approval', ['getIsRejectLoader'])
    },
  methods:{
    sentRemarks(key){
      key == 'close' ? this.remarks = '' : ''
      this.$emit('send-remarks', {remarks:  this.remarks, isOpen: false})
    }
  },
  mounted(){
    this.remarks = ''
  }
}
</script>
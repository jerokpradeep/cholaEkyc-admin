<template>
    <TransitionRoot as="template" :show="$store.state.approval.isAssign">
      <Dialog as="div" class="relative z-10 " @close="close()" >
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel
                  class="w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white">
                  <DialogTitle as="h3" class="text-base pb-2 font-medium leading-6 primaryColor">
                    <p class="secondaryColor" id="logout_content">Assign this ticket to myself. </p>
                  </DialogTitle>
  
                  <div class="mt-8 flex justify-end gap-2">
                    <button type="button" class="themeBtn" id="logout_btn" @click="callService()">
                      Yes
                    </button>
                    <button type="button" class="cancelBtn" id="logout_cancel_btn" @click="close()" >
                      No
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
export default {
  name: 'assignee-dialog',
  components:{
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
  },
  props:{
    assigneeData: Object
  },
  methods:{
    close(){
      this.$store.commit('approval/setIsAssign',  false)
    },
    callService(){
      this.$store.dispatch('approval/callAssignee', {id: this.assigneeData.opportunity_id,userId: this.$store.state.login.userData.user,sessId: this.$store.state.login.userData.sid, token: this.$store.state.login.userData.tempToken, assignTo:this.$store.state.login.userData.user})
    }
  }
}
</script>
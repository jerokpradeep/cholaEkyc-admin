<template>
<TransitionRoot as="template" :show="isOpen">
      <Dialog as="div" class="relative z-10 " @close="close()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
          leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#18181b] dark:text-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-[650px] sm:p-6">
                <div class="">
  
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900 mb-4" id="cancel_order_dialog">
                      {{ reasonData.title }} Reason
                    </DialogTitle>
                   <div>{{ reasonData.reason }}</div>
                  </div>
                </div>
                <div class="flex items-center justify-end">
                  <button type="submit" class="flex justify-center items-center min-w-[100px] h-[32px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7] mt-4" @click="close()">Close</button>

                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>

<script lang="ts">
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { defineComponent, PropType } from 'vue';
export default defineComponent({
    name:'push_to_reason_dialog',
    emits:['push_evt'],
    components:{Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot},
    props:{
        reasonData: {
            type: Object  as PropType<any>,
            default:'',
            required: true
        },
        isOpen: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods:{
        close(){
            this.$emit('push_evt', false)
        }
    }
})
</script>
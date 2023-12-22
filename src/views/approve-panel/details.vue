<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-6">
      <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
        <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="mobileNo"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Email ID</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="emailId"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="startDate"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Updated On</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="updatedOn"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Mode of Application</label>
            <div class="mt-2">
              <input type="text" id="panNumber" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="modeOfApplication"/>
            </div>
          </div>

          <div class="sm:col-span-3" v-if="referrer">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Referrer</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="referrer"/>
            </div>
          </div>
      </div>
      <div class="my-6" v-if="getIsReject">
        <button @click="sendMail()" class="flex justify-center items-center min-w-[130px] h-[36px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7]">
          <btnLoader v-if="getIsMailLoader"/>
          <span v-else>Send Rejection Mail</span>
        </button>
      </div>
      
    </div>
    <div class="col-span-6">
      <stage_table />
    </div> 
  </div>
</template>

<script>
import stage_table from "./stage-table.vue"
import { mapGetters } from 'vuex'
export default {
    components: { stage_table },
    data() {
        return {
            mobileNo: '',
            emailId: '',
            startDate: '',
            updatedOn: '',
            modeOfApplication: '',
            referrer: '',
            selectedData: ''
        }
    },
    props: {
      cutomerData: { type: Object }
    },
    computed: {
      ...mapGetters('approval', ['getIsMailLoader', 'getProgressPercentage','getIsReject'])
    },
    methods: {
      sendMail() {
        this.$store.dispatch('approval/sendRejectionMail')
      }
    },
    mounted() {
    if (localStorage.getItem('selecteditem') && localStorage.getItem('selecteditem') != "undefined") {
      this.selectedData = JSON.parse(localStorage.getItem('selecteditem'))
      this.referrer = this.selectedData.referral_name
    }
    this.mobileNo = this.cutomerData?.opportunity_data?.fsl_mobile_num
    this.emailId = this.cutomerData?.opportunity_data?.fsl_email_id
    this.startDate = window.formatDate(this.cutomerData?.opportunity_data?.creation, 'D&T')
    this.updatedOn = window.formatDate(this.cutomerData?.opportunity_data?.modified, 'D&T')
    this.modeOfApplication = this.cutomerData?.opportunity_data?.fsl_mode_of_application || this.cutomerData?.opportunity_data?.fsl_modeofapplication

  },
}
</script>
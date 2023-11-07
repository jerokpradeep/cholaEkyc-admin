<template>
    <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div class="sm:col-span-3">
              <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Name as per Esign</label>
              <div class="mt-2">
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="nameAsEsign"/>
              </div>
            </div>
        </div>
        </div>
        <div class="col-span-6">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg my-4">
            <iframe :src="getDocumentData" frameborder="1" class="w-full" style="height: 370px !important;"></iframe>
          </div>
        </div>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            nameAsEsign: ''
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData', 'getDocumentData']),
    },
    methods: {
        
    },
    mounted() {
        let docType = 'ESIGN_DOCUMENT'
        let type = 'preview'
        this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: type , docType : docType })
        this.nameAsEsign = this.getCustomerData?.opportunity_data?.fsl_esiged_name
    },
}

</script>
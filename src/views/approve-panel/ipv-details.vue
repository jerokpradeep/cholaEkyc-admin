<template>
    <div class="grid grid-cols-12">
        <div class="col-span-6">
          <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 md:col-span-2">
            <div class="sm:col-span-3">
              <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Capture Date & Time</label>
              <div class="mt-2">
                  <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="capturedDate"/>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Latitude</label>
              <div class="mt-2">
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="latitude"/>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Longitude</label>
              <div class="mt-2">
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="longitude"/>
              </div>
            </div>

            <div class="sm:col-span-3 flex items-end">
              <button type="button" class="rounded-md bg-white border px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline" @click="openMap()">MAP View</button>
            </div>

          </div>

        </div>
        
        <div class="col-span-6">  
          <div class="rounded-lg my-4 h-[320px]">
            <preview_file :previewType="getDocumentData.type" :previewData="getDocumentData.data" :isPreBtn="true"/>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            capturedDate: '',
            latitude: '',
            longitude: '',
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData', 'getDocumentData']),
    },
    methods: {
      openMap() {
          // var map = new google.maps.Map(document.getElementById('map'), {
          //    center: {lat: this.latitude, lng: this.longitude},
          //    zoom: 8
          //  });
          if(this.latitude && this.longitude) {
            window.open(`https://www.google.com/maps/?q=${this.latitude},${this.longitude}`, "_target")
          }
      }
    },
    mounted() {
      if(this.getCustomerData && this.getCustomerData.document_data && Array.isArray(this.getCustomerData.document_data)) {
      let ipvArray = this.getCustomerData.document_data.filter((el)=>{
        return el.document_type.toString().toLowerCase() == 'ipv'
      })
      let ipvData;
      ipvArray && ipvArray.length > 0 ? ipvData = ipvArray[0] : ''
      if(ipvData){
        this.capturedDate =  window.formatDate(ipvData?.creation,'D&T')
        this.latitude =  ipvData?.latitude
        this.longitude =  ipvData?.longitude
      }
        
      } 
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=IPV&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'preview' , docType : 'IPV' })
    },
}
</script>
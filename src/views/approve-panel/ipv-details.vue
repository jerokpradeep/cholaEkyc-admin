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
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg my-4 h-[320px]">
            <VueCropper v-if="getDocumentData" ref="image1" :img="getDocumentData" 
                :info="true" :canMove="true" :canScale="true" :autoCrop="false"
                :outputSize="5" alt="Source Image" class="cropper" >
            </VueCropper>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
export default {
  components: { VueCropper },
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
      if(this.getCustomerData && this.getCustomerData.document_data) {
        this.capturedDate =  window.formatDate(this.getCustomerData?.document_data?.creation,'D&T')
        this.latitude =  this.getCustomerData.document_data?.latitude
        this.longitude =  this.getCustomerData.document_data?.longitude
        
      } 
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=IPV&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: 'preview' , docType : 'IPV' })
    },
}
</script>
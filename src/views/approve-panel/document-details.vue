<template>
    <div class="pb-12 flex flex-wrap gap-4" v-if="getDocuments && getDocuments.length > 0">
        <table class="bg-white w-[50%] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                    {{ head.name }}
                </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, id) in getDocuments" :key="id" class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                        {{ id + 1 }}
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                       <div class="flex gap-2 items-center">
                            <div> {{ i['Document Type'] }}</div>
                       </div>
                    </td>
                    <td v-if="$route.query?.from != 'opportunity' && getUserData?.Role != 'RM'">
                        <div class="flex gap-3 items-center" >
                            <a  class=" text-sm " :class="i.status == 'Approved' ? 'text-teal-500' : i.status == 'Rejected' ? 'text-orange-500' : ''"> {{ i.status ? i.status : '' }}</a>
                        </div>
                    </td>
                   
                    <td>
                        <a class="underline text-sm text-purple-500" @click="previewDocument( i['Document Type'])">Preview</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-blue-500"  download @click="getDocumentSource( i['Document Type'], 'download')">Download</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="col-span-6 w-[45%]">  
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="my-4">
            <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow" v-if="this.documentName != 'ESIGN_DOCUMENT' && this.documentName != 'PROTECTED_ESIGN_DOCUMENT' && getDocumentData && this.documentName != 'INCOME_PROOF'"  @click="$router.push({path:'/preview', query: $route.query})">Compare documents</button>
          </div>
            <div class="rounded-lg h-[320px]" v-if="this.documentName != 'ESIGN_DOCUMENT' && this.documentName != 'PROTECTED_ESIGN_DOCUMENT' && getDocumentData && this.documentName != 'INCOME_PROOF'">
                <!-- <img class="h-full w-full cursor-pointer object-contain" :src="getDocumentData" alt="panImage"> -->
                <VueCropper v-if="getDocumentData" ref="image1" :img="getDocumentData" 
                    :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
                    :outputSize="1" alt="Source Image" class="cropper" >
                </VueCropper>
            </div>
          <div v-else>
            <iframe :src="getDocumentData" frameborder="1" class="w-full" style="height: 370px !important;"></iframe>
          </div>
          
        </div>
    </div>
    <div v-else class="flex items-center justify-center min-h-[50vh]">No Documents Found</div>
    <rejectDialog v-if="isRejectDialog" :is-open="isRejectDialog" :active-tab="'7'" @send-remarks="getRemarks"/>
</template>

<script>

import { mapGetters } from 'vuex';
import rejectDialog from '../rejectDialog.vue';
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
export default {
  components: { VueCropper },
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Document Name", class: "text-left" },
                { name: "Status", class: "text-left" },
                { name: "Preview", class: "text-left" },
                { name: "Download", class: "text-left" },
            ],
            documentName: 'PAN',
            isRejectDialog: false,
            remarks: '',
            currentDoc: '',
            tickSvg, cancelSvg
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData', 'getDocumentData', 'getDocuments', 'getIsDocsLoader']),
      ...mapGetters('login', ['getUserData'])
    },
    components:{
        rejectDialog
    },
    methods: {
      getDocumentSource(docType , type) {
        this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: type , docType : docType })
      },
      previewDocument(docName) {
        this.documentName = docName
        this.getDocumentSource(docName, 'preview')
      },
      getRemarks(data){
        this.remarks = data.remarks
        this.isRejectDialog = data.isOpen
        if(this.remarks){
            this.$store.dispatch('approval/formatJsonDoc', {tab: 7 , status: 'Rejected' , remarks: this.remarks , attachmentType: this.currentDoc})    
        }
      },

      callReject(item){
        this.currentDoc = item
        this.remarks = ''
        this.isRejectDialog = true
      },

      async resetDocStatus(status, docType) {
        await this.$store.dispatch('approval/formatJsonDoc', {tab: this.currentTab , status: status , remarks: '', attachmentType: docType})
        this.remarks = ''
      }
      
    },
    unmounted() {
        this.$store.commit('approval/setDocumentData', '') 
        this.$store.commit('approval/setDocumentDataClone', '') 
    },
    
    mounted(){
        this.previewDocument(this.documentName)
    },
    async created() {
      await this.$store.dispatch('approval/getDocuments');
      
      if(this.$route.query?.from == 'opportunity' || this.getUserData?.Role == 'RM'){
        let rmHeader = this.tableHeads.filter(el => el.name != 'Status')
        this.tableHeads = rmHeader
      }
      
    }
}
</script>
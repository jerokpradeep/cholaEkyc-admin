<template>
    <div class="pb-12 flex flex-wrap gap-4">
        <table class="bg-white w-[50%] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                    {{ head.name }}
                </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, id) in tableData" :key="id" class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                        {{ id + 1 }}
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ i.docName }}
                    </td>
                    <td>
                        <a class="underline text-sm text-teal-500" @click="$store.dispatch('approval/formatJson', {tab: 7 , status: 'Approved' , remarks: '' , attachmentType : i.docName})">Approve</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-orange-500" @click="callReject(i.docName)">Reject</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-purple-500" @click="previewDocument(i.docName)">Preview</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-blue-500"  download @click="getDocumentSource(i.docName, 'download')">Download</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="col-span-6 w-[45%]">  
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg h-[320px]" v-if="this.documentName != 'ESIGN_DOCUMENT' && this.documentName != 'PROTECTED_ESIGN_DOCUMENT' && getDocumentData">
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
    <rejectDialog v-if="isRejectDialog" :is-open="isRejectDialog" @send-remarks="getRemarks"/>
</template>

<script>

import { mapGetters } from 'vuex';
import rejectDialog from '../rejectDialog.vue';
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
export default {
  components: { VueCropper },
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Document Name", class: "text-left" },
                { name: "Approve", class: "text-left" },
                { name: "Reject", class: "text-left" },
                { name: "Preview", class: "text-left" },
                { name: "Download", class: "text-left" }
            ],
            tableData: [
                {
                docName: 'PAN',
                },
                {
                docName: 'CANCELLED_CHEQUE_OR_STATEMENT',
                },
                {
                docName: 'SIGNATURE',
                },
                {
                docName: 'IPV',
                },
                {
                docName: 'ESIGN_DOCUMENT',
                },
                {
                docName: 'PROTECTED_ESIGN_DOCUMENT',
                }
            ],
            documentName: 'PAN',
            isRejectDialog: false,
            remarks: '',
            currentDoc: ''
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData', 'getDocumentData']),
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
                this.$store.dispatch('approval/formatJson', {tab: 7 , status: 'Rejected' , remarks: this.remarks , attachmentType: this.currentDoc})
            }
      },
      callReject(item){
        this.currentDoc = item
        this.remarks = ''
        this.isRejectDialog = true
      },
      goToPreview(type) {
        if(type == 'pdf') {
            this.$router.push('/preview?ispdf=true')
        } else {
            this.$router.push('/preview')
        }
        
      }
      
    },
    mounted(){
        this.previewDocument(this.documentName)
    }
}
</script>
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
                        <div class="flex gap-2 items-center" >
                            <a  class=" text-sm " :class="i.status == 'Approved' ? 'text-teal-500' : i.status == 'Rejected' ? 'text-orange-500' : ''"> {{ i.status ? i.status : '' }}</a>
                            <span v-if="i.status == 'Rejected'" v-html="infoSvg" :title="i.remarks" @click="showDialog(i)"></span>
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
          <preview_file :previewType="getDocumentData.type" :previewData="getDocumentData.data" :isPreBtn="true" :preFerence="documentName"/>
        </div>
    </div>
    <div v-else class="flex items-center justify-center min-h-[50vh]">No Documents Found</div>
    <reasonViewDialog v-if="getIsDocRejReasonDialog" :rejectReason="getDocRejReason"/>
</template>

<script>

import { mapGetters } from 'vuex';
const tickSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const cancelSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
`
const infoSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
`
import reasonViewDialog from './docRejReasonDialog.vue'
export default {
    components: { reasonViewDialog },
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
            tickSvg, cancelSvg, infoSvg
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData', 'getDocumentData', 'getDocuments', 'getIsDocsLoader','getIsDocRejReasonDialog','getDocRejReason']),
      ...mapGetters('login', ['getUserData'])
    },
    methods: {
      getDocumentSource(docType , type) {
        this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: type , docType : docType })
      },
      previewDocument(docName) {
        this.documentName = docName
        this.getDocumentSource(docName, 'preview')
      },
      showDialog(data) {
        this.$store.commit('approval/setIsDocRejReasonDialog', true) 
        this.$store.commit('approval/setDocRejReason', data.remarks) 
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
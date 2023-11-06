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
                        {{ i.sno }}
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ i.docName }}
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ i.type }}
                    </td>
                    <td>
                        <a class="underline text-sm text-teal-500">Approve</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-orange-500">Reject</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-purple-500" @click="previewDocument(i.docName)">Preview</a>
                    </td>
                    <td>
                        <a class="underline text-sm text-blue-500" :href="getDocumentSource(i.docName)" download>Download</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="col-span-6 w-[45%]" >  
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg my-4" v-if="this.documentName != 'ESIGN_DOCUMENT' && this.documentName != 'PROTECTED_ESIGN_DOCUMENT'">
            <img class="max-w-full h-auto" :src="getDocumentSource(this.documentName)" alt="panImage">
          </div>
          <div v-else>
            <iframe :src="getDocumentSource(this.documentName)" frameborder="1"></iframe>
          </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Document Name", class: "text-left" },
                { name: "Type", class: "text-left" },
                { name: "Approve", class: "text-left" },
                { name: "Reject", class: "text-left" },
                { name: "Preview", class: "text-left" },
                { name: "Download", class: "text-left" }
            ],
            tableData: [
                {
                sno: "1",
                docName: 'PAN',
                type: 'jpg'
                },
                {
                sno: "2",
                docName: 'CANCELLED_CHEQUE_OR_STATEMENT',
                type: 'jpg'
                },
                {
                sno: "3",
                docName: 'SIGNATURE',
                type: 'jpg'
                },
                {
                sno: "4",
                docName: 'IPV',
                type: 'jpg'
                },
                {
                sno: "5",
                docName: 'ESIGN_DOCUMENT',
                type: 'jpg'
                },
                {
                sno: "6",
                docName: 'PROTECTED_ESIGN_DOCUMENT',
                type: 'jpg'
                }
            ],
            documentName: 'PAN'
        }
    },
    computed: {
      ...mapGetters('approval', ['getCustomerData']),
    },
    methods: {
      getDocumentSource(docType) {
        return `https://uattrade.cholasecurities.com/uat/ekycAdmin/Download/getFile?applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login.userData['tempToken']}&sessId=${this.$store.state.login.userData['sid']}&token=${this.$store.state.login.userData['user']}`
      },
      previewDocument(docName) {
        this.documentName = docName
      }
    },
}
</script>
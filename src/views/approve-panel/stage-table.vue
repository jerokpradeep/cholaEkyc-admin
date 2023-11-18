<template>
    <div>
        <table class="bg-white w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                    <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                        {{ head.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       1
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        PAN
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['pan status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['pan status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['pan status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       2
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Profile
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['profile status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['profile status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['profile status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       3
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Address
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['address status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['address status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['address status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       4
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Bank
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['bank status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['bank status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['bank status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       5
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Segments
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['segment status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['segment status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['segment status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       6
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        IPV
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['IPV status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['IPV status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['IPV status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       7
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Nominees <span v-if="getStageData?.nominee?.length > 0">({{ getStageData?.nominee?.length }})</span>
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div v-if="getStageData?.nominee?.length">
                            <div v-for="(i, id) in getStageData?.nominee" :key="id">
                                <div class="flex gap-2 items-center">
                                    
                                    <div class="flex gap-2 items-center">
                                        <span>
                                            Nominee {{id + 1}} :
                                        </span>
                                        <span class="flex gap-2">
                                            <div>
                                                <div v-html="tickSvg" v-if="checkStatus(i.status) == 'Approved'"></div>
                                                <div v-html="cancelSvg" v-if="checkStatus(i.status) == 'Rejected'"></div>
                                            </div>
                                            {{ checkStatus(i.status) }}
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            NA
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       8
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Documents
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div v-if="getDocuments?.length">
                            <div v-for="(i, id) in getDocuments" :key="id">
                                <div class="flex gap-2 items-center">
                                    
                                    <div class="flex gap-2 items-center ">
                                        <span class="min-w-[260px] flex gap-2 items-center justify-between">
                                           <span>{{ i['Document Type'] }} </span> <span>:</span>
                                        </span>
                                        <span class="flex gap-2">
                                            <div>
                                                <div v-html="tickSvg" v-if="checkStatus(i.status) == 'Approved'"></div>
                                                <div v-html="cancelSvg" v-if="checkStatus(i.status) == 'Rejected'"></div>
                                            </div>
                                            {{ checkStatus(i.status) }}
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            NA
                        </div>
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       9
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        E-Sign Doc
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <div class="flex gap-2 items-center">
                            <div>
                                <div v-html="tickSvg" v-if="checkStatus(getStageData['Esign status']) == 'Approved'"></div>
                                <div v-html="cancelSvg" v-if="checkStatus(getStageData['Esign status']) == 'Rejected'"></div>
                            </div>
                            <div>
                                {{ checkStatus(getStageData['Esign status']) }}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
export default {
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Stage", class: "text-left" },
                { name: "Status", class: "text-left" },
            ],
            tableData: [
                {
                    sno: "1",
                    stage: 'Mobile',
                    status: 'Approved'
                },
                {
                    sno: "2",
                    stage: 'Email',
                    status: 'Approved'
                },
                {
                    sno: "3",
                    stage: 'PAN',
                    status: 'Updated'
                },
                {
                    sno: "4",
                    stage: 'Profile',
                    status: 'Updated'
                },
                {
                    sno: "5",
                    stage: 'Address',
                    status: 'Approved'
                },
                {
                    sno: "6",
                    stage: 'Bank',
                    status: 'Updated'
                },
                {
                    sno: "7",
                    stage: 'Segments',
                    status: 'Updated'
                },
                {
                    sno: "8",
                    stage: 'IPV',
                    status: 'Updated'
                },
                {
                    sno: "9",
                    stage: 'Nominees',
                    status: 'Updated'
                },
                {
                    sno: "10",
                    stage: 'Documents',
                    status: 'Updated'
                },
                {
                    sno: "11",
                    stage: 'E-Sign Doc',
                    status: 'Updated'
                }
            ],
            tickSvg, cancelSvg
        }
    },
    computed: {
        ...mapGetters('approval', ['getStageData', 'getDocuments', 'getDocumentData'])
    },
    methods: {
        checkStatus(data) {
            let d = data?.trim()
            return d ? d : 'Open'
        }
    },
    mounted() {
        if(this.$route.query?.id) {
            this.$store.dispatch('approval/getStageDetails', this.$route.query?.id)
        }
    }
}
</script>
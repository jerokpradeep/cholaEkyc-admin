<template>
    <div class="flex justify-start px-10 py-5">
        <button type="button"
            class="rounded-md min-w-[150px] bg-white border px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline"
            @click="this.$store.state.approval.backOfficeLoader ? '' : this.$store.dispatch('approval/callBo')">
            <btnLoader v-if="this.$store.state.approval.backOfficeLoader" /> <span v-else>Push To Backoffice</span>
        </button>
    </div>
    <table class="bg-white w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
        <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
            <tr>
                <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                    {{ head.name }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b cursor-pointer hover:bg-gray-50" v-for="(item, i) of this.getBoStatusList" :key="i">
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                   {{ i + 1 }}
                </td>
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                 {{ item.key }}
                </td>
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                    {{ item.value }}
                </td>
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                    {{ item.reason }}
                </td>
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative flex justify-center">
                    <button v-if="item.value == 'Failed'" @click="retryBo(item.key)" class="inline-block p-2 border  rounded " type="button"> <span class="flex gap-1 items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path> </svg>
                        {{ 'Retry' }}
                        </span>
                    </button>
                </td>
            </tr>
           
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            list: [
                {
                    name: 'LD Back office Push',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Client code',
                    status: 'Failed',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'NSE',
                    status: 'Success',
                    remarks: 'test',
                    Action: ''
                },
                {
                    name: 'BSE',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'KRA Upload',
                    status: 'Failed',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Digilocker XML upload',
                    status: 'Success',
                    remarks: 'test',
                    Action: ''
                },
                {
                    name: 'KRA Image Upload',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Push to BSEstarMF',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Push to BSEstarMF Fatca',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Push to BSEstarMF AOF',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'Push to Iwapp',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                },
                {
                    name: 'CKYC Data',
                    status: 'Success',
                    remarks: '',
                    Action: ''
                }
            ],
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Name", class: "text-left" },
                { name: "Status", class: "text-center" },
                { name: "Reason", class: "text-left" },
                { name: "Action", class: "text-center" },
            ],
        }
    },
    computed: {
        ...mapGetters('approval', ['getBoStatusList'])
    },
    methods: {
        async retryBo(type) {
            if(type == 'NSE UCC') {
                this.$store.dispatch('approval/nseUccUpload')
            } else if(type == 'BSE UCC') {
                this.$store.dispatch('approval/bseUccUpload')
            } else if(type == 'KRA UPLOAD') {
                this.$store.dispatch('approval/kraUpload')
            } else if(type == 'DIGILOCKER XML UPLOAD') {
                // this.$store.dispatch('approval/bseUccUpload')
            } else if(type == 'KRA IMAGE UPLOAD') {
                this.$store.dispatch('approval/kraFileUpload')
            } else if(type == 'BSE STAR UCC') {
                this.$store.dispatch('approval/bseMfUccUpload')
            } else if(type == 'BSE STAR FATCA') {
                this.$store.dispatch('approval/bseFatcaUpload')
            } else if(type == 'BSE STAR AOF') {
                this.$store.dispatch('approval/bseStarAOF')
            } else if(type == 'push to Iwapp') {
                this.$store.dispatch('approval/pushIwapp')
            }
        }
    },
    async created() {
        await this.$store.dispatch('approval/checkBoStatus')
    },
}
</script>
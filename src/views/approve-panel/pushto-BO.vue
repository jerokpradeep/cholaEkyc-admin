<template>
    <div v-if="isShowed">
        <div class="flex justify-start px-10 py-5" >
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
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left max-w-[250px]">
                    <button v-if="item.reason" @click="isOpen = true;reasonData={title: item.key , reason: item.reason}" class="inline-block p-2 border  rounded " type="button"> <span class="flex gap-1 items-center" >
                        
                        {{ 'Reason' }}
                        </span>
                    </button>
                    <!-- {{ item.reason }} -->
                </td>
                <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative flex justify-center ]">
                    <button v-if="item.value == 'Failed'" @click="retryBo(item.key)" class="inline-block p-2 border  rounded " type="button"> <span class="flex gap-1 items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white-500"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path> </svg>
                        {{ 'Retry' }}
                        </span>
                    </button>
                    <button v-if="item.key == 'Generate CKYC'" @click="checkStatus()" class="inline-block p-2 border  rounded " type="button"> <span class="flex gap-1 items-center" >
                        {{ 'Generate' }}
                        </span>
                    </button>
                </td>
            </tr>
           
        </tbody>
    </table>
    </div>
    <div v-else class="flex items-center justify-center min-h-[50vh]">Stages are not approved yet</div>
    <push_to_bo_reason_dialog :is-open="isOpen" :reasonData="reasonData" @push_evt="isOpen = false"/>
</template>

<script>
import { mapGetters } from 'vuex';
import push_to_bo_reason_dialog from './push_to_bo_reason_dialog.vue';
export default {
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Name", class: "text-left" },
                { name: "Status", class: "text-center" },
                { name: "Reason", class: "text-left" },
                { name: "Action", class: "text-center" },
            ],
            isShowed: false,
            isOpen: false,
            reasonData: '',
        }
    },
    components:{push_to_bo_reason_dialog},
    computed: {
        ...mapGetters('approval', ['getBoStatusList', 'getStageData', 'getStageData', 'getDocuments', 'getDocumentData']),
    },
    methods: {
        async retryBo(type) {
            if(type == 'NSE UCC') {
                this.$store.dispatch('approval/nseUccUpload')
            } else if(type == 'BSE UCC') {
                this.$store.dispatch('approval/bseUccUpload')
            } else if(type == 'KRA UPLOAD') {
                this.$store.dispatch('approval/kraUpload')
            } else if(type == 'KRA IMAGE UPLOAD' || type == 'DIGILOCKER XML UPLOAD') {
                this.$store.dispatch('approval/kraFileUpload')
            } else if(type == 'BSE STAR UCC') {
                this.$store.dispatch('approval/bseMfUccUpload')
            } else if(type == 'BSE STAR FATCA') {
                this.$store.dispatch('approval/bseFatcaUpload')
            } else if(type == 'BSE STAR AOF') {
                this.$store.dispatch('approval/bseStarAOF')
            } else if(type == 'Push to IWAPP') {
                this.$store.dispatch('approval/pushIwapp')
            }
        },
        checkStatus(){
            let clientCode = this.getBoStatusList.filter(el =>{
               return el.key && el.key == 'Client Code' && el.value && el.value == 'Success' && el.reason
            })
            clientCode && clientCode.length > 0 ? this.$store.dispatch('bo/callckyc') : this.$store.dispatch('errorLog/toaster',{data: {
                    "title": `You can't have to generate CKYC URL`,
                    "type": "danger",
                    "message": 'kindly try after client code generated.',
                    "duration": 4500
                },position: ''}, {root: true})
        },
        async ValidateStatus(){
            let isStage = false

            if(this.getStageData){
                let tempStage = []
                let keys = []
                for(let key in this.getStageData){
                    
                    if(key == 'nominee' && this.getStageData[key] && this.getStageData[key].length > 0){
                        let isNominee = this.getStageData[key].every(function(nominee){
                        return nominee.status && nominee.status == 'Approved'
                    })
                    keys.push(key)  
                    isNominee ? tempStage.push(key) : ''
                    }else {
                        if(this.getStageData[key] && this.getStageData[key].toString().toLowerCase() == 'approved'){
                            tempStage.push(key)
                            keys.push(key)
                        }
                    }
                    
                }
                isStage = keys.length == tempStage.length
            }
            let isDocs = false
            if(this.getDocuments && this.getDocuments.length > 0){
                let tepDocs = this.getDocuments.filter(el => el.status && el.status.toString().toLowerCase() == 'approved')
                isDocs = tepDocs.length == this.getDocuments.length
            }
           this.isShowed = isDocs && isStage
        }
    },
    async created() {
        await this.$store.dispatch('approval/getDocuments')
        if(this.$route.query?.id ) {
        await this.$store.dispatch('approval/getStageDetails', this.$route.query?.id)
        }
        await this.ValidateStatus().finally(() => {
            this.isShowed ? this.$store.dispatch('approval/checkBoStatus') : ''
        })
    },
}
</script>
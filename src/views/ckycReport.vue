<template>
    <div class="px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 "> Ckyc Download</div>
    <div class="p-4 h-full">
        <div class="card p-4">
        <div class="mb-6 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
          
            <div>
                <p class="primaryColor pb-1 text-sm">From Date</p><input type="date" v-model="fromDate"
                    class="border w-full h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer" :max="new Date().toISOString().slice(0, 10)">
            </div>
        <div>
            <p class="primaryColor pb-1 text-sm">To Date</p><input type="date" v-model="toDate" :min="fromDate ? new Date(fromDate).toISOString().slice(0, 10) : fromDate" :max="new Date().toISOString().slice(0, 10)" 
                class="border w-full h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer">
        </div>
        <div class="flex items-end"><button type="button" @click="validateField()"
                class="bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs">
                <p>Submit</p>
            </button></div>
    </div>
</div>
    </div>
   
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'ckyc_report',
    data() {
        return {
            fromDate: '',
            toDate: ''
        }
    },
    computed: {
        ...mapGetters('approval', ['getCustomerData']),
        ...mapGetters('login', ['getUserData']),

    },
    methods:{
        async validateField(){
            if(this.fromDate && this.toDate){
                let tempFromDate = [new Date(this.fromDate).getDate() > 9 ? new Date(this.fromDate).getDate() : `0${new Date(this.fromDate).getDate()}`, new Date(this.fromDate).getMonth() > 9 ? new Date(this.fromDate).getMonth() : `0${new Date(this.fromDate).getMonth()}`, new Date(this.fromDate).getFullYear()].join('-')
                let tempToDate = [new Date(this.toDate).getDate() > 9 ? new Date(this.toDate).getDate() : `0${new Date(this.toDate).getDate()}`, new Date(this.toDate).getMonth() > 9 ? new Date(this.toDate).getMonth() : `0${new Date(this.toDate).getMonth()}`, new Date(this.toDate).getFullYear()].join('-')
                let str = `token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}&Todate=${tempToDate}&frmdate=${tempFromDate}`
               await this.$store.dispatch('bo/callDownload', str).finally(()=> {this.fromDate = this.toDate = ''})
            }else{
                this.$store.dispatch('errorLog/toaster', {
                    data: {
                        "title": "Select a From & To Date",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    }, position: ''
                })
            }
        }
    }
}
</script>
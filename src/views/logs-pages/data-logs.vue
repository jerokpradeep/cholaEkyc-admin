<template>
    <div class="p-4">
        <form class="flex flex-wrap gap-3 card p-5 border rounded bg-white shadow-sm " @submit.prevent="getReports()">
            <div>
                <p class="primaryColor pb-1 text-sm ml-1">Log Type</p>
                <select v-model="logType" @change="user_url = ''"
                    class="border min-w-[160px] h-10 rounded focus:outline-0 px-4 text-xs">
                    <option value="access_log">Access Log</option>
                    <option value="rest_log">Rest Log</option>
                </select>
            </div>
            <div>
                <label class="primaryColor pb-1 text-sm">From Date</label>
                <VDatePicker :type="'date'" :max-date="new Date().toISOString().slice(0, 10)"
                    :min-date="getMinDate()" v-model.string="fromDate" is-required :popover="popover" :masks="{
                        input: 'DD-MM-YYYY',
                        modelValue: 'YYYY-MM-DD',
                    }" mode="date" :dateFormat="'YYYY-MM-DD'">
                    <template v-slot="{ togglePopover, inputValue, inputEvents }">
                        <div class="flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2">
                            <input :value="inputValue" placeholder="DD-MM-YYYY" v-on="inputEvents"
                                class="min-w-[100px] text-xs outline-none cursor-pointer" readonly />
                            <button type="button" class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700" @click="() => togglePopover()" v-html="dateSvg"></button>
                        </div>
                    </template>
                </VDatePicker>
            </div>
            <div>
                <label class="primaryColor pb-1 text-sm">To Date</label>
                <VDatePicker :type="'date'" :max-date="new Date().toISOString().slice(0, 10)" v-model.string="toDate"
                    is-required :popover="popover" :masks="{
                        input: 'DD-MM-YYYY',
                        modelValue: 'YYYY-MM-DD',
                    }" mode="date" :dateFormat="'YYYY-MM-DD'">
                    <template v-slot="{ togglePopover, inputValue, inputEvents }">
                        <div class="flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2">
                            <input :value="inputValue" placeholder="DD-MM-YYYY" v-on="inputEvents" class="min-w-[100px] text-xs outline-none cursor-pointer" readonly />
                            <button type="button" class="flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700" @click="() => togglePopover()" >
                                <span v-html="dateSvg"></span>
                            </button>
                        </div>
                    </template>
                </VDatePicker>
            </div>
            <div>
                <p class="primaryColor pb-1 text-sm">URL</p>
                <input type="text" placeholder="Enter URL"
                    v-model="user_url" class="border w-full h-10 rounded focus:outline-0 px-4 text-xs" />
            </div>
            <div>
                <p class="primaryColor pb-1 text-sm">Application ID</p>
                <input type="text" placeholder="Enter Application ID" v-model="user_id" class="border w-full h-10 rounded focus:outline-0 px-4 text-xs" />
            </div>
            <div class="flex items-end">
                <button type="submit" class="bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs" :disabled="getLoader">
                    <p v-if="!getLoader">Submit</p>
                    <svg v-if="getLoader" class="animate-spin h-5 w-5 text-white flex mx-auto"
                        xmlns="http://www.w3.org/2000/svg" fill="#fffff" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="#fffff" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </button>
            </div>
        </form>
    </div>

    <div>
        <accessLog v-if="logType == 'access_log' && !getLoader" @getReports="getReports"/>
        <restlog  v-else-if="!getLoader"/>

        <div class="flex justify-end m-4 gap-4" v-if="(logType == 'access_log' ? accessLogs?.length != 0 : restLogs?.length != 0) && !getLoader">
            <div class="flex items-center ">
                <div class="primaryColor text-sm mr-2">Rows Per Page : </div>
                <select v-model="rowsCount" class="border h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer ring-1 ring-inset ring-gray-300" @change="getReports">
                    <option :value="10">10</option>
                    <option :value="20">20</option>
                    <option :value="50">50</option>
                </select>
            </div>
          <nav class="isolate inline-flex -space-x-px rounded shadow-sm bg-white" aria-label="Pagination">
            <a @click="goBack()" class="cursor-pointer relative inline-flex items-center rounded-l px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" :class="page == 1 ? 'cursor-not-allowed' : ''">
              <span v-html="leftArror"></span>
            </a>
            <a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer" :class="page == cpage
                  ? 'z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                " v-for="(cpage, id) in pages" :key="id" @click="changePage(cpage)" >{{ cpage }}</a>
            <a @click="forward()" class="cursor-pointer relative inline-flex items-center rounded-r px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
              <span v-html="rightArror"></span>
            </a>
          </nav>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import accessLog from "./access_table.vue"
import restlog from "./rest_table.vue"
const dateSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
    </path></svg>`
const leftArror = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
`
const rightArror = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
`
export default {
    components: { accessLog, restlog },
    data() {
        return {
            dateSvg, leftArror, rightArror,
            logType: 'access_log',
            fromDate: new Date(),
            toDate: new Date(),
            popover: {
                visibility: "click",
                placement: "bottom-start",
            },
            currentTab: 0,
            user_id: '',
            user_url:'',
            page : 1,
            pages : 2,
            rowsCount: 20
        }

    },
    computed: {
        ...mapGetters('logs', ['getLoader']),
        ...mapState("logs", ["accessLogs","restLogs"]),
    },
    methods: {
        getMinDate() {
            let date = new Date();
            let newMonth = date.getMonth() - 1;
            date.setMonth(newMonth);
            return date.toISOString().slice(0, 10);
        },

        async getReports(from) {
            if (from != "paginate") this.resetPagination();
            if ( this.fromDate && this.toDate && this.logType) {
                let json = {
                    userId: this.user_id,
                    uri: this.user_url,
                    fromDate:this.fromDate,
                    toDate:this.toDate,
                    pageNo: this.page,
                    pageSize: this.rowsCount
                }
                this.logType == 'access_log' ? this.$store.dispatch('logs/getAccessLog', json) : this.$store.dispatch('logs/getRestLogDetails', json)
            } else {
                if (!this.fromDate || !this.toDate) {
                    this.$store.dispatch('errorLog/toaster',{
                        data: {
                            "title": `Select a from Date and To date`,
                            "type": "danger",
                            "message": '',
                            "duration": 4500
                        }, position: ''
                    }, {root: true})
                }
            }
        },

        resetFields(val) {
            this.fromDate = this.toDate = "";
            this.logType = "access_log";
            this.user_id = "";
        },

        resetPagination() {
            this.page = 1;
            this.pages = 2;
        },

        goBack() {
            if (this.page == 1) return;
            this.page -= 1;
            this.getReports("paginate");
        },

        forward() {
            if (this.page == this.pages) {
                this.pages += 1;
            }
            this.page += 1;
            this.getReports("paginate");
        },

        changePage(cpage) {
            if (cpage == this.pages) {
                this.pages += 1;
            }
            this.page = cpage;
            this.getReports("paginate");
        },

        setPreviousWeekDatetime() {
            const now = new Date();
            now.setDate(now.getDate() - 7); // Subtract 7 days
            const year = now.getFullYear().toString().padStart(4, "0");
            const month = (now.getMonth() + 1).toString().padStart(2, "0");
            const day = now.getDate().toString().padStart(2, "0");
            this.fromDate = `${year}-${month}-${day}`;
        },

        setCurrentDatetime() {
            const now = new Date();
            const year = now.getFullYear().toString().padStart(4, "0");
            const month = (now.getMonth() + 1).toString().padStart(2, "0");
            const day = now.getDate().toString().padStart(2, "0");
            this.toDate = `${year}-${month}-${day}`;
        },
    },
    mounted() {
        this.resetFields();
        this.setCurrentDatetime();
        this.setPreviousWeekDatetime();
    },
    unmounted(){
        this.$store.commit('logs/setRestLogs', [])
        this.$store.commit('logs/setAccessLogs', [])
    }
}
</script>
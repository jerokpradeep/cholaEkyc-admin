<template>
    <div class="p-4">
        <form class="flex flex-wrap gap-3 card p-5 border rounded bg-white shadow-sm " @submit.prevent="getReports('table')">
            <div>
                <p class="primaryColor pb-1 text-sm ml-1">Log Type</p>
                <select v-model="logType" @change="value = ''"
                    class="border min-w-[160px] h-10 rounded focus:outline-0 px-4 text-xs">
                    <option value="EMAIL">EMAIL</option>
                    <option value="SMS">SMS</option>
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
                <p class="primaryColor pb-1 text-sm">Search Mail/SMS</p>
                <input type="text" :placeholder="logType == 'SMS' ? 'Search User Mobile Number' : 'Search User Email'"
                    v-model="value" class="border w-full h-10 rounded focus:outline-0 px-4 text-xs" />
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
        <maillogsTable />
    </div>
</template>

<script>
import { mapGetters} from "vuex"
import maillogsTable from "./maillogs-table.vue"

const dateSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
    </path></svg>`

export default {
    components: { maillogsTable },
    data() {
        return {
            dateSvg,
            logType: 'EMAIL',
            fromDate: new Date(),
            toDate: new Date(),
            popover: {
                visibility: "click",
                placement: "bottom-start",
            },
            value: ''
        }
    },
    computed: {
        ...mapGetters('logs', ['getLoader'])
    },
    methods: {
        getMinDate() {
            let date = new Date();
            let newMonth = date.getMonth() - 1;
            date.setMonth(newMonth);
            return date.toISOString().slice(0, 10);
        },

        async getReports() {
            if ( this.fromDate && this.toDate && ((this.value && this.validateRegex(this.value)) || !this.value)) {
                let json = {
                    limit: 20,
                    offset: 0,
                    type: this.logType,
                    fromDate: this.fromDate,
                    toDate: this.toDate,
                };
                this.value ? (json.value = this.value) : "";
                await this.$store.dispatch("logs/getMailLogData", json);
            } else {
                if (!this.fromDate || !this.toDate) {
                    // this.$notify({ group: "auth", type: "error", title: `Select a from Date and To date` });
                    this.$store.dispatch('errorLog/toaster',{
                        data: {
                            "title": `Select a from Date and To date`,
                            "type": "danger",
                            "message": '',
                            "duration": 4500
                        }, position: ''
                    }, {root: true})
                }
                if(this.value && !this.validateRegex(this.value)) {
                    // this.$notify({ group: "auth", type: "error", title: `Enter Vaild Email on Mobile Number` }) 
                    this.$store.dispatch('errorLog/toaster',{
                           data: {
                               "title": `Enter Vaild Email on Mobile Number`,
                               "type": "danger",
                               "message": '',
                               "duration": 4500
                           }, position: ''
                       }, {root: true})
                }
            }
        },

        validateRegex(val) {
            let email = new RegExp("^([a-z0-9_\.-]+\@[\da-z\.-]+.[a-z\.]{2,6})$");
            let mobile = new RegExp("^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$");
            if (val) {
                return email.test(val) || (val.length > 6 && mobile.test(val));
            }
            return false;
        },
        resetFields(val) {
            this.fromDate = this.toDate = "";
            this.logType = "EMAIL";
            this.value = "";
            this.$store.commit("logs/setMailLogs", []);

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
        this.resetFields();
    }
}
</script>
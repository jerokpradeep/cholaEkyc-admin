<template>
    <tabs class="mx-4" :removeActive="true" @activeTab="changeTab"/>
    <smsOrMailLogs v-if="currentTab == 0" />
    <dataLogs v-if="currentTab == 1" />
</template>

<script>
import tabs from "../../components/utilComponents/tabs.vue"
import smsOrMailLogs from "./sms-or-mail-logs.vue"
import dataLogs from "./data-logs.vue"
export default {
    components: { tabs, smsOrMailLogs, dataLogs },
    data() {
        return {
            currentTab: 0
        }
    },
    methods: {
        changeTab(id) {
            this.$store.commit('setActiveTab', id)
            this.$store.commit('setQuries', {data: {tab: id}, action: 'change'})
            this.currentTab = id
        },
    },
    mounted() {
      this.changeTab(this.$store.state.queries['logs'].query.tab)
    },
}
</script>
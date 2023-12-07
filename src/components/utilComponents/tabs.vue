<template>
  <div class="flex gap-2 items-center">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" v-if="!removeActive">
      <li class="mr-2" role="presentation" v-for="(b, id) in getTabs" :key="id" @click="changeActive(b.id)"
        :id="`${$route.name}_${id}_b.name`">
        <button class="inline-block p-3 rounded-t-lg" type="button" :class="( b.name == 'Details' && id == $store.state.activeTab) ? hasNonApprovedStatus :  b.name == 'Details' ? hasNonApprovedStatusActive : (id == $store.state.activeTab && b.status && b.status) == 'Approved' ? 'border-b-2 text-green-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#15803D]/[.35] font-bold border-green-600' : (id == $store.state.activeTab && b.status && b.status) == 'Open' ? 'border-b-2 text-orange-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#FB923C]/[.35] font-bold border-orange-600' : (id == $store.state.activeTab && b.status && b.status) == 'Rejected' ? 'border-b-2 text-red-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#B91C1C]/[.35] font-bold border-red-600' 
          :(id == $store.state.activeTab) ?  'border-b-2 text-violet-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#753ED7]/[.35] font-bold border-violet-600'
         : b.status && b.status == 'Approved' ? 'text-white bg-green-700' : b.status && b.status == 'Rejected' ? 'text-white bg-red-700' : b.status && b.status == 'Open' ? 'text-white bg-orange-400' 
            : 'secondary-color hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300'
          ">
          {{ b.name }} <span v-if="b.count != '0'">{{ b.count }} </span>
        </button>
      </li>
    </ul>
    <!-- Other  -->
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" v-else>
      <li class="mr-2" role="presentation" v-for="(b, id) in getTabs" :key="id" @click="changeActive(b.id)"
        :id="`${$route.name}_${id}_b.name`">
        <button class="inline-block p-3 rounded-t-lg" type="button" :class="removeActive && id == $store.state.activeTab  ? 'border-b-2 violet-color border-violet-600' : ''">
          {{ b.name }} <span v-if="b.count != '0'">{{ b.count }} </span>
        </button>
      </li>
    </ul>
    <spinner v-if="getIsLoader"/>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "tabsComponent",
  methods: {
    changeActive(id) {
      this.$emit("activeTab", id);
    }
  },
  mounted() { },
  computed: {
    ...mapGetters("tabs", [
      "getKycApprovalTabs",
      "getKycPanelTabs",
      "getOpportunityTabs"
    ]),
    ...mapGetters(["getWindowWidth"]),
    ...mapGetters('approval', ['getIsLoader']),
    ...mapGetters('login', ["getUserData"]),
    getTabs() { 
      if (this.$route.path == "/approvepanel") {
        if(this.getUserData?.Role == 'RM' || this.$route.query.from == 'opportunity'){
          this.tabs = this.getKycApprovalTabs.slice(0, -1);
          return this.getKycApprovalTabs.slice(0, -1);
        }else{
          this.tabs = this.getKycApprovalTabs
          return this.getKycApprovalTabs
        }
      } else if (this.$route.path == "/kycapproval") {
        this.tabs = this.getKycPanelTabs;
        return this.getKycPanelTabs;
      } else if(this.$route.path == "/opportunity") {
        this.tabs = this.getOpportunityTabs
        return this.getOpportunityTabs
      }
    },
    hasNonApprovedStatusActive() {
      if (this.tabs.some(tab => tab.status === 'Rejected')) {
        return 'bg-red-700 text-white';
      } else if (this.tabs.some(tab => tab.status === 'Open')) {
        return 'bg-orange-400 text-white';
      } else if (this.tabs.every(tab => tab.status === 'Approved')) {
        return 'bg-green-700 text-white';
      } else {
        return 'bg-white';
      }
    },
    hasNonApprovedStatus() {
      if (this.tabs.some(tab => tab.status === 'Rejected')) {
        return 'border-b-2 text-red-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#B91C1C]/[.35] font-bold border-red-600';
      } else if (this.tabs.some(tab => tab.status === 'Open')) {
        return 'border-b-2 text-orange-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#FB923C]/[.35] font-bold border-orange-600';
      } else if (this.tabs.every(tab => tab.status === 'Approved')) {
        return 'border-b-2 text-green-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#15803D]/[.35] font-bold border-green-600';
      } else {
        return 'bg-white';
      }
    }
  },
  props:{
    removeActive:Boolean
  }
};
</script>
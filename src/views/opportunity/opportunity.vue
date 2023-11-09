<template>
  <div class="secondary-violet-bg rounded-t">
    <!-- <ul class="flex flex-wrap mb-px text-sm font-medium text-center" id="myTab">
      <li class="mr-2" role="presentation" v-for="(b, id) in tabheaders" :key="id" @click="changeActive(b.name)" :id="`${$route.name}_${id}_${b.name}`">
        <button class="inline-block p-3 rounded-t-lg primaryColor" type="button" :class="{
          'border-b-2 violet-color hover:violet-color dark:text-[#753ED7] dark:hover:text-[#753ED7] border-[#753ED7] dark:border-[#753ED7]':
            b.active,
          'primaryColor hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300':
            !b.active,
        }">
          {{ b.name }}
        </button>
      </li>
    </ul> -->
    <tabs class="mx-4" @activeTab="changeTab"/>
  </div>
  <div class="p-4">
    <breadcrumb v-if="getIsStageDetails"/>
    <reports v-if="currentTab == 0" />
    <Allopportunity v-if="currentTab == 1" />
    <myOpportunity v-if="currentTab == 2"/>
  </div>
</template>

<script>
import Allopportunity from "./Allopportunity.vue";
import breadcrumb from "../../components/utilComponents/breadcrumb.vue"
import myOpportunity from "./myOpportunity.vue";
import reports from "./reports.vue"
import { mapGetters } from "vuex"
import tabs from "../../components/utilComponents/tabs.vue"
export default {
  components: { Allopportunity, breadcrumb, myOpportunity, reports, tabs },
  data() {
    return {
      tabheaders: [
        {
          active: false,
          name: "Report",
          id: 1,
          route: "/Alllopportunity.vue",
        },
        {
          active: true,
          name: "All Opportunities",
          id: 2,
          route: "/Alllopportunity.vue",
        },
        {
          active: false,
          name: "My Opportunity",
          id: 3,
          route: "/tab2.vue",
        },
      ],
      currentTab: 0,
    };
  },
  computed: {
    ...mapGetters('opportunity', ['getIsStageDetails', 'getAllOpportunities'])
  },
  methods: {
    changeActive(tab) {
      this.tabheaders.forEach((el) => {
        el.active = el.name === tab;
      });
      this.currentTab = tab;
    },
    changeTab(id) {
      this.currentTab = id
      this.$store.commit('setActiveTab', id)
      this.$store.commit('setQuries', { data: { tab: id }, action: 'change' })
      if(this.currentTab == 1) {
        this.$store.dispatch('opportunity/getOpportunityList')
      }
    },
  },
  mounted() {
    this.changeTab(0)
  }
};
</script>

<style></style>

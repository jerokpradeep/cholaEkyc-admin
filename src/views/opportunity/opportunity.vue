<template>
  <div class="secondary-violet-bg rounded-t">
    <ul class="flex flex-wrap mb-px text-sm font-medium text-center" id="myTab">
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
    </ul>
  </div>
  <breadcrumb v-if="getIsStageDetails"/>
  <Allopportunity v-if="currentTab == 'All Opportunities'" />
</template>

<script>
import Allopportunity from "./Allopportunity.vue";
import breadcrumb from "../../components/utilComponents/breadcrumb.vue"
import { mapGetters } from "vuex"
export default {
  components: { Allopportunity, breadcrumb,  },
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
      currentTab: "All Opportunities",
    };
  },
  computed: {
    ...mapGetters('opportunity', ['getIsStageDetails'])
  },
  methods: {
    changeActive(tab) {
      this.tabheaders.forEach((el) => {
        el.active = el.name === tab;
      });
      this.currentTab = tab;
    },
  },
};
</script>

<style></style>

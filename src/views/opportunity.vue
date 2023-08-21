<template>
  <div class="secondary-violet-bg rounded-t">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      id="myTab"
    >
      <li
        class="mr-2"
        role="presentation"
        v-for="(b, id) in tabheaders"
        :key="id"
        @click="changeActive(b.name)"
        :id="`${$route.name}_${id}_${b.name}`"
      >
        <button
          class="inline-block p-3 rounded-t-lg"
          type="button"
          :class="{
            'border-b-2 violet-color hover:violet-color dark:text-[#753ED7] dark:hover:text-[#753ED7] border-[#753ED7] dark:border-[#753ED7]':
              b.active,
            'secondary-color hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300':
              !b.active,
          }"
        >
          {{ b.name }}
        </button>
      </li>
    </ul>
  </div>
  <Allopportunity v-if="currentTab === 'Allopportunity'" />
  <tabs v-if="currentTab === 'Tabs Component'" />
</template>

<script>
import Allopportunity from "../components/opportunitytabs/Allopportunity.vue";
import Tabs from "../components/opportunitytabs/tab2.vue";
export default {
  components: { Allopportunity, Tabs },
  data() {
    return {
      tabheaders: [
        {
          active: true,
          name: "All opportunity",
          id: "head_dashboard",
          route: "/Alllopportunity.vue",
        },
        {
          active: false,
          name: "Tabs Component",
          id: "head_reports",
          route: "/tab2.vue",
        },
      ],
      currentTab: "Allopportunity",
    };
  },
  methods: {
    changeActive(tab) {
      this.tabheaders.forEach((el) => {
        el.active = el.name === tab;
      });
      this.currentTab = tab;
      console.log(this.currentTab, "this.currentTab");
    },
  },
};
</script>

<style>
</style>

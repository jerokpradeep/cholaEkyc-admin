<template>
    <div class="px-4">
        <table class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg" v-if="accessLogs.length > 0" >
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr class="border-b text-[13px]">
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Content Type</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Response Body</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">URL</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Device Ip</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in accessLogs"
          :key="index"
          class="border-b text-sm"
        >
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ item.contentType }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]">
            {{ item.resBody }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">{{ item.uri }}</td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ item.deviceIp }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="min-h-[300px] flex justify-center items-center">
        No Data Found
    </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters, mapState } from "vuex";
import mailReq from "./mail-req.vue";
// import commonFunc from "../mixins/commonFunc";
export default defineComponent({
    // mixins: [commonFunc],
    name: "mail-logs",
    computed: {
        ...mapState("logs", ["accessLogs"]),
    },

    setup() {
        return {
        };
    },
    components: {
    },
    methods: {
    },
});
</script>
  
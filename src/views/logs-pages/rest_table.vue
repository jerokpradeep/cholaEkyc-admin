<template>
    <div class="px-4">
        <table class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg" v-if="restLogs.length > 0" >
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr class="border-b text-[13px]">
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Application Id</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Method</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Response Body</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Request Body</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Created On</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in restLogs"
          :key="index"
          class="border-b text-sm"
        >
        <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ item.applicationId }}
          </td>

          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ item.method }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]">
            {{ item.resBody }}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]">{{ item.reqBody }}</td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ formatDate(new Date(item.createdOn)) }}
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
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default defineComponent({
    name: "mail-logs",
    computed: {
        ...mapState("logs", ["restLogs"]),
    },

    setup() {
        return {
        };
    },
    components: {
    },
    methods: {
        formatDate(date) {
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            let hours = date.getHours();
            const ampm = hours >= 12 ? "pm" : "am";
            hours = hours % 12;
            hours = hours ? hours : 12; // Handle midnight
            const minutes = String(date.getMinutes()).padStart(2, "0");
            return `${day}/${month}/${year}, ${hours}:${minutes} ${ampm}`;
        },
    },
});
</script>
  
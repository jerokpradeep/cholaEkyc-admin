<template>
    <div class="px-4">
        <table class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg" v-if="getMailLogs.length > 0" >
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr class="border-b text-[13px]">
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">
            {{ loginType == "SMS" ? "Mobile No" : "E-mail" }}
          </th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Request Log</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Response Log</th>
          <th class="text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in getMailLogs"
          :key="index"
          class="border-b text-sm"
        >
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ loginType == "SMS" ? item.mobileNo : item.emailId }} {{}}
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            <span v-if="loginType == 'SMS'">{{ item.requestLog }}</span>
            <span v-else class="flex justify-center items-center gap-3">
              {{ item.reqLogSub }}
              <a
                v-if="item.reqLog"
                class="text-blue-500 cursor-pointer underline text-xs"
                @click="
                  $store.commit('logs/setIsMailDial', true),
                    (bindData = { data: item.reqLog, subject: item.reqLogSub })
                "
                >View</a
              >
            </span>
          </td>
          <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">{{ item.responseLog }}</td>
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

    <mailReq v-if="isMailDial" :is-open="isMailDial" v-bind:show-data="bindData"
        v-on:mail-close="$store.commit('logs/setIsMailDial', false)" />
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
        ...mapState("logs", ["loginType", "isMailDial"]),
        ...mapGetters("logs", ["getMailLogs"]),
    },

    setup() {
        const bindData = ref();
        return {
            bindData,
        };
    },
    components: {
        mailReq,
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
  
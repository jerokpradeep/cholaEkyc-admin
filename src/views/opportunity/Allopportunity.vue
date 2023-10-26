<template>
  <div>
    <table v-if="!getIsStageDetails" id="positions_table"
      class="w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px]">
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr>
          <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class"
            class="py-3.5 px-3 text-xs font-semibold secondary-color whitespace-nowrap" id="positions_th_instrument">
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i, id) in tableData" :key="id" class="border-b cursor-pointer hover:bg-gray-50" @click="goToStageDetails(i)">
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.SNO }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.CustomerName }}
          </td>
          <td
            class="flex py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
            <img class="w-4 mr-2 text-right h-6" :src="i.Status == 'In Progress'
              ? Progress
              : i.Status == 'Completed'
                ? completed
                : ''
              " />
            {{ i.Status }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[140px] cursor-default"
              :class="i.Currentphases == 'Mobile Verification'
                ? 'mv-clr'
                : i.Currentphases == 'Email Verification'
                  ? 'ev-clr'
                  : i.Currentphases == 'PAN Verification'
                    ? 'pan-clr'
                    : i.Currentphases == 'Address'
                      ? 'ad-clr'
                      : i.Currentphases == 'Personal Profile'
                        ? 'pp-clr'
                        : i.Currentphases == 'Bank Account'
                          ? 'ba-clr'
                          : i.Currentphases == 'Segment Selection'
                            ? 'ss-clr'
                            : i.Currentphases == 'Payment'
                              ? 'pay-clr'
                              : i.Currentphases == 'Nominee'
                                ? 'nom-clr'
                                : i.Currentphases == 'Document Upload'
                                  ? 'du-clr'
                                  : i.Currentphases == 'IPV'
                                    ? 'ipv-clr'
                                    : i.Currentphases == 'PDF Generation'
                                      ? 'pdf-clr'
                                      : i.Currentphases == 'ESIGN'
                                        ? 'esign-clr'
                                        : 'nrml'
                ">
              {{ i.Currentphases }}
            </button>
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative">
            <div class="w-full h-4 flex bg-gray-200 dark:bg-gray-700">
              <div class="bg-green-600 text-xs font-medium text-blue-100 text-center leading-none" style="width: 45%">
              </div>
              <div class="bg-green-400 text-xs font-medium text-blue-100 text-center leading-none" style="width: 30%">
              </div>
            </div>
            {{ i.Progress }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative items-center justify-center">
            <div class="flex items-center justify-center">
              <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="chevronSvg"
                alt="star" v-for="nId in 13" :key="nId" />
            </div>
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.Hoursconsumed }}
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default"
              :class="i.Inferredprogress == 'On Track'
                ? 'nom-clr'
                : i.Inferredprogress == 'Running Late'
                  ? 'ad-clr'
                  : 'nrml'
                ">
              {{ i.Inferredprogress }}
            </button>
          </td>
          <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
            {{ i.Owner }}
          </td>
        </tr>
      </tbody>
    </table>

    <StageDetails v-if="getIsStageDetails"/>
  </div>
</template>
<script>
import Progress from "../../assets/image/process.svg";
import completed from "../../assets/image/100percent.svg";
import chevronSvg from "../../assets/image/Chevron.svg"
import StageDetails from "./stage-details.vue";
import { mapGetters } from "vuex"
export default {
  components: { StageDetails },
  data() {
    return {
      Progress,
      completed,
      chevronSvg,
      tableHeads: [
        { name: "SNO", class: "text-center" },
        { name: "Customer Name", class: "text-center" },
        { name: "Status.", class: "text-center" },
        { name: "Current phases", class: "text-center" },
        { name: "Progress", class: "text-center" },
        { name: "Phases", class: "text-center" },
        { name: "Hours consumed", class: "text-center" },
        { name: "Inferred progress", class: "text-center" },
        { name: "Owner", class: "text-center" },
      ],
      tableData: [
        {
          SNO: "1",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "Mobile Verification",
          Progress: "",
          Phases: "3",
          Hoursconsumed: "8.24 Hr ",
          Inferredprogress: "On Track",
          Owner: "Akash",
        },
        {
          SNO: "2",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "Email Verification",
          Progress: "",
          Phases: "3",
          Hoursconsumed: "8.24 Hr",
          Inferredprogress: "Running Late",
          Owner: "Akash",
        },
        {
          SNO: "3",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "PAN Verification",
          Progress: "",
          Phases: "5",
          Hoursconsumed: "8.24 Hr",
          Inferredprogress: "On Track",
          Owner: "Akash",
        },
        {
          SNO: "4",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "Address",
          Progress: "",
          Phases: "8",
          Hoursconsumed: "8.24 Hr",
          Inferredprogress: "Running Late",
          Owner: "Akash",
        },
        {
          SNO: "5",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "Personal Profile",
          Progress: "",
          Phases: "3",
          Hoursconsumed: "8.24 Hr",
          Inferredprogress: "On Track",
          Owner: "Akash",
        },
        {
          SNO: "6",
          CustomerName: "Akash",
          Status: "In Progress",
          Currentphases: "Bank Account",
          Progress: "",
          Phases: "5",
          Hoursconsumed: "8.24 Hr",
          Inferredprogress: "Running Late",
          Owner: "Akash",
        },
        // {
        //   SNO: "7",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "Segment Selection",
        //   Progress: "",
        //   Phases: "6",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "On Track",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "8",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "Payment",
        //   Progress: "",
        //   Phases: "7",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "Running Late",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "9",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "Nominee",
        //   Progress: "",
        //   Phases: "8",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "On Track",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "10",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "Document Upload",
        //   Progress: "",
        //   Phases: "9",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "Running Late",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "11",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "IPV",
        //   Progress: "",
        //   Phases: "4",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "On Track",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "12",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "PDF Generation",
        //   Progress: "",
        //   Phases: "6",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "Running Late",
        //   Owner: "Akash",
        // },
        // {
        //   SNO: "13",
        //   CustomerName: "Akash",
        //   Status: "In Progress",
        //   Currentphases: "ESIGN",
        //   Progress: "",
        //   Phases: "7",
        //   Hoursconsumed: "8.24 Hr",
        //   Inferredprogress: "On Track",
        //   Owner: "Akash",
        // },
      ],
    };
  },
  computed: {
    ...mapGetters('opportunity', ['getIsStageDetails'])
  },
  methods: {
    goToStageDetails(data) {
      this.$store.commit('opportunity/setIsStageDetails', true)
      // this.$router.push(`/stage-details/${data?.SNO}`)
    }
  },
};
</script>

<style scoped>
.mv-clr {
  color: #6b4cba;
  background-color: #c8bce65c;
}

.ev-clr {
  color: #ff8f00;
  background-color: #ff910032;
}

.pan-clr {
  color: #4a7fc4;
  background-color: #cadbef;
}

.ad-clr {
  color: #325d34;
  background-color: #d9f5db;
  
}

.pp-clr {
  color: #dd971d;
  background-color: #f5e3c3d3;
}

.ba-clr {
  color: #d03030;
  background-color: #ffd3d3;
}

.ss-clr {
  color: #2189a1;
  background-color: #d9f8ff;
}

.pay-clr {
  color: #6b5b95;
  background-color: #c8bce65c;
}

.nom-clr {
  color: #ed0800;
  background-color: #f9dad9fe;
}

.du-clr {
  color: #233c08;
  background-color: #dfedd0;
}

.ipv-clr {
  color: #1510ad;
  background-color: #c6c4fc;
}

.pdf-clr {
  color: #bf6017;
  background-color: #f4dcca;
}

.esign-clr {
  color: #0a4d61;
  background-color: #c7e1e9;
}
</style>
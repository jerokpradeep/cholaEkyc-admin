<template>
    <div>
      <!-- <table v-if="!getIsStageDetails && !getIsLoader" id="positions_table"
        class="w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px]">
        <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
          <tr>
            <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class"
              class="py-3.5 px-3 text-sm font-medium primaryColor whitespace-nowrap" id="positions_th_instrument">
              {{ head.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, id) in getAllOpportunities" :key="id" class="border-b cursor-pointer hover:bg-gray-50" @click="goToStageDetails(i)">
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ id + 1 }}
            </td>
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.customer_name }}
            </td>
            <td
              class="flex py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
              
              {{ i.fsl_pan_no }}
            </td>
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
               {{ i['phase'] }}
            </td>
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative items-center justify-center">
              <div class="flex items-center justify-center">
                <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="chevronSvg"
                  alt="star" v-for="nId in 13" :key="nId" />
              </div>
            </td>
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ i.time }}
            </td>
            <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default" :class="i.Inferredprogress == 'On Track'
                  ? 'nom-clr'
                  : i.Inferredprogress == 'Running Late'
                    ? 'ad-clr'
                    : 'nrml'
                  ">
                {{ i['current phase'] }}
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->
      <div class="flex justify-center items-center min-h-[300px]">
        Coming Soon
      </div>
      <StageDetails v-if="getIsStageDetails"/>
    </div>
  </template>
  <script>
  import Progress from "../../assets/image/process.svg";
  import chevronSvg from "../../assets/image/Chevron.svg"
  import StageDetails from "./stage-details.vue";
  import { mapGetters } from "vuex"
  export default {
    components: { StageDetails },
    data() {
      return {
        Progress,
        chevronSvg,
        tableHeads: [
          { name: "S.No", class: "text-center" },
          { name: "Customer Name", class: "text-left" },
          { name: "PAN", class: "text-center" },
          { name: "Current phases", class: "text-center" },
          { name: "Phases", class: "text-center" },
          { name: "Hours consumed", class: "text-center" },
          { name: "Progress State", class: "text-center" },
        ],
      };
    },
    computed: {
      ...mapGetters('opportunity', ['getIsStageDetails', 'getAllOpportunities']),
      ...mapGetters('approval', ['getIsLoader'])
    },
    methods: {
      goToStageDetails(data) {
        this.$store.commit('opportunity/setIsStageDetails', true)
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
<template>
  <div>
    <form @submit.prevent="getAllOppertunities()" class="flex gap-3 flex-wrap mb-2">
      <input type="date" v-model="fromDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" :max="new Date().toISOString().split('T')[0]">
      <input type="date" v-model="toDate" class="bg-white rounded-lg border-transparent px-2 text-xs h-8" :max="new Date().toISOString().split('T')[0]">
      <button type="submit" class="flex justify-center items-center min-w-[100px] h-[32px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7]">Submit</button>
    </form>
    <table v-if="!getIsStageDetails && !getIsLoader"  class="w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg">
      <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
        <tr>
          <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class"
            class="py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap">
            {{ head.name }}
          </th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(i, id) in getAllOpportunities" :key="id" class="border-b hover:bg-gray-50">
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ id + 1 }}
            </td>
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-left">
              {{ i.customer_name }}
            </td>
            <td class="flex py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center">
              {{ i.fsl_pan_no }}
            </td>
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ i['phase'] }}
            </td>
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative items-center justify-center">
              <div class="flex items-center justify-center" v-if="i?.stage">
                <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="filledSvg" alt="greenstar" v-for="idx in getGreenStarCount(i?.stage)" :key="idx" />
                <img class="w-3 text-right h-5" :class="{ 'color-green-500': i.Phases }" :src="chevronSvg" alt="graystar" v-for="idx in getGrayStarCount(i?.stage, i.phase)" :key="idx" />
              </div>
            </td>
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              {{ i?.time ? getHours(i.time) : i?.time }}
            </td>
            <td class="py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center">
              <button depressed class="tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default" :class="i['current phase'] == 'In-Progress'
                    ? 'blue-btn-c': i['current phase'] == 'Open'  ? 'gray-btn-c'
                    : i['current phase'] == 'Completed' || i['current phase'] == 'Approved' ? 'green-btn-c' : 'gray-btn-c'
                  ">
                {{ i['current phase'] }}
              </button>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import Progress from "../../assets/image/process.svg";
import chevronSvg from "../../assets/image/Chevron.svg"
import filledSvg from "../../assets/image/filledSvg.svg"
import { mapGetters } from "vuex"
export default {
  components: {  },
  data() {
    return {
      Progress,
      chevronSvg,
      filledSvg,
      tableHeads: [
        { name: "S.No", class: "text-center" },
        { name: "Customer Name", class: "text-left" },
        { name: "PAN", class: "text-center" },
        { name: "Current phases", class: "text-center" },
        { name: "Phases", class: "text-center" },
        { name: "Hours consumed", class: "text-center" },
        { name: "Progress State", class: "text-center" },
      ],
      fromDate: '',
      toDate: '',
      status: '',
      application: '',
      panNo: '',
      mobileNo: '',
    };
  },
  computed: {
    ...mapGetters('opportunity', ['getIsStageDetails', 'getAllOpportunities']),
    ...mapGetters('approval', ['getIsLoader'])
  },
  methods: {
    getFormat(date){
      return window.formatDate(date, 'D&T')
    },
    getHours(dt2) {
      let diffTime = Math.abs(new Date().valueOf() - new Date(dt2).valueOf());
      let days = diffTime / (24*60*60*1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
      if(Number(days) != 0) {
        return `${days}d, ${hours}h : ${minutes}m`
      } else if(Number(hours) != 0) {
        return `${hours}h:${minutes}m`
      } else {
        return `${minutes}m`
      }
    },

    getGrayStarCount(stars, name) {
      if(stars == 13) {
        return []
      }
      let s = Number(stars)
      let arr = []
      s = Math.round(s)
      s = 13 - s
      if(stars && s) {
        for (let index = 0; index < s; index++) {
          arr.push(index)
        }
        return arr
      } else {
        return 12
      }
    },

    getGreenStarCount(stars) {
      let s = Math.round(Number(stars))
      let arr = []
      if(stars && s) {
        for (let index = 0; index < s; index++) {
          arr.push(index)
        }
        return arr
      } else {
        return 13
      }
    },

    getAllOppertunities() {

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
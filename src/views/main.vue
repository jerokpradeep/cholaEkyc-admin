<template>
  <div>
    <div class="h-screen !overflow-hidden">
      <headerComp />
      <div class="flex flex-col lg:flex-row bg-[#f7f5f5]" style="height: calc(100vh - 56px)">
        <div  class="border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden">
          <ul role="list" class="space-y-2 ">
            <li   class="md:flex-1 py-2  hover:bg-[#f9fdff] border-l-4" v-for="(step, index) in $store.state.validSteps" :key="index" @click="activeTab(step)" :class="{ ' border-[#0081B8] bg-[#f9fdff]': step.active }">
              <div class="cursor-pointer">
                  <div class="flex flex-col items-center justify-center cursor-pointer min-h-[32px] px-2 ">
                    <span ><img :class="{ activeImg: step.active }" class="max-w-[76%] h-auto mx-auto" :src="getImageSrc(step)" :alt="step.svg"/></span>
                    <span class="font-medium text-xs text-center  " :class="{   'text-[#0081B8]': step.active,   primaryColor: !step.active, }" >{{ step.name }}</span>
                  </div>
                </div>
            </li>
          </ul>
        </div>
        <div class="w-full lg:h-[calc(100vh-83px)] h-[calc(100vh-60px)] overflow-y-auto">
          <router-view />
        </div>
      </div>
      <logoutDialog/>
    </div>
  </div>
</template>

<script>
import headerComp from "../components/header.vue";
import logoutDialog from "./logoutDialog.vue";

export default {
  components: { headerComp ,logoutDialog },
  data(){
    return{ 
      steps: [],
      
    }
  },
  methods: {
    activeTab(val) {
      this.$router.push(val.route);
      this.$store.dispatch('changeTab', val)
    },
    retainCurrentTab() {
      let tab = localStorage.getItem("sidebarTab");
      if (tab) {
        this.steps.forEach((el) => {
          el.active = el.name == tab;
        });
      }
    },
    getImageSrc(step) {
      const imgUrl = new URL(`../assets/menu/${step.svg}.svg`, import.meta.url)
        .href;
      return imgUrl;
    },
  },
  created(){
    let item = this.$store.state.validSteps.filter((el)=> el.route == this.$router.currentRoute.value.path)
    item.length > 0 ? this.$store.dispatch('changeTab', item[0]) : ''
    
  }
};
</script>
<template>
  <!-- !overflow-hidden -->
  <div>
    <div class="h-screen !overflow-hidden">
      <headerComp />
      <div class="flex flex-col lg:flex-row bg-[#f7f5f5]"
        style="height: calc(100vh - 56px)">
    <div  class="border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden">
          <ul role="list" class="space-y-2 ">
            <li   class="md:flex-1 py-2  hover:bg-[#f9fdff] border-l-4" v-for="(step, index) in steps" :key="index" 
            @click="activeTab(step)" :class="{ ' border-[#0081B8] bg-[#f9fdff]': step.active }"
>
              <!-- <router-link :id="head.id" :to="head.route"><span class="font-medium text-xs text-center primaryColor" >{{
                head.name
              }}</span></router-link> -->
              <div class="cursor-pointer">
                  <div
                    class="flex flex-col items-center justify-center cursor-pointer min-h-[32px] px-2 "
                  >
                    <!-- <span class="relative flex h-7 w-6 flex-shrink-0 items-center justify-center">
                                          <commonIcon :name="step.icon" :width="'16'" :height="'16'" :stroke="'#1d4380'" class="self-center px-2"/>
                                      </span> -->
                    <!-- <span><img :src="`../assets/menu/orders.svg`" :alt="step.svg"></span> -->
                    <span
                      ><img
                        :class="{ activeImg: step.active }"
                        class="max-w-[76%] h-auto mx-auto"
                        :src="getImageSrc(step)"
                        :alt="step.svg"
                    /></span>
                    <span
                      class="font-medium text-xs text-center  "
                      :class="{
                        'text-[#0081B8]': step.active,
                        primaryColor: !step.active,
                      }"
                      >{{ step.name }}</span
                    >
                  </div>
                </div>
            </li>
          </ul>
        </div>
        <div
          class="w-full lg:h-[calc(100vh-83px)] h-[calc(100vh-60px)] overflow-y-auto"
        >
        <router-view />
        </div>
      </div>
      <logoutDialog/>
      <rejectDialog />
    </div>
  </div>
</template>

<script>
import headerComp from "../components/header.vue";
import logoutDialog from "./logoutDialog.vue";
import rejectDialog from "./rejectDialog.vue";
export default {
  components: { headerComp ,logoutDialog,rejectDialog },
  data(){
    return{ 
      steps: [
      // {
      //     name: "Dashboard",
      //     route: "/dashboard",
      //     icon: "Reports",
      //     status: "active",
      //     active: true,
      //     svg: "home",
      //   },
        // {
        //   name: "Lead",
        //   route: "/lead",
        //   icon: "Reports",
        //   status: "active",
        //   active: false,
        //   svg: "orders",
        // },
        {
          name: "Opportunity",
          route: "/opportunity",
          icon: "Reports",
          status: "active",
          active: true,
          svg: "orders",
        },
        {
          name: "Approval",
          route: "/kycapproval",
          icon: "Reports",
          status: "active",
          active: false,
          svg: "upload",
        },
        // {
        //   name: "Recon",
        //   route: "/re",
        //   icon: "Reports",
        //   status: "active",
        //   active: false,
        //   svg: "newsIcon",
        // },
      ],
    }
  },
  methods: {
    activeTab(val) {
      this.$router.push(val.route);
      this.setActiveTab(val);
      localStorage.setItem("sidebarTab", val.name);
    },
    setActiveTab(val) {
      this.steps.forEach((el) => {
        if (el.route == val.route) {
          el.active = true;
        } else {
          el.active = false;
        }
      });
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
    let item = this.steps.filter((el)=> el.route == this.$router.currentRoute.value.path)
    console.log(item , 'item item');
    item.length > 0 ? this.setActiveTab(item[0]) : ''
  }
};
</script>
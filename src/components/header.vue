
<style scoped>
.header {
  @apply bg-white h-12 left-0 right-0 py-[5px] px-[10px] font-medium w-full border-b-[1px] my-0 mx-auto dark:bg-[#181818] dark:text-[#94A3B8] dark:border-[#232325];
}

.menu-list {
  @apply text-xs leading-5 self-center flex;
}

.menu-list ul li {
  @apply inline-block py-[3px];
}

.user-details {
  @apply border-l-[1px] text-lg leading-6 flex;
}

.user-details img,
.user-details span {
  @apply inline-block self-center;
}

.router-link-exact-active,
.router-link-active {
  @apply font-semibold text-[#753ED7];
}

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

.headerMobile .active {
  fill: #753ed7 !important;
  stroke: #753ed7 !important;
}

.pinned-ins.shake {
  animation: shake 0.15s ease;
  /* animation: shake 0.5s ease; */
}

@keyframes shake {
  0% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }

  20% {
    -webkit-transform: translate(1em);
    transform: translate(1em);
  }

  40% {
    -webkit-transform: translate(-1em);
    transform: translate(-1em);
  }

  60% {
    -webkit-transform: translate(0.5em);
    transform: translate(0.5em);
  }

  80% {
    -webkit-transform: translate(-0.5em);
    transform: translate(-0.5em);
  }

  100% {
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}
</style>
<template>
    <!-- <div class="w-full">
    <div class="imgHeight flex items-center justify-between p-4">
      <div class="-pointer logo mr-auto flex items-center">
          <img :src="clientLogo" class="h-6 px-4" alt="logo" />
        </div>
      <div class="">
        <p class="text-blue-500 cursor-pointer" @click="">Logout</p>
      </div>
    </div>
  </div> -->
  <div>
  <div class="flex flex-col lg:flex-row bg-[#f7f5f5]"
        style="height: calc(100vh - 72px)">
    <div   class="border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden">
        <!-- <div class="-pointer logo mr-auto flex items-center">
          <img :src="clientLogo" class="h-6 px-4" alt="logo" />
        </div> -->
          <ul role="list" class="space-y-2">
            <li   class="md:flex-1 py-2 hover:bg-[#f9fdff] border-l-4" v-for="(head, id) in headers" :key="id" :class="{ ' border-[#0081B8] bg-[#f9fdff]': head.active }"
>
              <router-link :id="head.id" :to="head.route"><span >{{
                head.name
              }}</span></router-link>
            </li>
          </ul>
          <!-- <Menu as="div" class="relative inline-block text-left">
            <MenuButton>
              <button class="user-details dropdown">
                <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f5f3ff] ml-4 mr-2">
                  <span class="text-[10px] font-medium leading-none violet-color uppercase">{{ "S" }}</span>
                </span>
                <span id="head_dropdown_userid" class="mr-[20px] text-xs primary-color">{{"724380" }}</span>
              </button>
            </MenuButton> -->

            <!-- <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
>
<MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
>
<div class="py-1">
<MenuItem>
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      @click="navigateToMyAcc()"
>My Account</a>
</MenuItem>
</div> -->
            <!-- <div class="py-1">
<MenuItem v-slot="{ active }">
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
>Rewards</a
>
</MenuItem>
<MenuItem v-slot="{ active }">
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
>Gift Stock</a
>
</MenuItem>
<MenuItem v-slot="{ active }">
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
>Family</a
>
</MenuItem>
<MenuItem v-slot="{ active }">
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
>Support</a
>
</MenuItem>
</div> -->
            <!-- <div class="py-1">
<MenuItem>
<a
                      href="#"
                      class="primary-color text-xs hover:!text-[#52a3ff]"
                      :class="[
                        active ? ' text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
>Logout</a
>
</MenuItem>
</div>
</MenuItems>
</transition> -->
          <!-- </Menu> -->
        </div>
      </div>
      </div>
</template>

<script>
import clientLogo from "../assets/image/nidhi-logo.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  data() {
    return {
      clientLogo,
      headers: [
        {
          name: "Dashboard",
          id: "head_dashboard",
          route: "/dashboard",
        },
        {
          name: "Lead",
          id: "head_profile",
          route: "/lead",
        },
        {
          name: "Opportunity",
          id: "head_reports",
          route: "/opportunity",
        },
        {
          name: "KYC approval",
          id: "head_holdings",
          route: "/kycapproval",
        },
        {
          name: "Reconcellation",
          id: "head_action",
          route: "/re",
        },

      ],
    };
  },
  components: { Menu, MenuButton, MenuItems, MenuItem },
  // methods: {
  //   navigateToMyAcc() {
  //     sessionStorage.setItem("profileTab", JSON.stringify("0"));
  //     this.$router.push("/profile");
  //   },
  // },
};
</script>


   <!-- <div
      class="flex align-center justify-center text-[70px] font-bold text-white"
    >
      Welcome to <span class="text-[#F9682A]"> Reloop</span>
    </div> -->


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
    <div class="w-full">
      <div class="imgHeight flex items-center justify-between p-4">
        <div class="-pointer logo mr-auto flex items-center">
            <img :src="clientLogo" class="h-6 " alt="logo" />
        </div>
        <div>
          <p class="text-blue-500 cursor-pointer text-xs" @click="$store.commit('setLogout',  true)">Logout</p>
        </div>
      </div>
    </div>
</template>

<script>
import clientLogo from "../assets/image/chola_head.png";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  data() {
    return {
      clientLogo,
    };
  },
  components: { Menu, MenuButton, MenuItems, MenuItem },
};
</script>

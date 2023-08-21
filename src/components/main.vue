<template>
  <!-- !overflow-hidden -->
  <div>
    <div class="h-screen !overflow-hidden">
      <headerComp class="fixed top-0" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerComp from "./header.vue";
export default {
  components: { headerComp },
};
</script>
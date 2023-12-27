<template>
    <div class="flex items-center gap-2">
      <nav class="flex p-5 py-2" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li v-for="(page, id) in pages" :key="page.name" @click="handleClick(page)" class="cursor-pointer">
          <div class="flex items-center">
            <a class="mr-4 text-sm font-medium" :class="!page.current ? 'violet-color' : 'text-gray-500 hover:text-gray-700'">{{ page.name.toString().toLowerCase() == 'kycapproval' ? 'Approval' : page.name }}</a>
            <svg v-if="id == 0" class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
          </div>
        </li>
      </ol>
    </nav>
    <spinner v-if="getIsLoader"/>
    </div>
</template>
  
<script>
import { HomeIcon } from '@heroicons/vue/20/solid'
import { mapGetters } from 'vuex'
export default {
  components: { HomeIcon },
  data() {
    return {
     pages :  []
    }
  },
  computed: {
        ...mapGetters('approval', ['getCustomerData', 'getIsLoader'])
  },
  methods: {
    handleClick(page) {
      if(page.isRoute) {
        this.$router.push({path: page.isReplace ? '/approvepanel' :`/${page.name.toLowerCase()}`,  query: page.isReplace ? this.$route.query : {}}).catch(() => { })
      }
    }
  },
  watch:{
    getIsLoader: function(value){
      !value && this.pages.length == 1 ?  this.pages.push({ name: `${this.getCustomerData?.opportunity_data?.fsl_user_name}`, current: true, isRoute: false }) : ''
    }
  },
  mounted() {
    this.pages.push({isReplace: this.$route.path.replace('/', '') == 'preview',name: this.$route.path.replace('/', '') == 'preview' ? 'Back' : `${this.$route.query.from.charAt(0).toUpperCase() + this.$route.query.from.slice(1) }`, current: false , isRoute: true})
    this.getCustomerData && this.getCustomerData?.opportunity_data?.fsl_user_name ?  this.pages.push({ name: `${this.getCustomerData?.opportunity_data?.fsl_user_name}`, current: true, isRoute: false }) : ''
  },
  unmounted(){
    this.$store.commit('approval/setCustomerData', [])
  }
}
</script>
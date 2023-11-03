<template>
    <nav class="flex p-5" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li v-for="(page, id) in pages" :key="page.name" @click="handleClick(page)">
          <div class="flex items-center">
            <a class="mr-4 text-sm font-medium" :class="!page.current ? 'violet-color' : 'text-gray-500 hover:text-gray-700'">{{ page.name }}</a>
            <svg v-if="id == 0" class="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
          </div>
        </li>
      </ol>
    </nav>
</template>
  
<script>
import { HomeIcon } from '@heroicons/vue/20/solid'
export default {
  components: { HomeIcon },
  data() {
    return {
     pages :  [
        { name: 'Approval', href: '#', current: false },
      ]
    }
  },
  props: {
    cutomerName: {type:String}
  },
  methods: {
    handleClick(page) {
      if(page.name == 'Approval') {
        this.$router.push('/kycapproval').catch(() => { })
      }
    }
  },
  mounted() {
    this.pages.push({ name: `${this.cutomerName}`, href: '#', current: true })
  },
}
</script>
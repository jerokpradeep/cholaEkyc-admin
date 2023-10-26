<template>
    <nav class="flex p-5" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <!-- <li>
          <div>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li> -->
        <li v-for="(page, id) in pages" :key="page.name" @click="handleClick(page)">
          <div class="flex items-center">
            <a :href="page.href" class="mr-4 text-sm font-medium" :class="!page.current ? 'violet-color' : 'text-gray-500 hover:text-gray-700'">{{ page.name }}</a>
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
        { name: 'All Opportunities', href: '#', current: false },
        { name: 'Stage Details', href: '#', current: true },
      ]
    }
  },
  methods: {
    handleClick(page) {
      if(page.name == 'All Opportunities') {
        this.$store.commit('opportunity/setIsStageDetails', false)
      }
    }
  },
}
</script>
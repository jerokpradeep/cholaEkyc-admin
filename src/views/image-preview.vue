<template>
  <div v-if="!getIsDocsLoader"></div>
  <div>
    <breadcrumbKyc />
  </div>
  <div class="mx-5 my-4">
    <div class="flex w-full gap-4 border-gray-900/10 pb-12 my-4">
      <div class="grid gap-y-4 w-[50%]">
        <div>
          <Listbox as="div" v-model="select1" @click="previewDocument(select1, 'preview')">
            <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Document 1</ListboxLabel>
            <div class="relative mt-2">
              <ListboxButton
                class="relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span class="block ">{{ select1 }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                  class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption as="template" v-for="(person, id) in documentList" :key="id"
                    :value="person['Document Type']" v-slot="{ active, select1 }">
                    <li
                      :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
                      <span :class="[select1 ? 'font-semibold' : 'font-normal', 'block ']">{{ person['Document Type']
                      }}</span>

                      <span v-if="select1"
                        :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="bg-white p-5">
          <preview_file :previewType="getDocumentData.type" :previewData="getDocumentData.data" :isPreBtn="false"/>
        </div>
      </div>
      <div class="grid gap-y-4 w-[50%]">
        <div>
          <Listbox as="div" v-model="select2" @click="previewDocument(select2, 'clone')">
            <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Document 2</ListboxLabel>
            <div class="relative mt-2">
              <ListboxButton
                class="relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span class="block ">{{ select2 }}</span>
                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </ListboxButton>

              <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions
                  class="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <ListboxOption as="template" v-for="(person, id) in documentList" :key="id"
                    :value="person['Document Type']" v-slot="{ active, select2 }">
                    <li
                      :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
                      <span :class="[select2 ? 'font-semibold' : 'font-normal', 'block ']">{{ person['Document Type']
                      }}</span>

                      <span v-if="select2"
                        :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div class="bg-white p-5">
          <preview_file :previewType="getDocumentDataClone.type" :previewData="getDocumentDataClone.data" :isPreBtn="false"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import breadcrumbKyc from '../components/utilComponents/breadcrumbKyc.vue'
const rotateSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
`
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, } from '@heroicons/vue/20/solid'
export default {
  components: { breadcrumbKyc, CheckIcon, ChevronUpDownIcon, Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions },
  data() {
    return {
      imageTest1: '',
      imageTest2: '',
      rotateSvg,
      documentName: 'PAN',
      select1: '',
      select2: '',
      documentList: []
    }
  },
  computed: {
    ...mapGetters('approval', ['getDocumentData', 'getDocumentDataClone', 'getCustomerData', 'getDocuments', 'getIsDocsLoader']),
  },
  methods: {
    async setImage1(what) {
      let globalPic = new Image();
      globalPic.onload = function () {
        document.getElementById(image).src = globalPic.src;
      }
      globalPic.src = await what.value;
      this.imageTest1 = what.value
    },

    setImage2() {
      this.imageTest2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAeix9Joye7BLUw3MYp4_8eeBuEy1ulEkYjnWl9lE&s'
    },

    getDocumentSource(docType, type) {
      this.$store.dispatch('approval/getDocumentData', { str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}`, type: type, docType: docType })
    },

    previewDocument(docName, type) {
      this.documentName = docName
      this.getDocumentSource(docName, type)
    },
  },

  async created() {
    if(this.getCustomerData && this.getCustomerData.opportunity_data && this.getCustomerData.opportunity_data.name){
      await this.$store.dispatch('approval/getDocuments')
    }
  },
  watch:{
    getDocuments: function(){
      this.documentList = this.getDocuments
    if (this.documentList.length) {
      this.select1 = this.$route.query.prefer ? this.$route.query.prefer : this.documentList[0]['Document Type']
      this.select2 = this.documentList.length > 1 ? this.documentList[1]['Document Type'] : this.documentList[0]['Document Type']
      this.previewDocument(this.select1, 'preview')
      this.previewDocument(this.select2, 'clone')
    }
    }
  }
}
</script>
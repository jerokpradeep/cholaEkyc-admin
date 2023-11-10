<template>
  <div v-if="!getIsDocsLoader"></div>
    <div class="mx-5 my-4">
        <!-- <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow" @click="setImage1()">Select Image 1</button> -->
        <!-- <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow" @click="setImage2()">Select Image 2</button> -->
        <div>
          Compare Documents
        </div>
        <div class="flex gap-4 my-4" >
            <select v-model="select1" class="py-2 px-2 rounded" @change="previewDocument(select1, 'preview')">
              <option :value="i['Document Type']" v-for="(i, id) in getDocuments" :key="id">{{ i['Document Type'] }}</option>
            </select>

            <select v-model="select2" class="py-2 px-2 rounded" @change="previewDocument(select2, 'clone')">
              <option :value="i['Document Type']" v-for="(i, id) in getDocuments" :key="id">{{ i['Document Type'] }}</option>
            </select>
        </div>
    </div>
    <!-- <div v-if="$route.query?.ispdf == 'true'">
        <iframe :src="getDocumentData" frameborder="1" class="w-full h-[80vh] px-4"></iframe>
    </div> -->
    <div class="flex w-[97%] m-5 bg-white p-5 min-h-[500px]">
      <VueCropper v-if="getDocumentData" ref="image1" :img="getDocumentData" 
          :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
          :outputSize="1" alt="Source Image" class="cropper !w-[50%]" >
      </VueCropper>
  
      <VueCropper v-if="getDocumentDataClone" ref="image2" :img="getDocumentDataClone" 
          :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
          :outputSize="1" alt="Source Image" class="cropper !w-[50%]" >
      </VueCropper>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";
const rotateSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
`
export default {
  components: { VueCropper },
  data() {
      return {
        imageTest1: '',
        imageTest2: '',
        rotateSvg,
        selectData: [
        {
          docName: 'PAN',
        },
        {
          docName: 'CANCELLED_CHEQUE_OR_STATEMENT',
        },
        {
          docName: 'SIGNATURE',
        },
        {
          docName: 'IPV',
        },
        // {
        //   docName: 'ESIGN_DOCUMENT',
        // },
        // {
        //   docName: 'PROTECTED_ESIGN_DOCUMENT',
        // }
        ],
        documentName: 'PAN',
        select1: '',
        select2: ''
      }
  },
  computed:{
        ...mapGetters('approval', ['getDocumentData','getDocumentDataClone', 'getCustomerData', 'getDocuments', 'getIsDocsLoader']),
    },
  methods: {
    async setImage1(what) {
      let globalPic = new Image();
      globalPic.onload = function () {
          document.getElementById(image).src = globalPic.src;
      }
      globalPic.src =await what.value;
      this.imageTest1 = what.value
    },

    setImage2() {
      this.imageTest2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAeix9Joye7BLUw3MYp4_8eeBuEy1ulEkYjnWl9lE&s'
    },

    getDocumentSource(docType , type) {
      this.$store.dispatch('approval/getDocumentData' , {str: `applicationId=${this.getCustomerData?.opportunity_data?.name}&documentType=${docType}&userId=${this.$store.state.login?.userData?.user}&sessId=${this.$store.state?.login?.userData?.sid}&token=${this.$store.state?.login?.userData?.tempToken}` , type: type , docType : docType })
    },

    previewDocument(docName, type) {
      this.documentName = docName
      this.getDocumentSource(docName, type)
    },
  },

  unmounted() {
    localStorage.setItem('setCurrentImage', JSON.stringify(this.getDocumentData))
  },
  
  async created() {
    await this.$store.dispatch('approval/getDocuments')
    if(this.getDocuments.length) {
      this.select1 = this.getDocuments[0]['Document Type']
      this.select2 = this.getDocuments[1]['Document Type']
      this.previewDocument(this.select1, 'preview')
      this.previewDocument(this.select2, 'clone')
    }
  }
}
</script>
<template>
    <div class="flex gap-4 mx-5 my-4">
        <!-- <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow" @click="setImage1()">Select Image 1</button> -->
        <!-- <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow" @click="setImage2()">Select Image 2</button> -->
        Preview
    </div>
    <div v-if="$route.query?.ispdf == 'true'">
        <iframe :src="getDocumentData" frameborder="1" class="w-full h-[80vh] px-4"></iframe>
    </div>
    <div class="flex w-[97%] m-5 bg-white" v-else>
            <VueCropper v-if="getDocumentData" ref="image1" :img="getDocumentData" 
                :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
                :outputSize="1" alt="Source Image" class="cropper !w-[50%]" >
            </VueCropper>
       
            <VueCropper v-if="imageTest2" ref="image2" :img="imageTest2" 
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
        rotateSvg
      }
  },
  computed:{
        ...mapGetters('approval', ['getDocumentData']),
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
    rotateImage1() {
        this.$refs.image1.rotateRight()	
    }
  },
  unmounted() {
    localStorage.setItem('setCurrentImage', JSON.stringify(this.getDocumentData))
  },
}
</script>
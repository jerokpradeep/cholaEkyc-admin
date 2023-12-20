<template>
     <h2 class="text-base font-semibold leading-7 text-gray-900" v-if="isPreBtn">Preview</h2>
          <div class="my-4" v-if="isPreBtn">
            <button class="bg-[#2490EF] font-semibold text-white text-xs px-4 h-8 rounded-lg shadow"  @click="$router.push({path:'/preview', query: $route.query})">Compare documents</button>
          </div>
<div class="rounded-lg my-4" v-if="previewType && previewData">
    
    <iframe v-if="previewType == 'application/pdf'" :src="previewData" frameborder="1" class="w-full" style="height: 370px !important;"></iframe>
            <VueCropper v-else ref="image1" :img="previewData" 
                :info="true" :canMove="true" :canScale="true" :autoCrop="false" 
                :outputSize="1" alt="Source Image" class="cropper" >
            </VueCropper>
          </div>
</template>

<script>
export default {
    name: 'preview_file',
    data(){
        return {

        }
    },
    props:{
        previewData:{
            type: String,
            required: true,
            default: ''
        },
        previewType: {
            type: String,
            required: true,
            default: ''
        },
        isPreBtn: {
            type: Boolean,
            required: true,
            default: false 
        }
    }
}
</script>
<template>
    <div class="px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 w-full flex"> 
        <div class="w-[30%]">
            Generic Referal URL
        </div>
        <div class="w-[70%] font-normal">
            <div>Generic URL</div>
            <div class="flex items-center border boder-gray-600 rounded gap-2 bg-white">
                <input type="text" class="w-full my-2" id="secKey" :value="`https://devekyc.cholasecurities.com/?refBy=${this.getUserData?.user}`">
                <span class="mr-2 cursor-pointer" @click="copyTxt()"><svg fill="none" stroke="currentColor" stroke-width="1.5" width="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
</svg></span>
            </div>
        </div>
    </div>
    <div class="p-4 h-full">
        <div class="card p-4">
            <div class="mb-6 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">

                <div>
                    <p class="primaryColor pb-1 text-sm">Name</p><input type="text" v-model="name"
                        class="border w-full h-10 rounded focus:outline-0 px-4 text-xs">
                </div>
                <div>
                    <p class="primaryColor pb-1 text-sm">Mobile Number</p><input type="text" v-model="mobNum"
                        @keypress="restrictKey($event)" class="border w-full h-10 rounded focus:outline-0 px-4 text-xs"
                        maxlength="10">
                </div>
                <div class="flex items-end"><button type="button" @click="validateField()"
                        class="bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs">
                        <p>Submit</p>
                    </button></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'url_generation',
    data() {
        return {
            mobNum: '',
            name: '',

        }
    },
    computed: {
        ...mapGetters('approval', ['getCustomerData']),
        ...mapGetters('login', ['getUserData']),

    },
    methods: {
        restrictKey(event) {
            if (
                event.keyCode != 13
            ) {
                var inp = String.fromCharCode(event.keyCode);

                if (/[0-9]/.test(inp)) {
                    return true;
                } else {
                    event.preventDefault();
                    return false;
                }
            }
        },
       async validateField() {
            if (this.name && this.mobNum) {
                let str = `token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}`
                let json = {
                    "mobileNo": this.mobNum,
                    "name": this.name,
                    "referralBy": this.getUserData.user
                }
               await this.$store.dispatch('bo/callGenUrl', {query: str, json: json}).finally(()=> {this.mobNum = this.name = ''})
            } else {
                this.$store.dispatch('errorLog/toaster', {
                    data: {
                        "title": "Enter Your valid Mobile Number / Name",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    }, position: ''
                })
            }
        },
        copyTxt() {
      var copyText = document.getElementById("secKey");
      // Select the text field
      copyText.select();
      copyText.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(copyText.value);
    },
    }
}
</script>

<style>

</style>
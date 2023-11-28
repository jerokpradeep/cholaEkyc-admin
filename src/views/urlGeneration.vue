<template>
    <div class="px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 "> URL Generation</div>
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
        }
    }
}
</script>

<style>
.card {
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
</style>
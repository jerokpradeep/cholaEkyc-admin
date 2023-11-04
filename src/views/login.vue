<template>
    <div class="bg-[#F4F5F6] h-screen flex justify-center items-center overflow-y-auto py-10">
        <div class="bg-white rounded-lg p-8 w-[400px] mx-auto">
            <div class="flex flex-col gap-4 items-center justify-center pb-7">
                <img :src="client_logo" alt="client_logo" class="max-w-[65%] h-auto">
                <p class="my-4">
                    Login to Chola
                </p>
            </div>

            <form @submit.prevent="handleSubmit()" class="flex flex-col gap-4 justify-center items-center w-[320px] mx-auto">
                <div>
                    <label class="form-label sr-only" for="login_email">Email</label>
                    <div class="relative ">
                        <input v-model="emailId" type="text" id="login_email" maxlength="50" class="bg-gray-100 text-sm py-2 px-4 h-8 rounded-lg min-w-[320px]" placeholder="jane@example.com" autofocus="" autocomplete="username">

                    </div>
                </div>

                <div>
                    <label class="form-label sr-only" for="login_password">Password</label>
                    <div class="relative">
                        <input v-model="password" type="password" id="login_password" maxlength="50" class="bg-gray-100 text-sm py-2 px-4 h-8 rounded-lg min-w-[320px]" placeholder="•••••" autocomplete="current-password">

                    </div>
                </div>

                <div class="mt-4">
                    <button type="submit" class="bg-[#2490EF] font-semibold text-white text-xs w-full h-7 rounded-lg min-w-[320px] shadow">
                        <span v-if="!getIsLoading">Login</span>
                        <span v-if="getIsLoading">Loading...</span>
                    </button>
                </div>

                <div class="text-[13px] text-[#70848B]">
                    or
                </div>

                <div>
                    <button type="button" class="bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]">Login With chola</button>
                </div>
                <div>
                    <button type="button" class="bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]">Login With employee</button>
                </div>
               
            </form>
        </div>
    </div>
</template>
<script>
import client_logo from "../assets/image/chola_head.png"
import { mapGetters } from "vuex"
export default {
    data() {
        return {
            client_logo,
            emailId: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters('login', ['getIsLoading'])
    },
    methods: {
        validateRegex(val){
            let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            if(val){
                return email.test(val)
            }
            return false
        },
        handleSubmit() {
            if(this.validateForm()) {
                let json = {
                    emailId: this.emailId,
                    password: this.password
                }
              this.getIsLoading ? '' :  this.$store.dispatch('login/getUserSession', json)
            }else{
                this.$store.dispatch('errorLog/toaster' ,{data: {
                        "title": "Enter Your valid credentials",
                        "type": "danger",
                        "message": '',
                        "duration": 4500
                    },position: ''})
            }
        },
        validateForm() {
            return this.validateRegex(this.emailId) && this.password
        }
    }
}
</script>
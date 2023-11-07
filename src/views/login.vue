<template>
    
    <div class="flex flex-1 flex-col px-4 sm:px-6 lg:px-8 background-img">
            <div class="absolute inset-0 text-slate-900/[0.03] dark:text-slate-900/[0.09]" >
                <svg class="absolute inset-0 h-screen w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%"
                            patternTransform="translate(0 -1)">
                            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
                        </pattern>
                    </defs>
                    <rect width="100vw" height="100vh" fill="url(#grid-bg)"></rect>
                </svg>
            </div>
            <div class="relative flex flex-1 flex-col items-center pt-16 mt-4 pb-16">
                
                <div class="flex justify-center">
                    <img :src="clientLogo" alt="logo" class="max-w-[8%] h-auto" />
                </div>

                <div v-if="$store.state.login?.vendorDetails?.appName" class="primary-color text-base my-2 capitalize">
                    {{ $store.state.login?.vendorDetails?.appName }}
                </div>

                <div class="mt-8 mx-auto w-full max-w-sm">
                    <div class="bg-white dark:bg-zinc-800 py-8 rounded-lg px-10 shadow-md flex justify-center items-center">
                        <div class="w-full">
                            <mobile  v-if="stage == 'mobileNo'" />
                            <password  v-if=" stage == 'password'"/>
                            <email v-if="stage == 'email'"/>
                            <unblockAcc v-if="stage == 'unblockAcc'" />
                            <createPass  v-if="stage == 'createPass'" />
                            <forgetPass v-if="stage == 'forgotPass'"/>
                            <totp v-if="stage == 'totp'" />
                            <webAuthOtp v-if="stage == 'verifyWebAuthOtp'" />
                            <mobileNoOtp v-if="stage == 'verifyNoOtp'"/>
                            <emailOtp v-if="stage == 'verifyEmailOtp'"/>
                            <verifyUnblockOtp v-if="stage == 'verifyUnblockOtp'"/>
                            <verifyForgotOtp v-if="stage == 'verifyForgotOtp'"/>
                            <registerTotp v-if="stage == 'verifyScannerOtp'" />
                            <enableTotp v-if="stage == 'enableTotp'"/>
                            <resetPass v-if="stage == 'resetPass'" />
                            <authorizeVendor v-if="stage == 'authorize'" />
                        </div>
                    </div>
                    
                    <div class="mt-3 space-y-4 text-sm text-[#282828] sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
                        <p class="text-center sm:text-left text-sm text-[#334155] font-semibold ">Don't have an account?</p>
                        <a :href="ekycUrl" target="_blank">
                            <button type="button" class="inline-flex items-center rounded-md border bg-white px-4 py-2 text-xs font-semibold primary-color shadow-sm"> Sign Up
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>

            <!-- footer -->
            <footer class="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 max-w-[380px]">
                <div class="border-slate-900/5 py-10 text-[#334155]">
                    <p class="text-center text-[10px] leading-4">
                        Sky Commodities India Pvt. Ltd
                    </p>
                    <p class="text-center text-[10px] leading-4">
                        SEBI Regn No. INZ000049235 | NSE TM Code: 90221 | BSE Clearing Code: 6745 | MCX TM Code: 46365 | CDSL: IN-DP-588-2021
                    </p>
                    <div class="text-center text-[10px] mt-2">v {{$store.state.appVersion}}</div>
                </div>
                
            </footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import mobile from "../../views/login/mobileNo.vue"
import createPass from "../../views/login/createpass.vue"
import email from "../../views/login/email.vue"
import password from "../../views/login/password.vue"
import unblockAcc from  "../../views/login/unblockAcc.vue"
import forgetPass from "../../views/login/forgetPass.vue"
import totp from "../../views/login/totp.vue"
import webAuthOtp from "../../views/login/verifyWebAuthOtp.vue"
import mobileNoOtp from "../../views/login/verifyNoOtp.vue"
import emailOtp from "../../views/login/verifyEmaiOtp.vue"
import verifyUnblockOtp from "../../views/login/verifyUnblockOtp.vue" 
import verifyForgotOtp from "../../views/login/verifyForgotOtp.vue"
import registerTotp from "../../views/login/registerForTotp.vue"
import enableTotp from "../../views/login/enableTotp.vue"
import resetPass from "../../views/login/resetPassword.vue"
// import clientLogo from "../../assets/img/nidhi-logo.svg"
import clientLogo from "../../assets/img/client-logo.svg"
import authorizeVendor from "./authorizeVendor.vue"
import {env} from "../../_helpers/env"

export default{
    data(){
        return{
            clientLogo,
            ekycUrl : env().EKYCBASEURL
        }
    },
    components: {
        mobile,
        password,
        email,
        createPass,
        unblockAcc,
        forgetPass,
        totp,
        webAuthOtp,
        mobileNoOtp,
        emailOtp,
        verifyUnblockOtp,
        verifyForgotOtp,
        registerTotp,
        enableTotp,
        resetPass,
        authorizeVendor
    },
    computed: {
        ...mapGetters('login',['loader','stage','submitted'])
    },
    methods: {
        
    }
}
</script>
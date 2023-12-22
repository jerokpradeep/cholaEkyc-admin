<template>
    <div>
        <TransitionRoot appear :show="getIsDocRejReasonDialog" as="template">
            <Dialog as="div" class="relative z-10" @close="closeDialog()">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                    leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden radius p-6 text-left align-middle bg-white rounded max-h-[500px] overflow-y-auto">
                                <DialogTitle as="h3" class="text-base pb-2 font-medium leading-6 primaryColor">
                                    <div>
                                        <div class="flex justify-between items-center mt-6 text-xs">
                                            <p>Reject Reason :</p>
                                            <!-- <button class="border px-4 h-8 rounded text-xs" @click="copyResponseBody()">
                                                {{ copyTextRes ? "Copy" : "Copied" }}
                                            </button> -->
                                        </div>
                                        <JsonViewer class="!text-xs" :value="rejectReason" />
                                    </div>
                                </DialogTitle>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import { JsonViewer } from "vue3-json-viewer";
import "vue3-json-viewer/dist/index.css";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
export default {
    data() {
        return {
            formateJSON: false,
            copyText: true,
            copyTextRes: true,
        };
    },
    props: {
        rejectReason: { required: true }
    },
    methods: {
        closeDialog() {
            this.$store.commit('approval/setIsDocRejReasonDialog', false)
        },

        isJsonString(str) {
            try {
                JSON.parse(str);
            } catch (e) {
                return str;
            }
            return JSON.parse(str);
        },
        copyResponseBody() {
            this.copyTextRes = false;
            navigator.clipboard.writeText(JSON.stringify(this.rejectReason));
            var textarea = document.getElementById("jsonDataRes");
            var ok = document.execCommand("copy");
            setInterval(() => {
                this.copyTextRes = true; // Hide the text after 2 seconds
            }, 2000);
        },
    },
    computed: {
        ...mapGetters("approval", [
            "getIsDocRejReasonDialog",
        ]),
    },

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        JsonViewer,
    },
    unmounted() {
        this.$store.commit('approval/setDocRejReason', '')
    },
};
</script>
  
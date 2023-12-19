<template>
    <div>
        <TransitionRoot appear :show="getIsShowDialog" as="template">
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
                                        <!-- <div class="flex pb-4">
                                            <div class="text-xs text-gray-500 mr-2">User ID :</div>
                                            <div class="text-xs text-gray-900">
                                                {{ getAccessRow?.user_id || getAccessRow?.userId }}
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap pb-4">
                                            <div class="text-xs text-gray-500 mr-2">URL :</div>
                                            <div class="text-xs text-gray-900">
                                                {{ jsonValue }}
                                            </div>
                                        </div> -->
                                        <!-- <div class="flex pb-4">
                      <div class="text-xs text-gray-500 mr-2">Method :</div>
                      <div class="text-xs text-gray-900">
                        {{ jsonValue?.method }}
                      </div>
                    </div>
                    <div class="flex pb-4">
                      <div class="text-xs text-gray-500 mr-2">Module :</div>
                      <div class="text-xs text-gray-900">
                        {{ jsonValue?.module }}
                      </div>
                    </div>
                    <div class="flex pb-4 border-b">
                      <div class="text-xs text-gray-500 mr-2">Date :</div>
                      <div class="text-xs text-gray-900">
                        {{
                          jsonValue?.created_on || jsonValue?.createdOn
                        }}
                      </div>
                    </div> -->
                                        <!-- <div class="flex justify-between items-center mt-4 text-xs">
                      <p>Request Body:</p>
                      <button
                        class="border px-4 h-8 rounded text-xs"
                        @click="copyRequestBody()"
                      >
                        {{ copyText ? "Copy" : "Copied" }}
                      </button>
                    </div> -->
                                        <!-- <JsonViewer class="!text-xs" :value="getValue('reqBody')" /> -->

                                        <div class="flex justify-between items-center mt-6 text-xs">
                                            <p>Response Body:</p>
                                            <button class="border px-4 h-8 rounded text-xs" @click="copyResponseBody()">
                                                {{ copyTextRes ? "Copy" : "Copied" }}
                                            </button>
                                        </div>
                                        <JsonViewer class="!text-xs" :value="jsonValue" />
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
        jsonValue: { type: Object }
    },
    methods: {
        closeDialog() {
            this.$store.commit("logs/setIsShowDialog", false);
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
      navigator.clipboard.writeText(JSON.stringify(this.jsonValue));
      var textarea = document.getElementById("jsonDataRes");
      var ok = document.execCommand("copy");
      setInterval(() => {
        this.copyTextRes = true; // Hide the text after 2 seconds
      }, 2000);
    },
    },
    computed: {
        ...mapGetters("logs", [
            "getIsShowDialog",
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
};
</script>
  
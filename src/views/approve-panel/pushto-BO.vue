<template>
     <div class="flex justify-end px-10 py-5">
        <button type="button" class="rounded-md min-w-[150px] bg-white border px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline" @click="this.$store.state.approval.backOfficeLoader ? ''  :this.$store.dispatch('approval/callBo')">  <btnLoader v-if="this.$store.state.approval.backOfficeLoader"/> <span v-else>Push To Backoffice</span></button>
    </div>
</template>
<template>
    <div class="px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 "> Ckyc Download</div>
    <div class="p-4 h-full">
        <div class="card p-4">
        <div class="mb-6 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6">
          
            <div>
                <p class="primaryColor pb-1 text-sm">From Date</p><input type="date"
                    class="border w-full h-10 rounded focus:outline-0 px-4 text-xs" :max="new Date().toISOString().slice(0, 10)">
            </div>
        <div>
            <p class="primaryColor pb-1 text-sm">To Date</p><input type="date" :max="new Date().toISOString().slice(0, 10)" 
                class="border w-full h-10 rounded focus:outline-0 px-4 text-xs">
        </div>
        <div class="flex items-end"><button
                class="bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs">
                <p>Submit</p>
            </button></div>
    </div>
</div>
    </div>
   
</template>

<script>
export default {
    name: 'ckyc_report',
    data() {
        return {

        }
    },
}
</script>

<style>
.card {
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
</style>
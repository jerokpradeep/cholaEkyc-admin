<template>
    <div class="flex flex-col gap-3 p-4 w-full rounded-md mt-10 mb-4 max-w-[600px] bg-red-50 border border-red-400">
        <div class="text-sm text-gray-900">
            Rejected Reason:
        </div>
        <div class="flex text-sm text-red-500">
            {{ reason }}
        </div>
    </div>
</template>
<script setup>
   const props = defineProps(['reason'])
</script>
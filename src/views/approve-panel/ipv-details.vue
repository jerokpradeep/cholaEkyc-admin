<template>
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 pb-12 md:grid-cols-3">
        <div class="grid max-w-2xl grid-cols-1 gap-x-6 sm:grid-cols-6 md:col-span-2">
          <div class="sm:col-span-3">
            <label for="panNumber" class="block text-sm font-medium leading-6 text-gray-900">Capture Date & Time</label>
            <div class="mt-2">
                <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="capturedDate"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Latitude</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="latitude"/>
            </div>
          </div>

          <div class="sm:col-span-3">
            <label for="nameAsPan" class="block text-sm font-medium leading-6 text-gray-900">Longitude</label>
            <div class="mt-2">
              <input type="text" id="nameAsPan" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" disabled v-model="longitude"/>
            </div>
          </div>

        </div>

        <div>
          <h2 class="text-base font-semibold leading-7 text-gray-900">Preview</h2>
          <div class="rounded-lg bg-white border h-[200px] my-4">

          </div>
        </div>

        <div class="sm:col-span-3">
            <button type="button" class="rounded-md bg-white border px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline">MAP View</button>
          </div>
    </div>

    <!-- <div class="flex gap-4 my-4 justify-end">
        <button type="button" class="rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Approve</button>
        <button type="button" class="rounded-md bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Reject</button>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            capturedDate: '2023-10-09 13:51:34.216000',
            latitude: '12.9634631',
            longitude: '80.1871322',
        }
    },
}
</script>
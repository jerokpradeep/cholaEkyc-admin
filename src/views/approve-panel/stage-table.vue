<template>
    <div>
        <table class="bg-white w-[800px] rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] rounded-lg">
            <thead class="border-b dark:border-[#232325] dark:bg-[#181818]">
                <tr>
                <th v-for="(head, id) in tableHeads" :key="id" scope="col" :class="head.class" class="py-3.5 text-[13px] font-medium primaryColor whitespace-nowrap" >
                    {{ head.name }}
                </th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       1
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        PAN
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.pan }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       2
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Profile
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.profile }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       3
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Address
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.address }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       4
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Bank
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.bank }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       5
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Segments
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.segment }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       6
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        IPV
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.IPV }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       7
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Nominees
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        <!-- {{ getStageData?.nominee.length ? getStageData?.nominee[0]?.status : '' }} -->
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       8
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        Documents
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.document }}
                    </td>
                </tr>
                <tr class="border-b cursor-pointer hover:bg-gray-50">
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center">
                       9
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        E-Sign Doc
                    </td>
                    <td class="py-4 text-sm primary-color dark:text-[#94A3B8] relative text-left">
                        {{ getStageData?.Esign }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            tableHeads: [
                { name: "S.No", class: "text-center" },
                { name: "Stage", class: "text-left" },
                { name: "Status", class: "text-left" },
            ],
            tableData: [
                {
                    sno: "1",
                    stage: 'Mobile',
                    status: 'Approved'
                },
                {
                    sno: "2",
                    stage: 'Email',
                    status: 'Approved'
                },
                {
                    sno: "3",
                    stage: 'PAN',
                    status: 'Updated'
                },
                {
                    sno: "4",
                    stage: 'Profile',
                    status: 'Updated'
                },
                {
                    sno: "5",
                    stage: 'Address',
                    status: 'Approved'
                },
                {
                    sno: "6",
                    stage: 'Bank',
                    status: 'Updated'
                },
                {
                    sno: "7",
                    stage: 'Segments',
                    status: 'Updated'
                },
                {
                    sno: "8",
                    stage: 'IPV',
                    status: 'Updated'
                },
                {
                    sno: "9",
                    stage: 'Nominees',
                    status: 'Updated'
                },
                {
                    sno: "10",
                    stage: 'Documents',
                    status: 'Updated'
                },
                {
                    sno: "11",
                    stage: 'E-Sign Doc',
                    status: 'Updated'
                }
            ],
        }
    },
    computed: {
        ...mapGetters('approval', ['getStageData'])
    },
    mounted() {
        if(this.$route.query?.id) {
            this.$store.dispatch('approval/getStageDetails', this.$route.query?.id)
        }
    },
}
</script>
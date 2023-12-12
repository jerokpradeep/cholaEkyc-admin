<template>
  <div class="h-[100vh]">
  <router-view></router-view></div>
</template>

<script>
function  formatDate(date , type){
        let format = ''
        if(date){
          if(type == 'D&T'){
            format = `${[new Date(date).getDate() > 9 ? new Date(date).getDate() : `0${new Date(date).getDate()}`, new Date(date).getMonth() > 9 ? new Date(date).getMonth() : `0${new Date(date).getMonth()}`, new Date(date).getFullYear()].join('-')} ${[(new Date(date).getHours()).toString().padStart(2, '0') ,(new Date(date).getMinutes()).toString().padStart(2, '0') ,(new Date(date).getSeconds()).toString().padStart(2, '0')].join(':')}`
          }
          if(type == 'D'){
            format = [new Date(date).getDate() > 9 ? new Date(date).getDate() : `0${new Date(date).getDate()}`,  new Date(date).getMonth() > 9 ? new Date(date).getMonth() : `0${new Date(date).getMonth()}`, new Date(date).getFullYear()].join('-')
          }
        }
        return format
      }
window.formatDate = formatDate

// document.addEventListener('visibilitychange', function (event) {
//   if (document.hidden) {
//     document.title = 'Un Active'
//   } else {
//     document.title = 'EKYC - Admin'
//   }
// });
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,300");

/* :root {} */

body {
  font-family: "Open Sans", sans-serif !important;
}

.red-btn-c {
  background-color: #fceeed !important;
  color: #df514c !important;
  @apply dark:bg-[#2D1E1E] dark:text-[#DF514C] !font-semibold;
}

.green-btn-c {
  background-color: #eef8ee !important;
  color: #50b554 !important;
  @apply dark:bg-[#4CAF501A] dark:text-[#5B9A5D] !font-semibold;
}

.blue-btn-c {
  background-color: #e7f3fe !important;
  color: #1185f7 !important;
  @apply dark:bg-[#1D242E] dark:text-[#4987EE] !font-semibold;
}

.gray-btn-c {
  background-color: #f1f1f2 !important;
  color: #323232 !important;
  @apply dark:bg-[#BDBDBD1A] dark:text-[#BBBBBB] !font-semibold;
}

.orange-btn-c {
  background-color: #fff5ec !important;
  color: #ff9900 !important;
  @apply dark:text-[#c2852a] dark:bg-[#28201a] !font-semibold;
}

.purple-btn-c {
  background-color: #f4ebff !important;
  color: #913aff !important;
  @apply dark:text-[#844AEB] dark:!bg-[#252327] !font-semibold;
}

.pink-btn-c {
  background-color: #fff2fa !important;
  color: #ff00a8 !important;
  @apply dark:text-[#c53794] dark:bg-[#33242d] !font-semibold;
}

::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.4rem;
  @apply cursor-pointer;
}
.sidebar::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  @apply cursor-pointer;
}

::-webkit-scrollbar-thumb {
  background-color: #d5d4d4;
  border-radius: 999px;
  border: 1px solid #d5d4d4;
  height: 4px !important;
}

.overflowinherit {
  overflow: inherit !important;
}

.primary-color {
  @apply !text-[#070A26] !font-medium dark:!text-[#ebebeb];
}

.secondary-color {
  @apply !text-[#8b8b8b] !font-medium dark:!text-[#8d8b8b];
}

.green-color {
  @apply !text-[#4CAF50] !font-medium;
}

.red-color {
  @apply !text-[#E34242] !font-medium;
}

.green-bg {
  @apply !bg-[#4CAF50];
}

.red-bg {
  @apply !bg-[#E34242];
}

.violet-color {
  @apply text-[#753ED7] font-medium;
}

.violet-bg {
  @apply !bg-[#753ED7];
}

/* .secondary-violet-bg {
  @apply !bg-[#F0F6FD] dark:!bg-[#27272A];
} */

.z-index-full {
  z-index: 99 !important;
}

/* new css */
.commonbtn {
  @apply !px-4 !py-2 !text-sm !bg-[#753ED7] !text-white !rounded-md;
}
.commonbtn:disabled,
.cancelbtn:disabled {
  @apply !opacity-60 !bg-gray-400 cursor-not-allowed;
}

.cancelbtn {
  @apply !px-4 !py-2 !text-sm !bg-white !border !rounded-md !text-[#070A25] hover:!bg-gray-100;
}

input[type="text"] {
  @apply px-4;
}

.bluebtn {
  @apply px-2 text-[10px] rounded min-w-[40px] h-6 font-semibold bg-[#e8f4ff] text-[#0060b9] dark:bg-[#1D242E] dark:text-[#4987EE];
}
.graybtn {
  @apply px-2 text-[10px] rounded min-w-[40px] h-6 font-semibold bg-[#e9ecf1] text-[#333638] dark:bg-[#BDBDBD1A] dark:text-[#BBBBBB];
}
.redbtn {
  @apply px-2 text-[10px] rounded min-w-[40px] h-6 font-semibold bg-[#fceeed] text-[#df514c] dark:bg-[#2D1E1E] dark:text-[#DF514C];
}
.greenbtn {
  @apply px-2 text-[10px] rounded min-w-[40px] h-6 font-semibold bg-[#eef8ee] text-[#50b554] dark:bg-[#4CAF501A] dark:text-[#5B9A5D];
}

.table-sticky {
  border-collapse: collapse;
}
.table-sticky thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: inset 0 -1px 0 #ededed;
  @apply bg-white;
}
.secondaryColor {
  @apply !text-[#56585A]
}

.primaryColor {
  @apply text-[#000000]
}

.themeBtn {
  @apply min-h-[32px] px-4 text-sm rounded !bg-[#4CADD6] text-[#ffffff] tracking-[0.2px] outline-none;
}
.cancelBtn {
  @apply min-h-[32px] px-4 text-sm rounded bg-[#ffffff] border border-[#a2a2a2] text-[#17181A] tracking-[0.2px] outline-none;
}
.cropper {
	height: 50vh !important;
  width: auto !important;
	background: transparent !important;
}
</style>



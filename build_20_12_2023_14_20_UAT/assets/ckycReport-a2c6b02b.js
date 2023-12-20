import{_ as h,m as d,r as g,o as w,c as f,a as t,s as c,q as D,F as v,y as m,z as p}from"./index-df8c250c.js";const _={name:"ckyc_report",data(){return{fromDate:"",toDate:"",currentDate:new Date().toISOString().split("T")[0]}},computed:{...d("approval",["getCustomerData"]),...d("login",["getUserData"])},methods:{async validateField(){if(this.fromDate&&this.toDate){let r=[new Date(this.fromDate).getDate()>9?new Date(this.fromDate).getDate():`0${new Date(this.fromDate).getDate()}`,new Date(this.fromDate).getMonth()>9?new Date(this.fromDate).getMonth():`0${new Date(this.fromDate).getMonth()}`,new Date(this.fromDate).getFullYear()].join("-"),e=[new Date(this.toDate).getDate()>9?new Date(this.toDate).getDate():`0${new Date(this.toDate).getDate()}`,new Date(this.toDate).getMonth()>9?new Date(this.toDate).getMonth():`0${new Date(this.toDate).getMonth()}`,new Date(this.toDate).getFullYear()].join("-"),i=`token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}&Todate=${e}&frmdate=${r}`;await this.$store.dispatch("bo/callDownload",i).finally(()=>{this.fromDate=this.toDate=""})}else this.$store.dispatch("errorLog/toaster",{data:{title:"Select a From & To Date",type:"danger",message:"",duration:4500},position:""})}}},x=t("div",{class:"px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10"}," CKYC Download",-1),Y={class:"p-4 h-full"},k={class:"card p-4"},b={class:"mb-6 gap-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6"},M=t("p",{class:"primaryColor pb-1 text-sm"},"From Date",-1),y=["onClick"],C=["value"],V=t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"},[t("svg",{fill:"none",stroke:"currentColor",class:"w-4","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})])],-1),A=t("p",{class:"primaryColor pb-1 text-sm"},"To Date",-1),F=["onClick"],j=["value"],$=t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700"},[t("svg",{fill:"none",stroke:"currentColor",class:"w-4","stroke-width":"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})])],-1),T={class:"flex items-end"},U=t("p",null,"Submit",-1),B=[U];function S(r,e,i,I,s,u){const l=g("VDatePicker");return w(),f(v,null,[x,t("div",Y,[t("div",k,[t("div",b,[t("div",null,[M,c(l,{"max-date":s.currentDate,modelValue:s.fromDate,"onUpdate:modelValue":e[0]||(e[0]=o=>s.fromDate=o),mode:"date",popover:!1,masks:{input:"DD-MM-YYYY",modelValue:"YYYY-MM-DD"}},{default:D(({togglePopover:o,inputValue:a,inputEvents:n})=>[t("div",{class:"flex items-center justify-between w-[75%] h-[32px] border rounded p-2",onClick:()=>o()},[t("input",m({value:a,placeholder:"DD/MM/YYYY"},p(n,!0),{id:"vtd_inp",class:"w-[90px] text-xs outline-none cursor-pointer",readonly:""}),null,16,C),V],8,y)]),_:1},8,["max-date","modelValue"])]),t("div",null,[A,c(l,{"max-date":s.currentDate,modelValue:s.toDate,"onUpdate:modelValue":e[1]||(e[1]=o=>s.toDate=o),"min-date":s.fromDate,mode:"date",popover:!1,masks:{input:"DD-MM-YYYY",modelValue:"YYYY-MM-DD"}},{default:D(({togglePopover:o,inputValue:a,inputEvents:n})=>[t("div",{class:"flex items-center justify-between w-[75%] h-[32px] border rounded p-2",onClick:()=>o()},[t("input",m({value:a,placeholder:"DD/MM/YYYY"},p(n,!0),{id:"vtd_inp",class:"w-[90px] text-xs outline-none cursor-pointer",readonly:""}),null,16,j),$],8,F)]),_:1},8,["max-date","modelValue","min-date"])]),t("div",T,[t("button",{type:"button",onClick:e[2]||(e[2]=o=>u.validateField()),class:"bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs"},B)])])])])],64)}const z=h(_,[["render",S]]);export{z as default};

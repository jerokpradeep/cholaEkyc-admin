import{_ as d,m as r,o as c,c as m,a as t,b as n,v as l,F as p}from"./index-44d77834.js";const h={name:"ckyc_report",data(){return{fromDate:"",toDate:""}},computed:{...r("approval",["getCustomerData"]),...r("login",["getUserData"])},methods:{async validateField(){if(this.fromDate&&this.toDate){let a=[new Date(this.fromDate).getDate()>9?new Date(this.fromDate).getDate():`0${new Date(this.fromDate).getDate()}`,new Date(this.fromDate).getMonth()>9?new Date(this.fromDate).getMonth():`0${new Date(this.fromDate).getMonth()}`,new Date(this.fromDate).getFullYear()].join("-"),e=[new Date(this.toDate).getDate()>9?new Date(this.toDate).getDate():`0${new Date(this.toDate).getDate()}`,new Date(this.toDate).getMonth()>9?new Date(this.toDate).getMonth():`0${new Date(this.toDate).getMonth()}`,new Date(this.toDate).getFullYear()].join("-"),i=`token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}&Todate=${e}&frmdate=${a}`;await this.$store.dispatch("bo/callDownload",i).finally(()=>{this.fromDate=this.toDate=""})}else this.$store.dispatch("errorLog/toaster",{data:{title:"Select a From & To Date",type:"danger",message:"",duration:4500},position:""})}}},u=t("div",{class:"px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10"}," Ckyc Download",-1),g={class:"p-4 h-full"},f={class:"card p-4"},w={class:"mb-6 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6"},_=t("p",{class:"primaryColor pb-1 text-sm"},"From Date",-1),x=["max"],b=t("p",{class:"primaryColor pb-1 text-sm"},"To Date",-1),v=["min","max"],y={class:"flex items-end"},k=t("p",null,"Submit",-1),F=[k];function S(a,e,i,$,o,D){return c(),m(p,null,[u,t("div",g,[t("div",f,[t("div",w,[t("div",null,[_,n(t("input",{type:"date","onUpdate:modelValue":e[0]||(e[0]=s=>o.fromDate=s),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer",max:new Date().toISOString().slice(0,10)},null,8,x),[[l,o.fromDate]])]),t("div",null,[b,n(t("input",{type:"date","onUpdate:modelValue":e[1]||(e[1]=s=>o.toDate=s),min:o.fromDate?new Date(o.fromDate).toISOString().slice(0,10):o.fromDate,max:new Date().toISOString().slice(0,10),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer"},null,8,v),[[l,o.toDate]])]),t("div",y,[t("button",{type:"button",onClick:e[2]||(e[2]=s=>D.validateField()),class:"bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs"},F)])])])])],64)}const T=d(h,[["render",S]]);export{T as default};

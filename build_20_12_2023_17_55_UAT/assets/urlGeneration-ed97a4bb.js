import{_ as u,m as a,o as c,c as m,a as e,b as n,v as d,F as p}from"./index-0dd23db5.js";const h={name:"url_generation",data(){return{mobNum:"",name:""}},computed:{...a("approval",["getCustomerData"]),...a("login",["getUserData"])},methods:{restrictKey(s){if(s.keyCode!=13){var t=String.fromCharCode(s.keyCode);return/[0-9]/.test(t)?!0:(s.preventDefault(),!1)}},async validateField(){if(this.name&&this.mobNum){let s=`token=${this.getUserData.tempToken}&sessId=${this.getUserData.sid}&userId=${this.getUserData.user}`,t={mobileNo:this.mobNum,name:this.name,referralBy:this.getUserData.user};await this.$store.dispatch("bo/callGenUrl",{query:s,json:t}).finally(()=>{this.mobNum=this.name=""})}else this.$store.dispatch("errorLog/toaster",{data:{title:"Enter Your valid Mobile Number / Name",type:"danger",message:"",duration:4500},position:""})},copyTxt(){var s=document.getElementById("secKey");s.select(),s.setSelectionRange(0,99999),navigator.clipboard.writeText(s.value)}}},v={class:"px-5 pb-4 pt-5 font-bold text-base w-full dark:text-white sticky top-0 z-10 w-full flex"},x=e("div",{class:"w-[30%]"}," Generic Referal URL ",-1),g={class:"w-[70%] font-normal"},_=e("div",null,"Generic URL",-1),b={class:"flex items-center border boder-gray-600 rounded gap-2 bg-white"},f=["value"],y=e("svg",{fill:"none",stroke:"currentColor","stroke-width":"1.5",width:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"})],-1),w=[y],k={class:"p-4 h-full"},N={class:"card p-4"},U={class:"mb-6 gap-2 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6"},C=e("p",{class:"primaryColor pb-1 text-sm"},"Name",-1),D=e("p",{class:"primaryColor pb-1 text-sm"},"Mobile Number",-1),B={class:"flex items-end"},T=e("p",null,"Submit",-1),G=[T];function K(s,t,V,$,r,i){var l;return c(),m(p,null,[e("div",v,[x,e("div",g,[_,e("div",b,[e("input",{type:"text",class:"w-full my-2",id:"secKey",value:`https://devekyc.cholasecurities.com/?refBy=${(l=this.getUserData)==null?void 0:l.user}`},null,8,f),e("span",{class:"mr-2 cursor-pointer",onClick:t[0]||(t[0]=o=>i.copyTxt())},w)])])]),e("div",k,[e("div",N,[e("div",U,[e("div",null,[C,n(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=o=>r.name=o),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs"},null,512),[[d,r.name]])]),e("div",null,[D,n(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=o=>r.mobNum=o),onKeypress:t[3]||(t[3]=o=>i.restrictKey(o)),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs",maxlength:"10"},null,544),[[d,r.mobNum]])]),e("div",B,[e("button",{type:"button",onClick:t[4]||(t[4]=o=>i.validateField()),class:"bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs"},G)])])])])],64)}const H=u(h,[["render",K]]);export{H as default};

import{c as m}from"./chola_head-8c4d2fef.js";import{_ as p,m as u,o as l,c as n,a as e,w as g,b as a,v as d,d as r}from"./index-6c4a6457.js";const h={data(){return{client_logo:m,emailId:"",password:""}},computed:{...u("login",["getIsLoading"])},methods:{validateRegex(s){let t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return s?t.test(s):!1},handleSubmit(){if(this.validateForm()){let s={emailId:this.emailId,password:this.password};this.getIsLoading||this.$store.dispatch("login/getUserSession",s)}else this.$store.dispatch("errorLog/toaster",{data:{title:"Enter Your valid credentials",type:"danger",message:"",duration:4500},position:""})},validateForm(){return this.validateRegex(this.emailId)&&this.password}}},x={class:"bg-[#F4F5F6] h-screen flex justify-center items-center overflow-y-auto py-10"},_={class:"bg-white rounded-lg p-8 w-[400px] mx-auto"},f={class:"flex flex-col gap-4 items-center justify-center pb-7"},w=["src"],b=e("p",{class:"my-4"}," Login to Chola ",-1),v=e("label",{class:"form-label sr-only",for:"login_email"},"Email",-1),y={class:"relative"},F=e("label",{class:"form-label sr-only",for:"login_password"},"Password",-1),L={class:"relative"},I={class:"mt-4"},j={type:"submit",class:"bg-[#2490EF] font-semibold text-white text-xs w-full h-7 rounded-lg min-w-[320px] shadow"},A={key:0},k={key:1},B=e("div",{class:"text-[13px] text-[#70848B]"}," or ",-1),C=e("div",null,[e("button",{type:"button",class:"bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]"},"Login With chola")],-1),E=e("div",null,[e("button",{type:"button",class:"bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]"},"Login With employee")],-1);function S(s,t,V,z,o,c){return l(),n("div",x,[e("div",_,[e("div",f,[e("img",{src:o.client_logo,alt:"client_logo",class:"max-w-[65%] h-auto"},null,8,w),b]),e("form",{onSubmit:t[2]||(t[2]=g(i=>c.handleSubmit(),["prevent"])),class:"flex flex-col gap-4 justify-center items-center w-[320px] mx-auto"},[e("div",null,[v,e("div",y,[a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>o.emailId=i),type:"text",id:"login_email",maxlength:"50",class:"bg-gray-100 text-sm py-2 px-4 h-8 rounded-lg min-w-[320px]",placeholder:"jane@example.com",autofocus:"",autocomplete:"username"},null,512),[[d,o.emailId]])])]),e("div",null,[F,e("div",L,[a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>o.password=i),type:"password",id:"login_password",maxlength:"50",class:"bg-gray-100 text-sm py-2 px-4 h-8 rounded-lg min-w-[320px]",placeholder:"•••••",autocomplete:"current-password"},null,512),[[d,o.password]])])]),e("div",I,[e("button",j,[s.getIsLoading?r("",!0):(l(),n("span",A,"Login")),s.getIsLoading?(l(),n("span",k,"Loading...")):r("",!0)])]),B,C,E],32)])])}const M=p(h,[["render",S]]);export{M as default};
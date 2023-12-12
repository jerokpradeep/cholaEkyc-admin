import{c as p}from"./chola_head-02c8aa65.js";import{_ as c,m,r as u,o as l,c as n,a as e,w as h,b as a,v as g,d as x,e as w}from"./index-45615c5c.js";const _={data(){return{client_logo:p,emailId:"",password:"",isPassType:"password"}},computed:{...m("login",["getIsLoading"])},methods:{validateRegex(o){let t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;return o?t.test(o.trim()):!1},handleSubmit(){if(this.validateForm()){let o={emailId:this.emailId,password:this.password};this.getIsLoading||this.$store.dispatch("login/getUserSession",o)}else this.$store.dispatch("errorLog/toaster",{data:{title:"Enter Your valid credentials",type:"danger",message:"",duration:4500},position:""})},validateForm(){return this.validateRegex(this.emailId)&&this.password}}},f={class:"bg-[#F4F5F6] h-screen flex justify-center items-center overflow-y-auto py-10"},v={class:"bg-white rounded-lg p-8 w-[400px] mx-auto"},C={class:"flex flex-col gap-4 items-center justify-center pb-7"},b=["src"],y=e("p",{class:"my-4"}," Login to Chola ",-1),V=e("label",{class:"form-label sr-only",for:"login_email"},"Email",-1),k={class:"relative"},H=e("svg",{class:"absolute top-2 left-2",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M2.5 7.65149V15.0757C2.5 15.4374 2.64367 15.7842 2.8994 16.04C3.15513 16.2957 3.50198 16.4394 3.86364 16.4394H16.1364C16.498 16.4394 16.8449 16.2957 17.1006 16.04C17.3563 15.7842 17.5 15.4374 17.5 15.0757V7.65149",stroke:"#74808B","stroke-miterlimit":"10","stroke-linecap":"square"}),e("path",{d:"M17.5 7.57572V5.53026C17.5 5.1686 17.3563 4.82176 17.1006 4.56603C16.8449 4.31029 16.498 4.16663 16.1364 4.16663H3.86364C3.50198 4.16663 3.15513 4.31029 2.8994 4.56603C2.64367 4.82176 2.5 5.1686 2.5 5.53026V7.57572L10 10.8333L17.5 7.57572Z",stroke:"#74808B","stroke-miterlimit":"10","stroke-linecap":"square"})],-1),L=e("label",{class:"form-label sr-only",for:"login_password"},"Password",-1),B={class:"relative"},F=["type"],M=e("svg",{class:"absolute top-2 left-2",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.0961 1.93768H10.0264C8.94806 1.92763 7.90976 2.34591 7.13951 3.10075C6.36866 3.85619 5.9294 4.88687 5.91833 5.96612L5.91831 5.96612V5.97124V6.52695H4.3125C3.20793 6.52695 2.3125 7.42238 2.3125 8.52695V16.0165C2.3125 17.121 3.20793 18.0165 4.3125 18.0165H15.7356C16.8401 18.0165 17.7356 17.121 17.7356 16.0165V8.52695C17.7356 7.42238 16.8401 6.52695 15.7356 6.52695H14.1297V6.04576C14.1397 4.96742 13.7214 3.92913 12.9666 3.15888C12.2112 2.38803 11.1805 1.94877 10.1012 1.9377V1.93768H10.0961ZM13.1297 6.52695V6.04336V6.03838H13.1297C13.1378 5.22428 12.8222 4.44029 12.2524 3.85881C11.6831 3.27793 10.9067 2.94667 10.0934 2.93768H10.024H10.019V2.93765C9.20491 2.92955 8.42092 3.24512 7.83944 3.81497C7.25856 4.38423 6.9273 5.1607 6.91831 5.9739V6.52695H13.1297ZM4.3125 7.52695C3.76022 7.52695 3.3125 7.97467 3.3125 8.52695V16.0165C3.3125 16.5687 3.76022 17.0165 4.3125 17.0165H15.7356C16.2879 17.0165 16.7356 16.5687 16.7356 16.0165V8.52695C16.7356 7.97467 16.2879 7.52695 15.7356 7.52695H4.3125ZM10.0242 13.2384C10.5581 13.2384 10.9909 12.8056 10.9909 12.2717C10.9909 11.7377 10.5581 11.3049 10.0242 11.3049C9.49023 11.3049 9.05738 11.7377 9.05738 12.2717C9.05738 12.8056 9.49023 13.2384 10.0242 13.2384ZM11.9909 12.2717C11.9909 13.3579 11.1104 14.2384 10.0242 14.2384C8.93794 14.2384 8.05738 13.3579 8.05738 12.2717C8.05738 11.1854 8.93794 10.3049 10.0242 10.3049C11.1104 10.3049 11.9909 11.1854 11.9909 12.2717Z",fill:"#74808B"})],-1),I={class:"mt-4"},Z={type:"submit",class:"bg-[#2490EF] font-semibold text-white text-xs w-full h-7 rounded-lg min-w-[320px] shadow"},j={key:0},P=e("div",{class:"text-[13px] text-[#70848B]"}," or ",-1),T=e("div",null,[e("button",{type:"button",class:"bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]"},"Login With chola")],-1),A=e("div",null,[e("button",{type:"button",class:"bg-[#F4F5F6] transition-all duration-200 hover:bg-[#dddee0] flex justify-center items-center text-[#4C5A67] font-semibold text-xs w-full h-7 rounded-lg min-w-[320px]"},"Login With employee")],-1);function S(o,t,E,z,s,r){const d=u("btnLoader");return l(),n("div",f,[e("div",v,[e("div",C,[e("img",{src:s.client_logo,alt:"client_logo",class:"max-w-[65%] h-auto"},null,8,b),y]),e("form",{onSubmit:t[4]||(t[4]=h(i=>r.handleSubmit(),["prevent"])),class:"flex flex-col gap-4 justify-center items-center w-[320px] mx-auto"},[e("div",null,[V,e("div",k,[a(e("input",{"onUpdate:modelValue":t[0]||(t[0]=i=>s.emailId=i),type:"text",id:"login_email",maxlength:"50",class:"bg-gray-100 min-h-[35px] text-sm py-2 indent-5 h-8 rounded-lg min-w-[320px]",placeholder:"jane@example.com",autofocus:"",autocomplete:"username"},null,512),[[g,s.emailId]]),H])]),e("div",null,[L,e("div",B,[a(e("input",{"onUpdate:modelValue":t[1]||(t[1]=i=>s.password=i),type:s.isPassType,id:"login_password",maxlength:"50",class:"bg-gray-100 min-h-[35px] text-sm py-2 indent-5 px-5 h-8 rounded-lg min-w-[320px]",placeholder:"•••••",autocomplete:"current-password"},null,8,F),[[x,s.password]]),M,s.isPassType=="password"?(l(),n("div",{key:0,class:"absolute top-2 cursor-pointer right-2 text-[#74808B] text-xs select-none",onClick:t[2]||(t[2]=i=>s.isPassType="text")},"Show")):(l(),n("div",{key:1,class:"absolute top-2 cursor-pointer right-2 text-[#74808B] text-xs select-none",onClick:t[3]||(t[3]=i=>s.isPassType="password")},"Hide"))])]),e("div",I,[e("button",Z,[o.getIsLoading?(l(),w(d,{key:1})):(l(),n("span",j,"Login"))])]),P,T,A],32)])])}const D=c(_,[["render",S]]);export{D as default};

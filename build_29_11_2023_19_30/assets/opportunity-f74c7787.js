import{P as N,c as z}from"./Chevron-047c33ef.js";import{m as C,_ as w,o,c as a,a as e,b as A,v as D,w as U,F as g,u as v,x as h,t as d,y as _,z as j,A as V,r as u,B as S,e as f,s as y,q as b,C as H,T as G}from"./index-c331996b.js";import{r as K}from"./HomeIcon-998c4f9d.js";import{B as Q,N as R,K as J,U as W,H as X}from"./listbox-8ccf38b6.js";import{t as Y}from"./tabs-6b8c44e1.js";import"./use-text-value-791e6be0.js";const Z="/ekycadmin/assets/filledSvg-d1c7d4e3.svg";const ee={components:{},data(){return{Progress:N,chevronSvg:z,filledSvg:Z,tableHeads:[{name:"S.No",class:"text-center"},{name:"Customer Name",class:"text-left"},{name:"PAN",class:"text-center"},{name:"Current phases",class:"text-center"},{name:"Phases",class:"text-center"},{name:"Hours consumed",class:"text-center"},{name:"Progress State",class:"text-center"}],fromDate:"",toDate:"",status:"",application:"",panNo:"",mobileNo:""}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"]),...C("approval",["getIsLoader"])},methods:{getFormat(t){return window.formatDate(t,"D&T")},getHours(t){let l=Math.abs(new Date().valueOf()-new Date(t).valueOf())/(24*60*60*1e3),i=l%1*24,n=i%1*60,p=n%1*60;return[l,i,n,p]=[Math.floor(l),Math.floor(i),Math.floor(n),Math.floor(p)],Number(l)!=0?`${l}d, ${i}h : ${n}m`:Number(i)!=0?`${i}h:${n}m`:`${n}m`},getGrayStarCount(t,r){if(t==13)return[];let l=Number(t),i=[];if(l=Math.round(l),l=13-l,t&&l){for(let n=0;n<l;n++)i.push(n);return i}else return 12},getGreenStarCount(t){let r=Math.round(Number(t)),l=[];if(t&&r){for(let i=0;i<r;i++)l.push(i);return l}else return 13},getAllOppertunities(){},async goToApprovalPage(t){t&&t.opportunity_id&&await this.$store.dispatch("approval/getCustomerData",t==null?void 0:t.opportunity_id).finally(()=>{this.$router.push(`/approvepanel?id=${t==null?void 0:t.opportunity_id}&from=${this.$route.fullPath.toString().replace("/","")}`).catch(()=>{}),this.$store.commit("setQuries",{data:{tab:0},action:"change",overRideKey:"approvepanel"})})}}},te=t=>(j("data-v-27355d79"),t=t(),V(),t),se=["max"],oe=["max"],ne=te(()=>e("button",{type:"submit",class:"flex justify-center items-center min-w-[100px] h-[32px] py-2 px-4 rounded-lg text-xs text-white font-bold bg-[#753ED7]"},"Submit",-1)),ae={key:0,class:"w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},re={class:"border-b dark:border-[#232325] dark:bg-[#181818]"},le=["onClick"],ie={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ce={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-left"},de={class:"flex py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center"},pe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ue={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative items-center justify-center"},me={key:0,class:"flex items-center justify-center"},he=["src"],ge=["src"],_e={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},xe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"};function fe(t,r,l,i,n,p){return o(),a("div",null,[e("form",{onSubmit:r[2]||(r[2]=U(s=>p.getAllOppertunities(),["prevent"])),class:"flex gap-3 flex-wrap mb-2"},[A(e("input",{type:"date","onUpdate:modelValue":r[0]||(r[0]=s=>n.fromDate=s),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8",max:new Date().toISOString().split("T")[0]},null,8,se),[[D,n.fromDate]]),A(e("input",{type:"date","onUpdate:modelValue":r[1]||(r[1]=s=>n.toDate=s),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8",max:new Date().toISOString().split("T")[0]},null,8,oe),[[D,n.toDate]]),ne],32),!t.getIsStageDetails&&!t.getIsLoader?(o(),a("table",ae,[e("thead",re,[e("tr",null,[(o(!0),a(g,null,v(n.tableHeads,(s,m)=>(o(),a("th",{key:m,scope:"col",class:h([s.class,"py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"])},d(s.name),3))),128))])]),e("tbody",null,[(o(!0),a(g,null,v(t.getAllOpportunities,(s,m)=>(o(),a("tr",{key:m,class:"border-b hover:bg-gray-50 cursor-pointer",onClick:x=>p.goToApprovalPage(s)},[e("td",ie,d(m+1),1),e("td",ce,d(s.customer_name),1),e("td",de,d(s.fsl_pan_no),1),e("td",pe,d(s.phase),1),e("td",ue,[s!=null&&s.stage?(o(),a("div",me,[(o(!0),a(g,null,v(p.getGreenStarCount(s==null?void 0:s.stage),x=>(o(),a("img",{class:h(["w-3 text-right h-5",{"color-green-500":s.Phases}]),src:n.filledSvg,alt:"greenstar",key:x},null,10,he))),128)),(o(!0),a(g,null,v(p.getGrayStarCount(s==null?void 0:s.stage,s.phase),x=>(o(),a("img",{class:h(["w-3 text-right h-5",{"color-green-500":s.Phases}]),src:n.chevronSvg,alt:"graystar",key:x},null,10,ge))),128))])):_("",!0)]),e("td",_e,d(s!=null&&s.time?p.getHours(s.time):s==null?void 0:s.time),1),e("td",xe,[e("button",{depressed:"",class:h(["tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default",s["current phase"]=="In-Progress"?"blue-btn-c":s["current phase"]=="Open"?"gray-btn-c":s["current phase"]=="Completed"||s["current phase"]=="Approved"?"green-btn-c":"gray-btn-c"])},d(s["current phase"]),3)])],8,le))),128))])])):_("",!0)])}const ye=w(ee,[["render",fe],["__scopeId","data-v-27355d79"]]);function B(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z","clip-rule":"evenodd"})])}function O(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z","clip-rule":"evenodd"})])}function M(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z","clip-rule":"evenodd"})])}function L(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"})])}function I(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"})])}function ve(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})])}function P(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})])}const be={components:{HomeIcon:K},data(){return{pages:[{name:"My Opportunity",href:"#",current:!1},{name:"Stage Details",href:"#",current:!0}]}},methods:{handleClick(t){t.name=="My Opportunity"&&this.$store.commit("opportunity/setIsStageDetails",!1)}}},we={class:"flex p-3","aria-label":"Breadcrumb"},Ce={role:"list",class:"flex items-center space-x-4"},Te=["onClick"],$e={class:"flex items-center"},ke=["href"],Se={key:0,class:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true"},Ae=e("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"},null,-1),De=[Ae];function He(t,r,l,i,n,p){return o(),a("nav",we,[e("ol",Ce,[(o(!0),a(g,null,v(n.pages,(s,m)=>(o(),a("li",{key:s.name,onClick:x=>p.handleClick(s)},[e("div",$e,[e("a",{href:s.href,class:h(["mr-4 text-sm font-medium",s.current?"text-gray-500 hover:text-gray-700":"violet-color"])},d(s.name),11,ke),m==0?(o(),a("svg",Se,De)):_("",!0)])],8,Te))),128))])])}const Be=w(be,[["render",He]]);function Oe(t,r){return o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})])}const Me={components:{CheckCircleIcon:Oe,FaceFrownIcon:B,FaceSmileIcon:O,FireIcon:M,HandThumbUpIcon:L,HeartIcon:I,PaperClipIcon:ve,XMarkIcon:P,Listbox:Q,ListboxButton:R,ListboxLabel:J,ListboxOption:W,ListboxOptions:X},data(){return{activity:[{id:1,type:"Mobile OTP Verified",person:{name:"Chelsea Hagon"},date:"7d ago",dateTime:"2023-01-23T10:32"},{id:2,type:"EMail OTP Verified",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:03"},{id:3,type:"Password Setup Completed",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:24"},{id:4,type:"commented",person:{name:"Chelsea Hagon",imageUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},comment:"Called client, they reassured me the invoice would be paid by the 25th.",date:"3d ago",dateTime:"2023-01-23T15:56"},{id:5,type:"PAN Entered",person:{name:"Chelsea Hagon"},date:"2d ago",dateTime:"2023-01-24T09:12"},{id:6,type:"PAN name Check",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:8,type:"PAN Confirmed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:9,type:"KRA DOB Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:10,type:"AADHAR Entry",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:11,type:"Profile Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:12,type:"Bank Entry Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:13,type:"Penny Drop Successfull",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:14,type:"Segment Selection Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:15,type:"Payment Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:16,type:"Nominee 1 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:17,type:"Nominee 2 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:18,type:"Nominee 3 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:19,type:"Nominee Allocation Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:20,type:"Document Upload",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"}],moods:[{name:"Excited",value:"excited",icon:M,iconColor:"text-white",bgColor:"bg-red-500"},{name:"Loved",value:"loved",icon:I,iconColor:"text-white",bgColor:"bg-pink-400"},{name:"Happy",value:"happy",icon:O,iconColor:"text-white",bgColor:"bg-green-400"},{name:"Sad",value:"sad",icon:B,iconColor:"text-white",bgColor:"bg-yellow-400"},{name:"Thumbsy",value:"thumbsy",icon:L,iconColor:"text-white",bgColor:"bg-blue-500"},{name:"I feel nothing",value:null,icon:P,iconColor:"text-gray-400",bgColor:"bg-transparent"}],selected:[]}},unmounted(){this.$store.commit("opportunity/setIsStageDetails",!1)},mounted(){this.selected=this.moods[5]}},Le={class:"p-5 max-w-[1000px] h-[calc(100vh-160px)] overflow-y-auto"},Ie={role:"list",class:"space-y-6 max-w-[1000px]"},Pe=e("div",{class:"w-px bg-gray-200"},null,-1),Ne=[Pe],ze=["src"],je={class:"flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200"},Ve={class:"flex justify-between gap-x-4"},Ee={class:"py-0.5 text-xs leading-5 text-gray-500"},qe={class:"font-medium text-gray-900"},Fe=["datetime"],Ue={class:"text-sm leading-6 text-gray-500"},Ge={class:"relative flex h-6 w-6 flex-none items-center justify-center bg-white"},Ke={key:1,class:"h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"},Qe={class:"flex-auto py-0.5 text-xs leading-5 text-gray-500"},Re={class:"font-medium text-gray-900"},Je=["datetime"],We={class:"mt-6 flex gap-x-3 max-w-[1000px]"},Xe=e("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"",class:"h-6 w-6 flex-none rounded-full bg-gray-50"},null,-1),Ye={class:"relative flex-auto"},Ze=e("div",{class:"overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"},[e("label",{for:"comment",class:"sr-only"},"Add your comment"),e("textarea",{rows:"2",name:"comment",id:"comment",class:"px-2 block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"Add your comment..."})],-1),et={class:"absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2"},tt={class:"flex items-center space-x-5"},st={class:"flex items-center"},ot={type:"button",class:"-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"},nt=e("span",{class:"sr-only"},"Attach a file",-1),at={class:"flex items-center"},rt={class:"relative"},lt={class:"flex items-center justify-center"},it={key:0},ct=e("span",{class:"sr-only"},"Add your mood",-1),dt={key:1},pt={class:"sr-only"},ut={class:"flex items-center"},mt={class:"ml-3 block truncate font-medium"},ht=e("button",{type:"submit",class:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},"Comment",-1);function gt(t,r,l,i,n,p){const s=u("CheckCircleIcon"),m=u("PaperClipIcon"),x=u("ListboxLabel"),T=u("FaceSmileIcon"),$=u("ListboxButton"),E=u("ListboxOption"),q=u("ListboxOptions"),F=u("Listbox");return o(),a("div",Le,[e("ul",Ie,[(o(!0),a(g,null,v(n.activity,(c,k)=>(o(),a("li",{key:c.id,class:"relative flex gap-x-4"},[e("div",{class:h([k===n.activity.length-1?"h-6":"-bottom-6","absolute left-0 top-0 flex w-6 justify-center"])},Ne,2),c.type==="commented"?(o(),a(g,{key:0},[e("img",{src:c.person.imageUrl,alt:"",class:"relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"},null,8,ze),e("div",je,[e("div",Ve,[e("div",Ee,[e("span",qe,d(c.person.name),1),S(" commented ")]),e("time",{datetime:c.dateTime,class:"flex-none py-0.5 text-xs leading-5 text-gray-500"},d(c.date),9,Fe)]),e("p",Ue,d(c.comment),1)])],64)):(o(),a(g,{key:1},[e("div",Ge,[c.type==="paid"?(o(),f(s,{key:0,class:"h-6 w-6 text-indigo-600","aria-hidden":"true"})):(o(),a("div",Ke))]),e("p",Qe,[e("span",Re,d(c.person.name),1),S(" "+d(c.type)+" at ",1)]),e("time",{datetime:c.dateTime,class:"flex-none py-0.5 text-xs leading-5 text-gray-500"},d(c.date),9,Je)],64))]))),128))]),e("div",We,[Xe,e("form",Ye,[Ze,e("div",et,[e("div",tt,[e("div",st,[e("button",ot,[y(m,{class:"h-5 w-5","aria-hidden":"true"}),nt])]),e("div",at,[y(F,{as:"div",modelValue:n.selected,"onUpdate:modelValue":r[0]||(r[0]=c=>n.selected=c)},{default:b(()=>[y(x,{class:"sr-only"},{default:b(()=>[S("Your mood")]),_:1}),e("div",rt,[y($,{class:"relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"},{default:b(()=>[e("span",lt,[n.selected.value===null?(o(),a("span",it,[y(T,{class:"h-5 w-5 flex-shrink-0","aria-hidden":"true"}),ct])):_("",!0),n.selected.value!==null?(o(),a("span",dt,[e("span",{class:h([n.selected.bgColor,"flex h-8 w-8 items-center justify-center rounded-full"])},[(o(),f(H(n.selected.icon),{class:"h-5 w-5 flex-shrink-0 text-white","aria-hidden":"true"}))],2),e("span",pt,d(n.selected.name),1)])):_("",!0)])]),_:1}),y(G,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:b(()=>[y(q,{class:"absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"},{default:b(()=>[(o(!0),a(g,null,v(n.moods,c=>(o(),f(E,{as:"template",key:c.value,value:c},{default:b(({active:k})=>[e("li",{class:h([k?"bg-gray-100":"bg-white","relative cursor-default select-none px-3 py-2"])},[e("div",ut,[e("div",{class:h([c.bgColor,"flex h-8 w-8 items-center justify-center rounded-full"])},[(o(),f(H(c.icon),{class:h([c.iconColor,"h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"]))],2),e("span",mt,d(c.name),1)])],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),ht])])])])}const _t=w(Me,[["render",gt]]);const xt={components:{StageDetails:_t},data(){return{Progress:N,chevronSvg:z,tableHeads:[{name:"S.No",class:"text-center"},{name:"Customer Name",class:"text-left"},{name:"PAN",class:"text-center"},{name:"Current phases",class:"text-center"},{name:"Phases",class:"text-center"},{name:"Hours consumed",class:"text-center"},{name:"Progress State",class:"text-center"}]}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"]),...C("approval",["getIsLoader"])},methods:{goToStageDetails(t){this.$store.commit("opportunity/setIsStageDetails",!0)}}},ft=t=>(j("data-v-77eca8c4"),t=t(),V(),t),yt=ft(()=>e("div",{class:"flex justify-center items-center min-h-[300px]"}," Coming Soon ",-1));function vt(t,r,l,i,n,p){const s=u("StageDetails");return o(),a("div",null,[yt,t.getIsStageDetails?(o(),f(s,{key:0})):_("",!0)])}const bt=w(xt,[["render",vt],["__scopeId","data-v-77eca8c4"]]),wt={},Ct={class:"flex justify-center items-center min-h-[300px]"};function Tt(t,r){return o(),a("div",Ct," Coming Soon ")}const $t=w(wt,[["render",Tt]]),kt={components:{Allopportunity:ye,breadcrumb:Be,myOpportunity:bt,reports:$t,tabs:Y},data(){return{tabheaders:[{active:!1,name:"Report",id:1,route:"/Alllopportunity.vue"},{active:!0,name:"All Opportunities",id:2,route:"/Alllopportunity.vue"},{active:!1,name:"My Opportunity",id:3,route:"/tab2.vue"}],currentTab:0}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"])},methods:{changeActive(t){this.tabheaders.forEach(r=>{r.active=r.name===t}),this.currentTab=t},changeTab(t){this.currentTab=t,this.$store.commit("setActiveTab",t),this.$store.commit("setQuries",{data:{tab:t},action:"change"}),this.currentTab==1&&this.$store.dispatch("opportunity/getOpportunityList")}},created(){var t,r,l,i;this.$store.commit("setActiveTab",(t=this.$store.state.queries)!=null&&t.opportunity?(r=this.$store.state.queries)==null?void 0:r.opportunity.query.tab:0),this.changeTab((l=this.$store.state.queries)!=null&&l.opportunity?(i=this.$store.state.queries)==null?void 0:i.opportunity.query.tab:0)}},St={class:"secondary-violet-bg rounded-t"},At={class:"p-4"};function Dt(t,r,l,i,n,p){const s=u("tabs"),m=u("breadcrumb"),x=u("reports"),T=u("Allopportunity"),$=u("myOpportunity");return o(),a(g,null,[e("div",St,[y(s,{class:"mx-4",onActiveTab:p.changeTab},null,8,["onActiveTab"])]),e("div",At,[t.getIsStageDetails?(o(),f(m,{key:0})):_("",!0),n.currentTab==0?(o(),f(x,{key:1})):_("",!0),n.currentTab==1?(o(),f(T,{key:2})):_("",!0),n.currentTab==2?(o(),f($,{key:3})):_("",!0)])],64)}const Pt=w(kt,[["render",Dt]]);export{Pt as default};

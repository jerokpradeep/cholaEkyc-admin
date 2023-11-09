import{P as I,c as N,B as V,N as E,K as F,U,H as G}from"./Chevron-0371f0b7.js";import{m as C,_ as w,o as t,c as n,a as e,F as g,u as b,x as h,t as d,y as _,r as p,z as S,e as x,s as y,q as v,A,T as q,B as K,C as Q}from"./index-6f5aa1a8.js";import{r as R}from"./HomeIcon-13b50704.js";import{t as J}from"./tabs-3e45ad7c.js";import"./hidden-a6c94348.js";import"./use-text-value-f39cabc3.js";const W="/ekycadmin/assets/filledSvg-8598d837.svg";const X={components:{},data(){return{Progress:I,chevronSvg:N,filledSvg:W,tableHeads:[{name:"S.No",class:"text-center"},{name:"Customer Name",class:"text-left"},{name:"PAN",class:"text-center"},{name:"Current phases",class:"text-center"},{name:"Phases",class:"text-center"},{name:"Hours consumed",class:"text-center"},{name:"Progress State",class:"text-center"}]}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"]),...C("approval",["getIsLoader"])},methods:{getFormat(s){return window.formatDate(s,"D&T")},getHours(s){let c=Math.abs(new Date().valueOf()-new Date(s).valueOf())/(24*60*60*1e3),i=c%1*24,a=i%1*60,u=a%1*60;return[c,i,a,u]=[Math.floor(c),Math.floor(i),Math.floor(a),Math.floor(u)],Number(c)!=0?`${c}d, ${i}h : ${a}m`:Number(i)!=0?`${i}h:${a}m`:`${a}m`},getGrayStarCount(s,r){if(s==13)return[];let c=Number(s),i=[];if(c=Math.round(c),c=13-c,s&&c){for(let a=0;a<c;a++)i.push(a);return i}else return 12},getGreenStarCount(s){let r=Math.round(Number(s)),c=[];if(s&&r){for(let i=0;i<r;i++)c.push(i);return c}else return 13}}},Y={key:0,class:"w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},Z={class:"border-b dark:border-[#232325] dark:bg-[#181818]"},ee={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},te={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-left"},se={class:"flex py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center"},oe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ne={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative items-center justify-center"},ae={key:0,class:"flex items-center justify-center"},re=["src"],le=["src"],ce={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ie={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"};function de(s,r,c,i,a,u){return t(),n("div",null,[!s.getIsStageDetails&&!s.getIsLoader?(t(),n("table",Y,[e("thead",Z,[e("tr",null,[(t(!0),n(g,null,b(a.tableHeads,(o,m)=>(t(),n("th",{key:m,scope:"col",class:h([o.class,"py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"])},d(o.name),3))),128))])]),e("tbody",null,[(t(!0),n(g,null,b(s.getAllOpportunities,(o,m)=>(t(),n("tr",{key:m,class:"border-b hover:bg-gray-50"},[e("td",ee,d(m+1),1),e("td",te,d(o.customer_name),1),e("td",se,d(o.fsl_pan_no),1),e("td",oe,d(o.phase),1),e("td",ne,[o!=null&&o.stage?(t(),n("div",ae,[(t(!0),n(g,null,b(u.getGreenStarCount(o==null?void 0:o.stage),f=>(t(),n("img",{class:h(["w-3 text-right h-5",{"color-green-500":o.Phases}]),src:a.filledSvg,alt:"greenstar",key:f},null,10,re))),128)),(t(!0),n(g,null,b(u.getGrayStarCount(o==null?void 0:o.stage,o.phase),f=>(t(),n("img",{class:h(["w-3 text-right h-5",{"color-green-500":o.Phases}]),src:a.chevronSvg,alt:"graystar",key:f},null,10,le))),128))])):_("",!0)]),e("td",ce,d(o!=null&&o.time?u.getHours(o.time):o==null?void 0:o.time),1),e("td",ie,[e("button",{depressed:"",class:h(["tracking-[0.4px] px-3 min-h-[1.625rem] text-xs rounded min-w-[100px] cursor-default",o["current phase"]=="In-Progress"?"blue-btn-c":o["current phase"]=="Open"?"gray-btn-c":o["current phase"]=="Completed"||o["current phase"]=="Approved"?"green-btn-c":"gray-btn-c"])},d(o["current phase"]),3)])]))),128))])])):_("",!0)])}const pe=w(X,[["render",de],["__scopeId","data-v-b480fb42"]]);function H(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z","clip-rule":"evenodd"})])}function B(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z","clip-rule":"evenodd"})])}function L(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z","clip-rule":"evenodd"})])}function M(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 11-2.5 0v-7.5zM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0114 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 01-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 01-1.341-.317l-2.734-1.366A3 3 0 006.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 012.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388z"})])}function O(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"})])}function ue(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z","clip-rule":"evenodd"})])}function D(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})])}const me={components:{HomeIcon:R},data(){return{pages:[{name:"My Opportunity",href:"#",current:!1},{name:"Stage Details",href:"#",current:!0}]}},methods:{handleClick(s){s.name=="My Opportunity"&&this.$store.commit("opportunity/setIsStageDetails",!1)}}},he={class:"flex p-3","aria-label":"Breadcrumb"},ge={role:"list",class:"flex items-center space-x-4"},_e=["onClick"],xe={class:"flex items-center"},fe=["href"],ye={key:0,class:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true"},be=e("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"},null,-1),ve=[be];function we(s,r,c,i,a,u){return t(),n("nav",he,[e("ol",ge,[(t(!0),n(g,null,b(a.pages,(o,m)=>(t(),n("li",{key:o.name,onClick:f=>u.handleClick(o)},[e("div",xe,[e("a",{href:o.href,class:h(["mr-4 text-sm font-medium",o.current?"text-gray-500 hover:text-gray-700":"violet-color"])},d(o.name),11,fe),m==0?(t(),n("svg",ye,ve)):_("",!0)])],8,_e))),128))])])}const Ce=w(me,[["render",we]]);function Te(s,r){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"})])}const ke={components:{CheckCircleIcon:Te,FaceFrownIcon:H,FaceSmileIcon:B,FireIcon:L,HandThumbUpIcon:M,HeartIcon:O,PaperClipIcon:ue,XMarkIcon:D,Listbox:V,ListboxButton:E,ListboxLabel:F,ListboxOption:U,ListboxOptions:G},data(){return{activity:[{id:1,type:"Mobile OTP Verified",person:{name:"Chelsea Hagon"},date:"7d ago",dateTime:"2023-01-23T10:32"},{id:2,type:"EMail OTP Verified",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:03"},{id:3,type:"Password Setup Completed",person:{name:"Chelsea Hagon"},date:"6d ago",dateTime:"2023-01-23T11:24"},{id:4,type:"commented",person:{name:"Chelsea Hagon",imageUrl:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},comment:"Called client, they reassured me the invoice would be paid by the 25th.",date:"3d ago",dateTime:"2023-01-23T15:56"},{id:5,type:"PAN Entered",person:{name:"Chelsea Hagon"},date:"2d ago",dateTime:"2023-01-24T09:12"},{id:6,type:"PAN name Check",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:8,type:"PAN Confirmed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:9,type:"KRA DOB Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:10,type:"AADHAR Entry",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:11,type:"Profile Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:12,type:"Bank Entry Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:13,type:"Penny Drop Successfull",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:14,type:"Segment Selection Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:15,type:"Payment Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:16,type:"Nominee 1 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:17,type:"Nominee 2 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:18,type:"Nominee 3 Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:19,type:"Nominee Allocation Completed",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"},{id:20,type:"Document Upload",person:{name:"Chelsea Hagon"},date:"1d ago",dateTime:"2023-01-24T09:20"}],moods:[{name:"Excited",value:"excited",icon:L,iconColor:"text-white",bgColor:"bg-red-500"},{name:"Loved",value:"loved",icon:O,iconColor:"text-white",bgColor:"bg-pink-400"},{name:"Happy",value:"happy",icon:B,iconColor:"text-white",bgColor:"bg-green-400"},{name:"Sad",value:"sad",icon:H,iconColor:"text-white",bgColor:"bg-yellow-400"},{name:"Thumbsy",value:"thumbsy",icon:M,iconColor:"text-white",bgColor:"bg-blue-500"},{name:"I feel nothing",value:null,icon:D,iconColor:"text-gray-400",bgColor:"bg-transparent"}],selected:[]}},unmounted(){this.$store.commit("opportunity/setIsStageDetails",!1)},mounted(){this.selected=this.moods[5]}},$e={class:"p-5 max-w-[1000px] h-[calc(100vh-160px)] overflow-y-auto"},Se={role:"list",class:"space-y-6 max-w-[1000px]"},Ae=e("div",{class:"w-px bg-gray-200"},null,-1),He=[Ae],Be=["src"],Le={class:"flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200"},Me={class:"flex justify-between gap-x-4"},Oe={class:"py-0.5 text-xs leading-5 text-gray-500"},De={class:"font-medium text-gray-900"},Ie=["datetime"],Ne={class:"text-sm leading-6 text-gray-500"},Pe={class:"relative flex h-6 w-6 flex-none items-center justify-center bg-white"},ze={key:1,class:"h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"},je={class:"flex-auto py-0.5 text-xs leading-5 text-gray-500"},Ve={class:"font-medium text-gray-900"},Ee=["datetime"],Fe={class:"mt-6 flex gap-x-3 max-w-[1000px]"},Ue=e("img",{src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"",class:"h-6 w-6 flex-none rounded-full bg-gray-50"},null,-1),Ge={class:"relative flex-auto"},qe=e("div",{class:"overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600"},[e("label",{for:"comment",class:"sr-only"},"Add your comment"),e("textarea",{rows:"2",name:"comment",id:"comment",class:"px-2 block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"Add your comment..."})],-1),Ke={class:"absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2"},Qe={class:"flex items-center space-x-5"},Re={class:"flex items-center"},Je={type:"button",class:"-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"},We=e("span",{class:"sr-only"},"Attach a file",-1),Xe={class:"flex items-center"},Ye={class:"relative"},Ze={class:"flex items-center justify-center"},et={key:0},tt=e("span",{class:"sr-only"},"Add your mood",-1),st={key:1},ot={class:"sr-only"},nt={class:"flex items-center"},at={class:"ml-3 block truncate font-medium"},rt=e("button",{type:"submit",class:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},"Comment",-1);function lt(s,r,c,i,a,u){const o=p("CheckCircleIcon"),m=p("PaperClipIcon"),f=p("ListboxLabel"),T=p("FaceSmileIcon"),k=p("ListboxButton"),P=p("ListboxOption"),z=p("ListboxOptions"),j=p("Listbox");return t(),n("div",$e,[e("ul",Se,[(t(!0),n(g,null,b(a.activity,(l,$)=>(t(),n("li",{key:l.id,class:"relative flex gap-x-4"},[e("div",{class:h([$===a.activity.length-1?"h-6":"-bottom-6","absolute left-0 top-0 flex w-6 justify-center"])},He,2),l.type==="commented"?(t(),n(g,{key:0},[e("img",{src:l.person.imageUrl,alt:"",class:"relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"},null,8,Be),e("div",Le,[e("div",Me,[e("div",Oe,[e("span",De,d(l.person.name),1),S(" commented ")]),e("time",{datetime:l.dateTime,class:"flex-none py-0.5 text-xs leading-5 text-gray-500"},d(l.date),9,Ie)]),e("p",Ne,d(l.comment),1)])],64)):(t(),n(g,{key:1},[e("div",Pe,[l.type==="paid"?(t(),x(o,{key:0,class:"h-6 w-6 text-indigo-600","aria-hidden":"true"})):(t(),n("div",ze))]),e("p",je,[e("span",Ve,d(l.person.name),1),S(" "+d(l.type)+" at ",1)]),e("time",{datetime:l.dateTime,class:"flex-none py-0.5 text-xs leading-5 text-gray-500"},d(l.date),9,Ee)],64))]))),128))]),e("div",Fe,[Ue,e("form",Ge,[qe,e("div",Ke,[e("div",Qe,[e("div",Re,[e("button",Je,[y(m,{class:"h-5 w-5","aria-hidden":"true"}),We])]),e("div",Xe,[y(j,{as:"div",modelValue:a.selected,"onUpdate:modelValue":r[0]||(r[0]=l=>a.selected=l)},{default:v(()=>[y(f,{class:"sr-only"},{default:v(()=>[S("Your mood")]),_:1}),e("div",Ye,[y(k,{class:"relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"},{default:v(()=>[e("span",Ze,[a.selected.value===null?(t(),n("span",et,[y(T,{class:"h-5 w-5 flex-shrink-0","aria-hidden":"true"}),tt])):_("",!0),a.selected.value!==null?(t(),n("span",st,[e("span",{class:h([a.selected.bgColor,"flex h-8 w-8 items-center justify-center rounded-full"])},[(t(),x(A(a.selected.icon),{class:"h-5 w-5 flex-shrink-0 text-white","aria-hidden":"true"}))],2),e("span",ot,d(a.selected.name),1)])):_("",!0)])]),_:1}),y(q,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:v(()=>[y(z,{class:"absolute bottom-10 z-10 -ml-6 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm"},{default:v(()=>[(t(!0),n(g,null,b(a.moods,l=>(t(),x(P,{as:"template",key:l.value,value:l},{default:v(({active:$})=>[e("li",{class:h([$?"bg-gray-100":"bg-white","relative cursor-default select-none px-3 py-2"])},[e("div",nt,[e("div",{class:h([l.bgColor,"flex h-8 w-8 items-center justify-center rounded-full"])},[(t(),x(A(l.icon),{class:h([l.iconColor,"h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"]))],2),e("span",at,d(l.name),1)])],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])])]),rt])])])])}const ct=w(ke,[["render",lt]]);const it={components:{StageDetails:ct},data(){return{Progress:I,chevronSvg:N,tableHeads:[{name:"S.No",class:"text-center"},{name:"Customer Name",class:"text-left"},{name:"PAN",class:"text-center"},{name:"Current phases",class:"text-center"},{name:"Phases",class:"text-center"},{name:"Hours consumed",class:"text-center"},{name:"Progress State",class:"text-center"}]}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"]),...C("approval",["getIsLoader"])},methods:{goToStageDetails(s){this.$store.commit("opportunity/setIsStageDetails",!0)}}},dt=s=>(K("data-v-77eca8c4"),s=s(),Q(),s),pt=dt(()=>e("div",{class:"flex justify-center items-center min-h-[300px]"}," Coming Soon ",-1));function ut(s,r,c,i,a,u){const o=p("StageDetails");return t(),n("div",null,[pt,s.getIsStageDetails?(t(),x(o,{key:0})):_("",!0)])}const mt=w(it,[["render",ut],["__scopeId","data-v-77eca8c4"]]),ht={},gt={class:"flex justify-center items-center min-h-[300px]"};function _t(s,r){return t(),n("div",gt," Coming Soon ")}const xt=w(ht,[["render",_t]]),ft={components:{Allopportunity:pe,breadcrumb:Ce,myOpportunity:mt,reports:xt,tabs:J},data(){return{tabheaders:[{active:!1,name:"Report",id:1,route:"/Alllopportunity.vue"},{active:!0,name:"All Opportunities",id:2,route:"/Alllopportunity.vue"},{active:!1,name:"My Opportunity",id:3,route:"/tab2.vue"}],currentTab:0}},computed:{...C("opportunity",["getIsStageDetails","getAllOpportunities"])},methods:{changeActive(s){this.tabheaders.forEach(r=>{r.active=r.name===s}),this.currentTab=s},changeTab(s){this.currentTab=s,this.$store.commit("setActiveTab",s),this.$store.commit("setQuries",{data:{tab:s},action:"change"}),this.currentTab==1&&this.$store.dispatch("opportunity/getOpportunityList")}},mounted(){this.changeTab(0)}},yt={class:"secondary-violet-bg rounded-t"},bt={class:"p-4"};function vt(s,r,c,i,a,u){const o=p("tabs"),m=p("breadcrumb"),f=p("reports"),T=p("Allopportunity"),k=p("myOpportunity");return t(),n(g,null,[e("div",yt,[y(o,{class:"mx-4",onActiveTab:u.changeTab},null,8,["onActiveTab"])]),e("div",bt,[s.getIsStageDetails?(t(),x(m,{key:0})):_("",!0),a.currentTab==0?(t(),x(f,{key:1})):_("",!0),a.currentTab==1?(t(),x(T,{key:2})):_("",!0),a.currentTab==2?(t(),x(k,{key:3})):_("",!0)])],64)}const At=w(ft,[["render",vt]]);export{At as default};

import{B as S,K as L,N as I,H as V,U as H,P as U,c as O,a as j}from"./Chevron-ab0f8b37.js";import{t as J}from"./tabs-b5773b90.js";import{o as r,c,a as t,_ as k,k as l,l as C,q as p,s as i,m as $,b as m,v as x,F as _,t as h,x as a,T as z,u as f,d as M}from"./index-6c4a6457.js";import{U as R,G as F,V as G,h as E,S as K}from"./transition-f89b4a84.js";import"./use-text-value-99ab6e97.js";function q(n,s){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function Y(n,s){return r(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}const Q={name:"assignee-dialog",components:{Dialog:R,DialogPanel:F,DialogTitle:G,TransitionChild:E,TransitionRoot:K},methods:{close(){this.$store.commit("approval/setIsAssign",!1)}}},W=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),X={class:"fixed inset-0 z-10 overflow-y-auto"},Z={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},ee=t("p",{class:"secondaryColor",id:"logout_content"},"Assign this ticket to myself. ",-1),te={class:"mt-8 flex justify-end gap-2"},se=t("button",{type:"button",class:"themeBtn",id:"logout_btn"}," Yes ",-1);function oe(n,s,D,P,o,u){const g=l("TransitionChild"),y=l("DialogTitle"),b=l("DialogPanel"),v=l("Dialog"),A=l("TransitionRoot");return r(),C(A,{as:"template",show:n.$store.state.approval.isAssign},{default:p(()=>[i(v,{as:"div",class:"relative z-10",onClose:s[1]||(s[1]=w=>u.close())},{default:p(()=>[i(g,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:p(()=>[W]),_:1}),t("div",X,[t("div",Z,[i(g,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:p(()=>[i(b,{class:"w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white"},{default:p(()=>[i(y,{as:"h3",class:"text-base pb-2 font-medium leading-6 primaryColor"},{default:p(()=>[ee]),_:1}),t("div",te,[se,t("button",{type:"button",class:"cancelBtn",id:"logout_cancel_btn",onClick:s[0]||(s[0]=w=>u.close())}," No ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}const ne=k(Q,[["render",oe]]),ae={components:{Listbox:S,ListboxLabel:L,ListboxButton:I,ListboxOptions:V,ListboxOption:H,CheckIcon:q,ChevronUpDownIcon:Y,tabs:J,assigneeDialog:ne},data(){return{fromDate:"",toDate:"",status:"",application:"",panNo:"",mobileNo:"",applicationSummary:[{type:"In Progress",count:"0"},{type:"Pending for Approval",count:"0"},{type:"Approved",count:"0"},{type:"Completed",count:"0"},{type:"Rejected",count:"0"}],statusList:[{name:"In Progress"},{name:"Pending"},{name:"Approved"},{name:"Completed"},{name:"Rejected"}],statusType:{},tableHeads:[{name:"S.No",class:"text-center"},{name:"Customer Name",class:"text-center"},{name:"Application ID",class:"text-center"},{name:"PAN No",class:"text-center"},{name:"Current Phase",class:"text-center"},{name:"Mobile No",class:"text-center"},{name:"Assigned to",class:"text-center"},{name:"Hours consumed",class:"text-center"}],tableData:[{SNO:"1",applicationId:"2",CustomerName:"Akash",panNo:"JSJPS0302D",Currentphases:"Mobile Verification",Progress:"",Phases:"3",Hoursconsumed:"8.24 Hr ",Inferredprogress:"On Track",assignedTo:"Akash",mobileNo:"8783423442"},{SNO:"2",applicationId:"3",CustomerName:"Akash",panNo:"JSJPS0302D",Currentphases:"Email Verification",Progress:"",Phases:"3",Hoursconsumed:"8.24 Hr",assignedTo:"Akash",mobileNo:"8783423442"},{SNO:"3",applicationId:"4",CustomerName:"Akash",panNo:"JSJPS0302D",Currentphases:"PAN Verification",Progress:"",Phases:"5",Hoursconsumed:"8.24 Hr",assignedTo:"Akash",mobileNo:"8783423442"},{SNO:"4",applicationId:"5",CustomerName:"Akash",panNo:"JSJPS0302D",Currentphases:"Address",Progress:"",Phases:"8",Hoursconsumed:"8.24 Hr",assignedTo:"Akash",mobileNo:"8783423442"}],Progress:U,completed:O,chevronSvg:j}},computed:{...$("approval",["getApprovalList"])},methods:{async goToApprovalPage(n){n&&n.fsl_assign_to&&n.opportunity_id?await this.$store.dispatch("approval/getCustomerData",n==null?void 0:n.opportunity_id).finally(()=>{this.$router.push(`/approvepanel?id=${n==null?void 0:n.opportunity_id}`).catch(()=>{})}):this.$store.commit("approval/setIsAssign",!0)},changeTab(n){}},created(){this.$store.dispatch("approval/getApprovalList","")}},re={class:"p-4"},le={class:"flex gap-3 flex-wrap"},ie={class:"relative"},ce={class:"block truncate text-xs"},pe={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},de={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-[#0081B8]"},ue={class:"bg-white py-4 px-8 my-6 rounded-lg flex gap-2 flex-wrap justify-between"},me={class:"flex flex-col gap-2 justify-center items-center"},xe={class:"text-xs"},_e={class:"w-full rounded-b border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},ge={class:"border-b dark:border-[#232325] dark:bg-[#181818]"},he=["onClick"],fe={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ye={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},be={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ve={class:"flex py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center items-center justify-center"},Ae={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},we={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},Ne={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ke={class:"py-4 text-sm primary-color dark:text-[#94A3B8] relative text-center"};function Ce(n,s,D,P,o,u){const g=l("tabs"),y=l("ChevronUpDownIcon"),b=l("ListboxButton"),v=l("CheckIcon"),A=l("ListboxOption"),w=l("ListboxOptions"),T=l("Listbox"),B=l("assigneeDialog");return r(),c(_,null,[i(g,{class:"mx-4",onActiveTab:u.changeTab},null,8,["onActiveTab"]),t("div",re,[t("div",le,[m(t("input",{type:"date","onUpdate:modelValue":s[0]||(s[0]=e=>o.fromDate=e),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8"},null,512),[[x,o.fromDate]]),m(t("input",{type:"date","onUpdate:modelValue":s[1]||(s[1]=e=>o.toDate=e),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8"},null,512),[[x,o.toDate]]),t("div",null,[i(T,{modelValue:o.statusType,"onUpdate:modelValue":s[2]||(s[2]=e=>o.statusType=e)},{default:p(()=>[t("div",ie,[i(b,{class:"min-w-[126px] relative w-full cursor-pointer rounded-lg bg-white h-8 py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"},{default:p(()=>[t("span",ce,a(o.statusType.name||"Select status"),1),t("span",pe,[i(y,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),i(z,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:p(()=>[i(w,{class:"z-[1] absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"},{default:p(()=>[(r(!0),c(_,null,h(o.statusList,e=>(r(),C(A,{key:e.name,value:e,as:"template"},{default:p(({active:d,selected:N})=>[t("li",{class:f([d?"bg-[#F0F6FD] text-[#0081B8]":"text-gray-900","relative cursor-pointer select-none py-2 pl-10 pr-4"])},[t("span",{class:f([N?"font-medium":"font-normal","block truncate text-xs"])},a(e.name),3),N?(r(),c("span",de,[i(v,{class:"h-5 w-5","aria-hidden":"true"})])):M("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),m(t("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=e=>o.application=e),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8",placeholder:"Search: Application"},null,512),[[x,o.application]]),m(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=e=>o.panNo=e),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8",placeholder:"Search: PAN No."},null,512),[[x,o.panNo]]),m(t("input",{type:"text","onUpdate:modelValue":s[5]||(s[5]=e=>o.mobileNo=e),class:"bg-white rounded-lg border-transparent px-2 text-xs h-8",placeholder:"Search: Mobile No."},null,512),[[x,o.mobileNo]])]),t("div",ue,[(r(!0),c(_,null,h(o.applicationSummary,(e,d)=>(r(),c("div",{key:d},[t("div",me,[t("div",xe,a(e.type),1),t("div",{class:f(["text-lg font-bold",{"text-purple-700":e.type=="In Progress","text-gray-800":e.type=="Pending for Approval","text-blue-600":e.type=="Approved","text-green-600":e.type=="Completed","text-red-600":e.type=="Rejected"}])},a(e.count),3)])]))),128))]),t("div",null,[t("table",_e,[t("thead",ge,[t("tr",null,[(r(!0),c(_,null,h(o.tableHeads,(e,d)=>(r(),c("th",{key:d,scope:"col",class:f([e.class,"py-3.5 px-3 text-[13px] font-medium text-center primaryColor whitespace-nowrap"])},a(e.name),3))),128))])]),t("tbody",null,[(r(!0),c(_,null,h(n.getApprovalList,(e,d)=>(r(),c("tr",{key:d,class:"border-b cursor-pointer hover:bg-gray-50",onClick:N=>u.goToApprovalPage(e)},[t("td",fe,a(d+1),1),t("td",ye,a(e.customer_name?e.customer_name:"NA"),1),t("td",be,a(e.opportunity_id?e.opportunity_id:"NA"),1),t("td",ve,a(e.fsl_pan_no?e.fsl_pan_no:"NA"),1),t("td",Ae,a(e["current phase"]?e["current phase"]:"NA"),1),t("td",we,a(e.fsl_mobile_num?e.fsl_mobile_num:"NA"),1),t("td",Ne,a(e.fsl_assign_to?e.fsl_assign_to:""),1),t("td",ke,a(e.time&&e.time!=" "?e.time:"NA"),1)],8,he))),128))])])]),i(B)])],64)}const Le=k(ae,[["render",Ce]]);export{Le as default};
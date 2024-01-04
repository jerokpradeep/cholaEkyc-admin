import{t as P}from"./tabs-57044259.js";import{g as Y,_ as w,r as h,o as n,e as M,q as f,s as m,a as t,D as R,t as g,G as A,m as H,h as q,c,F as v,u as $,A as _,w as B,b as D,M as k,y as C,z as T,v as V,x as L}from"./index-d22217e6.js";import{U as j,G as O,V as N,h as F,S as I}from"./transition-fcc147ac.js";import{s as z}from"./index-dba98ebc.js";import"./hidden-ff8c3b1c.js";const U=Y({name:"mail-req",components:{Dialog:j,DialogPanel:O,DialogTitle:N,TransitionChild:F,TransitionRoot:I},props:{isOpen:{type:Boolean,required:!0,default:!1},showData:{required:!0}},methods:{close(){this.$emit("mail-close",!1)}}}),E=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),G={class:"fixed inset-0 z-10 overflow-y-auto"},W={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Q={class:""},K={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},X=["innerHTML"],Z={class:"mt-5 sm:mt-4 flex justify-end gap-2"};function ee(e,o,p,u,s,a){const d=h("TransitionChild"),r=h("DialogTitle"),x=h("DialogPanel"),i=h("Dialog"),y=h("TransitionRoot");return n(),M(y,{as:"template",show:e.isOpen},{default:f(()=>[m(i,{as:"div",class:"relative z-10",onClose:o[1]||(o[1]=l=>e.close())},{default:f(()=>[m(d,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f(()=>[E]),_:1}),t("div",G,[t("div",W,[m(d,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:f(()=>[m(x,{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-[650px] sm:p-6"},{default:f(()=>[t("div",Q,[t("div",K,[m(r,{as:"h3",class:"text-base font-semibold leading-6 text-gray-900"},{default:f(()=>[R(g(e.showData.subject),1)]),_:1}),t("div",{class:"rounded-lg bg-white border border-[#E1E2E6] mt-2 p-4",innerHTML:e.showData.data},null,8,X)])]),t("div",Z,[t("button",{type:"button",class:"min-h-[32px] px-4 text-sm rounded bg-[#ffffff] border border-[#a2a2a2] text-[#17181A] tracking-[0.2px]",onClick:o[0]||(o[0]=l=>e.close())},"Close")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}const te=w(U,[["render",ee]]),oe=Y({name:"mail-logs",computed:{...A("logs",["loginType","isMailDial"]),...H("logs",["getMailLogs"])},setup(){return{bindData:q()}},components:{mailReq:te},methods:{formatDate(e){const o=String(e.getDate()).padStart(2,"0"),p=String(e.getMonth()+1).padStart(2,"0"),u=e.getFullYear();let s=e.getHours();const a=s>=12?"pm":"am";s=s%12,s=s||12;const d=String(e.getMinutes()).padStart(2,"0");return`${o}/${p}/${u}, ${s}:${d} ${a}`}}}),se={class:"px-4"},re={key:0,class:"w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},ne={class:"border-b dark:border-[#232325] dark:bg-[#181818]"},ae={class:"border-b text-[13px]"},ie={class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},le=t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Request Log",-1),ce=t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Response Log",-1),de=t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Time",-1),pe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ue={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ge={key:0},he={key:1,class:"flex justify-center items-center gap-3"},me=["onClick"],xe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},fe={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},ye={key:1,class:"min-h-[300px] flex justify-center items-center"};function _e(e,o,p,u,s,a){const d=h("mailReq");return n(),c(v,null,[t("div",se,[e.getMailLogs.length>0?(n(),c("table",re,[t("thead",ne,[t("tr",ae,[t("th",ie,g(e.loginType=="SMS"?"Mobile No":"E-mail"),1),le,ce,de])]),t("tbody",null,[(n(!0),c(v,null,$(e.getMailLogs,(r,x)=>(n(),c("tr",{key:x,class:"border-b text-sm"},[t("td",pe,g(e.loginType=="SMS"?r.mobileNo:r.emailId)+" "+g(),1),t("td",ue,[e.loginType=="SMS"?(n(),c("span",ge,g(r.requestLog),1)):(n(),c("span",he,[R(g(r.reqLogSub)+" ",1),r.reqLog?(n(),c("a",{key:0,class:"text-blue-500 cursor-pointer underline text-xs",onClick:i=>(e.$store.commit("logs/setIsMailDial",!0),e.bindData={data:r.reqLog,subject:r.reqLogSub})},"View",8,me)):_("",!0)]))]),t("td",xe,g(r.responseLog),1),t("td",fe,g(e.formatDate(new Date(r.createdOn))),1)]))),128))])])):(n(),c("div",ye," No Data Found "))]),e.isMailDial?(n(),M(d,{key:0,"is-open":e.isMailDial,"show-data":e.bindData,onMailClose:o[0]||(o[0]=r=>e.$store.commit("logs/setIsMailDial",!1))},null,8,["is-open","show-data"])):_("",!0)],64)}const ve=w(oe,[["render",_e]]),we=`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
    </path></svg>`,be=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
`,De=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
`,Me={components:{maillogsTable:ve},data(){return{dateSvg:we,leftArror:be,rightArror:De,logType:"EMAIL",fromDate:new Date,toDate:new Date,popover:{visibility:"click",placement:"bottom-start"},value:"",page:1,pages:2,rowsCount:20}},computed:{...H("logs",["getLoader","getMailLogs"])},methods:{getMinDate(){let e=new Date,o=e.getMonth()-1;return e.setMonth(o),e.toISOString().slice(0,10)},async getReports(e){if(e!="paginate"&&this.resetPagination(),this.fromDate&&this.toDate&&(this.value&&this.validateRegex(this.value)||!this.value)){let o={limit:this.rowsCount,offset:this.page,type:this.logType,fromDate:this.dateFormatter(this.fromDate),toDate:this.dateFormatter(this.toDate)};this.value&&(o.value=this.value),await this.$store.dispatch("logs/getMailLogData",o)}else(!this.fromDate||!this.toDate)&&this.$store.dispatch("errorLog/toaster",{data:{title:"Select a from Date and To date",type:"danger",message:"",duration:4500},position:""},{root:!0}),this.value&&!this.validateRegex(this.value)&&this.$store.dispatch("errorLog/toaster",{data:{title:"Enter Vaild Email on Mobile Number",type:"danger",message:"",duration:4500},position:""},{root:!0})},validateRegex(e){let o=new RegExp("^([a-z0-9_.-]+@[da-z.-]+.[a-z.]{2,6})$"),p=new RegExp("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$");return e?o.test(e)||e.length>6&&p.test(e):!1},resetFields(e){this.fromDate=this.toDate="",this.logType="EMAIL",this.value="",this.$store.commit("logs/setMailLogs",[])},setPreviousWeekDatetime(){const e=new Date,o=e.getFullYear().toString().padStart(4,"0"),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours();this.fromDate=new Date(`${o}-${p}-${u} ${s}:00:00`)},setCurrentDatetime(){const e=new Date,o=e.getFullYear().toString().padStart(4,"0"),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours(),a=e.getMinutes(),d=e.getSeconds();this.toDate=new Date(`${o}-${p}-${u} ${s}:${a}:${d}`)},resetPagination(){this.page=1,this.pages=2},goBack(){this.page!=1&&(this.page-=1,this.getReports("paginate"))},forward(){this.page==this.pages&&(this.pages+=1),this.page+=1,this.getReports("paginate")},changePage(e){e==this.pages&&(this.pages+=1),this.page=e,this.getReports("paginate")},dateFormatter(e){if(!e)return null;const o=e.getFullYear(),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0");return`${o}-${p}-${u} ${s}:${a}:00`}},mounted(){this.resetFields(),this.setCurrentDatetime(),this.setPreviousWeekDatetime()},unmounted(){this.resetFields()}},$e={class:"p-4"},Se=t("p",{class:"primaryColor pb-1 text-sm ml-1"},"Log Type",-1),ke=t("option",{value:"EMAIL"},"EMAIL",-1),Ce=t("option",{value:"SMS"},"SMS",-1),Te=[ke,Ce],Le=t("label",{class:"primaryColor pb-1 text-sm"},"From Date",-1),Ye={class:"flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2"},Ae=["value"],He=["onClick","innerHTML"],Ve=t("label",{class:"primaryColor pb-1 text-sm"},"To Date",-1),Re={class:"flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2"},Be=["value"],je=["onClick"],Oe=["innerHTML"],Ne=t("p",{class:"primaryColor pb-1 text-sm"},"Search Mail/SMS",-1),Fe=["placeholder"],Ie={class:"flex items-end"},Je=["disabled"],Pe={key:0},qe={key:1,class:"animate-spin h-5 w-5 text-white flex mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"#fffff",viewBox:"0 0 24 24"},ze=t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"#fffff","stroke-width":"4"},null,-1),Ue=t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),Ee=[ze,Ue],Ge={key:0,class:"flex justify-end m-4 gap-4"},We={class:"flex items-center"},Qe=t("div",{class:"primaryColor text-sm mr-2"},"Rows Per Page : ",-1),Ke=t("option",{value:10},"10",-1),Xe=t("option",{value:20},"20",-1),Ze=t("option",{value:50},"50",-1),et=[Ke,Xe,Ze],tt={class:"isolate inline-flex -space-x-px rounded shadow-sm bg-white","aria-label":"Pagination"},ot=["innerHTML"],st=["onClick"],rt=["innerHTML"];function nt(e,o,p,u,s,a){var x;const d=h("VDatePicker"),r=h("maillogsTable");return n(),c(v,null,[t("div",$e,[t("form",{class:"flex flex-wrap gap-3 card p-5 border rounded bg-white shadow-sm",onSubmit:o[5]||(o[5]=B(i=>a.getReports("table"),["prevent"]))},[t("div",null,[Se,D(t("select",{"onUpdate:modelValue":o[0]||(o[0]=i=>s.logType=i),onChange:o[1]||(o[1]=i=>s.value=""),class:"border min-w-[160px] h-10 rounded focus:outline-0 px-4 text-xs"},Te,544),[[k,s.logType]])]),t("div",null,[Le,m(d,{type:"date","max-date":new Date().toISOString().slice(0,10),"min-date":a.getMinDate(),modelValue:s.fromDate,"onUpdate:modelValue":o[2]||(o[2]=i=>s.fromDate=i),"is-required":"",popover:s.popover,masks:{input:"DD-MM-YYYY HH:MM",modelValue:"YYYY-MM-DD HH:MM:SS"},mode:"dateTime",is24hr:"",dateFormat:"YYYY-MM-DD HH:MM"},{default:f(({togglePopover:i,inputValue:y,inputEvents:l})=>[t("div",Ye,[t("input",C({value:y,placeholder:"DD-MM-YYYY HH:MM"},T(l,!0),{class:"min-w-[100px] text-xs outline-none cursor-pointer",readonly:""}),null,16,Ae),t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700",onClick:()=>i(),innerHTML:s.dateSvg},null,8,He)])]),_:1},8,["max-date","min-date","modelValue","popover"])]),t("div",null,[Ve,m(d,{type:"date","max-date":new Date().toISOString().slice(0,10),modelValue:s.toDate,"onUpdate:modelValue":o[3]||(o[3]=i=>s.toDate=i),"is-required":"",popover:s.popover,masks:{input:"DD-MM-YYYY HH:MM",modelValue:"YYYY-MM-DD HH:MM:SS"},mode:"dateTime",is24hr:"",dateFormat:"YYYY-MM-DD HH:MM"},{default:f(({togglePopover:i,inputValue:y,inputEvents:l})=>[t("div",Re,[t("input",C({value:y,placeholder:"DD-MM-YYYY"},T(l,!0),{class:"min-w-[100px] text-xs outline-none cursor-pointer",readonly:""}),null,16,Be),t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700",onClick:()=>i()},[t("span",{innerHTML:s.dateSvg},null,8,Oe)],8,je)])]),_:1},8,["max-date","modelValue","popover"])]),t("div",null,[Ne,D(t("input",{type:"text",placeholder:s.logType=="SMS"?"Search User Mobile Number":"Search User Email","onUpdate:modelValue":o[4]||(o[4]=i=>s.value=i),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs"},null,8,Fe),[[V,s.value]])]),t("div",Ie,[t("button",{type:"submit",class:"bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs",disabled:e.getLoader},[e.getLoader?_("",!0):(n(),c("p",Pe,"Submit")),e.getLoader?(n(),c("svg",qe,Ee)):_("",!0)],8,Je)])],32)]),t("div",null,[m(r),((x=e.getMailLogs)==null?void 0:x.length)!=0&&!e.getLoader?(n(),c("div",Ge,[t("div",We,[Qe,D(t("select",{"onUpdate:modelValue":o[6]||(o[6]=i=>s.rowsCount=i),class:"border h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer ring-1 ring-inset ring-gray-300",onChange:o[7]||(o[7]=(...i)=>a.getReports&&a.getReports(...i))},et,544),[[k,s.rowsCount]])]),t("nav",tt,[t("a",{onClick:o[8]||(o[8]=i=>a.goBack()),class:L(["cursor-pointer relative inline-flex items-center rounded-l px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",s.page==1?"cursor-not-allowed":""])},[t("span",{innerHTML:s.leftArror},null,8,ot)],2),(n(!0),c(v,null,$(s.pages,(i,y)=>(n(),c("a",{class:L(["relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer",s.page==i?"z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"]),key:y,onClick:l=>a.changePage(i)},g(i),11,st))),128)),t("a",{onClick:o[9]||(o[9]=i=>a.forward()),class:"cursor-pointer relative inline-flex items-center rounded-r px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"},[t("span",{innerHTML:s.rightArror},null,8,rt)])])])):_("",!0)])],64)}const at=w(Me,[["render",nt]]),it={data(){return{formateJSON:!1,copyText:!0,copyTextRes:!0}},props:{jsonValue:{required:!0}},methods:{closeDialog(){this.$store.commit("logs/setIsShowDialog",!1)},isJsonString(e){try{JSON.parse(e)}catch{return e}return JSON.parse(e)},copyResponseBody(){this.copyTextRes=!1,navigator.clipboard.writeText(JSON.stringify(this.jsonValue)),document.getElementById("jsonDataRes"),document.execCommand("copy"),setInterval(()=>{this.copyTextRes=!0},2e3)}},computed:{...H("logs",["getIsShowDialog"])},components:{TransitionRoot:I,TransitionChild:F,Dialog:j,DialogPanel:O,DialogTitle:N,JsonViewer:z}},lt=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ct={class:"fixed inset-0 overflow-y-auto"},dt={class:"flex min-h-full items-center justify-center p-4 text-center"},pt={class:"flex justify-between items-center mt-6 text-xs"},ut=t("p",null,"Response Body:",-1);function gt(e,o,p,u,s,a){const d=h("TransitionChild"),r=h("JsonViewer"),x=h("DialogTitle"),i=h("DialogPanel"),y=h("Dialog"),l=h("TransitionRoot");return n(),c("div",null,[m(l,{appear:"",show:e.getIsShowDialog,as:"template"},{default:f(()=>[m(y,{as:"div",class:"relative z-10",onClose:o[1]||(o[1]=b=>a.closeDialog())},{default:f(()=>[m(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:f(()=>[lt]),_:1}),t("div",ct,[t("div",dt,[m(d,{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:f(()=>[m(i,{class:"w-full max-w-md transform overflow-hidden radius p-6 text-left align-middle bg-white rounded max-h-[500px] overflow-y-auto"},{default:f(()=>[m(x,{as:"h3",class:"text-base pb-2 font-medium leading-6 primaryColor"},{default:f(()=>[t("div",null,[t("div",pt,[ut,t("button",{class:"border px-4 h-8 rounded text-xs",onClick:o[0]||(o[0]=b=>a.copyResponseBody())},g(s.copyTextRes?"Copy":"Copied"),1)]),m(r,{class:"!text-xs",value:p.jsonValue},null,8,["value"])])]),_:1})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])}const J=w(it,[["render",gt]]),ht=Y({name:"mail-logs",computed:{...A("logs",["accessLogs","getIsShowDialog"])},data(){return{currentJsonValue:{}}},components:{jsonDialog:J},methods:{isJSON(e){try{return JSON.stringify(JSON.parse(e)),!0}catch{return!1}},getFormat(e){return window.formatDate(e,"D&T")},viewJSON(e){this.currentJsonValue=this.isJSON(e)?JSON.parse(e):e,this.$store.commit("logs/setIsShowDialog",!0)}}}),mt={class:"px-4"},xt={key:0,class:"w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},ft=t("thead",{class:"border-b dark:border-[#232325] dark:bg-[#181818]"},[t("tr",{class:"border-b text-[13px]"},[t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Application ID"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Time"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"URL"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Response Body"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"User Agent"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Device Ip")])],-1),yt={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},_t={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},vt=["onClick"],wt=["onClick"],bt=["title"],Dt={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},Mt={key:1,class:"min-h-[300px] flex justify-center items-center"};function $t(e,o,p,u,s,a){const d=h("jsonDialog");return n(),c("div",mt,[e.accessLogs.length>0?(n(),c("table",xt,[ft,t("tbody",null,[(n(!0),c(v,null,$(e.accessLogs,(r,x)=>(n(),c("tr",{key:x,class:"border-b text-sm"},[t("td",yt,g(r.applicationId&&r.applicationId!="null"?r.applicationId:"NA"),1),t("td",_t,g(r.createdOn&&r.createdOn!="null"?e.getFormat(r.createdOn):"NA"),1),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[300px]",onClick:i=>e.viewJSON(r==null?void 0:r.uri)},g(r==null?void 0:r.uri),9,vt),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]",onClick:i=>e.viewJSON(r==null?void 0:r.resBody)},g(r==null?void 0:r.resBody),9,wt),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[300px]",title:r==null?void 0:r.userAgent},g(r==null?void 0:r.userAgent),9,bt),t("td",Dt,g(r==null?void 0:r.deviceIp),1)]))),128))])])):(n(),c("div",Mt," No Data Found ")),m(d,{jsonValue:e.currentJsonValue},null,8,["jsonValue"])])}const St=w(ht,[["render",$t]]),kt=Y({name:"mail-logs",computed:{...A("logs",["restLogs"])},data(){return{currentJsonValue:{}}},components:{jsonDialog:J},methods:{formatDate(e){const o=String(e.getDate()).padStart(2,"0"),p=String(e.getMonth()+1).padStart(2,"0"),u=e.getFullYear();let s=e.getHours();const a=s>=12?"pm":"am";s=s%12,s=s||12;const d=String(e.getMinutes()).padStart(2,"0");return`${o}/${p}/${u}, ${s}:${d} ${a}`},isJSON(e){try{return JSON.stringify(JSON.parse(e)),!0}catch{return!1}},viewJSON(e){this.currentJsonValue=this.isJSON(e)?JSON.parse(e):e,this.$store.commit("logs/setIsShowDialog",!0)}}}),Ct={class:"px-4"},Tt={key:0,class:"w-full border-t border-[#ededed] dark:border-[#232325] relative mt-[1px] bg-white rounded-lg"},Lt=t("thead",{class:"border-b dark:border-[#232325] dark:bg-[#181818]"},[t("tr",{class:"border-b text-[13px]"},[t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Application ID"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"URL"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Response Body"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Request Body"),t("th",{class:"text-center py-3.5 px-3 text-[13px] font-medium primaryColor whitespace-nowrap"},"Created On")])],-1),Yt={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},At=["onClick"],Ht=["onClick"],Vt=["onClick"],Rt={class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center"},Bt={key:1,class:"min-h-[300px] flex justify-center items-center"};function jt(e,o,p,u,s,a){const d=h("jsonDialog");return n(),c("div",Ct,[e.restLogs.length>0?(n(),c("table",Tt,[Lt,t("tbody",null,[(n(!0),c(v,null,$(e.restLogs,(r,x)=>(n(),c("tr",{key:x,class:"border-b text-sm"},[t("td",Yt,g(r.applicationId),1),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]",onClick:i=>e.viewJSON(r==null?void 0:r.uri)},g(r.uri),9,At),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]",onClick:i=>e.viewJSON(r==null?void 0:r.resBody)},g(r.resBody),9,Ht),t("td",{class:"py-4 px-3 text-sm primary-color dark:text-[#94A3B8] relative text-center truncate max-w-[400px]",onClick:i=>e.viewJSON(r==null?void 0:r.reqBody)},g(r.reqBody),9,Vt),t("td",Rt,g(e.formatDate(new Date(r.createdOn))),1)]))),128))])])):(n(),c("div",Bt," No Data Found ")),m(d,{jsonValue:e.currentJsonValue},null,8,["jsonValue"])])}const Ot=w(kt,[["render",jt]]),Nt=`<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5">
    </path></svg>`,Ft=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
`,It=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
`,Jt={components:{accessLog:St,restlog:Ot},data(){return{dateSvg:Nt,leftArror:Ft,rightArror:It,logType:"access_log",fromDate:new Date,toDate:new Date,popover:{visibility:"click",placement:"bottom-start"},currentTab:0,user_id:"",user_url:"",page:1,pages:2,rowsCount:20}},computed:{...H("logs",["getLoader"]),...A("logs",["accessLogs","restLogs"])},methods:{getMinDate(){let e=new Date,o=e.getMonth()-1;return e.setMonth(o),e.toISOString().slice(0,10)},async getReports(e){if(e!="paginate"&&this.resetPagination(),this.fromDate&&this.toDate&&this.logType){let o={userId:this.user_id,uri:this.user_url,fromDate:this.dateFormatter(this.fromDate),toDate:this.dateFormatter(this.toDate),pageNo:this.page,pageSize:this.rowsCount};this.logType=="access_log"?this.$store.dispatch("logs/getAccessLog",o):this.$store.dispatch("logs/getRestLogDetails",o)}else(!this.fromDate||!this.toDate)&&this.$store.dispatch("errorLog/toaster",{data:{title:"Select a from Date and To date",type:"danger",message:"",duration:4500},position:""},{root:!0})},resetFields(e){this.fromDate=this.toDate="",this.logType="access_log",this.user_id=""},resetPagination(){this.page=1,this.pages=2},goBack(){this.page!=1&&(this.page-=1,this.getReports("paginate"))},forward(){this.page==this.pages&&(this.pages+=1),this.page+=1,this.getReports("paginate")},changePage(e){e==this.pages&&(this.pages+=1),this.page=e,this.getReports("paginate")},setPreviousWeekDatetime(){const e=new Date,o=e.getFullYear().toString().padStart(4,"0"),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours();this.fromDate=new Date(`${o}-${p}-${u} ${s}:00:00`)},setCurrentDatetime(){const e=new Date,o=e.getFullYear().toString().padStart(4,"0"),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours(),a=e.getMinutes(),d=e.getSeconds();this.toDate=new Date(`${o}-${p}-${u} ${s}:${a}:${d}`)},dateFormatter(e){if(!e)return null;const o=e.getFullYear(),p=(e.getMonth()+1).toString().padStart(2,"0"),u=e.getDate().toString().padStart(2,"0"),s=e.getHours().toString().padStart(2,"0"),a=e.getMinutes().toString().padStart(2,"0");return`${o}-${p}-${u} ${s}:${a}:00`}},mounted(){this.resetFields(),this.setCurrentDatetime(),this.setPreviousWeekDatetime()},unmounted(){this.$store.commit("logs/setRestLogs",[]),this.$store.commit("logs/setAccessLogs",[])}},Pt={class:"p-4"},qt=t("p",{class:"primaryColor pb-1 text-sm ml-1"},"Log Type",-1),zt=t("option",{value:"access_log"},"Access Log",-1),Ut=t("option",{value:"rest_log"},"Rest Log",-1),Et=[zt,Ut],Gt=t("label",{class:"primaryColor pb-1 text-sm"},"From Date",-1),Wt={class:"flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2"},Qt=["value"],Kt=["onClick","innerHTML"],Xt=t("label",{class:"primaryColor pb-1 text-sm"},"To Date",-1),Zt={class:"flex items-center justify-between w-[160px] h-10 cursor-pointer border rounded p-2"},eo=["value"],to=["onClick"],oo=["innerHTML"],so=t("p",{class:"primaryColor pb-1 text-sm"},"URL",-1),ro=t("p",{class:"primaryColor pb-1 text-sm"},"Application ID",-1),no={class:"flex items-end"},ao=["disabled"],io={key:0},lo={key:1,class:"animate-spin h-5 w-5 text-white flex mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"#fffff",viewBox:"0 0 24 24"},co=t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"#fffff","stroke-width":"4"},null,-1),po=t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),uo=[co,po],go={key:2,class:"flex justify-end m-4 gap-4"},ho={class:"flex items-center"},mo=t("div",{class:"primaryColor text-sm mr-2"},"Rows Per Page : ",-1),xo=t("option",{value:10},"10",-1),fo=t("option",{value:20},"20",-1),yo=t("option",{value:50},"50",-1),_o=[xo,fo,yo],vo={class:"isolate inline-flex -space-x-px rounded shadow-sm bg-white","aria-label":"Pagination"},wo=["innerHTML"],bo=["onClick"],Do=["innerHTML"];function Mo(e,o,p,u,s,a){var i,y;const d=h("VDatePicker"),r=h("accessLog"),x=h("restlog");return n(),c(v,null,[t("div",Pt,[t("form",{class:"flex flex-wrap gap-3 card p-5 border rounded bg-white shadow-sm",onSubmit:o[6]||(o[6]=B(l=>a.getReports(),["prevent"]))},[t("div",null,[qt,D(t("select",{"onUpdate:modelValue":o[0]||(o[0]=l=>s.logType=l),onChange:o[1]||(o[1]=l=>s.user_url=""),class:"border min-w-[160px] h-10 rounded focus:outline-0 px-4 text-xs"},Et,544),[[k,s.logType]])]),t("div",null,[Gt,m(d,{type:"date","max-date":new Date().toISOString().slice(0,10),"min-date":a.getMinDate(),modelValue:s.fromDate,"onUpdate:modelValue":o[2]||(o[2]=l=>s.fromDate=l),"is-required":"",popover:s.popover,masks:{input:"DD-MM-YYYY HH:MM",modelValue:"YYYY-MM-DD HH:MM:SS"},mode:"dateTime",is24hr:"",dateFormat:"YYYY-MM-DD HH:MM"},{default:f(({togglePopover:l,inputValue:b,inputEvents:S})=>[t("div",Wt,[t("input",C({value:b,placeholder:"DD-MM-YYYY HH:MM"},T(S,!0),{class:"min-w-[100px] text-xs outline-none cursor-pointer",readonly:""}),null,16,Qt),t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700",onClick:()=>l(),innerHTML:s.dateSvg},null,8,Kt)])]),_:1},8,["max-date","min-date","modelValue","popover"])]),t("div",null,[Xt,m(d,{type:"date","max-date":new Date().toISOString().slice(0,10),modelValue:s.toDate,"onUpdate:modelValue":o[3]||(o[3]=l=>s.toDate=l),"is-required":"",popover:s.popover,masks:{input:"DD-MM-YYYY HH:MM",modelValue:"YYYY-MM-DD HH:MM:SS"},mode:"dateTime",is24hr:"",dateFormat:"YYYY-MM-DD HH:MM"},{default:f(({togglePopover:l,inputValue:b,inputEvents:S})=>[t("div",Zt,[t("input",C({value:b,placeholder:"DD-MM-YYYY"},T(S,!0),{class:"min-w-[100px] text-xs outline-none cursor-pointer",readonly:""}),null,16,eo),t("button",{type:"button",class:"flex justify-center items-center bg-accent-100 hover:bg-accent-200 text-accent-700",onClick:()=>l()},[t("span",{innerHTML:s.dateSvg},null,8,oo)],8,to)])]),_:1},8,["max-date","modelValue","popover"])]),t("div",null,[so,D(t("input",{type:"text",placeholder:"Enter URL","onUpdate:modelValue":o[4]||(o[4]=l=>s.user_url=l),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs"},null,512),[[V,s.user_url]])]),t("div",null,[ro,D(t("input",{type:"text",placeholder:"Enter Application ID","onUpdate:modelValue":o[5]||(o[5]=l=>s.user_id=l),class:"border w-full h-10 rounded focus:outline-0 px-4 text-xs"},null,512),[[V,s.user_id]])]),t("div",no,[t("button",{type:"submit",class:"bg-blue-500 text-white h-10 w-[120px] cursor-pointer rounded text-xs",disabled:e.getLoader},[e.getLoader?_("",!0):(n(),c("p",io,"Submit")),e.getLoader?(n(),c("svg",lo,uo)):_("",!0)],8,ao)])],32)]),t("div",null,[s.logType=="access_log"&&!e.getLoader?(n(),M(r,{key:0,onGetReports:a.getReports},null,8,["onGetReports"])):e.getLoader?_("",!0):(n(),M(x,{key:1})),(s.logType=="access_log"?((i=e.accessLogs)==null?void 0:i.length)!=0:((y=e.restLogs)==null?void 0:y.length)!=0)&&!e.getLoader?(n(),c("div",go,[t("div",ho,[mo,D(t("select",{"onUpdate:modelValue":o[7]||(o[7]=l=>s.rowsCount=l),class:"border h-10 rounded focus:outline-0 px-4 text-xs cursor-pointer ring-1 ring-inset ring-gray-300",onChange:o[8]||(o[8]=(...l)=>a.getReports&&a.getReports(...l))},_o,544),[[k,s.rowsCount]])]),t("nav",vo,[t("a",{onClick:o[9]||(o[9]=l=>a.goBack()),class:L(["cursor-pointer relative inline-flex items-center rounded-l px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",s.page==1?"cursor-not-allowed":""])},[t("span",{innerHTML:s.leftArror},null,8,wo)],2),(n(!0),c(v,null,$(s.pages,(l,b)=>(n(),c("a",{class:L(["relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer",s.page==l?"z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"]),key:b,onClick:S=>a.changePage(l)},g(l),11,bo))),128)),t("a",{onClick:o[10]||(o[10]=l=>a.forward()),class:"cursor-pointer relative inline-flex items-center rounded-r px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"},[t("span",{innerHTML:s.rightArror},null,8,Do)])])])):_("",!0)])],64)}const $o=w(Jt,[["render",Mo]]),So={components:{tabs:P,smsOrMailLogs:at,dataLogs:$o},data(){return{currentTab:0}},methods:{changeTab(e){this.$store.commit("setActiveTab",e),this.$store.commit("setQuries",{data:{tab:e},action:"change"}),this.currentTab=e}},mounted(){this.changeTab(this.$store.state.queries.logs.query.tab)}};function ko(e,o,p,u,s,a){const d=h("tabs"),r=h("smsOrMailLogs"),x=h("dataLogs");return n(),c(v,null,[m(d,{class:"mx-4",removeActive:!0,onActiveTab:a.changeTab},null,8,["onActiveTab"]),s.currentTab==0?(n(),M(r,{key:0})):_("",!0),s.currentTab==1?(n(),M(x,{key:1})):_("",!0)],64)}const Ho=w(So,[["render",ko]]);export{Ho as default};

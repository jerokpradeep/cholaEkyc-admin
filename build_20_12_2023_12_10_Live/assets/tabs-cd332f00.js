import{m as n,_ as h,r as v,o as s,c as o,F as d,u as l,a as u,D as c,t as i,A as f,x as g,e as y}from"./index-ae411af9.js";const T={name:"tabsComponent",methods:{changeActive(e){this.$emit("activeTab",e)}},mounted(){},computed:{...n("tabs",["getKycApprovalTabs","getKycPanelTabs","getOpportunityTabs","getLogsTabs"]),...n(["getWindowWidth"]),...n("approval",["getIsLoader"]),...n("login",["getUserData"]),getTabs(){var e;if(this.$route.path=="/approvepanel")return((e=this.getUserData)==null?void 0:e.Role)=="RM"||this.$route.query.from=="opportunity"?(this.tabs=this.getKycApprovalTabs.slice(0,-1),this.getKycApprovalTabs.slice(0,-1)):(this.tabs=this.getKycApprovalTabs,this.getKycApprovalTabs);if(this.$route.path=="/kycapproval")return this.tabs=this.getKycPanelTabs,this.getKycPanelTabs;if(this.$route.path=="/opportunity")return this.tabs=this.getOpportunityTabs,this.getOpportunityTabs;if(this.$route.path=="/logs")return this.tabs=this.getLogsTabs,this.getLogsTabs},hasNonApprovedStatusActive(){return this.tabs.some(e=>e.status==="Rejected")?"bg-red-700 text-white":this.tabs.some(e=>e.status==="Open")?"bg-orange-400 text-white":this.tabs.every(e=>e.status==="Approved")?"bg-green-700 text-white":"bg-white"},hasNonApprovedStatus(){return this.tabs.some(e=>e.status==="Rejected")?"border-b-2 text-red-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#B91C1C]/[.35] font-bold border-red-600":this.tabs.some(e=>e.status==="Open")?"border-b-2 text-orange-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#FB923C]/[.35] font-bold border-orange-600":this.tabs.every(e=>e.status==="Approved")?"border-b-2 text-green-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#15803D]/[.35] font-bold border-green-600":"bg-white"}},props:{removeActive:Boolean}},x={class:"flex gap-2 items-center"},A={key:0,class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"myTab"},k=["onClick","id"],_={key:0},$={key:1,class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"myTab"},C=["onClick","id"],w={key:0};function B(e,D,b,K,N,a){const p=v("spinner");return s(),o("div",x,[b.removeActive?(s(),o("ul",$,[(s(!0),o(d,null,l(a.getTabs,(t,r)=>(s(),o("li",{class:"mr-2",role:"presentation",key:r,onClick:m=>a.changeActive(t.id),id:`${e.$route.name}_${r}_b.name`},[u("button",{class:g(["inline-block p-3 rounded-t-lg",b.removeActive&&r==e.$store.state.activeTab?"border-b-2 violet-color border-violet-600":""]),type:"button"},[c(i(t.name)+" ",1),t.count!="0"?(s(),o("span",w,i(t.count),1)):f("",!0)],2)],8,C))),128))])):(s(),o("ul",A,[(s(!0),o(d,null,l(a.getTabs,(t,r)=>(s(),o("li",{class:"mr-2",role:"presentation",key:r,onClick:m=>a.changeActive(t.id),id:`${e.$route.name}_${r}_b.name`},[u("button",{class:g(["inline-block p-3 rounded-t-lg",t.name=="Details"&&r==e.$store.state.activeTab?a.hasNonApprovedStatus:t.name=="Details"?a.hasNonApprovedStatusActive:(r==e.$store.state.activeTab&&t.status&&t.status)=="Approved"?"border-b-2 text-green-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#15803D]/[.35] font-bold border-green-600":(r==e.$store.state.activeTab&&t.status&&t.status)=="Open"?"border-b-2 text-orange-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#FB923C]/[.35] font-bold border-orange-600":(r==e.$store.state.activeTab&&t.status&&t.status)=="Rejected"?"border-b-2 text-red-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#B91C1C]/[.35] font-bold border-red-600":r==e.$store.state.activeTab?"border-b-2 text-violet-600 bg-gradient-to-b from-[#ffffff]/[.35] from-[0%] to-[#753ED7]/[.35] font-bold border-violet-600":t.status&&t.status=="Approved"?"text-white bg-green-700":t.status&&t.status=="Rejected"?"text-white bg-red-700":t.status&&t.status=="Open"?"text-white bg-orange-400":"secondary-color hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"]),type:"button"},[c(i(t.name)+" ",1),t.count!="0"?(s(),o("span",_,i(t.count),1)):f("",!0)],2)],8,k))),128))])),e.getIsLoader?(s(),y(p,{key:2})):f("",!0)])}const L=h(T,[["render",B]]);export{L as t};

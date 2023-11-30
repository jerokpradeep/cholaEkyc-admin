import{m as a,_ as d,r as u,o as r,c as s,a as i,F as g,u as h,x as m,B as y,t as c,y as p,e as b}from"./index-44d77834.js";const v={name:"tabsComponent",methods:{changeActive(t){this.$emit("activeTab",t)}},mounted(){},computed:{...a("tabs",["getKycApprovalTabs","getKycPanelTabs","getOpportunityTabs"]),...a(["getWindowWidth"]),...a("approval",["getIsLoader"]),...a("login",["getUserData"]),getTabs(){var t;if(this.$route.path=="/approvepanel")return((t=this.getUserData)==null?void 0:t.Role)=="RM"||this.$route.query.from=="opportunity"?this.getKycApprovalTabs.slice(0,-1):this.getKycApprovalTabs;if(this.$route.path=="/kycapproval")return this.getKycPanelTabs;if(this.$route.path=="/opportunity")return this.getOpportunityTabs}}},_={class:"flex gap-2 items-center"},k={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"myTab"},x=["onClick","id"],f={key:0};function T(t,$,A,D,B,n){const l=u("spinner");return r(),s("div",_,[i("ul",k,[(r(!0),s(g,null,h(n.getTabs,(e,o)=>(r(),s("li",{class:"mr-2",role:"presentation",key:o,onClick:C=>n.changeActive(e.id),id:`${t.$route.name}_${o}_b.name`},[i("button",{class:m(["inline-block p-3 rounded-t-lg",o==t.$store.state.activeTab?"border-b-2 violet-color hover:violet-color dark:text-[#753ED7] dark:hover:text-[#753ED7] border-[#753ED7] dark:border-[#753ED7]":e.status&&e.status=="Approved"?"text-white bg-green-700":e.status&&e.status=="Rejected"?"text-white bg-red-700":e.status&&e.status=="Open"?"text-white bg-orange-400":"secondary-color hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"]),type:"button"},[y(c(e.name)+" ",1),e.count!="0"?(r(),s("span",f,c(e.count),1)):p("",!0)],2)],8,x))),128))]),t.getIsLoader?(r(),b(l,{key:0})):p("",!0)])}const E=d(v,[["render",T]]);export{E as t};

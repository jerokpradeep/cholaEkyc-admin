import{m as h,_ as d,r as _,o as a,c as n,a as o,F as f,u as y,x as g,t as C,A as c,e as v}from"./index-45615c5c.js";import{r as x}from"./HomeIcon-99fbdd2e.js";const k={components:{HomeIcon:x},data(){return{pages:[]}},computed:{...h("approval",["getCustomerData","getIsLoader"])},methods:{handleClick(e){e.isRoute&&this.$router.push({path:e.isReplace?"/approvepanel":`/${e.name.toLowerCase()}`,query:e.isReplace?this.$route.query:{}}).catch(()=>{})}},watch:{getIsLoader:function(e){var t,s;!e&&this.pages.length==1&&this.pages.push({name:`${(s=(t=this.getCustomerData)==null?void 0:t.opportunity_data)==null?void 0:s.fsl_user_name}`,current:!0,isRoute:!1})}},mounted(){var e,t,s,i;this.pages.push({isReplace:this.$route.path.replace("/","")=="preview",name:this.$route.path.replace("/","")=="preview"?"Back":`${this.$route.query.from.charAt(0).toUpperCase()+this.$route.query.from.slice(1)}`,current:!1,isRoute:!0}),this.getCustomerData&&((t=(e=this.getCustomerData)==null?void 0:e.opportunity_data)!=null&&t.fsl_user_name)&&this.pages.push({name:`${(i=(s=this.getCustomerData)==null?void 0:s.opportunity_data)==null?void 0:i.fsl_user_name}`,current:!0,isRoute:!1})}},$={class:"flex items-center gap-2"},w={class:"flex p-5 py-2","aria-label":"Breadcrumb"},B={role:"list",class:"flex items-center space-x-4"},R=["onClick"],D={class:"flex items-center"},L={key:0,class:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true"},b=o("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"},null,-1),q=[b];function I(e,t,s,i,l,u){const p=_("spinner");return a(),n("div",$,[o("nav",w,[o("ol",B,[(a(!0),n(f,null,y(l.pages,(r,m)=>(a(),n("li",{key:r.name,onClick:A=>u.handleClick(r),class:"cursor-pointer"},[o("div",D,[o("a",{class:g(["mr-4 text-sm font-medium",r.current?"text-gray-500 hover:text-gray-700":"violet-color"])},C(r.name.toString().toLowerCase()=="kycapproval"?"Approval":r.name),3),m==0?(a(),n("svg",L,q)):c("",!0)])],8,R))),128))])]),e.getIsLoader?(a(),v(p,{key:0})):c("",!0)])}const N=d(k,[["render",I]]);export{N as b};

import{m as l,_ as u,o as s,c as r,a,F as p,u as m,x as h,t as d,y as _}from"./index-e4643df7.js";import{r as f}from"./HomeIcon-6fc08b3d.js";const x={components:{HomeIcon:f},data(){return{pages:[]}},computed:{...l("approval",["getCustomerData"])},methods:{handleClick(e){e.isRoute&&this.$router.push({path:e.isReplace?"/approvepanel":`/${e.name.toLowerCase()}`,query:e.isReplace?this.$route.query:{}}).catch(()=>{})}},mounted(){var e,o;this.pages.push({isReplace:this.$route.path.replace("/","")=="preview",name:this.$route.path.replace("/","")=="preview"?"Back":`${this.$route.query.from.charAt(0).toUpperCase()+this.$route.query.from.slice(1)}`,current:!1,isRoute:!0}),this.pages.push({name:`${(o=(e=this.getCustomerData)==null?void 0:e.opportunity_data)==null?void 0:o.fsl_user_name}`,current:!0,isRoute:!1})}},y={class:"flex p-5 py-2","aria-label":"Breadcrumb"},v={role:"list",class:"flex items-center space-x-4"},C=["onClick"],$={class:"flex items-center"},k={key:0,class:"h-5 w-5 flex-shrink-0 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true"},g=a("path",{d:"M5.555 17.776l8-16 .894.448-8 16-.894-.448z"},null,-1),w=[g];function B(e,o,R,b,c,n){return s(),r("nav",y,[a("ol",v,[(s(!0),r(p,null,m(c.pages,(t,i)=>(s(),r("li",{key:t.name,onClick:q=>n.handleClick(t),class:"cursor-pointer"},[a("div",$,[a("a",{class:h(["mr-4 text-sm font-medium",t.current?"text-gray-500 hover:text-gray-700":"violet-color"])},d(t.name.toString().toLowerCase()=="kycapproval"?"Approval":t.name),3),i==0?(s(),r("svg",k,w)):_("",!0)])],8,C))),128))])])}const z=u(x,[["render",B]]);export{z as b};

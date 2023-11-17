import{c as z}from"./chola_head-8c4d2fef.js";import{f as j,g as P,h as k,i as $,p as G,j as W,k as Q,l as J,n as T,m as U,_ as A,o as w,c as R,a as v,t as V,r as I,e as N,q as S,s as x,F as Y,u as Z,x as E}from"./index-34d95abe.js";import{m as X,y as ee,w as te,h as se,o as b,c as ae,H as C,t as O,b as oe,p as ne,N as B,a as le,u as ie,x as re,d as y,e as g,_ as K,O as ue,f as ce,l as D,v as de,g as F}from"./use-text-value-3061065a.js";import{U as ve,G as me,V as pe,h as fe,S as _e}from"./transition-989df7e1.js";const ge="/ekycadmin/assets/Apikey-3c7abd7f.svg",be="/ekycadmin/assets/filter-c4a4a356.svg",he="/ekycadmin/assets/funds-caac8d87.svg",ye="/ekycadmin/assets/funds_dark-7d4304cd.svg",ke="/ekycadmin/assets/holdings-5c997e39.svg",Ie="/ekycadmin/assets/holdings_dark-a8eb1444.svg",xe="/ekycadmin/assets/home-5d0555b5.svg",$e="/ekycadmin/assets/home_dark-0f440b48.svg",we="/ekycadmin/assets/newsIcon-26b17f6b.svg",Se="/ekycadmin/assets/newsIcon_dark-3ef54f97.svg",Te="/ekycadmin/assets/orders-6ddcb535.svg",Me="/ekycadmin/assets/orders_dark-f2bc2070.svg",Re="/ekycadmin/assets/positions-71241e3c.svg",De="/ekycadmin/assets/positions_dark-1ca8ad90.svg",Pe="/ekycadmin/assets/settings-0a10923b.svg",Ce="/ekycadmin/assets/time-6ccff5c2.svg",Le="/ekycadmin/assets/upload-21dbfa53.svg",Ee="/ekycadmin/assets/user-9ec3812b.svg";function Ae({container:t,accept:a,walk:m,enabled:f}){j(()=>{let e=t.value;if(!e||f!==void 0&&!f.value)return;let r=X(t);if(!r)return;let i=Object.assign(u=>a(u),{acceptNode:a}),p=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;p.nextNode();)m(p.currentNode)})}var Oe=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Oe||{}),Ne=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Ne||{});function Be(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let H=Symbol("MenuContext");function L(t){let a=J(H,null);if(a===null){let m=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,L),m}return a}let Fe=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:a,attrs:m}){let f=k(1),e=k(null),r=k(null),i=k([]),p=k(""),u=k(null),o=k(1);function s(l=c=>c){let c=u.value!==null?i.value[u.value]:null,d=ue(l(i.value.slice()),h=>b(h.dataRef.domRef)),n=c?d.indexOf(c):null;return n===-1&&(n=null),{items:d,activeItemIndex:n}}let _={menuState:f,buttonRef:e,itemsRef:r,items:i,searchQuery:p,activeItemIndex:u,activationTrigger:o,closeMenu:()=>{f.value=1,u.value=null},openMenu:()=>f.value=0,goToItem(l,c,d){let n=s(),h=re(l===y.Specific?{focus:y.Specific,id:c}:{focus:l},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});p.value="",u.value=h,o.value=d??1,i.value=n.items},search(l){let c=p.value!==""?0:1;p.value+=l.toLowerCase();let d=(u.value!==null?i.value.slice(u.value+c).concat(i.value.slice(0,u.value+c)):i.value).find(h=>h.dataRef.textValue.startsWith(p.value)&&!h.dataRef.disabled),n=d?i.value.indexOf(d):-1;n===-1||n===u.value||(u.value=n,o.value=1)},clearSearch(){p.value=""},registerItem(l,c){let d=s(n=>[...n,{id:l,dataRef:c}]);i.value=d.items,u.value=d.activeItemIndex,o.value=1},unregisterItem(l){let c=s(d=>{let n=d.findIndex(h=>h.id===l);return n!==-1&&d.splice(n,1),d});i.value=c.items,u.value=c.activeItemIndex,o.value=1}};return ee([e,r],(l,c)=>{var d;_.closeMenu(),te(c,se.Loose)||(l.preventDefault(),(d=b(e))==null||d.focus())},$(()=>f.value===0)),G(H,_),ae($(()=>ce(f.value,{0:D.Open,1:D.Closed}))),()=>{let l={open:f.value===0,close:_.closeMenu};return C({ourProps:{},theirProps:t,slot:l,slots:a,attrs:m,name:"Menu"})}}}),je=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${O()}`}},setup(t,{attrs:a,slots:m,expose:f}){let e=L("MenuButton");f({el:e.buttonRef,$el:e.buttonRef});function r(o){switch(o.key){case g.Space:case g.Enter:case g.ArrowDown:o.preventDefault(),o.stopPropagation(),e.openMenu(),T(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.First)});break;case g.ArrowUp:o.preventDefault(),o.stopPropagation(),e.openMenu(),T(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.Last)});break}}function i(o){switch(o.key){case g.Space:o.preventDefault();break}}function p(o){t.disabled||(e.menuState.value===0?(e.closeMenu(),T(()=>{var s;return(s=b(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(o.preventDefault(),e.openMenu(),Be(()=>{var s;return(s=b(e.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let u=oe($(()=>({as:t.as,type:a.type})),e.buttonRef);return()=>{var o;let s={open:e.menuState.value===0},{id:_,...l}=t,c={ref:e.buttonRef,id:_,type:u.value,"aria-haspopup":"menu","aria-controls":(o=b(e.itemsRef))==null?void 0:o.id,"aria-expanded":e.menuState.value===0,onKeydown:r,onKeyup:i,onClick:p};return C({ourProps:c,theirProps:l,slot:s,attrs:a,slots:m,name:"MenuButton"})}}}),Ue=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${O()}`}},setup(t,{attrs:a,slots:m,expose:f}){let e=L("MenuItems"),r=k(null);f({el:e.itemsRef,$el:e.itemsRef}),Ae({container:$(()=>b(e.itemsRef)),enabled:$(()=>e.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function i(s){var _;switch(r.value&&clearTimeout(r.value),s.key){case g.Space:if(e.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),e.search(s.key);case g.Enter:if(s.preventDefault(),s.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(_=b(l.dataRef.domRef))==null||_.click()}e.closeMenu(),K(b(e.buttonRef));break;case g.ArrowDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Next);case g.ArrowUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Previous);case g.Home:case g.PageUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.First);case g.End:case g.PageDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Last);case g.Escape:s.preventDefault(),s.stopPropagation(),e.closeMenu(),T(()=>{var l;return(l=b(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case g.Tab:s.preventDefault(),s.stopPropagation(),e.closeMenu(),T(()=>de(b(e.buttonRef),s.shiftKey?F.Previous:F.Next));break;default:s.key.length===1&&(e.search(s.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}function p(s){switch(s.key){case g.Space:s.preventDefault();break}}let u=ne(),o=$(()=>u!==null?(u.value&D.Open)===D.Open:e.menuState.value===0);return()=>{var s,_;let l={open:e.menuState.value===0},{id:c,...d}=t,n={"aria-activedescendant":e.activeItemIndex.value===null||(s=e.items.value[e.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(_=b(e.buttonRef))==null?void 0:_.id,id:c,onKeydown:i,onKeyup:p,role:"menu",tabIndex:0,ref:e.itemsRef};return C({ourProps:n,theirProps:d,slot:l,attrs:a,slots:m,features:B.RenderStrategy|B.Static,visible:o.value,name:"MenuItems"})}}}),Ve=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${O()}`}},setup(t,{slots:a,attrs:m,expose:f}){let e=L("MenuItem"),r=k(null);f({el:r,$el:r});let i=$(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),p=le(r),u=$(()=>({disabled:t.disabled,get textValue(){return p()},domRef:r}));W(()=>e.registerItem(t.id,u)),Q(()=>e.unregisterItem(t.id)),j(()=>{e.menuState.value===0&&i.value&&e.activationTrigger.value!==0&&T(()=>{var n,h;return(h=(n=b(r))==null?void 0:n.scrollIntoView)==null?void 0:h.call(n,{block:"nearest"})})});function o(n){if(t.disabled)return n.preventDefault();e.closeMenu(),K(b(e.buttonRef))}function s(){if(t.disabled)return e.goToItem(y.Nothing);e.goToItem(y.Specific,t.id)}let _=ie();function l(n){_.update(n)}function c(n){_.wasMoved(n)&&(t.disabled||i.value||e.goToItem(y.Specific,t.id,0))}function d(n){_.wasMoved(n)&&(t.disabled||i.value&&e.goToItem(y.Nothing))}return()=>{let{disabled:n}=t,h={active:i.value,disabled:n,close:e.closeMenu},{id:M,...q}=t;return C({ourProps:{id:M,ref:r,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:o,onFocus:s,onPointerenter:l,onMouseenter:l,onPointermove:c,onMousemove:c,onPointerleave:d,onMouseleave:d},theirProps:{...m,...q},slot:h,attrs:m,slots:a,name:"MenuItem"})}}});const Ke={data(){return{clientLogo:z}},computed:{...U("login",["getUserName"])},components:{Menu:Fe,MenuButton:je,MenuItems:Ue,MenuItem:Ve}},He={class:"w-full"},qe={class:"imgHeight flex items-center justify-between p-4"},ze={class:"-pointer logo mr-auto flex items-center"},Ge=["src"],We={class:"mb-1 text-sm"};function Qe(t,a,m,f,e,r){return w(),R("div",He,[v("div",qe,[v("div",ze,[v("img",{src:e.clientLogo,class:"h-6",alt:"logo"},null,8,Ge)]),v("div",null,[v("div",We,V(t.getUserName),1),v("p",{class:"text-blue-500 cursor-pointer text-xs",onClick:a[0]||(a[0]=i=>t.$store.commit("setLogout",!0))},"Logout")])])])}const Je=A(Ke,[["render",Qe],["__scopeId","data-v-5d45a125"]]),Ye={name:"logout-dialog",components:{Dialog:ve,DialogPanel:me,DialogTitle:pe,TransitionChild:fe,TransitionRoot:_e},computed:{...U(["getIsLogoutLoader"])},methods:{close(){this.$store.commit("setLogout",!1)}}},Ze=v("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Xe={class:"fixed inset-0 z-10 overflow-y-auto"},et={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},tt=v("p",{class:"secondaryColor",id:"logout_content"},"Are you sure want to logout ?",-1),st={class:"mt-8 flex justify-end gap-2"},at={key:0};function ot(t,a,m,f,e,r){const i=I("TransitionChild"),p=I("DialogTitle"),u=I("btnLoader"),o=I("DialogPanel"),s=I("Dialog"),_=I("TransitionRoot");return w(),N(_,{as:"template",show:t.$store.state.isLogout},{default:S(()=>[x(s,{as:"div",class:"relative z-10",onClose:a[2]||(a[2]=l=>r.close())},{default:S(()=>[x(i,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:S(()=>[Ze]),_:1}),v("div",Xe,[v("div",et,[x(i,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:S(()=>[x(o,{class:"w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white"},{default:S(()=>[x(p,{as:"h3",class:"text-base pb-2 font-medium leading-6 primaryColor"},{default:S(()=>[tt]),_:1}),v("div",st,[v("button",{type:"button",class:"themeBtn min-w-[80px]",id:"logout_btn",onClick:a[0]||(a[0]=l=>t.$store.dispatch("callLogout"))},[t.getIsLogoutLoader?(w(),N(u,{key:1})):(w(),R("span",at,"Logout"))]),v("button",{type:"button",class:"cancelBtn min-w-[80px]",id:"logout_cancel_btn",onClick:a[1]||(a[1]=l=>r.close())}," Cancel ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}const nt=A(Ye,[["render",ot]]),lt={components:{headerComp:Je,logoutDialog:nt},data(){return{steps:[]}},methods:{activeTab(t){this.$router.push(t.route),this.setActiveTab(t),localStorage.setItem("sidebarTab",t.name)},setActiveTab(t){let a=this.$store.state.validSteps;a.forEach(m=>{m.route==t.route?m.active=!0:m.active=!1}),this.$store.commit("setValidSteps",a)},retainCurrentTab(){let t=localStorage.getItem("sidebarTab");t&&this.steps.forEach(a=>{a.active=a.name==t})},getImageSrc(t){return new URL(Object.assign({"../assets/menu/Apikey.svg":ge,"../assets/menu/filter.svg":be,"../assets/menu/funds.svg":he,"../assets/menu/funds_dark.svg":ye,"../assets/menu/holdings.svg":ke,"../assets/menu/holdings_dark.svg":Ie,"../assets/menu/home.svg":xe,"../assets/menu/home_dark.svg":$e,"../assets/menu/newsIcon.svg":we,"../assets/menu/newsIcon_dark.svg":Se,"../assets/menu/orders.svg":Te,"../assets/menu/orders_dark.svg":Me,"../assets/menu/positions.svg":Re,"../assets/menu/positions_dark.svg":De,"../assets/menu/settings.svg":Pe,"../assets/menu/time.svg":Ce,"../assets/menu/upload.svg":Le,"../assets/menu/user.svg":Ee})[`../assets/menu/${t.svg}.svg`],self.location).href}},created(){let t=this.$store.state.validSteps.filter(a=>a.route==this.$router.currentRoute.value.path);t.length>0&&this.setActiveTab(t[0])}},it={class:"h-screen !overflow-hidden"},rt={class:"flex flex-col lg:flex-row bg-[#f7f5f5]",style:{height:"calc(100vh - 56px)"}},ut={class:"border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden"},ct={role:"list",class:"space-y-2"},dt=["onClick"],vt={class:"cursor-pointer"},mt={class:"flex flex-col items-center justify-center cursor-pointer min-h-[32px] px-2"},pt=["src","alt"],ft={class:"w-full lg:h-[calc(100vh-83px)] h-[calc(100vh-60px)] overflow-y-auto"};function _t(t,a,m,f,e,r){const i=I("headerComp"),p=I("router-view"),u=I("logoutDialog");return w(),R("div",null,[v("div",it,[x(i),v("div",rt,[v("div",ut,[v("ul",ct,[(w(!0),R(Y,null,Z(t.$store.state.validSteps,(o,s)=>(w(),R("li",{class:E(["md:flex-1 py-2 hover:bg-[#f9fdff] border-l-4",{" border-[#0081B8] bg-[#f9fdff]":o.active}]),key:s,onClick:_=>r.activeTab(o)},[v("div",vt,[v("div",mt,[v("span",null,[v("img",{class:E([{activeImg:o.active},"max-w-[76%] h-auto mx-auto"]),src:r.getImageSrc(o),alt:o.svg},null,10,pt)]),v("span",{class:E(["font-medium text-xs text-center",{"text-[#0081B8]":o.active,primaryColor:!o.active}])},V(o.name),3)])])],10,dt))),128))])]),v("div",ft,[x(p)])]),x(u)])])}const kt=A(lt,[["render",_t]]);export{kt as default};

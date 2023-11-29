import{c as z}from"./chola_head-8c4d2fef.js";import{f as j,g as P,h as k,i as w,p as G,j as W,k as Q,l as J,n as T,m as U,_ as O,o as $,c as R,a as v,t as V,r as x,e as A,q as S,s as I,F as Y,u as Z,x as E}from"./index-56059bd6.js";import{m as X,y as ee,w as te,h as se,o as b,c as ae,H as C,t as N,b as oe,p as ne,N as B,a as le,u as ie,x as re,d as y,e as g,_ as K,O as ue,f as ce,l as D,v as de,g as F}from"./use-text-value-f3ae78df.js";import{U as ve,G as me,V as pe,h as _e,S as fe}from"./transition-64b7ef05.js";const ge="/ekycadmin/assets/Apikey-3c7abd7f.svg",be="/ekycadmin/assets/download-6df4865f.svg",he="/ekycadmin/assets/filter-c4a4a356.svg",ye="/ekycadmin/assets/funds-caac8d87.svg",ke="/ekycadmin/assets/funds_dark-7d4304cd.svg",xe="/ekycadmin/assets/holdings-5c997e39.svg",Ie="/ekycadmin/assets/holdings_dark-a8eb1444.svg",we="/ekycadmin/assets/home-5d0555b5.svg",$e="/ekycadmin/assets/home_dark-0f440b48.svg",Se="/ekycadmin/assets/newsIcon-26b17f6b.svg",Te="/ekycadmin/assets/newsIcon_dark-3ef54f97.svg",Me="/ekycadmin/assets/orders-6ddcb535.svg",Re="/ekycadmin/assets/orders_dark-f2bc2070.svg",De="/ekycadmin/assets/positions-71241e3c.svg",Pe="/ekycadmin/assets/positions_dark-1ca8ad90.svg",Ce="/ekycadmin/assets/settings-0a10923b.svg",Le="/ekycadmin/assets/time-6ccff5c2.svg",Ee="/ekycadmin/assets/upload-21dbfa53.svg",Oe="/ekycadmin/assets/user-9ec3812b.svg";function Ne({container:t,accept:n,walk:f,enabled:p}){j(()=>{let e=t.value;if(!e||p!==void 0&&!p.value)return;let r=X(t);if(!r)return;let i=Object.assign(u=>n(u),{acceptNode:n}),m=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;m.nextNode();)f(m.currentNode)})}var Ae=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Ae||{}),Be=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Be||{});function Fe(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let H=Symbol("MenuContext");function L(t){let n=J(H,null);if(n===null){let f=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,L),f}return n}let je=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:n,attrs:f}){let p=k(1),e=k(null),r=k(null),i=k([]),m=k(""),u=k(null),a=k(1);function s(l=c=>c){let c=u.value!==null?i.value[u.value]:null,d=ue(l(i.value.slice()),h=>b(h.dataRef.domRef)),o=c?d.indexOf(c):null;return o===-1&&(o=null),{items:d,activeItemIndex:o}}let _={menuState:p,buttonRef:e,itemsRef:r,items:i,searchQuery:m,activeItemIndex:u,activationTrigger:a,closeMenu:()=>{p.value=1,u.value=null},openMenu:()=>p.value=0,goToItem(l,c,d){let o=s(),h=re(l===y.Specific?{focus:y.Specific,id:c}:{focus:l},{resolveItems:()=>o.items,resolveActiveIndex:()=>o.activeItemIndex,resolveId:M=>M.id,resolveDisabled:M=>M.dataRef.disabled});m.value="",u.value=h,a.value=d??1,i.value=o.items},search(l){let c=m.value!==""?0:1;m.value+=l.toLowerCase();let d=(u.value!==null?i.value.slice(u.value+c).concat(i.value.slice(0,u.value+c)):i.value).find(h=>h.dataRef.textValue.startsWith(m.value)&&!h.dataRef.disabled),o=d?i.value.indexOf(d):-1;o===-1||o===u.value||(u.value=o,a.value=1)},clearSearch(){m.value=""},registerItem(l,c){let d=s(o=>[...o,{id:l,dataRef:c}]);i.value=d.items,u.value=d.activeItemIndex,a.value=1},unregisterItem(l){let c=s(d=>{let o=d.findIndex(h=>h.id===l);return o!==-1&&d.splice(o,1),d});i.value=c.items,u.value=c.activeItemIndex,a.value=1}};return ee([e,r],(l,c)=>{var d;_.closeMenu(),te(c,se.Loose)||(l.preventDefault(),(d=b(e))==null||d.focus())},w(()=>p.value===0)),G(H,_),ae(w(()=>ce(p.value,{0:D.Open,1:D.Closed}))),()=>{let l={open:p.value===0,close:_.closeMenu};return C({ourProps:{},theirProps:t,slot:l,slots:n,attrs:f,name:"Menu"})}}}),Ue=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${N()}`}},setup(t,{attrs:n,slots:f,expose:p}){let e=L("MenuButton");p({el:e.buttonRef,$el:e.buttonRef});function r(a){switch(a.key){case g.Space:case g.Enter:case g.ArrowDown:a.preventDefault(),a.stopPropagation(),e.openMenu(),T(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.First)});break;case g.ArrowUp:a.preventDefault(),a.stopPropagation(),e.openMenu(),T(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.Last)});break}}function i(a){switch(a.key){case g.Space:a.preventDefault();break}}function m(a){t.disabled||(e.menuState.value===0?(e.closeMenu(),T(()=>{var s;return(s=b(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(a.preventDefault(),e.openMenu(),Fe(()=>{var s;return(s=b(e.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let u=oe(w(()=>({as:t.as,type:n.type})),e.buttonRef);return()=>{var a;let s={open:e.menuState.value===0},{id:_,...l}=t,c={ref:e.buttonRef,id:_,type:u.value,"aria-haspopup":"menu","aria-controls":(a=b(e.itemsRef))==null?void 0:a.id,"aria-expanded":e.menuState.value===0,onKeydown:r,onKeyup:i,onClick:m};return C({ourProps:c,theirProps:l,slot:s,attrs:n,slots:f,name:"MenuButton"})}}}),Ve=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${N()}`}},setup(t,{attrs:n,slots:f,expose:p}){let e=L("MenuItems"),r=k(null);p({el:e.itemsRef,$el:e.itemsRef}),Ne({container:w(()=>b(e.itemsRef)),enabled:w(()=>e.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function i(s){var _;switch(r.value&&clearTimeout(r.value),s.key){case g.Space:if(e.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),e.search(s.key);case g.Enter:if(s.preventDefault(),s.stopPropagation(),e.activeItemIndex.value!==null){let l=e.items.value[e.activeItemIndex.value];(_=b(l.dataRef.domRef))==null||_.click()}e.closeMenu(),K(b(e.buttonRef));break;case g.ArrowDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Next);case g.ArrowUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Previous);case g.Home:case g.PageUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.First);case g.End:case g.PageDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Last);case g.Escape:s.preventDefault(),s.stopPropagation(),e.closeMenu(),T(()=>{var l;return(l=b(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case g.Tab:s.preventDefault(),s.stopPropagation(),e.closeMenu(),T(()=>de(b(e.buttonRef),s.shiftKey?F.Previous:F.Next));break;default:s.key.length===1&&(e.search(s.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}function m(s){switch(s.key){case g.Space:s.preventDefault();break}}let u=ne(),a=w(()=>u!==null?(u.value&D.Open)===D.Open:e.menuState.value===0);return()=>{var s,_;let l={open:e.menuState.value===0},{id:c,...d}=t,o={"aria-activedescendant":e.activeItemIndex.value===null||(s=e.items.value[e.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(_=b(e.buttonRef))==null?void 0:_.id,id:c,onKeydown:i,onKeyup:m,role:"menu",tabIndex:0,ref:e.itemsRef};return C({ourProps:o,theirProps:d,slot:l,attrs:n,slots:f,features:B.RenderStrategy|B.Static,visible:a.value,name:"MenuItems"})}}}),Ke=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${N()}`}},setup(t,{slots:n,attrs:f,expose:p}){let e=L("MenuItem"),r=k(null);p({el:r,$el:r});let i=w(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),m=le(r),u=w(()=>({disabled:t.disabled,get textValue(){return m()},domRef:r}));W(()=>e.registerItem(t.id,u)),Q(()=>e.unregisterItem(t.id)),j(()=>{e.menuState.value===0&&i.value&&e.activationTrigger.value!==0&&T(()=>{var o,h;return(h=(o=b(r))==null?void 0:o.scrollIntoView)==null?void 0:h.call(o,{block:"nearest"})})});function a(o){if(t.disabled)return o.preventDefault();e.closeMenu(),K(b(e.buttonRef))}function s(){if(t.disabled)return e.goToItem(y.Nothing);e.goToItem(y.Specific,t.id)}let _=ie();function l(o){_.update(o)}function c(o){_.wasMoved(o)&&(t.disabled||i.value||e.goToItem(y.Specific,t.id,0))}function d(o){_.wasMoved(o)&&(t.disabled||i.value&&e.goToItem(y.Nothing))}return()=>{let{disabled:o}=t,h={active:i.value,disabled:o,close:e.closeMenu},{id:M,...q}=t;return C({ourProps:{id:M,ref:r,role:"menuitem",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,disabled:void 0,onClick:a,onFocus:s,onPointerenter:l,onMouseenter:l,onPointermove:c,onMousemove:c,onPointerleave:d,onMouseleave:d},theirProps:{...f,...q},slot:h,attrs:f,slots:n,name:"MenuItem"})}}});const He={data(){return{clientLogo:z}},computed:{...U("login",["getUserName"])},components:{Menu:je,MenuButton:Ue,MenuItems:Ve,MenuItem:Ke}},qe={class:"w-full"},ze={class:"imgHeight flex items-center justify-between p-4"},Ge={class:"-pointer logo mr-auto flex items-center"},We=["src"],Qe={class:"mb-1 text-sm"};function Je(t,n,f,p,e,r){return $(),R("div",qe,[v("div",ze,[v("div",Ge,[v("img",{src:e.clientLogo,class:"h-6",alt:"logo"},null,8,We)]),v("div",null,[v("div",Qe,V(t.getUserName),1),v("p",{class:"text-blue-500 cursor-pointer text-xs",onClick:n[0]||(n[0]=i=>t.$store.commit("setLogout",!0))},"Logout")])])])}const Ye=O(He,[["render",Je],["__scopeId","data-v-5d45a125"]]),Ze={name:"logout-dialog",components:{Dialog:ve,DialogPanel:me,DialogTitle:pe,TransitionChild:_e,TransitionRoot:fe},computed:{...U(["getIsLogoutLoader"])},methods:{close(){this.$store.commit("setLogout",!1)}}},Xe=v("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),et={class:"fixed inset-0 z-10 overflow-y-auto"},tt={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},st=v("p",{class:"secondaryColor",id:"logout_content"},"Are you sure want to logout ?",-1),at={class:"mt-8 flex justify-end gap-2"},ot={key:0};function nt(t,n,f,p,e,r){const i=x("TransitionChild"),m=x("DialogTitle"),u=x("btnLoader"),a=x("DialogPanel"),s=x("Dialog"),_=x("TransitionRoot");return $(),A(_,{as:"template",show:t.$store.state.isLogout},{default:S(()=>[I(s,{as:"div",class:"relative z-10",onClose:n[2]||(n[2]=l=>r.close())},{default:S(()=>[I(i,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:S(()=>[Xe]),_:1}),v("div",et,[v("div",tt,[I(i,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:S(()=>[I(a,{class:"w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white"},{default:S(()=>[I(m,{as:"h3",class:"text-base pb-2 font-medium leading-6 primaryColor"},{default:S(()=>[st]),_:1}),v("div",at,[v("button",{type:"button",class:"themeBtn min-w-[80px]",id:"logout_btn",onClick:n[0]||(n[0]=l=>t.$store.dispatch("callLogout"))},[t.getIsLogoutLoader?($(),A(u,{key:1})):($(),R("span",ot,"Logout"))]),v("button",{type:"button",class:"cancelBtn min-w-[80px]",id:"logout_cancel_btn",onClick:n[1]||(n[1]=l=>r.close())}," Cancel ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}const lt=O(Ze,[["render",nt]]),it={components:{headerComp:Ye,logoutDialog:lt},data(){return{steps:[]}},methods:{activeTab(t){this.$router.push(t.route),this.$store.dispatch("changeTab",t)},retainCurrentTab(){let t=localStorage.getItem("sidebarTab");t&&this.steps.forEach(n=>{n.active=n.name==t})},getImageSrc(t){return new URL(Object.assign({"../assets/menu/Apikey.svg":ge,"../assets/menu/download.svg":be,"../assets/menu/filter.svg":he,"../assets/menu/funds.svg":ye,"../assets/menu/funds_dark.svg":ke,"../assets/menu/holdings.svg":xe,"../assets/menu/holdings_dark.svg":Ie,"../assets/menu/home.svg":we,"../assets/menu/home_dark.svg":$e,"../assets/menu/newsIcon.svg":Se,"../assets/menu/newsIcon_dark.svg":Te,"../assets/menu/orders.svg":Me,"../assets/menu/orders_dark.svg":Re,"../assets/menu/positions.svg":De,"../assets/menu/positions_dark.svg":Pe,"../assets/menu/settings.svg":Ce,"../assets/menu/time.svg":Le,"../assets/menu/upload.svg":Ee,"../assets/menu/user.svg":Oe})[`../assets/menu/${t.svg}.svg`],self.location).href}},created(){let t=this.$store.state.validSteps.filter(n=>n.route==this.$router.currentRoute.value.path);t.length>0&&this.$store.dispatch("changeTab",t[0])}},rt={class:"h-screen !overflow-hidden"},ut={class:"flex flex-col lg:flex-row bg-[#f7f5f5]",style:{height:"calc(100vh - 56px)"}},ct={class:"border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden"},dt={role:"list",class:"space-y-2"},vt=["onClick"],mt={class:"cursor-pointer"},pt={class:"flex flex-col items-center justify-center cursor-pointer min-h-[32px] px-2"},_t=["src","alt"],ft={class:"w-full lg:h-[calc(100vh-83px)] h-[calc(100vh-60px)] overflow-y-auto"};function gt(t,n,f,p,e,r){const i=x("headerComp"),m=x("router-view"),u=x("logoutDialog");return $(),R("div",null,[v("div",rt,[I(i),v("div",ut,[v("div",ct,[v("ul",dt,[($(!0),R(Y,null,Z(t.$store.state.validSteps,(a,s)=>($(),R("li",{class:E(["md:flex-1 py-2 hover:bg-[#f9fdff] border-l-4",{" border-[#0081B8] bg-[#f9fdff]":a.active}]),key:s,onClick:_=>r.activeTab(a)},[v("div",mt,[v("div",pt,[v("span",null,[v("img",{class:E([{activeImg:a.active},"max-w-[76%] h-auto mx-auto"]),src:r.getImageSrc(a),alt:a.svg},null,10,_t)]),v("span",{class:E(["font-medium text-xs text-center",{"text-[#0081B8]":a.active,primaryColor:!a.active}])},V(a.name),3)])])],10,vt))),128))])]),v("div",ft,[I(m)])]),I(u)])])}const xt=O(it,[["render",gt]]);export{xt as default};

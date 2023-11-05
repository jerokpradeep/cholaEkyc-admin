import{c as K}from"./chola_head-8c4d2fef.js";import{e as F,f as P,r as k,g as $,p as H,h as q,i as z,j as W,n as S,_ as O,o as M,c as R,a as v,k as x,l as G,q as w,s as I,F as Q,t as J,u as A,x as Y}from"./index-4b636f00.js";import{m as Z,y as X,w as ee,h as te,o as b,c as se,H as C,t as L,p as ae,N as B,a as g,_ as j,O as oe,u as ne,l as D,v as le,b as N}from"./hidden-d79c0014.js";import{b as ie,p as re,u as ue,x as ce,a as y}from"./use-text-value-1feaefd9.js";import{U as de,G as ve,V as me,h as pe,S as fe}from"./transition-06febefc.js";const _e="/ekycadmin/assets/Apikey-3c7abd7f.svg",ge="/ekycadmin/assets/filter-c4a4a356.svg",be="/ekycadmin/assets/funds-caac8d87.svg",he="/ekycadmin/assets/funds_dark-7d4304cd.svg",ye="/ekycadmin/assets/holdings-5c997e39.svg",ke="/ekycadmin/assets/holdings_dark-a8eb1444.svg",xe="/ekycadmin/assets/home-5d0555b5.svg",Ie="/ekycadmin/assets/home_dark-0f440b48.svg",$e="/ekycadmin/assets/newsIcon-26b17f6b.svg",we="/ekycadmin/assets/newsIcon_dark-3ef54f97.svg",Se="/ekycadmin/assets/orders-6ddcb535.svg",Te="/ekycadmin/assets/orders_dark-f2bc2070.svg",Me="/ekycadmin/assets/positions-71241e3c.svg",Re="/ekycadmin/assets/positions_dark-1ca8ad90.svg",De="/ekycadmin/assets/settings-0a10923b.svg",Pe="/ekycadmin/assets/time-6ccff5c2.svg",Ce="/ekycadmin/assets/upload-21dbfa53.svg",Ee="/ekycadmin/assets/user-9ec3812b.svg";function Ae({container:t,accept:a,walk:m,enabled:_}){F(()=>{let e=t.value;if(!e||_!==void 0&&!_.value)return;let r=Z(t);if(!r)return;let l=Object.assign(u=>a(u),{acceptNode:a}),p=r.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;p.nextNode();)m(p.currentNode)})}var Oe=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(Oe||{}),Le=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Le||{});function Be(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let U=Symbol("MenuContext");function E(t){let a=W(U,null);if(a===null){let m=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,E),m}return a}let Ne=P({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(t,{slots:a,attrs:m}){let _=k(1),e=k(null),r=k(null),l=k([]),p=k(""),u=k(null),o=k(1);function s(i=c=>c){let c=u.value!==null?l.value[u.value]:null,d=oe(i(l.value.slice()),h=>b(h.dataRef.domRef)),n=c?d.indexOf(c):null;return n===-1&&(n=null),{items:d,activeItemIndex:n}}let f={menuState:_,buttonRef:e,itemsRef:r,items:l,searchQuery:p,activeItemIndex:u,activationTrigger:o,closeMenu:()=>{_.value=1,u.value=null},openMenu:()=>_.value=0,goToItem(i,c,d){let n=s(),h=ce(i===y.Specific?{focus:y.Specific,id:c}:{focus:i},{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:T=>T.id,resolveDisabled:T=>T.dataRef.disabled});p.value="",u.value=h,o.value=d??1,l.value=n.items},search(i){let c=p.value!==""?0:1;p.value+=i.toLowerCase();let d=(u.value!==null?l.value.slice(u.value+c).concat(l.value.slice(0,u.value+c)):l.value).find(h=>h.dataRef.textValue.startsWith(p.value)&&!h.dataRef.disabled),n=d?l.value.indexOf(d):-1;n===-1||n===u.value||(u.value=n,o.value=1)},clearSearch(){p.value=""},registerItem(i,c){let d=s(n=>[...n,{id:i,dataRef:c}]);l.value=d.items,u.value=d.activeItemIndex,o.value=1},unregisterItem(i){let c=s(d=>{let n=d.findIndex(h=>h.id===i);return n!==-1&&d.splice(n,1),d});l.value=c.items,u.value=c.activeItemIndex,o.value=1}};return X([e,r],(i,c)=>{var d;f.closeMenu(),ee(c,te.Loose)||(i.preventDefault(),(d=b(e))==null||d.focus())},$(()=>_.value===0)),H(U,f),se($(()=>ne(_.value,{0:D.Open,1:D.Closed}))),()=>{let i={open:_.value===0,close:f.closeMenu};return C({ourProps:{},theirProps:t,slot:i,slots:a,attrs:m,name:"Menu"})}}}),Fe=P({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${L()}`}},setup(t,{attrs:a,slots:m,expose:_}){let e=E("MenuButton");_({el:e.buttonRef,$el:e.buttonRef});function r(o){switch(o.key){case g.Space:case g.Enter:case g.ArrowDown:o.preventDefault(),o.stopPropagation(),e.openMenu(),S(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.First)});break;case g.ArrowUp:o.preventDefault(),o.stopPropagation(),e.openMenu(),S(()=>{var s;(s=b(e.itemsRef))==null||s.focus({preventScroll:!0}),e.goToItem(y.Last)});break}}function l(o){switch(o.key){case g.Space:o.preventDefault();break}}function p(o){t.disabled||(e.menuState.value===0?(e.closeMenu(),S(()=>{var s;return(s=b(e.buttonRef))==null?void 0:s.focus({preventScroll:!0})})):(o.preventDefault(),e.openMenu(),Be(()=>{var s;return(s=b(e.itemsRef))==null?void 0:s.focus({preventScroll:!0})})))}let u=ie($(()=>({as:t.as,type:a.type})),e.buttonRef);return()=>{var o;let s={open:e.menuState.value===0},{id:f,...i}=t,c={ref:e.buttonRef,id:f,type:u.value,"aria-haspopup":"menu","aria-controls":(o=b(e.itemsRef))==null?void 0:o.id,"aria-expanded":e.menuState.value===0,onKeydown:r,onKeyup:l,onClick:p};return C({ourProps:c,theirProps:i,slot:s,attrs:a,slots:m,name:"MenuButton"})}}}),je=P({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${L()}`}},setup(t,{attrs:a,slots:m,expose:_}){let e=E("MenuItems"),r=k(null);_({el:e.itemsRef,$el:e.itemsRef}),Ae({container:$(()=>b(e.itemsRef)),enabled:$(()=>e.menuState.value===0),accept(s){return s.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:s.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(s){s.setAttribute("role","none")}});function l(s){var f;switch(r.value&&clearTimeout(r.value),s.key){case g.Space:if(e.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),e.search(s.key);case g.Enter:if(s.preventDefault(),s.stopPropagation(),e.activeItemIndex.value!==null){let i=e.items.value[e.activeItemIndex.value];(f=b(i.dataRef.domRef))==null||f.click()}e.closeMenu(),j(b(e.buttonRef));break;case g.ArrowDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Next);case g.ArrowUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Previous);case g.Home:case g.PageUp:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.First);case g.End:case g.PageDown:return s.preventDefault(),s.stopPropagation(),e.goToItem(y.Last);case g.Escape:s.preventDefault(),s.stopPropagation(),e.closeMenu(),S(()=>{var i;return(i=b(e.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case g.Tab:s.preventDefault(),s.stopPropagation(),e.closeMenu(),S(()=>le(b(e.buttonRef),s.shiftKey?N.Previous:N.Next));break;default:s.key.length===1&&(e.search(s.key),r.value=setTimeout(()=>e.clearSearch(),350));break}}function p(s){switch(s.key){case g.Space:s.preventDefault();break}}let u=ae(),o=$(()=>u!==null?(u.value&D.Open)===D.Open:e.menuState.value===0);return()=>{var s,f;let i={open:e.menuState.value===0},{id:c,...d}=t,n={"aria-activedescendant":e.activeItemIndex.value===null||(s=e.items.value[e.activeItemIndex.value])==null?void 0:s.id,"aria-labelledby":(f=b(e.buttonRef))==null?void 0:f.id,id:c,onKeydown:l,onKeyup:p,role:"menu",tabIndex:0,ref:e.itemsRef};return C({ourProps:n,theirProps:d,slot:i,attrs:a,slots:m,features:B.RenderStrategy|B.Static,visible:o.value,name:"MenuItems"})}}}),Ue=P({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${L()}`}},setup(t,{slots:a,attrs:m,expose:_}){let e=E("MenuItem"),r=k(null);_({el:r,$el:r});let l=$(()=>e.activeItemIndex.value!==null?e.items.value[e.activeItemIndex.value].id===t.id:!1),p=re(r),u=$(()=>({disabled:t.disabled,get textValue(){return p()},domRef:r}));q(()=>e.registerItem(t.id,u)),z(()=>e.unregisterItem(t.id)),F(()=>{e.menuState.value===0&&l.value&&e.activationTrigger.value!==0&&S(()=>{var n,h;return(h=(n=b(r))==null?void 0:n.scrollIntoView)==null?void 0:h.call(n,{block:"nearest"})})});function o(n){if(t.disabled)return n.preventDefault();e.closeMenu(),j(b(e.buttonRef))}function s(){if(t.disabled)return e.goToItem(y.Nothing);e.goToItem(y.Specific,t.id)}let f=ue();function i(n){f.update(n)}function c(n){f.wasMoved(n)&&(t.disabled||l.value||e.goToItem(y.Specific,t.id,0))}function d(n){f.wasMoved(n)&&(t.disabled||l.value&&e.goToItem(y.Nothing))}return()=>{let{disabled:n}=t,h={active:l.value,disabled:n,close:e.closeMenu},{id:T,...V}=t;return C({ourProps:{id:T,ref:r,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:o,onFocus:s,onPointerenter:i,onMouseenter:i,onPointermove:c,onMousemove:c,onPointerleave:d,onMouseleave:d},theirProps:{...m,...V},slot:h,attrs:m,slots:a,name:"MenuItem"})}}});const Ve={data(){return{clientLogo:K}},components:{Menu:Ne,MenuButton:Fe,MenuItems:je,MenuItem:Ue}},Ke={class:"w-full"},He={class:"imgHeight flex items-center justify-between p-4"},qe={class:"-pointer logo mr-auto flex items-center"},ze=["src"];function We(t,a,m,_,e,r){return M(),R("div",Ke,[v("div",He,[v("div",qe,[v("img",{src:e.clientLogo,class:"h-6",alt:"logo"},null,8,ze)]),v("div",null,[v("p",{class:"text-blue-500 cursor-pointer text-xs",onClick:a[0]||(a[0]=l=>t.$store.commit("setLogout",!0))},"Logout")])])])}const Ge=O(Ve,[["render",We],["__scopeId","data-v-6618ad56"]]),Qe={name:"logout-dialog",components:{Dialog:de,DialogPanel:ve,DialogTitle:me,TransitionChild:pe,TransitionRoot:fe},methods:{close(){this.$store.commit("setLogout",!1)}}},Je=v("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),Ye={class:"fixed inset-0 z-10 overflow-y-auto"},Ze={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Xe=v("p",{class:"secondaryColor",id:"logout_content"},"Are you sure want to logout ?",-1),et={class:"mt-8 flex justify-end gap-2"};function tt(t,a,m,_,e,r){const l=x("TransitionChild"),p=x("DialogTitle"),u=x("DialogPanel"),o=x("Dialog"),s=x("TransitionRoot");return M(),G(s,{as:"template",show:t.$store.state.isLogout},{default:w(()=>[I(o,{as:"div",class:"relative z-10",onClose:a[2]||(a[2]=f=>r.close())},{default:w(()=>[I(l,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:w(()=>[Je]),_:1}),v("div",Ye,[v("div",Ze,[I(l,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:w(()=>[I(u,{class:"w-full max-w-md transform rounded overflow-hidden radius p-6 text-left align-middle bg-white"},{default:w(()=>[I(p,{as:"h3",class:"text-base pb-2 font-medium leading-6 primaryColor"},{default:w(()=>[Xe]),_:1}),v("div",et,[v("button",{type:"button",class:"themeBtn",id:"logout_btn",onClick:a[0]||(a[0]=f=>t.$store.dispatch("callLogout"))}," Logout "),v("button",{type:"button",class:"cancelBtn",id:"logout_cancel_btn",onClick:a[1]||(a[1]=f=>r.close())}," Cancel ")])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])}const st=O(Qe,[["render",tt]]),at={components:{headerComp:Ge,logoutDialog:st},data(){return{steps:[]}},methods:{activeTab(t){this.$router.push(t.route),this.setActiveTab(t),localStorage.setItem("sidebarTab",t.name)},setActiveTab(t){let a=this.$store.state.validSteps;a.forEach(m=>{m.route==t.route?m.active=!0:m.active=!1}),this.$store.commit("setValidSteps",a)},retainCurrentTab(){let t=localStorage.getItem("sidebarTab");t&&this.steps.forEach(a=>{a.active=a.name==t})},getImageSrc(t){return new URL(Object.assign({"../assets/menu/Apikey.svg":_e,"../assets/menu/filter.svg":ge,"../assets/menu/funds.svg":be,"../assets/menu/funds_dark.svg":he,"../assets/menu/holdings.svg":ye,"../assets/menu/holdings_dark.svg":ke,"../assets/menu/home.svg":xe,"../assets/menu/home_dark.svg":Ie,"../assets/menu/newsIcon.svg":$e,"../assets/menu/newsIcon_dark.svg":we,"../assets/menu/orders.svg":Se,"../assets/menu/orders_dark.svg":Te,"../assets/menu/positions.svg":Me,"../assets/menu/positions_dark.svg":Re,"../assets/menu/settings.svg":De,"../assets/menu/time.svg":Pe,"../assets/menu/upload.svg":Ce,"../assets/menu/user.svg":Ee})[`../assets/menu/${t.svg}.svg`],self.location).href}},created(){let t=this.$store.state.validSteps.filter(a=>a.route==this.$router.currentRoute.value.path);t.length>0&&this.setActiveTab(t[0])}},ot={class:"h-screen !overflow-hidden"},nt={class:"flex flex-col lg:flex-row bg-[#f7f5f5]",style:{height:"calc(100vh - 56px)"}},lt={class:"border-r w-[80px] hidden lg:block lg:h-[calc(100vh-83px)] h-[calc(100vh-98px)] overflow-y-auto overflow-x-hidden"},it={role:"list",class:"space-y-2"},rt=["onClick"],ut={class:"cursor-pointer"},ct={class:"flex flex-col items-center justify-center cursor-pointer min-h-[32px] px-2"},dt=["src","alt"],vt={class:"w-full lg:h-[calc(100vh-83px)] h-[calc(100vh-60px)] overflow-y-auto"};function mt(t,a,m,_,e,r){const l=x("headerComp"),p=x("router-view"),u=x("logoutDialog");return M(),R("div",null,[v("div",ot,[I(l),v("div",nt,[v("div",lt,[v("ul",it,[(M(!0),R(Q,null,J(t.$store.state.validSteps,(o,s)=>(M(),R("li",{class:A(["md:flex-1 py-2 hover:bg-[#f9fdff] border-l-4",{" border-[#0081B8] bg-[#f9fdff]":o.active}]),key:s,onClick:f=>r.activeTab(o)},[v("div",ut,[v("div",ct,[v("span",null,[v("img",{class:A([{activeImg:o.active},"max-w-[76%] h-auto mx-auto"]),src:r.getImageSrc(o),alt:o.svg},null,10,dt)]),v("span",{class:A(["font-medium text-xs text-center",{"text-[#0081B8]":o.active,primaryColor:!o.active}])},Y(o.name),3)])])],10,rt))),128))])]),v("div",vt,[I(p)])]),I(u)])])}const ht=O(at,[["render",mt]]);export{ht as default};

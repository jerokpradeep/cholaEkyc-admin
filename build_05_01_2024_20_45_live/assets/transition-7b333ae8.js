import{e as qe,g as De,m as Z,f as ge,d as ye,H as x,S as W,o as y,u as q,P as ie,b as N,i as Ge,t as se,p as Re,l as $,y as _e,N as be,a as Ye,C as Qe,j as V,c as ze,T as Je}from"./hidden-bababa4a.js";import{h as f,f as B,g as D,i as c,j as S,k as O,J as T,F as Xe,I as ee,p as k,l as A,O as Ke,P as Ze,Q as et,n as tt,x as nt}from"./index-dc2b6c37.js";function lt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Le(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function te(){let e=[],t={addEventListener(n,l,a,r){return n.addEventListener(l,a,r),t.add(()=>n.removeEventListener(l,a,r))},requestAnimationFrame(...n){let l=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(l))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let l=setTimeout(...n);t.add(()=>clearTimeout(l))},microTask(...n){let l={current:!0};return Le(()=>{l.current&&n[0]()}),t.add(()=>{l.current=!1})},style(n,l,a){let r=n.style.getPropertyValue(l);return Object.assign(n.style,{[l]:a}),this.add(()=>{Object.assign(n.style,{[l]:r})})},group(n){let l=te();return n(l),this.add(()=>l.dispose())},add(n){return e.push(n),()=>{let l=e.indexOf(n);if(l>=0)for(let a of e.splice(l,1))a()}},dispose(){for(let n of e.splice(0))n()}};return t}var K=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(K||{});function at(){let e=f(0);return qe("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Me(e,t,n,l){De.isServer||B(a=>{e=e??window,e.addEventListener(t,n,l),a(()=>e.removeEventListener(t,n,l))})}function rt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Be(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let l=y(n);l instanceof HTMLElement&&t.add(l)}return t}var ke=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ke||{});let J=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:f(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:l}){let a=f(null);l({el:a,$el:a});let r=c(()=>Z(a)),o=f(!1);S(()=>o.value=!0),O(()=>o.value=!1),ut({ownerDocument:r},c(()=>o.value&&!!(e.features&16)));let u=it({ownerDocument:r,container:a,initialFocus:c(()=>e.initialFocus)},c(()=>o.value&&!!(e.features&2)));st({ownerDocument:r,container:a,containers:e.containers,previousActiveElement:u},c(()=>o.value&&!!(e.features&8)));let i=at();function s(h){let b=y(a);b&&(w=>w())(()=>{q(i.value,{[K.Forwards]:()=>{ie(b,N.First,{skipElements:[h.relatedTarget]})},[K.Backwards]:()=>{ie(b,N.Last,{skipElements:[h.relatedTarget]})}})})}let d=f(!1);function m(h){h.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function p(h){if(!o.value)return;let b=Be(e.containers);y(a)instanceof HTMLElement&&b.add(y(a));let w=h.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(xe(b,w)||(d.value?ie(y(a),q(i.value,{[K.Forwards]:()=>N.Next,[K.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:h.target}):h.target instanceof HTMLElement&&W(h.target)))}return()=>{let h={},b={ref:a,onKeydown:m,onFocusout:p},{features:w,initialFocus:L,containers:Y,...F}=e;return T(Xe,[!!(w&4)&&T(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ye.Focusable}),x({ourProps:b,theirProps:{...t,...F},slot:h,attrs:t,slots:n,name:"FocusTrap"}),!!(w&4)&&T(ge,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:ye.Focusable})])}}}),{features:ke}),U=[];rt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&U[0]!==t.target&&(U.unshift(t.target),U=U.filter(n=>n!=null&&n.isConnected),U.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function ot(e){let t=f(U.slice());return ee([e],([n],[l])=>{l===!0&&n===!1?Le(()=>{t.value.splice(0)}):l===!1&&n===!0&&(t.value=U.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(l=>l!=null&&l.isConnected))!=null?n:null}}function ut({ownerDocument:e},t){let n=ot(t);S(()=>{B(()=>{var l,a;t.value||((l=e.value)==null?void 0:l.activeElement)===((a=e.value)==null?void 0:a.body)&&W(n())},{flush:"post"})}),O(()=>{t.value&&W(n())})}function it({ownerDocument:e,container:t,initialFocus:n},l){let a=f(null),r=f(!1);return S(()=>r.value=!0),O(()=>r.value=!1),S(()=>{ee([t,n,l],(o,u)=>{if(o.every((s,d)=>(u==null?void 0:u[d])===s)||!l.value)return;let i=y(t);i&&Le(()=>{var s,d;if(!r.value)return;let m=y(n),p=(s=e.value)==null?void 0:s.activeElement;if(m){if(m===p){a.value=p;return}}else if(i.contains(p)){a.value=p;return}m?W(m):ie(i,N.First|N.NoScroll)===Ge.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),a}function st({ownerDocument:e,container:t,containers:n,previousActiveElement:l},a){var r;Me((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!a.value)return;let u=Be(n);y(t)instanceof HTMLElement&&u.add(y(t));let i=l.value;if(!i)return;let s=o.target;s&&s instanceof HTMLElement?xe(u,s)?(l.value=s,W(s)):(o.preventDefault(),o.stopPropagation(),W(i)):W(l.value)},!0)}function xe(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let me=new Map,X=new Map;function Ce(e,t=f(!0)){B(n=>{var l;if(!t.value)return;let a=y(e);if(!a)return;n(function(){var o;if(!a)return;let u=(o=X.get(a))!=null?o:1;if(u===1?X.delete(a):X.set(a,u-1),u!==1)return;let i=me.get(a);i&&(i["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",i["aria-hidden"]),a.inert=i.inert,me.delete(a))});let r=(l=X.get(a))!=null?l:0;X.set(a,r+1),r===0&&(me.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let He=Symbol("ForcePortalRootContext");function dt(){return A(He,!1)}let Oe=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return k(He,e.force),()=>{let{force:l,...a}=e;return x({theirProps:a,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function ct(e){let t=Z(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let l=t.createElement("div");return l.setAttribute("id","headlessui-portal-root"),t.body.appendChild(l)}let ft=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let l=f(null),a=c(()=>Z(l)),r=dt(),o=A(je,null),u=f(r===!0||o==null?ct(l.value):o.resolveTarget());B(()=>{r||o!=null&&(u.value=o.resolveTarget())});let i=A(we,null);return S(()=>{let s=y(l);s&&i&&O(i.register(s))}),O(()=>{var s,d;let m=(s=a.value)==null?void 0:s.getElementById("headlessui-portal-root");m&&u.value===m&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return T(Ke,{to:u.value},x({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),we=Symbol("PortalParentContext");function vt(){let e=A(we,null),t=f([]);function n(r){return t.value.push(r),e&&e.register(r),()=>l(r)}function l(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let a={register:n,unregister:l,portals:t};return[t,D({name:"PortalWrapper",setup(r,{slots:o}){return k(we,a),()=>{var u;return(u=o.default)==null?void 0:u.call(o)}}})]}let je=Symbol("PortalGroupContext"),pt=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let l=Ze({resolveTarget(){return e.target}});return k(je,l),()=>{let{target:a,...r}=e;return x({theirProps:r,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Ne=Symbol("StackContext");var Ee=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Ee||{});function mt(){return A(Ne,()=>{})}function ht({type:e,enabled:t,element:n,onUpdate:l}){let a=mt();function r(...o){l==null||l(...o),a(...o)}S(()=>{ee(t,(o,u)=>{o?r(0,e,n):u===!0&&r(1,e,n)},{immediate:!0,flush:"sync"})}),O(()=>{t.value&&r(1,e,n)}),k(Ne,r)}let gt=Symbol("DescriptionContext");function yt({slot:e=f({}),name:t="Description",props:n={}}={}){let l=f([]);function a(r){return l.value.push(r),()=>{let o=l.value.indexOf(r);o!==-1&&l.value.splice(o,1)}}return k(gt,{register:a,slot:e,name:t,props:n}),c(()=>l.value.length>0?l.value.join(" "):void 0)}function bt(e){let t=et(e.getSnapshot());return O(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function wt(e,t){let n=e(),l=new Set;return{getSnapshot(){return n},subscribe(a){return l.add(a),()=>l.delete(a)},dispatch(a,...r){let o=t[a].call(n,...r);o&&(n=o,l.forEach(u=>u()))}}}function Et(){let e;return{before({doc:t}){var n;let l=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-l.clientWidth},after({doc:t,d:n}){let l=t.documentElement,a=l.clientWidth-l.offsetWidth,r=e-a;n.style(l,"paddingRight",`${r}px`)}}}function Tt(){if(!lt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:l}){function a(o){return l.containers.flatMap(u=>u()).some(u=>u.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=te();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let r=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!a(s)&&(r=s)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!a(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null)})}}}function St(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Lt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let I=wt(()=>new Map,{PUSH(e,t){var n;let l=(n=this.get(e))!=null?n:{doc:e,count:0,d:te(),meta:new Set};return l.count++,l.meta.add(t),this.set(e,l),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let l={doc:e,d:t,meta:Lt(n)},a=[Tt(),Et(),St()];a.forEach(({before:r})=>r==null?void 0:r(l)),a.forEach(({after:r})=>r==null?void 0:r(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});I.subscribe(()=>{let e=I.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let l=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!l||!a&&l)&&I.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&I.dispatch("TEARDOWN",n)}});function Ft(e,t,n){let l=bt(I),a=c(()=>{let r=e.value?l.value.get(e.value):void 0;return r?r.count>0:!1});return ee([e,t],([r,o],[u],i)=>{if(!r||!o)return;I.dispatch("PUSH",r,n);let s=!1;i(()=>{s||(I.dispatch("POP",u??r,n),s=!0)})},{immediate:!0}),a}function $t({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let l=f(null),a=Z(l);function r(){var o;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(o=a==null?void 0:a.querySelectorAll("html > *, body > *"))!=null?o:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(y(l))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:r,contains(o){return r().some(u=>u.contains(o))},mainTreeNodeRef:l,MainTreeNode(){return n!=null?null:T(ge,{features:ye.Hidden,ref:l})}}}var Pt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pt||{});let Te=Symbol("DialogContext");function Fe(e){let t=A(Te,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Fe),n}return t}let oe="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Nt=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:oe},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${se()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){var r;let o=f(!1);S(()=>{o.value=!0});let u=f(0),i=Re(),s=c(()=>e.open===oe&&i!==null?(i.value&$.Open)===$.Open:e.open),d=f(null),m=c(()=>Z(d));if(a({el:d,$el:d}),!(e.open!==oe||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===oe?void 0:e.open}`);let p=c(()=>o.value&&s.value?0:1),h=c(()=>p.value===0),b=c(()=>u.value>1),w=A(Te,null)!==null,[L,Y]=vt(),{resolveContainers:F,mainTreeNodeRef:H,MainTreeNode:ne}=$t({portals:L,defaultContainers:[c(()=>{var v;return(v=E.panelRef.value)!=null?v:d.value})]}),le=c(()=>b.value?"parent":"leaf"),Q=c(()=>i!==null?(i.value&$.Closing)===$.Closing:!1),ce=c(()=>w||Q.value?!1:h.value),ae=c(()=>{var v,g,P;return(P=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(C=>C.id==="headlessui-portal-root"?!1:C.contains(y(H))&&C instanceof HTMLElement))!=null?P:null});Ce(ae,ce);let fe=c(()=>b.value?!0:h.value),ve=c(()=>{var v,g,P;return(P=Array.from((g=(v=m.value)==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(C=>C.contains(y(H))&&C instanceof HTMLElement))!=null?P:null});Ce(ve,fe),ht({type:"Dialog",enabled:c(()=>p.value===0),element:d,onUpdate:(v,g)=>{if(g==="Dialog")return q(v,{[Ee.Add]:()=>u.value+=1,[Ee.Remove]:()=>u.value-=1})}});let pe=yt({name:"DialogDescription",slot:c(()=>({open:s.value}))}),G=f(null),E={titleId:G,panelRef:f(null),dialogState:p,setTitleId(v){G.value!==v&&(G.value=v)},close(){t("close",!1)}};k(Te,E);let z=c(()=>!(!h.value||b.value));_e(F,(v,g)=>{E.close(),tt(()=>g==null?void 0:g.focus())},z);let R=c(()=>!(b.value||p.value!==0));Me((r=m.value)==null?void 0:r.defaultView,"keydown",v=>{R.value&&(v.defaultPrevented||v.key===Ye.Escape&&(v.preventDefault(),v.stopPropagation(),E.close()))});let _=c(()=>!(Q.value||p.value!==0||w));return Ft(m,_,v=>{var g;return{containers:[...(g=v.containers)!=null?g:[],F]}}),B(v=>{if(p.value!==0)return;let g=y(d);if(!g)return;let P=new ResizeObserver(C=>{for(let re of C){let M=re.target.getBoundingClientRect();M.x===0&&M.y===0&&M.width===0&&M.height===0&&E.close()}});P.observe(g),v(()=>P.disconnect())}),()=>{let{id:v,open:g,initialFocus:P,...C}=e,re={...n,ref:d,id:v,role:"dialog","aria-modal":p.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":pe.value},M={open:p.value===0};return T(Oe,{force:!0},()=>[T(ft,()=>T(pt,{target:d.value},()=>T(Oe,{force:!1},()=>T(J,{initialFocus:P,containers:F,features:h.value?q(le.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>T(Y,{},()=>x({ourProps:re,theirProps:{...C,...n},slot:M,attrs:n,slots:l,visible:p.value===0,features:be.RenderStrategy|be.Static,name:"Dialog"})))))),T(ne)])}}}),Ut=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${se()}`}},setup(e,{attrs:t,slots:n,expose:l}){let a=Fe("DialogPanel");l({el:a.panelRef,$el:a.panelRef});function r(o){o.stopPropagation()}return()=>{let{id:o,...u}=e,i={id:o,ref:a.panelRef,onClick:r};return x({ourProps:i,theirProps:u,slot:{open:a.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),Vt=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${se()}`}},setup(e,{attrs:t,slots:n}){let l=Fe("DialogTitle");return S(()=>{l.setTitleId(e.id),O(()=>l.setTitleId(null))}),()=>{let{id:a,...r}=e;return x({ourProps:{id:a},theirProps:r,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function Ct(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function he(e,...t){e&&t.length>0&&e.classList.add(...t)}function ue(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Se=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Se||{});function Ot(e,t){let n=te();if(!e)return n.dispose;let{transitionDuration:l,transitionDelay:a}=getComputedStyle(e),[r,o]=[l,a].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return i});return r!==0?n.setTimeout(()=>t("finished"),r+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Ae(e,t,n,l,a,r){let o=te(),u=r!==void 0?Ct(r):()=>{};return ue(e,...a),he(e,...t,...n),o.nextFrame(()=>{ue(e,...n),he(e,...l),o.add(Ot(e,i=>(ue(e,...l,...t),he(e,...a),u(i))))}),o.add(()=>ue(e,...t,...n,...l,...a)),o.add(()=>u("cancelled")),o.dispose}function j(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let $e=Symbol("TransitionContext");var At=(e=>(e.Visible="visible",e.Hidden="hidden",e))(At||{});function Dt(){return A($e,null)!==null}function Rt(){let e=A($e,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Mt(){let e=A(Pe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Pe=Symbol("NestingContext");function de(e){return"children"in e?de(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function Ue(e){let t=f([]),n=f(!1);S(()=>n.value=!0),O(()=>n.value=!1);function l(r,o=V.Hidden){let u=t.value.findIndex(({id:i})=>i===r);u!==-1&&(q(o,{[V.Unmount](){t.value.splice(u,1)},[V.Hidden](){t.value[u].state="hidden"}}),!de(t)&&n.value&&(e==null||e()))}function a(r){let o=t.value.find(({id:u})=>u===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>l(r,V.Unmount)}return{children:t,register:a,unregister:l}}let Ve=be.RenderStrategy,Bt=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l,expose:a}){let r=f(0);function o(){r.value|=$.Opening,t("beforeEnter")}function u(){r.value&=~$.Opening,t("afterEnter")}function i(){r.value|=$.Closing,t("beforeLeave")}function s(){r.value&=~$.Closing,t("afterLeave")}if(!Dt()&&Qe())return()=>T(xt,{...e,onBeforeEnter:o,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:s},l);let d=f(null),m=c(()=>e.unmount?V.Unmount:V.Hidden);a({el:d,$el:d});let{show:p,appear:h}=Rt(),{register:b,unregister:w}=Mt(),L=f(p.value?"visible":"hidden"),Y={value:!0},F=se(),H={value:!1},ne=Ue(()=>{!H.value&&L.value!=="hidden"&&(L.value="hidden",w(F),s())});S(()=>{let E=b(F);O(E)}),B(()=>{if(m.value===V.Hidden&&F){if(p.value&&L.value!=="visible"){L.value="visible";return}q(L.value,{hidden:()=>w(F),visible:()=>b(F)})}});let le=j(e.enter),Q=j(e.enterFrom),ce=j(e.enterTo),ae=j(e.entered),fe=j(e.leave),ve=j(e.leaveFrom),pe=j(e.leaveTo);S(()=>{B(()=>{if(L.value==="visible"){let E=y(d);if(E instanceof Comment&&E.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function G(E){let z=Y.value&&!h.value,R=y(d);!R||!(R instanceof HTMLElement)||z||(H.value=!0,p.value&&o(),p.value||i(),E(p.value?Ae(R,le,Q,ce,ae,_=>{H.value=!1,_===Se.Finished&&u()}):Ae(R,fe,ve,pe,ae,_=>{H.value=!1,_===Se.Finished&&(de(ne)||(L.value="hidden",w(F),s()))})))}return S(()=>{ee([p],(E,z,R)=>{G(R),Y.value=!1},{immediate:!0})}),k(Pe,ne),ze(c(()=>q(L.value,{visible:$.Open,hidden:$.Closed})|r.value)),()=>{let{appear:E,show:z,enter:R,enterFrom:_,enterTo:v,entered:g,leave:P,leaveFrom:C,leaveTo:re,...M}=e,Ie={ref:d},We={...M,...h.value&&p.value&&De.isServer?{class:nt([n.class,M.class,...le,...Q])}:{}};return x({theirProps:We,ourProps:Ie,slot:{},slots:l,attrs:n,features:Ve,visible:L.value==="visible",name:"TransitionChild"})}}}),kt=Bt,xt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:l}){let a=Re(),r=c(()=>e.show===null&&a!==null?(a.value&$.Open)===$.Open:e.show);B(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=f(r.value?"visible":"hidden"),u=Ue(()=>{o.value="hidden"}),i=f(!0),s={show:r,appear:c(()=>e.appear||!i.value)};return S(()=>{B(()=>{i.value=!1,r.value?o.value="visible":de(u)||(o.value="hidden")})}),k(Pe,u),k($e,s),()=>{let d=Je(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),m={unmount:e.unmount};return x({ourProps:{...m,as:"template"},theirProps:{},slot:{},slots:{...l,default:()=>[T(kt,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...m,...d},l.default)]},attrs:{},features:Ve,visible:o.value==="visible",name:"Transition"})}}});export{Ut as G,xt as S,Nt as U,Vt as V,Bt as h};

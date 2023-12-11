import{O as k,I as U,F as R,l as _,p as B,h as b,j as K,f as F,n as W,i as G,g as V}from"./index-12e12485.js";function x(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,x),r}var q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(q||{}),X=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(X||{});function Y({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var l;let u=P(r,n),i=Object.assign(o,{props:u});if(e||t&2&&u.static)return y(i);if(t&1){let f=(l=u.unmount)==null||l?0:1;return x(f,{0(){return null},1(){return y({...o,props:{...u,hidden:!0,style:{display:"none"}}})}})}return y(i)}function y({props:e,attrs:t,slots:n,slot:r,name:o}){var l,u;let{as:i,...f}=z(e,["unmount","static"]),a=(l=n.default)==null?void 0:l.call(n,r),s={};if(r){let v=!1,m=[];for(let[p,c]of Object.entries(r))typeof c=="boolean"&&(v=!0),c===!0&&m.push(p);v&&(s["data-headlessui-state"]=m.join(" "))}if(i==="template"){if(a=j(a??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[v,...m]=a??[];if(!J(v)||m.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(d=>d.trim()).filter((d,w,H)=>H.indexOf(d)===w).sort((d,w)=>d.localeCompare(w)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let p=P((u=v.props)!=null?u:{},f),c=k(v,p);for(let d in p)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=p[d]);return c}return Array.isArray(a)&&a.length===1?a[0]:a}return U(i,Object.assign({},f,s),{default:()=>a})}function j(e){return e.flatMap(t=>t.type===R?j(t.children):[t])}function P(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...l){let u=n[r];for(let i of u){if(o instanceof Event&&o.defaultPrevented)return;i(o,...l)}}});return t}function Ee(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function z(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function J(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Q=0;function Z(){return++Q}function Fe(){return Z()}var ee=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(ee||{});function te(e){throw new Error("Unexpected object: "+e)}var ne=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(ne||{});function xe(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=r??-1,l=(()=>{switch(e.focus){case 0:return n.findIndex(u=>!t.resolveDisabled(u));case 1:{let u=n.slice().reverse().findIndex((i,f,a)=>o!==-1&&a.length-f-1>=o?!1:!t.resolveDisabled(i));return u===-1?u:n.length-1-u}case 2:return n.findIndex((u,i)=>i<=o?!1:!t.resolveDisabled(u));case 3:{let u=n.slice().reverse().findIndex(i=>!t.resolveDisabled(i));return u===-1?u:n.length-1-u}case 4:return n.findIndex(u=>t.resolveId(u)===e.id);case 5:return null;default:te(e)}})();return l===-1?r:l}function h(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let I=Symbol("Context");var re=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(re||{});function Oe(){return le()!==null}function le(){return _(I,null)}function Ne(e){B(I,e)}function N(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Se(e,t){let n=b(N(e.value.type,e.value.as));return K(()=>{n.value=N(e.value.type,e.value.as)}),F(()=>{var r;n.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((r=h(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var oe=Object.defineProperty,ue=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(ue(e,typeof t!="symbol"?t+"":t,n),n);class ie{constructor(){S(this,"current",this.detect()),S(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let O=new ie;function L(e){if(O.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let E=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ae=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ae||{}),se=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(se||{}),ce=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ce||{});function T(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(E)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var M=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(M||{});function C(e,t=0){var n;return e===((n=L(e))==null?void 0:n.body)?!1:x(t,{0(){return e.matches(E)},1(){let r=e;for(;r!==null;){if(r.matches(E))return!0;r=r.parentElement}return!1}})}function Ae(e){let t=L(e);W(()=>{t&&!C(t.activeElement,0)&&fe(e)})}var de=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(de||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function fe(e){e==null||e.focus({preventScroll:!0})}let pe=["textarea","input"].join(",");function ve(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,pe))!=null?n:!1}function me(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let u=o.compareDocumentPosition(l);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function De(e,t){return he(T(),t,{relativeTo:e})}function he(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l;let u=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,i=Array.isArray(e)?n?me(e):e:T(e);o.length>0&&i.length>1&&(i=i.filter(c=>!o.includes(c))),r=r??u.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},v=0,m=i.length,p;do{if(v>=m||v+m<=0)return 0;let c=a+v;if(t&16)c=(c+m)%m;else{if(c<0)return 3;if(c>=m)return 1}p=i[c],p==null||p.focus(s),v+=f}while(p!==u.activeElement);return t&6&&ve(p)&&p.select(),2}function g(e,t,n){O.isServer||F(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function be(e,t,n){O.isServer||F(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function $e(e,t,n=G(()=>!0)){function r(l,u){if(!n.value||l.defaultPrevented)return;let i=u(l);if(i===null||!i.getRootNode().contains(i))return;let f=function a(s){return typeof s=="function"?a(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let a of f){if(a===null)continue;let s=a instanceof HTMLElement?a:h(a);if(s!=null&&s.contains(i)||l.composed&&l.composedPath().includes(s))return}return!C(i,M.Loose)&&i.tabIndex!==-1&&l.preventDefault(),t(l,i)}let o=b(null);g("pointerdown",l=>{var u,i;n.value&&(o.value=((i=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:i[0])||l.target)},!0),g("mousedown",l=>{var u,i;n.value&&(o.value=((i=(u=l.composedPath)==null?void 0:u.call(l))==null?void 0:i[0])||l.target)},!0),g("click",l=>{o.value&&(r(l,()=>o.value),o.value=null)},!0),g("touchend",l=>r(l,()=>l.target instanceof HTMLElement?l.target:null),!0),be("blur",l=>r(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ge=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ge||{});let je=V({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...o}=e,l={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return Y({ourProps:l,theirProps:o,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function A(e){return[e.screenX,e.screenY]}function Pe(){let e=b([-1,-1]);return{wasMoved(t){let n=A(t);return e.value[0]===n[0]&&e.value[1]===n[1]?!1:(e.value=n,!0)},update(t){e.value=A(t)}}}let D=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function $(e){var t,n;let r=(t=e.innerText)!=null?t:"",o=e.cloneNode(!0);if(!(o instanceof HTMLElement))return r;let l=!1;for(let i of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),l=!0;let u=l?(n=o.innerText)!=null?n:"":r;return D.test(u)&&(u=u.replace(D,"")),u}function we(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(o=>{let l=document.getElementById(o);if(l){let u=l.getAttribute("aria-label");return typeof u=="string"?u.trim():$(l).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return $(e).trim()}function Ie(e){let t=b(""),n=b("");return()=>{let r=h(e);if(!r)return"";let o=r.innerText;if(t.value===o)return n.value;let l=we(r).trim().toLowerCase();return t.value=o,n.value=l,l}}export{Oe as C,Y as H,Ee as K,q as N,me as O,he as P,fe as S,se as T,Ae as _,Ie as a,Se as b,Ne as c,Pe as d,ne as e,ee as f,ae as g,M as h,be as i,O as j,je as k,re as l,L as m,ge as n,h as o,le as p,X as q,z as r,Fe as t,x as u,De as v,C as w,xe as x,$e as y};

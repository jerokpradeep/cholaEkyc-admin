import{o}from"./hidden-56c6538f.js";import{h as s,j as m,f as p}from"./index-2bfe81f7.js";function D(e){throw new Error("Unexpected object: "+e)}var F=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(F||{});function I(e,r){let t=r.resolveItems();if(t.length<=0)return null;let l=r.resolveActiveIndex(),u=l??-1,i=(()=>{switch(e.focus){case 0:return t.findIndex(n=>!r.resolveDisabled(n));case 1:{let n=t.slice().reverse().findIndex((a,b,g)=>u!==-1&&g.length-b-1>=u?!1:!r.resolveDisabled(a));return n===-1?n:t.length-1-n}case 2:return t.findIndex((n,a)=>a<=u?!1:!r.resolveDisabled(n));case 3:{let n=t.slice().reverse().findIndex(a=>!r.resolveDisabled(a));return n===-1?n:t.length-1-n}case 4:return t.findIndex(n=>r.resolveId(n)===e.id);case 5:return null;default:D(e)}})();return i===-1?l:i}function f(e,r){if(e)return e;let t=r??"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function w(e,r){let t=s(f(e.value.type,e.value.as));return m(()=>{t.value=f(e.value.type,e.value.as)}),p(()=>{var l;t.value||o(r)&&o(r)instanceof HTMLButtonElement&&!((l=o(r))!=null&&l.hasAttribute("type"))&&(t.value="button")}),t}function c(e){return[e.screenX,e.screenY]}function E(){let e=s([-1,-1]);return{wasMoved(r){let t=c(r);return e.value[0]===t[0]&&e.value[1]===t[1]?!1:(e.value=t,!0)},update(r){e.value=c(r)}}}let v=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function d(e){var r,t;let l=(r=e.innerText)!=null?r:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return l;let i=!1;for(let a of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),i=!0;let n=i?(t=u.innerText)!=null?t:"":l;return v.test(n)&&(n=n.replace(v,"")),n}function h(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let t=e.getAttribute("aria-labelledby");if(t){let l=t.split(" ").map(u=>{let i=document.getElementById(u);if(i){let n=i.getAttribute("aria-label");return typeof n=="string"?n.trim():d(i).trim()}return null}).filter(Boolean);if(l.length>0)return l.join(", ")}return d(e).trim()}function A(e){let r=s(""),t=s("");return()=>{let l=o(e);if(!l)return"";let u=l.innerText;if(r.value===u)return t.value;let i=h(l).trim().toLowerCase();return r.value=u,t.value=i,i}}export{F as a,w as b,A as p,E as u,I as x};

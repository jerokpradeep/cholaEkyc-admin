import{x as W,d as h,f as $,y as J,w as X,h as Y,o as m,c as Z,k as _,K as ee,n as te,H as V,q as ae,t as M,b as le,p as oe,N as F,a as ne,u as ie,O as ue,e as f,l as C}from"./use-text-value-cd36cdcb.js";import{h as P,i as b,g as A,p as re,j as E,H as z,G as U,F as se,k as de,f as ve,l as pe,L as k,n as I}from"./index-0de302f3.js";function H(t={},u=null,n=[]){for(let[p,e]of Object.entries(t))q(n,K(u,p),e);return n}function K(t,u){return t?t+"["+u+"]":u}function q(t,u,n){if(Array.isArray(n))for(let[p,e]of n.entries())q(t,K(u,p.toString()),e);else n instanceof Date?t.push([u,n.toISOString()]):typeof n=="boolean"?t.push([u,n?"1":"0"]):typeof n=="string"?t.push([u,n]):typeof n=="number"?t.push([u,`${n}`]):n==null?t.push([u,""]):H(n,u,t)}function ce(t,u,n){let p=P(n==null?void 0:n.value),e=b(()=>t.value!==void 0);return[b(()=>e.value?t.value:p.value),function(v){return e.value||(p.value=v),u==null?void 0:u(v)}]}function fe(t,u){return t===u}var be=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(be||{}),me=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(me||{}),xe=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(xe||{});function ge(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let Q=Symbol("ListboxContext");function j(t){let u=pe(Q,null);if(u===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return u}let he=A({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>fe},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:u,attrs:n,emit:p}){let e=P(1),v=P(null),x=P(null),g=P(null),c=P([]),a=P(""),l=P(null),S=P(1);function L(o=i=>i){let i=l.value!==null?c.value[l.value]:null,r=ue(o(c.value.slice()),y=>m(y.dataRef.domRef)),d=i?r.indexOf(i):null;return d===-1&&(d=null),{options:r,activeOptionIndex:d}}let R=b(()=>t.multiple?1:0),[w,D]=ce(b(()=>t.modelValue),o=>p("update:modelValue",o),b(()=>t.defaultValue)),T=b(()=>w.value===void 0?$(R.value,{1:[],0:void 0}):w.value),s={listboxState:e,value:T,mode:R,compare(o,i){if(typeof t.by=="string"){let r=t.by;return(o==null?void 0:o[r])===(i==null?void 0:i[r])}return t.by(o,i)},orientation:b(()=>t.horizontal?"horizontal":"vertical"),labelRef:v,buttonRef:x,optionsRef:g,disabled:b(()=>t.disabled),options:c,searchQuery:a,activeOptionIndex:l,activationTrigger:S,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,i,r){if(t.disabled||e.value===1)return;let d=L(),y=W(o===h.Specific?{focus:h.Specific,id:i}:{focus:o},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:B=>B.id,resolveDisabled:B=>B.dataRef.disabled});a.value="",l.value=y,S.value=r??1,c.value=d.options},search(o){if(t.disabled||e.value===1)return;let i=a.value!==""?0:1;a.value+=o.toLowerCase();let r=(l.value!==null?c.value.slice(l.value+i).concat(c.value.slice(0,l.value+i)):c.value).find(y=>y.dataRef.textValue.startsWith(a.value)&&!y.dataRef.disabled),d=r?c.value.indexOf(r):-1;d===-1||d===l.value||(l.value=d,S.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,i){let r=L(d=>[...d,{id:o,dataRef:i}]);c.value=r.options,l.value=r.activeOptionIndex},unregisterOption(o){let i=L(r=>{let d=r.findIndex(y=>y.id===o);return d!==-1&&r.splice(d,1),r});c.value=i.options,l.value=i.activeOptionIndex,S.value=1},theirOnChange(o){t.disabled||D(o)},select(o){t.disabled||D($(R.value,{0:()=>o,1:()=>{let i=k(s.value.value).slice(),r=k(o),d=i.findIndex(y=>s.compare(r,k(y)));return d===-1?i.push(r):i.splice(d,1),i}}))}};J([x,g],(o,i)=>{var r;s.closeListbox(),X(i,Y.Loose)||(o.preventDefault(),(r=m(x))==null||r.focus())},b(()=>e.value===0)),re(Q,s),Z(b(()=>$(e.value,{0:C.Open,1:C.Closed})));let O=b(()=>{var o;return(o=m(x))==null?void 0:o.closest("form")});return E(()=>{z([O],()=>{if(!O.value||t.defaultValue===void 0)return;function o(){s.theirOnChange(t.defaultValue)}return O.value.addEventListener("reset",o),()=>{var i;(i=O.value)==null||i.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:i,disabled:r,form:d,...y}=t,B={open:e.value===0,disabled:r,value:T.value};return U(se,[...o!=null&&T.value!=null?H({[o]:T.value}).map(([N,G])=>U(_,ee({features:te.Hidden,key:N,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:N,value:G}))):[],V({ourProps:{},theirProps:{...n,...ae(y,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:B,slots:u,attrs:n,name:"Listbox"})])}}}),Se=A({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${M()}`}},setup(t,{attrs:u,slots:n}){let p=j("ListboxLabel");function e(){var v;(v=m(p.buttonRef))==null||v.focus({preventScroll:!0})}return()=>{let v={open:p.listboxState.value===0,disabled:p.disabled.value},{id:x,...g}=t,c={id:x,ref:p.labelRef,onClick:e};return V({ourProps:c,theirProps:g,slot:v,attrs:u,slots:n,name:"ListboxLabel"})}}}),Le=A({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${M()}`}},setup(t,{attrs:u,slots:n,expose:p}){let e=j("ListboxButton");p({el:e.buttonRef,$el:e.buttonRef});function v(a){switch(a.key){case f.Space:case f.Enter:case f.ArrowDown:a.preventDefault(),e.openListbox(),I(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(h.First)});break;case f.ArrowUp:a.preventDefault(),e.openListbox(),I(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(h.Last)});break}}function x(a){switch(a.key){case f.Space:a.preventDefault();break}}function g(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),I(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),ge(()=>{var l;return(l=m(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let c=le(b(()=>({as:t.as,type:u.type})),e.buttonRef);return()=>{var a,l;let S={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:L,...R}=t,w={ref:e.buttonRef,id:L,type:c.value,"aria-haspopup":"listbox","aria-controls":(a=m(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=m(e.labelRef))==null?void 0:l.id,L].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:v,onKeyup:x,onClick:g};return V({ourProps:w,theirProps:R,slot:S,attrs:u,slots:n,name:"ListboxButton"})}}}),Re=A({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${M()}`}},setup(t,{attrs:u,slots:n,expose:p}){let e=j("ListboxOptions"),v=P(null);p({el:e.optionsRef,$el:e.optionsRef});function x(a){switch(v.value&&clearTimeout(v.value),a.key){case f.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case f.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),I(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case $(e.orientation.value,{vertical:f.ArrowDown,horizontal:f.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(h.Next);case $(e.orientation.value,{vertical:f.ArrowUp,horizontal:f.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(h.Previous);case f.Home:case f.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(h.First);case f.End:case f.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(h.Last);case f.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),I(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case f.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),v.value=setTimeout(()=>e.clearSearch(),350));break}}let g=oe(),c=b(()=>g!==null?(g.value&C.Open)===C.Open:e.listboxState.value===0);return()=>{var a,l,S,L;let R={open:e.listboxState.value===0},{id:w,...D}=t,T={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(L=(l=m(e.labelRef))==null?void 0:l.id)!=null?L:(S=m(e.buttonRef))==null?void 0:S.id,"aria-orientation":e.orientation.value,id:w,onKeydown:x,role:"listbox",tabIndex:0,ref:e.optionsRef};return V({ourProps:T,theirProps:D,slot:R,attrs:u,slots:n,features:F.RenderStrategy|F.Static,visible:c.value,name:"ListboxOptions"})}}}),Pe=A({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${M()}`}},setup(t,{slots:u,attrs:n,expose:p}){let e=j("ListboxOption"),v=P(null);p({el:v,$el:v});let x=b(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),g=b(()=>$(e.mode.value,{0:()=>e.compare(k(e.value.value),k(t.value)),1:()=>k(e.value.value).some(s=>e.compare(k(s),k(t.value)))})),c=b(()=>$(e.mode.value,{1:()=>{var s;let O=k(e.value.value);return((s=e.options.value.find(o=>O.some(i=>e.compare(k(i),k(o.dataRef.value)))))==null?void 0:s.id)===t.id},0:()=>g.value})),a=ne(v),l=b(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:v}));E(()=>e.registerOption(t.id,l)),de(()=>e.unregisterOption(t.id)),E(()=>{z([e.listboxState,g],()=>{e.listboxState.value===0&&g.value&&$(e.mode.value,{1:()=>{c.value&&e.goToOption(h.Specific,t.id)},0:()=>{e.goToOption(h.Specific,t.id)}})},{immediate:!0})}),ve(()=>{e.listboxState.value===0&&x.value&&e.activationTrigger.value!==0&&I(()=>{var s,O;return(O=(s=m(v))==null?void 0:s.scrollIntoView)==null?void 0:O.call(s,{block:"nearest"})})});function S(s){if(t.disabled)return s.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),I(()=>{var O;return(O=m(e.buttonRef))==null?void 0:O.focus({preventScroll:!0})}))}function L(){if(t.disabled)return e.goToOption(h.Nothing);e.goToOption(h.Specific,t.id)}let R=ie();function w(s){R.update(s)}function D(s){R.wasMoved(s)&&(t.disabled||x.value||e.goToOption(h.Specific,t.id,0))}function T(s){R.wasMoved(s)&&(t.disabled||x.value&&e.goToOption(h.Nothing))}return()=>{let{disabled:s}=t,O={active:x.value,selected:g.value,disabled:s},{id:o,value:i,disabled:r,...d}=t,y={id:o,ref:v,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:S,onFocus:L,onPointerenter:w,onMouseenter:w,onPointermove:D,onMousemove:D,onPointerleave:T,onMouseleave:T};return V({ourProps:y,theirProps:d,slot:O,attrs:n,slots:u,name:"ListboxOption"})}}});export{he as B,Re as H,Se as K,Le as N,Pe as U};

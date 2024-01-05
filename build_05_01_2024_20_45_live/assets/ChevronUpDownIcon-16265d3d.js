import{u as $,y as X,w as Y,h as Z,o as m,c as ee,l as M,f as te,K as ae,d as le,H as V,T as oe,t as j,p as ne,N as z,O as ie,a as f}from"./hidden-bababa4a.js";import{x as ue,a as y,b as re,p as se,u as de}from"./use-text-value-4bbfec16.js";import{h as R,i as b,g as A,p as ve,j as E,I as K,J as F,F as pe,k as ce,f as fe,l as be,K as k,n as D,o as U,c as H,a as _}from"./index-dc2b6c37.js";function q(t={},n=null,i=[]){for(let[p,e]of Object.entries(t))J(i,Q(n,p),e);return i}function Q(t,n){return t?t+"["+n+"]":n}function J(t,n,i){if(Array.isArray(i))for(let[p,e]of i.entries())J(t,Q(n,p.toString()),e);else i instanceof Date?t.push([n,i.toISOString()]):typeof i=="boolean"?t.push([n,i?"1":"0"]):typeof i=="string"?t.push([n,i]):typeof i=="number"?t.push([n,`${i}`]):i==null?t.push([n,""]):q(i,n,t)}function me(t,n,i){let p=R(i==null?void 0:i.value),e=b(()=>t.value!==void 0);return[b(()=>e.value?t.value:p.value),function(v){return e.value||(p.value=v),n==null?void 0:n(v)}]}function xe(t,n){return t===n}var ge=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(ge||{}),he=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(he||{}),Oe=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Oe||{});function ye(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let W=Symbol("ListboxContext");function C(t){let n=be(W,null);if(n===null){let i=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,C),i}return n}let Re=A({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>xe},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:n,attrs:i,emit:p}){let e=R(1),v=R(null),x=R(null),g=R(null),c=R([]),a=R(""),l=R(null),S=R(1);function L(o=u=>u){let u=l.value!==null?c.value[l.value]:null,r=ie(o(c.value.slice()),O=>m(O.dataRef.domRef)),d=u?r.indexOf(u):null;return d===-1&&(d=null),{options:r,activeOptionIndex:d}}let w=b(()=>t.multiple?1:0),[P,B]=me(b(()=>t.modelValue),o=>p("update:modelValue",o),b(()=>t.defaultValue)),T=b(()=>P.value===void 0?$(w.value,{1:[],0:void 0}):P.value),s={listboxState:e,value:T,mode:w,compare(o,u){if(typeof t.by=="string"){let r=t.by;return(o==null?void 0:o[r])===(u==null?void 0:u[r])}return t.by(o,u)},orientation:b(()=>t.horizontal?"horizontal":"vertical"),labelRef:v,buttonRef:x,optionsRef:g,disabled:b(()=>t.disabled),options:c,searchQuery:a,activeOptionIndex:l,activationTrigger:S,closeListbox(){t.disabled||e.value!==1&&(e.value=1,l.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(o,u,r){if(t.disabled||e.value===1)return;let d=L(),O=ue(o===y.Specific?{focus:y.Specific,id:u}:{focus:o},{resolveItems:()=>d.options,resolveActiveIndex:()=>d.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",l.value=O,S.value=r??1,c.value=d.options},search(o){if(t.disabled||e.value===1)return;let u=a.value!==""?0:1;a.value+=o.toLowerCase();let r=(l.value!==null?c.value.slice(l.value+u).concat(c.value.slice(0,l.value+u)):c.value).find(O=>O.dataRef.textValue.startsWith(a.value)&&!O.dataRef.disabled),d=r?c.value.indexOf(r):-1;d===-1||d===l.value||(l.value=d,S.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(o,u){let r=L(d=>[...d,{id:o,dataRef:u}]);c.value=r.options,l.value=r.activeOptionIndex},unregisterOption(o){let u=L(r=>{let d=r.findIndex(O=>O.id===o);return d!==-1&&r.splice(d,1),r});c.value=u.options,l.value=u.activeOptionIndex,S.value=1},theirOnChange(o){t.disabled||B(o)},select(o){t.disabled||B($(w.value,{0:()=>o,1:()=>{let u=k(s.value.value).slice(),r=k(o),d=u.findIndex(O=>s.compare(r,k(O)));return d===-1?u.push(r):u.splice(d,1),u}}))}};X([x,g],(o,u)=>{var r;s.closeListbox(),Y(u,Z.Loose)||(o.preventDefault(),(r=m(x))==null||r.focus())},b(()=>e.value===0)),ve(W,s),ee(b(()=>$(e.value,{0:M.Open,1:M.Closed})));let h=b(()=>{var o;return(o=m(x))==null?void 0:o.closest("form")});return E(()=>{K([h],()=>{if(!h.value||t.defaultValue===void 0)return;function o(){s.theirOnChange(t.defaultValue)}return h.value.addEventListener("reset",o),()=>{var u;(u=h.value)==null||u.removeEventListener("reset",o)}},{immediate:!0})}),()=>{let{name:o,modelValue:u,disabled:r,form:d,...O}=t,I={open:e.value===0,disabled:r,value:T.value};return F(pe,[...o!=null&&T.value!=null?q({[o]:T.value}).map(([N,G])=>F(te,ae({features:le.Hidden,key:N,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:d,name:N,value:G}))):[],V({ourProps:{},theirProps:{...i,...oe(O,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:I,slots:n,attrs:i,name:"Listbox"})])}}}),ke=A({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${j()}`}},setup(t,{attrs:n,slots:i}){let p=C("ListboxLabel");function e(){var v;(v=m(p.buttonRef))==null||v.focus({preventScroll:!0})}return()=>{let v={open:p.listboxState.value===0,disabled:p.disabled.value},{id:x,...g}=t,c={id:x,ref:p.labelRef,onClick:e};return V({ourProps:c,theirProps:g,slot:v,attrs:n,slots:i,name:"ListboxLabel"})}}}),Pe=A({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${j()}`}},setup(t,{attrs:n,slots:i,expose:p}){let e=C("ListboxButton");p({el:e.buttonRef,$el:e.buttonRef});function v(a){switch(a.key){case f.Space:case f.Enter:case f.ArrowDown:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(y.First)});break;case f.ArrowUp:a.preventDefault(),e.openListbox(),D(()=>{var l;(l=m(e.optionsRef))==null||l.focus({preventScroll:!0}),e.value.value||e.goToOption(y.Last)});break}}function x(a){switch(a.key){case f.Space:a.preventDefault();break}}function g(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),ye(()=>{var l;return(l=m(e.optionsRef))==null?void 0:l.focus({preventScroll:!0})})))}let c=re(b(()=>({as:t.as,type:n.type})),e.buttonRef);return()=>{var a,l;let S={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:L,...w}=t,P={ref:e.buttonRef,id:L,type:c.value,"aria-haspopup":"listbox","aria-controls":(a=m(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(l=m(e.labelRef))==null?void 0:l.id,L].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:v,onKeyup:x,onClick:g};return V({ourProps:P,theirProps:w,slot:S,attrs:n,slots:i,name:"ListboxButton"})}}}),Te=A({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${j()}`}},setup(t,{attrs:n,slots:i,expose:p}){let e=C("ListboxOptions"),v=R(null);p({el:e.optionsRef,$el:e.optionsRef});function x(a){switch(v.value&&clearTimeout(v.value),a.key){case f.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case f.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let l=e.options.value[e.activeOptionIndex.value];e.select(l.dataRef.value)}e.mode.value===0&&(e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})}));break;case $(e.orientation.value,{vertical:f.ArrowDown,horizontal:f.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(y.Next);case $(e.orientation.value,{vertical:f.ArrowUp,horizontal:f.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(y.Previous);case f.Home:case f.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(y.First);case f.End:case f.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(y.Last);case f.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),D(()=>{var l;return(l=m(e.buttonRef))==null?void 0:l.focus({preventScroll:!0})});break;case f.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),v.value=setTimeout(()=>e.clearSearch(),350));break}}let g=ne(),c=b(()=>g!==null?(g.value&M.Open)===M.Open:e.listboxState.value===0);return()=>{var a,l,S,L;let w={open:e.listboxState.value===0},{id:P,...B}=t,T={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(L=(l=m(e.labelRef))==null?void 0:l.id)!=null?L:(S=m(e.buttonRef))==null?void 0:S.id,"aria-orientation":e.orientation.value,id:P,onKeydown:x,role:"listbox",tabIndex:0,ref:e.optionsRef};return V({ourProps:T,theirProps:B,slot:w,attrs:n,slots:i,features:z.RenderStrategy|z.Static,visible:c.value,name:"ListboxOptions"})}}}),$e=A({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${j()}`}},setup(t,{slots:n,attrs:i,expose:p}){let e=C("ListboxOption"),v=R(null);p({el:v,$el:v});let x=b(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),g=b(()=>$(e.mode.value,{0:()=>e.compare(k(e.value.value),k(t.value)),1:()=>k(e.value.value).some(s=>e.compare(k(s),k(t.value)))})),c=b(()=>$(e.mode.value,{1:()=>{var s;let h=k(e.value.value);return((s=e.options.value.find(o=>h.some(u=>e.compare(k(u),k(o.dataRef.value)))))==null?void 0:s.id)===t.id},0:()=>g.value})),a=se(v),l=b(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:v}));E(()=>e.registerOption(t.id,l)),ce(()=>e.unregisterOption(t.id)),E(()=>{K([e.listboxState,g],()=>{e.listboxState.value===0&&g.value&&$(e.mode.value,{1:()=>{c.value&&e.goToOption(y.Specific,t.id)},0:()=>{e.goToOption(y.Specific,t.id)}})},{immediate:!0})}),fe(()=>{e.listboxState.value===0&&x.value&&e.activationTrigger.value!==0&&D(()=>{var s,h;return(h=(s=m(v))==null?void 0:s.scrollIntoView)==null?void 0:h.call(s,{block:"nearest"})})});function S(s){if(t.disabled)return s.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),D(()=>{var h;return(h=m(e.buttonRef))==null?void 0:h.focus({preventScroll:!0})}))}function L(){if(t.disabled)return e.goToOption(y.Nothing);e.goToOption(y.Specific,t.id)}let w=de();function P(s){w.update(s)}function B(s){w.wasMoved(s)&&(t.disabled||x.value||e.goToOption(y.Specific,t.id,0))}function T(s){w.wasMoved(s)&&(t.disabled||x.value&&e.goToOption(y.Nothing))}return()=>{let{disabled:s}=t,h={active:x.value,selected:g.value,disabled:s},{id:o,value:u,disabled:r,...d}=t,O={id:o,ref:v,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:S,onFocus:L,onPointerenter:P,onMouseenter:P,onPointermove:B,onMousemove:B,onPointerleave:T,onMouseleave:T};return V({ourProps:O,theirProps:d,slot:h,attrs:i,slots:n,name:"ListboxOption"})}}});function Be(t,n){return U(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})])}function De(t,n){return U(),H("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[_("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})])}export{Re as B,Te as H,ke as K,Pe as N,$e as U,De as a,Be as r};

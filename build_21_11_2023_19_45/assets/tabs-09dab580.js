import{x as ae,d as O,f as w,y as oe,w as le,h as ne,o as x,c as ie,k as re,K as ue,n as se,H as C,q as de,t as N,b as pe,p as ve,N as z,a as ce,u as fe,O as be,e as m,l as j}from"./use-text-value-8ea5cafb.js";import{h as T,i as g,g as V,p as me,j as K,H as Q,G as U,F as J,k as ge,f as xe,l as ye,L as R,n as D,m as M,_ as he,r as Oe,o as A,c as E,a as H,u as Se,x as q,B as ke,t as W,y as G,e as Le}from"./index-d38c40df.js";function X(t={},i=null,n=[]){for(let[c,e]of Object.entries(t))Z(n,Y(i,c),e);return n}function Y(t,i){return t?t+"["+i+"]":i}function Z(t,i,n){if(Array.isArray(n))for(let[c,e]of n.entries())Z(t,Y(i,c.toString()),e);else n instanceof Date?t.push([i,n.toISOString()]):typeof n=="boolean"?t.push([i,n?"1":"0"]):typeof n=="string"?t.push([i,n]):typeof n=="number"?t.push([i,`${n}`]):n==null?t.push([i,""]):X(n,i,t)}function Te(t,i,n){let c=T(n==null?void 0:n.value),e=g(()=>t.value!==void 0);return[g(()=>e.value?t.value:c.value),function(d){return e.value||(c.value=d),i==null?void 0:i(d)}]}function Re(t,i){return t===i}var $e=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($e||{}),Pe=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(Pe||{}),we=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(we||{});function Be(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let ee=Symbol("ListboxContext");function _(t){let i=ye(ee,null);if(i===null){let n=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,_),n}return i}let je=V({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Re},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:i,attrs:n,emit:c}){let e=T(1),d=T(null),b=T(null),f=T(null),v=T([]),a=T(""),o=T(null),S=T(1);function k(l=r=>r){let r=o.value!==null?v.value[o.value]:null,u=be(l(v.value.slice()),h=>x(h.dataRef.domRef)),p=r?u.indexOf(r):null;return p===-1&&(p=null),{options:u,activeOptionIndex:p}}let L=g(()=>t.multiple?1:0),[$,B]=Te(g(()=>t.modelValue),l=>c("update:modelValue",l),g(()=>t.defaultValue)),P=g(()=>$.value===void 0?w(L.value,{1:[],0:void 0}):$.value),s={listboxState:e,value:P,mode:L,compare(l,r){if(typeof t.by=="string"){let u=t.by;return(l==null?void 0:l[u])===(r==null?void 0:r[u])}return t.by(l,r)},orientation:g(()=>t.horizontal?"horizontal":"vertical"),labelRef:d,buttonRef:b,optionsRef:f,disabled:g(()=>t.disabled),options:v,searchQuery:a,activeOptionIndex:o,activationTrigger:S,closeListbox(){t.disabled||e.value!==1&&(e.value=1,o.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(l,r,u){if(t.disabled||e.value===1)return;let p=k(),h=ae(l===O.Specific?{focus:O.Specific,id:r}:{focus:l},{resolveItems:()=>p.options,resolveActiveIndex:()=>p.activeOptionIndex,resolveId:I=>I.id,resolveDisabled:I=>I.dataRef.disabled});a.value="",o.value=h,S.value=u??1,v.value=p.options},search(l){if(t.disabled||e.value===1)return;let r=a.value!==""?0:1;a.value+=l.toLowerCase();let u=(o.value!==null?v.value.slice(o.value+r).concat(v.value.slice(0,o.value+r)):v.value).find(h=>h.dataRef.textValue.startsWith(a.value)&&!h.dataRef.disabled),p=u?v.value.indexOf(u):-1;p===-1||p===o.value||(o.value=p,S.value=1)},clearSearch(){t.disabled||e.value!==1&&a.value!==""&&(a.value="")},registerOption(l,r){let u=k(p=>[...p,{id:l,dataRef:r}]);v.value=u.options,o.value=u.activeOptionIndex},unregisterOption(l){let r=k(u=>{let p=u.findIndex(h=>h.id===l);return p!==-1&&u.splice(p,1),u});v.value=r.options,o.value=r.activeOptionIndex,S.value=1},theirOnChange(l){t.disabled||B(l)},select(l){t.disabled||B(w(L.value,{0:()=>l,1:()=>{let r=R(s.value.value).slice(),u=R(l),p=r.findIndex(h=>s.compare(u,R(h)));return p===-1?r.push(u):r.splice(p,1),r}}))}};oe([b,f],(l,r)=>{var u;s.closeListbox(),le(r,ne.Loose)||(l.preventDefault(),(u=x(b))==null||u.focus())},g(()=>e.value===0)),me(ee,s),ie(g(()=>w(e.value,{0:j.Open,1:j.Closed})));let y=g(()=>{var l;return(l=x(b))==null?void 0:l.closest("form")});return K(()=>{Q([y],()=>{if(!y.value||t.defaultValue===void 0)return;function l(){s.theirOnChange(t.defaultValue)}return y.value.addEventListener("reset",l),()=>{var r;(r=y.value)==null||r.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:r,disabled:u,form:p,...h}=t,I={open:e.value===0,disabled:u,value:P.value};return U(J,[...l!=null&&P.value!=null?X({[l]:P.value}).map(([F,te])=>U(re,ue({features:se.Hidden,key:F,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:p,name:F,value:te}))):[],C({ourProps:{},theirProps:{...n,...de(h,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:I,slots:i,attrs:n,name:"Listbox"})])}}}),Ne=V({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"},id:{type:String,default:()=>`headlessui-listbox-label-${N()}`}},setup(t,{attrs:i,slots:n}){let c=_("ListboxLabel");function e(){var d;(d=x(c.buttonRef))==null||d.focus({preventScroll:!0})}return()=>{let d={open:c.listboxState.value===0,disabled:c.disabled.value},{id:b,...f}=t,v={id:b,ref:c.labelRef,onClick:e};return C({ourProps:v,theirProps:f,slot:d,attrs:i,slots:n,name:"ListboxLabel"})}}}),Me=V({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${N()}`}},setup(t,{attrs:i,slots:n,expose:c}){let e=_("ListboxButton");c({el:e.buttonRef,$el:e.buttonRef});function d(a){switch(a.key){case m.Space:case m.Enter:case m.ArrowDown:a.preventDefault(),e.openListbox(),D(()=>{var o;(o=x(e.optionsRef))==null||o.focus({preventScroll:!0}),e.value.value||e.goToOption(O.First)});break;case m.ArrowUp:a.preventDefault(),e.openListbox(),D(()=>{var o;(o=x(e.optionsRef))==null||o.focus({preventScroll:!0}),e.value.value||e.goToOption(O.Last)});break}}function b(a){switch(a.key){case m.Space:a.preventDefault();break}}function f(a){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),D(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})})):(a.preventDefault(),e.openListbox(),Be(()=>{var o;return(o=x(e.optionsRef))==null?void 0:o.focus({preventScroll:!0})})))}let v=pe(g(()=>({as:t.as,type:i.type})),e.buttonRef);return()=>{var a,o;let S={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},{id:k,...L}=t,$={ref:e.buttonRef,id:k,type:v.value,"aria-haspopup":"listbox","aria-controls":(a=x(e.optionsRef))==null?void 0:a.id,"aria-expanded":e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(o=x(e.labelRef))==null?void 0:o.id,k].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:d,onKeyup:b,onClick:f};return C({ourProps:$,theirProps:L,slot:S,attrs:i,slots:n,name:"ListboxButton"})}}}),Ke=V({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${N()}`}},setup(t,{attrs:i,slots:n,expose:c}){let e=_("ListboxOptions"),d=T(null);c({el:e.optionsRef,$el:e.optionsRef});function b(a){switch(d.value&&clearTimeout(d.value),a.key){case m.Space:if(e.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),e.search(a.key);case m.Enter:if(a.preventDefault(),a.stopPropagation(),e.activeOptionIndex.value!==null){let o=e.options.value[e.activeOptionIndex.value];e.select(o.dataRef.value)}e.mode.value===0&&(e.closeListbox(),D(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})}));break;case w(e.orientation.value,{vertical:m.ArrowDown,horizontal:m.ArrowRight}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Next);case w(e.orientation.value,{vertical:m.ArrowUp,horizontal:m.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Previous);case m.Home:case m.PageUp:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.First);case m.End:case m.PageDown:return a.preventDefault(),a.stopPropagation(),e.goToOption(O.Last);case m.Escape:a.preventDefault(),a.stopPropagation(),e.closeListbox(),D(()=>{var o;return(o=x(e.buttonRef))==null?void 0:o.focus({preventScroll:!0})});break;case m.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(e.search(a.key),d.value=setTimeout(()=>e.clearSearch(),350));break}}let f=ve(),v=g(()=>f!==null?(f.value&j.Open)===j.Open:e.listboxState.value===0);return()=>{var a,o,S,k;let L={open:e.listboxState.value===0},{id:$,...B}=t,P={"aria-activedescendant":e.activeOptionIndex.value===null||(a=e.options.value[e.activeOptionIndex.value])==null?void 0:a.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(k=(o=x(e.labelRef))==null?void 0:o.id)!=null?k:(S=x(e.buttonRef))==null?void 0:S.id,"aria-orientation":e.orientation.value,id:$,onKeydown:b,role:"listbox",tabIndex:0,ref:e.optionsRef};return C({ourProps:P,theirProps:B,slot:L,attrs:i,slots:n,features:z.RenderStrategy|z.Static,visible:v.value,name:"ListboxOptions"})}}}),Fe=V({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${N()}`}},setup(t,{slots:i,attrs:n,expose:c}){let e=_("ListboxOption"),d=T(null);c({el:d,$el:d});let b=g(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===t.id:!1),f=g(()=>w(e.mode.value,{0:()=>e.compare(R(e.value.value),R(t.value)),1:()=>R(e.value.value).some(s=>e.compare(R(s),R(t.value)))})),v=g(()=>w(e.mode.value,{1:()=>{var s;let y=R(e.value.value);return((s=e.options.value.find(l=>y.some(r=>e.compare(R(r),R(l.dataRef.value)))))==null?void 0:s.id)===t.id},0:()=>f.value})),a=ce(d),o=g(()=>({disabled:t.disabled,value:t.value,get textValue(){return a()},domRef:d}));K(()=>e.registerOption(t.id,o)),ge(()=>e.unregisterOption(t.id)),K(()=>{Q([e.listboxState,f],()=>{e.listboxState.value===0&&f.value&&w(e.mode.value,{1:()=>{v.value&&e.goToOption(O.Specific,t.id)},0:()=>{e.goToOption(O.Specific,t.id)}})},{immediate:!0})}),xe(()=>{e.listboxState.value===0&&b.value&&e.activationTrigger.value!==0&&D(()=>{var s,y;return(y=(s=x(d))==null?void 0:s.scrollIntoView)==null?void 0:y.call(s,{block:"nearest"})})});function S(s){if(t.disabled)return s.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),D(()=>{var y;return(y=x(e.buttonRef))==null?void 0:y.focus({preventScroll:!0})}))}function k(){if(t.disabled)return e.goToOption(O.Nothing);e.goToOption(O.Specific,t.id)}let L=fe();function $(s){L.update(s)}function B(s){L.wasMoved(s)&&(t.disabled||b.value||e.goToOption(O.Specific,t.id,0))}function P(s){L.wasMoved(s)&&(t.disabled||b.value&&e.goToOption(O.Nothing))}return()=>{let{disabled:s}=t,y={active:b.value,selected:f.value,disabled:s},{id:l,value:r,disabled:u,...p}=t,h={id:l,ref:d,role:"option",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,"aria-selected":f.value,disabled:void 0,onClick:S,onFocus:k,onPointerenter:$,onMouseenter:$,onPointermove:B,onMousemove:B,onPointerleave:P,onMouseleave:P};return C({ourProps:h,theirProps:p,slot:y,attrs:n,slots:i,name:"ListboxOption"})}}});const De={name:"tabsComponent",props:{isBgBlue:{type:Boolean,default:!1},page:{page:String}},methods:{changeActive(t){this.$emit("activeTab",t)},getTabs(){if(this.$route.path=="/approvepanel")return this.getKycApprovalTabs;if(this.$route.path=="/kycapproval")return this.getKycPanelTabs;if(this.$route.path=="/opportunity")return this.getOpportunityTabs}},mounted(){},computed:{...M("tabs",["getKycApprovalTabs","getKycPanelTabs","getOpportunityTabs"]),...M(["getWindowWidth"]),...M("approval",["getIsLoader"])}},Ie={class:"flex flex-wrap -mb-px text-sm font-medium text-center",id:"myTab"},Ae=["onClick","id"],Ce={key:0};function Ve(t,i,n,c,e,d){const b=Oe("spinner");return A(),E("div",{class:q(["flex gap-2 items-center",{"secondary-violet-bg rounded-t":n.isBgBlue}])},[H("ul",Ie,[(A(!0),E(J,null,Se(d.getTabs(),(f,v)=>(A(),E("li",{class:"mr-2",role:"presentation",key:v,onClick:a=>d.changeActive(f.id),id:`${t.$route.name}_${v}_b.name`},[H("button",{class:q(["inline-block p-3 rounded-t-lg",v==t.$store.state.activeTab?"border-b-2 violet-color hover:violet-color dark:text-[#753ED7] dark:hover:text-[#753ED7] border-[#753ED7] dark:border-[#753ED7]":"secondary-color hover:text-gray-600 dark:text-[#94A3B8] border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"]),type:"button"},[ke(W(f.name)+" ",1),f.count!="0"?(A(),E("span",Ce,W(f.count),1)):G("",!0)],2)],8,Ae))),128))]),t.getIsLoader?(A(),Le(b,{key:0})):G("",!0)],2)}const ze=he(De,[["render",Ve]]);export{je as B,Ke as H,Ne as K,Me as N,Fe as U,ze as t};

import{_ as $,m as O,r as l,o as r,c,A as L,a as e,s as t,q as a,F as k,D as I,t as _,T as V,u as N,e as U,x as u}from"./index-374e4475.js";import{b as E}from"./breadcrumbKyc-3eb4e8f8.js";import{r as K,a as P,B as q,N as A,K as M,U as S,H as z}from"./ChevronUpDownIcon-12be3015.js";import"./HomeIcon-6ddf4cb2.js";import"./hidden-0dbf9c9c.js";import"./use-text-value-17e9e6a7.js";const j=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
`,F={components:{breadcrumbKyc:E,CheckIcon:K,ChevronUpDownIcon:P,Listbox:q,ListboxButton:A,ListboxLabel:M,ListboxOption:S,ListboxOptions:z},data(){return{imageTest1:"",imageTest2:"",rotateSvg:j,documentName:"PAN",select1:"",select2:"",documentList:[]}},computed:{...O("approval",["getDocumentData","getDocumentDataClone","getCustomerData","getDocuments","getIsDocsLoader"])},methods:{async setImage1(o){let s=new Image;s.onload=function(){document.getElementById(image).src=s.src},s.src=await o.value,this.imageTest1=o.value},setImage2(){this.imageTest2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAeix9Joye7BLUw3MYp4_8eeBuEy1ulEkYjnWl9lE&s"},getDocumentSource(o,s){var b,D,n,m,w,d,p,g,h,v;this.$store.dispatch("approval/getDocumentData",{str:`applicationId=${(D=(b=this.getCustomerData)==null?void 0:b.opportunity_data)==null?void 0:D.name}&documentType=${o}&userId=${(m=(n=this.$store.state.login)==null?void 0:n.userData)==null?void 0:m.user}&sessId=${(p=(d=(w=this.$store.state)==null?void 0:w.login)==null?void 0:d.userData)==null?void 0:p.sid}&token=${(v=(h=(g=this.$store.state)==null?void 0:g.login)==null?void 0:h.userData)==null?void 0:v.tempToken}`,type:s,docType:o})},previewDocument(o,s){this.documentName=o,this.getDocumentSource(o,s)}},async created(){this.getCustomerData&&this.getCustomerData.opportunity_data&&this.getCustomerData.opportunity_data.name&&await this.$store.dispatch("approval/getDocuments")},watch:{getDocuments:function(){this.documentList=this.getDocuments,this.documentList.length&&(this.select1=this.$route.query.prefer?this.$route.query.prefer:this.documentList[0]["Document Type"],this.select2=this.documentList.length>1?this.documentList[1]["Document Type"]:this.documentList[0]["Document Type"],this.previewDocument(this.select1,"preview"),this.previewDocument(this.select2,"clone"))}}},G={key:0},H={class:"mx-5 my-4"},W={class:"flex w-full gap-4 border-gray-900/10 pb-12 my-4"},Y={class:"grid gap-y-4 w-[50%]"},J={class:"relative mt-2"},Q={class:"block"},R={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},X={class:"bg-white p-5"},Z={class:"grid gap-y-4 w-[50%]"},ee={class:"relative mt-2"},te={class:"block"},se={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},oe={class:"bg-white p-5"};function ne(o,s,b,D,n,m){const w=l("breadcrumbKyc"),d=l("ListboxLabel"),p=l("ChevronUpDownIcon"),g=l("ListboxButton"),h=l("CheckIcon"),v=l("ListboxOption"),C=l("ListboxOptions"),T=l("Listbox"),B=l("preview_file");return r(),c(k,null,[o.getIsDocsLoader?L("",!0):(r(),c("div",G)),e("div",null,[t(w)]),e("div",H,[e("div",W,[e("div",Y,[e("div",null,[t(T,{as:"div",modelValue:n.select1,"onUpdate:modelValue":s[0]||(s[0]=i=>n.select1=i),onClick:s[1]||(s[1]=i=>m.previewDocument(n.select1,"preview"))},{default:a(()=>[t(d,{class:"block text-sm font-medium leading-6 text-gray-900"},{default:a(()=>[I("Document 1")]),_:1}),e("div",J,[t(g,{class:"relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},{default:a(()=>[e("span",Q,_(n.select1),1),e("span",R,[t(p,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),t(V,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(C,{class:"absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(r(!0),c(k,null,N(n.documentList,(i,x)=>(r(),U(v,{as:"template",key:x,value:i["Document Type"]},{default:a(({active:f,select1:y})=>[e("li",{class:u([f?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"])},[e("span",{class:u([y?"font-semibold":"font-normal","block "])},_(i["Document Type"]),3),y?(r(),c("span",{key:0,class:u([f?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"])},[t(h,{class:"h-5 w-5","aria-hidden":"true"})],2)):L("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),e("div",X,[t(B,{previewType:o.getDocumentData.type,previewData:o.getDocumentData.data,isPreBtn:!1},null,8,["previewType","previewData"])])]),e("div",Z,[e("div",null,[t(T,{as:"div",modelValue:n.select2,"onUpdate:modelValue":s[2]||(s[2]=i=>n.select2=i),onClick:s[3]||(s[3]=i=>m.previewDocument(n.select2,"clone"))},{default:a(()=>[t(d,{class:"block text-sm font-medium leading-6 text-gray-900"},{default:a(()=>[I("Document 2")]),_:1}),e("div",ee,[t(g,{class:"relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},{default:a(()=>[e("span",te,_(n.select2),1),e("span",se,[t(p,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),t(V,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[t(C,{class:"absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(r(!0),c(k,null,N(n.documentList,(i,x)=>(r(),U(v,{as:"template",key:x,value:i["Document Type"]},{default:a(({active:f,select2:y})=>[e("li",{class:u([f?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"])},[e("span",{class:u([y?"font-semibold":"font-normal","block "])},_(i["Document Type"]),3),y?(r(),c("span",{key:0,class:u([f?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"])},[t(h,{class:"h-5 w-5","aria-hidden":"true"})],2)):L("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),e("div",oe,[t(B,{previewType:o.getDocumentDataClone.type,previewData:o.getDocumentDataClone.data,isPreBtn:!1},null,8,["previewType","previewData"])])])])])],64)}const me=$(F,[["render",ne]]);export{me as default};

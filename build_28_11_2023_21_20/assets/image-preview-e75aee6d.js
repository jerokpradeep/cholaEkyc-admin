import{_ as S,W as U,m as E,r,o as l,c,y as b,a as e,s as o,q as a,e as x,F as C,B as N,t as w,T as V,u as O,x as u}from"./index-e4643df7.js";import{b as M}from"./index-d24eee62.js";import{r as z,a as K}from"./ChevronUpDownIcon-267bc98f.js";import{B as $,N as P,K as A,U as F,H as G}from"./listbox-f5eeac52.js";import"./HomeIcon-6fc08b3d.js";import"./use-text-value-c70468c9.js";const W=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
</svg>
`,j={components:{VueCropper:U,breadcrumbKyc:M,CheckIcon:z,ChevronUpDownIcon:K,Listbox:$,ListboxButton:P,ListboxLabel:A,ListboxOption:F,ListboxOptions:G},data(){return{imageTest1:"",imageTest2:"",rotateSvg:W,documentName:"PAN",select1:"",select2:"",documentList:[]}},computed:{...E("approval",["getDocumentData","getDocumentDataClone","getCustomerData","getDocuments","getIsDocsLoader"])},methods:{async setImage1(t){let s=new Image;s.onload=function(){document.getElementById(image).src=s.src},s.src=await t.value,this.imageTest1=t.value},setImage2(){this.imageTest2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWAeix9Joye7BLUw3MYp4_8eeBuEy1ulEkYjnWl9lE&s"},getDocumentSource(t,s){var D,L,n,m,_,d,p,g,f,h;this.$store.dispatch("approval/getDocumentData",{str:`applicationId=${(L=(D=this.getCustomerData)==null?void 0:D.opportunity_data)==null?void 0:L.name}&documentType=${t}&userId=${(m=(n=this.$store.state.login)==null?void 0:n.userData)==null?void 0:m.user}&sessId=${(p=(d=(_=this.$store.state)==null?void 0:_.login)==null?void 0:d.userData)==null?void 0:p.sid}&token=${(h=(f=(g=this.$store.state)==null?void 0:g.login)==null?void 0:f.userData)==null?void 0:h.tempToken}`,type:s,docType:t})},previewDocument(t,s){this.documentName=t,this.getDocumentSource(t,s)}},unmounted(){localStorage.setItem("setCurrentImage",JSON.stringify(this.getDocumentData))},async created(){await this.$store.dispatch("approval/getDocuments"),this.documentList=this.getDocuments.filter(t=>t["Document Type"]!="ESIGN_DOCUMENT"&&t["Document Type"]!="INCOME_PROOF"),this.documentList.length&&(this.select1=this.documentList[0]["Document Type"],this.select2=this.documentList.length>1?this.documentList[1]["Document Type"]:this.documentList[0]["Document Type"],this.previewDocument(this.select1,"preview"),this.previewDocument(this.select2,"clone"))}},q={key:0},H={class:"mx-5 my-4"},J={class:"flex w-full gap-4 border-gray-900/10 pb-12 my-4"},Y={class:"grid gap-y-4 w-[50%]"},R={class:"relative mt-2"},Q={class:"block"},X={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},Z={class:"flex bg-white p-5"},ee={class:"grid gap-y-4 w-[50%]"},te={class:"relative mt-2"},se={class:"block"},oe={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"},ne={class:"flex bg-white p-5"};function ae(t,s,D,L,n,m){const _=r("breadcrumbKyc"),d=r("ListboxLabel"),p=r("ChevronUpDownIcon"),g=r("ListboxButton"),f=r("CheckIcon"),h=r("ListboxOption"),I=r("ListboxOptions"),T=r("Listbox"),B=r("VueCropper");return l(),c(C,null,[t.getIsDocsLoader?b("",!0):(l(),c("div",q)),e("div",null,[o(_)]),e("div",H,[e("div",J,[e("div",Y,[e("div",null,[o(T,{as:"div",modelValue:n.select1,"onUpdate:modelValue":s[0]||(s[0]=i=>n.select1=i),onClick:s[1]||(s[1]=i=>m.previewDocument(n.select1,"preview"))},{default:a(()=>[o(d,{class:"block text-sm font-medium leading-6 text-gray-900"},{default:a(()=>[N("Document 1")]),_:1}),e("div",R,[o(g,{class:"relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},{default:a(()=>[e("span",Q,w(n.select1),1),e("span",X,[o(p,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(V,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[o(I,{class:"absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(l(!0),c(C,null,O(n.documentList,(i,k)=>(l(),x(h,{as:"template",key:k,value:i["Document Type"]},{default:a(({active:y,select1:v})=>[e("li",{class:u([y?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"])},[e("span",{class:u([v?"font-semibold":"font-normal","block "])},w(i["Document Type"]),3),v?(l(),c("span",{key:0,class:u([y?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"])},[o(f,{class:"h-5 w-5","aria-hidden":"true"})],2)):b("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),e("div",Z,[t.getDocumentData?(l(),x(B,{key:0,ref:"image1",img:t.getDocumentData,info:!0,canMove:!0,autoCrop:!1,outputSize:1,alt:"Source Image",class:"cropper !w-full"},null,8,["img"])):b("",!0)])]),e("div",ee,[e("div",null,[o(T,{as:"div",modelValue:n.select2,"onUpdate:modelValue":s[2]||(s[2]=i=>n.select2=i),onClick:s[3]||(s[3]=i=>m.previewDocument(n.select2,"clone"))},{default:a(()=>[o(d,{class:"block text-sm font-medium leading-6 text-gray-900"},{default:a(()=>[N("Document 2")]),_:1}),e("div",te,[o(g,{class:"relative w-full cursor-default rounded-md bg-white min-h-[32px] py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"},{default:a(()=>[e("span",se,w(n.select2),1),e("span",oe,[o(p,{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]),_:1}),o(V,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:a(()=>[o(I,{class:"absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:a(()=>[(l(!0),c(C,null,O(n.documentList,(i,k)=>(l(),x(h,{as:"template",key:k,value:i["Document Type"]},{default:a(({active:y,select2:v})=>[e("li",{class:u([y?"bg-indigo-600 text-white":"text-gray-900","relative cursor-default select-none py-2 pl-8 pr-4"])},[e("span",{class:u([v?"font-semibold":"font-normal","block "])},w(i["Document Type"]),3),v?(l(),c("span",{key:0,class:u([y?"text-white":"text-indigo-600","absolute inset-y-0 left-0 flex items-center pl-1.5"])},[o(f,{class:"h-5 w-5","aria-hidden":"true"})],2)):b("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),e("div",ne,[t.getDocumentDataClone?(l(),x(B,{key:0,ref:"image2",img:t.getDocumentDataClone,info:!0,canMove:!0,autoCrop:!1,outputSize:1,alt:"Source Image",class:"cropper !w-full"},null,8,["img"])):b("",!0)])])])])],64)}const de=S(j,[["render",ae]]);export{de as default};

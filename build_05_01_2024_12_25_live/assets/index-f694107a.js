import{J as y,r as le,o as z,c as L,x as S,a as D,N as fe,A as P,s as de,D as pe,t as he}from"./index-374e4475.js";function O(n){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(n)}var ve=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,H={name:"JsonString",props:{jsonValue:{type:String,required:!0}},data:function(){return{expand:!0,canExtend:!1}},mounted:function(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle:function(){this.expand=!this.expand}},render:function(){var e=this.jsonValue,r=ve.test(e),i;return this.expand?(i={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},r?(e='<a href="'.concat(e,'" target="_blank" class="jv-link">').concat(e,"</a>"),i.innerHTML='"'.concat(e.toString(),'"')):i.innerText='"'.concat(e.toString(),'"')):i={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},y("span",{},[this.canExtend&&y("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),y("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),y("span",i)])}};H.__file="src/Components/types/json-string.vue";var J={name:"JsonUndefined",functional:!0,props:{jsonValue:{type:Object,default:null}},render:function(){return y("span",{class:{"jv-item":!0,"jv-undefined":!0},innerText:this.jsonValue===null?"null":"undefined"})}};J.__file="src/Components/types/json-undefined.vue";var F={name:"JsonNumber",functional:!0,props:{jsonValue:{type:Number,required:!0}},render:function(){var e=Number.isInteger(this.jsonValue);return y("span",{class:{"jv-item":!0,"jv-number":!0,"jv-number-integer":e,"jv-number-float":!e},innerText:this.jsonValue.toString()})}};F.__file="src/Components/types/json-number.vue";var I={name:"JsonBoolean",functional:!0,props:{jsonValue:Boolean},render:function(){return y("span",{class:{"jv-item":!0,"jv-boolean":!0},innerText:this.jsonValue.toString()})}};I.__file="src/Components/types/json-boolean.vue";var q={name:"JsonObject",props:{jsonValue:{type:Object,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},expand:Boolean,sort:Boolean,previewMode:Boolean},data:function(){return{value:{}}},computed:{ordered:function(){var e=this;if(!this.sort)return this.value;var r={};return Object.keys(this.value).sort().forEach(function(i){r[i]=e.value[i]}),r}},watch:{jsonValue:function(e){this.setValue(e)}},mounted:function(){this.setValue(this.jsonValue)},methods:{setValue:function(e){var r=this;setTimeout(function(){r.value=e},0)},toggle:function(){this.$emit("update:expand",!this.expand),this.dispatchEvent()},dispatchEvent:function(){try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=[];if(!this.previewMode&&!this.keyName&&e.push(y("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),e.push(y("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"{"})),this.expand){for(var r in this.ordered)if(this.ordered.hasOwnProperty(r)){var i=this.ordered[r];e.push(y(V,{key:r,style:{display:this.expand?void 0:"none"},sort:this.sort,keyName:r,depth:this.depth+1,value:i,previewMode:this.previewMode}))}}return!this.expand&&Object.keys(this.value).length&&e.push(y("span",{style:{display:this.expand?"none":void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:"click to reveal object content (keys: ".concat(Object.keys(this.ordered).join(", "),")"),innerText:"..."})),e.push(y("span",{class:{"jv-item":!0,"jv-object":!0},innerText:"}"})),y("span",e)}};q.__file="src/Components/types/json-object.vue";var U={name:"JsonArray",props:{jsonValue:{type:Array,required:!0},keyName:{type:String,default:""},depth:{type:Number,default:0},sort:Boolean,expand:Boolean,previewMode:Boolean},data:function(){return{value:[]}},watch:{jsonValue:function(e){this.setValue(e)}},mounted:function(){this.setValue(this.jsonValue)},methods:{setValue:function(e){var r=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;i===0&&(this.value=[]),setTimeout(function(){e.length>i&&(r.value.push(e[i]),r.setValue(e,i+1))},0)},toggle:function(){this.$emit("update:expand",!this.expand);try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=this,r=[];return!this.previewMode&&!this.keyName&&r.push(y("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),r.push(y("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"["})),this.expand&&this.value.forEach(function(i,v){r.push(y(V,{key:v,style:{display:e.expand?void 0:"none"},sort:e.sort,depth:e.depth+1,value:i,previewMode:e.previewMode}))}),!this.expand&&this.value.length&&r.push(y("span",{style:{display:void 0},class:{"jv-ellipsis":!0},onClick:this.toggle,title:"click to reveal ".concat(this.value.length," hidden items"),innerText:"..."})),r.push(y("span",{class:{"jv-item":!0,"jv-array":!0},innerText:"]"})),y("span",r)}};U.__file="src/Components/types/json-array.vue";var K={name:"JsonFunction",functional:!0,props:{jsonValue:{type:Function,required:!0}},render:function(){return y("span",{class:{"jv-item":!0,"jv-function":!0},attrs:{title:this.jsonValue.toString()},innerHTML:"&lt;function&gt;"})}};K.__file="src/Components/types/json-function.vue";var Z={name:"JsonDate",inject:["timeformat"],functional:!0,props:{jsonValue:{type:Date,required:!0}},render:function(){var e=this.jsonValue,r=this.timeformat;return y("span",{class:{"jv-item":!0,"jv-string":!0},innerText:'"'.concat(r(e),'"')})}};Z.__file="src/Components/types/json-date.vue";var ye=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/,G={name:"JsonString",props:{jsonValue:{type:RegExp,required:!0}},data:function(){return{expand:!0,canExtend:!1}},mounted:function(){this.$refs.itemRef.offsetHeight>this.$refs.holderRef.offsetHeight&&(this.canExtend=!0)},methods:{toggle:function(){this.expand=!this.expand}},render:function(){var e=this.jsonValue,r=ye.test(e),i;return this.expand?(i={class:{"jv-item":!0,"jv-string":!0},ref:"itemRef"},r?(e='<a href="'.concat(e,'" target="_blank" class="jv-link">').concat(e,"</a>"),i.innerHTML="".concat(e.toString())):i.innerText="".concat(e.toString())):i={class:{"jv-ellipsis":!0},onClick:this.toggle,innerText:"..."},y("span",{},[this.canExtend&&y("span",{class:{"jv-toggle":!0,open:this.expand},onClick:this.toggle}),y("span",{class:{"jv-holder-node":!0},ref:"holderRef"}),y("span",i)])}};G.__file="src/Components/types/json-regexp.vue";var V={name:"JsonBox",inject:["expandDepth","keyClick"],props:{value:{type:[Object,Array,String,Number,Boolean,Function,Date],default:null},keyName:{type:String,default:""},sort:Boolean,depth:{type:Number,default:0},previewMode:Boolean},data:function(){return{expand:!0}},mounted:function(){this.expand=this.previewMode||!(this.depth>=this.expandDepth)},methods:{toggle:function(){this.expand=!this.expand;try{this.$el.dispatchEvent(new Event("resized"))}catch{var e=document.createEvent("Event");e.initEvent("resized",!0,!1),this.$el.dispatchEvent(e)}}},render:function(){var e=this,r=[],i;this.value===null||this.value===void 0?i=J:Array.isArray(this.value)?i=U:Object.prototype.toString.call(this.value)==="[object Date]"?i=Z:this.value.constructor===RegExp?i=G:O(this.value)==="object"?i=q:typeof this.value=="number"?i=F:typeof this.value=="string"?i=H:typeof this.value=="boolean"?i=I:typeof this.value=="function"&&(i=K);var v=this.keyName&&this.value&&(Array.isArray(this.value)||O(this.value)==="object"&&Object.prototype.toString.call(this.value)!=="[object Date]");return!this.previewMode&&v&&r.push(y("span",{class:{"jv-toggle":!0,open:!!this.expand},onClick:this.toggle})),this.keyName&&r.push(y("span",{class:{"jv-key":!0},onClick:function(){e.keyClick(e.keyName)},innerText:"".concat(this.keyName,":")})),r.push(y(i,{class:{"jv-push":!0},jsonValue:this.value,keyName:this.keyName,sort:this.sort,depth:this.depth,expand:this.expand,previewMode:this.previewMode,"onUpdate:expand":function(c){e.expand=c}})),y("div",{class:{"jv-node":!0,"jv-key-node":!!this.keyName&&!v,toggle:!this.previewMode&&v}},r)}};V.__file="src/Components/json-box.vue";var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ge(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Y={exports:{}};(function(n,e){(function(i,v){n.exports=v()})(me,function(){return function(){var r={686:function(s,c,t){t.d(c,{default:function(){return ce}});var p=t(279),h=t.n(p),m=t(370),T=t.n(m),x=t(817),E=t.n(x);function g(l){try{return document.execCommand(l)}catch{return!1}}var j=function(a){var o=E()(a);return g("cut"),o},b=j;function C(l){var a=document.documentElement.getAttribute("dir")==="rtl",o=document.createElement("textarea");o.style.fontSize="12pt",o.style.border="0",o.style.padding="0",o.style.margin="0",o.style.position="absolute",o.style[a?"right":"left"]="-9999px";var f=window.pageYOffset||document.documentElement.scrollTop;return o.style.top="".concat(f,"px"),o.setAttribute("readonly",""),o.value=l,o}var Q=function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},f="";if(typeof a=="string"){var u=C(a);o.container.appendChild(u),f=E()(u),g("copy"),u.remove()}else f=E()(a),g("copy");return f},R=Q;function k(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(o){return typeof o}:k=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},k(l)}var W=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=a.action,f=o===void 0?"copy":o,u=a.container,d=a.target,_=a.text;if(f!=="copy"&&f!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&k(d)==="object"&&d.nodeType===1){if(f==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(f==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(_)return R(_,{container:u});if(d)return f==="cut"?b(d):R(d,{container:u})},ee=W;function w(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(o){return typeof o}:w=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},w(l)}function te(l,a){if(!(l instanceof a))throw new TypeError("Cannot call a class as a function")}function $(l,a){for(var o=0;o<a.length;o++){var f=a[o];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(l,f.key,f)}}function ne(l,a,o){return a&&$(l.prototype,a),o&&$(l,o),l}function re(l,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(a&&a.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),a&&M(l,a)}function M(l,a){return M=Object.setPrototypeOf||function(f,u){return f.__proto__=u,f},M(l,a)}function oe(l){var a=se();return function(){var f=A(l),u;if(a){var d=A(this).constructor;u=Reflect.construct(f,arguments,d)}else u=f.apply(this,arguments);return ie(this,u)}}function ie(l,a){return a&&(w(a)==="object"||typeof a=="function")?a:ae(l)}function ae(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(l){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},A(l)}function B(l,a){var o="data-clipboard-".concat(l);if(a.hasAttribute(o))return a.getAttribute(o)}var ue=function(l){re(o,l);var a=oe(o);function o(f,u){var d;return te(this,o),d=a.call(this),d.resolveOptions(u),d.listenClick(f),d}return ne(o,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=w(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var d=this;this.listener=T()(u,"click",function(_){return d.onClick(_)})}},{key:"onClick",value:function(u){var d=u.delegateTarget||u.currentTarget,_=this.action(d)||"copy",N=ee({action:_,container:this.container,target:this.target(d),text:this.text(d)});this.emit(N?"success":"error",{action:_,text:N,trigger:d,clearSelection:function(){d&&d.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(u){return B("action",u)}},{key:"defaultTarget",value:function(u){var d=B("target",u);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(u){return B("text",u)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return R(u,d)}},{key:"cut",value:function(u){return b(u)}},{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof u=="string"?[u]:u,_=!!document.queryCommandSupported;return d.forEach(function(N){_=_&&!!document.queryCommandSupported(N)}),_}}]),o}(h()),ce=ue},828:function(s){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function p(h,m){for(;h&&h.nodeType!==c;){if(typeof h.matches=="function"&&h.matches(m))return h;h=h.parentNode}}s.exports=p},438:function(s,c,t){var p=t(828);function h(x,E,g,j,b){var C=T.apply(this,arguments);return x.addEventListener(g,C,b),{destroy:function(){x.removeEventListener(g,C,b)}}}function m(x,E,g,j,b){return typeof x.addEventListener=="function"?h.apply(null,arguments):typeof g=="function"?h.bind(null,document).apply(null,arguments):(typeof x=="string"&&(x=document.querySelectorAll(x)),Array.prototype.map.call(x,function(C){return h(C,E,g,j,b)}))}function T(x,E,g,j){return function(b){b.delegateTarget=p(b.target,E),b.delegateTarget&&j.call(x,b)}}s.exports=m},879:function(s,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var p=Object.prototype.toString.call(t);return t!==void 0&&(p==="[object NodeList]"||p==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var p=Object.prototype.toString.call(t);return p==="[object Function]"}},370:function(s,c,t){var p=t(879),h=t(438);function m(g,j,b){if(!g&&!j&&!b)throw new Error("Missing required arguments");if(!p.string(j))throw new TypeError("Second argument must be a String");if(!p.fn(b))throw new TypeError("Third argument must be a Function");if(p.node(g))return T(g,j,b);if(p.nodeList(g))return x(g,j,b);if(p.string(g))return E(g,j,b);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function T(g,j,b){return g.addEventListener(j,b),{destroy:function(){g.removeEventListener(j,b)}}}function x(g,j,b){return Array.prototype.forEach.call(g,function(C){C.addEventListener(j,b)}),{destroy:function(){Array.prototype.forEach.call(g,function(C){C.removeEventListener(j,b)})}}}function E(g,j,b){return h(document.body,g,j,b)}s.exports=m},817:function(s){function c(t){var p;if(t.nodeName==="SELECT")t.focus(),p=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var h=t.hasAttribute("readonly");h||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),h||t.removeAttribute("readonly"),p=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var m=window.getSelection(),T=document.createRange();T.selectNodeContents(t),m.removeAllRanges(),m.addRange(T),p=m.toString()}return p}s.exports=c},279:function(s){function c(){}c.prototype={on:function(t,p,h){var m=this.e||(this.e={});return(m[t]||(m[t]=[])).push({fn:p,ctx:h}),this},once:function(t,p,h){var m=this;function T(){m.off(t,T),p.apply(h,arguments)}return T._=p,this.on(t,T,h)},emit:function(t){var p=[].slice.call(arguments,1),h=((this.e||(this.e={}))[t]||[]).slice(),m=0,T=h.length;for(m;m<T;m++)h[m].fn.apply(h[m].ctx,p);return this},off:function(t,p){var h=this.e||(this.e={}),m=h[t],T=[];if(m&&p)for(var x=0,E=m.length;x<E;x++)m[x].fn!==p&&m[x].fn._!==p&&T.push(m[x]);return T.length?h[t]=T:delete h[t],this}},s.exports=c,s.exports.TinyEmitter=c}},i={};function v(s){if(i[s])return i[s].exports;var c=i[s]={exports:{}};return r[s](c,c.exports,v),c.exports}return function(){v.n=function(s){var c=s&&s.__esModule?function(){return s.default}:function(){return s};return v.d(c,{a:c}),c}}(),function(){v.d=function(s,c){for(var t in c)v.o(c,t)&&!v.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:c[t]})}}(),function(){v.o=function(s,c){return Object.prototype.hasOwnProperty.call(s,c)}}(),v(686)}().default})})(Y);var be=ge(Y.exports),xe=function(e,r){var i=Date.now(),v;return function(){for(var s=arguments.length,c=new Array(s),t=0;t<s;t++)c[t]=arguments[t];Date.now()-i<r&&v&&clearTimeout(v),v=setTimeout(function(){e.apply(void 0,c)},r),i=Date.now()}},X={name:"JsonViewer",components:{JsonBox:V},props:{value:{type:[Object,Array,String,Number,Boolean,Function],required:!0},expanded:{type:Boolean,default:!1},expandDepth:{type:Number,default:1},copyable:{type:[Boolean,Object],default:!1},sort:{type:Boolean,default:!1},boxed:{type:Boolean,default:!1},theme:{type:String,default:"light"},timeformat:{type:Function,default:function(e){return e.toLocaleString()}},previewMode:{type:Boolean,default:!1}},provide:function(){return{expandDepth:this.expandDepth,timeformat:this.timeformat,keyClick:this.keyClick}},data:function(){return{copied:!1,expandableCode:!1,expandCode:this.expanded}},emits:["onKeyClick"],computed:{jvClass:function(){return"jv-container jv-"+this.theme+(this.boxed?" boxed":"")},copyText:function(){var e=this.copyable,r=e.copyText,i=e.copiedText,v=e.timeout,s=e.align;return{copyText:r||"copy",copiedText:i||"copied!",timeout:v||2e3,align:s}}},watch:{value:function(){this.onResized()}},mounted:function(){var e=this;if(this.debounceResized=xe(this.debResized.bind(this),200),this.boxed&&this.$refs.jsonBox&&(this.onResized(),this.$refs.jsonBox.$el.addEventListener("resized",this.onResized,!0)),this.copyable){var r=new be(this.$refs.clip,{text:function(){return JSON.stringify(e.value,null,2)}});r.on("success",function(i){e.onCopied(i)})}},methods:{onResized:function(){this.debounceResized()},debResized:function(){var e=this;this.$nextTick(function(){e.$refs.jsonBox&&(e.$refs.jsonBox.$el.clientHeight>=250?e.expandableCode=!0:e.expandableCode=!1)})},keyClick:function(e){this.$emit("onKeyClick",e)},onCopied:function(e){var r=this;this.copied||(this.copied=!0,setTimeout(function(){r.copied=!1},this.copyText.timeout),this.$emit("copied",e))},toggleExpandCode:function(){this.expandCode=!this.expandCode}}};function je(n,e,r,i,v,s){var c=le("json-box");return z(),L("div",{class:S(s.jvClass)},[r.copyable?(z(),L("div",{key:0,class:S("jv-tooltip ".concat(s.copyText.align||"right"))},[D("span",{ref:"clip",class:S(["jv-button",{copied:v.copied}])},[fe(n.$slots,"copy",{copied:v.copied},function(){return[pe(he(v.copied?s.copyText.copiedText:s.copyText.copyText),1)]})],2)],2)):P("v-if",!0),D("div",{class:S(["jv-code",{open:v.expandCode,boxed:r.boxed}])},[de(c,{ref:"jsonBox",value:r.value,sort:r.sort,"preview-mode":r.previewMode},null,8,["value","sort","preview-mode"])],2),v.expandableCode&&r.boxed?(z(),L("div",{key:1,class:"jv-more",onClick:e[0]||(e[0]=function(){return s.toggleExpandCode&&s.toggleExpandCode.apply(s,arguments)})},[D("span",{class:S(["jv-toggle",{open:!!v.expandCode}])},null,2)])):P("v-if",!0)],2)}X.render=je;X.__file="src/Components/json-viewer.vue";export{X as s};

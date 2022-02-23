var _=Object.defineProperty;var V=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var f=(e,a,c)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[a]=c,b=(e,a)=>{for(var c in a||(a={}))g.call(a,c)&&f(e,c,a[c]);if(V)for(var c of V(a))y.call(a,c)&&f(e,c,a[c]);return e};import{C as B}from"./index.ec907b7f.js";import{C as A}from"./index.a72abc02.js";import{I as S}from"./index.b873ddd6.js";import{B as U}from"./index.c81e339b.js";import{A as G}from"./AppType.ed11fb41.js";import{d as x}from"./index.9b1139e6.js";import{w as F,a as E}from"./utils.1735a57b.js";import{u as D,a as h,_ as I,b as M,c as N}from"./en-US.628e0d34.js";import{_ as z}from"./elevation.eb606728.js";import{q as w,$ as L,e as p,o as P,c as R,i as o,j as r,a as i,t as l,F as T,Z as j,_ as q,m as d}from"./vendor.49f89f0d.js";import"./provide.c155b402.js";import"./components.721843ff.js";import"./shared.506a394a.js";import"./index.e35ca8e8.js";import"./index.48ee5316.js";import"./elements.6395be39.js";import"./index.539e8257.js";var Z={basicUsage:"\u57FA\u672C\u4F7F\u7528",currentValue:"\u5F53\u524D\u7684\u503C:",setState:"\u8BBE\u7F6E\u72B6\u6001\u503C",setStyle:"\u4FEE\u6539\u56FE\u6807\u548C\u989C\u8272",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",eat:"\u5403\u996D",sleep:"\u7761\u89C9",checkAll:"\u5168\u9009",inverseAll:"\u53CD\u9009",checkboxGroup:"\u590D\u9009\u6846\u7EC4",checkboxValidate:"\u590D\u9009\u6846\u5B57\u6BB5\u6821\u9A8C",checkboxGroupValidate:"\u590D\u9009\u6846\u7EC4\u5B57\u6BB5\u6821\u9A8C",checkboxValidateMessage:"\u8BF7\u52FE\u9009",checkboxGroupValidateMessage:"\u8BF7\u5168\u9009"},H={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State value",setStyle:"Modify the icon and color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",checkboxValidate:"Checkbox validation",checkboxGroupValidate:"CheckboxGroup validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all"};const{add:C,use:J,pack:K,packs:_e,merge:ge}=D(),O=e=>{N(e),J(e)};h("zh-CN",I);h("en-US",M);C("zh-CN",Z);C("en-US",H);const Q={name:"CheckboxGroupExample",components:{VarCheckboxGroup:B,VarCheckbox:A,VarIcon:S,VarButton:U,AppType:G},setup(){const e=w({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],group:null});return F(O),E(x),b({pack:K},L(e))}},W=e=>(j("data-v-620f7bec"),e=e(),q(),e),X={class:"relation"},Y={class:"relation"},$=W(()=>i("div",{class:"space"},null,-1));function ee(e,a,c,u,ae,le){const s=p("app-type"),n=p("var-checkbox"),k=p("var-icon"),v=p("var-button"),m=p("var-checkbox-group");return P(),R(T,null,[o(s,null,{default:r(()=>[d(l(u.pack.basicUsage),1)]),_:1}),o(n,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t)},{default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value),1)]),_:1},8,["modelValue"]),o(s,null,{default:r(()=>[d(l(u.pack.setState),1)]),_:1}),o(n,{"unchecked-value":0,"checked-value":1,modelValue:e.value2,"onUpdate:modelValue":a[1]||(a[1]=t=>e.value2=t)},{default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value2),1)]),_:1},8,["modelValue"]),o(s,null,{default:r(()=>[d(l(u.pack.setStyle),1)]),_:1}),o(n,{"unchecked-color":"#e99eb4","checked-color":"#f44336",modelValue:e.value3,"onUpdate:modelValue":a[2]||(a[2]=t=>e.value3=t)},{"unchecked-icon":r(()=>[o(k,{name:"heart-half-full",size:"24px"})]),"checked-icon":r(()=>[o(k,{name:"heart",size:"24px"})]),default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value3),1)]),_:1},8,["modelValue"]),o(s,null,{default:r(()=>[d(l(u.pack.disabled),1)]),_:1}),o(n,{disabled:"",modelValue:e.value4,"onUpdate:modelValue":a[3]||(a[3]=t=>e.value4=t)},{default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value4),1)]),_:1},8,["modelValue"]),o(s,null,{default:r(()=>[d(l(u.pack.readonly),1)]),_:1}),o(n,{readonly:"",modelValue:e.value5,"onUpdate:modelValue":a[4]||(a[4]=t=>e.value5=t)},{default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value5),1)]),_:1},8,["modelValue"]),o(s,null,{default:r(()=>[d(l(u.pack.checkboxGroup),1)]),_:1}),o(m,{ref:"group",modelValue:e.value6,"onUpdate:modelValue":a[7]||(a[7]=t=>e.value6=t)},{default:r(()=>[o(n,{"checked-value":0},{default:r(()=>[d(l(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:r(()=>[d(l(u.pack.sleep),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[5]||(a[5]=t=>e.$refs.group.checkAll())},{default:r(()=>[d(l(u.pack.checkAll),1)]),_:1}),o(v,{class:"button",type:"primary",onClick:a[6]||(a[6]=t=>e.$refs.group.inverseAll())},{default:r(()=>[d(l(u.pack.inverseAll),1)]),_:1})]),_:1},8,["modelValue"]),i("div",X,l(u.pack.currentValue)+" "+l(e.value6),1),o(s,null,{default:r(()=>[d(l(u.pack.checkboxValidate),1)]),_:1}),o(n,{modelValue:e.value7,"onUpdate:modelValue":a[8]||(a[8]=t=>e.value7=t),rules:[t=>t||u.pack.checkboxValidateMessage]},{default:r(()=>[d(l(u.pack.currentValue)+" "+l(e.value7),1)]),_:1},8,["modelValue","rules"]),o(s,null,{default:r(()=>[d(l(u.pack.checkboxGroupValidate),1)]),_:1}),o(m,{modelValue:e.value8,"onUpdate:modelValue":a[9]||(a[9]=t=>e.value8=t),rules:[t=>t.length===2||u.pack.checkboxGroupValidateMessage]},{default:r(()=>[o(n,{"checked-value":0},{default:r(()=>[d(l(u.pack.eat),1)]),_:1}),o(n,{"checked-value":1},{default:r(()=>[d(l(u.pack.sleep),1)]),_:1})]),_:1},8,["modelValue","rules"]),i("div",Y,l(u.pack.currentValue)+" "+l(e.value8),1),$],64)}var ye=z(Q,[["render",ee],["__scopeId","data-v-620f7bec"]]);export{ye as default};

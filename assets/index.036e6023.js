import{F as re,u as oe}from"./provide.33855198.js";import{I as ne}from"./index.bbaa5131.js";import{P as se}from"./index.f05b8747.js";import{I as ie}from"./index.86cc34e0.js";import{R as de}from"./index.23ced9c1.js";import{q as ue,r as W,b as ce,y as ve,p as S,z as me,d as $,e as pe,o as v,c as m,a as V,F as fe,j as ge,w as q,m as j,t as ye,J as he,h as w,f as _,n as be,B as Ve,i as we}from"./vendor.8a125dba.js";import{m as J,n as G,i as _e,c as K,t as O}from"./shared.cba5a5a3.js";import{a as Re}from"./components.581beddd.js";import{_ as Pe}from"./elevation.548891b7.js";const Be={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}};let Ce=0;const Fe=ue({name:"VarUploader",directives:{Ripple:de},components:{VarIcon:ne,VarPopup:se,VarFormDetails:re},props:Be,setup(e){const d=W(!1),R=W(null),U=ce(()=>{const{maxlength:a,modelValue:{length:r}}=e;return _e(a)?`${r} / ${a}`:""}),{form:l,bindForm:g}=oe(),{errorMessage:y,validateWithTrigger:P,validate:B,resetValidation:p}=Re(),t=a=>{const{disabled:r,readonly:o,previewed:s}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||!s)return;const{url:n}=a;if(K(n)&&G(n)){ie(n);return}K(n)&&J(n)&&(R.value=a,d.value=!0)},f=a=>({id:Ce++,url:"",cover:"",name:a.name,file:a}),Q=a=>{const r=a.target,{files:o}=r;return Array.from(o)},X=a=>new Promise(r=>{const o=new FileReader;o.onload=()=>{const s=o.result;a.file.type.startsWith("image")&&(a.cover=s),a.url=s,r(a)},o.readAsDataURL(a.file)}),Y=a=>a.map(X),Z=a=>{const{onBeforeRead:r}=e;return a.map(o=>new Promise(s=>{const n=r?r(S(o)):!0;Promise.resolve(n).then(u=>s({valid:u,varFile:o}))}))},x=async a=>{var H;const{maxsize:r,maxlength:o,modelValue:s,onOversize:n,onAfterRead:u,readonly:F,disabled:h}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||h||F)return;const k=i=>i.filter(b=>b.file.size>O(r)?(n==null||n(S(b)),!1):!0),le=i=>{const b=Math.min(i.length,O(o)-s.length);return i.slice(0,b)};let c=Q(a).map(f);c=r!=null?k(c):c,c=o!=null?le(c):c;const te=await Promise.all(Y(c)),E=(await Promise.all(Z(te))).filter(({valid:i})=>i).map(({varFile:i})=>i);(H=e["onUpdate:modelValue"])==null||H.call(e,[...s,...E]),a.target.value="",E.forEach(i=>u==null?void 0:u(S(i)))},ee=async a=>{var h;const{disabled:r,readonly:o,modelValue:s,onBeforeRemove:n,onRemove:u}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||r||o||n&&!await n(a))return;const F=s.filter(k=>k!==a);u==null||u(a),N("onRemove"),(h=e["onUpdate:modelValue"])==null||h.call(e,F)},T=()=>e.modelValue.filter(a=>a.state==="success"),L=()=>e.modelValue.filter(a=>a.state==="error"),z=()=>e.modelValue.filter(a=>a.state==="loading"),M={getSuccess:T,getError:L,getLoading:z},N=a=>{me(()=>{const{validateTrigger:r,rules:o,modelValue:s}=e;P(r,a,o,s,M)})};let C=!1;const I=()=>B(e.rules,e.modelValue,M),A=()=>{var a;C=!0,(a=e["onUpdate:modelValue"])==null||a.call(e,[]),p()},ae={validate:I,resetValidation:p,reset:A};return g==null||g(ae),ve(()=>e.modelValue,()=>{!C&&N("onChange"),C=!1},{deep:!0}),{showPreview:d,currentPreview:R,errorMessage:y,maxlengthText:U,isHTMLSupportVideo:J,isHTMLSupportImage:G,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,preview:t,handleChange:x,handleRemove:ee,getSuccess:T,getError:L,getLoading:z,validate:I,resetValidation:p,reset:A}}}),ke={class:"var-uploader var--box"},Se={class:"var-uploader__file-list"},$e=["onClick"],je={class:"var-uploader__file-name"},De=["onClick"],Ue=["src","alt"],Te=["multiple","accept","capture","disabled"],Le=["src"];function ze(e,d,R,U,l,g){const y=$("var-icon"),P=$("var-form-details"),B=$("var-popup"),p=pe("ripple");return v(),m("div",ke,[V("div",Se,[(v(!0),m(fe,null,ge(e.modelValue,t=>q((v(),m("div",{class:j(["var-uploader__file var-elevation--2",[t.state==="loading"?"var-uploader--loading":null]]),key:t.id,onClick:f=>e.preview(t)},[V("div",je,ye(t.name||t.url),1),e.removable?(v(),m("div",{key:0,class:"var-uploader__file-close",onClick:he(f=>e.handleRemove(t),["stop"])},[w(y,{class:"var-uploader__file-close-icon","var-uploader-cover":"",name:"delete"})],8,De)):_("v-if",!0),t.cover?(v(),m("img",{key:1,class:"var-uploader__file-cover",style:be({objectFit:t.fit}),src:t.cover,alt:t.name},null,12,Ue)):_("v-if",!0),V("div",{class:j(["var-uploader__file-indicator",[t.state==="success"?"var-uploader--success":null,t.state==="error"?"var-uploader--error":null]])},null,2)],10,$e)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?q((v(),m("div",{key:0,class:j(["var--relative",[e.$slots.default?null:"var-uploader__action var-elevation--2",e.disabled||e.formDisabled?"var-uploader--disabled":null]])},[V("input",{class:"var-uploader__action-input",type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:d[0]||(d[0]=(...t)=>e.handleChange&&e.handleChange(...t))},null,40,Te),Ve(e.$slots,"default",{},()=>[w(y,{class:"var-uploader__action-icon","var-uploader-cover":"",name:"plus"})])],2)),[[p,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):_("v-if",!0)]),w(P,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),w(B,{class:"var-uploader__preview","var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":d[1]||(d[1]=t=>e.showPreview=t),onClosed:d[2]||(d[2]=t=>e.currentPreview=null)},{default:we(()=>{var t,f;return[e.currentPreview&&e.isHTMLSupportVideo((t=e.currentPreview)==null?void 0:t.url)?(v(),m("video",{key:0,class:"var-uploader__preview-video",playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(f=e.currentPreview)==null?void 0:f.url},null,8,Le)):_("v-if",!0)]}),_:1},8,["show"])])}var D=Pe(Fe,[["render",ze]]);D.install=function(e){e.component(D.name,D)};export{D as U};
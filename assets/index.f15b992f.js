var Ue=Object.defineProperty,Re=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var Pe=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var be=(e,n,d)=>n in e?Ue(e,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[n]=d,de=(e,n)=>{for(var d in n||(n={}))qe.call(n,d)&&be(e,d,n[d]);if(Pe)for(var d of Pe(n))Le.call(n,d)&&be(e,d,n[d]);return e},Ce=(e,n)=>Re(e,Te(n));import{A as Fe}from"./AppType.e6037b59.js";import{d as ae,r as V,b as E,y as me,e as z,o as M,c as A,i as g,j as I,a as x,t as $,T as re,q as ve,F as oe,k as pe,H as De,m as U,x as Ve,p as fe,n as Se,G as Q,a0 as We,l as ge,h as ze,$ as He}from"./vendor.efca09d3.js";import{d as o}from"./index.fa127700.js";import{B as we}from"./index.91fedec9.js";import{I as Ke}from"./index.4e162609.js";import{t as B,d as ie}from"./shared.61f3a471.js";import{p as H,u as Ge,a as Oe,_ as Je,b as Qe,c as Xe}from"./en-US.f8762106.js";import{_ as te}from"./elevation.49b7c3d2.js";import{d as Ze}from"./index.77fe3760.js";import{w as et,a as tt}from"./utils.77a9ee56.js";import"./index.b50b8baf.js";import"./index.45528475.js";import"./index.6a5b4e65.js";import"./components.7ab0cf36.js";import"./elements.a1d73ee7.js";var Ae=function(e,n){n.prototype.isSameOrBefore=function(d,l){return this.isSame(d,l)||this.isBefore(d,l)}},Be=function(e,n){n.prototype.isSameOrAfter=function(d,l){return this.isSame(d,l)||this.isAfter(d,l)}};function nt(e){return["date","month"].includes(e)}const he=[{index:"01"},{index:"02"},{index:"03"},{index:"04"},{index:"05"},{index:"06"},{index:"07"},{index:"08"},{index:"09"},{index:"10"},{index:"11"},{index:"12"}],le=[{index:"0"},{index:"1"},{index:"2"},{index:"3"},{index:"4"},{index:"5"},{index:"6"}],at={modelValue:{type:[String,Array]},type:{type:String,default:"date",validator:nt},allowedDates:{type:Function},color:{type:String},headerColor:{type:String},shadow:{type:Boolean,default:!1},firstDayOfWeek:{type:[String,Number],default:0},min:{type:String},max:{type:String},showCurrent:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},range:{type:Boolean,default:!1},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},rt=ae({name:"PanelHeader",components:{VarButton:we,VarIcon:Ke},props:{date:{type:Object,required:!0},type:{type:String,default:"date"},disabled:{type:Object,required:!0}},emits:["check-panel","check-date"],setup(e,{emit:n}){const d=V(!1),l=V(0),v=E(()=>{var P;const{date:i,type:m}=e,{previewMonth:t,previewYear:u}=i;if(m==="month")return B(u)+l.value;const c=(P=H.value.datePickerMonthDict)==null?void 0:P[t.index].name;return H.value.lang==="zh-CN"?`${u} ${c}`:`${c} ${u}`}),Y=i=>{n("check-date",i),d.value=i==="prev",l.value+=i==="prev"?-1:1};return me(()=>e.date,()=>{l.value=0}),{reverse:d,showDate:v,checkDate:Y}}}),ot={class:"var-picker-header"};function it(e,n,d,l,v,Y){const i=z("var-icon"),m=z("var-button");return M(),A("div",ot,[g(m,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.left,onClick:n[0]||(n[0]=t=>e.checkDate("prev"))},{default:I(()=>[g(i,{name:"chevron-left"})]),_:1},8,["disabled"]),x("div",{class:"var-picker-header__value",onClick:n[1]||(n[1]=t=>e.$emit("check-panel"))},[g(re,{name:e.reverse?"var-date-picker-reverse-translatex":"var-date-picker-translatex"},{default:I(()=>[(M(),A("div",{key:e.showDate},$(e.showDate),1))]),_:1},8,["name"])]),g(m,{round:"",text:"",style:{filter:"opacity(0.54)"},disabled:e.disabled.right,onClick:n[2]||(n[2]=t=>e.checkDate("next"))},{default:I(()=>[g(i,{name:"chevron-right"})]),_:1},8,["disabled"])])}var je=te(rt,[["render",it]]);o.extend(Ae);o.extend(Be);const lt=ae({name:"MonthPickerPanel",components:{VarButton:we,PanelHeader:je},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickYear:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-month"],setup(e,{emit:n}){const[d,l]=e.current.split("-"),v=V(!1),Y=V(0),i=ve({left:!1,right:!1}),m=E(()=>e.choose.chooseYear===e.preview.previewYear),t=E(()=>e.preview.previewYear===d),u=p=>{var y,b;return(b=(y=H.value.datePickerMonthDict)==null?void 0:y[p].abbr)!=null?b:""},c=p=>{const{preview:{previewYear:y},componentProps:{min:b,max:q}}=e;let R=!0,L=!0;const r=`${y}-${p}`;return q&&(R=o(r).isSameOrBefore(o(q),"month")),b&&(L=o(r).isSameOrAfter(o(b),"month")),R&&L},P=p=>{const{choose:{chooseMonths:y,chooseDays:b,chooseRangeMonth:q},componentProps:{type:R,range:L}}=e;if(L){if(!q.length)return!1;const r=o(p).isSameOrBefore(o(q[1]),"month"),D=o(p).isSameOrAfter(o(q[0]),"month");return r&&D}return R==="month"?y.includes(p):b.some(r=>r.includes(p))},j=p=>{const{choose:{chooseMonth:y},preview:{previewYear:b},componentProps:{allowedDates:q,color:R,multiple:L,range:r}}=e,D=`${b}-${p}`,S=()=>r||L?P(D):(y==null?void 0:y.index)===p&&m.value,C=(()=>c(p)?q?!q(D):!1:!0)(),_=()=>C?!0:r||L?!P(D):!m.value||(y==null?void 0:y.index)!==p,W=()=>t.value&&l===p&&e.componentProps.showCurrent?(r||L||m.value)&&C?!0:r||L?!P(D):m.value?(y==null?void 0:y.index)!==l:!0:!1,F=()=>C?"":W()?R!=null?R:"":S()?"":"var-date-picker-color-cover",K=F().startsWith("var-date-picker");return{disabled:C,outline:W(),text:_(),color:_()?"":R,textColor:K?"":F(),"var-date-picker-color-cover":K}},J=p=>{n("choose-month",p)},G=p=>{v.value=p==="prev",Y.value+=p==="prev"?-1:1,n("check-preview","year",p)};return me(()=>e.preview.previewYear,p=>{const{componentProps:{min:y,max:b}}=e;b&&(i.right=!o(`${B(p)+1}`).isSameOrBefore(o(b),"year")),y&&(i.left=!o(`${B(p)-1}`).isSameOrAfter(o(y),"year"))},{immediate:!0}),{pack:H,MONTH_LIST:he,reverse:v,panelKey:Y,panelBtnDisabled:i,buttonProps:j,getMonthAbbr:u,chooseMonth:J,checkDate:G}}}),st={class:"var-month-picker__panel"},ut={class:"var-month-picker__content"};function ct(e,n,d,l,v,Y){const i=z("panel-header"),m=z("var-button");return M(),A("div",st,[x("div",ut,[g(i,{type:"month",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickYear,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),g(re,{name:e.reverse?"var-date-picker-reverse-translatex":"var-date-picker-translatex"},{default:I(()=>[(M(),A("ul",{key:e.panelKey},[(M(!0),A(oe,null,pe(e.MONTH_LIST,t=>(M(),A("li",{key:t.index},[g(m,De({type:"primary",class:"var-month-picker__button","var-month-picker-cover":"",ripple:!1},de({},e.buttonProps(t.index)),{onClick:u=>e.chooseMonth(t)}),{default:I(()=>[U($(e.getMonthAbbr(t.index)),1)]),_:2},1040,["onClick"])]))),128))]))]),_:1},8,["name"])])])}var dt=te(lt,[["render",ct]]);const mt=ae({name:"YearPickerPanel",props:{preview:{type:String},componentProps:{type:Object,required:!0}},emits:["choose-year"],setup(e,{emit:n}){const d=E(()=>{const v=[],{preview:Y,componentProps:{max:i,min:m}}=e;if(!Y)return v;let t=[B(Y)+100,B(Y)-100];if(i){const u=o(i).format("YYYY-MM-D"),c=B(u.split("-")[0]);if(c<t[0]&&c>t[1]&&(t=[c,t[1]]),c<=t[1])return[c]}if(m){const u=o(m).format("YYYY-MM-D"),c=B(u.split("-")[0]);if(c<t[0]&&c>t[1]&&(t=[t[0],c]),c>=t[0])return[c]}for(let u=t[0];u>=t[1];u--)v.push(u);return v}),l=v=>{n("choose-year",v)};return Ve(()=>{const v=document.querySelector(".var-year-picker__panel--active");v==null||v.scrollIntoView({block:"center"})}),{yearList:d,chooseYear:l,toNumber:B}}}),vt={class:"var-year-picker__panel"},pt=["onClick"];function ft(e,n,d,l,v,Y){return M(),A("ul",vt,[(M(!0),A(oe,null,pe(e.yearList,i=>(M(),A("li",{key:i,class:fe([i===e.toNumber(e.preview)?"var-year-picker__panel--active":null]),style:Se({color:i===e.toNumber(e.preview)?e.componentProps.color:""}),onClick:m=>e.chooseYear(i)},$(i),15,pt))),128))])}var ht=te(mt,[["render",ft]]);o.extend(Ae);o.extend(Be);const yt=ae({name:"DayPickerPanel",components:{VarButton:we,PanelHeader:je},props:{choose:{type:Object,required:!0},preview:{type:Object,required:!0},current:{type:String,required:!0},clickMonth:{type:Function,required:!0},componentProps:{type:Object,required:!0}},emits:["check-preview","choose-day"],setup(e,{emit:n}){const[d,l,v]=e.current.split("-"),Y=V([]),i=V(!1),m=V(0),t=ve({left:!1,right:!1}),u=E(()=>e.preview.previewYear===d&&e.preview.previewMonth.index===l),c=E(()=>{var r;return e.choose.chooseYear===e.preview.previewYear&&((r=e.choose.chooseMonth)==null?void 0:r.index)===e.preview.previewMonth.index}),P=E(()=>{const r=le.findIndex(D=>D.index===e.componentProps.firstDayOfWeek);return r===-1||r===0?le:le.slice(r).concat(le.slice(0,r))}),j=r=>{var D,S;return(S=(D=H.value.datePickerWeekDict)==null?void 0:D[r].abbr)!=null?S:""},J=r=>r>0?r:"",G=()=>{const{preview:{previewMonth:r,previewYear:D}}=e,S=o(`${D}-${r.index}`).daysInMonth(),T=o(`${D}-${r.index}-01`).day(),C=P.value.findIndex(_=>_.index===`${T}`);Y.value=[...Array(C).fill(-1),...Array.from(Array(S+1).keys())].filter(_=>_)},p=()=>{const{preview:{previewYear:r,previewMonth:D},componentProps:{max:S,min:T}}=e;if(S){const C=`${r}-${B(D.index)+1}`;t.right=!o(C).isSameOrBefore(o(S),"month")}if(T){const C=`${r}-${B(D.index)-1}`;t.left=!o(C).isSameOrAfter(o(T),"month")}},y=r=>{const{preview:{previewYear:D,previewMonth:S},componentProps:{min:T,max:C}}=e;let _=!0,W=!0;const F=`${D}-${S.index}-${r}`;return C&&(_=o(F).isSameOrBefore(o(C),"day")),T&&(W=o(F).isSameOrAfter(o(T),"day")),_&&W},b=r=>{const{choose:{chooseDays:D,chooseRangeDay:S},componentProps:{range:T}}=e;if(T){if(!S.length)return!1;const C=o(r).isSameOrBefore(o(S[1]),"day"),_=o(r).isSameOrAfter(o(S[0]),"day");return C&&_}return D.includes(r)},q=r=>{if(r<0)return{text:!0,outline:!1,textColor:""};const{choose:{chooseDay:D},preview:{previewYear:S,previewMonth:T},componentProps:{allowedDates:C,color:_,multiple:W,range:F}}=e,K=`${S}-${T.index}-${r}`,se=()=>F||W?b(K):B(D)===r&&c.value,X=(()=>y(r)?C?!C(K):!1:!0)(),ke=()=>X?!0:F||W?!b(K):!c.value||B(D)!==r,ue=()=>u.value&&B(v)===r&&e.componentProps.showCurrent?(F||W||c.value)&&X?!0:F||W?!b(K):c.value?D!==v:!0:!1,ce=()=>X?"":ue()?_!=null?_:"":se()?"":"var-date-picker-color-cover",Z=ce().startsWith("var-date-picker");return{disabled:X,text:ke(),outline:ue(),textColor:Z?"":ce(),"var-date-picker-color-cover":Z}},R=r=>{i.value=r==="prev",m.value+=r==="prev"?-1:1,n("check-preview","month",r)},L=r=>{n("choose-day",r)};return Ve(()=>{G(),p()}),me(()=>e.preview,()=>{G(),p()}),{days:Y,reverse:i,panelKey:m,sortWeekList:P,panelBtnDisabled:t,filterDay:J,getDayAbbr:j,checkDate:R,chooseDay:L,buttonProps:q}}}),kt={class:"var-day-picker__panel"},Dt={class:"var-day-picker__content"},gt={class:"var-day-picker__head"},wt={class:"var-day-picker__body"};function $t(e,n,d,l,v,Y){const i=z("panel-header"),m=z("var-button");return M(),A("div",kt,[x("div",Dt,[g(i,{type:"day",date:e.preview,disabled:e.panelBtnDisabled,onCheckPanel:e.clickMonth,onCheckDate:e.checkDate},null,8,["date","disabled","onCheckPanel","onCheckDate"]),g(re,{name:e.reverse?"var-date-picker-reverse-translatex":"var-date-picker-translatex"},{default:I(()=>[(M(),A("div",{key:e.panelKey},[x("ul",gt,[(M(!0),A(oe,null,pe(e.sortWeekList,t=>(M(),A("li",{key:t.index},$(e.getDayAbbr(t.index)),1))),128))]),x("ul",wt,[(M(!0),A(oe,null,pe(e.days,(t,u)=>(M(),A("li",{key:u},[g(m,De({type:"primary",class:["var-day-picker__button",{"var-day-picker__button--usable":t>0}],"var-day-picker-cover":"",round:"",ripple:!1},de({},e.buttonProps(t)),{onClick:c=>e.chooseDay(t)}),{default:I(()=>[U($(e.filterDay(t)),1)]),_:2},1040,["class","onClick"])]))),128))])]))]),_:1},8,["name"])])])}var Yt=te(yt,[["render",$t]]);const Mt=ae({name:"VarDatePicker",components:{MonthPickerPanel:dt,YearPickerPanel:ht,DayPickerPanel:Yt},props:at,setup(e){const n=o().format("YYYY-MM-D"),[d,l]=n.split("-"),v=he.find(a=>a.index===l),Y=V(!1),i=V(!1),m=V(!0),t=V(),u=V(),c=V(),P=V(v),j=V(d),J=V(!1),G=V([]),p=V([]),y=V([]),b=V([]),q=ve({allowedDates:e.allowedDates,type:e.type,color:e.color,firstDayOfWeek:e.firstDayOfWeek,min:e.min,max:e.max,showCurrent:e.showCurrent,multiple:e.multiple,range:e.range}),R=E(()=>({chooseMonth:t.value,chooseYear:u.value,chooseDay:c.value,chooseMonths:G.value,chooseDays:p.value,chooseRangeMonth:y.value,chooseRangeDay:b.value})),L=E(()=>({previewMonth:P.value,previewYear:j.value})),r=E(()=>{var k,f;const{multiple:a,range:h}=e;if(h)return y.value.length?`${y.value[0]} ~ ${y.value[1]}`:"";let s="";return t.value&&(s=(f=(k=H.value.datePickerMonthDict)==null?void 0:k[t.value.index].name)!=null?f:""),a?`${G.value.length}${H.value.datePickerSelected}`:s}),D=E(()=>{var O,ee,Ye,Me;const{multiple:a,range:h}=e;if(h){const ne=b.value.map(Ee=>o(Ee).format("YYYY-MM-DD"));return ne.length?`${ne[0]} ~ ${ne[1]}`:""}if(a)return`${p.value.length}${H.value.datePickerSelected}`;if(!u.value||!t.value||!c.value)return"";const s=o(`${u.value}-${t.value.index}-${c.value}`).day(),k=le.find(ne=>ne.index===`${s}`),f=(ee=(O=H.value.datePickerWeekDict)==null?void 0:O[k.index].name)!=null?ee:"",w=(Me=(Ye=H.value.datePickerMonthDict)==null?void 0:Ye[t.value.index].name)!=null?Me:"",N=c.value.padStart(2,"0");return H.value.lang==="zh-CN"?`${t.value.index}-${N} ${f.slice(0,3)}`:`${f.slice(0,3)}, ${w.slice(0,3)} ${c.value}`}),S=E(()=>{var h,s,k,f,w;return{week:`${o(`${u.value}-${(h=t.value)==null?void 0:h.index}-${c.value}`).day()}`,year:(s=u.value)!=null?s:"",month:(f=(k=t.value)==null?void 0:k.index)!=null?f:"",date:(w=c.value)!=null?w:""}}),T=E(()=>R.value.chooseRangeDay.map(a=>o(a).format("YYYY-MM-DD"))),C=E(()=>u.value===j.value),_=E(()=>{var a;return((a=t.value)==null?void 0:a.index)===P.value.index}),W=a=>{a==="year"?Y.value=!0:a==="month"?i.value=!0:(Y.value=!1,i.value=!1)},F=(a,h)=>{var k,f;const s=h==="month"?y:b;if(s.value=m.value?[a,a]:[s.value[0],a],m.value=!m.value,m.value){const N=o(s.value[0]).isAfter(s.value[1])?[s.value[1],s.value[0]]:[...s.value];(k=e["onUpdate:modelValue"])==null||k.call(e,N),(f=e.onChange)==null||f.call(e,N)}},K=(a,h)=>{var N,O;const s=h==="month"?G:p,k=h==="month"?"YYYY-MM":"YYYY-MM-DD",f=s.value.map(ee=>o(ee).format(k)),w=f.findIndex(ee=>ee===a);w===-1?f.push(a):f.splice(w,1),(N=e["onUpdate:modelValue"])==null||N.call(e,f),(O=e.onChange)==null||O.call(e,f)},se=(a,h)=>!u.value||!t.value?!1:C.value?a==="month"?h.index<t.value.index:_.value?h<B(c.value):t.value.index>P.value.index:u.value>j.value,$e=a=>{const{readonly:h,range:s,multiple:k,onChange:f,"onUpdate:modelValue":w}=e;if(a<0||h)return;J.value=se("day",a);const N=`${j.value}-${P.value.index}-${a}`,O=o(N).format("YYYY-MM-DD");s?F(O,"day"):k?K(O,"day"):(w==null||w(O),f==null||f(O))},X=a=>{const{type:h,readonly:s,range:k,multiple:f,onChange:w,"onUpdate:modelValue":N}=e;if(J.value=se("month",a),h==="month"&&!s){const O=`${j.value}-${a.index}`;k?F(O,"month"):f?K(O,"month"):(N==null||N(O),w==null||w(O))}else P.value=a;i.value=!1},ke=a=>{j.value=`${a}`,Y.value=!1,i.value=!0},ue=(a,h)=>{const s=h==="prev"?-1:1;if(a==="year")j.value=`${B(j.value)+s}`;else{let k=B(P.value.index)+s;k<1&&(j.value=`${B(j.value)-1}`,k=12),k>12&&(j.value=`${B(j.value)+1}`,k=1),P.value=he.find(f=>B(f.index)===k)}},ce=()=>(e.multiple||e.range)&&!ie(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'),!1):!e.multiple&&!e.range&&ie(e.modelValue)?(console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'),!1):!0,Z=a=>ie(a)?!1:a==="Invalid Date"?(console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'),!0):!1,Ne=(a,h)=>{const s=h==="month"?y:b,k=h==="month"?"YYYY-MM":"YYYY-MM-D",f=a.map(O=>o(O).format(k)).slice(0,2);if(s.value.some(O=>Z(O)))return;s.value=f;const N=o(s.value[0]).isAfter(s.value[1]);s.value.length===2&&N&&(s.value=[s.value[1],s.value[0]])},Ie=(a,h)=>{const s=h==="month"?G:p,k=h==="month"?"YYYY-MM":"YYYY-MM-D",f=Array.from(new Set(a.map(w=>o(w).format(k))));s.value=f.filter(w=>w!=="Invalid Date")},xe=a=>{const h=o(a).format("YYYY-MM-D");if(Z(h))return;const[s,k,f]=h.split("-"),w=he.find(N=>N.index===k);t.value=w,u.value=s,c.value=f,P.value=w,j.value=s};return me(()=>e.modelValue,a=>{if(!(!ce()||Z(a)||!a))if(e.range){if(!ie(a))return;m.value=a.length!==1,Ne(a,e.type)}else if(e.multiple){if(!ie(a))return;Ie(a,e.type)}else xe(a)},{immediate:!0}),{reverse:J,currentDate:n,chooseMonth:t,chooseYear:u,chooseDay:c,previewYear:j,isYearPanel:Y,isMonthPanel:i,getMonthTitle:r,getDateTitle:D,getChoose:R,getPreview:L,componentProps:q,slotProps:S,formatRange:T,clickEl:W,getChooseDay:$e,getChooseMonth:X,getChooseYear:ke,checkPreview:ue}}}),Pt={class:"var-date-picker-body"};function bt(e,n,d,l,v,Y){const i=z("year-picker-panel"),m=z("month-picker-panel"),t=z("day-picker-panel");return M(),A("div",{class:fe(["var-date-picker",[e.shadow?"var-elevation--2":null]])},[x("div",{class:"var-date-picker-title",style:Se({background:e.headerColor||e.color})},[x("div",{class:fe(["var-date-picker-title__year",[e.isYearPanel?"var-date-picker-title__year--active":null]]),onClick:n[0]||(n[0]=u=>e.clickEl("year"))},[Q(e.$slots,"year",{year:e.previewYear},()=>[U($(e.previewYear),1)])],2),x("div",{class:fe(["var-date-picker-title__date",[e.isYearPanel?null:"var-date-picker-title__date--active",e.range?"var-date-picker-title__date--range":null]]),onClick:n[1]||(n[1]=u=>e.clickEl("date"))},[g(re,{name:e.multiple?"":e.reverse?"var-date-picker-reverse-translatey":"var-date-picker-translatey"},{default:I(()=>{var u,c,P;return[e.type==="month"?(M(),A("div",{key:`${e.chooseYear}${(u=e.chooseMonth)==null?void 0:u.index}`},[e.range?Q(e.$slots,"range",{key:0,choose:e.getChoose.chooseRangeMonth},()=>[U($(e.getMonthTitle),1)]):e.multiple?Q(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseMonths},()=>[U($(e.getMonthTitle),1)]):Q(e.$slots,"month",{key:2,month:(c=e.chooseMonth)==null?void 0:c.index,year:e.chooseYear},()=>[U($(e.getMonthTitle),1)])])):(M(),A("div",{key:`${e.chooseYear}${(P=e.chooseMonth)==null?void 0:P.index}${e.chooseDay}`},[e.range?Q(e.$slots,"range",{key:0,choose:e.formatRange},()=>[U($(e.getDateTitle),1)]):e.multiple?Q(e.$slots,"multiple",{key:1,choose:e.getChoose.chooseDays},()=>[U($(e.getDateTitle),1)]):Q(e.$slots,"date",We(De({key:2},e.slotProps)),()=>[U($(e.getDateTitle),1)])]))]}),_:3},8,["name"])],2)],4),x("div",Pt,[g(re,{name:"var-date-picker-panel-fade"},{default:I(()=>[e.isYearPanel?(M(),ge(i,{key:0,"component-props":e.componentProps,preview:e.previewYear,onChooseYear:e.getChooseYear},null,8,["component-props","preview","onChooseYear"])):!e.isYearPanel&&e.type==="month"||e.isMonthPanel?(M(),ge(m,{key:1,current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"click-year":()=>e.clickEl("year"),"component-props":e.componentProps,onChooseMonth:e.getChooseMonth,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","click-year","component-props","onChooseMonth","onCheckPreview"])):!e.isYearPanel&&!e.isMonthPanel&&e.type==="date"?(M(),ge(t,{key:2,current:e.currentDate,choose:e.getChoose,preview:e.getPreview,"component-props":e.componentProps,"click-month":()=>e.clickEl("month"),onChooseDay:e.getChooseDay,onCheckPreview:e.checkPreview},null,8,["current","choose","preview","component-props","click-month","onChooseDay","onCheckPreview"])):ze("v-if",!0)]),_:1})])],2)}var ye=te(Mt,[["render",bt]]);ye.install=function(e){e.component(ye.name,ye)};var Ct={basicUsage:"\u57FA\u672C\u4F7F\u7528",monthPicker:"\u6708\u4EFD\u9009\u62E9\u5668",multiple:"\u591A\u9009",range:"\u9009\u62E9\u8303\u56F4",dateLimit:"\u65E5\u671F\u9650\u5236",custom:"\u81EA\u5B9A\u4E49",year:"\u5E74",month:"\u6708",divider:"\u5E74"},Vt={basicUsage:"Basic Usage",monthPicker:"Month Picker",multiple:"Multiple",range:"Range",dateLimit:"Date Limit",custom:"Custom",year:"",month:"",divider:"-"};const{add:_e,use:St,pack:Ot,packs:Qt,merge:Xt}=Ge(),At=e=>{Xe(e),St(e)};Oe("zh-CN",Je);Oe("en-US",Qe);_e("zh-CN",Ct);_e("en-US",Vt);const Bt={name:"DatePickerExample",components:{AppType:Fe,VarDatePicker:ye},setup(){const e=ve({date:"2021-01",date1:"2021-04-08",date2:["",""],date3:["2021-02-01","2021-02-15"],date4:"2020-11-11",date5:"2021-02"}),n=v=>parseInt(v.split("-")[1],10)%2==1,d=v=>parseInt(v.split("-")[2],10)%2==1,l=v=>{console.log(v)};return et(At),tt(Ze),Ce(de({},He(e)),{pack:Ot,change:l,allowedDates:n,allowedDates1:d})}},jt={style:{"padding-bottom":"20px"}};function _t(e,n,d,l,v,Y){const i=z("app-type"),m=z("var-date-picker");return M(),A(oe,null,[x("div",null,[g(i,null,{default:I(()=>[U($(l.pack.basicUsage),1)]),_:1}),g(m,{modelValue:e.date1,"onUpdate:modelValue":n[0]||(n[0]=t=>e.date1=t)},null,8,["modelValue"])]),x("div",null,[g(i,null,{default:I(()=>[U($(l.pack.monthPicker),1)]),_:1}),g(m,{type:"month",modelValue:e.date,"onUpdate:modelValue":n[1]||(n[1]=t=>e.date=t),shadow:""},null,8,["modelValue"])]),x("div",null,[g(i,null,{default:I(()=>[U($(l.pack.multiple),1)]),_:1}),g(m,{type:"date",modelValue:e.date2,"onUpdate:modelValue":n[2]||(n[2]=t=>e.date2=t),multiple:""},null,8,["modelValue"])]),x("div",null,[g(i,null,{default:I(()=>[U($(l.pack.range),1)]),_:1}),g(m,{type:"date",modelValue:e.date3,"onUpdate:modelValue":n[3]||(n[3]=t=>e.date3=t),range:""},null,8,["modelValue"])]),x("div",null,[g(i,null,{default:I(()=>[U($(l.pack.dateLimit),1)]),_:1}),g(m,{type:"date",modelValue:e.date4,"onUpdate:modelValue":n[4]||(n[4]=t=>e.date4=t),min:"2020-10-15",max:"2021-01-15","allowed-dates":l.allowedDates1},null,8,["modelValue","allowed-dates"])]),x("div",jt,[g(i,null,{default:I(()=>[U($(l.pack.custom),1)]),_:1}),g(m,{type:"month","allowed-dates":l.allowedDates,modelValue:e.date5,"onUpdate:modelValue":n[5]||(n[5]=t=>e.date5=t),max:"2022-01",min:"2016-07",shadow:"","header-color":"purple",color:"#7bb872","first-day-of-week":"1",onChange:l.change},{year:I(({year:t})=>[x("span",null,$(t)+$(l.pack.year),1)]),month:I(({year:t,month:u})=>[x("span",null,$(t)+$(l.pack.divider)+$(u)+$(l.pack.month),1)]),_:1},8,["allowed-dates","modelValue","onChange"])])],64)}var Zt=te(Bt,[["render",_t]]);export{Zt as default};
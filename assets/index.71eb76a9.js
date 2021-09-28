import{M as D}from"./index.77e53e3e.js";import{R as ae}from"./index.20a388b7.js";import{I as L}from"./index.8c54a66a.js";import{C as A}from"./index.256b1d16.js";import{I as J}from"./index.1e7a5b5d.js";import{q as ie,r as g,b as $,y as K,d as N,e as le,o as m,c,i as T,a as w,O,m as k,h,a3 as Q,l as P,t as v,F as R,j as _,w as j,k as se,f as F}from"./vendor.cfbfc887.js";import{t as p,i as E}from"./shared.5973ad73.js";import{p as ne,u as te,a as G,_ as oe,b as ue,c as re}from"./en-US.0c801490.js";import{_ as de}from"./IconSfc.394079fb.js";const ve={current:{type:[Number,String]},size:{type:[Number,String],default:10},total:{type:[Number,String],default:0},maxShowBtnCount:{type:Number,default:3},disabled:{type:Boolean,default:!1},simple:{type:Boolean,default:!0},showSizeChanger:{type:Boolean,default:!0},showQuickJumper:{type:Boolean,default:!1},sizeOption:{type:Array,default:()=>[10,20,50,100]},showTotal:{type:Function},onChange:{type:Function}};const me=ie({name:"VarPagination",components:{[D.name]:D,[L.name]:L,[A.name]:A,[J.name]:J},directives:{Ripple:ae},props:ve,setup(e){const l=g(!1),M=g(""),y=g("1"),V=g(!1),S=g(!1),s=g(p(e.current)||1),r=g(p(e.size)||10),z=g([]),C=$(()=>Math.ceil(e.maxShowBtnCount/2)),o=$(()=>Math.ceil(p(e.total)/p(r.value))),i=$(()=>{const a=r.value*(s.value-1)+1,n=Math.min(r.value*s.value,p(e.total));return[a,n]}),f=$(()=>e.showTotal?e.showTotal(p(e.total),i.value):""),I=(a,n)=>E(a)?!1:n===1?V.value:S.value,X=(a,n)=>E(a)?"basic":n===1?"head":"tail",Y=(a,n)=>{a===s.value||e.disabled||(E(a)?s.value=a:a==="prev"?s.value>1&&(s.value-=1):a==="next"?s.value<o.value&&(s.value+=1):a==="..."&&(n===1?s.value=Math.max(s.value-e.maxShowBtnCount,1):s.value=Math.min(s.value+e.maxShowBtnCount,o.value)))},Z=()=>{e.disabled||(l.value=!0)},x=a=>{r.value=a,l.value=!1},H=a=>/^[1-9][0-9]*$/.test(a),ee=(a,n,B)=>{if(B.target.blur(),H(n)){let b=p(n);b>o.value&&(b=o.value,y.value=`${b}`),b!==s.value&&(s.value=b)}a==="quick"&&(M.value=""),a==="simple"&&!H(n)&&(y.value=`${s.value}`)};return K([()=>e.current,()=>e.size],([a,n])=>{s.value=p(a)||1,r.value=p(n||10)}),K([s,o],([a,n],[B,b])=>{var q;if(a>n){s.value=n;return}let u=[];const{maxShowBtnCount:d}=e,U=n-(d-C.value)-1;if(y.value=`${a}`,n-2>d){if(B===void 0||n!==b)for(let t=2;t<d+2;t++)u.push(t);if(a<=d&&a<U){u=[];for(let t=1;t<d+1;t++)u.push(t+1);V.value=!0,S.value=!1}if(a>d&&a<U){u=[];for(let t=1;t<d+1;t++)u.push(a+t-C.value);V.value=a===2&&d===1,S.value=!1}if(a>=U){u=[];for(let t=1;t<d+1;t++)u.push(n-(d-t)-1);V.value=!1,S.value=!0}u=[1,"...",...u,"...",n]}else for(let t=1;t<=n;t++)u.push(t);z.value=u,B!==void 0&&((q=e.onChange)==null||q.call(e,a,r.value))},{immediate:!0}),{pack:ne,current:s,menuVisible:l,size:r,pageCount:o,pageList:z,inputValue:M,simpleValue:y,totalText:f,getMode:X,isHideEllipsis:I,clickItem:Y,showMenu:Z,clickSize:x,setPage:ee}}}),pe={class:"var-pagination"},fe=["item-mode","onClick"],ge={key:4,class:"var-pagination__total"};function ce(e,l,M,y,V,S){const s=N("var-icon"),r=N("var-input"),z=N("var-cell"),C=N("var-menu"),o=le("ripple");return m(),c("ul",pe,[T(w("li",{class:k(["var-pagination__item var-pagination__prev",{"var-pagination__item-disabled":e.current<=1||e.disabled,"var-elevation--2":!e.simple}]),onClick:l[0]||(l[0]=i=>e.clickItem("prev"))},[O(e.$slots,"prev",{},()=>[h(s,{name:"chevron-left"})])],2),[[o,{disabled:e.current<=1||e.disabled}]]),e.simple?(m(),c("li",{key:0,class:k(["var-pagination__simple",{"var-pagination__item-disabled":e.disabled}])},[h(r,{modelValue:e.simpleValue,"onUpdate:modelValue":l[1]||(l[1]=i=>e.simpleValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[2]||(l[2]=i=>e.setPage("simple",e.simpleValue,i)),onKeydown:l[3]||(l[3]=Q(i=>e.setPage("simple",e.simpleValue,i),["enter"]))},null,8,["modelValue","disabled"]),P(" / "+v(e.pageCount),1)],2)):(m(!0),c(R,{key:1},_(e.pageList,(i,f)=>T((m(),c("li",{key:i+f,"item-mode":e.getMode(i,f),class:k(["var-pagination__item var-elevation--2",{"var-pagination__item-active":i===e.current,"var-pagination__item-hide":e.isHideEllipsis(i,f),"var-pagination__item-disabled":e.disabled}]),onClick:I=>e.clickItem(i,f)},[P(v(i),1)],10,fe)),[[o,{disabled:e.disabled}]])),128)),T(w("li",{class:k(["var-pagination__item var-pagination__next",{"var-pagination__item-disabled":e.current>=e.pageCount||e.disabled,"var-elevation--2":!e.simple}]),onClick:l[4]||(l[4]=i=>e.clickItem("next"))},[O(e.$slots,"next",{},()=>[h(s,{name:"chevron-right"})])],2),[[o,{disabled:e.current>=e.pageCount||e.disabled}]]),e.showSizeChanger?(m(),c("li",{key:2,class:k(["var-pagination__size",{"var-pagination__item-disabled":e.disabled}])},[h(C,{show:e.menuVisible,"onUpdate:show":l[6]||(l[6]=i=>e.menuVisible=i),"offset-x":-4},{menu:j(()=>[(m(!0),c(R,null,_(e.sizeOption,(i,f)=>T((m(),se(z,{class:k(["var-pagination__list",{"var-pagination__list-active":e.size===i}]),key:f,onClick:I=>e.clickSize(i)},{default:j(()=>[P(v(i)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1)]),_:2},1032,["class","onClick"])),[[o]])),128))]),default:j(()=>[w("div",{class:"var-pagination__size-open",style:{display:"flex"},onClick:l[5]||(l[5]=(...i)=>e.showMenu&&e.showMenu(...i))},[w("span",null,v(e.size)+v(e.pack.paginationItem)+" / "+v(e.pack.paginationPage),1),h(s,{name:"menu-down"})])]),_:1},8,["show"])],2)):F("v-if",!0),e.showQuickJumper&&!e.simple?(m(),c("li",{key:3,class:k(["var-pagination__quickly",{"var-pagination__item-disabled":e.disabled}])},[P(v(e.pack.paginationJump)+" ",1),h(r,{modelValue:e.inputValue,"onUpdate:modelValue":l[7]||(l[7]=i=>e.inputValue=i),disabled:e.disabled,"var-pagination-cover":"",onBlur:l[8]||(l[8]=i=>e.setPage("quick",e.inputValue,i)),onKeydown:l[9]||(l[9]=Q(i=>e.setPage("quick",e.inputValue,i),["enter"]))},null,8,["modelValue","disabled"])],2)):F("v-if",!0),e.totalText?(m(),c("li",ge,v(e.totalText),1)):F("v-if",!0)])}var we=de(me,[["render",ce]]),be={basicUsage:"\u57FA\u672C\u4F7F\u7528",showTotal:"\u663E\u793A\u603B\u6570",total:"\u5171",item:"\u6761",disabled:"\u7981\u7528",hideSize:"\u9690\u85CF size \u5207\u6362\u5668",pcTotal:"\u5171",current:"\u5F53\u524D"},ke={basicUsage:"Basic Usage",showTotal:"Show Total",total:"",item:"items",disabled:"Disabled",hideSize:"Hide Size Changer",pcTotal:"Total ",current:"current"};const{add:W,use:he,pack:Pe,packs:Me,merge:Ie}=te(),Ue=e=>{re(e),he(e)};G("zh-CN",oe);G("en-US",ue);W("zh-CN",be);W("en-US",ke);export{we as P,Pe as p,Ue as u};
import{B as m}from"./index.5e884d4f.js";import{I as f}from"./index.5334ab49.js";import{A as y}from"./AppType.51e8aa5c.js";import{S as _}from"./index.45838713.js";import{c as d}from"./index.40559b3e.js";import{u as C,a as k,_ as S,b,c as h,w as x,d as E}from"./en-US.c590db11.js";import{_ as A}from"./elevation.61c5e873.js";import{H as v,d as i,o as F,c as T,h as t,w as u,F as w,l as o,t as n}from"./vendor.7d218dee.js";import"./index.4c5d9efa.js";import"./components.81bffda1.js";import"./shared.5973ad73.js";import"./elements.412991f3.js";import"./zIndex.52d284ff.js";import"./lock.0e62da87.js";var j={themeColorButton:"\u4E3B\u9898\u8272\u6309\u94AE",defaultButton:"\u9ED8\u8BA4\u6309\u94AE",primaryButton:"\u4E3B\u8981\u6309\u94AE",infoButton:"\u4FE1\u606F\u6309\u94AE",successButton:"\u6210\u529F\u6309\u94AE",warningButton:"\u8B66\u544A\u6309\u94AE",dangerButton:"\u5371\u9669\u6309\u94AE",textButton:"\u6587\u5B57\u6309\u94AE",plainTextButton:"\u7EAF\u6587\u5B57\u6309\u94AE",outlineButton:"\u5916\u8FB9\u6846\u6309\u94AE",disabledStatus:"\u7981\u7528\u72B6\u6001",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",buttonSize:"\u6309\u94AE\u5C3A\u5BF8",normalButton:"\u5E38\u89C4\u6309\u94AE",smallButton:"\u5C0F\u578B\u6309\u94AE",miniButton:"\u8FF7\u4F60\u6309\u94AE",largeButton:"\u5927\u578B\u6309\u94AE",blockButton:"\u5757\u7EA7\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",backgroundTextColor:"\u80CC\u666F/\u6587\u5B57",linearGradientColor:"\u4F7F\u7528\u6E10\u53D8",roundButton:"\u5706\u5F62\u6309\u94AE",event:"\u6CE8\u518C\u4E8B\u4EF6",click:"\u70B9\u51FB",touchstart:"\u89E6\u6478",clickSuccess:"\u70B9\u51FB\u6210\u529F",touchstartSuccess:"\u89E6\u6478\u6210\u529F"},z={themeColorButton:"Theme Color Button",defaultButton:"Default Button",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Event",click:"Click",touchstart:"Touchstart",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success"};const{add:g,use:N,pack:s,packs:$,merge:tt}=C(),D=c=>{h(c),N(c)};k("zh-CN",S);k("en-US",b);g("zh-CN",j);g("en-US",z);const U={components:{[m.name]:m,[f.name]:f,AppType:y},setup(){const c=()=>{_.success(s.value.clickSuccess)},p=()=>{_.success(s.value.touchstartSuccess)};x(D);const B=d.touchmoveForbid;return E(a=>{a==="pc"&&(d.touchmoveForbid=!1)}),v(()=>{d.touchmoveForbid=B}),{pack:s,handleClick:c,handleTouchstart:p}}};function I(c,p,B,a,L,G){const l=i("app-type"),e=i("var-button"),r=i("var-icon");return F(),T(w,null,[t(l,null,{default:u(()=>[o(n(a.pack.themeColorButton),1)]),_:1}),t(e,null,{default:u(()=>[o(n(a.pack.defaultButton),1)]),_:1}),t(e,{type:"primary"},{default:u(()=>[o(n(a.pack.primaryButton),1)]),_:1}),t(e,{type:"info"},{default:u(()=>[o(n(a.pack.infoButton),1)]),_:1}),t(e,{type:"success"},{default:u(()=>[o(n(a.pack.successButton),1)]),_:1}),t(e,{type:"warning"},{default:u(()=>[o(n(a.pack.warningButton),1)]),_:1}),t(e,{type:"danger"},{default:u(()=>[o(n(a.pack.dangerButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.textButton),1)]),_:1}),t(e,{text:"",outline:"",type:"primary"},{default:u(()=>[o(n(a.pack.outlineButton),1)]),_:1}),t(e,{text:"",type:"primary"},{default:u(()=>[o(n(a.pack.plainTextButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:"",outline:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(e,{disabled:"",text:""},{default:u(()=>[o(n(a.pack.disabledStatus),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"primary"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"info","loading-type":"rect"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"success","loading-type":"disappear"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"danger","loading-type":"cube"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(e,{loading:"",type:"warning","loading-type":"wave"},{default:u(()=>[o(n(a.pack.loadingStatus),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.buttonSize),1)]),_:1}),t(e,{type:"primary"},{default:u(()=>[o(n(a.pack.normalButton),1)]),_:1}),t(e,{type:"success",size:"small"},{default:u(()=>[o(n(a.pack.smallButton),1)]),_:1}),t(e,{type:"warning",size:"mini"},{default:u(()=>[o(n(a.pack.miniButton),1)]),_:1}),t(e,{type:"danger",size:"large"},{default:u(()=>[o(n(a.pack.largeButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.blockButton),1)]),_:1}),t(e,{block:"",type:"primary"},{default:u(()=>[o(n(a.pack.blockButton),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.customColor),1)]),_:1}),t(e,{color:"#69dbaa","text-color":"#eee"},{default:u(()=>[o(n(a.pack.backgroundTextColor),1)]),_:1}),t(e,{color:"linear-gradient(to right, #69dbaa, #3a7afe)","text-color":"#fff"},{default:u(()=>[o(n(a.pack.linearGradientColor),1)]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.roundButton),1)]),_:1}),t(e,{type:"primary",round:""},{default:u(()=>[t(r,{name:"plus"})]),_:1}),t(e,{type:"info",round:""},{default:u(()=>[t(r,{name:"information"})]),_:1}),t(e,{type:"success",round:""},{default:u(()=>[t(r,{name:"check"})]),_:1}),t(e,{type:"warning",round:""},{default:u(()=>[t(r,{name:"warning"})]),_:1}),t(e,{type:"danger",round:""},{default:u(()=>[t(r,{name:"window-close"})]),_:1}),t(l,null,{default:u(()=>[o(n(a.pack.event),1)]),_:1}),t(e,{type:"success",onClick:a.handleClick},{default:u(()=>[o(n(a.pack.click),1)]),_:1},8,["onClick"]),t(e,{type:"success",onTouchstart:a.handleTouchstart},{default:u(()=>[o(n(a.pack.touchstart),1)]),_:1},8,["onTouchstart"])],64)}var ut=A(U,[["render",I],["__scopeId","data-v-c6da6986"]]);export{ut as default};

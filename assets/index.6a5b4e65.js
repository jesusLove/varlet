import{t as h}from"./shared.61f3a471.js";import{_ as b}from"./elevation.49b7c3d2.js";import{d as S,b as f,o as a,c as i,p as o,G as _,h as n,a as l,n as d,F as c,k as y,m as z,t as w}from"./vendor.efca09d3.js";function V(e){return["circle","wave","cube","rect","disappear"].includes(e)}function k(e){return["normal","mini","small","large"].includes(e)}const B={type:{type:String,default:"circle",validator:V},radius:{type:[String,Number]},size:{type:String,default:"normal",validator:k},color:{type:String,default:"currentColor"},description:{type:String},loading:{type:Boolean,default:!1}};const C=S({name:"VarLoading",props:B,setup(e,{slots:t}){const p={wave:5,cube:4,rect:8,disappear:3},v={mini:9,small:12,normal:15,large:18},g=f(()=>e.radius?h(e.radius):v[e.size]),m=f(()=>{var s;return((s=t.default)==null?void 0:s.call(t))?e.loading:!0});return{loadingTypeDict:p,getRadius:g,isShow:m}}}),L={class:"var-loading"},N={key:0,class:"var-loading__circle"},D=l("svg",{viewBox:"25 25 50 50"},[l("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),j=[D];function R(e,t,p,v,g,m){return a(),i("div",L,[e.$slots.default?(a(),i("div",{key:0,class:o(["var-loading__content",[e.loading?"var-loading__content--active":null]])},[_(e.$slots,"default")],2)):n("v-if",!0),e.isShow?(a(),i("div",{key:1,class:o(["var--box var-loading__body",[e.$slots.default?"var-loading__inside":null]])},[e.type==="circle"?(a(),i("div",N,[l("span",{class:"var-loading__circle-block",style:d({width:e.getRadius*2+"px",height:e.getRadius*2+"px",color:e.color})},j,4)])):n("v-if",!0),(a(!0),i(c,null,y(e.loadingTypeDict,(s,r)=>(a(),i(c,{key:r},[e.type===r?(a(),i("div",{key:0,class:o(`var-loading__${r} var-loading__${r}-${e.size}`)},[(a(!0),i(c,null,y(s,$=>(a(),i("div",{key:$+r,style:d({backgroundColor:e.color}),class:o(`var-loading__${r}-item var-loading__${r}-item-${e.size}`)},null,6))),128))],2)):n("v-if",!0)],64))),128)),e.$slots.description||e.description?(a(),i("div",{key:1,class:o(["var-loading__description",`var-loading__description--${e.size}`]),style:d({color:e.color})},[_(e.$slots,"description",{},()=>[z(w(e.description),1)])],6)):n("v-if",!0)],2)):n("v-if",!0)])}var u=b(C,[["render",R]]);u.install=function(e){e.component(u.name,u)};export{u as L,B as p};
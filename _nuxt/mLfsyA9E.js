import{f as _,R as x,l as f,k as n,S as A,p as I,o as w,c as k,v as N,g as m,a9 as E,X as L,V as P,aa as B,e as C,N as R}from"./B4pz-2oQ.js";import{i as j,u as U,a as W,c as v,m as O}from"./BjlQ4LrZ.js";const $=["src"],q=_({__name:"NuxtImg",props:j,emits:["load","error"],setup(d,{emit:t}){const s=d,l=x(),r=t,y=!1,p=U(),a=W(s),c=f(!1),o=f(),u=n(()=>p.getSizes(s.src,{...a.options.value,sizes:s.sizes,densities:s.densities,modifiers:{...a.modifiers.value,width:v(s.width),height:v(s.height)}})),z=n(()=>{const e={...a.attrs.value,"data-nuxt-img":""};return(!s.placeholder||c.value)&&(e.sizes=u.value.sizes,e.srcset=u.value.srcset),e}),g=n(()=>{let e=s.placeholder;if(e===""&&(e=!0),!e||c.value)return!1;if(typeof e=="string")return e;const i=Array.isArray(e)?e:typeof e=="number"?[e,e]:[10,10];return p(s.src,{...a.modifiers.value,width:i[0],height:i[1],quality:i[2]||50,blur:i[3]||3},a.options.value)}),h=n(()=>s.sizes?u.value.src:p(s.src,a.modifiers.value,a.options.value)),S=n(()=>g.value?g.value:h.value),b=A().isHydrating;return I(()=>{if(g.value){const e=new Image;h.value&&(e.src=h.value),s.sizes&&(e.sizes=u.value.sizes||"",e.srcset=u.value.srcset),e.onload=i=>{c.value=!0,r("load",i)},O("nuxt-image");return}o.value&&(o.value.complete&&b&&(o.value.getAttribute("data-error")?r("error",new Event("error")):r("load",new Event("load"))),o.value.onload=e=>{r("load",e)},o.value.onerror=e=>{r("error",e)})}),(e,i)=>(w(),k("img",N({ref_key:"imgEl",ref:o,class:s.placeholder&&!c.value?s.placeholderClass:void 0},{...m(y)?{onerror:"this.setAttribute('data-error', 1)"}:{},...z.value,...m(l)},{src:S.value}),null,16,$))}}),D=Object.assign(q,{__name:"NuxtImg"}),F=_({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(d){const t=d,s=n(()=>{var l;if((l=t.src)!=null&&l.startsWith("/")&&!t.src.startsWith("//")){const r=E(L(P().app.baseURL));if(r!=="/"&&!t.src.startsWith(r))return B(r,t.src)}return t.src});return(l,r)=>(w(),C(R(m(D)),{src:m(s),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),V=Object.assign(F,{__name:"ProseImg"});export{V as default};
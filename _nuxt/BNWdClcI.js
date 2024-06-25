import{g as y,n as h,l as u,u as z,R as S,s as w,S as A,V as v,a8 as I,X as N,a9 as C,o as _,f as x,h as f,N as L}from"./GRCun82i.js";import{u as P,a as R,p as g,m as k,b as B}from"./BCF-RApx.js";const E={...B,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},U=y({name:"NuxtImg",props:E,emits:["load","error"],setup:(t,l)=>{const s=P(),i=R(t),n=h(!1),a=h(),r=u(()=>s.getSizes(t.src,{...i.options.value,sizes:t.sizes,densities:t.densities,modifiers:{...i.modifiers.value,width:g(t.width),height:g(t.height)}})),p=u(()=>{const e={...i.attrs.value,"data-nuxt-img":""};return(!t.placeholder||n.value)&&(e.sizes=r.value.sizes,e.srcset=r.value.srcset),e}),c=u(()=>{let e=t.placeholder;if(e===""&&(e=!0),!e||n.value)return!1;if(typeof e=="string")return e;const o=Array.isArray(e)?e:typeof e=="number"?[e,e]:[10,10];return s(t.src,{...i.modifiers.value,width:o[0],height:o[1],quality:o[2]||50,blur:o[3]||3},i.options.value)}),d=u(()=>t.sizes?r.value.src:s(t.src,i.modifiers.value,i.options.value)),m=u(()=>c.value?c.value:d.value);if(t.preload){const e=Object.values(r.value).every(o=>o);z({link:[{rel:"preload",as:"image",nonce:t.nonce,...e?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:m.value},...typeof t.preload!="boolean"&&t.preload.fetchPriority?{fetchpriority:t.preload.fetchPriority}:{}}]})}const b=S().isHydrating;return w(()=>{if(c.value){const e=new Image;e.src=d.value,t.sizes&&(e.sizes=r.value.sizes||"",e.srcset=r.value.srcset),e.onload=o=>{n.value=!0,l.emit("load",o)},k("nuxt-image");return}a.value&&(a.value.complete&&b&&(a.value.getAttribute("data-error")?l.emit("error",new Event("error")):l.emit("load",new Event("load"))),a.value.onload=e=>{l.emit("load",e)},a.value.onerror=e=>{l.emit("error",e)})}),()=>A("img",{ref:a,...p.value,...l.attrs,class:t.placeholder&&!n.value?[t.placeholderClass]:void 0,src:m.value})}}),q=y({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const l=v().public.mdc.useNuxtImage?U:"img",s=t,i=u(()=>{var n;if((n=s.src)!=null&&n.startsWith("/")&&!s.src.startsWith("//")){const a=I(N(v().app.baseURL));if(a!=="/"&&!s.src.startsWith(a))return C(a,s.src)}return s.src});return(n,a)=>(_(),x(L(f(l)),{src:f(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{q as default};

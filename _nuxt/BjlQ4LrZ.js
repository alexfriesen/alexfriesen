import{as as _,a9 as A,aa as w,aH as E,n as M,aI as U,aJ as $,S as F,V as H,k as y}from"./B4pz-2oQ.js";function se(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}function oe(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function W(e){return t=>t?e[t]||t:e.missingValue}function R({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,o)=>`${s}=${o}`),t&&typeof t!="function"&&(t=W(t));const n=i||{};return Object.keys(n).forEach(s=>{typeof n[s]!="function"&&(n[s]=W(n[s]))}),(s={})=>Object.entries(s).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const c=n[a];return typeof c=="function"&&(d=c(s[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(r)}function l(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function B(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function D(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function k(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}async function C(e,t){return await L(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function L(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function T(e){const t={options:e},r=(n,s={})=>z(t,n,s),i=(n,s={},o={})=>r(n,{...o,modifiers:M(s,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(s,o,a)=>i(s,o,{...e.presets[n],...a});return i.options=e,i.getImage=r,i.getMeta=(n,s)=>G(t,n,s),i.getSizes=(n,s)=>Y(t,n,s),t.$img=i,i}async function G(e,t,r){const i=z(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await C(e,i.url)}function z(e,t,r){var c,h;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=J(e,r.provider||e.options.provider),s=V(e,r.preset);if(t=_(t)?t:A(t),!i.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const m=e.options.alias[g];m&&(t=w(m,t.slice(g.length)))}}if(i.validateDomains&&_(t)){const g=E(t).host;if(!e.options.domains.find(m=>m===g))return{url:t}}const o=M(r,s,n);o.modifiers={...o.modifiers};const a=o.modifiers.format;(c=o.modifiers)!=null&&c.width&&(o.modifiers.width=l(o.modifiers.width)),(h=o.modifiers)!=null&&h.height&&(o.modifiers.height=l(o.modifiers.height));const d=i.getImage(t,o,e);return d.format=d.format||a||"",d}function J(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function V(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Y(e,t,r){var S,q,b,v,x;const i=l((S=r.modifiers)==null?void 0:S.width),n=l((q=r.modifiers)==null?void 0:q.height),s=k(r.sizes),o=(b=r.densities)!=null&&b.trim()?B(r.densities.trim()):e.options.densities;D(o);const a=i&&n?n/i:0,d=[],c=[];if(Object.keys(s).length>=1){for(const f in s){const u=I(f,String(s[f]),n,a,e);if(u!==void 0){d.push({size:u.size,screenMaxWidth:u.screenMaxWidth,media:`(max-width: ${u.screenMaxWidth}px)`});for(const p of o)c.push({width:u._cWidth*p,src:j(e,t,r,u,p)})}}Z(d)}else for(const f of o){const u=Object.keys(s)[0];let p=u?I(u,String(s[u]),n,a,e):void 0;p===void 0&&(p={size:"",screenMaxWidth:0,_cWidth:(v=r.modifiers)==null?void 0:v.width,_cHeight:(x=r.modifiers)==null?void 0:x.height}),c.push({width:f,src:j(e,t,r,p,f)})}Q(c);const h=c[c.length-1],g=d.length?d.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,m=g?"w":"x",O=c.map(f=>`${f.src} ${f.width}${m}`).join(", ");return{sizes:g,srcset:O,src:h==null?void 0:h.src}}function I(e,t,r,i,n){const s=n.options.screens&&n.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!s||!a)return;o&&(a=Math.round(a/100*s));const d=i?Math.round(a*i):r;return{size:t,screenMaxWidth:s,_cWidth:a,_cHeight:d}}function j(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function Z(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function Q(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const X=R({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>$(e)+"_"+$(t)}),K=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=X(t)||"_";return r||(r=w(i.options.nuxt.baseURL,"/_ipx")),{url:w(r,n,U(e))}},ee=!0,te=!0,ie=Object.freeze(Object.defineProperty({__proto__:null,getImage:K,supportsAlias:te,validateDomains:ee},Symbol.toStringTag,{value:"Module"})),P={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};P.providers={ipxStatic:{provider:ie,defaults:{}}};const re=()=>{const e=H(),t=F();return t.$img||t._img||(t._img=T({...P,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))},N={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ae=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:l(e.width),height:l(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=re(),n=y(()=>({...e.modifiers,width:l(e.width),height:l(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},de={...N,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},ce={...N,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}};export{ae as a,N as b,l as c,oe as g,ce as i,se as m,de as p,re as u};
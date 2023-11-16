import{n as A,q as C,s as P,x as R,y as O,z as U,A as N,B as V,C as H,D as v,j as B,u as G,r as J,E as Y,G as M,I as Z,o as Q,c as X,b as _,w as j,d as I,t as W,a as p,J as K,F as ee,T as te,H as ie,i as ne,e as se,h as oe}from"./entry.40a1e332.js";async function re(e,t){return await ae(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function ae(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,n)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>n(s),i.src=e})}function ce(e=""){return e.split(/[?#]/).shift().split("/").pop().split(".").pop()}function q(e){return t=>t?e[t]||t:e.missingValue}function de({formatter:e,keyMap:t,joinWith:n="/",valueMap:i}={}){e||(e=(o,r)=>`${o}=${r}`),t&&typeof t!="function"&&(t=q(t));const s=i||{};return Object.keys(s).forEach(o=>{typeof s[o]!="function"&&(s[o]=q(s[o]))}),(o={})=>Object.entries(o).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=s[a];return typeof l=="function"&&(d=l(o[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(n)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function le(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const n of e.split(" ")){const i=parseInt(n.replace("x",""));i&&t.add(i)}return Array.from(t)}function ue(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function fe(e){const t={};if(typeof e=="string")for(const n of e.split(/[\s,]+/).filter(i=>i)){const i=n.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ge(e){const t={options:e},n=(s,o={})=>T(t,s,o),i=(s,o={},r={})=>n(s,{...r,modifiers:O(o,r.modifiers||{})}).url;for(const s in e.presets)i[s]=(o,r,a)=>i(o,r,{...e.presets[s],...a});return i.options=e,i.getImage=n,i.getMeta=(s,o)=>me(t,s,o),i.getSizes=(s,o)=>ve(t,s,o),t.$img=i,i}async function me(e,t,n){const i=T(e,t,{...n});return typeof i.getMeta=="function"?await i.getMeta():await re(e,i.url)}function T(e,t,n){var l,f;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=he(e,n.provider||e.options.provider),o=pe(e,n.preset);if(t=A(t)?t:C(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=P(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&A(t)){const m=R(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const r=O(n,o,s);r.modifiers={...r.modifiers};const a=r.modifiers.format;(l=r.modifiers)!=null&&l.width&&(r.modifiers.width=y(r.modifiers.width)),(f=r.modifiers)!=null&&f.height&&(r.modifiers.height=y(r.modifiers.height));const d=i.getImage(t,r,e);return d.format=d.format||a||"",d}function he(e,t){const n=e.options.providers[t];if(!n)throw new Error("Unknown provider: "+t);return n}function pe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ve(e,t,n){var x,c,S,b,$;const i=y((x=n.modifiers)==null?void 0:x.width),s=y((c=n.modifiers)==null?void 0:c.height),o=fe(n.sizes),r=(S=n.densities)!=null&&S.trim()?le(n.densities.trim()):e.options.densities;ue(r);const a=i&&s?s/i:0,d=[],l=[];if(Object.keys(o).length>=1){for(const u in o){const g=E(u,String(o[u]),s,a,e);if(g!==void 0){d.push({size:g.size,screenMaxWidth:g.screenMaxWidth,media:`(max-width: ${g.screenMaxWidth}px)`});for(const h of r)l.push({width:g._cWidth*h,src:F(e,t,n,g,h)})}}ye(d)}else for(const u of r){const g=Object.keys(o)[0];let h=E(g,String(o[g]),s,a,e);h===void 0&&(h={size:"",screenMaxWidth:0,_cWidth:(b=n.modifiers)==null?void 0:b.width,_cHeight:($=n.modifiers)==null?void 0:$.height}),l.push({width:u,src:F(e,t,n,h,u)})}_e(l);const f=l[l.length-1],m=d.length?d.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,w=m?"w":"x",z=l.map(u=>`${u.src} ${u.width}${w}`).join(", ");return{sizes:m,srcset:z,src:f==null?void 0:f.src}}function E(e,t,n,i,s){const o=s.options.screens&&s.options.screens[e]||parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let a=parseInt(t);if(!o||!a)return;r&&(a=Math.round(a/100*o));const d=i?Math.round(a*i):n;return{size:t,screenMaxWidth:o,_cWidth:a,_cHeight:d}}function F(e,t,n,i,s){return e.$img(t,{...n.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},n)}function ye(e){var n;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((n=e[i+1])==null?void 0:n.media)||""}function _e(e){e.sort((n,i)=>n.width-i.width);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.width===t&&e.splice(n,1),t=i.width}}const we=de({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>N(e)+"_"+N(t)}),xe=(e,{modifiers:t={},baseURL:n}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=we(t)||"_";return n||(n=P(i.options.nuxt.baseURL,"/_ipx")),{url:P(n,s,U(e))}},Se=!0,be=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,getImage:xe,supportsAlias:be,validateDomains:Se},Symbol.toStringTag,{value:"Module"})),D={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};D.providers={ipxStatic:{provider:$e,defaults:{}}};const L=()=>{const e=V(),t=H();return t.$img||t._img||(t._img=ge({...D,nuxt:{baseURL:e.app.baseURL}}))},k={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},ze=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),n=v(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=L(),s=v(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:n,modifiers:s}},je={...k,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},Ie=B({name:"NuxtPicture",props:je,emits:["load"],setup:(e,t)=>{var z,x;const n=L(),i=ze(e),s=v(()=>ce(e.src)),o=v(()=>["png","webp","gif","svg"].includes(s.value)),r=v(()=>e.legacyFormat?e.legacyFormat:o.value?"png":"jpeg"),a=v(()=>{var S,b;const c=((S=e.format)==null?void 0:S.split(","))||(s.value==="svg"?["svg"]:(b=n.options.format)!=null&&b.length?[...n.options.format]:["webp"]);return c[0]==="svg"?[{src:e.src}]:(c.includes(r.value)&&c.splice(c.indexOf(r.value),1),c.push(r.value),c.map($=>{const{srcset:u,sizes:g,src:h}=n.getSizes(e.src,{...i.options.value,sizes:e.sizes||n.options.screens,densities:e.densities,modifiers:{...i.modifiers.value,format:$}});return{src:h,type:`image/${$}`,sizes:g,srcset:u}}))}),d=v(()=>a.value.length-1);if(e.preload){const c={rel:"preload",as:"image",imagesrcset:a.value[0].srcset,nonce:e.nonce};(x=(z=a.value)==null?void 0:z[0])!=null&&x.sizes&&(c.imagesizes=a.value[0].sizes),G({link:[c]})}const l={...e.imgAttrs,"data-nuxt-pic":""};for(const c in t.attrs)c in k&&!(c in l)&&(l[c]=t.attrs[c]);const f=J(),w=H().isHydrating;return Y(()=>{f.value&&(f.value.complete&&w&&!f.value.getAttribute("data-error")&&t.emit("load",new Event("load")),f.value.onload=c=>{t.emit("load",c)})}),()=>M("picture",null,[...a.value.slice(0,-1).map(c=>M("source",{type:c.type,sizes:c.sizes,srcset:c.srcset})),M("img",{ref:f,...i.attrs.value,...l,src:a.value[d.value].src,sizes:a.value[d.value].sizes,srcset:a.value[d.value].srcset})])}}),We={class:"flex flex-col md:flex-row items-center justify-center p-8 shadow rounded-xl bg-gray-800"},Me={class:"pt-6 md:px-8 text-center md:text-left space-y-4"},Pe={class:"font-medium"},Ae={class:"text-gray-200"},Ne=p("br",null,null,-1),qe={class:"py-2"},Ee={class:"font-normal flex justify-evenly p-4"},Oe=B({__name:"index",setup(e){const t=Z();return(n,i)=>{const s=te,o=ie,r=Ie,a=ne,d=se,l=oe;return Q(),X(ee,null,[_(o,null,{default:j(()=>[_(s,null,{default:j(()=>[I(W(n.$t("navigation.home")),1)]),_:1})]),_:1}),p("div",null,[_(l,{class:"relative"},{default:j(()=>[p("figure",We,[_(r,{alt:n.$t("home.picture"),preload:"",width:"300",height:"300",densities:"x1 x2",sizes:"100vw sm:120px md:300px",format:"webp,avif",src:"images/me600.jpg",class:"relative aspect-square rounded-full overflow-hidden border-4 border-gray-200 shadow-lg h-32 md:w-48 md:h-auto"},null,8,["alt"]),p("div",Me,[p("figcaption",Pe,[p("p",Ae,[I(W(n.$t("home.welcome")),1),Ne,I(" "+W(n.$t("home.intro")),1)]),p("div",qe,[p("div",Ee,[_(d,{class:"inline-flex gap-1 items-center justify-evenly px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200",to:K(t)("/contact")},{default:j(()=>[_(a,{name:"uil:envelope",class:"w-6 h-6"}),I(" "+W(n.$t("navigation.contact")),1)]),_:1},8,["to"])])])])])])]),_:1})])],64)}}});export{Oe as default};

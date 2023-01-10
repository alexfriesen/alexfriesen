import{l as V,_ as r,e as s,i as m,a as j,C as N,p as E,D as $,E as P,F as k,u as B,G as w,v,q as O,H as C,I as L,J as A,K as S,L as x,d as o,t as M,M as z,f as H,N as q}from"./entry.d5eaa76d.js";import{u as F}from"./asyncData.b13e6aa0.js";import{h as g,e as U,j as Q}from"./ContentQuery.653f7bf0.js";import{w as T,s as G,u as W,a as J}from"./utils.8fefc855.js";import"./ContentDoc.02c74018.js";import"./ContentList.0e2538d4.js";import"./ContentRenderer.6b52fadf.js";import"./ContentRendererMarkdown.483b219d.js";import"./ContentSlot.843945b4.js";import"./DocumentDrivenEmpty.3ee2350f.js";import"./DocumentDrivenNotFound.06654c95.js";import"./Markdown.68475f8d.js";import"./ProseCode.37f361d2.js";import"./Icon.vue.1d700334.js";import{u as K}from"./composables.8bb57375.js";import"./_commonjsHelpers.fed2a411.js";const Y=async t=>{var i,l;const{content:e}=V().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((l=(i=n.where)==null?void 0:i.find(_=>_._locale))!=null&&l._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const u=e.experimental.stripQueryParameters?T(`/navigation/${`${g(n)}.${e.integrity}`}/${U(n)}.json`):T(`/navigation/${g(n)}.${e.integrity}.json`);if(G())return(await r(()=>import("./client-db.205e82db.js"),["./client-db.205e82db.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./utils.8fefc855.js","./ContentQuery.653f7bf0.js","./asyncData.b13e6aa0.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(_=>_.generateNavigation))(n);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(n),previewToken:W("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={},X=s({props:{name:String},async setup(t,e){const n=await I[t.name]().then(u=>u.default||u);return()=>m(n,{},e.slots)}}),Z=s({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const n=k("_route"),u=n===j()?N():n,a=E(()=>{var i,l;return(l=(i=B(t.name))!=null?i:u.meta.layout)!=null?l:"default"});return()=>{var d;const i=a.value&&a.value in I,l=(d=u.meta.layoutTransition)!=null?d:$;return P(w,i&&l,{default:()=>P(X,i&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const u=v(null),a=O();return C(i=>{if(!a.isHydrating)return n("error",i),u.value=i,!1}),()=>{var i,l;return u.value?(i=e.error)==null?void 0:i.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),ot=s({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const i=e.fallback||e.placeholder;if(i)return i();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,n,l)}}}),c=new WeakMap;function nt(t){if(c.has(t))return c.get(t);const e={...t};return e.render?e.render=(n,...u)=>{var a;if(n.mounted$){const i=t.render(n,...u);return i.children===null||typeof i.children=="string"?S(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):m(i)}else return m("div",(a=n.$attrs)!=null?a:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,u)=>{var i;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,n,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const _=l(...d);return _.children===null||typeof _.children=="string"?S(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",u.attrs)})},c.set(t,e),e}const it=Object.freeze(Object.defineProperty({__proto__:null,default:ot,createClientOnly:nt},Symbol.toStringTag,{value:"Module"})),at=s({name:"DevOnly",setup(t,e){return()=>null}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=s({name:"ServerPlaceholder",render(){return A("div")}}),_t=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=dt({duration:t.duration,throttle:t.throttle}),u=O();return u.hook("page:start",n.start),u.hook("page:finish",n.finish),x(()=>n.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function dt(t){const e=v(0),n=v(!1),u=E(()=>1e4/t.duration);let a=null,i=null;function l(){_(),e.value=0,n.value=!0,t.throttle?i=setTimeout(y,t.throttle):y()}function d(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(i),a=null,i=null}function D(b){e.value=Math.min(100,e.value+b)}function R(){_(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function y(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:n,start:l,finish:d,clear:_}}const mt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"})),pt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,u)=>(K(()=>t({...pt(n),...u.attrs},u)),()=>{var a,i;return e?(i=(a=u.slots).default)==null?void 0:i.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ft=s({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const n={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return u&&(n.children=u),{noscript:[n]}})}),ht=s({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),vt=s({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ct=s({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,i;return{title:((i=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:i.children)||null}})}),gt=s({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Et=s({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,i,l;const n={...t},u=(l=(i=(a=e.default)==null?void 0:a.call(e))==null?void 0:i[0])==null?void 0:l.children;return u&&(n.children=u),{style:[n]}})}),yt=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,u;return(u=(n=e.slots).default)==null?void 0:u.call(n)}}),Pt=s({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),St=s({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ft,Link:ht,Base:vt,Title:ct,Meta:gt,Style:Et,Head:yt,Html:Pt,Body:St},Symbol.toStringTag,{value:"Module"}));o(()=>r(()=>import("./entry.d5eaa76d.js").then(t=>t.ad),["./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./link-button.8d8337bc.js"),["./link-button.8d8337bc.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./navigation.089a11c7.js"),["./navigation.089a11c7.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./tag.0e1dbb8e.js"),["./tag.0e1dbb8e.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentDoc.02c74018.js"),["./ContentDoc.02c74018.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./composables.8bb57375.js","./ContentRenderer.6b52fadf.js","./ContentRendererMarkdown.483b219d.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.653f7bf0.js","./asyncData.b13e6aa0.js","./utils.8fefc855.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentList.0e2538d4.js"),["./ContentList.0e2538d4.js","./ContentQuery.653f7bf0.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./asyncData.b13e6aa0.js","./utils.8fefc855.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>Ot),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentQuery.653f7bf0.js").then(t=>t.C),["./ContentQuery.653f7bf0.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./asyncData.b13e6aa0.js","./utils.8fefc855.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRenderer.6b52fadf.js"),["./ContentRenderer.6b52fadf.js","./ContentRendererMarkdown.483b219d.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentRendererMarkdown.483b219d.js"),["./ContentRendererMarkdown.483b219d.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ContentSlot.843945b4.js"),["./ContentSlot.843945b4.js","./utils.8fefc855.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenEmpty.3ee2350f.js"),["./DocumentDrivenEmpty.3ee2350f.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./DocumentDrivenNotFound.06654c95.js"),["./DocumentDrivenNotFound.06654c95.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Markdown.68475f8d.js"),["./Markdown.68475f8d.js","./ContentSlot.843945b4.js","./utils.8fefc855.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseA.edf3bbc4.js"),["./ProseA.edf3bbc4.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseBlockquote.16733bdf.js"),["./ProseBlockquote.16733bdf.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCode.37f361d2.js"),["./ProseCode.37f361d2.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseCodeInline.903d1caa.js"),["./ProseCodeInline.903d1caa.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseEm.d32a3684.js"),["./ProseEm.d32a3684.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH1.9f3fc763.js"),["./ProseH1.9f3fc763.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH2.80054648.js"),["./ProseH2.80054648.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH3.39cced74.js"),["./ProseH3.39cced74.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH4.37cfe67f.js"),["./ProseH4.37cfe67f.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH5.71a9157e.js"),["./ProseH5.71a9157e.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseH6.4367b164.js"),["./ProseH6.4367b164.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseHr.20d40374.js"),["./ProseHr.20d40374.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseImg.a40c3123.js"),["./ProseImg.a40c3123.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseLi.0e30be5f.js"),["./ProseLi.0e30be5f.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseOl.b8db6b9f.js"),["./ProseOl.b8db6b9f.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseP.22f7267e.js"),["./ProseP.22f7267e.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseStrong.6c861960.js"),["./ProseStrong.6c861960.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTable.fe9912e9.js"),["./ProseTable.fe9912e9.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTbody.865ba8e9.js"),["./ProseTbody.865ba8e9.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTd.b0dfe9f2.js"),["./ProseTd.b0dfe9f2.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTh.95b39d71.js"),["./ProseTh.95b39d71.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseThead.747e7a2b.js"),["./ProseThead.747e7a2b.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseTr.ee0c7608.js"),["./ProseTr.ee0c7608.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./ProseUl.7e9899ad.js"),["./ProseUl.7e9899ad.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./welcome.fa8cd004.js"),["./welcome.fa8cd004.js","./composables.8bb57375.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./asyncData.b13e6aa0.js","./ContentQuery.653f7bf0.js","./utils.8fefc855.js","./ContentDoc.02c74018.js","./ContentRenderer.6b52fadf.js","./ContentRendererMarkdown.483b219d.js","./_commonjsHelpers.fed2a411.js","./ContentList.0e2538d4.js","./ContentSlot.843945b4.js","./DocumentDrivenEmpty.3ee2350f.js","./DocumentDrivenNotFound.06654c95.js","./Markdown.68475f8d.js","./ProseCode.37f361d2.js","./ProseCode.e63e49c6.css","./Icon.vue.1d700334.js","./Icon.bbc2cf5c.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>_t),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.d5eaa76d.js").then(t=>t.ab),["./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./Icon.f85c53fd.js"),["./Icon.f85c53fd.js","./entry.d5eaa76d.js","./entry.6ae9cb15.css","./Icon.vue.1d700334.js","./Icon.bbc2cf5c.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>import("./entry.d5eaa76d.js").then(t=>t.ac),["./entry.d5eaa76d.js","./entry.6ae9cb15.css"],import.meta.url).then(t=>t.default||t));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));o(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Tt=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),n=E(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&z("dd-navigation").value){const{navigation:a}=J();return{navigation:a}}const{data:u}=await F(`content-navigation-${g(n.value)}`,()=>Y(n.value));return{navigation:u}},render(t){const e=H(),{navigation:n}=t,u=l=>m(q,{to:l._path},()=>l.title),a=(l,d)=>m("ul",d?{"data-level":d}:null,l.map(_=>_.children?m("li",null,[u(_),a(_.children,d+1)]):m("li",null,u(_)))),i=l=>a(l,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):i(n)}}),Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"}));export{Tt as default};

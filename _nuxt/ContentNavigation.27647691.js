import{l as b,_ as r,e as s,i as m,a as j,C as N,p as E,D as $,E as P,F as k,u as B,G as w,v,q as O,H as C,I as L,J as A,K as S,L as x,d as n,t as M,M as z,f as H,N as q}from"./entry.0612afb5.js";import{u as F}from"./asyncData.cb64ad2e.js";import{h as g,e as U,j as Q}from"./ContentQuery.3290d1b5.js";import{w as T,s as G,u as W,a as J}from"./utils.114bd66c.js";import"./ContentDoc.1cb6d089.js";import"./ContentList.14fa4184.js";import"./ContentRenderer.6c20e127.js";import"./ContentRendererMarkdown.fe41be0d.js";import"./ContentSlot.ea599ce9.js";import"./DocumentDrivenEmpty.1514dcee.js";import"./DocumentDrivenNotFound.e4fbfb46.js";import"./Markdown.f99b2afc.js";import"./ProseCode.869f5397.js";import{u as K}from"./composables.1f8688ce.js";import"./_commonjsHelpers.fed2a411.js";const Y=async t=>{var i,l;const{content:e}=b().public,o=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((l=(i=o.where)==null?void 0:i.find(_=>_._locale))!=null&&l._locale||(o.where=o.where||[],o.where.push({_locale:e.defaultLocale})));const u=e.experimental.stripQueryParameters?T(`/navigation/${`${g(o)}.${e.integrity}`}/${U(o)}.json`):T(`/navigation/${g(o)}.${e.integrity}.json`);if(G())return(await r(()=>import("./client-db.aa77fc9d.js"),["./client-db.aa77fc9d.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./utils.114bd66c.js","./ContentQuery.3290d1b5.js","./asyncData.cb64ad2e.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(_=>_.generateNavigation))(o);const a=await $fetch(u,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:Q(o),previewToken:W("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const I={},X=s({props:{name:String},async setup(t,e){const o=await I[t.name]().then(u=>u.default||u);return()=>m(o,{},e.slots)}}),Z=s({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,e){const o=k("_route"),u=o===j()?N():o,a=E(()=>{var i,l;return(l=(i=B(t.name))!=null?i:u.meta.layout)!=null?l:"default"});return()=>{var d;const i=a.value&&a.value in I,l=(d=u.meta.layoutTransition)!=null?d:$;return P(w,i&&l,{default:()=>P(X,i&&{key:a.value,name:a.value,hasTransition:void 0},e.slots).default()}).default()}}}),tt=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),et=s({emits:{error(t){return!0}},setup(t,{slots:e,emit:o}){const u=v(null),a=O();return C(i=>{if(!a.isHydrating)return o("error",i),u.value=i,!1}),()=>{var i,l;return u.value?(i=e.error)==null?void 0:i.call(e,{error:u}):(l=e.default)==null?void 0:l.call(e)}}}),rt=Object.freeze(Object.defineProperty({__proto__:null,default:et},Symbol.toStringTag,{value:"Module"})),nt=s({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:o}){const u=v(!1);return L(()=>{u.value=!0}),a=>{var _;if(u.value)return(_=e.default)==null?void 0:_.call(e);const i=e.fallback||e.placeholder;if(i)return i();const l=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,o,l)}}}),c=new WeakMap;function ot(t){if(c.has(t))return c.get(t);const e={...t};return e.render?e.render=(o,...u)=>{var a;if(o.mounted$){const i=t.render(o,...u);return i.children===null||typeof i.children=="string"?S(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):m(i)}else return m("div",(a=o.$attrs)!=null?a:o._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(o,u)=>{var i;const a=v(!1);return L(()=>{a.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,o,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...d)=>{if(a.value){const _=l(...d);return _.children===null||typeof _.children=="string"?S(_.type,_.props,_.children,_.patchFlag,_.dynamicProps,_.shapeFlag):m(_)}else return m("div",u.attrs)})},c.set(t,e),e}const it=Object.freeze(Object.defineProperty({__proto__:null,default:nt,createClientOnly:ot},Symbol.toStringTag,{value:"Module"})),at=s({name:"DevOnly",setup(t,e){return()=>null}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),lt=s({name:"ServerPlaceholder",render(){return A("div")}}),_t=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),st=s({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const o=dt({duration:t.duration,throttle:t.throttle}),u=O();return u.hook("page:start",o.start),u.hook("page:finish",o.finish),x(()=>o.clear),()=>m("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${t.height}px`,opacity:o.isLoading.value?1:0,background:t.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function dt(t){const e=v(0),o=v(!1),u=E(()=>1e4/t.duration);let a=null,i=null;function l(){_(),e.value=0,o.value=!0,t.throttle?i=setTimeout(y,t.throttle):y()}function d(){e.value=100,R()}function _(){clearInterval(a),clearTimeout(i),a=null,i=null}function D(V){e.value=Math.min(100,e.value+V)}function R(){_(),setTimeout(()=>{o.value=!1,setTimeout(()=>{e.value=0},400)},500)}function y(){a=setInterval(()=>{D(u.value)},100)}return{progress:e,isLoading:o,start:l,finish:d,clear:_}}const mt=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"})),pt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(o,u)=>(K(()=>t({...pt(o),...u.attrs},u)),()=>{var a,i;return e?(i=(a=u.slots).default)==null?void 0:i.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ft=s({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const o={...t},u=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:i})=>i).map(({children:i})=>i).join("");return u&&(o.children=u),{noscript:[o]}})}),ht=s({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),vt=s({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),ct=s({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var u,a,i;return{title:((i=(a=(u=e.default)==null?void 0:u.call(e))==null?void 0:a[0])==null?void 0:i.children)||null}})}),gt=s({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),Et=s({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,i,l;const o={...t},u=(l=(i=(a=e.default)==null?void 0:a.call(e))==null?void 0:i[0])==null?void 0:l.children;return u&&(o.children=u),{style:[o]}})}),yt=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,u;return(u=(o=e.slots).default)==null?void 0:u.call(o)}}),Pt=s({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),St=s({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),p=Object.freeze(Object.defineProperty({__proto__:null,NoScript:ft,Link:ht,Base:vt,Title:ct,Meta:gt,Style:Et,Head:yt,Html:Pt,Body:St},Symbol.toStringTag,{value:"Module"}));n(()=>r(()=>import("./entry.0612afb5.js").then(t=>t.a9),["./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./link-button.53a1c707.js"),["./link-button.53a1c707.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./navigation.ab7f4271.js"),["./navigation.ab7f4271.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./tag.f7b58aa2.js"),["./tag.f7b58aa2.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentDoc.1cb6d089.js"),["./ContentDoc.1cb6d089.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./composables.1f8688ce.js","./ContentRenderer.6c20e127.js","./ContentRendererMarkdown.fe41be0d.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.3290d1b5.js","./asyncData.cb64ad2e.js","./utils.114bd66c.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentList.14fa4184.js"),["./ContentList.14fa4184.js","./ContentQuery.3290d1b5.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./asyncData.cb64ad2e.js","./utils.114bd66c.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>Ot),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentQuery.3290d1b5.js").then(t=>t.C),["./ContentQuery.3290d1b5.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./asyncData.cb64ad2e.js","./utils.114bd66c.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRenderer.6c20e127.js"),["./ContentRenderer.6c20e127.js","./ContentRendererMarkdown.fe41be0d.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentRendererMarkdown.fe41be0d.js"),["./ContentRendererMarkdown.fe41be0d.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ContentSlot.ea599ce9.js"),["./ContentSlot.ea599ce9.js","./utils.114bd66c.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenEmpty.1514dcee.js"),["./DocumentDrivenEmpty.1514dcee.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./DocumentDrivenNotFound.e4fbfb46.js"),["./DocumentDrivenNotFound.e4fbfb46.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./Markdown.f99b2afc.js"),["./Markdown.f99b2afc.js","./ContentSlot.ea599ce9.js","./utils.114bd66c.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseA.66c18bc8.js"),["./ProseA.66c18bc8.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseBlockquote.7da5a8e4.js"),["./ProseBlockquote.7da5a8e4.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCode.869f5397.js"),["./ProseCode.869f5397.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseCodeInline.e9abf30e.js"),["./ProseCodeInline.e9abf30e.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseEm.f66185d6.js"),["./ProseEm.f66185d6.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH1.bf34afa8.js"),["./ProseH1.bf34afa8.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH2.e6524358.js"),["./ProseH2.e6524358.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH3.b3335a62.js"),["./ProseH3.b3335a62.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH4.99f72519.js"),["./ProseH4.99f72519.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH5.ef329eac.js"),["./ProseH5.ef329eac.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseH6.75a14057.js"),["./ProseH6.75a14057.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseHr.4948c950.js"),["./ProseHr.4948c950.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseImg.f19807c4.js"),["./ProseImg.f19807c4.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseLi.21fd8e45.js"),["./ProseLi.21fd8e45.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseOl.7d9d5970.js"),["./ProseOl.7d9d5970.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseP.e1d09f4f.js"),["./ProseP.e1d09f4f.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseStrong.aa133d89.js"),["./ProseStrong.aa133d89.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTable.e1b231f6.js"),["./ProseTable.e1b231f6.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTbody.6fbf6320.js"),["./ProseTbody.6fbf6320.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTd.e1960aaa.js"),["./ProseTd.e1960aaa.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTh.6ee34749.js"),["./ProseTh.6ee34749.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseThead.75eb821e.js"),["./ProseThead.75eb821e.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseTr.5422427f.js"),["./ProseTr.5422427f.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./ProseUl.f7474c63.js"),["./ProseUl.f7474c63.js","./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./welcome.330d6a83.js"),["./welcome.330d6a83.js","./composables.1f8688ce.js","./entry.0612afb5.js","./entry.6f21e4dc.css","./asyncData.cb64ad2e.js","./ContentQuery.3290d1b5.js","./utils.114bd66c.js","./ContentDoc.1cb6d089.js","./ContentRenderer.6c20e127.js","./ContentRendererMarkdown.fe41be0d.js","./_commonjsHelpers.fed2a411.js","./ContentList.14fa4184.js","./ContentSlot.ea599ce9.js","./DocumentDrivenEmpty.1514dcee.js","./DocumentDrivenNotFound.e4fbfb46.js","./Markdown.f99b2afc.js","./ProseCode.869f5397.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>tt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>it),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>ut),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>_t),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.0612afb5.js").then(t=>t.a7),["./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>mt),void 0,import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.0612afb5.js").then(t=>t.aa),["./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>import("./entry.0612afb5.js").then(t=>t.a8),["./entry.0612afb5.js","./entry.6f21e4dc.css"],import.meta.url).then(t=>t.default||t));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.NoScript));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Link));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Base));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Title));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Meta));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Style));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Head));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Html));n(()=>r(()=>Promise.resolve().then(()=>p),void 0,import.meta.url).then(t=>t.Body));const Tt=s({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=M(t),o=E(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!o.value&&z("dd-navigation").value){const{navigation:a}=J();return{navigation:a}}const{data:u}=await F(`content-navigation-${g(o.value)}`,()=>Y(o.value));return{navigation:u}},render(t){const e=H(),{navigation:o}=t,u=l=>m(q,{to:l._path},()=>l.title),a=(l,d)=>m("ul",d?{"data-level":d}:null,l.map(_=>_.children?m("li",null,[u(_),a(_.children,d+1)]):m("li",null,u(_)))),i=l=>a(l,0);return e!=null&&e.default?e.default({navigation:o,...this.$attrs}):i(o)}}),Ot=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"}));export{Tt as default};

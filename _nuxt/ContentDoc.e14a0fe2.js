import{I as h,K as g,G as w,ak as y,z as C,P as v,ar as D,as as _,h as r}from"./app.config.e22e55dc.js";import{u as S}from"./composables.a731ea37.js";import k from"./ContentRenderer.4d92b08e.js";import{_ as q}from"./ContentQuery.7e9f0213.js";import"./ContentRendererMarkdown.0062bee4.js";import"./_commonjsHelpers.0ee3bad0.js";import"./entry.a978b825.js";import"./cookie.68f6ff19.js";import"./query.c3f7607a.js";import"./utils.8fbade3a.js";const a=(p,e=y())=>{const c=h(p),u=g();w(()=>h(p),(t=c)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),u.public.content.host;const m=(n==null?void 0:n.description)||(t==null?void 0:t.description);m&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:m}),n!=null&&n.image||(t==null||t.image),C(()=>S(n))},{immediate:!0})},T=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(p){const e=D(),{tag:c,excerpt:u,path:f,query:t,head:n}=p,s={...t||{},path:f||(t==null?void 0:t.path)||_(y().path),find:"one"},m=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(q,s,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:d})=>{var l;return n&&a(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:d,excerpt:u,...this.$attrs})}:({data:i})=>(n&&a(i),r(k,{value:i,excerpt:u,tag:c,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):m("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}});export{T as default};
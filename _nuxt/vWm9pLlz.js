import{e as n,u as l}from"./DEIj63ze.js";const S=e=>{const t=Object.create(null);for(const i in e){const r=e[i];r!==void 0&&(t[i]=r)}return t},o=(e,t)=>(i,r)=>(l(()=>e({...S(i),...r.attrs},r)),()=>{var a,g;return t?(g=(a=r.slots).default)==null?void 0:g.call(a):null}),s={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:[String,Object,Array],tabindex:String,title:String,translate:String},p=n({name:"Link",inheritAttrs:!1,props:{...s,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:o(e=>({link:[e]}))}),u=n({name:"Title",inheritAttrs:!1,setup:o((e,{slots:t})=>{var i,r,a;return{title:((a=(r=(i=t.default)==null?void 0:i.call(t))==null?void 0:r[0])==null?void 0:a.children)||null}})}),c=n({name:"Meta",inheritAttrs:!1,props:{...s,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:o(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),m=n({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var i,r;return(r=(i=t.slots).default)==null?void 0:r.call(i)}}),f=n({name:"Html",inheritAttrs:!1,props:{...s,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:o(e=>({htmlAttrs:e}),!0)}),y=n({name:"Body",inheritAttrs:!1,props:{...s,renderPriority:[String,Number]},setup:o(e=>({bodyAttrs:e}),!0)});export{y as B,m as H,p as L,c as M,u as T,f as a};

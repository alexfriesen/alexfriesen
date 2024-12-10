import Q from"./DvT9fLdA.js";import R from"./BPWVOPef.js";import{a as N,u as E,o as g,t as q,i as w,A as P,s as z,l as J,N as T,b as h}from"./Bb4Skjy3.js";import{f as I,l as m,C as K,k as O,p as M,I as V,aG as W,A,o as d,e as j,w as p,a as i,b as v,g as B,c as _,F as x,r as k,d as D,t as S}from"./B4pz-2oQ.js";import"./Cq8JIqf2.js";import"./DzRouXtj.js";import"./DlAUqK2U.js";import"./CdJbqdu7.js";var X=(a=>(a[a.Open=0]="Open",a[a.Closed=1]="Closed",a))(X||{});let F=Symbol("DisclosureContext");function C(a){let r=A(F,null);if(r===null){let u=new Error(`<${a} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,C),u}return r}let L=Symbol("DisclosurePanelContext");function Y(){return A(L,null)}let Z=I({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(a,{slots:r,attrs:u}){let n=m(a.defaultOpen?0:1),e=m(null),c=m(null),l={buttonId:m(`headlessui-disclosure-button-${N()}`),panelId:m(`headlessui-disclosure-panel-${N()}`),disclosureState:n,panel:e,button:c,toggleDisclosure(){n.value=E(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(s){l.closeDisclosure();let t=s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?g(s):g(l.button):g(l.button);t==null||t.focus()}};return K(F,l),q(O(()=>E(n.value,{0:w.Open,1:w.Closed}))),()=>{let{defaultOpen:s,...t}=a,f={open:n.value===0,close:l.close};return P({theirProps:t,ourProps:{},slot:f,slots:r,attrs:u,name:"Disclosure"})}}}),ee=I({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(a,{attrs:r,slots:u,expose:n}){let e=C("DisclosureButton"),c=Y(),l=O(()=>c===null?!1:c.value===e.panelId.value);M(()=>{l.value||a.id!==null&&(e.buttonId.value=a.id)}),V(()=>{l.value||(e.buttonId.value=null)});let s=m(null);n({el:s,$el:s}),l.value||W(()=>{e.button.value=s.value});let t=z(O(()=>({as:a.as,type:r.type})),s);function f(){var o;a.disabled||(l.value?(e.toggleDisclosure(),(o=g(e.button))==null||o.focus()):e.toggleDisclosure())}function y(o){var b;if(!a.disabled)if(l.value)switch(o.key){case h.Space:case h.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure(),(b=g(e.button))==null||b.focus();break}else switch(o.key){case h.Space:case h.Enter:o.preventDefault(),o.stopPropagation(),e.toggleDisclosure();break}}function $(o){switch(o.key){case h.Space:o.preventDefault();break}}return()=>{var o;let b={open:e.disclosureState.value===0},{id:H,...U}=a,G=l.value?{ref:s,type:t.value,onClick:f,onKeydown:y}:{id:(o=e.buttonId.value)!=null?o:H,ref:s,type:t.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||g(e.panel)?e.panelId.value:void 0,disabled:a.disabled?!0:void 0,onClick:f,onKeydown:y,onKeyup:$};return P({ourProps:G,theirProps:U,slot:b,attrs:r,slots:u,name:"DisclosureButton"})}}}),te=I({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(a,{attrs:r,slots:u,expose:n}){let e=C("DisclosurePanel");M(()=>{a.id!==null&&(e.panelId.value=a.id)}),V(()=>{e.panelId.value=null}),n({el:e.panel,$el:e.panel}),K(L,e.panelId);let c=J(),l=O(()=>c!==null?(c.value&w.Open)===w.Open:e.disclosureState.value===0);return()=>{var s;let t={open:e.disclosureState.value===0,close:e.close},{id:f,...y}=a,$={id:(s=e.panelId.value)!=null?s:f,ref:e.panel};return P({ourProps:$,theirProps:y,slot:t,attrs:r,slots:u,features:T.RenderStrategy|T.Static,visible:l.value,name:"DisclosurePanel"})}}});const ae={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},le={class:"relative flex items-center justify-between h-16"},se={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},ne={class:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},oe={class:"hidden sm:flex sm:ml-6 flex-1 justify-between gap-4"},re={class:"flex gap-4"},ue={class:"flex gap-4"},ie={class:"px-2 pt-2 pb-3 space-y-1"},ce=I({__name:"navigation",setup(a){const r=[{name:"navigation.home",href:"/"},{name:"navigation.blog",href:"/blog"},{name:"navigation.projects",href:"/projects"}],u=[{name:"navigation.contact",href:"/contact"}];return(n,e)=>{const c=Q,l=R;return d(),j(B(Z),{as:"nav",class:"bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700"},{default:p(({open:s})=>[i("div",ae,[i("div",le,[i("div",se,[v(B(ee),{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},{default:p(()=>[e[0]||(e[0]=i("span",{class:"sr-only"},"Open main menu",-1)),s?(d(),j(c,{key:1,name:"heroicons:x-mark",class:"block h-6 w-6","aria-hidden":"true"})):(d(),j(c,{key:0,name:"heroicons:bars-3",class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),i("div",ne,[e[1]||(e[1]=i("div",{class:"flex-shrink-0 flex items-center"},[i("h1",{class:"dark:text-white"},"Alexander Friesen")],-1)),i("div",oe,[i("div",re,[(d(),_(x,null,k(r,t=>v(l,{key:t.name,url:t.href},{default:p(()=>[D(S(n.$t(t.name)),1)]),_:2},1032,["url"])),64))]),i("div",ue,[(d(),_(x,null,k(u,t=>v(l,{key:t.name,url:t.href},{default:p(()=>[D(S(n.$t(t.name)),1)]),_:2},1032,["url"])),64))])])])])]),v(B(te),{class:"sm:hidden"},{default:p(()=>[i("div",ie,[(d(),_(x,null,k(r,t=>v(l,{key:t.name,url:t.href,class:"flex"},{default:p(()=>[D(S(n.$t(t.name)),1)]),_:2},1032,["url"])),64)),(d(),_(x,null,k(u,t=>v(l,{key:t.name,url:t.href,class:"flex"},{default:p(()=>[D(S(n.$t(t.name)),1)]),_:2},1032,["url"])),64))])]),_:1})]),_:1})}}}),be=Object.assign(ce,{__name:"Navigation"});export{be as default};

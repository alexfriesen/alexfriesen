import{e as g,o as r,c as o,Q as s,Y as f,J as n,$ as c,a0 as i,K as e,W as a,a6 as h,Z as d,u as p}from"./entry.7aac03e1.js";import _ from"./tag.7dcd2657.js";import m from"./link-button.85be4259.js";import{r as x}from"./ArrowTopRightOnSquareIcon.9c196034.js";const w=["href"],b=["alt","src"],y={class:"leading-tight p-2 md:p-4"},k={class:"font-bold text-xl mb-2"},v=["href"],B={class:"text-gray-300 text-base"},j={class:"flex items-center justify-between leading-none p-2 md:p-4"},C={class:"flex flex-wrap gap-1"},V=e("span",null,"Open",-1),D=g({__name:"projects",setup(F){const u=[{title:"retro-scene",text:"\u{1F60E}\u{1F304}\u{1F320}",url:"https://github.com/alexfriesen/retro",img:"https://raw.githubusercontent.com/alexfriesen/retro/main/public/preview.gif",tags:["three.js","web component"]},{title:"CV Builder",text:"A simple CV-Builder made with Angular",url:"http://cv.alexfriesen.net/",img:"/images/cv.png",tags:["angular","print layout"]}];return(N,A)=>(r(),o(f,{class:"grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6"},{default:s(()=>[(r(),n(i,null,c(u,t=>e("article",{key:t.title,class:"flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"},[e("a",{href:t.url},[e("img",{class:"block h-auto w-full object-cover",loading:"lazy",alt:t.title,src:t.img},null,8,b)],8,w),e("header",y,[e("h2",k,[e("a",{class:"no-underline hover:underline text-grey-darker",href:t.url},a(t.title),9,v)]),e("p",B,a(t.text),1)]),e("footer",j,[e("div",C,[(r(!0),n(i,null,c(t.tags,l=>(r(),o(_,{key:l},{default:s(()=>[h(a(l),1)]),_:2},1024))),128))]),d(m,{target:"_blank",href:t.url},{default:s(()=>[V,d(p(x),{class:"inline w-6 h-6"})]),_:2},1032,["href"])])])),64))]),_:1}))}});export{D as default};
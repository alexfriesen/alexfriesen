import h from"./tag.e426bff2.js";import{f as m,g as x}from"./entry.a978b825.js";import w from"./link-button.8022abc5.js";import{P as b,a0 as o,a2 as r,aa as s,a1 as l,ad as c,a7 as i,ab as e,a4 as n,ae as y,ac as _}from"./app.config.e22e55dc.js";const k=["href"],v=["alt","src"],B={class:"leading-tight p-2 md:p-4"},j={class:"font-bold text-xl mb-2"},C=["href"],V={class:"text-gray-300 text-base"},F={class:"flex items-center justify-between leading-none p-2 md:p-4"},P={class:"flex flex-wrap gap-1"},A=e("span",null,"Open",-1),I=b({__name:"projects",setup(D){const d=[{title:"PDF Tools",text:"A simple to tool to merge PDF Files and rearange its Pages",url:"https://pdf.alexfriesen.net/",img:"/images/pdf.png",tags:["angular","pdf","editor"]},{title:"retro-scene",text:"😎🌄🌠",url:"https://github.com/alexfriesen/retro",img:"https://raw.githubusercontent.com/alexfriesen/retro/main/public/preview.gif",tags:["three.js","web component"]},{title:"CV Builder",text:"A simple CV-Builder made with Angular",url:"https://cv.alexfriesen.net/",img:"/images/cv.png",tags:["angular","print layout"]}];return(N,T)=>{const p=h,g=x,u=w,f=m;return o(),r(f,{class:"grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 gap-6"},{default:s(()=>[(o(),l(i,null,c(d,t=>e("article",{key:t.title,class:"flex flex-col justify-between overflow-hidden rounded-lg bg-gray-800 shadow-lg"},[e("a",{href:t.url},[e("img",{class:"block h-auto w-full object-cover aspect-video",loading:"lazy",alt:t.title,src:t.img},null,8,v)],8,k),e("header",B,[e("h2",j,[e("a",{class:"no-underline hover:underline text-grey-darker",href:t.url},n(t.title),9,C)]),e("p",V,n(t.text),1)]),e("footer",F,[e("div",P,[(o(!0),l(i,null,c(t.tags,a=>(o(),r(p,{key:a},{default:s(()=>[y(n(a),1)]),_:2},1024))),128))]),_(u,{target:"_blank",href:t.url},{default:s(()=>[A,_(g,{name:"heroicons:arrow-top-right-on-square-20-solid",class:"inline w-6 h-6"})]),_:2},1032,["href"])])])),64))]),_:1})}}});export{I as default};

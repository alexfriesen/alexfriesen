import{j as v,y as p,z as h,A as k,B as b,r as w,s as e,o as r,c as l,b as i,d as g,t as _,g as L,k as u,a as B,F as N,x as C,w as P,i as V,e as j}from"./entry.dd70001b.js";const $={key:1,class:"absolute top-8 right-0 bg-gray-200 text-gray-800 rounded-md overflow-hidden"},D={class:"flex flex-col"},I=v({__name:"lang-select",setup(E){const d=[{locale:"en",name:"English",icon:"circle-flags:en"},{locale:"de",name:"Deutsch",icon:"circle-flags:de"}],f=["/projects/"],m=p(()=>{const s=h().path;return f.some(t=>s.startsWith(t))}),c=p(()=>{const s=k().locale.value;return d.find(a=>a.locale===s)}),x=b(),o=w(!1);return(s,t)=>{const a=V,y=j;return e(c)?(r(),l("div",{key:0,class:"inline-flex gap-1 items-center justify-evenly px-2 py-1 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 text-gray-800 cursor-pointer relative",onClick:t[0]||(t[0]=n=>o.value=!e(o)),onMouseleave:t[1]||(t[1]=n=>o.value=!1)},[i(a,{name:e(c).icon},null,8,["name"]),g(" "+_(e(c).name)+" ",1),e(m)?u("",!0):(r(),L(a,{key:0,name:"uil:angle-down"})),e(o)&&!e(m)?(r(),l("div",$,[B("div",D,[(r(),l(N,null,C(d,n=>i(y,{key:n.locale,to:e(x)(n.locale),class:"inline-flex gap-2 px-4 py-1 items-center hover:bg-gray-900 hover:text-gray-200"},{default:P(()=>[i(a,{name:n.icon},null,8,["name"]),g(" "+_(n.name),1)]),_:2},1032,["to"])),64))])])):u("",!0)],32)):u("",!0)}}});export{I as default};

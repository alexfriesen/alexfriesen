import{e as w,v as a,o,c as k,Q as S,R as M,J as s,S as g,X as d,K as e,Z as _,$ as b,a0 as V,U as B}from"./entry.0612afb5.js";const C={key:0,class:"flex flex-col rounded-xl p-8 shadow bg-green-800"},N=e("p",null," Thank you for your message, I will get back to you as soon as possible. ",-1),j={key:1,class:"flex flex-col rounded-xl p-8 shadow bg-red-800"},U=e("p",null,"Sorry! Something went wrong. Please try again later.",-1),z=["onSubmit"],E={class:"flex flex-wrap"},I={class:"w-full"},J=e("span",{class:"block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"}," E-Mail ",-1),T={class:"flex flex-wrap"},$={class:"w-full"},q=e("span",{class:"block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"}," Message ",-1),D=["disabled"],H={key:0},K={key:1},Q=w({__name:"contact",setup(O){const x="https://contactme-fplu4j3puq-ey.a.run.app";function h(m,t){return fetch(`${x}/contact`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:m,message:t})})}const n=a(""),l=a(""),r=a(!1),c=a(!1),p=a(!1),i=a(!1);function y(){r.value=!0,c.value=!0,h(n.value,l.value).then(()=>{i.value=!0}).catch(()=>{p.value=!0,r.value=!1}).finally(()=>{c.value=!1})}return(m,t)=>{const f=B,v=M;return o(),k(v,{class:"relative flex flex-col items-center"},{default:S(()=>[i.value?(o(),s("div",C,[g(f,{name:"heroicons:check-circle",class:"w-32 h-32 m-auto"}),N])):d("",!0),p.value?(o(),s("div",j,[g(f,{name:"heroicons:exclamation-circle",class:"w-32 h-32 m-auto"}),U])):d("",!0),i.value?d("",!0):(o(),s("form",{key:2,class:"flex flex-col w-full max-w-lg rounded-xl p-8 shadow bg-gray-800 gap-4",onSubmit:V(y,["prevent"])},[e("div",E,[e("div",I,[e("label",null,[J,_(e("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"email",name:"email"},null,512),[[b,n.value,void 0,{trim:!0}]])])])]),e("div",T,[e("div",$,[e("label",null,[q,_(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=u=>l.value=u),class:"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",name:"message"},null,512),[[b,l.value,void 0,{trim:!0}]])])])]),e("button",{class:"inline-flex gap-1 items-center justify-evenly px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200 disabled:opacity-50",disabled:r.value},[c.value?(o(),s("span",H,"Sending...")):(o(),s("span",K,"Send"))],8,D)],40,z))]),_:1})}}});export{Q as default};

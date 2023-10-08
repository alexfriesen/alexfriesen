import{T as S,H as T}from"./components.fd25cd41.js";import{j as V,r as a,o,c as s,b as n,w as p,d as C,k as m,l as M,a as e,m as b,v as x,F as N,i as j,h as H}from"./entry.37b70f09.js";import"./vue.f36acd1f.94df5186.js";const B={key:0,class:"flex flex-col rounded-xl p-8 shadow bg-green-800"},z=e("p",null," Thank you for your message, I will get back to you as soon as possible. ",-1),E={key:1,class:"flex flex-col rounded-xl p-8 shadow bg-red-800"},F=e("p",null,"Sorry! Something went wrong. Please try again later.",-1),I=["onSubmit"],U={class:"flex flex-wrap"},q={class:"w-full"},D=e("span",{class:"block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"}," E-Mail ",-1),J={class:"flex flex-wrap"},O={class:"w-full"},P=e("span",{class:"block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"}," Message ",-1),$=["disabled"],A={key:0},G={key:1},K="https://contactme-fplu4j3puq-ey.a.run.app",X=V({__name:"contact",setup(L){function h(_,t){return fetch(`${K}/contact`,{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({email:_,message:t})})}const l=a(""),r=a(""),c=a(!1),i=a(!1),f=a(!1),d=a(!1);function y(){c.value=!0,i.value=!0,h(l.value,r.value).then(()=>{d.value=!0}).catch(()=>{f.value=!0,c.value=!1}).finally(()=>{i.value=!1})}return(_,t)=>{const v=S,w=T,g=j,k=H;return o(),s(N,null,[n(w,null,{default:p(()=>[n(v,null,{default:p(()=>[C("Contact")]),_:1})]),_:1}),n(k,{class:"relative flex flex-col items-center"},{default:p(()=>[d.value?(o(),s("div",B,[n(g,{name:"heroicons:check-circle",class:"w-32 h-32 m-auto"}),z])):m("",!0),f.value?(o(),s("div",E,[n(g,{name:"heroicons:exclamation-circle",class:"w-32 h-32 m-auto"}),F])):m("",!0),d.value?m("",!0):(o(),s("form",{key:2,class:"flex flex-col w-full max-w-lg rounded-xl p-8 shadow bg-gray-800 gap-4",onSubmit:M(y,["prevent"])},[e("div",U,[e("div",q,[e("label",null,[D,b(e("input",{"onUpdate:modelValue":t[0]||(t[0]=u=>l.value=u),class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"email",name:"email"},null,512),[[x,l.value,void 0,{trim:!0}]])])])]),e("div",J,[e("div",O,[e("label",null,[P,b(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=u=>r.value=u),class:"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",name:"message"},null,512),[[x,r.value,void 0,{trim:!0}]])])])]),e("button",{class:"inline-flex gap-1 items-center justify-evenly px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-300 bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-gray-200 disabled:opacity-50",disabled:c.value},[i.value?(o(),s("span",A,"Sending...")):(o(),s("span",G,"Send"))],8,$)],40,I))]),_:1})],64)}}});export{X as default};
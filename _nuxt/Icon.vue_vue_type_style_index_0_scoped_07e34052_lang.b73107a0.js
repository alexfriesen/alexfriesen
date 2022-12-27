import{e as vt,i as _}from"./entry.7aac03e1.js";const kt=Object.freeze({left:0,top:0,width:16,height:16}),Ct=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),J=Object.freeze({...kt,...Ct});Object.freeze({...J,body:"",hidden:!1});({...kt});const jt=Object.freeze({width:null,height:null}),Tt=Object.freeze({...jt,...Ct});function Gt(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in jt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const Wt=/[\s,]+/;function Kt(t,o){o.split(Wt).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Jt(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}const Xt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Yt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function rt(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(Xt);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=Yt.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function Zt(t,o){const n={...J,...t},r={...Tt,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const h=[],p=w.hFlip,f=w.vFlip;let m=w.rotate;p?f?m+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let g;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:g=e.height/2+e.top,h.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:g=e.width/2+e.left,h.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}m%2===1&&(e.left!==e.top&&(g=e.left,e.left=e.top,e.top=g),e.width!==e.height&&(g=e.width,e.width=e.height,e.height=g)),h.length&&(i='<g transform="'+h.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=rt(d,l/a)):(u=s==="auto"?l:s,d=c===null?rt(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const te=/\sid="(\S+)"/g,ee="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ne=0;function oe(t,o=ee){const n=[];let r;for(;r=te.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(ne++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}function re(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ie(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function se(t){return'url("data:image/svg+xml,'+ie(t)+'")'}const it={...Tt,inline:!1},ce={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},le={display:"inline-block"},V={backgroundColor:"currentColor"},$t={backgroundColor:"transparent"},st={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ct={webkitMask:V,mask:V,background:$t};for(const t in ct){const o=ct[t];for(const n in st)o[t+n]=st[n]}const O={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";O[t+"-flip"]=o,O[t.slice(0,1)+"-flip"]=o,O[t+"Flip"]=o});function lt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ae=(t,o)=>{const n=Gt(it,o),r={...ce},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Kt(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[p]=Jt(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const m=O[p];m?(f===!0||f==="true"||f===1)&&(n[m]=!0):it[p]===void 0&&(r[p]=f)}}}const l=Zt(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=oe(l.body,f?()=>f+"ID"+p++:"iconifyVue"),_("svg",r)}const{body:u,width:d,height:b}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=re(u,{...a,width:d+"",height:b+""});return r.style={...i,"--svg":se(h),width:lt(a.width),height:lt(a.height),...le,...w?V:$t,...c},_("span",r)},fe=Object.create(null),ln=vt({inheritAttrs:!1,render(){const t=this.$attrs,o=t.icon,n=typeof o=="string"?fe[o]:typeof o=="object"?o:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:ae({...J,...n},t)}}),C=/^[a-z0-9]+(-[a-z0-9]+)*$/,$=(t,o,n,r="")=>{const e=t.split(":");if(t.slice(0,1)==="@"){if(e.length<2||e.length>3)return null;r=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){const c=e.pop(),l=e.pop(),a={provider:e.length>0?e[0]:r,prefix:l,name:c};return o&&!E(a)?null:a}const i=e[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return o&&!E(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return o&&!E(c,n)?null:c}return null},E=(t,o)=>t?!!((t.provider===""||t.provider.match(C))&&(o&&t.prefix===""||t.prefix.match(C))&&t.name.match(C)):!1,Ft=Object.freeze({left:0,top:0,width:16,height:16}),N=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),F=Object.freeze({...Ft,...N}),B=Object.freeze({...F,body:"",hidden:!1});function ue(t,o){const n={};!t.hFlip!=!o.hFlip&&(n.hFlip=!0),!t.vFlip!=!o.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(o.rotate||0))%4;return r&&(n.rotate=r),n}function at(t,o){const n=ue(t,o);for(const r in B)r in N?r in t&&!(r in n)&&(n[r]=N[r]):r in o?n[r]=o[r]:r in t&&(n[r]=t[r]);return n}function de(t,o){const n=t.icons,r=t.aliases||Object.create(null),e=Object.create(null);function i(s){if(n[s])return e[s]=[];if(!(s in e)){e[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(e[s]=[c].concat(l))}return e[s]}return(o||Object.keys(n).concat(Object.keys(r))).forEach(i),e}function he(t,o,n){const r=t.icons,e=t.aliases||Object.create(null);let i={};function s(c){i=at(r[c]||e[c],i)}return s(o),n.forEach(s),at(t,i)}function Pt(t,o){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(e=>{o(e,null),n.push(e)});const r=de(t);for(const e in r){const i=r[e];i&&(o(e,he(t,e,i)),n.push(e))}return n}const pe={provider:"",aliases:{},not_found:{},...Ft};function R(t,o){for(const n in o)if(n in t&&typeof t[n]!=typeof o[n])return!1;return!0}function Mt(t){if(typeof t!="object"||t===null)return null;const o=t;if(typeof o.prefix!="string"||!t.icons||typeof t.icons!="object"||!R(t,pe))return null;const n=o.icons;for(const e in n){const i=n[e];if(!e.match(C)||typeof i.body!="string"||!R(i,B))return null}const r=o.aliases||Object.create(null);for(const e in r){const i=r[e],s=i.parent;if(!e.match(C)||typeof s!="string"||!n[s]&&!r[s]||!R(i,B))return null}return o}const ft=Object.create(null);function ge(t,o){return{provider:t,prefix:o,icons:Object.create(null),missing:new Set}}function I(t,o){const n=ft[t]||(ft[t]=Object.create(null));return n[o]||(n[o]=ge(t,o))}function X(t,o){return Mt(o)?Pt(o,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function me(t,o,n){try{if(typeof n.body=="string")return t.icons[o]={...n},!0}catch{}return!1}let j=!1;function Ot(t){return typeof t=="boolean"&&(j=t),j}function Et(t){const o=typeof t=="string"?$(t,!0,j):t;if(o){const n=I(o.provider,o.prefix),r=o.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function ye(t,o){const n=$(t,!0,j);if(!n)return!1;const r=I(n.provider,n.prefix);return me(r,n.name,o)}function be(t,o){if(typeof t!="object")return!1;if(typeof o!="string"&&(o=t.provider||""),j&&!o&&!t.prefix){let e=!1;return Mt(t)&&(t.prefix="",Pt(t,(i,s)=>{s&&ye(i,s)&&(e=!0)})),e}const n=t.prefix;if(!E({provider:o,prefix:n,name:"a"}))return!1;const r=I(o,n);return!!X(r,t)}const Lt=Object.freeze({width:null,height:null}),At=Object.freeze({...Lt,...N}),we=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Se=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ut(t,o,n){if(o===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*o*n)/n;if(typeof t!="string")return t;const r=t.split(we);if(r===null||!r.length)return t;const e=[];let i=r.shift(),s=Se.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?e.push(i):e.push(Math.ceil(c*o*n)/n)}else e.push(i);if(i=r.shift(),i===void 0)return e.join("");s=!s}}function xe(t,o){const n={...F,...t},r={...At,...o},e={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const h=[],p=w.hFlip,f=w.vFlip;let m=w.rotate;p?f?m+=2:(h.push("translate("+(e.width+e.left).toString()+" "+(0-e.top).toString()+")"),h.push("scale(-1 1)"),e.top=e.left=0):f&&(h.push("translate("+(0-e.left).toString()+" "+(e.height+e.top).toString()+")"),h.push("scale(1 -1)"),e.top=e.left=0);let g;switch(m<0&&(m-=Math.floor(m/4)*4),m=m%4,m){case 1:g=e.height/2+e.top,h.unshift("rotate(90 "+g.toString()+" "+g.toString()+")");break;case 2:h.unshift("rotate(180 "+(e.width/2+e.left).toString()+" "+(e.height/2+e.top).toString()+")");break;case 3:g=e.width/2+e.left,h.unshift("rotate(-90 "+g.toString()+" "+g.toString()+")");break}m%2===1&&(e.left!==e.top&&(g=e.left,e.left=e.top,e.top=g),e.width!==e.height&&(g=e.width,e.width=e.height,e.height=g)),h.length&&(i='<g transform="'+h.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=e.width,a=e.height;let u,d;return s===null?(d=c===null?"1em":c==="auto"?a:c,u=ut(d,l/a)):(u=s==="auto"?l:s,d=c===null?ut(u,a/l):c==="auto"?a:c),{attributes:{width:u.toString(),height:d.toString(),viewBox:e.left.toString()+" "+e.top.toString()+" "+l.toString()+" "+a.toString()},body:i}}const Ie=/\sid="(\S+)"/g,ve="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ke=0;function Ce(t,o=ve){const n=[];let r;for(;r=Ie.exec(t);)n.push(r[1]);return n.length&&n.forEach(e=>{const i=typeof o=="function"?o(e):o+(ke++).toString(),s=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+s+')([")]|\\.[a-z])',"g"),"$1"+i+"$3")}),t}const Q=Object.create(null);function je(t,o){Q[t]=o}function U(t){return Q[t]||Q[""]}function Y(t){let o;if(typeof t.resources=="string")o=[t.resources];else if(o=t.resources,!(o instanceof Array)||!o.length)return null;return{resources:o,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Z=Object.create(null),k=["https://api.simplesvg.com","https://api.unisvg.com"],L=[];for(;k.length>0;)k.length===1||Math.random()>.5?L.push(k.shift()):L.push(k.pop());Z[""]=Y({resources:["https://api.iconify.design"].concat(L)});function Te(t,o){const n=Y(o);return n===null?!1:(Z[t]=n,!0)}function tt(t){return Z[t]}const $e=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let dt=$e();function Fe(t,o){const n=tt(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let e=0;n.resources.forEach(s=>{e=Math.max(e,s.length)});const i=o+".json?icons=";r=n.maxURL-e-n.path.length-i.length}return r}function Pe(t){return t===404}const Me=(t,o,n)=>{const r=[],e=Fe(t,o),i="icons";let s={type:i,provider:t,prefix:o,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=e&&a>0&&(r.push(s),s={type:i,provider:t,prefix:o,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Oe(t){if(typeof t=="string"){const o=tt(t);if(o)return o.path}return"/"}const Ee=(t,o,n)=>{if(!dt){n("abort",424);return}let r=Oe(o.provider);switch(o.type){case"icons":{const i=o.prefix,c=o.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=o.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let e=503;dt(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Pe(s)?"abort":"next",s)});return}return e=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",e)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",e)})},Le={prepare:Me,send:Ee};function Ae(t){const o={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((e,i)=>e.provider!==i.provider?e.provider.localeCompare(i.provider):e.prefix!==i.prefix?e.prefix.localeCompare(i.prefix):e.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const i=e.provider,s=e.prefix,c=e.name,l=n[i]||(n[i]=Object.create(null)),a=l[s]||(l[s]=I(i,s));let u;c in a.icons?u=o.loaded:s===""||a.missing.has(c)?u=o.missing:u=o.pending;const d={provider:i,prefix:s,name:c};u.push(d)}),o}function _t(t,o){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(e=>e.id!==o))})}function _e(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const o=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!o.length)return;let n=!1;const r=t.provider,e=t.prefix;o.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==e)return!0;const a=l.name;if(t.icons[a])s.loaded.push({provider:r,prefix:e,name:a});else if(t.missing.has(a))s.missing.push({provider:r,prefix:e,name:a});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||_t([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let Ne=0;function De(t,o,n){const r=Ne++,e=_t.bind(null,n,r);if(!o.pending.length)return e;const i={id:r,icons:o,callback:t,abort:e};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),e}function ze(t,o=!0,n=!1){const r=[];return t.forEach(e=>{const i=typeof e=="string"?$(e,o,n):e;i&&r.push(i)}),r}var Re={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function He(t,o,n,r){const e=t.resources.length,i=t.random?Math.floor(Math.random()*e):t.index;let s;if(t.random){let y=t.resources.slice(0);for(s=[];y.length>1;){const S=Math.floor(Math.random()*y.length);s.push(y[S]),y=y.slice(0,S).concat(y.slice(S+1))}s=s.concat(y)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",a=0,u,d=null,b=[],w=[];typeof r=="function"&&w.push(r);function h(){d&&(clearTimeout(d),d=null)}function p(){l==="pending"&&(l="aborted"),h(),b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function f(y,S){S&&(w=[]),typeof y=="function"&&w.push(y)}function m(){return{startTime:c,payload:o,status:l,queriesSent:a,queriesPending:b.length,subscribe:f,abort:p}}function g(){l="failed",w.forEach(y=>{y(void 0,u)})}function ot(){b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function qt(y,S,v){const P=S!=="success";switch(b=b.filter(x=>x!==y),l){case"pending":break;case"failed":if(P||!t.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=v,g();return}if(P){u=v,b.length||(s.length?z():g());return}if(h(),ot(),!t.random){const x=t.resources.indexOf(y.resource);x!==-1&&x!==t.index&&(t.index=x)}l="completed",w.forEach(x=>{x(v)})}function z(){if(l!=="pending")return;h();const y=s.shift();if(y===void 0){if(b.length){d=setTimeout(()=>{h(),l==="pending"&&(ot(),g())},t.timeout);return}g();return}const S={status:"pending",resource:y,callback:(v,P)=>{qt(S,v,P)}};b.push(S),a++,d=setTimeout(z,t.rotate),n(y,o,S.callback)}return setTimeout(z),m}function Nt(t){const o={...Re,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function e(c,l,a){const u=He(o,c,l,(d,b)=>{r(),a&&a(d,b)});return n.push(u),u}function i(c){return n.find(l=>c(l))||null}return{query:e,find:i,setIndex:c=>{o.index=c},getIndex:()=>o.index,cleanup:r}}function ht(){}const H=Object.create(null);function Ve(t){if(!H[t]){const o=tt(t);if(!o)return;const n=Nt(o),r={config:o,redundancy:n};H[t]=r}return H[t]}function Be(t,o,n){let r,e;if(typeof t=="string"){const i=U(t);if(!i)return n(void 0,424),ht;e=i.send;const s=Ve(t);s&&(r=s.redundancy)}else{const i=Y(t);if(i){r=Nt(i);const s=t.resources?t.resources[0]:"",c=U(s);c&&(e=c.send)}}return!r||!e?(n(void 0,424),ht):r.query(o,e,n)().abort}const pt="iconify2",T="iconify",Dt=T+"-count",gt=T+"-version",zt=36e5,Qe=168;function q(t,o){try{return t.getItem(o)}catch{}}function et(t,o,n){try{return t.setItem(o,n),!0}catch{}}function mt(t,o){try{t.removeItem(o)}catch{}}function G(t,o){return et(t,Dt,o.toString())}function W(t){return parseInt(q(t,Dt))||0}const D={local:!0,session:!0},Rt={local:new Set,session:new Set};let nt=!1;function Ue(t){nt=t}let M=typeof window>"u"?{}:window;function Ht(t){const o=t+"Storage";try{if(M&&M[o]&&typeof M[o].length=="number")return M[o]}catch{}D[t]=!1}function Vt(t,o){const n=Ht(t);if(!n)return;const r=q(n,gt);if(r!==pt){if(r){const c=W(n);for(let l=0;l<c;l++)mt(n,T+l.toString())}et(n,gt,pt),G(n,0);return}const e=Math.floor(Date.now()/zt)-Qe,i=c=>{const l=T+c.toString(),a=q(n,l);if(typeof a=="string"){try{const u=JSON.parse(a);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>e&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&o(u,c))return!0}catch{}mt(n,l)}};let s=W(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,G(n,s)):Rt[t].add(c))}function Bt(){if(!nt){Ue(!0);for(const t in D)Vt(t,o=>{const n=o.data,r=o.provider,e=n.prefix,i=I(r,e);if(!X(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function qe(t,o){const n=t.lastModifiedCached;if(n&&n>=o)return n===o;if(t.lastModifiedCached=o,n)for(const r in D)Vt(r,e=>{const i=e.data;return e.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===o});return!0}function Ge(t,o){nt||Bt();function n(r){let e;if(!D[r]||!(e=Ht(r)))return;const i=Rt[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=W(e),!G(e,s+1))return;const c={cached:Math.floor(Date.now()/zt),provider:t.provider,data:o};return et(e,T+s.toString(),JSON.stringify(c))}o.lastModified&&!qe(t,o.lastModified)||!Object.keys(o.icons).length||(o.not_found&&(o=Object.assign({},o),delete o.not_found),n("local")||n("session"))}function yt(){}function We(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,_e(t)}))}function Ke(t,o){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(o).sort():t.iconsToLoad=o,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,e=t.iconsToLoad;delete t.iconsToLoad;let i;if(!e||!(i=U(n)))return;i.prepare(n,r,e).forEach(c=>{Be(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{t.missing.add(a)});else try{const a=X(t,l);if(!a.length)return;const u=t.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),Ge(t,l)}catch(a){console.error(a)}We(t)})})}))}const Qt=(t,o)=>{const n=ze(t,!0,Ot()),r=Ae(n);if(!r.pending.length){let l=!0;return o&&setTimeout(()=>{l&&o(r.loaded,r.missing,r.pending,yt)}),()=>{l=!1}}const e=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===s)return;s=a,c=u,i.push(I(a,u));const d=e[a]||(e[a]=Object.create(null));d[u]||(d[u]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:u,name:d}=l,b=I(a,u),w=b.pendingIcons||(b.pendingIcons=new Set);w.has(d)||(w.add(d),e[a][u].push(d))}),i.forEach(l=>{const{provider:a,prefix:u}=l;e[a][u].length&&Ke(l,e[a][u])}),o?De(o,r,i):yt},an=t=>new Promise((o,n)=>{const r=typeof t=="string"?$(t,!0):t;if(!r){n(t);return}Qt([r||t],e=>{if(e.length&&r){const i=Et(r);if(i){o({...F,...i});return}}n(t)})});function Je(t,o){const n={...t};for(const r in o){const e=o[r],i=typeof e;r in Lt?(e===null||e&&(i==="string"||i==="number"))&&(n[r]=e):i===typeof n[r]&&(n[r]=r==="rotate"?e%4:e)}return n}const Xe=/[\s,]+/;function Ye(t,o){o.split(Xe).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ze(t,o=0){const n=t.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(n===""){const e=parseInt(t);return isNaN(e)?0:r(e)}else if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/e,i%1===0?r(i):0)}}return o}function tn(t,o){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in o)n+=" "+r+'="'+o[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function en(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function nn(t){return'url("data:image/svg+xml,'+en(t)+'")'}const bt={...At,inline:!1},on={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},rn={display:"inline-block"},K={backgroundColor:"currentColor"},Ut={backgroundColor:"transparent"},wt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},St={webkitMask:K,mask:K,background:Ut};for(const t in St){const o=St[t];for(const n in wt)o[t+n]=wt[n]}const A={};["horizontal","vertical"].forEach(t=>{const o=t.slice(0,1)+"Flip";A[t+"-flip"]=o,A[t.slice(0,1)+"-flip"]=o,A[t+"Flip"]=o});function xt(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const It=(t,o)=>{const n=Je(bt,o),r={...on},e=o.mode||"svg",i={},s=o.style,c=typeof s=="object"&&!(s instanceof Array)?s:{};for(let p in o){const f=o[p];if(f!==void 0)switch(p){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[p]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&Ye(n,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?n[p]=Ze(f):typeof f=="number"&&(n[p]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete r["aria-hidden"];break;default:{const m=A[p];m?(f===!0||f==="true"||f===1)&&(n[m]=!0):bt[p]===void 0&&(r[p]=f)}}}const l=xe(t,n),a=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),e==="svg"){r.style={...i,...c},Object.assign(r,a);let p=0,f=o.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),r.innerHTML=Ce(l.body,f?()=>f+"ID"+p++:"iconifyVue"),_("svg",r)}const{body:u,width:d,height:b}=t,w=e==="mask"||(e==="bg"?!1:u.indexOf("currentColor")!==-1),h=tn(u,{...a,width:d+"",height:b+""});return r.style={...i,"--svg":nn(h),width:xt(a.width),height:xt(a.height),...rn,...w?K:Ut,...c},_("span",r)};Ot(!0);je("",Le);if(typeof document<"u"&&typeof window<"u"){Bt();const t=window;if(t.IconifyPreload!==void 0){const o=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof o=="object"&&o!==null&&(o instanceof Array?o:[o]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!be(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const o=t.IconifyProviders;if(typeof o=="object"&&o!==null)for(let n in o){const r="IconifyProviders["+n+"] is invalid.";try{const e=o[n];if(typeof e!="object"||!e||e.resources===void 0)continue;Te(n,e)||console.error(r)}catch{console.error(r)}}}}const sn={...F,body:""};vt({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,o){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let n;if(typeof t!="string"||(n=$(t,!1,!0))===null)return this.abortLoading(),null;const r=Et(n);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Qt([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,o&&o(t));const e=["iconify"];return n.prefix!==""&&e.push("iconify--"+n.prefix),n.provider!==""&&e.push("iconify--"+n.provider),{data:r,classes:e}}},render(){this.counter;const t=this.$attrs,o=this.iconMounted?this.getIcon(t.icon,t.onLoad):null;if(!o)return It(sn,t);let n=t;return o.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+o.classes.join(" ")}),It({...F,...o.data},n)}});export{ln as I,an as l};

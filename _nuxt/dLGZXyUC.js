import{h as E,ax as T,n as x,a1 as S,ay as z,l as v,a6 as F,R as A,C as m,a5 as y}from"./GRCun82i.js";function I(n){return typeof n=="function"?n():E(n)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const b=()=>{};function R(n,a){function t(...e){return new Promise((r,i)=>{Promise.resolve(n(()=>a.apply(this,e),{fn:a,thisArg:this,args:e})).then(r).catch(i)})}return t}function C(n,a={}){let t,e,r=b;const i=s=>{clearTimeout(s),r(),r=b};return s=>{const u=I(n),c=I(a.maxWait);return t&&i(t),u<=0||c!==void 0&&c<=0?(e&&(i(e),e=null),Promise.resolve(s())):new Promise((l,d)=>{r=a.rejectOnCancel?d:l,c&&!e&&(e=setTimeout(()=>{t&&i(t),e=null,l(s())},c)),t=setTimeout(()=>{e&&i(e),e=null,l(s())},u)})}}function B(n,a=200,t={}){return R(C(a,t),n)}function O(n,a,t){let e;T(t)?e={evaluating:t}:e=t||{};const{lazy:r=!1,evaluating:i=void 0,shallow:o=!0,onError:s=b}=e,u=x(!r),c=o?S(a):x(a);let l=0;return z(async d=>{if(!u.value)return;l++;const g=l;let w=!1;i&&Promise.resolve().then(()=>{i.value=!0});try{const h=await n(_=>{d(()=>{i&&(i.value=!1),w||_()})});g===l&&(c.value=h)}catch(h){s(h)}finally{i&&g===l&&(i.value=!1),w=!0}}),r?v(()=>(u.value=!0,c.value)):c}function V(n){var a;const t=I(n);return(a=t==null?void 0:t.$el)!=null?a:t}const f=new Map;function $(n){const a=F();function t(s){var u;const c=f.get(n)||new Set;c.add(s),f.set(n,c);const l=()=>r(s);return(u=a==null?void 0:a.cleanups)==null||u.push(l),l}function e(s){function u(...c){r(u),s(...c)}return t(u)}function r(s){const u=f.get(n);u&&(u.delete(s),u.size||i())}function i(){f.delete(n)}function o(s,u){var c;(c=f.get(n))==null||c.forEach(l=>l(s,u))}return{on:t,once:e,off:r,emit:o,reset:i}}const W=Symbol.for("nuxt:client-only"),j="data-n-ids",D="-";function H(n){var r,i,o,s,u,c;if(typeof n!="string")throw new TypeError("[nuxt] [useId] key must be a string.");n=`n${n.slice(1)}`;const a=A(),t=y();if(!t)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");a._id||(a._id=0),t._nuxtIdIndex||(t._nuxtIdIndex={}),(r=t._nuxtIdIndex)[n]||(r[n]=0);const e=n+D+t._nuxtIdIndex[n]++;if(a.payload.serverRendered&&a.isHydrating&&!m(W,!1)){const l=((i=t.vnode.el)==null?void 0:i.nodeType)===8&&((s=(o=t.vnode.el)==null?void 0:o.nextElementSibling)!=null&&s.getAttribute)?(u=t.vnode.el)==null?void 0:u.nextElementSibling:t.vnode.el,d=JSON.parse(((c=l==null?void 0:l.getAttribute)==null?void 0:c.call(l,j))||"{}");if(d[e])return d[e]}return n+"_"+a._id++}const J=(n,a)=>{const t=m("form-events",void 0),e=m("form-group",void 0),r=m("form-inputs",void 0);e&&(n!=null&&n.id&&(e.inputId.value=n==null?void 0:n.id),r&&(r.value[e.name.value]=e.inputId.value));const i=x(!1);function o(l,d){t&&t.emit({type:l,path:d})}function s(){o("blur",e==null?void 0:e.name.value),i.value=!0}function u(){o("change",e==null?void 0:e.name.value)}const c=B(()=>{(i.value||e!=null&&e.eagerValidation.value)&&o("input",e==null?void 0:e.name.value)},300);return{inputId:v(()=>(n==null?void 0:n.id)??(e==null?void 0:e.inputId.value)),name:v(()=>(n==null?void 0:n.name)??(e==null?void 0:e.name.value)),size:v(()=>{var d;const l=a.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(n==null?void 0:n.size)??l??((d=a==null?void 0:a.default)==null?void 0:d.size)}),color:v(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":n==null?void 0:n.color}),emitFormBlur:s,emitFormInput:c,emitFormChange:u}};export{H as a,$ as b,V as c,B as d,O as e,J as u};

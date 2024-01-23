import{aj as _,g as A,l as b,R,n as x,s as L,ak as T,al as B,am as E,an as N,Z as C,af as U,T as w,U as j,ao as I,ap as D,X as F,Y as S,aq as O,a2 as V,ad as H}from"./entry.S0bZHKSY.js";async function q(t,n=_()){const{path:s,matched:e}=n.resolve(t);if(!e.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(s)))return;const l=n._preloadPromises=n._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>q(t,n));n._routePreloaded.add(s);const i=e.map(c=>{var a;return(a=c.components)==null?void 0:a.default}).filter(c=>typeof c=="function");for(const c of i){const a=Promise.resolve(c()).catch(()=>{}).finally(()=>l.splice(l.indexOf(a)));l.push(a)}await Promise.all(l)}const z=(...t)=>t.find(n=>n!==void 0),M="noopener noreferrer";function X(t){const n=t.componentName||"NuxtLink",s=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return P(e,t.trailingSlash);const i="path"in e?e.path:l(e).path;return{...e,name:void 0,path:P(i,t.trailingSlash)}};return A({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=_(),c=F(),a=b(()=>{const r=e.to||e.href||"";return s(r,i.resolve)}),d=b(()=>typeof a.value=="string"&&R(a.value,{acceptRelative:!0})),v=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof a.value=="object"?!1:a.value===""||d.value),y=x(!1),h=x(null),k=r=>{var f;h.value=e.custom?(f=r==null?void 0:r.$el)==null?void 0:f.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Q()){const f=S();let m,o=null;L(()=>{const p=$();T(()=>{m=B(()=>{var g;(g=h==null?void 0:h.value)!=null&&g.tagName&&(o=p.observe(h.value,async()=>{o==null||o(),o=null;const u=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",u).catch(()=>{}),!v.value&&q(a.value,i).catch(()=>{})]),y.value=!0}))})})}),E(()=>{m&&N(m),o==null||o(),o=null})}return()=>{var p,g;if(!v.value){const u={ref:k,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(y.value&&(u.class=e.prefetchedClass||t.prefetchedClass),u.rel=e.rel),C(U("RouterLink"),u,l.default)}const r=typeof a.value=="object"?((p=i.resolve(a.value))==null?void 0:p.href)??null:a.value&&!e.external&&!d.value?s(w(c.app.baseURL,a.value),i.resolve):a.value||null,f=e.target||null,m=e.noRel?null:z(e.rel,t.externalRelAttribute,r?M:"")||null,o=()=>O(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:o,get route(){if(!r)return;const u=j(r);return{path:u.pathname,fullPath:u.pathname,get query(){return I(u.search)},hash:u.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:m,target:f,isExternal:v.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:h,href:r,rel:m,target:f},(g=l.default)==null?void 0:g.call(l))}}})}const Y=X(D);function P(t,n){const s=n==="append"?V:H;return R(t)&&!t.startsWith("http")?t:s(t,!0)}function $(){const t=S();if(t._observer)return t._observer;let n=null;const s=new Map,e=(i,c)=>(n||(n=new IntersectionObserver(a=>{for(const d of a){const v=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&v&&v()}})),s.set(i,c),n.observe(i),()=>{s.delete(i),n.unobserve(i),s.size===0&&(n.disconnect(),n=null)});return t._observer={observe:e}}function Q(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{Y as _};

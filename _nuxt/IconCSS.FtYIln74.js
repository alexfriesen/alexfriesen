import{g as m,aC as f,ao as I,l as r,o as x,c as d,aq as v}from"./entry.BRWWg_yR.js";import{r as _}from"./index.0wqzsba0.js";import{_ as S}from"./_plugin-vue_export-helper.x3n3nnut.js";const g=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"488e9360":p.value}));const o=I(),t=u,l=r(()=>{var e,n;return(n=(e=o.nuxtIcon)==null?void 0:e.aliases)!=null&&n[t.name]?o.nuxtIcon.aliases[t.name]:t.name}),c=r(()=>_(l.value)),p=r(()=>{var s,a;const e=(a=(s=o.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=r(()=>{var n,s,a;if(!t.size&&typeof((n=o.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((s=o.nuxtIcon)!=null&&s.size))return;const e=t.size||((a=o.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),d("span",{style:v({width:i.value,height:i.value})},null,4))}}),U=S(g,[["__scopeId","data-v-70cea3be"]]);export{U as default};

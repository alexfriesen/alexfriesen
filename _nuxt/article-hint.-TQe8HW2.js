import{_ as O,u as I}from"./selectMenu.9Rawpyfd.js";import{_ as S}from"./Avatar.pCIzXdJj.js";import{_ as U}from"./Button.ro6I5CYC.js";import{m as N,j as v,g as V,k as F,l as H,v as $,x as q,o,c as l,a as k,f as c,A as n,i as a,y as u,z as b,d as B,t as C,F as A,r as j,K as y,w as D}from"./entry.BRWWg_yR.js";import{_ as z}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./Icon.TPFlCPHs.js";import"./index.0wqzsba0.js";import"./nuxt-link.P3BzF5TA.js";const E={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},r=N(v.ui.strategy,v.ui.alert,E),J=V({components:{UIcon:O,UAvatar:S,UButton:U},inheritAttrs:!1,props:{title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>r.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>r.default.color,validator(t){return[...v.ui.colors,...Object.keys(r.color)].includes(t)}},variant:{type:String,default:()=>r.default.variant,validator(t){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(e=>Object.keys(e))].includes(t)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(t){const{ui:e,attrs:d}=I("alert",F(t,"ui"),r),h=H(()=>{var p,g;const i=((g=(p=e.value.color)==null?void 0:p[t.color])==null?void 0:g[t.variant])||e.value.variant[t.variant];return $(q(e.value.wrapper,e.value.rounded,e.value.shadow,e.value.padding,i==null?void 0:i.replaceAll("{color}",t.color)),t.class)});function w(i){i.click&&i.click()}return{ui:e,attrs:d,alertClass:h,onAction:w,twMerge:$}}});function K(t,e,d,h,w,i){const p=O,g=S,f=U;return o(),l("div",u({class:t.alertClass},t.attrs),[k("div",{class:n(["flex",[t.ui.gap,{"items-start":t.description||t.$slots.description,"items-center":!t.description&&!t.$slots.description}]])},[t.icon?(o(),c(p,{key:0,name:t.icon,class:n(t.ui.icon.base)},null,8,["name","class"])):a("",!0),t.avatar?(o(),c(g,u({key:1},{size:t.ui.avatar.size,...t.avatar},{class:t.ui.avatar.base}),null,16,["class"])):a("",!0),k("div",{class:n(t.ui.inner)},[k("p",{class:n(t.ui.title)},[b(t.$slots,"title",{title:t.title},()=>[B(C(t.title),1)])],2),t.description||t.$slots.description?(o(),l("p",{key:0,class:n(t.ui.description)},[b(t.$slots,"description",{description:t.description},()=>[B(C(t.description),1)])],2)):a("",!0),(t.description||t.$slots.description)&&t.actions.length?(o(),l("div",{key:1,class:n(t.ui.actions)},[(o(!0),l(A,null,j(t.actions,(s,m)=>(o(),c(f,u({key:m},{...t.ui.default.actionButton||{},...s},{onClick:y(M=>t.onAction(s),["stop"])}),null,16,["onClick"]))),128))],2)):a("",!0)],2),t.closeButton||!t.description&&!t.$slots.description&&t.actions.length?(o(),l("div",{key:2,class:n(t.twMerge(t.ui.actions,"mt-0"))},[!t.description&&!t.$slots.description&&t.actions.length?(o(!0),l(A,{key:0},j(t.actions,(s,m)=>(o(),c(f,u({key:m},{...t.ui.default.actionButton||{},...s},{onClick:y(M=>t.onAction(s),["stop"])}),null,16,["onClick"]))),128)):a("",!0),t.closeButton?(o(),c(f,u({key:1,"aria-label":"Close"},{...t.ui.default.closeButton||{},...t.closeButton},{onClick:e[0]||(e[0]=y(s=>t.$emit("close"),["stop"]))}),null,16)):a("",!0)],2)):a("",!0)],2)],16)}const L=z(J,[["render",K]]),P={};function R(t,e){const d=L;return o(),c(d,{class:"not-prose",color:"primary",variant:"soft",title:"Hint",icon:"i-heroicons-information-circle"},{description:D(()=>[b(t.$slots,"default")]),_:3})}const x=z(P,[["render",R]]);export{x as default};

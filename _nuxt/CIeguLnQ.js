import{f as g,$ as C,k as b,V as S,G as _,Z as Q,W as $,Y as k}from"./B4pz-2oQ.js";import{a as O,q as m}from"./NakVIFzH.js";import"./DdoDhd9s.js";const A=g({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:n,without:o,where:a,sort:f,limit:l,skip:d,locale:s,find:y}=C(u),h=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),p=!S().public.content.experimental.advanceQuery;_(()=>u,()=>r(),{deep:!0});const i=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:c,refresh:r}=await O(`content-query-${Q(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),n.value&&(e=e.only(n.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),f.value&&(e=e.sort(f.value)),l.value&&(e=e.limit(l.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),y.value==="one"?e.findOne().then(i):y.value==="surround"?t.value?p?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:h,data:c,refresh:r}},render(u){var v;const t=$(),{data:n,refresh:o,isPartial:a,path:f,only:l,without:d,where:s,sort:y,limit:h,skip:p,locale:i,find:c}=u,r={path:f,only:l,without:d,where:s,sort:y,limit:h,skip:p,locale:i,find:c};if(r.find==="one"){if(!n&&(t!=null&&t["not-found"]))return t["not-found"]({props:r,...this.$attrs});if(t!=null&&t.empty&&(n==null?void 0:n._type)==="markdown"&&!((v=n==null?void 0:n.body)!=null&&v.children.length))return t.empty({props:r,...this.$attrs})}else if((!n||!n.length)&&t!=null&&t["not-found"])return t["not-found"]({props:r,...this.$attrs});return t!=null&&t.default?t.default({data:n,refresh:o,isPartial:a,props:r,...this.$attrs}):((w,q)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:n,props:r,isPartial:a})}}),N=A,P=Object.assign(N,{__name:"ContentQuery"});export{P as default};
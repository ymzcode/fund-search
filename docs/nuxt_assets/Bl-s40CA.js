import{d as w,r as V,j as B,o as S,t as u,v,z as e,A as s,O as y,x as b,P as C,Q as M,B as p,M as k,u as m,C as I,D as T}from"./CJEw5TCq.js";import{b as j,c as F,a as f}from"./DJpY0vwv.js";import{V as G,a as L}from"./DMWigWV8.js";import{V as N}from"./Cb9gBCgD.js";import{_ as A}from"./DlAUqK2U.js";import"./CXFcH0r8.js";import"./ErUEimNZ.js";import"./AnnWqU32.js";import"./Ck3a5Fyn.js";const D=d=>(I("data-v-83751a9d"),d=d(),T(),d),X={style:{"min-height":"100%"},class:"cpa-flex cpa-w-full cpa-border-box cpa-justify-center cpa-align-center"},Y=y('<div class="gradient-bg" data-v-83751a9d><svg xmlns="http://www.w3.org/2000/svg" data-v-83751a9d><defs data-v-83751a9d><filter id="goo" data-v-83751a9d><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" data-v-83751a9d></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" data-v-83751a9d></feColorMatrix><feBlend in="SourceGraphic" in2="goo" data-v-83751a9d></feBlend></filter></defs></svg><div class="gradients-container" data-v-83751a9d><div class="g1" data-v-83751a9d></div><div class="g2" data-v-83751a9d></div><div class="g3" data-v-83751a9d></div><div class="g4" data-v-83751a9d></div><div class="g5" data-v-83751a9d></div><div class="interactive" data-v-83751a9d></div></div></div>',1),q=D(()=>b("h1",{class:"font-weight-bold text-h2 text-basil"}," Foundation Database ",-1)),E={class:"cpa-flex cpa-row cpa-justify-between"},$=w({__name:"index",setup(d){const r=V(""),h=[{label:"国自然项目",value:1},{label:"国自然成果",value:2},{label:"地方基金项目",value:3},{label:"欧洲基金项目",value:4},{label:"美国基金项目",value:5}],_=B(()=>{switch(r.value){case 1:return"请输入获批项目的标题、摘要、关键词、批准号";case 2:return"请输入国自然成果关键词";case 3:return"请输入地方基金项目关键词";case 4:return"请输入欧洲基金项目关键词";case 5:return"请输入美国基金项目关键词";default:return"请输入关键词"}}),x=()=>{m().push({path:"/searchList"})},g=()=>{m().push({path:"/advancedSearch"})};return S(()=>{const l=document.querySelector(".interactive");let t=0,a=0,o=0,n=0;const i=()=>{t+=(o-t)/20,a+=(n-a)/20,l.style.transform=`translate(${Math.round(t)}px, ${Math.round(a)}px)`,requestAnimationFrame(()=>{i()})};window.addEventListener("mousemove",c=>{o=c.clientX,n=c.clientY}),i()}),(l,t)=>(u(),v("div",X,[Y,e(j,{color:"basil",class:"cpa-w-full",elevation:"0",style:{background:"transparent"}},{default:s(()=>[e(F,{class:"text-center justify-center py-6"},{default:s(()=>[q]),_:1}),b("view",E,[e(G,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=a=>r.value=a),"bg-color":"transparent",color:"basil"},{default:s(()=>[(u(),v(C,null,M(h,a=>e(L,{value:a.value,text:a.label},null,8,["value","text"])),64))]),_:1},8,["modelValue"]),e(f,{"prepend-icon":"mdi-file-search",variant:"text",class:"cpa-mt-10",onClick:g},{default:s(()=>[p("高级搜索")]),_:1})]),e(N,{class:"cpa-mt-20 cpa-mx-10",label:k(_),variant:"outlined"},{"append-inner":s(()=>[e(f,{variant:"outlined","prepend-icon":"mdi-magnify",onClick:x},{default:s(()=>[p("搜索")]),_:1})]),_:1},8,["label"])]),_:1})]))}}),W=A($,[["__scopeId","data-v-83751a9d"]]);export{W as default};

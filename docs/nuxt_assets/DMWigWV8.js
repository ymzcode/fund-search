import{m as A,u as F,a as z,d as H,e as N,f as O,g as q}from"./DJpY0vwv.js";import{f as Z,a as J,s as K,u as L}from"./ErUEimNZ.js";import{b as R,V as Q,a as ee}from"./AnnWqU32.js";import{R as W,S as ae,T as G,r as E,j as P,z as d,P as I,U as T,V as te,W as u,X as le,Y as oe,Z as se}from"./CJEw5TCq.js";import{u as U}from"./CXFcH0r8.js";import{m as ne,V as M}from"./Ck3a5Fyn.js";const re=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ae(A({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),ie=G()({name:"VTab",props:re(),setup(e,s){let{slots:c,attrs:a}=s;const{textColorClasses:b,textColorStyles:y}=F(e,"sliderColor"),v=E(),S=E(),n=P(()=>e.direction==="horizontal"),x=P(()=>{var r,t;return((t=(r=v.value)==null?void 0:r.group)==null?void 0:t.isSelected.value)??!1});function k(r){var l,i;let{value:t}=r;if(t){const o=(i=(l=v.value)==null?void 0:l.$el.parentElement)==null?void 0:i.querySelector(".v-tab--selected .v-tab__slider"),w=S.value;if(!o||!w)return;const _=getComputedStyle(o).color,f=o.getBoundingClientRect(),m=w.getBoundingClientRect(),V=n.value?"x":"y",C=n.value?"X":"Y",B=n.value?"right":"bottom",g=n.value?"width":"height",p=f[V],D=m[V],h=p>D?f[B]-m[B]:f[V]-m[V],X=Math.sign(h)>0?n.value?"right":"bottom":Math.sign(h)<0?n.value?"left":"top":"center",Y=(Math.abs(h)+(Math.sign(h)<0?f[g]:m[g]))/Math.max(f[g],m[g])||0,j=f[g]/m[g]||0,$=1.5;J(w,{backgroundColor:[_,"currentcolor"],transform:[`translate${C}(${h}px) scale${C}(${j})`,`translate${C}(${h/$}px) scale${C}(${(Y-1)/$+1})`,"none"],transformOrigin:Array(3).fill(X)},{duration:225,easing:K})}}return U(()=>{const r=z.filterProps(e);return d(z,T({symbol:R,ref:v,class:["v-tab",e.class],style:e.style,tabindex:x.value?0:-1,role:"tab","aria-selected":String(x.value),active:!1},r,a,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":k}),{...c,default:()=>{var t;return d(I,null,[((t=c.default)==null?void 0:t.call(c))??e.text,!e.hideSlider&&d("div",{ref:S,class:["v-tab__slider",b.value],style:y.value},null)])}})}),Z({},v)}});function de(e){return e?e.map(s=>se(s)?s:{text:s,value:s}):[]}const ue=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ne({mandatory:"force",selectedClass:"v-tab-item--selected"}),...H(),...N()},"VTabs"),xe=G()({name:"VTabs",props:ue(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:c,slots:a}=s;const b=te(e,"modelValue"),y=P(()=>de(e.items)),{densityClasses:v}=O(e),{backgroundColorClasses:S,backgroundColorStyles:n}=q(u(e,"bgColor")),{scopeId:x}=L();return le({VTab:{color:u(e,"color"),direction:u(e,"direction"),stacked:u(e,"stacked"),fixed:u(e,"fixedTabs"),sliderColor:u(e,"sliderColor"),hideSlider:u(e,"hideSlider")}}),U(()=>{const k=M.filterProps(e),r=!!(a.window||e.items.length>0);return d(I,null,[d(M,T(k,{modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},v.value,S.value,e.class],style:[{"--v-tabs-height":oe(e.height)},n.value,e.style],role:"tablist",symbol:R},x,c),{default:()=>{var t;return[((t=a.default)==null?void 0:t.call(a))??y.value.map(l=>{var i;return((i=a.tab)==null?void 0:i.call(a,{item:l}))??d(ie,T(l,{key:l.text,value:l.value}),{default:a[`tab.${l.value}`]?()=>{var o;return(o=a[`tab.${l.value}`])==null?void 0:o.call(a,{item:l})}:void 0})})]}}),r&&d(Q,T({modelValue:b.value,"onUpdate:modelValue":t=>b.value=t,key:"tabs-window"},x),{default:()=>{var t;return[y.value.map(l=>{var i;return((i=a.item)==null?void 0:i.call(a,{item:l}))??d(ee,{value:l.value},{default:()=>{var o;return(o=a[`item.${l.value}`])==null?void 0:o.call(a,{item:l})}})}),(t=a.window)==null?void 0:t.call(a)]}})])}),{}}});export{xe as V,ie as a};

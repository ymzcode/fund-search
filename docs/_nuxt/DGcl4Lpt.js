import{a as _e,u as Fe,V as pe}from"./BnPg1XQW.js";import{R as j,ak as Le,a4 as Se,T as le,a5 as Ce,X as Oe,W as Z,z as i,U as M,_ as ne,aq as he,$ as Pe,V as ce,j as D,a9 as ge,aa as Ee,ac as Me,P as N,H as $,ap as He,a7 as q,F as ye,r as Y,at as we,ag as ue,au as ze,ad as Ie,av as de,af as Ke,aw as qe,Y as ae,o as Ue,S as Ge,ax as Ne,B as $e,ay as ke,al as je}from"./DxoaqdtO.js";import{f as We}from"./D5aNTdsp.js";import{m as Xe,u as Ye,a as Je,b as Ve}from"./BlzxdIvV.js";import{t as Qe,e as xe,v as Te,n as Ze,w as el,d as ll,x as tl,o as al,y as nl,z as ol,A as sl,R as il,B as ul,C as rl,f as cl,D as dl,E as vl,F as fl,p as ml,G as pl,H as hl,I as gl,l as J,h as ee,J as ve,K as yl,N as kl,O as Vl}from"./D0rNfoU0.js";import{V as bl,a as Sl}from"./C513aNsV.js";import{m as oe,u as se,a as Ae}from"./D6NiUU83.js";import{g as Cl}from"./ChSr-vkm.js";import{V as Pl}from"./Cku7OVbL.js";import{m as wl,V as be}from"./B_RRiQYC.js";const Re=Symbol.for("vuetify:v-chip-group"),Il=j({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Le},...wl(),...oe(),...Qe({selectedClass:"v-chip--selected"}),...xe(),...Se(),...Te({variant:"tonal"})},"VChipGroup");le()({name:"VChipGroup",props:Il(),emits:{"update:modelValue":e=>!0},setup(e,v){let{slots:t}=v;const{themeClasses:d}=Ce(e),{isSelected:a,select:f,next:g,prev:u,selected:s}=Ze(e,Re);return Oe({VChip:{color:Z(e,"color"),disabled:Z(e,"disabled"),filter:Z(e,"filter"),variant:Z(e,"variant")}}),se(()=>{const y=be.filterProps(e);return i(be,M(y,{class:["v-chip-group",{"v-chip-group--column":e.column},d.value,e.class],style:e.style}),{default:()=>{var w;return[(w=t.default)==null?void 0:w.call(t,{isSelected:a,select:f,next:g,prev:u,selected:s.value})]}})}),{}}});const xl=j({activeClass:String,appendAvatar:String,appendIcon:ne,closable:Boolean,closeIcon:{type:ne,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:he(),onClickOnce:he(),...el(),...oe(),...ll(),...tl(),...al(),...nl(),...ol(),...sl(),...xe({tag:"span"}),...Se(),...Te({variant:"tonal"})},"VChip"),Tl=le()({name:"VChip",directives:{Ripple:il},props:xl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,v){let{attrs:t,emit:d,slots:a}=v;const{t:f}=Pe(),{borderClasses:g}=ul(e),{colorClasses:u,colorStyles:s,variantClasses:y}=rl(e),{densityClasses:w}=cl(e),{elevationClasses:_}=dl(e),{roundedClasses:c}=vl(e),{sizeClasses:C}=fl(e),{themeClasses:P}=Ce(e),I=ce(e,"modelValue"),o=ml(e,Re,!1),k=pl(e,t),A=D(()=>e.link!==!1&&k.isLink.value),F=D(()=>!e.disabled&&e.link!==!1&&(!!o||e.link||k.isClickable.value)),R=D(()=>({"aria-label":f(e.closeLabel),onClick(m){m.preventDefault(),m.stopPropagation(),I.value=!1,d("click:close",m)}}));function U(m){var O;d("click",m),F.value&&((O=k.navigate)==null||O.call(k,m),o==null||o.toggle())}function Q(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),U(m))}return()=>{const m=k.isLink.value?"a":e.tag,O=!!(e.appendIcon||e.appendAvatar),H=!!(O||a.append),E=!!(a.close||e.closable),z=!!(a.filter||e.filter)&&o,W=!!(e.prependIcon||e.prependAvatar),K=!!(W||a.prepend),G=!o||o.isSelected.value;return I.value&&ge(i(m,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":F.value,"v-chip--filter":z,"v-chip--pill":e.pill},P.value,g.value,G?u.value:void 0,w.value,_.value,c.value,C.value,y.value,o==null?void 0:o.selectedClass.value,e.class],style:[G?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:k.href.value,tabindex:F.value?0:void 0,onClick:U,onKeydown:F.value&&!A.value&&Q},{default:()=>{var L;return[hl(F.value,"v-chip"),z&&i(gl,{key:"filter"},{default:()=>[ge(i("div",{class:"v-chip__filter"},[a.filter?i(ee,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):i(J,{key:"filter-icon",icon:e.filterIcon},null)]),[[Me,o.isSelected.value]])]}),K&&i("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?i(ee,{key:"prepend-defaults",disabled:!W,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):i(N,null,[e.prependIcon&&i(J,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ve,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((L=a.default)==null?void 0:L.call(a,{isSelected:o==null?void 0:o.isSelected.value,selectedClass:o==null?void 0:o.selectedClass.value,select:o==null?void 0:o.select,toggle:o==null?void 0:o.toggle,value:o==null?void 0:o.value.value,disabled:e.disabled}))??e.text]),H&&i("div",{key:"append",class:"v-chip__append"},[a.append?i(ee,{key:"append-defaults",disabled:!O,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):i(N,null,[e.appendIcon&&i(J,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ve,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),E&&i("button",M({key:"close",class:"v-chip__close",type:"button"},R.value),[a.close?i(ee,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):i(J,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ee("ripple"),F.value&&e.ripple,null]])}}}),Al=j({renderless:Boolean,...oe()},"VVirtualScrollItem"),Rl=le()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Al(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:t,emit:d,slots:a}=v;const{resizeRef:f,contentRect:g}=Ae(void 0,"border");$(()=>{var u;return(u=g.value)==null?void 0:u.height},u=>{u!=null&&d("update:height",u)}),se(()=>{var u,s;return e.renderless?i(N,null,[(u=a.default)==null?void 0:u.call(a,{itemRef:f})]):i("div",M({ref:f,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(s=a.default)==null?void 0:s.call(a)])})}}),Bl=-1,Dl=1,re=100,_l=j({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Fl(e,v){const t=He(),d=q(0);ye(()=>{d.value=parseFloat(e.itemHeight||0)});const a=q(0),f=q(Math.ceil((parseInt(e.height)||t.height.value)/(d.value||16))||1),g=q(0),u=q(0),s=Y(),y=Y();let w=0;const{resizeRef:_,contentRect:c}=Ae();ye(()=>{_.value=s.value});const C=D(()=>{var l;return s.value===document.documentElement?t.height.value:((l=c.value)==null?void 0:l.height)||parseInt(e.height)||0}),P=D(()=>!!(s.value&&y.value&&C.value&&d.value));let I=Array.from({length:v.value.length}),o=Array.from({length:v.value.length});const k=q(0);let A=-1;function F(l){return I[l]||d.value}const R=ze(()=>{const l=performance.now();o[0]=0;const r=v.value.length;for(let b=1;b<=r-1;b++)o[b]=(o[b-1]||0)+F(b-1);k.value=Math.max(k.value,performance.now()-l)},k),U=$(P,l=>{l&&(U(),w=y.value.offsetTop,R.immediate(),L(),~A&&Ie(()=>{de&&window.requestAnimationFrame(()=>{te(A),A=-1})}))});we(()=>{R.clear()});function Q(l,r){const b=I[l],V=d.value;d.value=V?Math.min(d.value,r):r,(b!==r||V!==d.value)&&(I[l]=r,R())}function m(l){return l=ue(l,0,v.value.length-1),o[l]||0}function O(l){return Ll(o,l)}let H=0,E=0,z=0;$(C,(l,r)=>{r&&(L(),l<r&&requestAnimationFrame(()=>{E=0,L()}))});function W(){if(!s.value||!y.value)return;const l=s.value.scrollTop,r=performance.now();r-z>500?(E=Math.sign(l-H),w=y.value.offsetTop):E=l-H,H=l,z=r,L()}function K(){!s.value||!y.value||(E=0,z=0,L())}let G=-1;function L(){cancelAnimationFrame(G),G=requestAnimationFrame(ie)}function ie(){if(!s.value||!C.value)return;const l=H-w,r=Math.sign(E),b=Math.max(0,l-re),V=ue(O(b),0,v.value.length),p=l+C.value+re,S=ue(O(p)+1,V+1,v.value.length);if((r!==Bl||V<a.value)&&(r!==Dl||S>f.value)){const h=m(a.value)-m(V),x=m(S)-m(f.value);Math.max(h,x)>re?(a.value=V,f.value=S):(V<=0&&(a.value=V),S>=v.value.length&&(f.value=S))}g.value=m(a.value),u.value=m(v.value.length)-m(f.value)}function te(l){const r=m(l);!s.value||l&&!r?A=l:s.value.scrollTop=r}const n=D(()=>v.value.slice(a.value,f.value).map((l,r)=>({raw:l,index:r+a.value})));return $(v,()=>{I=Array.from({length:v.value.length}),o=Array.from({length:v.value.length}),R.immediate(),L()},{deep:!0}),{containerRef:s,markerRef:y,computedItems:n,paddingTop:g,paddingBottom:u,scrollToIndex:te,handleScroll:W,handleScrollend:K,handleItemResize:Q}}function Ll(e,v){let t=e.length-1,d=0,a=0,f=null,g=-1;if(e[t]<v)return t;for(;d<=t;)if(a=d+t>>1,f=e[a],f>v)t=a-1;else if(f<v)g=a,d=a+1;else return f===v?a:d;return g}const Ol=j({items:{type:Array,default:()=>[]},renderless:Boolean,..._l(),...oe(),...yl()},"VVirtualScroll"),El=le()({name:"VVirtualScroll",props:Ol(),setup(e,v){let{slots:t}=v;const d=Ke("VVirtualScroll"),{dimensionStyles:a}=kl(e),{containerRef:f,markerRef:g,handleScroll:u,handleScrollend:s,handleItemResize:y,scrollToIndex:w,paddingTop:_,paddingBottom:c,computedItems:C}=Fl(e,Z(e,"items"));return qe(()=>e.renderless,()=>{function P(){var k,A;const o=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";f.value===document.documentElement?(document[o]("scroll",u,{passive:!0}),document[o]("scrollend",s)):((k=f.value)==null||k[o]("scroll",u,{passive:!0}),(A=f.value)==null||A[o]("scrollend",s))}Ue(()=>{f.value=Cl(d.vnode.el,!0),P(!0)}),we(P)}),se(()=>{const P=C.value.map(I=>i(Rl,{key:I.index,renderless:e.renderless,"onUpdate:height":o=>y(I.index,o)},{default:o=>{var k;return(k=t.default)==null?void 0:k.call(t,{item:I.raw,index:I.index,...o})}}));return e.renderless?i(N,null,[i("div",{ref:g,class:"v-virtual-scroll__spacer",style:{paddingTop:ae(_.value)}},null),P,i("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ae(c.value)}},null)]):i("div",{ref:f,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:s,style:[a.value,e.style]},[i("div",{ref:g,class:"v-virtual-scroll__container",style:{paddingTop:ae(_.value),paddingBottom:ae(c.value)}},[P])])}),{scrollToIndex:w}}});function Ml(e,v){const t=q(!1);let d;function a(u){cancelAnimationFrame(d),t.value=!0,d=requestAnimationFrame(()=>{d=requestAnimationFrame(()=>{t.value=!1})})}async function f(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(t.value){const s=$(t,()=>{s(),u()})}else u()})}async function g(u){var w,_;if(u.key==="Tab"&&((w=v.value)==null||w.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const s=(_=e.value)==null?void 0:_.$el;if(!s)return;(u.key==="Home"||u.key==="End")&&s.scrollTo({top:u.key==="Home"?0:s.scrollHeight,behavior:"smooth"}),await f();const y=s.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const c=s.getBoundingClientRect().top;for(const C of y)if(C.getBoundingClientRect().top>=c){C.focus();break}}else{const c=s.getBoundingClientRect().bottom;for(const C of[...y].reverse())if(C.getBoundingClientRect().bottom<=c){C.focus();break}}}return{onListScroll:a,onListKeydown:g}}const Hl=j({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ne,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Xe({itemChildren:!1})},"Select"),zl=j({...Hl(),...Ge(_e({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Vl({transition:{component:bl}})},"VSelect"),Jl=le()({name:"VSelect",props:zl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:t}=v;const{t:d}=Pe(),a=Y(),f=Y(),g=Y(),u=ce(e,"menu"),s=D({get:()=>u.value,set:n=>{var l;u.value&&!n&&((l=f.value)!=null&&l.ΨopenChildren)||(u.value=n)}}),{items:y,transformIn:w,transformOut:_}=Ye(e),c=ce(e,"modelValue",[],n=>w(n===null?[null]:je(n)),n=>{const l=_(n);return e.multiple?l:l[0]??null}),C=D(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:c.value.length),P=Fe(),I=D(()=>c.value.map(n=>n.value)),o=q(!1),k=D(()=>s.value?e.closeText:e.openText);let A="",F;const R=D(()=>e.hideSelected?y.value.filter(n=>!c.value.some(l=>e.valueComparator(l,n))):y.value),U=D(()=>e.hideNoData&&!R.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),Q=D(()=>{var n;return{...e.menuProps,activatorProps:{...((n=e.menuProps)==null?void 0:n.activatorProps)||{},"aria-haspopup":"listbox"}}}),m=Y(),{onListScroll:O,onListKeydown:H}=Ml(m,a);function E(n){e.openOnClear&&(s.value=!0)}function z(){U.value||(s.value=!s.value)}function W(n){var p,S;if(!n.key||e.readonly||P!=null&&P.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(n.key)&&n.preventDefault(),["Enter","ArrowDown"," "].includes(n.key)&&(s.value=!0),["Escape","Tab"].includes(n.key)&&(s.value=!1),n.key==="Home"?(p=m.value)==null||p.focus("first"):n.key==="End"&&((S=m.value)==null||S.focus("last"));const l=1e3;function r(h){const x=h.key.length===1,T=!h.ctrlKey&&!h.metaKey&&!h.altKey;return x&&T}if(e.multiple||!r(n))return;const b=performance.now();b-F>l&&(A=""),A+=n.key.toLowerCase(),F=b;const V=y.value.find(h=>h.title.toLowerCase().startsWith(A));if(V!==void 0){c.value=[V];const h=R.value.indexOf(V);de&&window.requestAnimationFrame(()=>{var x;h>=0&&((x=g.value)==null||x.scrollToIndex(h))})}}function K(n){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!n.props.disabled)if(e.multiple){const r=c.value.findIndex(V=>e.valueComparator(V.value,n.value)),b=l??!~r;if(~r){const V=b?[...c.value,n]:[...c.value];V.splice(r,1),c.value=V}else b&&(c.value=[...c.value,n])}else{const r=l!==!1;c.value=r?[n]:[],Ie(()=>{s.value=!1})}}function G(n){var l;(l=m.value)!=null&&l.$el.contains(n.relatedTarget)||(s.value=!1)}function L(){var n;o.value&&((n=a.value)==null||n.focus())}function ie(n){o.value=!0}function te(n){if(n==null)c.value=[];else if(ke(a.value,":autofill")||ke(a.value,":-webkit-autofill")){const l=y.value.find(r=>r.title===n);l&&K(l)}else a.value&&(a.value.value="")}return $(s,()=>{if(!e.hideSelected&&s.value&&c.value.length){const n=R.value.findIndex(l=>c.value.some(r=>e.valueComparator(r.value,l.value)));de&&window.requestAnimationFrame(()=>{var l;n>=0&&((l=g.value)==null||l.scrollToIndex(n))})}}),$(()=>e.items,(n,l)=>{s.value||o.value&&!l.length&&n.length&&(s.value=!0)}),se(()=>{const n=!!(e.chips||t.chip),l=!!(!e.hideNoData||R.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),r=c.value.length>0,b=pe.filterProps(e),V=r||!o.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return i(pe,M({ref:a},b,{modelValue:c.value.map(p=>p.props.value).join(", "),"onUpdate:modelValue":te,focused:o.value,"onUpdate:focused":p=>o.value=p,validationValue:c.externalValue,counterValue:C.value,dirty:r,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:V,"onClick:clear":E,"onMousedown:control":z,onBlur:G,onKeydown:W,"aria-label":d(k.value),title:d(k.value)}),{...t,default:()=>i(N,null,[i(Sl,M({ref:f,modelValue:s.value,"onUpdate:modelValue":p=>s.value=p,activator:"parent",contentClass:"v-select__content",disabled:U.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:L},Q.value),{default:()=>[l&&i(Je,M({ref:m,selected:I.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:p=>p.preventDefault(),onKeydown:H,onFocusin:ie,onScrollPassive:O,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var p,S,h;return[(p=t["prepend-item"])==null?void 0:p.call(t),!R.value.length&&!e.hideNoData&&(((S=t["no-data"])==null?void 0:S.call(t))??i(Ve,{title:d(e.noDataText)},null)),i(El,{ref:g,renderless:!0,items:R.value},{default:x=>{var me;let{item:T,index:X,itemRef:B}=x;const fe=M(T.props,{ref:B,key:X,onClick:()=>K(T,null)});return((me=t.item)==null?void 0:me.call(t,{item:T,index:X,props:fe}))??i(Ve,M(fe,{role:"option"}),{prepend:Be=>{let{isSelected:De}=Be;return i(N,null,[e.multiple&&!e.hideSelected?i(Pl,{key:T.value,modelValue:De,ripple:!1,tabindex:"-1"},null):void 0,T.props.prependAvatar&&i(ve,{image:T.props.prependAvatar},null),T.props.prependIcon&&i(J,{icon:T.props.prependIcon},null)])}})}}),(h=t["append-item"])==null?void 0:h.call(t)]}})]}),c.value.map((p,S)=>{function h(B){B.stopPropagation(),B.preventDefault(),K(p,!1)}const x={"onClick:close":h,onKeydown(B){B.key!=="Enter"&&B.key!==" "||(B.preventDefault(),B.stopPropagation(),h(B))},onMousedown(B){B.preventDefault(),B.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},T=n?!!t.chip:!!t.selection,X=T?Ne(n?t.chip({item:p,index:S,props:x}):t.selection({item:p,index:S})):void 0;if(!(T&&!X))return i("div",{key:p.value,class:"v-select__selection"},[n?t.chip?i(ee,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:p.title}}},{default:()=>[X]}):i(Tl,M({key:"chip",closable:e.closableChips,size:"small",text:p.title,disabled:p.props.disabled},x),null):X??i("span",{class:"v-select__selection-text"},[p.title,e.multiple&&S<c.value.length-1&&i("span",{class:"v-select__selection-comma"},[$e(",")])])])})]),"append-inner":function(){var x;for(var p=arguments.length,S=new Array(p),h=0;h<p;h++)S[h]=arguments[h];return i(N,null,[(x=t["append-inner"])==null?void 0:x.call(t,...S),e.menuIcon?i(J,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),We({isFocused:o,menu:s,select:K},a)}});export{Jl as V,Tl as a};

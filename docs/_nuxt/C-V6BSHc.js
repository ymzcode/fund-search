import{ae as ct,R as D,V as L,j as P,F as ie,a8 as G,af as Fe,H as Ve,ab as K,ag as ue,_ as H,T as E,$ as le,z as c,U as B,ah as dt,Y as A,r as M,ai as ft,aj as mt,ak as Ce,al as J,W as _,am as te,an as ee,ao as ce,ap as de,P as j,B as Se,aq as se,a2 as xe,y as vt,a4 as gt,a5 as ht,ar as Y,M as X,as as yt,X as bt}from"./DxoaqdtO.js";import{V as Pe}from"./DtdulUxd.js";import{V as _e,a as St}from"./DGcl4Lpt.js";import{u as W,m as xt}from"./D6NiUU83.js";import{r as Pt,s as wt,g as kt,L as pt,l as we,a as Be,d as Dt,e as It,f as Tt}from"./D0rNfoU0.js";import{V as fe}from"./Cku7OVbL.js";import{V as Ft}from"./CTfvgnIh.js";function ke(e,l,t){return Object.keys(e).filter(a=>ct(a)&&a.endsWith(l)).reduce((a,n)=>(a[n.slice(0,-l.length)]=r=>e[n](r,t(r)),a),{})}const Vt=D({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Oe=Symbol.for("vuetify:data-table-pagination");function Ct(e){const l=L(e,"page",void 0,a=>+(a??1)),t=L(e,"itemsPerPage",void 0,a=>+(a??10));return{page:l,itemsPerPage:t}}function _t(e){const{page:l,itemsPerPage:t,itemsLength:a}=e,n=P(()=>t.value===-1?0:t.value*(l.value-1)),r=P(()=>t.value===-1?a.value:Math.min(a.value,n.value+t.value)),u=P(()=>t.value===-1||a.value===0?1:Math.ceil(a.value/t.value));ie(()=>{l.value>u.value&&(l.value=u.value)});function s(g){t.value=g,l.value=1}function o(){l.value=ue(l.value+1,1,u.value)}function i(){l.value=ue(l.value-1,1,u.value)}function m(g){l.value=ue(g,1,u.value)}const v={page:l,itemsPerPage:t,startIndex:n,stopIndex:r,pageCount:u,itemsLength:a,nextPage:o,prevPage:i,setPage:m,setItemsPerPage:s};return G(Oe,v),v}function Bt(){const e=K(Oe);if(!e)throw new Error("Missing pagination!");return e}function Ot(e){const l=Fe("usePaginatedItems"),{items:t,startIndex:a,stopIndex:n,itemsPerPage:r}=e,u=P(()=>r.value<=0?t.value:t.value.slice(a.value,n.value));return Ve(u,s=>{l.emit("update:currentItems",s)}),{paginatedItems:u}}const Ae=D({prevIcon:{type:H,default:"$prev"},nextIcon:{type:H,default:"$next"},firstIcon:{type:H,default:"$first"},lastIcon:{type:H,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),pe=E()({name:"VDataTableFooter",props:Ae(),setup(e,l){let{slots:t}=l;const{t:a}=le(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:o,itemsPerPage:i,setItemsPerPage:m}=Bt(),v=P(()=>e.itemsPerPageOptions.map(g=>typeof g=="number"?{value:g,title:g===-1?a("$vuetify.dataFooter.itemsPerPageAll"):String(g)}:{...g,title:isNaN(Number(g.title))?a(g.title):g.title}));return W(()=>{var S;const g=Pe.filterProps(e);return c("div",{class:"v-data-table-footer"},[(S=t.prepend)==null?void 0:S.call(t),c("div",{class:"v-data-table-footer__items-per-page"},[c("span",null,[a(e.itemsPerPageText)]),c(_e,{items:v.value,modelValue:i.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),c("div",{class:"v-data-table-footer__info"},[c("div",null,[a(e.pageText,o.value?u.value+1:0,s.value,o.value)])]),c("div",{class:"v-data-table-footer__pagination"},[c(Pe,B({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},g),null)])])}),{}}}),ae=dt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:t}=l;const a=e.tag??"td";return c(a,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:A(e.height),width:A(e.width),maxWidth:A(e.maxWidth),left:A(e.fixedOffset||null)}},{default:()=>{var n;return[(n=t.default)==null?void 0:n.call(t)]}})}),At=D({headers:Array},"DataTable-header"),$e=Symbol.for("vuetify:data-table-headers"),Me={title:"",sortable:!1},$t={...Me,width:48};function Mt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(t=>({element:t,priority:0}));return{enqueue:(t,a)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>a){l.splice(r,0,{element:t,priority:a}),n=!0;break}n||l.push({element:t,priority:a})},size:()=>l.length,count:()=>{let t=0;if(!l.length)return 0;const a=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===a&&(t+=1);return t},dequeue:()=>l.shift()}}function oe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const t of e.children)oe(t,l);return l}function Re(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const t of e)t.key&&l.add(t.key),t.children&&Re(t.children,l);return l}function Rt(e){if(e.key){if(e.key==="data-table-group")return Me;if(["data-table-expand","data-table-select"].includes(e.key))return $t}}function me(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(t=>me(t,l+1))):l}function Et(e){let l=!1;function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s],!0);else l?isNaN(+r.width)&&mt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)t(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)t(e[r]);function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const s of r.children)u=a(s,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=a(r,n)}function Nt(e,l){const t=[];let a=0;const n=Mt(e);for(;n.size()>0;){let u=n.count();const s=[];let o=1;for(;u>0;){const{element:i,priority:m}=n.dequeue(),v=l-a-me(i);if(s.push({...i,rowspan:v??1,colspan:i.children?oe(i).length:1}),i.children)for(const g of i.children){const S=m%1+o/Math.pow(10,a+2);n.enqueue(g,a+v+S)}o+=1,u-=1}a+=1,t.push(s)}return{columns:e.map(u=>oe(u)).flat(),headers:t}}function Ee(e){const l=[];for(const t of e){const a={...Rt(t),...t},n=a.key??(typeof a.value=="string"?a.value:null),r=a.value??n??null,u={...a,key:n,value:r,sortable:a.sortable??(a.key!=null||!!a.sort),children:a.children?Ee(a.children):void 0};l.push(u)}return l}function Ht(e,l){const t=M([]),a=M([]),n=M({}),r=M({}),u=M({});ie(()=>{var b,f,y;const i=(e.headers||Object.keys(e.items[0]??{}).map(d=>({key:d,title:ft(d)}))).slice(),m=Re(i);(b=l==null?void 0:l.groupBy)!=null&&b.value.length&&!m.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(f=l==null?void 0:l.showSelect)!=null&&f.value&&!m.has("data-table-select")&&i.unshift({key:"data-table-select"}),(y=l==null?void 0:l.showExpand)!=null&&y.value&&!m.has("data-table-expand")&&i.push({key:"data-table-expand"});const v=Ee(i);Et(v);const g=Math.max(...v.map(d=>me(d)))+1,S=Nt(v,g);t.value=S.headers,a.value=S.columns;const h=S.headers.flat(1);for(const d of h)d.key&&(d.sortable&&(d.sort&&(n.value[d.key]=d.sort),d.sortRaw&&(r.value[d.key]=d.sortRaw)),d.filter&&(u.value[d.key]=d.filter))});const s={headers:t,columns:a,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return G($e,s),s}function ne(){const e=K($e);if(!e)throw new Error("Missing headers!");return e}const Lt={showSelectAll:!1,allSelected:()=>[],select:e=>{var a;let{items:l,value:t}=e;return new Set(t?[(a=l[0])==null?void 0:a.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ne={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,currentPage:t,selected:a}=e;return Ne.select({items:t,value:l,selected:a})}},He={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:t,selected:a}=e;for(const n of l)t?a.add(n.value):a.delete(n.value);return a},selectAll:e=>{let{value:l,allItems:t,selected:a}=e;return He.select({items:t,value:l,selected:a})}},jt=D({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ce}},"DataTable-select"),Le=Symbol.for("vuetify:data-table-selection");function Gt(e,l){let{allItems:t,currentPage:a}=l;const n=L(e,"modelValue",e.modelValue,y=>new Set(J(y).map(d=>{var k;return((k=t.value.find(V=>e.valueComparator(d,V.value)))==null?void 0:k.value)??d})),y=>[...y.values()]),r=P(()=>t.value.filter(y=>y.selectable)),u=P(()=>a.value.filter(y=>y.selectable)),s=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Lt;case"all":return He;case"page":default:return Ne}});function o(y){return J(y).every(d=>n.value.has(d.value))}function i(y){return J(y).some(d=>n.value.has(d.value))}function m(y,d){const k=s.value.select({items:y,value:d,selected:new Set(n.value)});n.value=k}function v(y){m([y],!o([y]))}function g(y){const d=s.value.selectAll({value:y,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=d}const S=P(()=>n.value.size>0),h=P(()=>{const y=s.value.allSelected({allItems:r.value,currentPage:u.value});return!!y.length&&o(y)}),b=P(()=>s.value.showSelectAll),f={toggleSelect:v,select:m,selectAll:g,isSelected:o,isSomeSelected:i,someSelected:S,allSelected:h,showSelectAll:b};return G(Le,f),f}function re(){const e=K(Le);if(!e)throw new Error("Missing selection!");return e}const Kt=D({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),je=Symbol.for("vuetify:data-table-sort");function Wt(e){const l=L(e,"sortBy"),t=_(e,"mustSort"),a=_(e,"multiSort");return{sortBy:l,mustSort:t,multiSort:a}}function zt(e){const{sortBy:l,mustSort:t,multiSort:a,page:n}=e,r=o=>{if(o.key==null)return;let i=l.value.map(v=>({...v}))??[];const m=i.find(v=>v.key===o.key);m?m.order==="desc"?t.value?m.order="asc":i=i.filter(v=>v.key!==o.key):m.order="desc":a.value?i=[...i,{key:o.key,order:"asc"}]:i=[{key:o.key,order:"asc"}],l.value=i,n&&(n.value=1)};function u(o){return!!l.value.find(i=>i.key===o.key)}const s={sortBy:l,toggleSort:r,isSorted:u};return G(je,s),s}function Ge(){const e=K(je);if(!e)throw new Error("Missing sort!");return e}function Ut(e,l,t,a){const n=le();return{sortedItems:P(()=>{var u,s;return t.value.length?qt(l.value,t.value,n.current.value,{transform:a==null?void 0:a.transform,sortFunctions:{...e.customKeySort,...(u=a==null?void 0:a.sortFunctions)==null?void 0:u.value},sortRawFunctions:(s=a==null?void 0:a.sortRawFunctions)==null?void 0:s.value}):l.value})}}function qt(e,l,t,a){const n=new Intl.Collator(t,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,a!=null&&a.transform?a.transform(u):u]).sort((u,s)=>{var o,i;for(let m=0;m<l.length;m++){let v=!1;const g=l[m].key,S=l[m].order??"asc";if(S===!1)continue;let h=te(u[1],g),b=te(s[1],g),f=u[0].raw,y=s[0].raw;if(S==="desc"&&([h,b]=[b,h],[f,y]=[y,f]),(o=a==null?void 0:a.sortRawFunctions)!=null&&o[g]){const d=a.sortRawFunctions[g](f,y);if(d==null)continue;if(v=!0,d)return d}if((i=a==null?void 0:a.sortFunctions)!=null&&i[g]){const d=a.sortFunctions[g](h,b);if(d==null)continue;if(v=!0,d)return d}if(!v){if(h instanceof Date&&b instanceof Date)return h.getTime()-b.getTime();if([h,b]=[h,b].map(d=>d!=null?d.toString().toLocaleLowerCase():d),h!==b)return ee(h)&&ee(b)?0:ee(h)?-1:ee(b)?1:!isNaN(h)&&!isNaN(b)?Number(h)-Number(b):n.compare(h,b)}}return 0}).map(u=>{let[s]=u;return s})}const Ke=D({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:H,default:"$sortAsc"},sortDescIcon:{type:H,default:"$sortDesc"},headerProps:{type:Object},...ce(),...Pt()},"VDataTableHeaders"),De=E()({name:"VDataTableHeaders",props:Ke(),setup(e,l){let{slots:t}=l;const{t:a}=le(),{toggleSort:n,sortBy:r,isSorted:u}=Ge(),{someSelected:s,allSelected:o,selectAll:i,showSelectAll:m}=re(),{columns:v,headers:g}=ne(),{loaderClasses:S}=wt(e);function h(I,x){if(!(!e.sticky&&!I.fixed))return{position:"sticky",left:I.fixed?A(I.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${x})`:void 0}}function b(I){const x=r.value.find(T=>T.key===I.key);return x?x.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:y}=kt(e,"color"),{displayClasses:d,mobile:k}=de(e),V=P(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:s.value,allSelected:o.value,selectAll:i,getSortIcon:b})),w=P(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},d.value,S.value]),z=I=>{let{column:x,x:T,y:p}=I;const F=x.key==="data-table-select"||x.key==="data-table-expand",O=B(e.headerProps??{},x.headerProps??{});return c(ae,B({tag:"th",align:x.align,class:[{"v-data-table__th--sortable":x.sortable&&!e.disableSort,"v-data-table__th--sorted":u(x),"v-data-table__th--fixed":x.fixed},...w.value],style:{width:A(x.width),minWidth:A(x.minWidth),maxWidth:A(x.maxWidth),...h(x,p)},colspan:x.colspan,rowspan:x.rowspan,onClick:x.sortable?()=>n(x):void 0,fixed:x.fixed,nowrap:x.nowrap,lastFixed:x.lastFixed,noPadding:F},O),{default:()=>{var N;const R=`header.${x.key}`,Z={column:x,selectAll:i,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:o.value,getSortIcon:b};return t[R]?t[R](Z):x.key==="data-table-select"?((N=t["header.data-table-select"])==null?void 0:N.call(t,Z))??(m.value&&c(fe,{modelValue:o.value,indeterminate:s.value&&!o.value,"onUpdate:modelValue":i},null)):c("div",{class:"v-data-table-header__content"},[c("span",null,[x.title]),x.sortable&&!e.disableSort&&c(we,{key:"icon",class:"v-data-table-header__sort-icon",icon:b(x)},null),e.multiSort&&u(x)&&c("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:y.value},[r.value.findIndex(q=>q.key===x.key)+1])])}})},U=()=>{const I=B(e.headerProps??{}??{}),x=P(()=>v.value.filter(p=>(p==null?void 0:p.sortable)&&!e.disableSort)),T=P(()=>{if(v.value.find(F=>F.key==="data-table-select")!=null)return o.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"});return c(ae,B({tag:"th",class:[...w.value],colspan:g.value.length+1},I),{default:()=>[c("div",{class:"v-data-table-header__content"},[c(_e,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:x.value,label:a("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:T.value,"onClick:append":()=>i(!o.value)},{...t,chip:p=>{var F;return c(St,{onClick:(F=p.item.raw)!=null&&F.sortable?()=>n(p.item.raw):void 0,onMousedown:O=>{O.preventDefault(),O.stopPropagation()}},{default:()=>[p.item.title,c(we,{class:["v-data-table__td-sort-icon",u(p.item.raw)&&"v-data-table__td-sort-icon-active"],icon:b(p.item.raw),size:"small"},null)]})}})])]})};W(()=>k.value?c("tr",null,[c(U,null,null)]):c(j,null,[t.headers?t.headers(V.value):g.value.map((I,x)=>c("tr",null,[I.map((T,p)=>c(z,{column:T,x:p,y:x},null))])),e.loading&&c("tr",{class:"v-data-table-progress"},[c("th",{colspan:v.value.length},[c(pt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:t.loader})])])]))}}),Qt=D({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),We=Symbol.for("vuetify:data-table-group");function Xt(e){return{groupBy:L(e,"groupBy")}}function Yt(e){const{disableSort:l,groupBy:t,sortBy:a}=e,n=M(new Set),r=P(()=>t.value.map(m=>({...m,order:m.order??!1})).concat(l!=null&&l.value?[]:a.value));function u(m){return n.value.has(m.id)}function s(m){const v=new Set(n.value);u(m)?v.delete(m.id):v.add(m.id),n.value=v}function o(m){function v(g){const S=[];for(const h of g.items)"type"in h&&h.type==="group"?S.push(...v(h)):S.push(h);return S}return v({type:"group",items:m,id:"dummy",key:"dummy",value:"dummy",depth:0})}const i={sortByWithGroups:r,toggleGroup:s,opened:n,groupBy:t,extractRows:o,isGroupOpen:u};return G(We,i),i}function ze(){const e=K(We);if(!e)throw new Error("Missing group!");return e}function Jt(e,l){if(!e.length)return[];const t=new Map;for(const a of e){const n=te(a.raw,l);t.has(n)||t.set(n,[]),t.get(n).push(a)}return t}function Ue(e,l){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Jt(e,l[0]),r=[],u=l.slice(1);return n.forEach((s,o)=>{const i=l[0],m=`${a}_${i}_${o}`;r.push({depth:t,id:m,key:i,value:o,items:u.length?Ue(s,u,t+1,m):s,type:"group"})}),r}function qe(e,l){const t=[];for(const a of e)"type"in a&&a.type==="group"?(a.value!=null&&t.push(a),(l.has(a.id)||a.value==null)&&t.push(...qe(a.items,l))):t.push(a);return t}function Zt(e,l,t){return{flatItems:P(()=>{if(!l.value.length)return e.value;const n=Ue(e.value,l.value.map(r=>r.key));return qe(n,t.value)})}}const ea=D({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ta=E()({name:"VDataTableGroupHeaderRow",props:ea(),setup(e,l){let{slots:t}=l;const{isGroupOpen:a,toggleGroup:n,extractRows:r}=ze(),{isSelected:u,isSomeSelected:s,select:o}=re(),{columns:i}=ne(),m=P(()=>r([e.item]));return()=>c("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(v=>{var g,S;if(v.key==="data-table-group"){const h=a(e.item)?"$expand":"$next",b=()=>n(e.item);return((g=t["data-table-group"])==null?void 0:g.call(t,{item:e.item,count:m.value.length,props:{icon:h,onClick:b}}))??c(ae,{class:"v-data-table-group-header-row__column"},{default:()=>[c(Be,{size:"small",variant:"text",icon:h,onClick:b},null),c("span",null,[e.item.value]),c("span",null,[Se("("),m.value.length,Se(")")])]})}if(v.key==="data-table-select"){const h=u(m.value),b=s(m.value)&&!h,f=y=>o(m.value,y);return((S=t["data-table-select"])==null?void 0:S.call(t,{props:{modelValue:h,indeterminate:b,"onUpdate:modelValue":f}}))??c("td",null,[c(fe,{modelValue:h,indeterminate:b,"onUpdate:modelValue":f},null)])}return c("td",null,null)})])}}),aa=D({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Qe=Symbol.for("vuetify:datatable:expanded");function la(e){const l=_(e,"expandOnClick"),t=L(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function a(s,o){const i=new Set(t.value);o?i.add(s.value):i.delete(s.value),t.value=i}function n(s){return t.value.has(s.value)}function r(s){a(s,!n(s))}const u={expand:a,expanded:t,expandOnClick:l,isExpanded:n,toggleExpand:r};return G(Qe,u),u}function Xe(){const e=K(Qe);if(!e)throw new Error("foo");return e}const na=D({index:Number,item:Object,cellProps:[Object,Function],onClick:se(),onContextmenu:se(),onDblclick:se(),...ce()},"VDataTableRow"),ra=E()({name:"VDataTableRow",props:na(),setup(e,l){let{slots:t}=l;const{displayClasses:a,mobile:n}=de(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:s,allSelected:o,selectAll:i}=re(),{isExpanded:m,toggleExpand:v}=Xe(),{toggleSort:g,sortBy:S,isSorted:h}=Ge(),{columns:b}=ne();W(()=>c("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},a.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&b.value.map((f,y)=>{const d=e.item,k=`item.${f.key}`,V=`header.${f.key}`,w={index:e.index,item:d.raw,internalItem:d,value:te(d.columns,f.key),column:f,isSelected:r,toggleSelect:u,isExpanded:m,toggleExpand:v},z={column:f,selectAll:i,isSorted:h,toggleSort:g,sortBy:S.value,someSelected:s.value,allSelected:o.value,getSortIcon:()=>""},U=typeof e.cellProps=="function"?e.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value,column:f}):e.cellProps,I=typeof f.cellProps=="function"?f.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value}):f.cellProps;return c(ae,B({align:f.align,class:{"v-data-table__td--expanded-row":f.key==="data-table-expand","v-data-table__td--select-row":f.key==="data-table-select"},fixed:f.fixed,fixedOffset:f.fixedOffset,lastFixed:f.lastFixed,maxWidth:n.value?void 0:f.maxWidth,noPadding:f.key==="data-table-select"||f.key==="data-table-expand",nowrap:f.nowrap,width:n.value?void 0:f.width},U,I),{default:()=>{var T,p,F,O,R;if(t[k]&&!n.value)return(T=t[k])==null?void 0:T.call(t,w);if(f.key==="data-table-select")return((p=t["item.data-table-select"])==null?void 0:p.call(t,w))??c(fe,{disabled:!d.selectable,modelValue:r([d]),onClick:xe(()=>u(d),["stop"])},null);if(f.key==="data-table-expand")return((F=t["item.data-table-expand"])==null?void 0:F.call(t,w))??c(Be,{icon:m(d)?"$collapse":"$expand",size:"small",variant:"text",onClick:xe(()=>v(d),["stop"])},null);const x=vt(w.value);return n.value?c(j,null,[c("div",{class:"v-data-table__td-title"},[((O=t[V])==null?void 0:O.call(t,z))??f.title]),c("div",{class:"v-data-table__td-value"},[((R=t[k])==null?void 0:R.call(t,w))??x])]):x}})})]))}}),Ye=D({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ce()},"VDataTableRows"),Ie=E()({name:"VDataTableRows",inheritAttrs:!1,props:Ye(),setup(e,l){let{attrs:t,slots:a}=l;const{columns:n}=ne(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=Xe(),{isSelected:o,toggleSelect:i}=re(),{toggleGroup:m,isGroupOpen:v}=ze(),{t:g}=le(),{mobile:S}=de(e);return W(()=>{var h,b;return e.loading&&(!e.items.length||a.loading)?c("tr",{class:"v-data-table-rows-loading",key:"loading"},[c("td",{colspan:n.value.length},[((h=a.loading)==null?void 0:h.call(a))??g(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?c("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[c("td",{colspan:n.value.length},[((b=a["no-data"])==null?void 0:b.call(a))??g(e.noDataText)])]):c(j,null,[e.items.map((f,y)=>{var V;if(f.type==="group"){const w={index:y,item:f,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:o,toggleSelect:i,toggleGroup:m,isGroupOpen:v};return a["group-header"]?a["group-header"](w):c(ta,B({key:`group-header_${f.id}`,item:f},ke(t,":group-header",()=>w)),a)}const d={index:y,item:f.raw,internalItem:f,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:o,toggleSelect:i},k={...d,props:B({key:`item_${f.key??f.index}`,onClick:r.value?()=>{u(f)}:void 0,index:y,item:f,cellProps:e.cellProps,mobile:S.value},ke(t,":row",()=>d),typeof e.rowProps=="function"?e.rowProps({item:d.item,index:d.index,internalItem:d.internalItem}):e.rowProps)};return c(j,{key:k.props.key},[a.item?a.item(k):c(ra,k.props,a),s(f)&&((V=a["expanded-row"])==null?void 0:V.call(a,d))])})])}),{}}}),Je=D({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...xt(),...Dt(),...It(),...gt()},"VTable"),Te=E()({name:"VTable",props:Je(),setup(e,l){let{slots:t,emit:a}=l;const{themeClasses:n}=ht(e),{densityClasses:r}=Tt(e);return W(()=>c(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!t.top,"v-table--has-bottom":!!t.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var u,s,o;return[(u=t.top)==null?void 0:u.call(t),t.default?c("div",{class:"v-table__wrapper",style:{height:A(e.height)}},[c("table",null,[t.default()])]):(s=t.wrapper)==null?void 0:s.call(t),(o=t.bottom)==null?void 0:o.call(t)]}})),{}}}),ua=D({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function sa(e,l,t,a){const n=e.returnObject?l:Y(l,e.itemValue),r=Y(l,e.itemSelectable,!0),u=a.reduce((s,o)=>(o.key!=null&&(s[o.key]=Y(l,o.value)),s),{});return{type:"item",key:e.returnObject?Y(l,e.itemValue):n,index:t,value:n,selectable:r,columns:u,raw:l}}function oa(e,l,t){return l.map((a,n)=>sa(e,a,n,t))}function ia(e,l){return{items:P(()=>oa(e,e.items,l.value))}}function ca(e){let{page:l,itemsPerPage:t,sortBy:a,groupBy:n,search:r}=e;const u=Fe("VDataTable"),s=P(()=>({page:l.value,itemsPerPage:t.value,sortBy:a.value,groupBy:n.value,search:r.value}));let o=null;Ve(s,()=>{Ce(o,s.value)||(o&&o.search!==s.value.search&&(l.value=1),u.emit("update:options",s.value),o=s.value)},{deep:!0,immediate:!0})}const da=(e,l,t)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),fa=D({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function ma(e,l,t){var s;const a=[],n=(t==null?void 0:t.default)??da,r=t!=null&&t.filterKeys?J(t.filterKeys):!1,u=Object.keys((t==null?void 0:t.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return a;e:for(let o=0;o<e.length;o++){const[i,m=i]=J(e[o]),v={},g={};let S=-1;if((l||u>0)&&!(t!=null&&t.noFilter)){if(typeof i=="object"){const f=r||Object.keys(m);for(const y of f){const d=Y(m,y),k=(s=t==null?void 0:t.customKeyFilter)==null?void 0:s[y];if(S=k?k(d,l,i):n(d,l,i),S!==-1&&S!==!1)k?v[y]=S:g[y]=S;else if((t==null?void 0:t.filterMode)==="every")continue e}}else S=n(i,l,i),S!==-1&&S!==!1&&(g.title=S);const h=Object.keys(g).length,b=Object.keys(v).length;if(!h&&!b||(t==null?void 0:t.filterMode)==="union"&&b!==u&&!h||(t==null?void 0:t.filterMode)==="intersection"&&(b!==u||!h))continue}a.push({index:o,matches:{...g,...v}})}return a}function va(e,l,t,a){const n=M([]),r=M(new Map),u=P(()=>a!=null&&a.transform?X(l).map(o=>[o,a.transform(o)]):X(l));ie(()=>{const o=typeof t=="function"?t():X(t),i=typeof o!="string"&&typeof o!="number"?"":String(o),m=ma(u.value,i,{customKeyFilter:{...e.customKeyFilter,...X(a==null?void 0:a.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),v=X(l),g=[],S=new Map;m.forEach(h=>{let{index:b,matches:f}=h;const y=v[b];g.push(y),S.set(y.value,f)}),n.value=g,r.value=S});function s(o){return r.value.get(o.value)}return{filteredItems:n,filteredMatches:r,getMatches:s}}const ga=D({...Ye(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...aa(),...Qt(),...At(),...ua(),...jt(),...Kt(),...Ke(),...Je()},"DataTable"),ha=D({...Vt(),...ga(),...fa(),...Ae()},"VDataTable"),pa=E()({name:"VDataTable",props:ha(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:t,slots:a}=l;const{groupBy:n}=Xt(e),{sortBy:r,multiSort:u,mustSort:s}=Wt(e),{page:o,itemsPerPage:i}=Ct(e),{disableSort:m}=yt(e),{columns:v,headers:g,sortFunctions:S,sortRawFunctions:h,filterFunctions:b}=Ht(e,{groupBy:n,showSelect:_(e,"showSelect"),showExpand:_(e,"showExpand")}),{items:f}=ia(e,v),y=_(e,"search"),{filteredItems:d}=va(e,f,y,{transform:$=>$.columns,customKeyFilter:b}),{toggleSort:k}=zt({sortBy:r,multiSort:u,mustSort:s,page:o}),{sortByWithGroups:V,opened:w,extractRows:z,isGroupOpen:U,toggleGroup:I}=Yt({groupBy:n,sortBy:r,disableSort:m}),{sortedItems:x}=Ut(e,d,V,{transform:$=>({...$.raw,...$.columns}),sortFunctions:S,sortRawFunctions:h}),{flatItems:T}=Zt(x,n,w),p=P(()=>T.value.length),{startIndex:F,stopIndex:O,pageCount:R,setItemsPerPage:Z}=_t({page:o,itemsPerPage:i,itemsLength:p}),{paginatedItems:N}=Ot({items:T,startIndex:F,stopIndex:O,itemsPerPage:i}),q=P(()=>z(N.value)),{isSelected:Ze,select:et,selectAll:tt,toggleSelect:at,someSelected:lt,allSelected:nt}=Gt(e,{allItems:f,currentPage:q}),{isExpanded:rt,toggleExpand:ut}=la(e);ca({page:o,itemsPerPage:i,sortBy:r,groupBy:n,search:y}),bt({VDataTableRows:{hideNoData:_(e,"hideNoData"),noDataText:_(e,"noDataText"),loading:_(e,"loading"),loadingText:_(e,"loadingText")}});const C=P(()=>({page:o.value,itemsPerPage:i.value,sortBy:r.value,pageCount:R.value,toggleSort:k,setItemsPerPage:Z,someSelected:lt.value,allSelected:nt.value,isSelected:Ze,select:et,selectAll:tt,toggleSelect:at,isExpanded:rt,toggleExpand:ut,isGroupOpen:U,toggleGroup:I,items:q.value.map($=>$.raw),internalItems:q.value,groupedItems:N.value,columns:v.value,headers:g.value}));return W(()=>{const $=pe.filterProps(e),st=De.filterProps(e),ot=Ie.filterProps(e),it=Te.filterProps(e);return c(Te,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},it),{top:()=>{var Q;return(Q=a.top)==null?void 0:Q.call(a,C.value)},default:()=>{var Q,ve,ge,he,ye,be;return a.default?a.default(C.value):c(j,null,[(Q=a.colgroup)==null?void 0:Q.call(a,C.value),!e.hideDefaultHeader&&c("thead",{key:"thead"},[c(De,st,a)]),(ve=a.thead)==null?void 0:ve.call(a,C.value),!e.hideDefaultBody&&c("tbody",null,[(ge=a["body.prepend"])==null?void 0:ge.call(a,C.value),a.body?a.body(C.value):c(Ie,B(t,ot,{items:N.value}),a),(he=a["body.append"])==null?void 0:he.call(a,C.value)]),(ye=a.tbody)==null?void 0:ye.call(a,C.value),(be=a.tfoot)==null?void 0:be.call(a,C.value)])},bottom:()=>a.bottom?a.bottom(C.value):!e.hideDefaultFooter&&c(j,null,[c(Ft,null,null),c(pe,$,{prepend:a["footer.prepend"]})])})}),{}}});export{pa as V};

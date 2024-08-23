import{O as j,P as G,X as m,a7 as D,a0 as oe,$ as re,d as O,Q as A,V as _,j as I,S as W,a1 as H,o as ne,as as F,A as h,_ as C,ab as ae,L as ie,r as le,b2 as se,W as ce,a_ as ue,bv as E,aD as L,J as de,a3 as pe,aN as ge}from"./uXsCIapE.js";import{h as ve,e as me,v as fe}from"./BIFamjuS.js";import{R as he,a2 as Se,aH as ye,aI as xe,v as $e,aJ as be,o as Ce,H as ze,aK as Pe,c as we}from"./C-Q3wwSL.js";const ke=e=>{const{antCls:t,componentCls:r,iconCls:o,avatarBg:n,avatarColor:p,containerSize:i,containerSizeLG:u,containerSizeSM:g,textFontSize:d,textFontSizeLG:c,textFontSizeSM:x,borderRadius:l,borderRadiusLG:a,borderRadiusSM:S,lineWidth:v,lineType:$}=e,f=(b,s,y)=>({width:b,height:b,lineHeight:`${b-v*2}px`,borderRadius:"50%",[`&${r}-square`]:{borderRadius:y},[`${r}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${r}-icon`]:{fontSize:s,[`> ${o}`]:{margin:0}}});return{[r]:m(m(m(m({},D(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:p,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${v}px ${$} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),f(i,d,l)),{"&-lg":m({},f(u,c,a)),"&-sm":m({},f(g,x,S)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},Ae=e=>{const{componentCls:t,groupBorderColor:r,groupOverlapping:o,groupSpace:n}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:r},"> *:not(:first-child)":{marginInlineStart:o}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:n}}}},X=j("Avatar",e=>{const{colorTextLightSolid:t,colorTextPlaceholder:r}=e,o=G(e,{avatarBg:r,avatarColor:t});return[ke(o),Ae(o)]},e=>{const{controlHeight:t,controlHeightLG:r,controlHeightSM:o,fontSize:n,fontSizeLG:p,fontSizeXL:i,fontSizeHeading3:u,marginXS:g,marginXXS:d,colorBorderBg:c}=e;return{containerSize:t,containerSizeLG:r,containerSizeSM:o,textFontSize:Math.round((p+i)/2),textFontSizeLG:u,textFontSizeSM:n,groupSpace:d,groupOverlapping:-g,groupBorderColor:c}}),J=Symbol("AvatarContextKey"),Be=()=>oe(J,{}),Te=e=>re(J,e),Re=()=>({prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:()=>"default"},src:String,srcset:String,icon:ae.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}),B=O({compatConfig:{MODE:3},name:"AAvatar",inheritAttrs:!1,props:Re(),slots:Object,setup(e,t){let{slots:r,attrs:o}=t;const n=A(!0),p=A(!1),i=A(1),u=A(null),g=A(null),{prefixCls:d}=_("avatar",e),[c,x]=X(d),l=Be(),a=I(()=>e.size==="default"?l.size:e.size),S=ve(),v=me(()=>{if(typeof e.size!="object")return;const s=fe.find(P=>S.value[P]);return e.size[s]}),$=s=>v.value?{width:`${v.value}px`,height:`${v.value}px`,lineHeight:`${v.value}px`,fontSize:`${s?v.value/2:18}px`}:{},f=()=>{if(!u.value||!g.value)return;const s=u.value.offsetWidth,y=g.value.offsetWidth;if(s!==0&&y!==0){const{gap:P=4}=e;P*2<y&&(i.value=y-P*2<s?(y-P*2)/s:1)}},b=()=>{const{loadError:s}=e;(s==null?void 0:s())!==!1&&(n.value=!1)};return W(()=>e.src,()=>{H(()=>{n.value=!0,i.value=1})}),W(()=>e.gap,()=>{H(()=>{f()})}),ne(()=>{H(()=>{f(),p.value=!0})}),()=>{var s,y;const{shape:P,src:T,alt:K,srcset:V,draggable:q,crossOrigin:Q}=e,Z=(s=l.shape)!==null&&s!==void 0?s:P,w=F(r,e,"icon"),z=d.value,U={[`${o.class}`]:!!o.class,[z]:!0,[`${z}-lg`]:a.value==="large",[`${z}-sm`]:a.value==="small",[`${z}-${Z}`]:!0,[`${z}-image`]:T&&n.value,[`${z}-icon`]:w,[x.value]:!0},Y=typeof a.value=="number"?{width:`${a.value}px`,height:`${a.value}px`,lineHeight:`${a.value}px`,fontSize:w?`${a.value/2}px`:"18px"}:{},M=(y=r.default)===null||y===void 0?void 0:y.call(r);let k;if(T&&n.value)k=h("img",{draggable:q,src:T,srcset:V,onError:b,alt:K,crossorigin:Q},null);else if(w)k=w;else if(p.value||i.value!==1){const R=`scale(${i.value}) translateX(-50%)`,ee={msTransform:R,WebkitTransform:R,transform:R},te=typeof a.value=="number"?{lineHeight:`${a.value}px`}:{};k=h(he,{onResize:f},{default:()=>[h("span",{class:`${z}-string`,ref:u,style:m(m({},te),ee)},[M])]})}else k=h("span",{class:`${z}-string`,ref:u,style:{opacity:0}},[M]);return c(h("span",C(C({},o),{},{ref:g,class:U,style:[Y,$(!!w),o.style]}),[k]))}}}),He=e=>{const{componentCls:t,popoverBg:r,popoverColor:o,width:n,fontWeightStrong:p,popoverPadding:i,boxShadowSecondary:u,colorTextHeading:g,borderRadiusLG:d,zIndexPopup:c,marginXS:x,colorBgElevated:l}=e;return[{[t]:m(m({},D(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":l,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:r,backgroundClip:"padding-box",borderRadius:d,boxShadow:u,padding:i},[`${t}-title`]:{minWidth:n,marginBottom:x,color:g,fontWeight:p},[`${t}-inner-content`]:{color:o}})},ye(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${t}-pure`]:{position:"relative",maxWidth:"none",[`${t}-content`]:{display:"inline-block"}}}]},Ne=e=>{const{componentCls:t}=e;return{[t]:xe.map(r=>{const o=e[`${r}-6`];return{[`&${t}-${r}`]:{"--antd-arrow-background-color":o,[`${t}-inner`]:{backgroundColor:o},[`${t}-arrow`]:{background:"transparent"}}}})}},Oe=e=>{const{componentCls:t,lineWidth:r,lineType:o,colorSplit:n,paddingSM:p,controlHeight:i,fontSize:u,lineHeight:g,padding:d}=e,c=i-Math.round(u*g),x=c/2,l=c/2-r,a=d;return{[t]:{[`${t}-inner`]:{padding:0},[`${t}-title`]:{margin:0,padding:`${x}px ${a}px ${l}px`,borderBottom:`${r}px ${o} ${n}`},[`${t}-inner-content`]:{padding:`${p}px ${a}px`}}}},_e=j("Popover",e=>{const{colorBgElevated:t,colorText:r,wireframe:o}=e,n=G(e,{popoverBg:t,popoverColor:r,popoverPadding:12});return[He(n),Ne(n),o&&Oe(n),Se(n,"zoom-big")]},e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+30,width:177}}),Ie=()=>m(m({},Pe()),{content:E(),title:E()}),Me=O({compatConfig:{MODE:3},name:"APopover",inheritAttrs:!1,props:$e(Ie(),m(m({},be()),{trigger:"hover",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup(e,t){let{expose:r,slots:o,attrs:n}=t;const p=le();se(e.visible===void 0),r({getPopupDomNode:()=>{var l,a;return(a=(l=p.value)===null||l===void 0?void 0:l.getPopupDomNode)===null||a===void 0?void 0:a.call(l)}});const{prefixCls:i,configProvider:u}=_("popover",e),[g,d]=_e(i),c=I(()=>u.getPrefixCls()),x=()=>{var l,a;const{title:S=L((l=o.title)===null||l===void 0?void 0:l.call(o)),content:v=L((a=o.content)===null||a===void 0?void 0:a.call(o))}=e,$=!!(Array.isArray(S)?S.length:S),f=!!(Array.isArray(v)?v.length:S);return!$&&!f?null:h(de,null,[$&&h("div",{class:`${i.value}-title`},[S]),h("div",{class:`${i.value}-inner-content`},[v])])};return()=>{const l=ce(e.overlayClassName,d.value);return g(h(ze,C(C(C({},Ce(e,["title","content"])),n),{},{prefixCls:i.value,ref:p,overlayClassName:l,transitionName:ue(c.value,"zoom-big",e.transitionName),"data-popover-inject":!0}),{title:x,default:o.default}))}}}),We=ie(Me),Ee=()=>({prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"},shape:{type:String,default:"circle"}}),N=O({compatConfig:{MODE:3},name:"AAvatarGroup",inheritAttrs:!1,props:Ee(),setup(e,t){let{slots:r,attrs:o}=t;const{prefixCls:n,direction:p}=_("avatar",e),i=I(()=>`${n.value}-group`),[u,g]=X(n);return pe(()=>{const d={size:e.size,shape:e.shape};Te(d)}),()=>{const{maxPopoverPlacement:d="top",maxCount:c,maxStyle:x,maxPopoverTrigger:l="hover",shape:a}=e,S={[i.value]:!0,[`${i.value}-rtl`]:p.value==="rtl",[`${o.class}`]:!!o.class,[g.value]:!0},v=F(r,e),$=ge(v).map((b,s)=>we(b,{key:`avatar-key-${s}`})),f=$.length;if(c&&c<f){const b=$.slice(0,c),s=$.slice(c,f);return b.push(h(We,{key:"avatar-popover-key",content:s,trigger:l,placement:d,overlayClassName:`${i.value}-popover`},{default:()=>[h(B,{style:x,shape:a},{default:()=>[`+${f-c}`]})]})),u(h("div",C(C({},o),{},{class:S,style:o.style}),[b]))}return u(h("div",C(C({},o),{},{class:S,style:o.style}),[$]))}}});B.Group=N;B.install=function(e){return e.component(B.name,B),e.component(N.name,N),e};export{B as A};

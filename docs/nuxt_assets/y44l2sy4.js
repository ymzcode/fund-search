import{d as y,o as f,N as b,i as B,v as a,x as s,A as t,B as e,C as o,J as i,H as d,y as c}from"./uXsCIapE.js";import{_ as g,B as v}from"./BSrcRnZ5.js";import{C}from"./P-yK68_o.js";import{_ as T}from"./F4ZjKr84.js";import"./D5gPHdqP.js";import"./C-Q3wwSL.js";import"./BIFamjuS.js";import"./ChB1UHIW.js";import"./tjTODZtb.js";import"./hizac33r.js";const I={key:0,class:"cpa-flex cpa-align-center"},N=c("div",{class:"cpa-mr-10",style:{background:"#165DFF",width:"10px",height:"10px","border-radius":"50%"}},null,-1),w={key:1,class:"cpa-flex cpa-align-center"},F=c("div",{class:"cpa-mr-10",style:{background:"#2DC24F",width:"10px",height:"10px","border-radius":"50%"}},null,-1),V={key:2,class:"cpa-flex cpa-align-center"},A=c("div",{class:"cpa-mr-10",style:{background:"#BBBBBB",width:"10px",height:"10px","border-radius":"50%"}},null,-1),D={key:0},M=c("a",null,"立即支付",-1),S=[M],R=y({__name:"order",setup(E){const p=[{title:"商品名称",dataIndex:"name",key:"name"},{title:"订单金额",dataIndex:"price",key:"price"},{title:"订单状态",dataIndex:"status",key:"status"},{title:"下单时间",key:"createTime",dataIndex:"createTime"},{title:"操作",key:"action"}],m=[{id:1,name:"年度会员",price:"419.00",status:0,createTime:"2024-08-18  10:30"},{id:2,name:"月度会员",price:"69.00",status:1,createTime:"2024-08-18  10:30"},{id:3,name:"月度会员",price:"69.00",status:3,createTime:"2024-08-18  10:30"}];return f(()=>{const _=b();_.activeMenuItem=["order"]}),(_,H)=>{const l=B("router-link"),r=g,h=v,k=T,x=C;return a(),s(i,null,[t(h,null,{default:e(()=>[t(r,null,{default:e(()=>[t(l,{to:"/"},{default:e(()=>[o("首页")]),_:1})]),_:1}),t(r,null,{default:e(()=>[t(l,{to:"/setting"},{default:e(()=>[o("会员中心")]),_:1})]),_:1}),t(r,null,{default:e(()=>[o("我的订单")]),_:1})]),_:1}),t(x,{class:"cpa-mt-10"},{default:e(()=>[t(k,{columns:p,"data-source":m},{bodyCell:e(({column:u,record:n})=>[u.key==="status"?(a(),s(i,{key:0},[n.status===0?(a(),s("div",I,[N,o(" 未支付 ")])):n.status===1?(a(),s("div",w,[F,o(" 已支付 ")])):n.status===3?(a(),s("div",V,[A,o(" 已过期 ")])):d("",!0)],64)):u.key==="action"?(a(),s(i,{key:1},[n.status===0?(a(),s("div",D,S)):d("",!0)],64)):d("",!0)]),_:1})]),_:1})],64)}}});export{R as default};

import{R as u,af as f,a_ as c,r as i,av as R,f as m,H as g,a$ as d}from"./DxoaqdtO.js";const v=u({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function l(t){const r=f("useRender");r.render=t}function y(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=c(),n=i();if(R){const s=new ResizeObserver(e=>{t==null||t(e,s),e.length&&(r==="content"?n.value=e[0].contentRect:n.value=e[0].target.getBoundingClientRect())});m(()=>{s.disconnect()}),g(()=>o.el,(e,a)=>{a&&(s.unobserve(a),n.value=void 0),e&&s.observe(e)},{flush:"post"})}return{resizeRef:o,contentRect:d(n)}}export{y as a,v as m,l as u};

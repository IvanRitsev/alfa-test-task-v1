"use strict";(self.webpackChunkalfa_test_task_v1=self.webpackChunkalfa_test_task_v1||[]).push([[995],{995:(e,r,i)=>{i.r(r),i.d(r,{default:()=>c});var t=i(43),s=i(3),n=i(742),a=i(216),o=i(241),l=i(579);const c=()=>{const e=(0,t.useRef)(null),r=(0,t.useRef)(null),i=(0,t.useRef)(null),[c,u]=(0,t.useState)(null),[d,v]=(0,t.useState)({name:{touched:!1,error:""},origin:{touched:!1,error:""},description:{touched:!1,error:""}}),[m,p]=(0,t.useState)(!0),h=(0,s.wA)(),x=(0,a.Zp)(),f=(0,t.useId)(),j=(e,r)=>{let i="";switch(e){case"name":r.trim().length<4&&(i="\u0418\u043c\u044f \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.");break;case"origin":""===r.trim()&&(i="\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c.");break;case"description":""===r.trim()&&(i="\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c.")}v((r=>({...r,[e]:{touched:!0,error:i}})))},g=t=>{var s,n,a;const o="name"===t?(null===(s=e.current)||void 0===s?void 0:s.value)||"":"origin"===t?(null===(n=r.current)||void 0===n?void 0:n.value)||"":(null===(a=i.current)||void 0===a?void 0:a.value)||"";j(t,o)},N=t=>{var s,n,a;const o="name"===t?(null===(s=e.current)||void 0===s?void 0:s.value)||"":"origin"===t?(null===(n=r.current)||void 0===n?void 0:n.value)||"":(null===(a=i.current)||void 0===a?void 0:a.value)||"";j(t,o)};(0,t.useEffect)((()=>{p(!!Object.values(d).some((e=>""!==e.error)))}),[d]);return(0,l.jsx)("div",{className:"create-page",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("button",{className:"return-button",onClick:()=>x("/products"),children:[(0,l.jsx)(o.A,{id:"return-arrow"}),"\u041a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c"]}),(0,l.jsx)("form",{className:"create-form",onSubmit:t=>{var s,a,o;t.preventDefault();const l={id:f,breeds:[{description:(null===(s=i.current)||void 0===s?void 0:s.value)||"",name:(null===(a=e.current)||void 0===a?void 0:a.value)||"",origin:(null===(o=r.current)||void 0===o?void 0:o.value)||""}],url:c?URL.createObjectURL(c):"https://sun1-15.userapi.com/s/v1/if1/b0snhOZfuyISoAS656ksvUHaa8_JMAXOpj_cyppIvvjIDz1np2qvg405Tam9ih98fgvTDQ.jpg?size=400x400&quality=96&crop=0,7,689,689&ava=1",liked:!1};h((0,n.Bj)(l)),x("/")},children:(0,l.jsxs)("div",{className:"form-flex-container",children:[(0,l.jsxs)("div",{className:"form-item",children:[(0,l.jsxs)("div",{className:"tooltip",children:[(0,l.jsx)("input",{type:"text",ref:e,placeholder:"\u0418\u043c\u044f",required:!0,onBlur:()=>g("name"),onChange:()=>N("name"),className:d.name.error?"input-error":""}),d.name.touched&&d.name.error&&(0,l.jsx)("span",{className:"tooltip-text",children:d.name.error})]}),(0,l.jsxs)("div",{className:"tooltip",children:[(0,l.jsx)("input",{type:"text",ref:r,placeholder:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435",required:!0,onBlur:()=>g("origin"),onChange:()=>N("origin"),className:d.origin.error?"input-error":""}),d.origin.touched&&d.origin.error&&(0,l.jsx)("span",{className:"tooltip-text",children:d.origin.error})]})]}),(0,l.jsx)("div",{className:"form-item",children:(0,l.jsxs)("div",{className:"tooltip",children:[(0,l.jsx)("textarea",{ref:i,placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",required:!0,onBlur:()=>g("description"),onChange:()=>N("description"),className:d.description.error?"input-error":""}),d.description.touched&&d.description.error&&(0,l.jsx)("span",{className:"tooltip-text",children:d.description.error})]})}),(0,l.jsxs)("div",{className:"form-item",children:[(0,l.jsx)("label",{children:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435: "}),(0,l.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]?u(e.target.files[0]):u(null)}})]}),(0,l.jsx)("button",{className:"submit-button",type:"submit",disabled:m,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"})]})})]})})}}}]);
//# sourceMappingURL=995.d5d7ccbd.chunk.js.map
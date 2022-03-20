var te=Object.defineProperty,ne=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var L=(e,t,r)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))se.call(t,r)&&L(e,r,t[r]);if(F)for(var r of F(t))oe.call(t,r)&&L(e,r,t[r]);return e},h=(e,t)=>ne(e,re(t));import{R as b,F as A,T as m,j as a,C as R,a as n,O as E,b as d,t as C,c as ie,d as ae,u as v,f as I,i as z,e as ce,g as le,h as de,r as u,k as N,l as q,M as j,m as H,n as V,o as pe,p as _,q as J,V as D,s as f,v as g,I as y,S as G,w as ue,x as K,B as w,y as U,z as $,A as me,L as he,D as fe,E as ge,G as ye,H as Ae,J as B,K as we,N as W,P as Se,Q as be,U as xe,W as M,X as Ce,Y,Z as Te}from"./vendor.f5a99e5c.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}};Me();function ve({myText:e}){return b.createElement(A,{justifyContent:"space-between"},b.createElement(m,{size:"xl",color:"red"},e),b.createElement(m,{size:"xl"},"Logout4"))}const Q=()=>a(R,{minH:"100vh",bg:"gray.200",minW:"100vw",padding:"0",children:[n(ve,{myText:"ciao ciao"}),n(A,{justify:"center",height:"calc(100vh - 80px)",children:n(E,{})})]});function Ie(){d.interceptors.request.use(function(e){return e.headers.Authorization="abcd",e},function(e){return Promise.reject(e)}),d.interceptors.response.use(function(e){return e},function(e){var t,r,o,s;return C.error(((r=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:r.error)||JSON.stringify((s=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:s.errors)||"Error",{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),Promise.reject(e.response)})}const k=ie("user",null),De=ae(e=>e(k)!==null);function O(){const[e,t]=v(k),[r]=v(De);return{currentUser:e,isLoggedIn:r,setCurrentUser:t}}function Ue(e,t){return`${I(new Date(e),"dd/MM/yyyy HH:mm")} - ${I(new Date(t),"HH:mm")}`}function $e(){return I(new Date,"yyyy-MM-dd")}function ke(e,t,r){const o=new Date(`${e} ${t}`),s=new Date(`${e} ${r}`);return[o,s]}function Oe(e,t){return z(new Date(e),new Date)?(C.warn("Date must be in the future"),!1):z(new Date(t),new Date(e))?(C.warn("End date must be after start date"),!1):!0}function Fe(e){var r;const t=new Map;for(const o of e){const s=ze(o);t.has(s)?(r=t.get(s))==null||r.push(o):t.set(s,[o])}return t}function Le(e){switch(e){case"today":return"Today";case"thisWeek":return"This Week";case"thisMonth":return"This Month";case"next":return"Next Months";default:return""}}function ze(e){const t=new Date(e.startAt);return ce(t)?"today":le(t,{weekStartsOn:1})?"thisWeek":de(t)?"thisMonth":"next"}function Be({appointments:e}){const[t,r]=u.exports.useState(new Map);u.exports.useEffect(()=>{const c=Fe(e);r(c)},[e]);const{isOpen:o,onOpen:s,onClose:i}=N();return{appointmentsMap:t,addAppointmentIsOpen:o,onAddAppointmentOpen:s,onAddAppointmentClose:i}}const We=["Teeth Cleaning","Fillings and Restorations","Tooth Extractions","Wisdom Teeth Removal","Root Canal","Dental Sealants","TMJ","Dentures"];function Pe({userId:e,createAppointment:t,onClose:r}){const{register:o,handleSubmit:s}=q(),i=s(async c=>{const l=c,[S,T]=ke(l.date,l.startTime,l.endTime);if(!Oe(S,T))return;const ee={startAt:S,endAt:T,userId:e,type:l.type,notes:l.notes};try{await t(ee),C.success("Appointment created successfully"),r()}catch{}});return{register:o,onSubmit:i}}const Re=({isOpen:e,onClose:t,createAppointment:r,userId:o})=>{const{register:s,onSubmit:i}=Pe({userId:o,createAppointment:r,onClose:t});return a(j,{isOpen:e,onClose:t,isCentered:!0,motionPreset:"slideInBottom",children:[n(H,{}),a(V,{children:[n(pe,{children:"Add Appointment"}),n(_,{}),a("form",{onSubmit:i,children:[n(J,{children:a(D,{children:[a(f,{children:[n(g,{htmlFor:"date",children:"Date"}),n(y,h(p({id:"date",defaultValue:$e()},s("date",{required:!0})),{type:"date"}))]}),a(A,{w:"100%",gap:"0.5rem",children:[a(f,{children:[n(g,{htmlFor:"startTime",children:"From"}),n(y,h(p({},s("startTime",{required:!0})),{type:"time"}))]}),a(f,{children:[n(g,{htmlFor:"endTime",children:"To"}),n(y,h(p({},s("endTime",{required:!0})),{type:"time"}))]})]}),a(f,{children:[n(g,{htmlFor:"type",children:"Type"}),n(G,h(p({defaultValue:"Teeth Cleaning"},s("type",{required:!0})),{children:We.map((c,l)=>n("option",{children:c},l))}))]}),a(f,{children:[n(g,{htmlFor:"desciption",children:"Notes"}),n(ue,h(p({},s("notes")),{placeholder:"Insert notes here if you want to add any detail",rows:5}))]})]})}),a(K,{children:[n(w,{variant:"ghost",colorScheme:"red",mr:3,onClick:t,size:"sm",children:"Close"}),n(w,{colorScheme:"blue",size:"sm",type:"submit",children:"Save"})]})]})]})]})};var Ee=b.memo(Re);const Ne=({isOpen:e,message:t,onClose:r,confirmFn:o})=>a(j,{isOpen:e,onClose:r,isCentered:!0,children:[n(H,{}),a(V,{children:[n(_,{}),n(J,{children:n(m,{fontSize:"xl",children:t})}),a(K,{style:{display:"flex",justifyContent:"center"},children:[n(w,{variant:"ghost",mr:3,onClick:r,size:"sm",children:"Cancel"}),n(w,{colorScheme:"red",mr:3,onClick:o,size:"sm",children:"Confirm"})]})]})]}),qe=({appointment:e,cancelAppointment:t})=>{const{isOpen:r,onOpen:o,onClose:s}=N(),i=()=>{o()};return a(U,{children:[a($,{borderRadius:"lg",bg:"gray.100",w:"100%",p:3,color:"gray.900",margin:"0.5rem 0",borderWidth:"1px",borderColor:"gray.200",shadow:"md",children:[a("div",{children:[a(A,{alignItems:"center",gap:"0.5rem",children:[n(me,{})," ",n(m,{size:"md",fontWeight:"bold",children:Ue(e.startAt,e.endAt)})]}),n(m,{fontSize:"xl",children:e.type}),n(m,{fontSize:"sm",children:e.notes})]}),n(A,{justifyContent:"flex-end",style:{marginTop:"0.5rem"},children:n(w,{colorScheme:"red",size:"xs",onClick:()=>i(),children:"Cancel"})})]}),n(Ne,{message:"Do you want to delete this appointment?",isOpen:r,onClose:s,confirmFn:()=>t(e)})]})},je=({appointments:e,periodTitle:t,cancelAppointment:r})=>a(U,{children:[n(m,{fontSize:"xl",fontStyle:"italic",textDecoration:"underline",children:t}),e.map(o=>n(qe,{appointment:o,cancelAppointment:r},o.id))]}),He=({appointments:e,userId:t,createAppointment:r,cancelAppointment:o})=>{const{appointmentsMap:s,addAppointmentIsOpen:i,onAddAppointmentOpen:c,onAddAppointmentClose:l}=Be({appointments:e});return a(U,{children:[n(w,{onClick:c,w:"100%",colorScheme:"facebook",size:"lg",children:"Add Appointment"}),n($,{width:["100%","70%","30rem"],borderWidth:"1px",borderRadius:"lg",padding:"1rem 2rem",bg:"white",overflow:"auto",style:{marginBottom:"2rem"},children:a(A,{flexDirection:"column",children:[n(m,{fontSize:"3xl",children:"My Appointments"}),n("hr",{}),n(he,{marginTop:"1rem",children:Array.from(s.entries()).map(([S,T])=>n(je,{periodTitle:Le(S),appointments:T,cancelAppointment:o},S))})]})}),n(Ee,{isOpen:i,onClose:l,createAppointment:r,userId:t})]})},x={getUserAppointments:Ve,createAppointment:Je,updateAppointment:Ge,deleteAppointment:Ke,getAppointmentsForCalendar:_e};async function Ve(e,t,r,o="USER"){return await(await d.get(`http://localhost:5000/api/appointments?page=${e}&limit=${t}&role=${o}&userId=${r}`)).data}async function _e(e,t){return await(await d.get(`http://localhost:5000/api/appointments/calendar?from=${e.toISOString()}&to=${t.toISOString()}`)).data}async function Je(e){return await(await d.post(`http://localhost:5000/api/appointments/${e.userId}`,e)).data}async function Ge(e){return await(await d.put(`http://localhost:5000/api/appointments/${e.id}`,e)).data}async function Ke(e){return await(await d.delete(`http://localhost:5000/api/appointments/${e}`)).data}function Ye(e){const[t,r]=u.exports.useState(null);u.exports.useEffect(()=>{e&&x.getUserAppointments(1,20,e).then(i=>r(i.data))},[e]);const o=u.exports.useCallback(async i=>{await x.createAppointment(i);const c=await x.getUserAppointments(1,20,e);r(c.data)},[e]),s=u.exports.useCallback(async i=>{await x.deleteAppointment(i.id);const c=await x.getUserAppointments(1,20,e);r(c.data)},[e]);return{appointments:t,createAppointment:o,cancelAppointment:s}}const X={getAllUsers:Qe,getUserById:Xe,createUser:Ze,updateUser:et,deleteUser:tt};async function Qe(e){return await(await d.get("http://localhost:5000/api/users",{params:e?{name:e}:{}})).data}async function Xe(e){return await(await d.get(`http://localhost:5000/api/users/${e}`)).data}async function Ze(e){return await(await d.post("http://localhost:5000/api/users",e)).data}async function et(e){return await(await d.put(`http://localhost:5000/api/users/${e.id}`,e)).data}async function tt(e){return await(await d.delete(`http://localhost:5000/api/users/${e}`)).data}function nt(){const[e,t]=u.exports.useState([]);return u.exports.useEffect(()=>{X.getAllUsers().then(t)},[]),{users:e}}function rt(){const{userId:e}=fe(),{appointments:t,createAppointment:r,cancelAppointment:o}=Ye(e||""),[s]=v(k);return{appointments:t,user:s,createAppointment:r,cancelAppointment:o}}const Z=()=>{const{appointments:e,user:t,createAppointment:r,cancelAppointment:o}=rt();return a(D,{children:[a(m,{fontSize:"2xl",marginBottom:"2rem",children:["Welcome back, ",t==null?void 0:t.name]}),e&&n(He,{appointments:e,userId:(t==null?void 0:t.id)||"",createAppointment:r,cancelAppointment:o})]})};Z.getLayout=function(t){return n(Q,{children:t})};function st(){const{users:e}=nt(),t=ge(),{setCurrentUser:r}=O(),o=u.exports.useCallback(i=>{const c=e.find(l=>l.id===i);if(c){r(c);const l=c.role==="ADMIN"?`/admin-appointments/${c.id}`:`/appointments/${c.id}`;t(l)}},[e,r,t]),s=u.exports.useCallback(i=>{r(i),t(`/appointments/${i.id}`)},[r,t]);return{users:e,signInAs:o,signInAfterSignUp:s}}const ot=({users:e,signInAs:t})=>{const[r,o]=u.exports.useState(null);return a(A,{flexDir:"column",gap:"1rem",alignItems:"center",children:[n(m,{fontSize:"2xl",children:"Sign in as:"}),n(G,{placeholder:"Select an option",background:"white",onChange:s=>o(s.target.value),children:e.map(s=>a("option",{value:s.id,children:[s.name," (",s.role,")"]},s.id))}),n(w,{colorScheme:"facebook",marginTop:"2rem",width:"100%",disabled:!r,onClick:()=>r&&t(r),children:"SIGN IN"})]})};var it=b.memo(ot);function at({onSuccessfullSignup:e}){const{register:t,handleSubmit:r}=q(),o=r(async s=>{const i=s;try{const c=await X.createUser(i);C.success("Your account has been created successfully"),e(c)}catch{}});return{register:t,onSubmit:o}}const ct=({signInAfterSignUp:e})=>{const{register:t,onSubmit:r}=at({onSuccessfullSignup:e});return n("form",{onSubmit:r,children:a(D,{children:[a(f,{children:[n(g,{htmlFor:"name",children:"Name"}),n(y,h(p({},t("name",{required:!0})),{type:"text"}))]}),a(f,{children:[n(g,{htmlFor:"dateOfBirth",children:"Date of birth"}),n(y,p({type:"date"},t("dateOfBirth",{required:!0,setValueAs:o=>new Date(o)})))]}),a(f,{children:[n(g,{htmlFor:"address",children:"Address"}),n(y,h(p({},t("address",{required:!0})),{type:"text"}))]}),a(f,{children:[n(g,{htmlFor:"name",children:"Email"}),n(y,h(p({},t("email",{required:!0})),{type:"text"}))]}),a(f,{children:[n(g,{htmlFor:"phone",children:"Phone"}),n(y,h(p({},t("phone",{required:!0})),{type:"text"}))]}),n(w,{type:"submit",onClick:r,w:"100%",style:{marginTop:"2rem"},colorScheme:"facebook",children:"Submit"})]})})},lt=()=>{const{users:e,signInAs:t,signInAfterSignUp:r}=st();return n(R,{minH:"100%",bg:"gray.200",minW:"100%",padding:"0",children:n(A,{justify:"center",align:"center",height:"100vh",children:a($,{width:["100%","70%","30rem"],borderWidth:"1px",borderRadius:"lg",padding:"2rem",shadow:"md",bg:"white",children:[n(m,{marginBottom:"1rem",fontSize:"3xl",fontWeight:"bold",textAlign:"center",children:"Welcome"}),a(ye,{children:[a(Ae,{children:[n(B,{children:"Sign In"}),n(B,{children:"Sign Up"})]}),a(we,{children:[n(W,{children:n(it,{users:e,signInAs:t})}),n(W,{children:n(ct,{signInAfterSignUp:r})})]})]})]})})})};function dt(){return Ie(),a(Se,{children:[n(be,{children:a(xe,{children:[n(M,{path:"/login",element:n(lt,{})}),a(M,{path:"/",element:n(pt,{}),children:[n(M,{path:"/",element:n(ut,{})}),n(M,{path:"/appointments/:userId",element:n(Z,{})})]})]})}),n(Ce,{})]})}function pt(){const{isLoggedIn:e}=O();return e?n(Q,{children:n(E,{})}):n(Y,{to:"/login",replace:!0})}function ut(){const{currentUser:e}=O();return n(Y,{to:e?`/appointments/${e.id}`:"/login"})}const mt="modulepreload",P={},ht="/",ft=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${ht}${o}`,o in P)return;P[o]=!0;const s=o.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":mt,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((l,S)=>{c.addEventListener("load",l),c.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},gt=e=>{e&&e instanceof Function&&ft(()=>import("./web-vitals.64ec7304.js"),[]).then(({getCLS:t,getFID:r,getFCP:o,getLCP:s,getTTFB:i})=>{t(e),r(e),o(e),s(e),i(e)})};Te.render(n(b.StrictMode,{children:n(dt,{})}),document.getElementById("root"));gt();

function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}var p;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(p||(p={}));var m;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(m||(m={}));var g=function(t,r){r===void 0&&(r={});let a=typeof r=="number"?{status:r}:r,o=new Headers(a.headers);return o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),u({},a,{headers:o}))};var y=["post","put","patch","delete"],A=new Set(y),P=["get",...y],O=new Set(P);var N=Symbol("deferred");var c=(e,t={})=>g(e,t);var L=["/build/","/icons/","/"],v="asset-cache",w="data-cache",b="document-cache";function n(...e){}async function M(e){let t=new Map;if(e.data.type==="REMIX_NAVIGATION"){let{isMount:r,location:a,matches:o,manifest:S}=e.data,i=a.pathname+a.search+a.hash,[R,D,E]=await Promise.all([caches.open(w),caches.open(b),caches.match(i)]);if((!E||!r)&&(n("Caching document for",i),t.set(i,D.add(i).catch(s=>{n(`Failed to cache document for ${i}:`,s)}))),r){for(let s of o)if(S.routes[s.id].hasLoader){let h=new URLSearchParams(a.search);h.set("_data",s.id);let d=h.toString();d=d?`?${d}`:"";let l=a.pathname+d+a.hash;t.has(l)||(n("Caching data for",l),t.set(l,R.add(l).catch(x=>{n(`Failed to cache data for ${l}:`,x)})))}}}await Promise.all(t.values())}async function _(e){let t=new URL(e.request.url);if(F(e.request)){let r=await caches.match(e.request,{cacheName:v,ignoreVary:!0,ignoreSearch:!0});if(r)return n("Serving asset from cache",t.pathname),r;n("Serving asset from network",t.pathname);let a=await fetch(e.request);return a.status===200&&await(await caches.open(v)).put(e.request,a.clone()),a}if(T(e.request))try{n("Serving data from network",t.pathname+t.search);let r=await fetch(e.request.clone());return await(await caches.open(w)).put(e.request,r.clone()),r}catch{n("Serving data from network failed, falling back to cache",t.pathname+t.search);let a=await caches.match(e.request);return a?(a.headers.set("X-Remix-Worker","yes"),a):c({message:"Network Error"},{status:500,headers:{"X-Remix-Catch":"yes","X-Remix-Worker":"yes"}})}if(U(e.request))try{n("Serving document from network",t.pathname);let r=await fetch(e.request);return await(await caches.open(b)).put(e.request,r.clone()),r}catch(r){n("Serving document from network failed, falling back to cache",t.pathname);let a=await caches.match(e.request);if(a)return a;throw r}return fetch(e.request.clone())}var C=async e=>{let t=JSON.parse(e?.data.text()),r=t.title?t.title:"Cyberlife Music",a={body:t.body??"Notification Body Text",icon:t.icon??"/icons/android-icon-192x192.png",badge:t.badge??"/icons/android-icon-48x48.png",dir:t.dir??"auto",image:t.image??void 0,silent:t.silent??!1,tag:t.tag??"#cyberlife",vibrate:[300,100,200]};await self.registration.showNotification(r,{...a})};function f(e,t){return t.includes(e.method.toLowerCase())}function F(e){return f(e,["get"])&&L.some(t=>e.url.startsWith(t))}function T(e){let t=new URL(e.url);return f(e,["get"])&&t.searchParams.get("_data")}function U(e){return f(e,["get"])&&e.mode==="navigate"}self.addEventListener("install",e=>{e.waitUntil(self.skipWaiting())});self.addEventListener("activate",e=>{e.waitUntil(self.clients.claim())});self.addEventListener("message",e=>{e.waitUntil(M(e))});self.addEventListener("push",e=>{e.waitUntil(C(e))});self.addEventListener("notificationclick",function(e){let{notification:t}=e,r=t.data.action;e.waitUntil(self.clients.openWindow(r)),e.notification.close()});self.addEventListener("fetch",e=>{e.respondWith((async()=>{let t={};try{t.response=await _(e)}catch(r){t.error=r}return j(e,t)})())});async function j(e,{error:t,response:r}){return r}
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.18.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/responses.js:
  (**
   * @remix-run/server-runtime v2.10.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/server-runtime/dist/esm/index.js:
  (**
   * @remix-run/server-runtime v2.10.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

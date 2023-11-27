function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}var p;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(p||(p={}));var m;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(m||(m={}));var g=function(t,r){r===void 0&&(r={});let n=typeof r=="number"?{status:r}:r,o=new Headers(n.headers);return o.has("Content-Type")||o.set("Content-Type","application/json; charset=utf-8"),new Response(JSON.stringify(t),c({},n,{headers:o}))};var y=["post","put","patch","delete"],N=new Set(y),P=["get",...y],I=new Set(P);var H=Symbol("deferred");var u=(e,t={})=>g(e,t);var L=["/build/","/icons/","/"],v="asset-cache",w="data-cache",b="document-cache";function a(...e){}async function M(e){a("Service worker installed")}async function A(e){a("Service worker activated")}async function T(e){let t=new Map;if(e.data.type==="REMIX_NAVIGATION"){let{isMount:r,location:n,matches:o,manifest:R}=e.data,i=n.pathname+n.search+n.hash,[S,E,D]=await Promise.all([caches.open(w),caches.open(b),caches.match(i)]);if((!D||!r)&&(a("Caching document for",i),t.set(i,E.add(i).catch(s=>{a(`Failed to cache document for ${i}:`,s)}))),r){for(let s of o)if(R.routes[s.id].hasLoader){let h=new URLSearchParams(n.search);h.set("_data",s.id);let d=h.toString();d=d?`?${d}`:"";let l=n.pathname+d+n.hash;t.has(l)||(a("Caching data for",l),t.set(l,S.add(l).catch(x=>{a(`Failed to cache data for ${l}:`,x)})))}}}await Promise.all(t.values())}async function C(e){let t=new URL(e.request.url);if(j(e.request)){let r=await caches.match(e.request,{cacheName:v,ignoreVary:!0,ignoreSearch:!0});if(r)return a("Serving asset from cache",t.pathname),r;a("Serving asset from network",t.pathname);let n=await fetch(e.request);return n.status===200&&await(await caches.open(v)).put(e.request,n.clone()),n}if(F(e.request))try{a("Serving data from network",t.pathname+t.search);let r=await fetch(e.request.clone());return await(await caches.open(w)).put(e.request,r.clone()),r}catch{a("Serving data from network failed, falling back to cache",t.pathname+t.search);let n=await caches.match(e.request);return n?(n.headers.set("X-Remix-Worker","yes"),n):u({message:"Network Error"},{status:500,headers:{"X-Remix-Catch":"yes","X-Remix-Worker":"yes"}})}if(_(e.request))try{a("Serving document from network",t.pathname);let r=await fetch(e.request);return await(await caches.open(b)).put(e.request,r.clone()),r}catch(r){a("Serving document from network failed, falling back to cache",t.pathname);let n=await caches.match(e.request);if(n)return n;throw r}return fetch(e.request.clone())}var U=async e=>{let t=JSON.parse(e?.data.text()),r=t.title?t.title:"Cyberlife Music",n={body:t.body??"Notification Body Text",icon:t.icon??"/icons/android-icon-192x192.png",badge:t.badge??"/icons/android-icon-48x48.png",dir:t.dir??"auto",image:t.image??void 0,silent:t.silent??!1,tag:t.tag??"#cyberlife",vibrate:[300,100,200]};await self.registration.showNotification(r,{...n})};function f(e,t){return t.includes(e.method.toLowerCase())}function j(e){return f(e,["get"])&&L.some(t=>e.url.startsWith(t))}function F(e){let t=new URL(e.url);return f(e,["get"])&&t.searchParams.get("_data")}function _(e){return f(e,["get"])&&e.mode==="navigate"}self.addEventListener("install",e=>{e.waitUntil(M(e).then(()=>self.skipWaiting()))});self.addEventListener("activate",e=>{e.waitUntil(A(e).then(()=>self.clients.claim()))});self.addEventListener("message",e=>{e.waitUntil(T(e))});self.addEventListener("push",e=>{e.waitUntil(U(e))});self.addEventListener("notificationclick",function(e){let{notification:t}=e,r=t.data.action;e.waitUntil(self.clients.openWindow(r)),e.notification.close()});self.addEventListener("fetch",e=>{e.respondWith((async()=>{let t={};try{t.response=await C(e)}catch(r){t.error=r}return O(e,t)})())});async function O(e,{error:t,response:r}){return r}
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.13.0
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
   * @remix-run/server-runtime v2.3.1
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
   * @remix-run/server-runtime v2.3.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,t,c)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const a={uri:location.origin+n.slice(1)};return Promise.all(t.map((n=>{switch(n){case"exports":return s;case"module":return a;default:return e(n)}}))).then((e=>{const n=c(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/Ct4ZtKDvnW1r3Zct8Tb3-/_buildManifest.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/Ct4ZtKDvnW1r3Zct8Tb3-/_ssgManifest.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/126-f2e43a3678f257e19988.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/main-ee376160b314a25ce55e.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-a3a5c1a62a00e6f7bf86.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-262e00c212345b50ad4e.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-f7102c75556c1e1d9085.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-54a10f7befd633f46464.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/_app-fffa655bb35464d76f58.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/pages/index-e3dce791fede66bbaeb3.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/chunks/webpack-12df55bf0a521cfffa9e.js",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/css/69aa6219df77687a6828.css",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/_next/static/css/a28102d7d87f52212530.css",revision:"Ct4ZtKDvnW1r3Zct8Tb3-"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/icons/yamachu.jpeg",revision:"62c53f4880ca4694e46a0b7995d42530"},{url:"/conf2021/locales/en/common.json",revision:"13977de174a9c656becfcb69cec16ef3"},{url:"/conf2021/locales/ja/common.json",revision:"69b1e19bf896070ced1c25bcd7d0749e"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:t})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

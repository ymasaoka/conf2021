if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/conf2021/_next/static/chunks/126-d80160a0187c30719abe.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/main-47a716a07b2990f2e0cd.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D-1549bc3c70c68117a61b.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/code-for-conduct-aa9ccc0a3183731e9a49.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/contact-4781b4851c00ab58c774.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/%5Blang%5D/privacy-policy-d55cccea57cc2d5f2624.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/_app-3a12a85fd849a6474a0c.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/pages/index-4d2df0008b5545a36c0b.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/chunks/webpack-d76dc4186454634be58a.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/css/14a018fd985faa4a1158.css",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/css/6dcb6159a5bde0fe5d6f.css",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/css/8db14f5fd8fc20988433.css",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/sbTreO4kMjwkF6yi3uDnE/_buildManifest.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/_next/static/sbTreO4kMjwkF6yi3uDnE/_ssgManifest.js",revision:"sbTreO4kMjwkF6yi3uDnE"},{url:"/conf2021/concept.png",revision:"2f0d1407c7dadf3c35e056f60e51aa36"},{url:"/conf2021/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/conf2021/icons/bakeneko2.png",revision:"892ced2bffcef5aed920dc9b318120c5"},{url:"/conf2021/locales/en/common.json",revision:"c85fb1da9e30e75cc35d25f4c7a7fd73"},{url:"/conf2021/locales/ja/common.json",revision:"d33c23dcae8ffdfd71f8138bb9e78081"},{url:"/conf2021/manifest.json",revision:"cc0fa605489e352d8828f361907d7ea2"},{url:"/conf2021/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/conf2021",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

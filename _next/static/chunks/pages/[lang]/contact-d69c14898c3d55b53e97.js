(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{2593:function(e,t,n){"use strict";var r=n(5006),a=n.n(r),o=n(5893);t.Z=function(e){var t=e.path,n=e.isExternalLink,r=e.children;return(0,o.jsx)("a",{href:t,target:n&&"_blank",rel:n&&"noopener noreferrer",className:a().button,children:r})}},4668:function(e,t,n){"use strict";var r=n(1664),a=n(1261),o=n(2472),c=n.n(o),i=n(7120),s=n(5893);t.Z=function(){var e=a.Z.language.substring(0,2);return(0,s.jsxs)("footer",{className:c().footer,children:[(0,s.jsxs)("p",{className:c().contact,children:[(0,s.jsx)(r.default,{href:"/".concat(e,"/code-for-conduct"),children:(0,s.jsx)("a",{"aria-label":"Link to Code for Conduct","aria-describedby":a.Z.t("code_of_conduct"),children:a.Z.t("code_of_conduct")})}),(0,s.jsx)(r.default,{href:"/".concat(e,"/privacy-policy"),children:(0,s.jsx)("a",{"aria-label":"Link to Privacy Policy","aria-describedby":a.Z.t("privacy_policy"),children:a.Z.t("privacy_policy")})}),(0,s.jsx)(r.default,{href:"/".concat(e,"/contact"),children:(0,s.jsx)("a",{"aria-label":"Link to Contact","aria-describedby":a.Z.t("contact"),children:a.Z.t("contact")})})]}),(0,s.jsx)("p",{className:c().copyright,children:"Created \xa9 2021 ".concat(i.Ax,". All Rights Reserved.")})]})}},3403:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(1664),o=n(1261),c=n(2117),i=n.n(c),s=n(7120),l=n(6622),u=n.n(l),f=n(7059),d=n(5893),h=function(){var e=(0,r.useContext)(f.v),t="dark"===e.colorMode;return(0,d.jsxs)("span",{className:u().switch,children:[(0,d.jsx)("input",{type:"checkbox",checked:t,onChange:function(t){var n=t.target.checked?"dark":"light";e.changeColorMode(n)}}),(0,d.jsx)("label",{style:{border:t?"#767676":"#fff",background:t?"#03256c":"#fff"},"aria-hidden":"true"})]})},p=function(){var e=o.Z.language.substring(0,2),t=r.useRef();return r.useEffect((function(){window.onscroll=function(){var e,n;(function(){var e,n=null===(e=t.current)||void 0===e?void 0:e.offsetTop;return window.pageYOffset>n})()?null===(e=t.current)||void 0===e||e.classList.add(i().navActive):null===(n=t.current)||void 0===n||n.classList.remove(i().navActive)}}),[]),(0,d.jsxs)("div",{ref:t,className:i().header,children:[(0,d.jsx)(a.default,{href:"/".concat(e,"/"),children:(0,d.jsx)("a",{"aria-label":"link to title","aria-describedby":"Title",className:i().logo,children:s.tu})}),(0,d.jsx)("div",{className:i().links_wrapper,children:(0,d.jsxs)("nav",{className:i().links,children:[(0,d.jsx)(a.default,{href:"/".concat(e,"/#about"),children:(0,d.jsx)("a",{"aria-label":"Link to About","aria-describedby":o.Z.t("about"),className:i().link,children:o.Z.t("about")})}),(0,d.jsx)(a.default,{href:"/".concat(e,"/#timetable"),children:(0,d.jsx)("a",{"aria-label":"Link to Timetable","aria-describedby":o.Z.t("timetable"),className:i().link,children:o.Z.t("timetable")})}),(0,d.jsx)(a.default,{href:"/".concat(e,"/#staffs"),children:(0,d.jsx)("a",{"aria-label":"Link to Staffs","aria-describedby":o.Z.t("staffs"),className:i().link,children:o.Z.t("staffs")})}),(0,d.jsx)(a.default,{href:"/".concat(e,"/#supporters"),children:(0,d.jsx)("a",{"aria-label":"link to Aupporters","aria-describedby":"Supporters",className:i().link,children:o.Z.t("supporters")})}),(0,d.jsx)("a",{href:"#","aria-label":"switch color theme","aria-describedby":"Switch Color Theme",className:i().link,children:(0,d.jsx)(h,{})})]})})]})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},c=n(1063),i=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var t=c.resolveHref(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,_=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,y=s.useIntersection({rootMargin:"200px"}),g=r(y,2),j=g[0],k=g[1],w=o.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);o.default.useEffect((function(){var e=k&&n&&c.isLocalURL(d),t="undefined"!==typeof m?m:a&&a.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,k,m,n,a]);var Z={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}))}(e,a,d,h,_,v,b,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:a&&a.locale,C=a&&a.isLocaleDomain&&c.getDomainLocale(h,N,a&&a.locales,a&&a.domainLocales);Z.href=C||c.addBasePath(c.addLocale(h,N,a&&a.defaultLocale))}return o.default.cloneElement(t,Z)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],h=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=n(7294),o=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},9003:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return f}});var r=n(1261),a=n(2777),o=n.n(a),c=n(2593),i=n(3403),s=n(4668),l=n(5893),u=!0;function f(){return(0,l.jsxs)("div",{className:o().container,children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)("main",{className:o().main,children:[(0,l.jsx)("h1",{className:o().title,children:r.Z.t("contact")}),(0,l.jsx)("div",{className:o().content,children:(0,l.jsx)(c.Z,{path:"https://docs.google.com/forms/d/e/1FAIpQLSeDsAlBwncykjmyia0Z-7W-1IMIPHBGZisRZJT_KZ8J8y6rRQ/viewform",isExternalLink:!0,children:r.Z.t("there_is_google_form")})})]}),(0,l.jsx)(s.Z,{})]})}},7120:function(e,t,n){"use strict";n.d(t,{tu:function(){return r},WL:function(){return a},Ax:function(){return o}});var r="VSCode Conference Japan 2021",a="VS Code Meetup \u4e3b\u50ac\u306e\u5e74\u6b21\u30ab\u30f3\u30d5\u30a1\u30ec\u30f3\u30b9\u3001VS Code Conference Japan 2021\u3092\u4eca\u5e74\u3082\u958b\u50ac\u3057\u307e\u3059\uff01\uff01\uff01",o="VS Code Meetup"},1369:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[lang]/contact",function(){return n(9003)}])},5006:function(e){e.exports={button:"Button_button__3B2qd"}},6622:function(e){e.exports={switch:"ColorThemeSwitch_switch__2Zfll"}},2472:function(e){e.exports={footer:"Footer_footer__2tGaj",contact:"Footer_contact__F2Rsc",copyright:"Footer_copyright__rVWqL"}},2117:function(e){e.exports={header:"Header_header__1dag3",links_wrapper:"Header_links_wrapper__3FPwQ",logo:"Header_logo__26awG",link:"Header_link__1h3m6",navActive:"Header_navActive__2HnU_"}},2777:function(e){e.exports={container:"Home_container__dEP1C",main:"Home_main__1yo5N",title:"Home_title__2KqcX",description:"Home_description__1dvQE",content:"Home_content__1aTdr",logo:"Home_logo__Mqs7H"}},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=1369,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
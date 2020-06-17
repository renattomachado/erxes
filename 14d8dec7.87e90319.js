(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(9),i=(n(0),n(208)),a={id:"mobile-apps",title:"Mobile Apps",sidebar_label:"Mobile Apps"},c={id:"user/mobile-apps",title:"Mobile Apps",description:"This document details how is the configuration of the system in mobile equipment according to the operating system.",source:"@site/docs/user/mobile-apps.md",permalink:"/user/mobile-apps",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/user/mobile-apps.md",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590116873,sidebar_label:"Mobile Apps",sidebar:"tutorials",previous:{title:"Notifications",permalink:"/user/notification"}},s=[{value:"iOS Setup",id:"ios-setup",children:[]},{value:"Android Setup",id:"android-setup",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document details how is the configuration of the system in mobile equipment according to the operating system."),Object(i.b)("h2",{id:"ios-setup"},"iOS Setup"),Object(i.b)("p",null,"Your Erxes teams can be accessed on iOS mobile devices by downloading the Erxes App."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the App Store on your Apple device running iOS 9.0 or later."),Object(i.b)("li",{parentName:"ol"},"Search for Erxes and click GET to download the App for free."),Object(i.b)("li",{parentName:"ol"},"Open Erxes from your homescreen and input your team and account information to login:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Enter Server URL: This is the web address you go to when you want to access Erxes. You can find the Server URL by asking your System Admin or by looking at the address bar in a desktop browser tab with Erxes open. It is in the form ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://domain.com"}),"https://domain.com"),"."),Object(i.b)("li",{parentName:"ul"},"Sign in to Erxes: This is your account login information as described by one of the sign in methods above.")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"android-setup"},"Android Setup"),Object(i.b)("p",null,"Your Erxes teams can be accessed on Android mobile devices by downloading the Erxes App."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=io.erxes.erxes_android"}),"Google Play Store")," on your Android device running Android 5.0 or later."),Object(i.b)("li",{parentName:"ol"},'Search for "Erxes" and click INSTALL to download the App for free.'),Object(i.b)("li",{parentName:"ol"},"Open Erxes from your homescreen and input your team and account information to login:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Enter Server URL: This is the web address you go to when you want to access Erxes. You can find the Server URL by asking your System Admin or by looking at the address bar in a desktop browser tab with Erxes open. It is in the form ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://domain.com"}),"https://domain.com"),"."),Object(i.b)("li",{parentName:"ul"},"Sign in to Erxes: This is your account login information as described by one of the sign in methods above.")))))}l.isMDXComponent=!0},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,c(c({ref:t},p),{},{components:n})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
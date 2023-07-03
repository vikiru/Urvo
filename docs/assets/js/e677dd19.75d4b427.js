"use strict";(self.webpackChunkurvo_docs=self.webpackChunkurvo_docs||[]).push([[6019],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=c(r),s=a,f=u["".concat(l,".").concat(s)]||u[s]||d[s]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m[u]="string"==typeof e?e:a,i[1]=m;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={id:"buzz",title:"Buzz Lightyear Meme"},i=void 0,m={unversionedId:"commands/memes/buzz",id:"commands/memes/buzz",title:"Buzz Lightyear Meme",description:"Overview",source:"@site/docs/commands/memes/buzz.md",sourceDirName:"commands/memes",slug:"/commands/memes/buzz",permalink:"/Urvo/commands/memes/buzz",draft:!1,tags:[],version:"current",frontMatter:{id:"buzz",title:"Buzz Lightyear Meme"},sidebar:"docs",previous:{title:"Urban",permalink:"/Urvo/commands/info/urban"},next:{title:"Change My Mind Meme",permalink:"/Urvo/commands/memes/change-my-mind"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Demo",id:"demo",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Send a Buzz Lightyear Everywhere meme with your desired text."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"argument name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"top_text")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Text that appears on the top")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"bottom_text")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Text that appears on the bottom")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"format")),(0,a.kt)("td",{parentName:"tr",align:"center"},"The format of the meme (PNG or GIF)")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Cooldown"),": 10 seconds"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Required User Permissions"),": None"),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"This command was made possible by the following API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Memegen.link API (",(0,a.kt)("a",{parentName:"li",href:"https://memegen.link/"},"Documentation")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jacebrowning/memegen"},"GitHub Repo"),")")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Buzz Lightyear Meme Command Demo Gif",src:r(6309).Z,width:"1220",height:"954"})))}d.isMDXComponent=!0},6309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/buzz-671a9a3c2b2db47fab9ad058f916a454.gif"}}]);
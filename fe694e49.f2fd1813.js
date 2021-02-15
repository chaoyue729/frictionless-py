(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(152)),i={title:"Google Sheets Tutorial",sidebar_label:"Google Sheets"},s={unversionedId:"tutorials/gsheets-tutorial",id:"tutorials/gsheets-tutorial",isDocsHomePage:!1,title:"Google Sheets Tutorial",description:"This functionality requires an experimental gsheets plugin. Read More",source:"@site/../docs/tutorials/gsheets-tutorial.md",slug:"/tutorials/gsheets-tutorial",permalink:"/docs/tutorials/gsheets-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/gsheets-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1613394505,sidebar_label:"Google Sheets",sidebar:"tutorials",previous:{title:"Excel Tutorial",permalink:"/docs/tutorials/excel-tutorial"},next:{title:"HTML Tutorial",permalink:"/docs/tutorials/html-tutorial"}},c=[{value:"Reading from Google Sheets",id:"reading-from-google-sheets",children:[]},{value:"Writing to Google Sheets",id:"writing-to-google-sheets",children:[]},{value:"Configuring Google Sheets",id:"configuring-google-sheets",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(a.b)("inlineCode",{parentName:"p"},"gsheets")," plugin. ",Object(a.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More")))),Object(a.b)("p",null,"Frictionless supports parsing Google Sheets data as a file format."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[gsheets]\n")),Object(a.b)("h2",{id:"reading-from-google-sheets"},"Reading from Google Sheets"),Object(a.b)("p",null,"You can read from Google Sheets using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='https://docs.google.com/spreadsheets/d/1mHIWnDvW9cALRMq9OdNfRwjAthCUFUOACPp0Lkyl7b4/edit?usp=sharing')\nprint(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("h2",{id:"writing-to-google-sheets"},"Writing to Google Sheets"),Object(a.b)("p",null,"The same is actual for writing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource\n\nresource = Resource(path=\'data/table.csv\')\nresource.write("https://docs.google.com/spreadsheets/d/<id>/edit", dialect={"credentials": ".google.json"})\n')),Object(a.b)("h2",{id:"configuring-google-sheets"},"Configuring Google Sheets"),Object(a.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource\n\nresource = Resource(path=\'data/table.csv\')\nresource.write("https://docs.google.com/spreadsheets/d/<id>/edit", dialect={"credentials": ".google.json"})\n')))}u.isMDXComponent=!0},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,b=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);
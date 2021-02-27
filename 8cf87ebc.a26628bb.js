(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{121:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),n=r(7),a=(r(0),r(157)),i={title:"Google Sheets Tutorial",sidebar_label:"Google Sheets"},s={unversionedId:"tutorials/formats/gsheets-tutorial",id:"tutorials/formats/gsheets-tutorial",isDocsHomePage:!1,title:"Google Sheets Tutorial",description:"This functionality requires an experimental gsheets plugin. Read More",source:"@site/../docs/tutorials/formats/gsheets-tutorial.md",slug:"/tutorials/formats/gsheets-tutorial",permalink:"/docs/tutorials/formats/gsheets-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/formats/gsheets-tutorial.md",version:"current",lastUpdatedBy:"Lilly Winfree",lastUpdatedAt:1614404319,sidebar_label:"Google Sheets",sidebar:"tutorials",previous:{title:"Excel Tutorial",permalink:"/docs/tutorials/formats/excel-tutorial"},next:{title:"HTML Tutorial",permalink:"/docs/tutorials/formats/html-tutorial"}},l=[{value:"Reading from Google Sheets",id:"reading-from-google-sheets",children:[]},{value:"Writing to Google Sheets",id:"writing-to-google-sheets",children:[]},{value:"Configuring Google Sheets",id:"configuring-google-sheets",children:[]}],c={toc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(a.b)("inlineCode",{parentName:"p"},"gsheets")," plugin. ",Object(a.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(a.b)("p",null,"Frictionless supports parsing Google Sheets data as a file format."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[gsheets]\n")),Object(a.b)("h2",{id:"reading-from-google-sheets"},"Reading from Google Sheets"),Object(a.b)("p",null,"You can read from Google Sheets using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='https://docs.google.com/spreadsheets/d/1mHIWnDvW9cALRMq9OdNfRwjAthCUFUOACPp0Lkyl7b4/edit?usp=sharing')\nprint(resource.read_rows())\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(a.b)("h2",{id:"writing-to-google-sheets"},"Writing to Google Sheets"),Object(a.b)("p",null,"The same is actual for writing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource\n\nresource = Resource(path=\'data/table.csv\')\nresource.write("https://docs.google.com/spreadsheets/d/<id>/edit", dialect={"credentials": ".google.json"})\n')),Object(a.b)("h2",{id:"configuring-google-sheets"},"Configuring Google Sheets"),Object(a.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Resource\n\nresource = Resource(path=\'data/table.csv\')\nresource.write("https://docs.google.com/spreadsheets/d/<id>/edit", dialect={"credentials": ".google.json"})\n')),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/references/formats-reference#gsheets"},"Gseets Dialect"))))}u.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,b=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return r?n.a.createElement(b,s(s({ref:t},c),{},{components:r})):n.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);
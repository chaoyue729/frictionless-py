(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{131:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,O=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(O,c(c({ref:t},s),{},{components:r})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(131)),i={title:"ODS Tutorial",sidebar_label:"ODS"},c={unversionedId:"tutorials/ods-tutorial",id:"tutorials/ods-tutorial",isDocsHomePage:!1,title:"ODS Tutorial",description:"Frictionless supports ODS parsing.",source:"@site/../docs/tutorials/ods-tutorial.md",slug:"/tutorials/ods-tutorial",permalink:"/frictionless-py/docs/tutorials/ods-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/ods-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1611146994,sidebar_label:"ODS",sidebar:"tutorials",previous:{title:"JSON Tutorial",permalink:"/frictionless-py/docs/tutorials/json-tutorial"},next:{title:"Pandas Tutorial",permalink:"/frictionless-py/docs/tutorials/pandas-tutorial"}},l=[{value:"Reading ODS",id:"reading-ods",children:[]},{value:"Writing ODS",id:"writing-ods",children:[]},{value:"Configuring ODS",id:"configuring-ods",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frictionless supports ODS parsing."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"!pip install frictionless[ods]\n")),Object(o.b)("h2",{id:"reading-ods"},"Reading ODS"),Object(o.b)("p",null,"You can read this format using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(path='data/table.ods')\nprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(o.b)("h2",{id:"writing-ods"},"Writing ODS"),Object(o.b)("p",null,"The same is actual for writing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.ods')\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"'tmp/table.ods'\n")),Object(o.b)("h2",{id:"configuring-ods"},"Configuring ODS"),Object(o.b)("p",null,"There is a dialect to configure how Frictionless read and write files in this format. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"from frictionless import Resource\nfrom frictionless.plugins.ods import OdsDialect\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.ods', dialect=OdsDialect(sheet='My Table'))\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"'tmp/table.ods'\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://frictionlessdata.io/tooling/python/formats-reference/#ods"}),"ODS Dialect"))))}u.isMDXComponent=!0}}]);
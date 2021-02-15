(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{152:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(152)),o={title:"Resource Guide"},l={unversionedId:"guides/resource-guide",id:"guides/resource-guide",isDocsHomePage:!1,title:"Resource Guide",description:"This guide in under development. We are moving some shared Resource information from describe, extract, validate, and transform guides to this guide.",source:"@site/../docs/guides/resource-guide.md",slug:"/guides/resource-guide",permalink:"/docs/guides/resource-guide",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/resource-guide.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1613394505,sidebar:"guides",previous:{title:"Package Guide",permalink:"/docs/guides/package-guide"},next:{title:"Schema Guide",permalink:"/docs/guides/schema-guide"}},c=[{value:"Exploring Data",id:"exploring-data",children:[]},{value:"Table&#39;s Lifecycle",id:"tables-lifecycle",children:[]},{value:"File Details",id:"file-details",children:[{value:"Scheme",id:"scheme",children:[]},{value:"Format",id:"format",children:[]},{value:"Hashing",id:"hashing",children:[]},{value:"Encoding",id:"encoding",children:[]},{value:"Compression",id:"compression",children:[]},{value:"Compression Path",id:"compression-path",children:[]}]},{value:"File Control",id:"file-control",children:[{value:"Detect Encoding",id:"detect-encoding",children:[]}]},{value:"Table Dialect",id:"table-dialect",children:[{value:"Header",id:"header",children:[]},{value:"Header Rows",id:"header-rows",children:[]},{value:"Header Join",id:"header-join",children:[]},{value:"Header Case",id:"header-case",children:[]}]},{value:"Table Query",id:"table-query",children:[{value:"Pick/Skip Fields",id:"pickskip-fields",children:[]},{value:"Limit/Offset Fields",id:"limitoffset-fields",children:[]},{value:"Pick/Skip Rows",id:"pickskip-rows",children:[]},{value:"Limit/Offset Rows",id:"limitoffset-rows",children:[]}]},{value:"Header Options",id:"header-options",children:[]},{value:"Integrity Options",id:"integrity-options",children:[{value:"On Error",id:"on-error",children:[]},{value:"Lookup",id:"lookup",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This guide in under development. We are moving some shared Resource information from describe, extract, validate, and transform guides to this guide.")),Object(i.b)("h2",{id:"exploring-data"},"Exploring Data"),Object(i.b)("p",null,"There are various functions to help explore your resource, such as checking a header or other attributes like stats:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nwith Resource('tmp/country.resource.json', basepath='.') as resource:\n    print(f'Source: \"{resource.source}\"')\n    print(f'Scheme: \"{resource.scheme}\"')\n    print(f'Format: \"{resource.format}\"')\n    print(f'Hashing: \"{resource.hashing}\"')\n    print(f'Encoding: \"{resource.encoding}\"')\n    print(f'Innerpaath: \"{resource.innerpath}\"')\n    print(f'Compression: \"{resource.compression}\"')\n    pprint(resource.read_header())\n    pprint(resource.read_sample())\n    pprint(resource.read_stats())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Source: \"data/capital-3.csv\"\nScheme: \"file\"\nFormat: \"csv\"\nHashing: \"md5\"\nEncoding: \"utf-8\"\nInnerpath: \"\"\nCompression: \"\"\n['id', 'capital_id', 'name', 'population']\n[['1', '1', 'Britain', '67'],\n ['2', '3', 'France', '67'],\n ['3', '2', 'Germany', '83'],\n ['4', '5', 'Italy', '60'],\n ['5', '4', 'Spain', '47']]\n{'bytes': 100,\n 'fields': 4,\n 'hash': 'c0558b91523683483f86f63346d06d81',\n 'rows': 5}\n")),Object(i.b)("p",null,"There is much more information available; we will explain some of it later in the sections below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Resource('data/capital-3.csv') as resource:\n  print(f'Control: \"{resource.control}\"')\n  print(f'Dialect: \"{resource.dialect}\"')\n  print(f'Layout: \"{resource.layout}\"')\n  print(f'Schema: \"{resource.schema}\"')\n  print(f'Stats: \"{resource.stats}\"')\n  print(f'Fragment: \"{resource.fragment}\"')\n  print(f'Header: \"{resource.header}\"')\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Control: \"{}\"\nDialect: \"{}\"\nLayout: \"{}\"\nSchema: \"{'fields': [{'name': 'id', 'type': 'integer'}, {'name': 'name', 'type': 'string'}]}\"\nStats: \"{'hash': 'e7b6592a0a4356ba834e4bf1c8e8c7f8', 'bytes': 50, 'fields': 2, 'rows': 0}\"\nFragment: \"[['1', 'London'], ['2', 'Berlin'], ['3', 'Paris'], ['4', 'Madrid'], ['5', 'Rome']]\"\nHeader: \"['id', 'name']\"\n")),Object(i.b)("p",null,"Many of the properties above not only can be read from the existent Table but also can be provided as an option to alter the Table behaviour, for example:"),Object(i.b)("h2",{id:"tables-lifecycle"},"Table's Lifecycle"),Object(i.b)("p",null,"You might have noticed that we had to duplicate the ",Object(i.b)("inlineCode",{parentName:"p"},"with Table(...)")," statement in some examples. The reason is that Table is a streaming interface. Once it's read you need to open it again. Let's show it in an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\ntable = Table('data/capital-3.csv')\ntable.open()\npprint(table.read_rows())\npprint(table.read_rows())\n# We need to re-open: there is no data left\ntable.open()\npprint(table.read_rows())\n# We need to close manually: not context manager is used\ntable.close()\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'London')]),\n Row([('id', 2), ('name', 'Berlin')]),\n Row([('id', 3), ('name', 'Paris')]),\n Row([('id', 4), ('name', 'Madrid')]),\n Row([('id', 5), ('name', 'Rome')])]\n[]\n[Row([('id', 1), ('name', 'London')]),\n Row([('id', 2), ('name', 'Berlin')]),\n Row([('id', 3), ('name', 'Paris')]),\n Row([('id', 4), ('name', 'Madrid')]),\n Row([('id', 5), ('name', 'Rome')])]\n")),Object(i.b)("h2",{id:"file-details"},"File Details"),Object(i.b)("p",null,"Let's overview the details we can specify for a file. Usually you don't need to provide those details as Frictionless is capable to infer it on its own. Although, there are situation when you need to specify it manually. The following example will use the ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," class but the same options can be used for the ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," and ",Object(i.b)("inlineCode",{parentName:"p"},"extract_table")," functions."),Object(i.b)("h3",{id:"scheme"},"Scheme"),Object(i.b)("p",null,"The scheme also know as protocol indicates which loader Frictionless should use to read or write data. It can be ",Object(i.b)("inlineCode",{parentName:"p"},"file")," (default), ",Object(i.b)("inlineCode",{parentName:"p"},"text"),", ",Object(i.b)("inlineCode",{parentName:"p"},"http"),", ",Object(i.b)("inlineCode",{parentName:"p"},"https"),", ",Object(i.b)("inlineCode",{parentName:"p"},"s3"),", and others."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('header1,header2\\nvalue1,value2.csv', scheme='text') as table:\n  print(table.scheme)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"text\n[Row([('header1', 'value1'), ('header2', 'value2.csv')])]\n")),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,"The format or as it's also called extension helps Frictionless to choose a proper parser to handle the file. Popular formats are ",Object(i.b)("inlineCode",{parentName:"p"},"csv"),", ",Object(i.b)("inlineCode",{parentName:"p"},"xlsx"),", ",Object(i.b)("inlineCode",{parentName:"p"},"json")," and others"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('text://header1,header2\\nvalue1,value2.csv', format='csv') as table:\n  print(table.format)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"csv\n[Row([('header1', 'value1'), ('header2', 'value2')])]\n")),Object(i.b)("h3",{id:"hashing"},"Hashing"),Object(i.b)("p",null,"The hashing option controls which hashing algorithm should be used for generating the ",Object(i.b)("inlineCode",{parentName:"p"},"hash")," property. It doesn't affect the ",Object(i.b)("inlineCode",{parentName:"p"},"extract")," function but can be used with the ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," class:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/country-3.csv', hashing='sha256') as table:\n  table.read_rows()\n  print(table.hashing)\n  print(table.stats['hash'])\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"sha256\n408b5058f961915c1e1f3bc318ab01d7d094a4daccdf03ad6022cfc7b8ea4e3e\n")),Object(i.b)("h3",{id:"encoding"},"Encoding"),Object(i.b)("p",null,"Frictionless automatically detects encoding of files but sometimes it can be inaccurate. It's possible to provide an encoding manually:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/country-3.csv', encoding='utf-8') as table:\n  print(table.encoding)\n  print(table.source)\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"utf-8\ndata/country-3.csv\n")),Object(i.b)("h3",{id:"compression"},"Compression"),Object(i.b)("p",null,"It's possible to adjust compression detection by providing the algorithm explicitly. For the example below it's not required as it would be detected anyway:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/table.csv.zip', compression='zip') as table:\n  print(table.compression)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"zip\n[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("h3",{id:"compression-path"},"Compression Path"),Object(i.b)("p",null,"By default, Frictionless uses the first file found in a zip archive. It's possible to adjust this behaviour:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/table-multiple-files.zip', compression_path='table-reverse.csv') as table:\n  print(table.compression)\n  print(table.compression_path)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"zip\ntable-reverse.csv\n[Row([('id', 1), ('name', '\u4e2d\u56fd\u4eba')]), Row([('id', 2), ('name', 'english')])]\n")),Object(i.b)("p",null,"Further reading:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Schemes Reference"),Object(i.b)("li",{parentName:"ul"},"Formats Reference")),Object(i.b)("h2",{id:"file-control"},"File Control"),Object(i.b)("p",null,"The Control object allows you to manage the loader used by the Table class. In most cases, you don't need to provide any Control settings but sometimes it can be useful:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\nfrom frictionless.plugins.remote import RemoteControl\n\nsource = 'https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.csv'\ncontrol = RemoteControl(http_timeout=10)\nwith Table(source, control=control) as table:\n  print(table.control)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{'httpTimeout': 10, 'newline': ''}\n[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("p",null,'Exact parameters depend on schemes and can be found in the "Schemes Reference". For example, the Remote Control provides ',Object(i.b)("inlineCode",{parentName:"p"},"http_timeout"),", ",Object(i.b)("inlineCode",{parentName:"p"},"http_session"),", and others but there is only one option available for all controls:"),Object(i.b)("h3",{id:"detect-encoding"},"Detect Encoding"),Object(i.b)("p",null,"It's a function that can be provided to adjust the encoding detection. This function accepts a data sample and returns a detected encoding:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Table, Control\n\ncontrol = Control(detect_encoding=lambda sample: "utf-8")\nwith Table("data/capital-3.csv", control=control) as table:\n  print(table.source)\n  print(table.encoding)\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"data/capital-3.csv\nutf-8\n")),Object(i.b)("p",null,"Further reading:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Schemes Reference")),Object(i.b)("h2",{id:"table-dialect"},"Table Dialect"),Object(i.b)("p",null,"The Dialect adjusts the way tabular parsers work. The concept is similar to the Control above. Let's use the CSV Dialect to adjust the delimiter configuration:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\nfrom frictionless.plugins.csv import CsvDialect\n\nsource = 'header1;header2\\nvalue1;value2'\ndialect = CsvDialect(delimiter=';')\nwith Table(source, scheme='text', format='csv', dialect=dialect) as table:\n  print(table.dialect)\n  print(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{'delimiter': ';'}\n[Row([('header1', 'value1'), ('header2', 'value2')])]\n")),Object(i.b)("p",null,'There are a great deal of options available for different dialects that can be found in "Formats Reference". We will list the properties that can be used with every dialect:'),Object(i.b)("h3",{id:"header"},"Header"),Object(i.b)("p",null,"It's a boolean flag which defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," indicating whether the data has a header row or not. In the following example the header row will be treated as a data row:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Dialect\n\ndialect = Dialect(header=False)\nwith Table('data/capital-3.csv', dialect=dialect) as table:\n  pprint(table.header)\n  pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[]\n[Row([('field1', 'id'), ('field2', 'name')]),\n Row([('field1', '1'), ('field2', 'London')]),\n Row([('field1', '2'), ('field2', 'Berlin')]),\n Row([('field1', '3'), ('field2', 'Paris')]),\n Row([('field1', '4'), ('field2', 'Madrid')]),\n Row([('field1', '5'), ('field2', 'Rome')])]\n")),Object(i.b)("h3",{id:"header-rows"},"Header Rows"),Object(i.b)("p",null,"If header is ",Object(i.b)("inlineCode",{parentName:"p"},"True")," which is default, this parameters indicates where to find the header row or header rows for a multiline header. Let's see on example how the first two data rows can be treated as a part of a header:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Dialect\n\ndialect = Dialect(header_rows=[1, 2, 3])\nwith Table('data/capital-3.csv', dialect=dialect) as table:\n  pprint(table.header)\n  pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id 1 2', 'name London Berlin']\n[Row([('id 1 2', 3), ('name London Berlin', 'Paris')]),\n Row([('id 1 2', 4), ('name London Berlin', 'Madrid')]),\n Row([('id 1 2', 5), ('name London Berlin', 'Rome')])]\n")),Object(i.b)("h3",{id:"header-join"},"Header Join"),Object(i.b)("p",null,"If there are multiple header rows which is managed by ",Object(i.b)("inlineCode",{parentName:"p"},"header_rows")," parameter, we can set a string to be a separator for a header's cell join operation. Usually it's very handy for some \"fancy\" Excel files. For the sake of simplicity, we will show on a CSV file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Dialect\n\ndialect = Dialect(header_rows=[1, 2, 3], header_join='/')\nwith Table('data/capital-3.csv', dialect=dialect) as table:\n  pprint(table.header)\n  pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id/1/2', 'name/London/Berlin']\n[Row([('id/1/2', 3), ('name/London/Berlin', 'Paris')]),\n Row([('id/1/2', 4), ('name/London/Berlin', 'Madrid')]),\n Row([('id/1/2', 5), ('name/London/Berlin', 'Rome')])]\n")),Object(i.b)("h3",{id:"header-case"},"Header Case"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"New in version 3.23"))),Object(i.b)("p",null,"By default a header is validated in a case sensitive mode. To disable this behaviour we can set the ",Object(i.b)("inlineCode",{parentName:"p"},"header_case")," parameter to ",Object(i.b)("inlineCode",{parentName:"p"},"False"),". This option is accepted by any Dialect and a dialect can be passed to ",Object(i.b)("inlineCode",{parentName:"p"},"extract"),", ",Object(i.b)("inlineCode",{parentName:"p"},"validate")," and other functions. Please note that it doesn't affect a resulting header it only affects how it's validated:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table, Schema, Field, Dialect\n\ndialect = Dialect(header_case=False)\nschema = Schema(fields=[Field(name=\"ID\"), Field(name=\"NAME\")])\nwith Table('data/capital-3.csv', dialect=dialect, schema=schema) as table:\n  print(f'Header: {table.header}')\n  print(f'Valid: {table.header.valid}')  # without \"header_case\" it will have 2 errors\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Header: ['id', 'name']\nValid: True\n")),Object(i.b)("p",null,"Further reading:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Formats Reference")),Object(i.b)("h2",{id:"table-query"},"Table Query"),Object(i.b)("p",null,'Using header management described in the "Table Dialect" section we can have a basic skipping rows ability e.g. if we set ',Object(i.b)("inlineCode",{parentName:"p"},"dialect.header_rows=[2]")," we will skip the first row but it's very limited. There is a much more powerful interface called Table Queries to indicate where exactly to get tabular data from a file. We will use a simple file looking like a matrix:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"! cat data/matrix.csv\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"f1,f2,f3,f4\n11,12,13,14\n21,22,23,24\n31,32,33,34\n41,42,43,44\n")),Object(i.b)("h3",{id:"pickskip-fields"},"Pick/Skip Fields"),Object(i.b)("p",null,"We can pick and skip arbitrary fields based on a header row. These options accept a list of field numbers, a list of strings or a regex to match. All the queries below do the same thing for this file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Query\n\nprint(extract('data/matrix.csv', query=Query(pick_fields=[2, 3])))\nprint(extract('data/matrix.csv', query=Query(skip_fields=[1, 4])))\nprint(extract('data/matrix.csv', query=Query(pick_fields=['f2', 'f3'])))\nprint(extract('data/matrix.csv', query=Query(skip_fields=['f1', 'f4'])))\nprint(extract('data/matrix.csv', query=Query(pick_fields=['<regex>f[23]'])))\nprint(extract('data/matrix.csv', query=Query(skip_fields=['<regex>f[14]'])))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n[Row([('f2', 12), ('f3', 13)]), Row([('f2', 22), ('f3', 23)]), Row([('f2', 32), ('f3', 33)]), Row([('f2', 42), ('f3', 43)])]\n")),Object(i.b)("h3",{id:"limitoffset-fields"},"Limit/Offset Fields"),Object(i.b)("p",null,"There are two options that provide an ability to limit amount of fields similar to SQL's directives:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Query\n\nprint(extract('data/matrix.csv', query=Query(limit_fields=2)))\nprint(extract('data/matrix.csv', query=Query(offset_fields=2)))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('f1', 11), ('f2', 12)]), Row([('f1', 21), ('f2', 22)]), Row([('f1', 31), ('f2', 32)]), Row([('f1', 41), ('f2', 42)])]\n[Row([('f3', 13), ('f4', 14)]), Row([('f3', 23), ('f4', 24)]), Row([('f3', 33), ('f4', 34)]), Row([('f3', 43), ('f4', 44)])]\n")),Object(i.b)("h3",{id:"pickskip-rows"},"Pick/Skip Rows"),Object(i.b)("p",null,"It's alike the field counterparts but it will be compared to the first cell of a row. All the queries below do the same thing for this file but take into account that when picking we need to also pick a header row. In addition, there is special value ",Object(i.b)("inlineCode",{parentName:"p"},"<blank>")," that matches a row if it's completely blank:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Query\n\nprint(extract('data/matrix.csv', query=Query(pick_rows=[1, 3, 4])))\nprint(extract('data/matrix.csv', query=Query(skip_rows=[2, 5])))\nprint(extract('data/matrix.csv', query=Query(pick_rows=['f1', '21', '31'])))\nprint(extract('data/matrix.csv', query=Query(skip_rows=['11', '41'])))\nprint(extract('data/matrix.csv', query=Query(pick_rows=['<regex>(f1|[23]1)'])))\nprint(extract('data/matrix.csv', query=Query(skip_rows=['<regex>[14]1'])))\nprint(extract('data/matrix.csv', query=Query(pick_rows=['<blank>'])))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)]), Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)])]\n[]\n")),Object(i.b)("h3",{id:"limitoffset-rows"},"Limit/Offset Rows"),Object(i.b)("p",null,"This is a quite popular option used to limit amount of rows to read:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import extract, Query\n\nprint(extract('data/matrix.csv', query=Query(limit_rows=2)))\nprint(extract('data/matrix.csv', query=Query(offset_rows=2)))\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('f1', 11), ('f2', 12), ('f3', 13), ('f4', 14)]), Row([('f1', 21), ('f2', 22), ('f3', 23), ('f4', 24)])]\n[Row([('f1', 31), ('f2', 32), ('f3', 33), ('f4', 34)]), Row([('f1', 41), ('f2', 42), ('f3', 43), ('f4', 44)])]\n")),Object(i.b)("h2",{id:"header-options"},"Header Options"),Object(i.b)("p",null,'Header management is a responsibility of "Table Dialect" which will be described below but Table accept a special ',Object(i.b)("inlineCode",{parentName:"p"},"headers")," argument that plays a role of a high-level helper in setting different header options."),Object(i.b)("p",null,"It accepts a ",Object(i.b)("inlineCode",{parentName:"p"},"False")," values indicating that there is no header row:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/capital-3.csv', headers=False) as table:\n    pprint(table.header)\n    pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[]\n[Row([('field1', 'id'), ('field2', 'name')]),\n Row([('field1', '1'), ('field2', 'London')]),\n Row([('field1', '2'), ('field2', 'Berlin')]),\n Row([('field1', '3'), ('field2', 'Paris')]),\n Row([('field1', '4'), ('field2', 'Madrid')]),\n Row([('field1', '5'), ('field2', 'Rome')])]\n")),Object(i.b)("p",null,"It accepts an integer indicating the header row number:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/capital-3.csv', headers=2) as table:\n    pprint(table.header)\n    pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['1', 'London']\n[Row([('1', 2), ('London', 'Berlin')]),\n Row([('1', 3), ('London', 'Paris')]),\n Row([('1', 4), ('London', 'Madrid')]),\n Row([('1', 5), ('London', 'Rome')])]\n")),Object(i.b)("p",null,"It accepts a list of integers indicating a multiline header row numbers:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/capital-3.csv', headers=[1,2,3]) as table:\n    pprint(table.header)\n    pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id 1 2', 'name London Berlin']\n[Row([('id 1 2', 3), ('name London Berlin', 'Paris')]),\n Row([('id 1 2', 4), ('name London Berlin', 'Madrid')]),\n Row([('id 1 2', 5), ('name London Berlin', 'Rome')])]\n")),Object(i.b)("p",null,"It accepts a pair containing a list of integers indicating a multiline header row numbers and a string indicating a joiner for a concatenate operation:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Table\n\nwith Table('data/capital-3.csv', headers=[[1,2,3], '/']) as table:\n    pprint(table.header)\n    pprint(table.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"['id/1/2', 'name/London/Berlin']\n[Row([('id/1/2', 3), ('name/London/Berlin', 'Paris')]),\n Row([('id/1/2', 4), ('name/London/Berlin', 'Madrid')]),\n Row([('id/1/2', 5), ('name/London/Berlin', 'Rome')])]\n")),Object(i.b)("h2",{id:"integrity-options"},"Integrity Options"),Object(i.b)("p",null,"Extraction function and classes accepts a few options that are needed to manage integrity behaviour:"),Object(i.b)("h3",{id:"on-error"},"On Error"),Object(i.b)("p",null,"This option accept one of the three possible values configuring an ",Object(i.b)("inlineCode",{parentName:"p"},"extract"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Table"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Package")," behaviour if there is an error during the row reading process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ignore (default)"),Object(i.b)("li",{parentName:"ul"},"warn"),Object(i.b)("li",{parentName:"ul"},"raise")),Object(i.b)("p",null,"Let's investigate how we can add warnings on all header/row errors:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Table\n\ndata = [["name"], [1], [2], [3]]\nschema = {"fields": [{"name": "name", "type": "string"}]}\nwith  Table(data, schema=schema, onerror="warn") as table:\n  table.read_rows()\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'/home/roll/projects/frictionless-py/frictionless/table.py:771: UserWarning: The cell "1" in row at position "2" and field "name" at position "1" has incompatible type: type is "string/default"\n  warnings.warn(error.message, UserWarning)\n/home/roll/projects/frictionless-py/frictionless/table.py:771: UserWarning: The cell "2" in row at position "3" and field "name" at position "1" has incompatible type: type is "string/default"\n  warnings.warn(error.message, UserWarning)\n/home/roll/projects/frictionless-py/frictionless/table.py:771: UserWarning: The cell "3" in row at position "4" and field "name" at position "1" has incompatible type: type is "string/default"\n  warnings.warn(error.message, UserWarning)\n')),Object(i.b)("p",null,"In some cases, we need to fail on the first error. We will use ",Object(i.b)("inlineCode",{parentName:"p"},"raise")," for it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Table\n\ndata = [["name"], [1], [2], [3]]\nschema = {"fields": [{"name": "name", "type": "string"}]}\nresource = Resource(data=data, schema=schema)\nresource.onerror = \'raise\' # for Resource/Package it\'s possible to set this property after initialization\ntry:\n  resource.read_rows()\nexcept Exception as exception:\n  print(exception)\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'[type-error] The cell "1" in row at position "2" and field "name" at position "1" has incompatible type: type is "string/default"\n')),Object(i.b)("h3",{id:"lookup"},"Lookup"),Object(i.b)("p",null,"The lookup is a special object providing relational information in cases when it's not possible to extract. For example, the Package is capable of getting a lookup object from its resource while a table object needs it to be provided. Let's see an example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'from frictionless import Table\n\nsource = [["name"], [1], [2], [4]]\nlookup = {"other": {("name",): {(1,), (2,), (3,)}}}\nfk = {"fields": ["name"], "reference": {"fields": ["name"], "resource": "other"}}\nwith Table(source, lookup=lookup, patch_schema={"foreignKeys": [fk]}) as table:\n    for row in table:\n        if row.row_number == 3:\n            assert row.valid is False\n            assert row.errors[0].code == "foreign-key-error"\n            continue\n        assert row.valid\n\n')))}p.isMDXComponent=!0}}]);
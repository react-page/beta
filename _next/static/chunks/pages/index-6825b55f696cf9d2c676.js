_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n("LSll"),a={id:"2390df",version:1,rows:[{id:"4c7d90",cells:[{id:"95d678",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{children:[{text:"Next Level Content Editing"}],type:"HEADINGS/HEADING-TWO",data:{align:"center"}},{children:[{text:"ReactPage"}],type:"HEADINGS/HEADING-ONE",data:{align:"center"}}]}},rows:[],inline:null}]},{id:"31d7bd",cells:[{id:"0sACer",size:12,rows:[{id:"loa2uC",cells:[{id:"ArrHF0",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" is a next level content editor for react."}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"It enables "},{text:"webmasters and content editors ","EMPHASIZE/EM":!0,"EMPHASIZE/STRONG":!0},{text:"to create the content they want with the "},{text:"<Components />","CODE/CODE":!0},{text:" you provide as a developer."}]}]}},rows:[],inline:null}]},{id:"gBBJOK",cells:[{id:"V6JM7k",size:7,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Batteries included - Key features"}]},{type:"LISTS/UNORDERED-LIST",children:[{children:[{text:"powerful and customizable "},{text:"RichText Editor","EMPHASIZE/STRONG":!0}],type:"LISTS/LIST-ITEM"},{children:[{text:"12-column grid responsive grid layout"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Drag & Drop cells"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Undo & Redo, copy and hotkey support"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Multi-Language support"}],type:"LISTS/LIST-ITEM"},{children:[{text:"Add any custom Components you like"}],type:"LISTS/LIST-ITEM"}]}]}},rows:[],inline:null},{id:"ZRjxpt",size:5,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"PARAGRAPH/PARAGRAPH",children:[{text:"","EMPHASIZE/EM":!0}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"You can customize the rich text editor anyway you like.\nYou can even add formula editing capabilities:","EMPHASIZE/EM":!0}],data:{align:"center"}},{type:"PARAGRAPH/PARAGRAPH",children:[{text:""},{type:"Katex",children:[{text:"f(x) = x^2 "}],data:{}},{text:""}],data:{align:"center"}},{type:"PARAGRAPH/PARAGRAPH",children:[{text:""}]}]}},rows:[],inline:null}]},{id:"bNohHI",cells:[{id:"wHttGI",size:6,plugin:{id:"code-snippet",version:1},dataI18n:{en:{language:"tsx",code:"\nimport Editor from '@react-page/editor'\n\n// use ReactPage for editing Content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    onChange={newValue => saveTheValue(newValue)}\n/>\n\n// or just for displaying content\n<Editor\n    cellPlugins={yourCellPlugins}\n    value={theCurrentValue}\n    readOnly={true}\n/>\n"}},rows:[],inline:null},{id:"emqQYe",size:6,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"It's just a react component!"}]},{children:[{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" has a simple API - it's basically just like a form field and can be included in any project. "}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Pass it's current "},{text:"value","CODE/CODE":!0},{text:" that you might read from your datastore and update the value when "},{text:"onChange","CODE/CODE":!0},{text:" is called. "},{text:"It's that simple.","EMPHASIZE/STRONG":!0}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"Set "},{text:"readOnly={true}","CODE/CODE":!0},{text:" whenever you want to display content without editing capabilities. "},{text:"ReactPage","EMPHASIZE/STRONG":!0},{text:" will only load what is really required for displaying thanks to code splitting. This results in a "},{text:"small bundle size.","EMPHASIZE/STRONG":!0},{text:" "}]}]}},rows:[],inline:null}]}],inline:null,dataI18n:null}]},{id:"VxL3DU",cells:[{id:"H9Gsrj",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Server Side Rendering out of the box"}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"ReactPage ","EMPHASIZE/STRONG":!0},{text:"is built with performance in mind. It can be used for "},{text:"server side rendering (SSR)","EMPHASIZE/STRONG":!0},{text:", which makes it not only a great tool for editing, but also for displaying. It's battle tested in nextjs, this example itself is created using nextjs and static page generation."}]},{type:"PARAGRAPH/PARAGRAPH",children:[{text:"We try "},{text:"minimize bundle size","EMPHASIZE/STRONG":!0},{text:" as much as possible. Any UI solely used for editing is not loaded when in readOnly mode. "}]}]}},rows:[],inline:null}]},{id:"KU6Qba",cells:[{id:"kWAQtv",size:6,rows:[{id:"fwgBSe",cells:[{id:"wQVcBE",size:12,plugin:{id:"ory/editor/core/content/slate",version:1},dataI18n:{en:{slate:[{type:"HEADINGS/HEADING-TWO",children:[{text:"Embraces Typescript"}]},{type:"LISTS/ORDERED-LIST",children:[{children:[{text:"ReactPage is written in modern typescript and enables developer that include ReactPage into their project with typesafety and peace of mind. Thanks to generics, you can give any CellPlugin the data type that you need."}],type:"LISTS/LIST-ITEM"}]}]}},rows:[],inline:null}]},{id:"qvnmOs",cells:[{id:"ALUwLB",size:12,plugin:{id:"twitter-timeline",version:1},dataI18n:{en:{screenName:"AlYankovic",height:600}},rows:[],inline:null}]}],inline:null,dataI18n:null},{id:"zlxuAA",size:6,plugin:{id:"code-snippet",version:1},dataI18n:{en:{language:"tsx",code:n("ABSP").default}},rows:[],inline:null}]}]},l=n("mXGw"),r=n.n(l),o=n("aEiD"),s=r.a.createElement,d=[{lang:"en",label:"English"},{lang:"de",label:"Deutsch"}];function c(){var e=Object(l.useState)(a),t=e[0],n=e[1];return s(r.a.Fragment,null,s(i.b,{cellPlugins:o.a,value:t,lang:d[0].lang,onChange:n,languages:d}))}},ABSP:function(e,t,n){"use strict";n.r(t),t.default="import { CellPlugin } from '@react-page/editor';\nimport React from 'react';\nimport { Timeline } from 'react-twitter-widgets';\n\ntype Data = {\n  screenName: string;\n  height: number;\n};\n// you can pass the shape of the data as the generic type argument\nconst customContentPluginTwitter: CellPlugin<Data> = {\n  Renderer: ({ data }) => (\n    <Timeline\n      dataSource={{\n        sourceType: 'profile',\n        // data has already the right type!\n        screenName: data.screenName,\n      }}\n      options={{\n        height: data.height || 600,\n      }}\n    />\n  ),\n  id: 'twitter-timeline',\n  title: 'Twitter timeline',\n  description: 'A twitter timeline',\n  version: 1,\n  controls: {\n    type: 'autoform',\n    schema: {\n      // this JSONschema is type checked against the generic type argument\n      // the autocompletion of your IDE helps to create this schema\n      properties: {\n        screenName: {\n          type: 'string',\n          default: 'AlYankovic',\n        },\n        height: {\n          type: 'number',\n          default: 600,\n        },\n      },\n      required: ['screenName'],\n    },\n  },\n};\n\nexport default customContentPluginTwitter;\n"}},[["/EDR",2,0,1,3,6,4,7]]]);
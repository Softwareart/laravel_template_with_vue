(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04341f36"],{"105e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB80lEQVRYR+1Xv2sUQRT+vl07m2TPFLbiJMEiNlolhQFFsBBSJLW/Cm+CYGNaY6kIVrsRRP+ABERsRBtTaBMQMYXoDdpaROeu0cqdJ3Pehku45Hbv1tjsVLNv3vvexze82feIrnUk+TrxO02PdtvK3h8Kw2/f9bHPGS79ZiQxFwNgCcB02Ql74QnwrqnVKX/G0eTTFBG8Bhh1nF8C3ATlZ6lkhIcBmQJwvoO7ZrVaYJSYawAetY3EVVtXT0pNvAssWjG3IVj25lCouG0glm1d3fmXyTPsaMW8guCcSzG7TYBwcz/0xLMDIZCYBwBu7iDgP1o31PqBEOhcw9AEosTMuxRbRYln114GARFgvanVbBHlKgKVApUCuRWIHpoT4hDvVWIEzvgy3K8EGWDRXlcfu33yE0jMPIDVIjXew3fBarU2EIF+iaPEVA9RpUClwP9VoBY3LknIjd0PTd/yLasj6pdor/OeL6GAF5r6+ItBQYvE1eLGXSGXdrRkELllF8fvFwEa1DeKG09BzmUErkDwGBDryLOtuno/KHCeON/IZv+XAOEka/GX00K38TeYv0C5R3Ef0jRo5QHM6xOGbkQYnMymIgBvrVYz7eG0e1zKCzicn1gHXm5p9bxNwC8/pELCGQYYGw58/2hx2ALTN009uek9/wAtSQdo2VEasQAAAABJRU5ErkJggg=="},2487:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA3ElEQVQ4T2NkoBAwIuu/Icf2nxjzNB79guvDMABZEpthIEtGDcASBjdEGHj/c7AYMzIx7WdkYGjAFxP/GRga/v/758j4489ZjTcMn8GxcFOOrR4kQUwUwtSALFJ/9KsRbgBIAiRAjCEgC2HqUQxgYmBY/ZeB4So+Q5gZGLT/MTCEYjXg379/BxkZGes1Hv92xJqIZFn3////v5GJickexYAb8qzJDP8YYmCa8BkAN5iJYYnGw99zUZLydRkWB2JcoPnkzwGkwEQ49rYcmxYxYaD66Nc1rAYQEwPoagCzKnsRorHjeQAAAABJRU5ErkJggg=="},2596:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVQ4T+2TIQ+DUAyErwIIaOyeLn6ahF9OQM+zuaVD4heK6PI85C0rcqeapv3S9HIEpyi1f79kPb+27mjuDwDO+cEjFIPBKgMqAspYE6gEEHtPMpv3XIjupC8I+ZtFI2xX3wAWFq09AGHR4AFMLNp4ADcWvToAxciytr8DvGFKpfUD0oJCEZTDITIAAAAASUVORK5CYII="},"28a5":function(e,t,i){"use strict";var n=i("aae3"),l=i("cb7c"),r=i("ebd6"),a=i("0390"),s=i("9def"),c=i("5f1b"),o=i("520a"),A=i("79e5"),d=Math.min,u=[].push,h="split",f="length",g="lastIndex",v=4294967295,p=!A((function(){RegExp(v,"y")}));i("214f")("split",2,(function(e,t,i,A){var m;return m="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[f]||2!="ab"[h](/(?:ab)*/)[f]||4!="."[h](/(.?)(.?)/)[f]||"."[h](/()()/)[f]>1||""[h](/.?/)[f]?function(e,t){var l=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(l,e,t);var r,a,s,c=[],A=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,h=void 0===t?v:t>>>0,p=new RegExp(e.source,A+"g");while(r=o.call(p,l)){if(a=p[g],a>d&&(c.push(l.slice(d,r.index)),r[f]>1&&r.index<l[f]&&u.apply(c,r.slice(1)),s=r[0][f],d=a,c[f]>=h))break;p[g]===r.index&&p[g]++}return d===l[f]?!s&&p.test("")||c.push(""):c.push(l.slice(d)),c[f]>h?c.slice(0,h):c}:"0"[h](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)}:i,[function(i,n){var l=e(this),r=void 0==i?void 0:i[t];return void 0!==r?r.call(i,l,n):m.call(String(l),i,n)},function(e,t){var n=A(m,e,this,t,m!==i);if(n.done)return n.value;var o=l(e),u=String(this),h=r(o,RegExp),f=o.unicode,g=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(p?"y":"g"),w=new h(p?o:"^(?:"+o.source+")",g),C=void 0===t?v:t>>>0;if(0===C)return[];if(0===u.length)return null===c(w,u)?[u]:[];var I=0,E=0,B=[];while(E<u.length){w.lastIndex=p?E:0;var x,b=c(w,p?u:u.slice(E));if(null===b||(x=d(s(w.lastIndex+(p?0:E)),u.length))===I)E=a(u,E,f);else{if(B.push(u.slice(I,E)),B.length===C)return B;for(var S=1;S<=b.length-1;S++)if(B.push(b[S]),B.length===C)return B;E=I=x}}return B.push(u.slice(I)),B}]}))},"69dd":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("element UI树形组件")])]),e._v(" "),i("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"Filter keyword"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),i("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:e.data2,props:e.defaultProps,"filter-node-method":e.filterNode,"default-expand-all":""}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-card",{staticClass:"box-card"},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[e._v("自定义tree组件")])]),e._v(" "),e._l(e.list,(function(t){return i("tree",{key:t.id,attrs:{item:t},on:{"update:item":function(e){t=e},treeItemSelect:e.treeItemSelect}})}))],2)],1)],1)],1)},l=[],r=(i("ac6a"),i("28a5"),[{id:10098,title:"第一章",children:[{id:10254,title:"第一节",children:[{id:10530,title:"第一段",children:[]},{id:10531,title:"第二段",children:[]},{id:10532,title:"第三段",children:[]}]},{id:10350,title:"第二节",children:[]},{id:10351,title:"第三节",children:[]}]},{id:10100,title:"第二章",children:[]},{id:10200,title:"第三节",children:[]}]),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("div",{staticClass:"tree-item",style:e.treeClass,on:{mouseenter:function(t){e.isMove=!0},mouseleave:function(t){e.isMove=!1},click:function(t){return e.toggleChildren()}}},[e.item.children.length>0&&!this.showChildren?n("img",{staticStyle:{width:"16px",height:"16px"},attrs:{src:i("105e"),alt:""}}):n("img",{staticStyle:{width:"16px",height:"16px"},attrs:{src:i("cd5c"),alt:""}}),e._v("\n    "+e._s(e.item.title+e.item.level)+"\n    "),e.isMove?n("div",{staticClass:"toolbar"},[n("img",{attrs:{"data-msg":"新建",src:i("2596"),alt:""},on:{click:function(t){return e.add(e.item.id)}}}),e._v(" "),n("img",{attrs:{"data-msg":"保存",src:i("a4fa"),alt:""},on:{click:function(t){return e.save(e.item.id)}}}),e._v(" "),n("img",{attrs:{"data-msg":"打印",src:i("2487"),alt:""},on:{click:function(t){return e.print(e.item.id)}}})]):e._e(),e._v(" "),e.item.isSelect?n("div",{staticClass:"select-item"},[e._v("我选择了")]):e._e()]),e._v(" "),e.showChildren?e._l(e.item.children,(function(t){return n("tree",{key:t.id,attrs:{item:t},on:{treeItemSelect:e.treeItemSelect,"update:item":function(e){t=e}}})})):e._e()],2)},s=[],c={name:"tree",props:{item:{type:Object,default:function(){return{}}}},data:function(){return{showChildren:!1,isMove:!1}},computed:{treeClass:function(){var e=1===this.item.level?30:30+30*(this.item.level-1);return{"margin-left":e+"px"}}},created:function(){},methods:{showId:function(e){alert(e)},toggleChildren:function(){this.showChildren=!this.showChildren,this.$emit("treeItemSelect",this.item.relation)},treeItemSelect:function(e){this.$emit("treeItemSelect",e)},add:function(e){alert("新建数据"+e)},save:function(e){alert("保存数据"+e)},print:function(e){alert("打印数据"+e)}}},o=c,A=(i("f4c2"),i("2877")),d=Object(A["a"])(o,a,s,!1,null,null,null),u=d.exports,h={data:function(){return{filterText:"",data2:[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}],defaultProps:{children:"children",label:"label"},treeData:r,list:[],currentId:null}},components:{tree:u},created:function(){this.initTreeData()},watch:{filterText:function(e){this.$refs.tree2.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},addData:function(){console.log("传到id为"+this.currentId+"子元素"),this.initTreeData()},resetSelect:function(){var e=function e(t){t.map((function(t,i){t.isSelect=!1,t.children.length>0&&e(t.children)}))};e(this.list)},treeItemSelect:function(e){this.resetSelect();var t=e.split(/#+/g);t.pop(),t.shift(),this.currentId=parseInt(t[t.length-1]);var i=function e(t,i,n){t.forEach((function(t,l){t.id===parseInt(i[n])?(t.isSelect=!0,t.children.length>0&&(t.isSelect=!1,i.length===n+1&&(t.isSelect=!0),e(t.children,i,n+1))):t.isSelect=!1}))};i(this.list,t,0)},initTreeData:function(){console.log("处理前的:",JSON.parse(JSON.stringify(this.treeData)));var e=JSON.parse(JSON.stringify(this.treeData)),t=function e(t,i,n,l){t.map((function(t,r){t.isSelect=!1,t.children=t.children||[],t.level=i,t.pid=n,t.relation=l+"#"+t.id+"#",t.children.length>0&&e(t.children,i+1,t.id,t.relation)}))};t(e,1,0,"0"),console.log("处理后的:",e),this.list=e}}},f=h,g=Object(A["a"])(f,n,l,!1,null,null,null);t["default"]=g.exports},a4fa:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVQ4T2NkoBAwgvTfkGP7T6I5qzUe/QoD6YEboPHoFwYb3VCQRSB1N+XYZ/5n+C8IMoQsA0AG35Rjq//PwKBNtgEwr9PGAHwBCgsrnC4gJTZAgUow5PEZiNUAYtIEcpSTFIgwfxM0QP3RL6abcmw/GRgYWJG88Fv90S/2m3Js/wgagBzSuFIj3nQwMC4gJf6R1QIAVdmzex9w0cwAAAAASUVORK5CYII="},cd5c:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxElEQVRYR2NkGGDAiGy/0LTboQyMDFo0ddN/hmvvslRXw+yAO0Bw2u39jAwMDjS1HGr4fwaGA++zVB1BXLADBCbfdmBiZtgPYoMkaekImCf//WVw/JCregDsAKHpt+sZ/jM0ILuMVo6AhzQjQ8O7TNXGUQeMhsBoCIyGwGgIEAwBoWl3uhgY/peSVzQzdr/LUilD1ktyUTzgDiDP57h1kRwCow4YDYHREBgNgZERAgPeMQEF84B2zWDxPKCdU2onNmLNAwBrw1Yw9PCelwAAAABJRU5ErkJggg=="},f4c2:function(e,t,i){"use strict";var n=i("fcfa"),l=i.n(n);l.a},fcfa:function(e,t,i){}}]);
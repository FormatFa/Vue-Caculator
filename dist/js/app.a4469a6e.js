(function(t){function n(n){for(var e,l,c=n[0],a=n[1],i=n[2],p=0,h=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&h.push(o[l][0]),o[l]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);u&&u(n);while(h.length)h.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var t,n=0;n<s.length;n++){for(var r=s[n],e=!0,c=1;c<r.length;c++){var a=r[c];0!==o[a]&&(e=!1)}e&&(s.splice(n--,1),t=l(l.s=r[0]))}return t}var e={},o={app:0},s=[];function l(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=e,l.d=function(t,n,r){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)l.d(r,e,function(n){return t[n]}.bind(null,e));return r},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var u=a;s.push([0,"chunk-vendors"]),r()})({0:function(t,n,r){t.exports=r("56d7")},"034f":function(t,n,r){"use strict";var e=r("64a9"),o=r.n(e);o.a},"56d7":function(t,n,r){"use strict";r.r(n);r("cadf"),r("551c"),r("f751"),r("097d");var e=r("2b0e"),o=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.expr,expression:"expr"}],staticClass:"expr",domProps:{value:t.expr},on:{input:[function(n){n.target.composing||(t.expr=n.target.value)},t.caculate]}})])],1),r("el-row",[r("el-col",[r("div",{staticClass:"expr",staticStyle:{"font-size":"large",color:"gray","text-align":"right"}},[t._v(t._s(t.result))])])],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator",on:{click:function(n){return t.insertChar("mc")}}},[t._v("mc")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator",on:{click:function(n){return t.insertChar("m+")}}},[t._v("m+")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock  operator",on:{click:function(n){return t.insertChar("m-")}}},[t._v("m-")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator",on:{click:function(n){return t.insertChar("mr")}}},[t._v("mr")])])],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("C")}}},[t._v("C")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("/")}}},[t._v("÷")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("*")}}},[t._v("×")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("del")}}},[t._v("删除")])])],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("7")}}},[t._v("7")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("8")}}},[t._v("8")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("9")}}},[t._v("9")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("-")}}},[t._v("-")])])],1),r("el-row",[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("4")}}},[t._v("4")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("5")}}},[t._v("5")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("6")}}},[t._v("6")])]),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock operator2",on:{click:function(n){return t.insertChar("+")}}},[t._v("+")])])],1),r("el-row",[r("el-col",{attrs:{span:18}},[r("el-row",[r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("1")}}},[t._v("1")])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("2")}}},[t._v("2")])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("3")}}},[t._v("3")])])],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("%")}}},[t._v("%")])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar("0")}}},[t._v("0")])]),r("el-col",{attrs:{span:8}},[r("div",{staticClass:"inputblock number",on:{click:function(n){return t.insertChar(".")}}},[t._v(".")])])],1)],1),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"inputblock equal",on:{click:function(n){return t.insertChar("=")}}},[t._v("=")])])],1),r("el-row",t._l(t.stackLog,function(n){return r("p",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(n)}})}),0)],1)},s=[];r("ac6a");var l={"+":1,"-":1,"*":2,"/":2,"%":2,null:-1};function c(t,n,r){var e=parseFloat(n),o=parseFloat(r);return"+"==t?e+o:"-"==t?e-o:"*"==t?e*o:"/"==t?e/o:"%"==t?e%o:void 0}function a(t,n,r){r.push("<h3>开始清空栈..</h3>"),console.log("开始清空操作符栈..."),console.log(t);while(0!=t.length){var e=n.pop(),o=n.pop(),s=t.pop(),l=c(s,o,e);n.push(l);var a='<span style="color:blue;">caculate : '.concat(o).concat(s).concat(e,"=").concat(l,"</span>");r.push(a)}}function i(t){var n=new Array;n.push("<h4>处理日志....</h4>"),console.log("--------------计算:"+t+"---------------");var r=new Array;console.log("expr length:"+t.length);for(var e="",o=0;o<t.length;o+=1){var s=t.charAt(o);s in l?0==e.length?e+=s:(console.log("遇到操作符:"+s+" temp:"+e),r.push(e),r.push(s),e=""):e+=s}console.log("添加最后操作数:"+e+" "+e.length),r.push(e),console.log("分解字符串为操作数和操作符:"),console.log(r),n.push("<h4>分解成表达式成操作符操作数<h4>"),n.push(r);var c=new Array,i=new Array,u="null";return r.forEach(function(t,e){var o=[];Object.assign(o,r),o[e]='<span style="color:red">'.concat(t,"</span>"),n.push("<h4>"+o.join("")+"</h4>"),t in l?(console.log("操作符比较: ".concat(l[t]," vs ").concat(l[u])),l[t]<l[u]?(a(i,c,n),i.push(t)):i.push(t),u=t):c.push(t),n.push("操作数:"+c.join(" ")),n.push("操作符:"+i.join(" "))}),a(i,c,n),console.log("计算玩后栈情况:"),console.log(i),console.log(c),console.log("-----------------计算完成--------------"),{stackLog:n,result:""+c.pop()}}var u=i,p={name:"app",components:{},data:function(){return{expr:"1+1",result:"2",memory:0,stackLog:["<h2>test</h2>","23"]}},compute:{},methods:{test:function(){console.log("测试..")},caculate:function(){console.log("= ,计算结果,表达式:"+this.expr);var t=u(this.expr);this.result=t.result,this.stackLog=t.stackLog,console.log("结果:"+this.result)},insertChar:function(t){"del"==t?(console.log("删除字符串"),this.expr=this.expr.substring(0,this.expr.length-1)):"="==t?(this.expr=this.result,this.result="123"):"C"==t?this.expr="":"mc"==t?this.memory=0:"mr"==t?this.expr=this.memory:"m+"==t?this.memory=this.expr+this.result:"m-"==t?this.memory=this.expr+this.result:(console.log("添加字符串:"+t),this.expr=this.expr+t),this.caculate()},enter:function(t){console.log("enter:"),console.log(t);var n=t.target.innerText;"="==n||this.insertChar(t.target,n)}}},h=p,v=(r("034f"),r("2877")),f=Object(v["a"])(h,o,s,!1,null,null,null),d=f.exports,b=r("5c96"),g=r.n(b);r("0fae");e["default"].config.productionTip=!1,e["default"].use(g.a),new e["default"]({render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,n,r){}});
//# sourceMappingURL=app.a4469a6e.js.map
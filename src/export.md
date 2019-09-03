## node 中的导入导出
1. module.exports
导出
2. require 
导入

`caculate.js`
```js
var name = "Formatfa";
function sayHello()
{
    console.log("Hello from function");
}
module.exports={
    name,
    sayHello
}

```
`test.js`
```js
var caculate = require('./caculate.js')

console.log("name:"+caculate.name);
caculate.sayHello();

```
`result`
```js
bigdata@ljh-X441UVK:~/Documents/projects/前端/algorithm/src$ node test.js
name:Formatfa
Hellow from function
bigdata@ljh-X441UVK:~/Documents/projects/前端/algorithm/src$ 
```


## ES6中的导入导出
- export default 只有一个
- export 可以有多个
- 通过export导出的,**导入**时要加{}(导入多个)  , export default的不用
1. export
2. export default

export 详解
https://www.jb51.net/article/126843.htm
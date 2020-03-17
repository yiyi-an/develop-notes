---
typora-copy-images-to: ipic
---



# Node

## npm

- ### Commond

  `npm version [patch,minor,major]`

  >  按照npm自己的版本控制标准--Semantic versioning 对package.json里的version升级，
  >
  >  对于"version":"x.y.z"，patch,minor,major分别对应z,y,x

- ### 




## child_process

- `childProcess.spawn`

   ```javascript
  const childProcess = require('child_process')
  childProcess.spawn('./src/prompt.js')
  ```

  

- `childProcess.fork` 

  ```javascript
  const childProcess = require('child_process')
  childProcess.fork('./src/prompt.js')
  ```

- `childProcess.exec(command[, options][, callback])`

  ```js
const childProcess = require('child_process')
  childProcess.exec(`cd /Users && ls`)
  ```
  




## http模块

```javascript
//----------------http模块----------------
const http = require("http")
 http.createServer(function(request,response){
      response.writeHead(200,{'Content-Type':'html'});
      response.write(`<!DOCTYPE html>
                          <html>
                          <head>
							<meta charset="utf-8" />
							<title>demo</title>
						</head>
                          <body>http的demo</body>
                          </html>`);
      response.end();
    }).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');


//----------------express模块----------------  
const express = require("express")
const app = express()
app.get('/',(req,res)=>{
  res.send('123123')
})
app.listen(9999,()=>console.log('app listening on port 9999'))


//----------------express + ejs-------------------
const express = require("express")
const app = express()
//设置app的engine为ejs 
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
  // 使用同级views目录下demo.ejs模板 用data数据填充
  res.render('/demo',data)
})
app.listen(9999,()=>console.log('app listening on port 9999'))


```



## fs模块

#### 读取文件

```javascript
const fs = require('fs')
//异步读取
fs.readFile('./test.html', 'utf8', function(err, data){
    console.log(data);  
});

//同步读取
const htmldata = fs.readFileSync('./test.html','utf8')
console.log(htmldata)

//异步写入
fs.writeFile('./output.html',`写入的内容`,err=>{
  if(err) console.log(err,'文件写入失败')
})

//同步写入
//写入文件的内容只能是字符串
fs.writeFileSync('./output.html',`写入文件的内容`)
```



#### 读取图片等其他内容

```javascript
fs.readFileSync("./4.jpg",'binary')

//demo
const MIME = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
 }


function getFileMime(filePath){
  let fileExt = filePath.replace(/.+\./,"");
  return fileExt
}

let filePath = path.resolve(__dirname, `./${相对路径}`)
  let img = fs.readFileSync(filePath,'binary')
  
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { 'Content-Type':MIME[getFileMime(event.path)] },
    body: img
  }
```





## path模块

#### jion

> `path.join()` 方法使用平台特定的分隔符作为定界符将所有给定的 `path` 片段连接在一起，然后规范化生成的路径。

```javascript
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'
```
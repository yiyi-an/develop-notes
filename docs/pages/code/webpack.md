---
typora-copy-images-to: ipic
---


# Webpack相关

## nrm管理npm registry

a.下载nrm

```
npm install -g nrm
```

b.添加registry地址

```
nrm add npm http://registry.npmjs.org
nrm add taobao https://registry.npm.taobao.org
```

c.切换npm registry地址

```
nrm use taobao
nrm use npm
```

## 生成、测试、开发环境配置

> 每个环境对应一个baseUrl ，通过输入 npm run build/beta  打包出不同环境的包



## eslint 结合IDE 代码自动格式化

> `eslint --init`
>
> `npm install -S eslint-loader eslint-plugin-html`

## vue-cli中使用pug

### vue-cli 2.0

1. 安装pug依赖    ```npm install pug pug-loader pug-filters -D```

2. 打开**webpack.base.conf**，在**module**的**rules**节点下添加如下配置：

   ```javascript
   {
         test: /\.pug$/,
         loader: 'pug'
   }, 
   ```

3. 尽情飞翔吧

   ```javascript
   <template lang='pug'>
   	.........  		
   </template>
   ```



### vue-cli 3.0

1. 安装pug依赖```npm install pug pug-plain-loader  ```

2. 打开**vue.config.js**，module.exports下添加

   ```javascript
   chainWebpack: config => {
       config.module
         .rule('pug')
         .test(/\.pug$/)
         .use('pug-plain-loader')
         .loader('pug-plain-loader')
         .end()
     },
   ```
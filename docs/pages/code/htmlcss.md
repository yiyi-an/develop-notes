---
typora-copy-images-to: ipic
---


# html/css

## css样式

- 文字渐变

  ```css
  span {
          background: linear-gradient(to right, red, blue);
          -webkit-background-clip: text;
          color: transparent;
      }
  ```

- 设置input placeholder样式

  ```css
  input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999999;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999999;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999999;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999999;
  }
  ```
  
- 单边阴影

  ```css
  .top {  
  	box-shadow: 0 -4px 5px -3px red;  
  }  
  .right {  
  	box-shadow: 4px 0 5px -3px green;  
  }  
  .bottom {  
  	box-shadow: 0 4px 5px -3px blue;  
  }  
  .left {  
  	box-shadow: -4px 0 5px -3px orange;  
  } 
  ```

- 文字省略号显示

  ```css
  .test_ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
  }
  ```

  



## BFC的理解

> BFC（Block Formatting Context）格式化上下文，是盒模型布局的css渲染模式，BFC会脱离一般文档流

1. 以下几种情况会形成BFC:
   - 浮动元素
   - 定位元素：absolute ，fixed
   - display：inline-block，tabel-cell，table-caption，flex
   - overflow：hidden，scroll，auto 
2. BFC特性
   1. 内部Box会在垂直方向上一个接一个的放置
   2. 垂直方向上的距离有margin决定，以大的一方为准
   3. bfc的区域不会与float的元素区域重叠
   4. 计算bfc的高度时，浮动元素也参与计算
   5. bfc是页面上一个独立的容器，容器里面子元素不会影响容器外面元素

## 圣杯布局

```html
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"></div>
  <style>
    .box1 ,.box2{
      background: #aa00aa;
      float: left;
      width: 300px;
      height: 300px;
    }
    .box2{
      float: right;
    }
    .box3 {
      overflow: hidden; /*创建bfc*/
      background: #bbb;
      height: 500px;
    }
  </style>
```



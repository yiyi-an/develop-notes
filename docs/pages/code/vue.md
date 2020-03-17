---
typora-copy-images-to: ipic
---

# vue

## v-model语法糖

v-model事实上是个语法糖`<input v-model='name'/>`它等价于

` <input v-bind:value='name' v-on:input='name = $event.target.value'>`

> oninput事件在inpu值发生改变时触发，如果是中文输入法相当于键盘抬起时

同理可得

```html
<child-component v-model='name'>   //等价于 
<child-component :value='name' @input='inputOne'> 
```

js:

```javascript
//父组件
export defalt {
  data(){
    return{
      name:''
    }
  },
  methods:{
    inputOne(value){
      this.name = value
    }
  }
}

```



## Vue.extend()

`Vue.extend(options)`,其中options传入一个vue组件对象。

>  可以理解为extend会返回一个构造函数，这个构造函数是传入的vue组件的构造器，
>
>  构造器参数可选，传入vue组件options对象，生成的实例会优先使用传入的配置
>
>  最后用new操作符生成一个vnode实例



```javascript
const vueComponent = {
  name:"vueComponents"
  data(){
    content:"一个组件"
  },
  render(h){"div",this.content}
}
const ToastConstructor = Vue.extend(vueComponent)
const instance = new ToastConstructor({
  data: {
    content:"更新后的content"
  }
})
```



## **provide和inject**

> 父组件中通过provider提供变量，子组件通过inject来注入变量。只要在父组件的生命周期内，不论子组件有多深，只要调用了inject就可以注入provider中的数据。

```javascript
Vue.component('parent',{
  template:`<div><child/></div>`,
  provide:{
    //想啥都行  eg
    app:this
  }
})

Vue.component('child',{
  injiect:['app'],
  template:`<div> {{message}} </div>`,
  data(){
    return {
      message:this.app
    }
  }
})
```
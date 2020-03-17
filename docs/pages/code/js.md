---
typora-copy-images-to: ipic
---

# 小册


### 各种容器距离

![1118894-20170408092742207-1596366854](https://ws1.sinaimg.cn/large/006tNbRwly1fxmmnwgbj3j30i10hyt9e.jpg)


### js钩子机制

```javascript
var _log =  console.log
console.log = function(){
  //这里可以加些逻辑 
  _log.call(this,...arguments)
}
```



# 工具函数

## js浮点数运算

```javascript
const parseNum = (num,digit=8)=>{
  num += .00000000000001
  num = parseFloat(num.toFixed(digit))
  return num
}

```

## 防抖&&节流

```javascript
/**
 * 简单函数防抖
 * @param action
 * @param delay
 * @returns {Function}
 */
const debounce = function(fn,delay = 500){
  var timer=null;
    return function () {
      const context = this
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(()=> {
        fn.apply(context,args);
      },delay);
    }
}
function targetFun() {
    console.log('throttleV1');
}
const insideFun = debounce.call(this,targetFun)
// 监听滚动条触发
window.addEventListener('scroll', insideFun);
// 或者watch某属性触发
watch:{
  val(newValue){
    insideFun()
  }
}

/**
 * 简单函数节流
 * @param action
 * @param delay
 * @returns {Function}
 */
const throttle = function (fn, delay=500) {
    let last = 0;
    return function () {
        let current = Number(new Date());
        if (current - last > delay) {
            fn.apply(this, arguments);
            last = current;
        }
    };
};
function myFun() {
    console.log('throttleV1');
}
window.addEventListener('scroll', throttle(myFun,500));
```



## 滚动到顶部

```javascript
function scrollToTop () {
      let scrollTop = window.pageYOffset || document.body.scrollTop ||
        document.documentElement.scrollTop
      let timer = null
      const target = 0
      clearInterval(timer)
      if (scrollTop > target) {
        timer = setInterval(() => {
          let step = (target - scrollTop) / 10
          step = target > scrollTop ? Math.ceil(step) : Math.floor(step)
          scrollTop = Math.ceil(scrollTop + step)
          window.scrollTo(0, scrollTop)

          if (scrollTop === target) {
            clearInterval(timer)
          }
        }, 5)
      }
    }
```





## 获取图片文件回显

```html
<input type="file" onchange="haddleUpload()" id="imgInput">
```

```javascript
function haddleUpload(){
  var _this = document.getElementById('imgInput')
  var file = _this.files[0] // file为整个图片文件
  var container = document.body; // 图片外层容器元素 

  // 判断file的类型是不是图片类型。 
  if (!/image\/\w+/.test(file.type)) { 
      _this.outerHTML = _this.outerHTML
      alert("请上传一张图片~"); 
      return false; 
  } 
  
  // 图片文件转base64
  var reader = new FileReader(); 
  reader.readAsDataURL(file); // 调用readAsDataURL方法来读取选中的图像文件
  reader.onload = function(e) { 
    this.result // 图片的base64编码
    imgUrlToContainer(this.result,container)
  } 
}

function imgUrlToContainer(BaseImg,container){
  //@BaseImg 传图片base64编码
  //@container 图片要插入的目标元素 
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = BaseImg
  img.onload = function(){
    var cWdith = container.clientWidth
    var  _width = cWdith
    var _height = cWdith / img.width * img.height
    canvas.width = _width
    canvas.height = _height
    ctx.drawImage(img, 0, 0,_width,_height)
  };
  container.appendChild(canvas)
}
```



# Object

## for in 和 Object.keys()

> `for in`可枚举 ***自身*** 以及 ***原型*** 可枚举的属性，Object.keys只枚举***自身***可枚举属性

```javascript
const obj = { name: 'an', age: 12 }
obj.__proto__.sex = 'male'
Object.defineProperties(obj, {
  weight: { enumerable: false, value: '80kg' },
  height: { enumerable: true, value: '180' }
})
for (const key in obj) {
  console.log(key)  // name age height sex
}
console.log(Object.keys(obj)) // ['name','age','height']
```

## Object.entries()

```javascript
const obj = { name: 'an', age: 12 ,sex: 'male'}
Object.entries(obj).forEach([key,value] => console.log(key,value))
// name,an
// age,12
// sex,male
```



## Object.defineProperties()

> Object.defineProperties(obj,props)

```javascript
// props
{
  configurable:false, // true 可以删除
  enumeralbe:false,//  ture 可以枚举
  value:undefined,
  writable:false, // true value可以修改
  get(){ return newValue },//getter函数
  set(){},//setter函数
}
```





# Array

## Array.map

> `map(callback)` 	方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。返回一个新的数组对原数组无影响

```javascript
function plural(item) {
  var result = item.replace(/o/g, 'e');  
  if( single === 'kangaroo'){
    result += 'se';
  }
  return result; 
}

var words = ["foot", "goose", "moose", "kangaroo"];
var words2 = words.map(plural);

console.log(words);//["foot", "goose", "moose", "kangaroo"];
console.log(words2);// ["feet", "geese", "meese", "kangareese"]
```



## Array.reduce

> `reduce(callback,initialValue)` 	为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 `reduce` 的数组。

```javascript
[0,1,2,3,4].reduce(callback,initialValue)
var callback = function(previousValue, currentValue, index, array){
  /*
  previousValue
  上一次调用回调返回的值，或者是提供的初始值（initialValue）
  currentValue
  数组中当前被处理的元素
  index
  当前元素在数组中的索引
  array
  调用 reduce 的数组
  */
  return previousValue + currentValue; // return 的值将作为下一次调用callback的 previousValue
}
var initialValue = 0 // 作为第一次调用callBack传入的 previousValue
```



# 算法

## 生成tree

```javascript
const data = [
  { id: 1, name: "一级菜单1", pid: 0 },
  { id: 2, name: "二级菜单1-1", pid: 1 },
  { id: 3, name: "二级菜单1-2", pid: 1 },
  { id: 4, name: "三级菜单1-1-1", pid: 2 },
  { id: 5, name: "一级菜单2", pid: 0 },
  { id: 6, name: "二级菜单2-1", pid: 5 },
  { id: 7, name: "三级菜单2-1-1", pid: 6 },
  { id: 8, name: "一级菜单3", pid: 0 },
  { id: 9, name: "二级菜单3-1", pid: 8 },
  { id: 10, name: "二级菜单3-2", pid: 8 },
  { id: 11, name: "二级菜单2-2", pid: 5 },
  ];

  const toTree = (data)=> {
    // 1.创建一个映射对象 通过唯一标识建立引用关系
    const obj = {}
    data.forEach(item=>{
      delete item.children
      obj[item.id] = item
    })
    // 2.创建新数组，通过映射对象找到父对象 将pid==0的元素push到新数组，将pid ==
    const tree = []
    data.forEach(item=>{
      let parent = obj[item.pid]
      if(parent){
        parent.children||(parent.children = []).push(item)
      }else{
        tree.push(item)
      }
    })
    return tree
  }
  console.log(toTree(data))
```



## 用对象代替switch||if.else.

```javascript
//根据传入不同参数执行不同函数
const getParsedInputValue = type => {
    const emailParser = email => `email,  ${email}`;
    const passwordParser = password => `password, ${password}`;
    const birthdateParser = date => `date , ${date}`;

    const parsers = {
        email: emailParser,
        password: passwordParser,
        birthdate: birthdateParser,
        default: value => value
    };

    return parsers[type] || parsers.default;
};

const parsedEmail = getParsedInputValue('email')('myemail@gmail.com'); 
// Returns email, myemail@gmail.com

const parsedName = getParsedInputValue('name')('Enmanuel'); 
// Returns 'Enmanuel'

```

## 快速排序

```javascript
const sortAndReduce = (arr) => {
  if(arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0]; // 基准值
    const lowArr= []; // 小的放左边
    const hightArr = []; // 大的放右边
    arr.forEach(current => {
      if(current > pivot) hightArr.push(current);
      else if(current < pivot) lowArr.push(current);
    })
    return sortAndReduce(lowArr).concat(pivot, sortAndReduce(hightArr));
  }
}
```



# 实现原理、思路

## Arrow 

```javascript
const a1 = (arg) => { console.log(arg)}

// 上下等效

function Arrow(cb){
 return cb.bind(this)
}
const a2 = Arrow.call(this,function(arg){ console.log(arg)})

//验证：
var name = 'window'
const fooA = {
    name:'fooA',
    say:function(){
      console.log(this.name)
      a.say3 = Arrow.call(this,function(){console.log(this.name)})
    },
    say2:Arrow.call(this,function(){console.log(this.name)})
  }

const fooB = {name:'fooB'}

a.say()
a.say.call(b)
a.say2.call(b)
a.say3.call(b)

```
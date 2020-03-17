---
typora-copy-images-to: ipic
---


# 项目实际问题

## 正则表达式

- 隐藏中间4位手机号

  ```javascript
  '13333333333'.replace(/(\d{3})\d{4}(\d{4})/g, '$1****$3')
  ```
  
- 全局查找css类名

  ```js
  var reg = /class=(\S*\s*)*discount/g
  reg.test('class="abc discount"')
  ```

  



## 上传到阿里云

```javascript
//html里面引入
<script src="http://gosspublic.alicdn.com/aliyun-oss-sdk-4.3.0.min.js"></script>

//vue里面使用
upload(e,isShow,fileNameArg,callBack){
      var myTime = new Date();
      var iYear = myTime.getFullYear();
      var iMonth = myTime.getMonth()+1;
      var iDate = myTime.getDate();
      var iHours = myTime.getHours();
      var iMin = myTime.getMinutes();
      var iSec = myTime.getSeconds();
      var TDATE = '';

      TDATE = iYear+'-'+iMonth+'-'+iDate+iHours+iMin+iSec;
      var FEName=e.name;
      var suffix=FEName.substring(FEName.lastIndexOf('.'));
      var client = new OSS.Wrapper({
        accessKeyId:localStorage.getItem('AccessKeyId'),
        accessKeySecret:localStorage.getItem('AccessKeySecret'),
        stsToken:localStorage.getItem('SecurityToken'),
        endpoint:'oss-cn-beijing.aliyuncs.com',
        bucket:'xhqphoto'
      });
      let _this = this
      client.multipartUpload('ccd/'+TDATE+suffix,e).then(function (result){
        let name = result.name
        _this[fileNameArg] = name
        localStorage.setItem(fileNameArg,name)
        _this[isShow] = false
        _this.$vux.loading.hide()
        if(typeof callBack === 'function'){
          callBack()
        }
      }).catch(function (err){
        console.log(11111)
      });
    },
```
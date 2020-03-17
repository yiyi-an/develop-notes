---
typora-copy-images-to: ipic
---


# 小程序



## 授权机制

```javascript
/**
     * 小程序授权机制
     *
     *  <button  
     		open-type="getUserInfo" 
     		@getuserinfo="bindGetUserInfo" 
     		@click="getUserInfoClick">获取权限
     	</button>
     	
     *  1.  用户点击调用 getUserInfoClick 触发弹窗     **内容:申请获得以下权限**
     *  2.  用户点击后触发  bindGetUserInfo回调
     *          e.mp.detail.userInfo  授权成功 可以调用wx.login接口
     *          否则失败
     *
     *  3.  调用wx.login()接口
     *          **返回信息   {errMsg: "login:ok", code: "001bPa8A0FXbPe1P7x8A0Em28A0bPa8m"}**
     *  4.  调用code2Session  
     			参考https://developers.weixin.qq.com/miniprogram/dev/api/code2Session.html
     */
```
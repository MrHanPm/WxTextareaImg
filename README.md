# 简介

WxTextareaImg是一个Vue的微信定制版图文排版插件。图片上传后能实时显示在想在文章中插入图片的焦点地方，简洁灵活，适用于vue2.0以上版本




# 使用说明
下载
dist/wx-textarea-img.js
引入
import WxTextareaImg from '自定义地址'
注册
Vue.use(WxTextareaImg)
模板代码如下：

```html
<wx-textarea-img :imgsurl="imageUrl" :content="content"></wx-textarea-img>
```
content  是文章内容

imageUrl  是微信上传图片后的预览地址。（插入点是你输入焦点最后在编辑区内停留的地方）

wx.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: [sour],
    success: function (res) {
        self.imageUrl = res.localIds[0]

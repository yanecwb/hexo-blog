---
title: div等容器keydown事件无效
date: 2022-12-21 17:25:26
tags:
- 事件
- keydown
categories: 
- 前端
---

<font size='2'>与键盘交互的事件大多是表单元素，包括keydown/keyup。但往往封转的组件没有表单元素或者有其他用途，这时候就得在其他元素上绑定如上类似事件...</font>

<!--more-->

### 方法一 

- 利用全局监听

```javascript
window.onKeydown
document.onkeydown
```



### 方法二

- 利用contenteditable属性，让容器可编辑。

```html
<div ref="escEvent" contenteditable="true" class="fixed">
  <div @click="hideImg" ref="escEvent" contenteditable="false" class="top-0 flex ">
  </div>
 </div>
```

需要注意的是要提前focus()

```javascript
this.$refs.escEvent.focus()
this.$refs.escEvent.onkeydown = (event)=>{
if(event.key == 'Escape'){
   this.hideImg()
  }
}
```



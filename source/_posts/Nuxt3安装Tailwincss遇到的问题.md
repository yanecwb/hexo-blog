---
title: Nuxt3安装Tailwincss遇到的问题
date: 2022-08-22 14:14:09
tags:
- Nuxt3
- Tailwincss
categories: 
- 前端
---

#### 报错代码

``` bash
$ ERROR  Cannot restart nuxt:  postcss@8 is not compatible with current version of nuxt (0.0.0). Expected: >=2.15.3  
```
<div style="font-size: 14px;">
       根本原因是 <span style='color:skyblue'>https://tailwindcss.com/docs/guides/nuxtjs</span> 和 @nuxt/postcss8 仅适用于nuxtjs v2  不适用于Nuxt3。但如果您遵循本指南，仍然可以使用v3：不要使用@nuxt/postcss8目前仅适用于nuxtjs v2
    </div>

<!--more-->

#### 解决办法
<div style="font-size: 14px;">
1.把之前安装的 @nuxt/postcss8 去掉，重新npm i 或者 yarn
</div>

<div style="font-size: 14px;">
2.更新您的trawind.config.js
</div>

``` javascript
module.exports = {
  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',

    './nuxt.config.{js,ts}',
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
```

<div style="font-size: 14px;">
3.更新
</div>

```javascript
  import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  }
})
```

<div style="font-size: 14px;">
* 之前版本不是在app.vue 中引入,app.vue 的代码是全局代码，现在也可以，不过不建议
</div> 


```javascript
<script setup>
import '@/assets/css/tailwind.css'
</script>
```
---
title: window会全局注入$nuxt
date: 2022-08-23 14:58:44
tags:
- Nuxt3
categories: 
- 前端
---
<font size='2'>实例初始化完毕以后 nuxt 会在 window 全局注入$nuxt ，通过$nuxt.$store 可以访问 store，$nuxt.$router  可以访问到router，但是需要注意的是，初始化完毕以前是无法访问$nuxt的，所以需要再初始化完毕之后才能使用该方法。</font>


<img src="http://flechazoblog.site:5006/img/cd3c0d80-22c5-11ed-91a3-e93966a3438d.png" width="200px" />

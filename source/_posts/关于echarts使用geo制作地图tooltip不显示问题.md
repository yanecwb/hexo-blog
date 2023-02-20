---
title: echarts使用geo制作地图tooltip不显示问题
date: 2023-02-13 17:06:39
tags: 
- echarts
categories: 
- 前端
# description: 这是显示在首页的概述，正文内容均会被隐藏。
---

#### 我之前遇到过这问题，单独设置 tooltip 没效果，geo 下面也有 tooltip 属性，但是也不管用，网上查了一下
{% note default %}
default 提示块标签
{% endnote %}
<!--more-->
{% note primary %}
primary 提示块标签
{% endnote %}
{% note success %}
success 提示块标签
{% endnote %}
{% note info %}
info 提示块标签
{% endnote %}
{% note warning %}
warning 提示块标签
{% endnote %}
{% note danger %}
danger 提示块标签
{% endnote %}
{% note info no-icon %}
info 提示块标签
{% endnote %}
说 geo 不支持 tooltip 提示框显示，就自己根据 echarts 配置项试了试，弄出两种方法

##### 第一种就是 tooltip 全局设置一个，geo 下面 tooltip 在设置一个，两个都设置才管用，单独设置没效果

![图片 属性文本](http://flechazoblog.site:5006/img/82551f90-ac19-11ed-ba54-f90499da28ea.png)
[![沙漠中的岩石图片](http://flechazoblog.site:5006/img/82551f90-ac19-11ed-ba54-f90499da28ea.png "Shiprock")](https://markdown.com.cn)
<img src="http://flechazoblog.site:5006/img/82551f90-ac19-11ed-ba54-f90499da28ea.png" width="200px" />

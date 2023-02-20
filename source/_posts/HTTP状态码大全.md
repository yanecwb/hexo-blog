---
title: 'http状态码大全(常见 code: 含义查询)'
date: 2022-11-07 15:34:52
tags: 
- Http Code
categories: 
- [前端]
- [后端]
---

#### 200


| 状态码   | 英文说明 |  Http状态码含义中文说明  |
|  :----   | :----  | :----  |
| 200  | OK | 请求成功 |
| 201  | Created | 请求已被接受，但尚未处理 |
| 203 | Non-Authoritative | 请求已成功处理，结果来自第三方拷贝 |
| 204 | No Content | 请求已成功处理，但无返回内容 |
| 205 | Reset Content | 请求已成功处理，但需重置内容 |
| 206 | Partial Content | 请求已成功处理，但仅返回了部分内容 |
| 207 | Multi-Status | 请求已成功处理，返回了多个状态的XML消息 |
| 208 | Already Reported | 响应已发送 |

<!--more-->

#### 300

| 状态码 | 英文说明          | Http状态码含义中文说明         |
| :----- | :---------------- | :----------------------------- |
| 300    | Multiple Choices  | 返回多条重定向供选择           |
| 301    | Moved Permanently | 永久重定向                     |
| 302    | Found             | 临时重定向                     |
| 303    | See Other         | 当前请求的资源在其它地址       |
| 305    | Not Modified      | 请求资源与本地缓存相同，未修改 |



#### 400

| 状态码 | 英文说明               | Http状态码含义中文说明                                       |
| :----- | :--------------------- | :----------------------------------------------------------- |
| 400    | Bad Request            | 请求错误，通常是访问的域名未绑定引起                         |
| 403    | Forbidden              | 禁止访问                                                     |
| 404    | Not Found              | 请求的内容未找到或已删除                                     |
| 408    | Request Timeout        | 请求超时                                                     |
| 413    | Payload Too Large      | 请求的实体过大                                               |
| 405    | Not Allowed            | 无法处理的媒体格式                                           |
| 415    | Unsupported Media Type | 求行中指定的请求方法不能被用于请求相应的资源。不允许上述请求方法。 |



#### 500

| 状态码 | 英文说明                      | Http状态码含义中文说明 |
| :----- | :---------------------------- | :--------------------- |
| 500    | Internal Server Error         | 服务器端程序错误       |
| 501    | Not Implemented               | 服务器不支持的请求方法 |
| 503    | Service Unavailable           | 服务器端临时错误       |
| 599    | Network Connect Timeout Error | 网络连接超时           |

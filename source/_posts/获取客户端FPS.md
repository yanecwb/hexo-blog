---
title: 获取客户端FPS
date: 2022-08-16 11:01:04
tags: 
- FPS
categories: 
- 前端
---


```javascript
;(function () {
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
var fps, last, offset, step, appendFps;
fps = 0;
last = Date.now();
step = function () {
    offset = Date.now() - last;
    fps += 1;
    if (offset >= 1000) {
        last += offset;
        appendFps(fps);
        fps = 0;
    }
    requestAnimationFrame(step);
};
appendFps = function (fps) {
    document.querySelector('#fps').innerHTML = fps + 'FPS'
};
step();
})();
```

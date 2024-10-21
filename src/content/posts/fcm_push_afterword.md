---
title: FCM推送_后续
published: 2024-07-20
description: "结合上次的摸索，这次算是终于完结了"
image: "https://image.aulypc0x0.online/data/fcm/20240720202816.jpg"
tags: ["日常", "fcm"]
category: 日常
draft: false
---

> 又来折腾自己来了  
> 关于fcm推送，可以看之前的[文章](https://blog.aulypc0x0.online/posts/fcm_push/)  
> 但最开始的探索的效果还是不行  
> 比如切换节点或者无线数据网络更换时  
> 都会造成fcm diagnostics有概率重连超时连接失败  
> 每次都是想起来了才会去手动切换，强制使fcm重连  
> 比较不稳定，很是麻烦  

> 我使用的设备是redmi k60u，澎湃os，os版本1.0.9.0UMLCNXM  
> 手机已root，使用kitsune mask  

> 今天想着去github看看之前关注的项目更新没，结果都还没有更新  
> 但是有新发现几个项目  
::github{repo="entr0pia/fcm-hosts"}
::github{repo="Goooler/systemless-fcm-hosts"}
> 根据项目的介绍，主要作用是更改或者添加fcm hosts  
> 将fcm域名指向更近可用的服务器，加速fcm的连接  
> 抱着试一试的心态在 Magisk安装了systemless-fcm-hosts模块  
> 如果看过之前那一篇文章的话，知道之前我也有安装过类似的模块  

> 因为担心模块之间相互冲突  
> 这次就把其他涉及修改hosts的模块关闭了  
> 只留下systemless-fcm-hosts这一个模块  
<center><td><img src="https://image.aulypc0x0.online/data/fcm/20240720203150.jpg" border=0 width=300 height="" title="nayuta"></td></center>

> 重启手机后发现效果很好  
> 截至撰写本文时已有4小时多没发生断连现象  
> 及时手动更改clash节点或者更换wifi、关闭开启数据时  
> fcm都能顺利的自行重连，及时出现err，也会在几秒内重连  
<center><td><img src="https://image.aulypc0x0.online/data/fcm/20240720202816.jpg" border=0 width=300 height="" title="nayuta"></td></center>

> 先这样吧，后续这几天看看使用情况  
> 以上~  
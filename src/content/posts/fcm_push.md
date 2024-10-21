---
title: FCM推送
published: 2024-06-03
description: "对米系手机某些软件消息推送不及时的解决方法"
image: "https://image.aulypc0x0.online/data/fcm/6.jpg"
tags: ["日常", "fcm"]
category: 日常
draft: false
---

:::note
浅浅记录下自己摸索fcm的过程，主要是介绍与应用以及自己摸索的过程  
:::

## 摸索的起因
> 真正开始着手摸索是上周末  
> 但仔细想想，好像在上个月就意识到这个问题  
> 当时是和莹烛在上海参加电则  
> 他之前换了果机，闲聊时发现他twitter通知很及时  
> 而自己的国产机，只有打开twitter刷新时才能在APP内刷新出新通知  
> 而且通知栏通知几乎是没有提示通知的  
> 当时也就意识这个问题，想着应该是国产和果机之间的差距罢了  

> 但是上周末，无意间发现自己平板的twitter通知倒是很及时，也有通知  
> 我想，这总不可能是国产的锅了吧，难道还是系统的锅？  
> 平板是小米6pro，系统是MIUI 14.x iPad(记不清了)  
> 板子没升级澎湃OS，也庆幸没升级  
> 在b站看到好多因为升级澎湃os后，打音游体验极差的反馈  
> 手机是redmi K60U，系统是hyperOS 1.0.9.0  
> 手机之前也是MIUI系统的，不过之前为了一个ba主题，升级了澎湃OS，强解了设备锁，刷了root  
> 不排除是MIUI和澎湃OS系统差异的原因  
> 但让我重新把手机刷回MIUI系统，又需要冒极大的风险，搞不好就成砖了(物理)  

> 记得同事手机是MIUI的，摸鱼时顺便和同事测试了下  
> 测试完发现他推特也是没通知  
> 后续问他系统版本才发现  
> tmd  

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/3.jpg" border=0 width=330 height=""></td>
<td><img src="https://image.aulypc0x0.online/data/fcm/4.jpg" border=0 width=330 height=""></td>
</tr></table>

## 探索过程
> 在谷歌搜索以及酷安搜索过程中  
> 搜索到最多的，是使用FCM对微信消息的推送改善  
> 但也提到过FCM可应用到所有有推送通知的APP上  
> 于是重点对fcm进行了解  

### FCM
> 什么是FCM？  
> FCM的全称是 ```Firebase Cloud Messaging```  
> fcm是在Android中由google维护的一条介于google服务器与gms应用之间用于推送通知的长链接  
> 一般的工作流程为应用服务器将消息发送到google服务器，google服务器将消息推送给gms应用，gms应用通过广播传递给应用  
> 应用通过接收到的fcm消息决定是否发送通知和通知内容  
> 我的理解是，没fcm之前，消息是直接从A→B  
> 有fcm后，消息是从A→FCM→B  
> 相当于多了一个收发站，不知道这么理解对不对(  
> 具体如何实现以及功能，请点击下方跳转链接自行了解  
> [FCM用户手册](https://firebase.google.com/docs/cloud-messaging?hl=zh-cn)  

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/1.jpg" border=0 width=330 height=""></td>
<td><img src="https://image.aulypc0x0.online/data/fcm/2.jpg" border=0 width=330 height=""></td>
</tr></table>

### FCMFIX
> 明知山有虎，不去明知山.jpg  
> 还好有前人铺路，这波是直接站在巨人的肩膀上  
> fcm在运行时也是有问题的，比如：  
> 当gms通过fcm广播通知应用时，如果应用处于非运行状态，就会出现Failed to broadcast to stopped app  
> fcmfix主要就是解决这个问题（抄自下方连接）  
> [[xposed]让fcm唤醒已完全停止的应用](https://github.com/kooritea/fcmfix)

## 遇到的问题
> 使用fcmfix后，通知推送很及时，一度让我以为就此完结  
> 但是没过几分钟就遇到了问题  
> 就是会断连  
> 搞的我一头雾水，明明我网络没发生变化啊...  

## 解决办法
> 解决办法也是在高强度搜索时发现的  
> 要额外安装这三个模块  
> 作者的博客地址如下，具体内容自行跳转查看  
> [MinaMichita博客](https://blog.minamigo.moe/archives/1022)

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/5.jpg" border=0 width=430 height=""></td>
</tr></table>

## 结果

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/6.jpg" border=0 width=330 height=""></td>
</tr></table>

> 从结果上看是好的，推送也很及时，好像没出现断连的现象了  
> 就是可能耗电有点快  
> 而且通过搜索发现，fcmfix和MIUIgms这两个模块运行的原理还不太一样  
> fcmfix好像是可以在有通知推送时将应用唤醒  
> 但miuigms好像是强制使应用在后台保持运行，耗电比前者更多  
> 后续再摸索摸索吧，先这样吧，麻了  

## 后记
> 昨天晚上下班回去就又开始摸索了  
> 在某一个论坛上找到个帖子[分享一种解决安卓手机收不到谷歌通知的问题的一种方法](https://hk.v2ex.com/t/1024853)  

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/7.jpg" border=0 width=400 height=""></td>
</tr></table>

> clash for Android 设置hosts时又提示要什么键和值  
> 又花时间找了yml配置的文档看了下  
> clash for Android规则配置又给我整的头昏脑涨  
> 
> 手机端是这几天折腾的产物，平板是原生的，什么模块都没安装，也没root  
> 但是平板什么都不弄，反而可以接受到消息  
> 麻了~  
> 
> 但是切换网络，比如断开WiFi或者连接WiFi都会再次导致fcm断连  
> 而且断连后无法重新连接  
> 折腾到凌晨2点多，因为第二天要出差，就怀着遗憾入睡  
> 第二天下午要出差，上午在公司摸鱼又搞了下  
> 按照上面那个帖子的另外一种做法试了下  

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/8.jpg" border=0 width=300 height=""></td>
</tr></table>

> 但是手机clash for Android不能直接导入文件和修改文件  
> 想了好久想到可以先走电脑端clash改完配置文件，生成url后导入clash for Android  
> 这次的状况是 开clash代理、允许应用绕过clash、移动数据  
> 这次连接时间近两个小时  

<table><tr>
<td><img src="https://image.aulypc0x0.online/data/fcm/9.jpg" border=0 width=300 height=""></td>
</tr></table>
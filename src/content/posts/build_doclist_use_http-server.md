---
title: 使用http-server搭建静态文件服务器
published: 2024-10-18
description: '在服务器使用http-server创建index of文件列表页'
image: 'https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/cover_public.png'
tags: [http-server, 静态文件服务器]
category: '网站'
draft: false 
language: ''
---
> 有时下载某个安装包时会跳转到一个很简介的页面  
> 比如下图这个python各个版本  
> 感觉这种页面很适合上传一些文件  
> 然后在有需时直接输入地址进行预览下载  
<td><img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/index_of_python.png" border=0 width=530 height=""></td>

::github{repo="http-party/http-server"}

> 于是就找到http-server这个项目  
> 我个人的使用方法：  
> 在宝塔面板里用 ```npm```   
> 在终端运行```npm install http-server```来安装http-server  
> 之后在宝塔面板-网站-其他项目中添加  
<td><img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/step1.png" border=0 width=730 height=""></td>

> 在项目中填写有关内容  
<td><img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/step2.png" border=0 width=630 height=""></td>

:::CAUTION[其中]
项目执行文件路径```/root/node_modules/http-server/bin/http-server```，可供各位参考  
项目端口可自定义，记得在服务器和宝塔开启对应端口  
执行命令，```./http-server -P http://example.com:端口号 -s```  
其他命令可去该项目github查看  
添加完成后，可在浏览器输入```http://example.com:端口号```看是否成功  
:::

<td><img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/my_index_of.png" border=0 width=530 height=""></td>

> 成功之后，在宝塔面板-文件页面  
> 进入```/root/node_modules/http-server/bin```  
> 也就是上面项目执行文件http-server所在地  
> 新建文件夹，并重命名为```public```  
> 然后你就可以上传文件到public文件夹，并可以通过```http://example.com:端口号```，来进行访问了  

<td><img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/build_doclist_use_http-server/step3.png" border=0 width=630 height=""></td>

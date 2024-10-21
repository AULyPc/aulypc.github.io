---
title: 替换Fuwari图标ICON
published: 2024-09-04
description: '替换Fuwari图标ICON'
image: 'https://image.aulypc0x0.online/img/513323.webp'
tags: [Fuwari, 搭建]
category: '网站'
draft: false 
language: ''
---
:::note[封面来源]
[bluearchive.jp](https://bluearchive.jp/fankit)
:::
> ### 更换图标
> <img src="https://image.aulypc0x0.online/data/how_to_build_your_website/icon_before.png" width="50%" title="默认图标"/>
> <img src="https://image.aulypc0x0.online/data/how_to_build_your_website/icon_after.png" width="50%" title="默认图标"/>
> 
> :::note
> icon图标的[网站](https://icones.js.org/)
> :::
> 
> 更改了分类的图标  
> 在 ```src/components/postmeta.astro``` 文件进行更改，第33行的位置  
> ```astro
> <!-- categories -->
> <div class="flex items-center">
>     <div class="meta-icon"
>     >
>-         <Icon name="material-symbols:book-2-outline-rounded" class="text-xl"></Icon>
>+         <Icon name="material-symbols:menu-rounded" class="text-xl"></Icon>
>     </div>
> ```
> :::tip[更改其他图标]
> 例如标签tag图标的方法与上述类似  
> 找到该文件 ```<!-- tags -->``` 处进行修改  
> :::
> 以上
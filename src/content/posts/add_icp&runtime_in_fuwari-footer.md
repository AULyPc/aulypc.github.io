---
title: 如何在Fuwari页脚添加ICP、运行时间等信息
published: 2024-09-04
description: '如何在Fuwari页脚添加ICP、运行时间等信息'
image: 'https://image.aulypc0x0.online/img/89478080_p1.webp'
tags: [Fuwari, 搭建]
category: '网站'
draft: false 
language: ''
---
:::note[封面来源]
[Anmi-海で会おう](https://www.pixiv.net/artworks/89478080)
:::
> ### footer添加备案、又拍云CDN、运行时间等信息
> 本来想用[shields](https://shields.io/)的图标的  
> <img src="https://image.aulypc0x0.online/data/how_to_build_your_website/shields_logo.png" width="70%" title=""/>
> 结果有点不搭，有点难看  
> 还是简单点的好  
> <img src="https://image.aulypc0x0.online/data/how_to_build_your_website/footer_logo.png" width="70%" title="默认图标"/>
> 
> :::note
> 此部分参考 [Morse Hsiao](https://ihsiao.com/posts/blogs/use-astro/) 这位大佬的教程  
> 部分代码参考[Chlorine](https://www.yoghurtlee.com/about)的  
> ```注意提前做好备份工作```  
> :::
> 找到 ```src/components/Footer.astro``` 这个文件  
> 你会发现页脚的rss以及sitemap都在这里  
> 直接复制rss的模板，填写好你想要添加的信息后复制在后面  
> 当然，不需要rss/sitemap，以及powered by的也可以直接在此删除  
> 
> :::warning[注意]
> 在添加跳转链接时  
> 记得把href={```url(```'xxxx'```)```}  
> 的url等删除，否则跳转链接前会自带你设置的站点网址  
> 当然删除与否根据你的需求来判断  
> :::
> 
```astro
---

import { profileConfig } from '../config'
import { url } from '../utils/url-utils'
---

<div class="card-base max-w-[var(--page-width)] min-h-[4.5rem] rounded-b-none mx-auto flex items-center px-6 justify-between">

<!--左侧信息 -->
    <div class="transition text-50 text-sm max-md:text-left mt-2">
        © 2024 {profileConfig.name}. All Rights Reserved. /
        <a class="link text-[var(--primary)] font-medium" target="_blank" href={url('rss.xml')}>RSS</a>
    <!--
        <a class="link text-[var(--primary)] font-medium" target="_blank" href={url('sitemap-index.xml')}>Sitemap</a>
    -->
        <br>
        Powered by
        <a class="link text-[var(--primary)] font-medium" target="_blank" href="https://astro.build">Astro</a> &
        <a class="link text-[var(--primary)] font-medium" target="_blank" href="https://github.com/saicaca/fuwari">Fuwari</a> &
        <a class="link text-[var(--primary)] font-medium" target="_blank" href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">又拍云CDN</a>
    </div>

<!--运行时间 -->
    <script type="text/javascript">function runtime(){const t=new Date("09/01/2024 08:00:00"),n=new Date,s=n-t,e=Math.floor(s/1e3),o=Math.floor(e/86400),i=Math.floor(e%86400/3600),a=Math.floor(e%3600/60),r=e%60;document.getElementById("runningtime").innerHTML=`⭐本站已运行: ${o}天${i}小时${a}分${r}秒 ☁️`}setInterval(runtime,1e3)</script>
    <div class="transition text-50 text-sm text-center hidden md:block"><p id="runningtime"> </p></div>

<!--右侧备案等信息 -->
    <div class="transition text-50 text-sm max-md:text-right mt-2">
        <a class="link text-[var(--primary)] font-medium" target="_blank" href={'https://beian.miit.gov.cn'}>豫ICP备2024082600号</a> 
        <br>
        <a class="link text-[var(--primary)] font-medium" target="_blank" href={'https://icp.gov.moe/?keyword=20245060'}>萌ICP备20245060号</a> 
    </div>
</div>
```
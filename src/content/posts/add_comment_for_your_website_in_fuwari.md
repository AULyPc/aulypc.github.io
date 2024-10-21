---
title: 利用giscus给你的网站添加评论功能
published: 2024-09-06
description: '利用 GitHub Discussions 实现的评论系统，让访客借助 GitHub 在你的网站上留下评论'
image: 'https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/img/88886922_p0.webp'
tags: [Fuwari, 搭建, 评论]
category: '网站'
draft: false 
language: ''
---
:::note[封面来源]
[Anmi](https://www.pixiv.net/artworks/88886922)
:::

:::warning[注意]
该主题作者后续会添加评论功能  
博主只是利用[giscus](https://giscus.app/zh-CN)第三方部署  
别忘了去[giscus项目](https://github.com/giscus/giscus)点个⭐  
请修改前做好备份，以便后续升级  
:::

> 总的来说，giscus的部署还是很方便的  
> 通过选择你的配置后生成一小段代码  
> 将这段 ```<script>标签``` 插入到你想让评论出现的位置即可  
> ### giscus配置
> 1. 访问[giscus配置页面](https://giscus.app/zh-CN)

> 2. 选择你想要显示的语言  
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/language.png" width="70%" title=""/>

> 3. 创建一个符合要求的仓库  
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/cangku.png" width="70%" title=""/>
> 分别点击蓝色字体，可直接跳转到相关设置页面  
> 在满足上述3点要求后，输入你的[用户名/仓库名]  
> 才会显示 ```成功!该仓库满足所以条件```  

> 4. 页面 ↔️ discussion 映射关系
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/page-discussion.png" width="70%" title=""/>
> 无其他需求的话，默认即可  

> 5. Discussion 分类
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/discussion_fenlei.png" width="70%" title=""/>
> 同样的，无其他需求的话，默认即可  

> 6. 特性
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/texing.png" width="70%" title=""/>
> 按需选择即可  
> 推荐勾选上 ```将评论框放在评论上方``` 方便用户发表评论  
> 懒加载看情况进行选择，我这里就没选  

> 7. 主题
> <img src="https://raw.githubusercontent.com/AULyPc/aulypc_fuwari_blog/main/picture/mypic/data/add_comment_for_your_website_in_fuwari/giscus_theme.png" width="70%" title=""/>
> 默认即可  
> 但对于经常切换白天/黑暗模式的用户来说可能不是很友好  
> 博主这里选择的是 ```用户偏好的色彩方案```  
> 白天模式中很正常，但切换到黑暗模式后  
> giscus仍保持白色，很突兀  
> 这点博主暂时还没查找有关资料  

> 8. 插入代码
> 按照顺序配置好后  
> 下方会自动生成<script> 标签代码  
> ```js
> <script src="https://giscus.app/client.js"
>         data-repo="AULyPc/aulypc.github.io"
>         data-repo-id="xxxxxxxxxx"
>         data-category="Announcements"
>         data-category-id="xxxxxxxxxxx"
>         data-mapping="pathname"
>         data-strict="0"
>         data-reactions-enabled="1"
>         data-emit-metadata="0"
>         data-input-position="top"
>         data-theme="preferred_color_scheme"
>         data-lang="zh-CN"
>         crossorigin="anonymous"
>         async>
> </script>
> ```

> :::note[注意]
> 博主使用的是[astro框架](https://github.com/withastro/astro)&[fuwari主题](https://github.com/saicaca/fuwari)  
> 其他框架及主题的插入位置，请根据自身配置  
> :::

> ### 友链页面
> 如果你还没在fuwari上创建友链页面的话  
> 请看博主前几天发的[文章](https://blog.aulypc0x0.online/posts/add_friendspage_in_fuwari/)  
> 如果已经创建好，请在 ```src\pages\friends.astro``` 文件中修改  
> 直接插入最后一行上方即可  
> ```astro
>             <Markdown class="mt-2">
>                 <Content />
>             </Markdown>
>         </div>
>     </div>
> 
> <!-- giscus评论 -->
> <script src="https://giscus.app/client.js"
>         data-repo="AULyPc/aulypc.github.io"
>         data-repo-id="xxxxxxxxx"
>         data-category="Announcements"
>         data-category-id="xxxxxxxxxxxx"
>         data-mapping="pathname"
>         data-strict="0"
>         data-reactions-enabled="1"
>         data-emit-metadata="0"
>         data-input-position="top"
>         data-theme="preferred_color_scheme"
>         data-lang="zh-CN"
>         crossorigin="anonymous"
>         async>
> </script>
> 
> </MainGridLayout>
> ```

> ### 文章页面
> 找到 ```src\pages\posts\[...slug].astro``` 文件  
> 在 ```</MainGridLayout>``` 行上方添加即可  
> ```astro
>                 <Icon name="material-symbols:chevron-right-rounded" class="text-[2rem] text-[var(--primary)]" />
>             </div>}
>         </a>
>     </div>
> 
> <script src="https://giscus.app/client.js"
>     data-repo="AULyPc/aulypc.github.io"
>     data-repo-id="xxxxxxxxxxx"
>     data-category="Announcements"
>     data-category-id="xxxxxxxxxxxxx"
>     data-mapping="pathname"
>     data-strict="0"
>     data-reactions-enabled="1"
>     data-emit-metadata="0"
>     data-input-position="top"
>     data-theme="preferred_color_scheme"
>     data-lang="zh-CN"
>     crossorigin="anonymous"
>     async>
> </script>
> 
> </MainGridLayout>
> 
> <style is:global>
> #post-container :nth-child(1) { animation-delay: calc(var(--content-delay) + 0ms) }
> #post-container :nth-child(2) { animation-delay: calc(var(--content-delay) + 50ms) }
> #post-container :nth-child(3) { animation-delay: calc(var(--content-delay) + 100ms) }
> #post-container :nth-child(4) { animation-delay: calc(var(--content-delay) + 175ms) }
> #post-container :nth-child(5) { animation-delay: calc(var(--content-delay) + 250ms) }
> #post-container :nth-child(6) { animation-delay: calc(var(--content-delay) + 325ms) } 
> </style>
> ```

> ### 其它页面
> 其它页面例如关于、归档等页面，这里也不多赘述  
> 方法是一样的  
> 以上  
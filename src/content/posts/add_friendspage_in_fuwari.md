---
title: 给你的Fuwari添加一个友链页面
published: 2024-09-04
description: '给你的Fuwari添加一个友链页面'
image: 'https://image.aulypc0x0.online/img/20220728_195930.webp'
tags: [Fuwari, 搭建]
category: '网站'
draft: false 
language: ''
---
:::note[封面来源]
[しぐれうい-まだ足りない](https://www.pixiv.net/artworks/106841865)
:::
> ### 创建友链页面
> :::warning[注意]
> 此部分参考[SakuAikoi](https://blog.sakuaikoi.com/posts/fuwari-more/)大佬的教程  
> 注意提前做好备份  
> :::

> 在 ```src\content\spec``` 目录下新建文件 ```friends.md``` 这个就是友链页面的文件  
> 在 ```src\types\config.ts``` 文件约 ```37``` 行位置添加以下内容  
> ```ts
> export enum LinkPreset {
>   Home = 0,
>   Archive = 1,
>   About = 2,
> + Friends = 3,
> }
> ```
> 在 ```src\i18n\i18nKey.ts``` 文件约 ```35``` 行位置添加以下内容
> ```ts
>   author = 'author',
>   publishedAt = 'publishedAt',
>   license = 'license',
> + friends = 'friends',
> }
> ```
> 按照自己的语言，在 ```src\i18n\languages``` 目录中编辑相应语言文件  
> 这里拿 ```zh_CN.ts``` 举例，在约 ```38``` 行位置添加内容  
> ```ts
>   [Key.author]: '作者',
>   [Key.publishedAt]: '发布于',
>   [Key.license]: '许可协议',
> + [Key.friends]: '友链',
> }
> ```
> 在 ```src\constants\link-presets.ts``` 文件约 ```18``` 行位置添加内容
> ```ts
>    [LinkPreset.Archive]: {
>      name: i18n(I18nKey.archive),
>      url: '/archive/',
>    },
> +  [LinkPreset.Friends]: {
> +    name: i18n(I18nKey.friends),
> +    url: '/friends/',
> +  },  
>  }
> ```
> 在 ```src\pages``` 目录下，copy一份 ```about.astro``` 文件的副本  
> 改名为 ```friends.astro``` ，在此文件中更改```第 10 行、第 12 行和第14行```的内容  
> ```ts
> - const aboutPost = await getEntry('spec', 'about')
> + const friendsPost = await getEntry('spec', 'friends')
> 
> - const { Content } = await aboutPost.render()
> + const { Content } = await friendsPost.render()
> 
> - <MainGridLayout title={i18n(I18nKey.about)} description={i18n(I18nKey.about)}>
> + <MainGridLayout title={i18n(I18nKey.friends)} description={i18n(I18nKey.friends)}>
> ```
> 最后一步，在 ```src\config.ts``` 文件约 ```39``` 行位置添加内容，注意要在 ```LinkPreset.About``` 末尾添加```,```  
> ```ts
> export const navBarConfig: NavBarConfig = {
>   links: [
>     LinkPreset.Home,
>     LinkPreset.Archive,
>     LinkPreset.About,
> +   LinkPreset.Friends,
>     {
> ```
> 至此，友链页面完成创建  
> 但只能在 ```friends.md``` 内用markdown写一些简单的内容  

### 创建卡片效果友链
> :::note[创建卡片效果友链]
> 此部分代码参考[La02^](https://la02w.github.io/links/)大佬的页面
> :::
> <img src="https://image.aulypc0x0.online/data/how_to_build_your_website/friends_card.png" width="70%" title="友链卡片效果"/>
> 
> 在之前创建的 ```friends.astro``` 文件中编辑  
> :::warning[注意]
> 编辑时提前做好备份  
> 注意缩进
> :::
> ```astro
> const friendsPost = await getEntry('spec', 'friends')
> const { Content } = await friendsPost.render()
>+const items = [
>+  {
>+    title: 'Astro',
>+    imgurl: 'https://avatars.githubusercontent.com/u/44914786?s=48&v=4',
>+    desc: 'The web framework for content-driven websites. ⭐️ Star to support our work!',
>+    siteurl: 'https://github.com/withastro/astro',
>+    tags: ['框架'],
>+  },
>+]
> ---
> <MainGridLayout title={i18n(I18nKey.friends)} description={i18n(I18nKey.friends)}>
>     <div class="flex w-full rounded-[var(--radius-large)] overflow-hidden relative min-h-32">
>         <div class="card-base z-10 px-9 py-6 relative w-full ">
>+            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4">
>+                {items.map((item) => (
>+                    <div class="flex flex-nowrap items-stretch h-28 gap-4 rounded-[var(--radius-large)]">
>+                        <div class="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900">
>+                            <img src={item.imgurl} alt="站点头像" class="w-full h-full object-cover">
>+                        </div>
>+                        <div class="grow w-full">
>+                            <div class="font-bold transition text-lg text-neutral-900 dark:text-neutral-100 mb-1">{item.title}</div>
>+                            <div class="text-50 text-sm font-medium">{item.desc}</div>
>+                            <div class:list={["items-center", {"flex": true, "hidden md:flex" : false}]}>
>+                                <div class="flex flex-row flex-nowrap items-center">
>+                                    {(item.tags && item.tags.length > 0) && item.tags.map((tag,i) => (
>+                                    <div class:list={[{"hidden": i==0}, "mx-1.5 text-[var(--meta-divider)] text-sm" ]}>
>+                                        /
>+                                    </div>
>+                                    <span class="transition text-50 text-sm font-medium">
>+                                        {tag}
>+                                    </span>))}
>+                                    {!(item.tags && item.tags.length > 0) && <div class="transition text-50 text-sm font-medium">{i18n(I18nKey.noTags)}</div>}
>+                                </div>
>+                            </div>
>+                        </div>
>+                        <a href={item.siteurl} target="_blank" rel="noopener noreferrer"class="flex btn-regular w-[3.25rem] rounded-lg bg-[var(--enter-btn-bg)] hover:bg-[var(--enter-btn-bg-hover)] active:bg-[var(--enter-btn-bg-active)] active:scale-95">
>+                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="transition text-[var(--primary)] text-4xl mx-auto iconify iconify--material-symbols" width="1em" height="1em" viewBox="0 0 24 24">
>+                                <path fill="currentColor" d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"></path>
>+                            </svg>
>+                        </a>
>+                    </div>
>+                ))}
>+            </div>
>             <Markdown class="mt-2">
>                 <Content />
>             </Markdown>
>         </div>
>     </div>
> </MainGridLayout>
> ```
> ```const items``` 部分就是添加的友链部分  
> 可以往下面继续添加  
> 以上，have yourself
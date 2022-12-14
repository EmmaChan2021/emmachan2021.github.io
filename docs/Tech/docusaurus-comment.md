---
slug: docusaurus-comment
title: 利用 Giscus，为网站添加评论功能
keywords: [Docusaurus, 个人博客, 个人网站, Giscus]
---

## 前言
作为一名创作者，表达的动力除了源于内在，也需要外在的反馈。  

眼尖的朋友可能已经发现了，我的博客下方有一个评论区，使用 GitHub 登录后，就能留下评论和 reaction。这个评论系统是基于 [Giscus](https://giscus.app/zh-CN) 实现的，配置简单，大概 15 分钟就可以完成，感兴趣的朋友快动手试试吧~

<!--truncate-->

## 操作流程
### 公开仓库
因为 Giscus 实际上是 GitHub 仓库的 Discussions，所以网站的代码仓库需要公开，否则评论区是无法显示的噢。

### 启用 Discussions
前往仓库「settings -> Features -> Discussions」启用 Discussions。
![enable-discussions](https://s1.vika.cn/space/2022/10/29/4e14aa302cff4fa78560156a0c2e7737)

### 安装 Giscus APP
前往安装 [Giscus APP](https://github.com/apps/giscus)，安装完成后，配置 Giscus 对仓库的访问权限。
![access](https://s1.vika.cn/space/2022/10/29/960fe0ea762f439c843ba1beb4765d48)

### 配置 Giscus
前往 [Giscus](https://giscus.app/zh-CN) 完成基础设置。包括语言、仓库、页面与 Discussion、Discussion 分类、特性、主题等。  

配置以后，会自动生成代码，但不用着急复制，后续会用到。
![configure](https://s1.vika.cn/space/2022/10/29/101b4420568c45d7a3768eec85fe4865)


### 封装 Giscus 组件
因为网站中多个文档页面都需要显示评论区，根据 [Docusaurus 的文档](https://www.docusaurus.cn/docs/swizzling)，我们可以封装 Giscus 的组件，并在 Docusaurus 的主题文件里调用这个组件。

#### npm 安装 Giscus 
打开项目文件夹，在终端输入：
```
npm install @giscus/react
```
然后在 `src/components` 下新建一个 `comment.js` 文件：
``` js
import React from 'react';
import Giscus from '@giscus/react';

export const Comment = () => {
  return (
    <div style={{ paddingTop: 50 }}>
      <Giscus
        id="comments"
        // 以下部分参考 Giscus 生成的代码填写
        repo="xxx" 
        repoId="xxx" 
        category="Announcements"
        categoryId="DIC_kwDOIHQZms4CR5Q8"
        mapping="og:title"
        strict="1"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};

export default Comment;
```
#### 修改 Docusaurus 主题文件
Docusaurus 的页面分为文档和博客，我们根据需要修改对应的文件就可以了。  

为博客页面添加评论组件，首先需要在终端输入：
``` bash
npm run swizzle @docusaurus/theme-classic BlogPostPage -- --eject
```

:::tip
进行这个操作的时候可能会提示我们危险，选择 “Yes: I know what I am doing!" 就可以了
:::

这时目录树上会出现一个新的文件，这个文件定义了博客的框架与布局，我们需要修改两个地方：
``` js
...
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import TOC from '@theme/TOC';
// highlight-next-line
import Comment from '@site/src/components/comment'; // 导入刚刚封装的组件

function BlogPostPageContent({sidebar, children}) {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  const {
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  return (
    <BlogLayout
      sidebar={sidebar}
      toc={
        !hideTableOfContents && toc.length > 0 ? (
          <TOC
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        ) : undefined
      }>
      <BlogPostItem>{children}</BlogPostItem>

      {(nextItem || prevItem) && (
        <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
      )}
// highlight-next-line
      <Comment /> // 添加评论组件
    </BlogLayout>
  );
}
...
```

文档也是类似的，在终端输入：
``` bash
npm run swizzle @docusaurus/theme-classic DocItem/Layout -- --eject
```
:::tip
进行这个操作的时候可能会提示我们危险，选择 “Yes: I know what I am doing!" 就可以了
:::

这时目录树上会出现一个新的文件，这个文件定义了文档的框架与布局，我们需要修改两个地方：
``` js
...
import styles from './styles.module.css';
// highlight-next-line
import Comment from '@site/src/components/comment'; // 导入刚刚封装的组件

...

export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
        // highlight-next-line
        <Comment /> // 添加评论组件
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}
```

## 完结撒花
这个时候你应该已经可以预览看到评论组件了，在 GitHub 仓库的 Discussions 页面也能看到相关的评论，当有人给你的网站点赞或者评论时，也会收到 GitHub 发送的邮件~


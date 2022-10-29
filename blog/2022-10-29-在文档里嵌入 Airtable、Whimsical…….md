---
slug: docusaurus-embed
title: 在文档里嵌入 Airtable、Whimsical……
authors: Emma
tags: [Tech, Blog]
keywords: [Docusaurus, 个人博客, 个人网站, MDX-embed]
---

## 前言
作为一名产品经理，虽然目前更新的内容都是关于如何搭建个人博客的，但其实我的初衷是想沉淀产品相关的思考，而我遇到的第一个痛点就是：如何在文章中嵌入思维导图、流程图……  

<!--truncate-->

因为产品经理写 PRD 的日常就是和各种图打交道，我们需要思维导图、流程图、UML 图等来辅助说明产品逻辑，相对简单的方法是，我可以使用画图工具画好以后，导出成图片，并上传到图床，再在文章中进行引用，但是
- 流程较长
- 导出的是静态图片，如果修改了图表，就得再次导出更新

Docusaurus 也给出了一个解决方案，就是使用 mermaid 语言编写代码块，不得不说这多少有点反人类……
![mermaid](https://s1.vika.cn/space/2022/10/29/95029bcc30254cbe9341ea9e22740535)

于是我仔细阅读 Docusaurus 的文档，发现它内置了对 MDX v1 的支持，可以在 Markdown 文档中编写 JSX 并渲染为 React 组件。然后我又发现了 [MDX-Embed](https://www.mdx-embed.com/?path=/docs/introduction--page) 已经把一些主流的 Airtable、Snack、Twitter、Whimsical（恰好我也是 Whimsical 的用户🎉） 产品封装成了组件，我们只要安装依赖并引用组件，就可以很方便地在文档里嵌入其他产品，整个操作过程不超过 5 分钟😊

## 操作流程
### 安装 MDX-Embed
在终端输入：
``` bash
npm install mdx-embed --save
```

### 修改组件文件
在终端输入
``` bash
npm run swizzle @docusaurus/theme-classic MDXComponents -- --eject
```

这时目录树中会出现一个新的文件夹，我们需要修改的是 `/MDXComponents/index.js`
``` js
import React from 'react';
import MDXHead from '@theme/MDXComponents/Head';
import MDXCode from '@theme/MDXComponents/Code';
import MDXA from '@theme/MDXComponents/A';
import MDXPre from '@theme/MDXComponents/Pre';
import MDXDetails from '@theme/MDXComponents/Details';
import MDXHeading from '@theme/MDXComponents/Heading';
import MDXUl from '@theme/MDXComponents/Ul';
import MDXImg from '@theme/MDXComponents/Img';
import Admonition from '@theme/Admonition';
// highlight-next-line
import { AirtableBase, AirtableForm, Whimsical } from 'mdx-embed'; // 导入你需要嵌入的产品即可

const MDXComponents = {
  head: MDXHead,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  details: MDXDetails,
  ul: MDXUl,
  img: MDXImg,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
  h4: (props) => <MDXHeading as="h4" {...props} />,
  h5: (props) => <MDXHeading as="h5" {...props} />,
  h6: (props) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  // highlight-start
  Whimsical: Whimsical, // 把所有你需要嵌入的产品按以下格式罗列
  AirtableForm: AirtableForm,
  AirtableBase: AirtableBase
  // highlight-end
};
export default MDXComponents;
```

### 测试一下
新建一个 `md` 文件，输入以下：
``` md
<Whimsical diagramId="Py4kdjbPzFpRoAPMbUxmaN" aspectRatio="4:3" /> // 无需每个页面都导入一遍，使用标签即可
```

可以看到成功嵌入了
![img](https://s1.vika.cn/space/2022/10/29/7fcb1bca5f2b43b798d0bd995521c79c)

可以到 [MDX-Embed 的官网](https://www.mdx-embed.com/?path=/docs/introduction--page)查看他们支持的产品以及相关参数。

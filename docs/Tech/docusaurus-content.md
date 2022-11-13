---
slug: docusaurus-content
title: 如何修改网站样式和编写内容
keywords: [Docusaurus, 个人博客, 个人网站]
---

## 前言
在上篇博客[《Docusaurus + Github Page，快速搭建免费个人网站》](/docs/tech/docusaurus-github.md)中，我们已经完成了网站的 MVP 版本，成功将网站模板部署上线了，接下来就要优化样式布局、填充内容，让它能真正成为我们的「个人网站」。

<!--truncate-->

## 工程结构
首先我们得先来了解一下工程结构，切换到 `develop` 分支，看看左侧的目录树
```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `/blog/` - 包含博客的 Markdown 文件。在 [博客功能指南](https://www.docusaurus.cn/docs/blog) 文档中可以找到更多详细信息
- `/docs/` - 包含文档的 Markdown 文件。可在 `sidebars.js` 中自定义文档在侧边栏中的顺序。在 [文档功能指南](https://www.docusaurus.cn/docs/docs-introduction) 中可以找到更多详细信息
- `/src/` - 非文档文件，例如独立页面（pages）或自定义的 React 组件。你不必严格地遵守将非文档文件放到这里，但是将它们集中在此目录下可以更轻松地进行管理，以便您需要进行某些格式校验或处理
- `/src/pages` - 此目录中的任何扩展名为 JSX/TSX/MDX 文件都将被转换为网站的独立页面(page)。 可以在 [独立页面（pages）指南](https://www.docusaurus.cn/docs/creating-pages) 中找到更多详细信息
- `/static/` - 存放静态文件的目录。此处的所有内容都将被复制到最终的 `build` 目录的根目录下
- `/docusaurus.config.js` - 包含站点配置的配置文件。我们可以在这个文件配置网站的元数据、部署信息、主题、插件和其他预设配置。可以在 [配置](https://www.docusaurus.cn/docs/configuration) 中找到更多详细信息
- `/package.json` - Docusaurus 网站也是一个 React 应用程序。你可以在其中安装和使用所需的任何 npm 软件包
- `/sidebars.js` - 生成文档时使用此文件来指定侧边栏中的文档顺序  

## 修改基础配置
进入 `/docusaurus.config.js` 

### 修改元数据
``` js
title: 'My Site',  //网站标题，会出现在浏览器标签页上

tagline: 'Dinosaurs are cool',  //网站标语

url: 'https://your-docusaurus-test-site.com', //网站 URL

baseUrl: '/',

onBrokenLinks: 'throw',

onBrokenMarkdownLinks: 'warn',

favicon: 'img/favicon.ico', //网站的 icon
```

### 修改部署信息
如果使用 GitHub Page 部署，就需要填写以下参数
``` js
organizationName: 'xxx', // GitHub 用户名

projectName: 'xxx', // 仓库名称

deploymentBranch: 'main',
```

### 修改网站语言
``` js
i18n: {

defaultLocale: 'zh-Hans', //如果使用英文，修改为 "en"

locales: ['zh-Hans'],

},
```

### 修改导航栏
``` js
navbar: {

	title: 'My Site', //导航栏左侧的网站标题

	logo: {

	alt: 'My Site Logo',

	src: 'img/logo.svg', //导航栏左侧的网站 logo

},

items: [

		{
	
			type: 'doc', //文档入口，如不需要可以删除
	
			docId: 'intro',
	
			position: 'left',
	
			label: 'Tutorial',
	
		},
	
		{to: '/blog', label: 'Blog', position: 'left'}, //博客入口，如不需要可以删除
	
		{
	
			href: 'https://github.com/facebook/docusaurus', //GitHub 入口，如不需要可以删除
	
			label: 'GitHub',
	
			position: 'right',
	
		},
	
	],
	
},
```

修改页脚也是同理，不再赘述  

## 修改样式和布局
Docusaurus 把页面分成了三种类型：独立页面、文档、博客。  

独立页面默认没有任何样式，如果你要创建一个新的页面，需要自己写样式，如果你只是想修改网站首页的样式，可以前往 `src/pages/index.js`，并修改相关的 CSS 和 JS 文件。  

文档和博客的样式和布局主要来源于预置的模板，如果你想要个性化设置，可以查看相关 [文档](https://www.docusaurus.cn/docs/swizzling)，需要修改源主题文件。
:::tip
修改过程中会一直提示你不安全，都选「Yes」即可
:::  

这里也写下我遇到的几个问题的解决方案~

### 去掉文章底部的编辑此页
在文档和博客底部，都有一个「编辑此页」，可以供读者跳转到 GitHub 进行修改或者提 Issue，但是这个对于我来说没什么用
![编辑](https://s1.vika.cn/space/2022/10/12/5c4cd120b4ba40d99a3cc07c96cae0fb)

在 `docusaurus.config.js` 里注释掉 `editUrl` 即可
![去掉编辑](https://s1.vika.cn/space/2022/10/12/d4e0f494dddd4ab1bf8615eebf9b0733)

### 修改主题色
网站自带暗黑和浅色主题，可以在 [这里](https://www.docusaurus.cn/docs/styling-layout#styling-your-site-with-infima) 生成不同的主题色，然后将变量复制到`/src/css/custom.css` 文件中。

## 内容创作
终于来到相对轻松的环节了~因为 Docusaurus 的初衷就是让内容创作者专注于内容，只需编写 Markdown 文件，所以只要你在 `docs` 或者 `blog` 文件夹里新建 md 文件，编写内容后，再根据上篇 [博客](/docs/tech/docusaurus-github.md) 完成构建和部署，就可以成功发布上线啦！

### 创建文档
- 在 `docs` 目录下创建一个 markdown 文件
- 在文档顶部填写基础信息
```
---
id: doc-with-tags  //文档ID，会作为网址 URL 的一部分
title: A doc with tags  //文档标题
tags:  //文档标签，会出现在文档底部
  - Demo
  - Getting started
---
```
- 接着在下面编写文档内容即可

### 创建博客
- 在 `blog` 目录下创建一个 markdown 文件，注意文件的命名要包含时间，参考模板中的其他博客来写即可
- 在文档顶部填写基础信息
``` md
---
title: Welcome Docusaurus v2 //博客标题
description: This is my first post on Docusaurus 2. //描述
slug: welcome-docusaurus-v2 //页面slug，会用在网址 url 上
authors:  //作者，可以设置你的名字、头像、title 等
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [hello, docusaurus-v2] //博客的标签
---

Welcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).

<!--truncate--> //这个表示以下内容不需要在博客首页展示，会提示「read more」

This is my first post on Docusaurus 2.

A whole bunch of exploration to follow.
```
- 接着在下面编写博客内容即可

### Markdown 语法
因为文档和博客都需要使用 Markdown，而 Docusaurus 部分内置语法跟标准语法不太一样，所以要学习一下~  

附上👉🏻 [介绍文档](https://www.docusaurus.cn/docs/markdown-features)
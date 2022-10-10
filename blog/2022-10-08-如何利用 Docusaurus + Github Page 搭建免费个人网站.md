---
slug: docusaurus-github
title: 如何利用 Docusaurus + Github Page 搭建免费个人网站
authors: Emma
tags: [Tech]
---

## 前言
最近沉迷看脱口秀，李诞说：每个人都能讲 5 分钟脱口秀。无独有偶，前公司正在用一个叫做 Docusaurus 的工具搭建文档网站，于是我尝试了一下，果然 5 分钟也能创建一个个人网站，搭配 GitHub Page 发布上线，全程不到 2 小时（大部分时间花在查看官方文档和测试功能上）🎉

如果你也感兴趣，欢迎跟着教程来实操试试噢~

<!--truncate-->

### 为什么想搭建个人网站
- 想沉淀工作中的思考与成长
- 希望有一个自留地（个人公众号太久没登录，微信就会提示要冻结，作为内容创作者感到深深的冒犯👊🏻）
- 就是想试试看~

### 为什么选用 Docusaurus + Github Page 建站
传统的建站流程大概是这样的：制作网站内容 -> 购买服务器 -> 部署网站到服务器 -> 购买、解析、备案域名，要学习 HTML、CSS、JavaScript、IP、端口、NGINX 等知识，一套组合拳下来，没个一两周都搞不定。

而 Docusaurus 是一个静态网站生成器，它能帮你完成制作网站内容的部分，快速搭建一个美观实用的文档网站，小白友好，在脚手架上稍微修改一下就能用。

还支持部署到 GitHub，通过 GitHub Page 一键发布网站，连域名都省了。

更多详细介绍可以参考官方网站👇🏻
- [Docusaurus](https://www.docusaurus.cn/docs)
- [Github Page](https://docs.github.com/en/pages)

## 准备工作
### 安装环境
设备：MacBook Pro 
系统：macOS
芯片：Apple M1 Pro

### 安装 Node.js
前往官网安装对应版本的 [Node.js](https://nodejs.org/en/download/)，要求 16.14 或更高版本。因为我是 ARM64 架构，所以选以下两个都可以。
![node.js](https://s1.vika.cn/space/2022/10/08/1b396eac922f48809fcbbf16e6e47f79)

安装以后，在终端执行 ```node -v``` 命令来检查当前安装的 Node.js 版本。
![查看版本](https://s1.vika.cn/space/2022/10/08/4eb04b0314be45878a46bc013933c781)

### 创建 GitHub 账号
前往 [Github](https://github.com/) 注册账号

### 安装 IDE
推荐安装 [Visual Studio Code](https://code.visualstudio.com/Download)

## 安装 Docusaurus
打开终端，cd 到你想存储这个项目的文件夹。

输入以下命令，就会创建一个命名为 「my-website」，使用 classic 模板的脚手架项目：
```
npx create-docusaurus@latest my-website classic
```

等待一会就创建成功啦 👻
![安装成功](https://s1.vika.cn/space/2022/10/08/50ff90de5a6245d68f90d8972ec73604)

输入 `code .` 就可以使用 VScode 对工程进行编辑，可以在左侧目录树看到项目结构
![目录](https://s1.vika.cn/space/2022/10/09/95ebcc73c2bb49a4b41cd3c6950605be)


:::tip
如果在终端无法打开 VScode，需要预先在 VScode 里，按住 `cmd+shift+p`，找到「shell 命令：在 PATH 中安装”Code“命令」，点击安装即可
:::
![shell命令](https://s1.vika.cn/space/2022/10/09/db341685162340b4bf8814322dfbb05a)


在 VScode 中新建终端，输入 `npm start` 或者 `npm run start` 都可以运行本地服务器并启动网站，一般情况下，浏览器会自动打开 http://localhost:3000 地址，你就可以在本地实时预览网站效果啦~
![npm start](https://s1.vika.cn/space/2022/10/08/b0b53e8d7de54650885e3041004f1c88)
![本地预览](https://s1.vika.cn/space/2022/10/08/c55183283460463fa85ba5e8b291ed2e)





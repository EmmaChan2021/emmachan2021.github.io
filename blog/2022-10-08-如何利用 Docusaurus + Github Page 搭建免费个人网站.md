---
slug: docusaurus-github
title: 如何利用 Docusaurus + Github Page 搭建免费个人网站
authors: Emma
tags: [Tech]
keywords: [Docusaurus, Github Pages, 个人博客, 个人网站]
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

### 安装 Git
前往官网安装 [Git](https://git-scm.com/downloads)，可以自行搜索相关配置

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
![shell命令](https://s1.vika.cn/space/2022/10/09/db341685162340b4bf8814322dfbb05a)
:::  

在 VScode 中新建终端，输入以下命令启动本地预览，一般情况下，浏览器会自动打开 http://localhost:3000 地址，你就可以在本地实时预览网站效果啦~（输入 `ctrl+c` 退出预览）
```
npm run start
```
![npm start](https://s1.vika.cn/space/2022/10/08/b0b53e8d7de54650885e3041004f1c88)
![本地预览](https://s1.vika.cn/space/2022/10/08/c55183283460463fa85ba5e8b291ed2e)

## 发布到 GitHub Page
:::tip
- 一个 GitHub 账号只能发布一个 Page
- GitHub 仓库的命名必须是 `username.github.io` (username 即你的 GitHub 账号名)
:::

### 创建 GitHub 仓库
创建一个新的仓库，命名为 `username.github.io`
![仓库](https://s1.vika.cn/space/2022/10/10/bb2bc2a666154a19b59dbc5e5c4f14af)

在终端输入以下命令，把代码推送到 GitHub
```
git init
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:xxx/xxx.github.io.git //这里一定要用 SSH 链接
git push -u origin main
```

:::danger
远程仓库链接一定要使用 SSH，否则后续部署时会报错
![ssh](https://s1.vika.cn/space/2022/10/10/37054330af6a4714bc6cc026ae06ecb1)
:::

### 创建分支并推送代码
在 `docusaurus.config.js` 文件里修改以下参数
```
organizationName: 'xxx', // GitHub 用户名

projectName: 'xxx.github.io', // GitHub 仓库名

deploymentBranch: 'main', // 部署分支，该分支会发布到 GitHub Page

trailingSlash: false,
```

保存后，在终端输入以下命令创建并切换到 `develop` 分支
```
git switch branch -c develop
``` 

:::tip
因为 Docusaurus 本质上是一个静态网站生成器，它会把我们的 md 文件编译成 HTML 文件，GitHub Page 会把构建后的文件部署发布上线。  
所以我们要区分两个分支，`develop` 分支用于存储源代码，我们主要在这个分支上编写文档，`main` 分支用于存储构建后的文件。两者的目录结构不一样，所以我们在开发过程中要注意查看分支（VScode 左下角会显示分支信息）。
:::

### 构建和部署
提交并推送代码到远程仓库后，我们可以输入以下命令完成构建
```
npm run build
```

![构建](https://s1.vika.cn/space/2022/10/10/c8b3c2048b7848e7af3a58e4a8d43a49)

再输入以下命令进行部署
```
npm run deploy
```

在「Setting -> Pages」里配置进行 GitHub Page 的设置
![page](https://s1.vika.cn/space/2022/10/10/815ec49e080249c6b4cee9168b07a1a4)


### 完结撒花
进行到这里，理论上网站已经成功上线了，去给朋友秀一下吧~~
![success](https://s1.vika.cn/space/2022/10/10/b3d71de413b149ce8515b090525f1777)  

（当然别忘了给我点个赞 👇🏻，有问题也可以在下方评论噢
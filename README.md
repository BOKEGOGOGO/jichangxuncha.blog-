# 机场巡查博客

基于 Astro 的静态博客框架，域名配置为 https://jichangxuncha.blog。

## 本地运行

npm install
npm run dev

## 构建

npm run build
npm run preview

将 dist 目录发布至支持静态网站的托管平台，再配置域名 DNS 和 HTTPS。当前仅保存本地文件，尚未发布或绑定域名。

## 修改内容

- src/data/posts.js：文章内容与分类
- src/pages/index.astro：首页
- src/layouts/Layout.astro：导航、页脚、全站样式
- src/pages/subscriptions.astro：订阅工具

当前文章均为示例。订阅工具仅生成客户端导入入口，不提供格式转换或服务器代理。

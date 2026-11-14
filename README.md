# 机场巡查博客

基于 Astro 的纯静态网站，域名 https://jichangxuncha.blog，部署在 Cloudflare。

## 本地运行

npm install
npm run dev

## 构建与发布

npm run build
npm run preview

把 `dist` 目录发布到 Cloudflare。`public/_redirects`（301 跳转）和 `public/_headers`（响应头）会随构建复制进 `dist`，由 Cloudflare 读取。

## 修改内容

- `src/data/nav.js`：顶栏、手机菜单、页脚的全部入口（加入口只改这里）
- `src/data/posts.js`、`src/data/additional-brands.js` 等：品牌资料
- `src/data/brand-overview.js`：品牌返佣链接（带 `code=` 的是返佣链接，只出现在 `/register/{品牌}/` 确认页）
- `src/data/knowledge-library.js`、`src/data/knowledge-depth.js`：网络知识库文章
- `src/data/vps*.js`：VPS 知识
- `src/data/site-pages.js`：RSS 与站内搜索共用的页面清单
- `src/pages/sitemap.xml.ts`：站点地图（正文有改动时更新对应的 lastmod）
- `src/layouts/Layout.astro`：全站外框；页面传 `noindex` 即不被收录
- `src/styles/global.css`：配色、字体等全站样式
- `src/components/Loader.astro`：loading page（每次会话只播放一次，地址加 `?loader` 可重看）

## 跳转

页面改地址时，同时在 `astro.config.mjs` 的 `redirects` 和 `public/_redirects` 各加一条。前者生成兜底的跳转页，后者让 Cloudflare 返回真正的 301。

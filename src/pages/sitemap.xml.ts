// 提交给 Bing / Google 的站点地图：只列可以被收录的正式页面（noindex 页、跳转页、/register/、/search/ 都不放）。
// lastmod 只在页面正文或标题有实质变化时更新，不为了“看起来新”而改日期。
import { siteInfoPages, siteInfoUpdated } from '../data/site-info';
import { knowledgePaths, knowledgeUpdated } from '../data/vps-knowledge';
import { libraryArticles, libraryUpdated } from '../data/knowledge-library';
import { posts } from '../data/posts';

const SITE = 'https://jichangxuncha.blog';

// 栏目页与工具页（没有对应的数据文件，日期在这里维护）
const hubs: Record<string, string> = {
  '/': '2026-11-14',
  '/category/': '2026-11-14',
  '/category/airports/': '2026-11-14',
  '/category/clash/': '2026-11-10',
  '/category/vps/': '2026-11-14',
  '/knowledge/': '2026-11-14',
  '/vps/guides/': '2026-11-14',
  '/tools/': '2026-11-14',
  '/tools/traffic/': '2026-11-13',
  '/network-check/': '2026-11-09',
  '/glossary/': '2026-11-13',
};

// 文章数据里没有单独记录修改日期、但正文或标题改过的页面
const changed: Record<string, string> = {
  // 品牌页：页首摘要改写；其中 6 家去掉了“官方网站：待补充”
  '/posts/flyv/': '2026-11-14',
  '/posts/muguang/': '2026-11-14',
  '/posts/weifeng/': '2026-11-14',
  '/posts/feimao/': '2026-11-14',
  '/posts/wavenet/': '2026-11-14',
  '/posts/lingdong/': '2026-11-14',
  '/posts/invisible/': '2026-11-14',
  '/posts/firefly/': '2026-11-14',
  '/posts/sogo/': '2026-11-14',
  '/posts/wuyou/': '2026-11-14',
  '/posts/quanqiuyun/': '2026-11-14',
  '/posts/vps-checklist/': '2026-11-14',
  // 标题与 H1 改写
  '/knowledge/node-timeout/': '2026-11-14',
  '/knowledge/plan-costs/': '2026-11-14',
  '/knowledge/shadowrocket/': '2026-11-14',
  // 两篇旧 VPS 指南在知识库改版时一并更新
  '/vps/guides/vps-vs-airport/': libraryUpdated,
  '/vps/guides/regions-and-routing/': libraryUpdated,
};

export function GET() {
  const rows: [string, string][] = [
    ...Object.entries(hubs),
    // 新增品牌或文章时自动进入站点地图
    ...posts.map((p): [string, string] => [`/posts/${p.slug}/`, p.date]),
    ...libraryArticles.map((a): [string, string] => [a.path, a.updated ?? libraryUpdated]),
    ...knowledgePaths.filter((p) => p !== '/category/vps/' && p !== '/vps/guides/').map((p): [string, string] => [p, knowledgeUpdated]),
    ...siteInfoPages.map((p): [string, string] => [`/${p.slug}/`, siteInfoUpdated]),
  ];
  const unique = new Map<string, string>();
  for (const [path, date] of rows) if (!unique.has(path)) unique.set(path, changed[path] ?? date);

  const urls = [...unique].map(([path, date]) => `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${date}</lastmod>\n  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

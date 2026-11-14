import { articles } from '../data/site-pages';

const SITE = 'https://jichangxuncha.blog';
const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// 资料日期只到天，按北京时间零点换算
const rfc822 = (d: string) => new Date(`${d}T00:00:00+08:00`).toUTCString();

export function GET() {
  const items = [...articles].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const latest = items[0]?.date;
  const body = items.map((a) => `<item><title>${esc(a.title)}</title><link>${SITE}${a.path}</link><guid isPermaLink="true">${SITE}${a.path}</guid><description>${esc(a.description)}</description><category>${esc(a.kind)}</category><pubDate>${rfc822(a.date)}</pubDate></item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>机场巡查博客</title><link>${SITE}/</link><description>机场推荐、VPS 知识与网络排查笔记。</description><language>zh-CN</language>${latest ? `<lastBuildDate>${rfc822(latest)}</lastBuildDate>` : ''}<atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>${body}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

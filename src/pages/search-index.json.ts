import { articles, hubs } from '../data/site-pages';

// 搜索在浏览器里完成：这里只输出标题、摘要和小标题，正文不进索引，文件保持很小。
export function GET() {
  type Entry = { path: string; title: string; description?: string; kind: string; heads?: string[]; keyword?: string };
  const rows = ([...hubs, ...articles] as Entry[]).map((a) => ({
    u: a.path,
    t: a.title,
    d: a.description ?? '',
    k: a.kind,
    h: [...(a.heads ?? []), ...(a.keyword ? [a.keyword] : [])].join(' / '),
  }));
  const unique = [...new Map(rows.map((r) => [r.u, r])).values()];
  return new Response(JSON.stringify(unique), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}

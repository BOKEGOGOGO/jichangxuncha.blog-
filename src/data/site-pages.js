// 站内所有可阅读内容的统一清单，供 RSS 和站内搜索共用。新增文章类型时在这里接入一次即可。
import { posts } from './posts';
import { additionalBrands } from './additional-brands';
import { libraryArticles, libraryGroups, libraryUpdated } from './knowledge-library';
import { knowledgeArticles, knowledgeUpdated } from './vps-knowledge';
import { siteInfoPages, siteInfoUpdated } from './site-info';

const heads = (sections) => (sections ?? []).map((s) => (typeof s?.title === 'string' ? s.title : '')).filter(Boolean);
const groupName = (id) => libraryGroups.find((g) => g.id === id)?.title ?? '网络知识库';

// 品牌页的小标题和常见问题（只有 additional-brands 里的品牌有结构化数据），让搜“Clash”“小火箭”也能找到品牌页
const brandHeads = (slug) => {
  const b = additionalBrands.find((x) => x.slug === slug);
  return b ? [...(b.sections ?? []).map((s) => s[0]), ...(b.faqs ?? []).map((f) => f[0])].filter((t) => typeof t === 'string') : [];
};

// 有日期的文章：进 RSS，也进搜索
export const articles = [
  ...posts.map((p) => ({ path: `/posts/${p.slug}/`, title: p.title, description: p.description, kind: p.category, date: p.date, heads: brandHeads(p.slug) })),
  ...libraryArticles.map((a) => ({ path: a.path, title: a.title, description: a.description, kind: groupName(a.group), date: a.updated ?? libraryUpdated, heads: heads(a.sections) })),
  ...knowledgeArticles.map((a) => ({ path: a.path, title: a.title, description: a.description, kind: 'VPS 知识', date: knowledgeUpdated, heads: heads(a.sections), keyword: a.keyword })),
];

// 栏目页和工具页：只进搜索
export const hubs = [
  { path: '/category/', title: '全部栏目', description: '机场推荐、客户端、网络知识库、VPS知识和工具的栏目总览。', kind: '栏目' },
  { path: '/category/airports/', title: '机场推荐：品牌资料、套餐与选购指南', description: '对照套餐价格、每月流量、线路类型、设备限制与付款周期，附购买前检查清单和常见问题。', kind: '栏目' },
  { path: '/category/vps/', title: 'VPS 知识中心', description: '服务器入门、地区与线路、成本计算和连接故障排查。', kind: '栏目' },
  { path: '/category/clash/', title: 'Clash 专区', description: 'Clash 系客户端的安装、订阅导入、规则与常见问题。', kind: '栏目' },
  { path: '/knowledge/', title: '网络知识库', description: '客户端教程、节点故障排查、协议与网络原理。', kind: '栏目' },
  { path: '/tools/', title: '网络工具箱', description: '检查当前网络的网页连通与下载速率，排查节点全部超时、网页打不开。', kind: '工具' },
  { path: '/network-check/', title: '网络连通性检测', description: '测试当前浏览器到国内与跨境站点的响应。', kind: '工具' },
  { path: '/tools/traffic/', title: '每月流量估算', description: '按网页、视频、通话和下载的使用时长，估算每月大约需要多少 GB 流量。', kind: '工具' },
  { path: '/glossary/', title: '术语词典', description: '机场、节点、订阅、倍率、IPLC、IEPL、BGP、原生 IP 等常见说法的速查解释。', kind: '工具' },
  ...siteInfoPages.map((p) => ({ path: `/${p.slug}/`, title: p.title, description: p.description, kind: '关于本站', date: siteInfoUpdated })),
];

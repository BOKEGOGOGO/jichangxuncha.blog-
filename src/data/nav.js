// 顶栏、手机菜单和页脚共用的导航清单。加入口只改这里。
export const mainNav = [
  { label: '机场推荐', href: '/category/airports/', match: ['/category/airports/', '/posts/', '/register/'] },
  { label: 'VPS知识', href: '/category/vps/', match: ['/category/vps/', '/vps/'] },
  // mobileOnly：桌面上 Clash 收在“客户端”菜单里，手机第一排仍保留这个常用入口
  { label: 'Clash', href: '/category/clash/', match: ['/category/clash/'], mobileOnly: true },
];

// 顺序有意义：客户端排在知识库前面，小火箭等页面虽然在 /knowledge/ 下，点亮的是“客户端”
export const navGroups = [
  {
    id: 'clients',
    label: '客户端',
    match: ['/category/clash/', '/knowledge/client-comparison/', '/knowledge/shadowrocket/', '/knowledge/v2rayn/', '/knowledge/hiddify/', '/knowledge/sing-box/'],
    items: [
      // 推荐的机场以官方客户端为主，第三方工具都需要订阅链接，说明里写清楚
      { label: '机场客户端怎么用', desc: '官方客户端优先，六步连上', href: '/knowledge/client-comparison/' },
      { label: 'Clash', desc: '电脑和安卓 · 需订阅链接', href: '/category/clash/' },
      { label: '小火箭 Shadowrocket', desc: 'iPhone、iPad · 需订阅链接', href: '/knowledge/shadowrocket/' },
      { label: 'v2rayN', desc: 'Windows、macOS、Linux · 需订阅链接', href: '/knowledge/v2rayn/' },
      { label: 'Hiddify', desc: '跨平台 · 需订阅链接', href: '/knowledge/hiddify/' },
      { label: 'sing-box', desc: '自己写配置 · 需订阅或自建', href: '/knowledge/sing-box/' },
    ],
  },
  {
    id: 'knowledge',
    label: '知识库',
    match: ['/knowledge/', '/glossary/'],
    items: [
      { label: '网络知识库', desc: '全部文章与分类', href: '/knowledge/' },
      { label: '新手与隐私基础', desc: '先弄懂代理是什么', href: '/knowledge/#basics' },
      { label: '节点故障排查', desc: '超时、订阅失效、DNS 与 TLS', href: '/knowledge/#troubleshooting' },
      { label: '协议与网络原理', desc: '代理协议、传输与过滤', href: '/knowledge/#network' },
      { label: '术语词典', desc: 'IPLC、倍率、原生 IP 速查', href: '/glossary/' },
    ],
  },
  {
    id: 'tools',
    label: '工具',
    match: ['/tools/traffic/', '/network-check/', '/search/'],
    items: [
      { label: '网络工具箱', desc: '连通检测与下载测速', href: '/tools/' },
      { label: '网络连通检测', desc: '国内与跨境站点响应', href: '/network-check/' },
      { label: '每月流量估算', desc: '按使用时长算 GB', href: '/tools/traffic/' },
      { label: '站内搜索', desc: '品牌、教程与排查文章', href: '/search/' },
      { label: 'RSS 订阅', desc: '更新推送到阅读器', href: '/rss.xml' },
    ],
  },
];

// 常驻的故障排查入口
export const troubleshoot = { label: '节点全超时？', href: '/tools/#diagnose', title: '套餐已购买，节点却全部超时或报错？先排查网络与连接问题' };

export const isCurrent = (path, match) => match.some((m) => path.startsWith(m));

// 当前页属于哪个下拉分组：主栏目已点亮时不点亮分组；多个分组都匹配时取排在前面的
export const currentGroup = (path) =>
  mainNav.some((n) => !n.mobileOnly && isCurrent(path, n.match)) ? undefined : navGroups.find((g) => isCurrent(path, g.match))?.id;

// 页脚用：所有入口去重后的平铺列表
export const allLinks = () => {
  const seen = new Set();
  return [...mainNav, troubleshoot, ...navGroups.flatMap((g) => g.items)].filter((l) => !seen.has(l.href) && seen.add(l.href));
};

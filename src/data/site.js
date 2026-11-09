// 登机口 = 站内栏目。category 必须和 posts.js 里的 category 一字不差。
export const gates = [
  { key: 'A', slug: 'airports', category: '机场推荐', name: '机场推荐', en: 'AIRPORTS', desc: '线路体验与选购笔记', tone: 'blue' },
  { key: 'V', slug: 'vps', category: 'VPS', name: 'VPS 探索', en: 'SERVERS', desc: '服务器与部署记录', tone: 'red' },
  { key: 'Y', slug: 'budget', category: '一元机场', name: '一元机场', en: 'LOW BUDGET', desc: '低预算套餐观察', tone: 'yellow' },
];

export const gateOf = (category) => gates.find((g) => g.category === category) ?? gates[0];

// 航班号只是文章的序号写法，不代表任何真实航班。
export const flightNo = (index) => `JX${String(index + 1).padStart(3, '0')}`;

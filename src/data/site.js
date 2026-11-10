// 站内栏目。category 必须和 posts.js 里的 category 一字不差。
export const topics = [
  { no: '01', slug: 'airports', category: '机场推荐', desc: '线路体验与选购笔记' },
  { no: '02', slug: 'vps', category: 'VPS', desc: '服务器与部署记录' },
];

export const topicOf = (category) => topics.find((t) => t.category === category) ?? topics[0];

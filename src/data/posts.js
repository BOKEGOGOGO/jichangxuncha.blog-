import { additionalBrands } from './additional-brands';
export const posts = [
 {slug:'flyv',category:'机场推荐',title:'飞V（FlyV）：专线线路与官方客户端',description:'5 个地区、60 个节点；月付 ¥25 起。整理套餐、线路、优惠与客户端使用方式。',date:'2026-11-09',time:'6 分钟',status:'品牌资料',body:['根据品牌提供的资料，飞V主打专线线路与官方客户端。本文为品牌信息整理，未进行独立测速。','看线路：覆盖香港、台湾、日本、新加坡、美国，品牌标注共 60 个节点。','看套餐：周期套餐月付 ¥25 起，另有年付轻量版、不限时流量包及独享专线。','看客户端：仅支持官方客户端账号登录，不提供订阅链接，不支持 Clash 或 Shadowrocket 导入。']},
 {"slug":"muguang","category":"机场推荐","title":"暮光加速：套餐价格、Shadowsocks线路与mm88优惠","description":"月付¥20起、120 GB/月；整理BGP调度与专线级出口声明、六种周期价格、不限时包及8折优惠限制。","date":"2026-11-09","time":"7 分钟","status":"品牌资料","body":["根据品牌官方提供的暮光资料整理，未进行独立测速或结算验证。"]},
 {"slug":"weifeng","category":"机场推荐","title":"微风网络：IPLC线路、套餐价格与weifeng90九折优惠","description":"月付¥25起、200 GB/月；整理VLESS协议、官方指定客户端、周期与不限时套餐，新用户weifeng90享9折。","date":"2026-11-09","time":"7 分钟","status":"品牌资料","body":["根据品牌官方提供的微风品牌资料整理，优惠按最新确认的9折计算；未进行本站独立测速或结算验证。"]},
 {"slug":"feimao","category":"机场推荐","title":"飞猫云：IPLC线路、套餐价格与flycat888八折优惠","description":"星耀版月付¥25、150 GB/月；学生版¥84/年。整理VLESS、套餐周期、流量刷新与flycat888优惠范围。","date":"2026-11-09","time":"6 分钟","status":"品牌资料","body":["依据品牌官方提供的飞猫云资料整理；优惠验证与节点快照为来源中的历史记录，不是本站独立测试。"]},
 ...additionalBrands.map(b=>({slug:b.slug,category:'机场推荐',title:b.title,description:b.description,date:'2026-11-09',time:'6 分钟',status:'品牌资料',body:[b.tagline]})),
 {slug:'vps-checklist',category:'VPS',title:'一台 VPS 的入门选购笔记',description:'地区、带宽、流量和维护成本，哪些值得先了解？',date:'2026-11-09',time:'4 分钟',body:['这是一篇待完善的 VPS 栏目示例，不代表实际购买建议。','先明确用途，再比较 CPU、内存、存储、网络与备份。保留测试日期和地区信息，便于后续复查。','后续将补充服务商对比、部署笔记与长期使用记录。']},
];

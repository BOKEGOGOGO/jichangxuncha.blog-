import { additionalBrands } from './additional-brands.js';
import { muguang } from './muguang.js';
import { weifeng } from './weifeng.js';
import { feimao } from './feimao.js';
import { brandDisplay } from './brand-display.js';
// 年付折算沿用用户提供的约85%周期价格和首单8折，故保留“约”字。
export const flyvAnnual = {total:25*12*.85*.8, monthly:25*.85*.8, coupon:'fly20'};
export const privateSubscriptionNote='仅购买高付费套餐且持有邀请码，才有机会申请私人订阅链接；未获授权请勿擅自获取或使用，以免导致封号。具体资格与开通方式请先咨询官方客服。';
const knownOfficial={flyv:'https://flyv.site',wavenet:'https://nasitj.wavenetttt.sbs',lingdong:'https://lingdongyun.site/',invisible:'https://varnexa.invisibleaff.com',sogo:'https://sogocloud.world/'};
const first=[
{slug:'flyv',affiliate:'https://varnexa.flyvaff.com/#/?code=u89Tt8TS',monthly:'约¥17/月 · 150 GB/月',priceLabel:'入门年付 · 新人优惠后月均',annual:'一次支付约¥204/年；首单fly20，非月付',architecture:'港台IEPL；日新IPLC／IEPL；美国BGP',plan:'入门方案 · 年付',payment:'约¥204/年（折合约¥17/月）',traffic:'150 GB/月',condition:'首单fly20；年付总额，实付以结算为准'},
{slug:'muguang',monthly:'¥20/月 · 120 GB/月',annual:'¥109/年 · 70 GB/月',architecture:'BGP多线路调度、专线级出口；Shadowsocks',affiliate:muguang.purchase.url,plan:'基础版 · 月付',payment:'¥20/月',traffic:'120 GB/月'},
{slug:'weifeng',monthly:'¥25/月 · 200 GB/月',annual:'¥137/年 · 100 GB/月',architecture:'IPLC、VLESS；官方指定客户端',affiliate:weifeng.purchase.url,plan:'乘风 · 月付',payment:'¥25/月',traffic:'200 GB/月'},
{slug:'feimao',monthly:'¥25/月 · 150 GB/月',annual:'¥84/年 · 50 GB/月',architecture:'IPLC、VLESS、原生IP（品牌声明）',affiliate:feimao.purchase.url,plan:'星耀版 · 月付',payment:'¥25/月',traffic:'150 GB/月'}
];
export const brandOverview=[...first,...additionalBrands.map(b=>{const p=b.prices.find(p=>p.period==='月付');return{slug:b.slug,monthly:b.monthly,annual:b.annual,architecture:b.architecture,affiliate:b.affiliate?b.url:undefined,plan:p.name+' · 月付',payment:'¥'+p.price+'/月',traffic:p.traffic};})].map(b=>({...b,...brandDisplay[b.slug],official:knownOfficial[b.slug]}));
export const overviewOf=slug=>brandOverview.find(b=>b.slug===slug);


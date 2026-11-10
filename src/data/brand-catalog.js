import { brandOverview } from './brand-overview.js';
import { additionalBrands } from './additional-brands.js';
import { muguang } from './muguang.js';
import { weifeng } from './weifeng.js';
import { feimao } from './feimao.js';
export const pricePeriods=['月付','季付','半年付','年付','二年付','三年付'];
const normalizePeriod=p=>p==='两年付'?'二年付':p;
const normalizePrice=p=>({name:p.name,traffic:p.traffic,period:normalizePeriod(p.period),price:Number(String(p.originalPrice??p.price).replace(/[¥,]/g,'')),eligible:p.couponEligible===true,approximate:false});
const flyvPrices=[...['入门方案','进阶方案','高端方案','商业方案'].flatMap((name,i)=>{const month=[25,50,110,190][i],traffic=['150 GB/月','380 GB/月','800 GB/月','1.8 TB/月'][i];return [{name,traffic,period:'月付',price:month,eligible:true,approximate:false},...[[3,.95,'季付'],[6,.9,'半年付'],[12,.85,'年付']].map(([months,ratio,period])=>({name,traffic,period,price:Number((month*months*ratio).toFixed(2)),eligible:true,approximate:true}))]}),{name:'年付标准轻量版',traffic:'65 GB/月',period:'年付',price:99,eligible:false},{name:'小流量包',traffic:'130 GB总量',period:'一次性',price:189,eligible:false},{name:'标准流量包',traffic:'380 GB总量',period:'一次性',price:479,eligible:false},{name:'精英流量包',traffic:'600 GB总量',period:'一次性',price:799,eligible:false},{name:'原生IP·独享黄金专线',traffic:'500 GB/月',period:'月付',price:680,eligible:false}];
const fixed={
flyv:{prices:flyvPrices,rate:.8,coupon:'fly20',couponText:'新用户首单8折，每账号限一次。仅入门、进阶、高端、商业四档周期套餐含长周期；年付轻量版、一次性流量包与独享黄金专线不适用。',notes:['常规周期套餐每月重置，剩余流量不结转；不限时包按固定总量用完为止。','季付、半年付、年付金额根据官方提供的约95%、90%、85%周期比例估算，表内以“约”标记；表内“—”表示该套餐不支持对应付款方式。'],usage:'Windows、macOS、Android通过品牌官方客户端登录；iOS按官网指引使用NextIn。常规套餐不限设备并共享流量。',support:'官方资料列示Netflix、Disney+、YouTube Premium、Prime Video、Abema、TVer及ChatGPT、Claude、Midjourney、GitHub Copilot。'},
muguang:{prices:muguang.pricing.map(normalizePrice),rate:.8,coupon:'mm88',couponText:'基础、标准、旗舰、至尊的常规购买周期按资料享8折；年付轻量版、三档不限时包与独享定制排除。新人、次数及实时有效性应在官方结算确认。',notes:['标准版采用240 GB/月，独享节点采用¥680/月；官方提供的资料指出旧介绍曾有不同数值，以结算前最新展示为准。','不限时流量包为一次性总量，不按月补充；独享定制交付与资源规格需先确认。'],usage:'资料标注Shadowsocks、不限设备。具体系统版本与客户端获取方式请通过官方确认。',support:'官方资料列示Netflix、Hulu、HBO、Disney+、DAZN以及ChatGPT、Claude。'},
weifeng:{prices:weifeng.pricing.map(normalizePrice),rate:.9,coupon:'weifeng90',couponText:'新用户9折，按官方合作提供的最新更正计算；套餐与符合新人条件的重置包适用，具体资格以结算为准。',notes:['清风仅年付，乘风、破风、御风提供多周期；信风与长风为固定总量，不按月重置。','资料说明付款后不支持退款；购买前应核对设备兼容与当前条款。'],usage:'官网指定客户端；iOS使用Nextin及公开服务识别码wfwl，其他平台按官方指引安装，不限设备共享流量。',support:'官方资料列示Netflix、Disney+、HBO Max、TikTok及ChatGPT、Claude、Gemini。'},
feimao:{prices:feimao.pricing.map(normalizePrice),rate:.8,coupon:'flycat888',couponText:'符合条件的常规套餐8折，学生版与定制套餐排除。表内为规则计算，不代表当前订单已经通过官方结算。',notes:['季付及以上按官方资料从购买日起每30天刷新月流量；其他重置细则请核对。','2.5Gbps为品牌标称上限，不是个人固定保证；2026-09-29节点记录仅是历史快照。'],usage:'资料标注VLESS、不限设备，具体客户端版本、订阅格式与系统要求以官方客服确认为准。',support:'官方资料列示Netflix、Disney+、TikTok与ChatGPT。'}
};
export const brandCatalog=brandOverview.map(overview=>{
 const f=fixed[overview.slug];const extra=additionalBrands.find(b=>b.slug===overview.slug);
 const pricing=f?.prices ?? extra.prices.map(p=>({...p,period:normalizePeriod(p.period),approximate:false}));
 const groups=[];for(const p of pricing.filter(p=>p.period!=='一次性')){let group=groups.find(g=>g.name===p.name&&g.traffic===p.traffic);if(!group){group={name:p.name,traffic:p.traffic,periods:{}};groups.push(group);}group.periods[p.period]=p;}
 const monthly=pricing.filter(p=>p.period==='月付'&&!/定制|独享|私人|王者|专业/.test(p.name));
 return {...overview,groups,oneTime:pricing.filter(p=>p.period==='一次性'),allPrices:pricing,monthly,chartMax:Math.max(...monthly.map(p=>p.price),1),rate:f?.rate??extra.coupon.rate,coupon:f?.coupon??extra.coupon.code,couponActive:extra?.coupon.active!==false,couponText:f?.couponText??extra.coupon.description,notes:f?.notes??[],usage:f?.usage??extra.sections.find(s=>/客户端|设备/.test(s[0]))?.slice(1).join(' '),support:f?.support??extra.sections.find(s=>/流媒体/.test(s[0]))?.slice(1).join(' '),source:'品牌官方提供资料，本站整理；实际套餐、优惠与服务条款以官方最新说明为准。'};
});

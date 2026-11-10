import {vpsArticles,verifiedDate} from './vps.js';
import {growthArticles} from './vps-growth.js';
export const knowledgeUpdated=verifiedDate;
export const knowledgeTitle='VPS知识中心｜服务器入门、线路、成本与故障排查';
export const knowledgeDescription='从VPS基础、香港日本地区、网络线路到IP不可达与超时排查，按实际问题学习服务器管理，并客观比较自建与机场的成本、维护和适用场景。';
const comparison='/vps/guides/vps-vs-airport/';
const extra={
'what-is-vps':{category:'基础入门',keyword:'VPS是什么',faqs:[['VPS能用来做网站吗？','可以运行适配的Web程序与数据库，但也要负责更新、备份与网络配置；静态站点也可比较无需自管的托管方案。'],['VPS是买断的一台电脑吗？','通常是按约定周期使用的资源服务，不是买断物理机器。资源类型、计费与维护责任需要看产品说明。']]},
'how-to-choose-vps':{category:'方案与成本',keyword:'VPS配置怎么选',faqs:[['先选CPU还是先看用途？','先确定应用、访问量和依赖，再比较CPU类型、内存与网络，避免单看核数。'],['带宽和流量一样吗？','不同。带宽是速率能力，流量是累计数据量；还需核对计费方向、单位和超额规则。']]},
'regions-and-routing':{category:'地区与线路',keyword:'VPS机房地区怎么选',title:'VPS机房地区怎么选？按访客、依赖与迁移需求决策',description:'以访客分布、应用依赖、数据恢复与跨区传输为依据选择VPS机房，建立地区决策流程；线路术语和香港日本细节转到独立指南。',faqs:[['应该把服务器放在离自己最近的地方吗？','面向访客的服务应优先考虑实际用户和应用依赖。地理位置只是因素之一，还应核对路由、资源与恢复方式。'],['两个地区部署就是容灾吗？','不是。还需要数据复制、健康检查、切换流程和恢复验证，且会增加成本。']]},
'ssh-connection':{category:'故障排查',keyword:'VPS SSH连接教程',faqs:[['忘记用户名可以随便尝试root吗？','先查看镜像和服务商说明，使用已授权用户。错误用户会造成认证失败，不应反复猜测密码。'],['主机指纹变化能直接忽略吗？','不能。先通过可信控制台核实重装、IP复用或主机变更，再按实际情况处理已有记录。']]},
'vps-vs-airport':{category:'方案与成本',keyword:'自建VPS与机场哪个好',title:'自建VPS与机场哪个好？技术门槛、维护与适用人群比较',description:'比较自建VPS与机场服务的技术门槛、维护责任、多地区节点、费用和故障处理，按建站、学习与日常连接需求选择，说明双方风险与推广关系。',conversion:'comparison',faqs:[['建站可以用机场替代VPS吗？','不可以。机场通常交付代理连接，不能代替运行网站或数据库的服务器环境。'],['机场比自建一定稳定吗？','不能保证。自建有实例与维护风险，现成服务有节点、客服与经营风险，需按实际条件比较。'],['不懂Linux应该先买哪个？','先明确用途。需要建站可比较托管平台；只需要网络连接且不想维护服务器，可了解现成服务，但仍需核对客户端、隐私与售后。']]}
};
const compareMore=[
{id:'responsibility-table',title:'把维护责任放到同一张表中',table:{headers:['维度','自建VPS接入服务','机场服务'],rows:[['技术门槛','需要系统、认证与网络配置能力','通常按服务商说明使用客户端'],['服务器维护','自己更新、监控、备份与恢复','服务端由服务商负责，用户仍管理设备与凭据'],['多地区节点','按地区部署并维护资源','取决于套餐范围与实时可用性'],['费用','资源、IP、流量、备份和时间','周期、额度、重置与增购等规则'],['故障处理','自行定位，必要时联系云服务商','先排查本地与客户端，再联系服务商'],['灵活性','可自行选择软件与规则，受资源条款限制','由服务商支持范围决定'],['数据与信任','自行控制服务，但依赖宿主平台与运维能力','需要评估账号保护、隐私与运营方风险']]}},
{id:'personas',title:'四种需求，对应不同的选择',paragraphs:['想运行网站、数据库或开发环境的人，需要计算资源；机场不能代替服务器。若只想发布静态博客，也可以比较托管平台，不必在VPS和机场之间二选一。','学习Linux与网络的人，自管环境本身具有学习价值，但应为备份、更新和恢复留出时间。需要组织内部访问的人，应使用组织允许并授权的方案，而不是默认购买任意代理。','只需要现成网络连接、没有运行应用需求的人，可以比较机场提供的客户端与套餐。是否支持自己的设备、订阅开通条件与网络适配，仍然要分别确认。']},
{id:'operating-week',title:'自建后的一次维护，通常涉及什么？',steps:['核对系统与服务更新，了解变更是否需要重启和回滚。','检查资源、磁盘、日志与流量账单，发现异常接入或应用错误。','验证备份覆盖的数据，并在独立环境确认能恢复。','网络异常时区分客户端、入站、应用和出站，不以换IP替代诊断。'],paragraphsAfter:['维护时间没有通用定额，熟练程度、应用复杂度和故障频率都会改变投入。若自己没有管理能力，不能把服务器低月费当成完整服务价格。'],links:[{label:'按现金与维护时间计算成本',href:'/vps/vps-cost-comparison/'},{label:'先了解VPS超时的排查流程',href:'/vps/vps-timeout/'}]},
{id:'selection',title:'如果决定比较现成服务，应检查哪些条件？',paragraphs:['先核对设备、官方客户端与第三方订阅条件，再按实际用量比较周期和流量。询问退款、续费、重置和设备数，避免只因为一个折扣数字长期预付。','本文不认定自建或机场是普遍胜者，也没有做跨品牌性能排名。本站机场推荐页包含官方合作推广入口，可能获得佣金；产品参数、合作关系与实际测试是不同证据。'],links:[{label:'查看机场推荐指南：线路、价格与客户端',href:'/category/airports/'},{label:'购买前先检查自己的网络环境',href:'/tools/#diagnose'}]}
];
export const knowledgeArticles=[...vpsArticles.map(a=>{const e=extra[a.slug];const x={...a,...e,path:'/vps/guides/'+a.slug+'/',conversion:e.conversion??'knowledge',related:[...new Set([...a.related,...(a.slug==='vps-vs-airport'?['vps-cost-comparison','vps-timeout']:a.slug==='regions-and-routing'?['hong-kong-vps','japan-vps','vps-network-lines']:a.slug==='ssh-connection'?['vps-timeout','vps-ip-blocked']:['vps-vs-web-hosting','vps-cost-comparison'])])]};
if(a.slug==='regions-and-routing')x.sections=[
{id:'audience',title:'先画出访客与依赖分布',paragraphs:['服务器服务的是访客、API调用方与后台任务，不只是管理员自己。记录用户主要地区、数据库位置、第三方API与文件存储，分清哪些交互需要低往返时间。','如果应用每次请求都要跨区查询数据库，后台依赖可能比访客距离更重要。静态资源与动态业务可采用不同分发方式，但需要额外配置和成本，不能把CDN等同于迁移整个应用。']},
{id:'matrix',title:'建立地区决策表',table:{headers:['决策因素','要收集的信息','会影响什么'],rows:[['用户与运营商','实际访客位置和接入网络','响应路径与时段差异'],['应用依赖','数据库、API、存储所在区域','跨区请求与传输费用'],['资源与架构','机型、系统、容量和库存','可部署软件与恢复速度'],['恢复与迁移','备份位置、快照限制、导出方式','中断时能否换区恢复']]}},
{id:'observe',title:'从少量候选中做可复现的观察',steps:['将明确无法满足应用或地址兼容性的地区排除。','保留两三个候选，以同一任务与接近时段观察。','分别记录访问网络与服务端处理，不把应用慢直接写成地区慢。','核算跨区与备份支出，再比较同周期总额。','验证数据导出与恢复，避免完全依赖某一地区库存。']},
{id:'regional-reading',title:'地区细节与线路术语分别阅读',paragraphs:['香港指南聚焦大陆接入、去回程与带宽预算；日本指南聚焦本地依赖、东京大阪选区与地址/架构兼容。网络标签则由线路专题解释，避免在多个地区页复制同一份排名。'],links:[{label:'香港VPS选购指南',href:'/vps/hong-kong-vps/'},{label:'日本VPS选购指南',href:'/vps/japan-vps/'},{label:'CN2、CMI与AS9929线路解释',href:'/vps/vps-network-lines/'}]}
];
if(a.slug==='vps-vs-airport')x.sections=[...a.sections.filter(s=>s.id!=='next'),...compareMore];return x;}),...growthArticles];
export const knowledgeBySlug=slug=>knowledgeArticles.find(a=>a.slug===slug);
export const comparisonPath=comparison;
export const knowledgeGroups=[
{id:'basics',title:'基础入门',summary:'理解计算资源、连接技术与转发边界。',slugs:['what-is-vps','vps-vs-web-hosting','reverse-proxy']},
{id:'choices',title:'方案与成本',summary:'按用途选择资源，分别计算现金和维护时间。',slugs:['vps-vs-airport','vps-cost-comparison','cheap-vps','how-to-choose-vps']},
{id:'regions',title:'地区与线路',summary:'从访客与运营商出发，理解地区和网络标签。',slugs:['hong-kong-vps','japan-vps','regions-and-routing','vps-network-lines']},
{id:'troubleshooting',title:'故障排查',summary:'从准确错误开始，逐层检查地址、服务与访问路径。',slugs:['vps-ip-blocked','vps-timeout','ssh-connection']}
];
export const knowledgeFaqs=[['完全不懂服务器，应该从哪里开始？','先读VPS是什么，确定是否需要运行应用；再读配置与SSH教程。不需要服务器管理能力的人，可以先了解托管与现成连接服务的边界。'],['这里有没有VPS商家排行榜？','本知识中心不提供未经验证的商家评分、测速榜或最低价承诺，重点是选择方法、技术原理和排查步骤。'],['VPS不能连接就一定是IP被封吗？','不是。停机、地址变更、防火墙、监听、DNS和网络策略都可能影响连接，应先确认失败阶段与范围。'],['学习VPS一定要购买机场吗？','不需要。建站、数据库和开发环境具有独立用途，机场不能替代服务器。只有需要减少连接服务维护的读者才有必要继续比较。'],['代码示例能直接复制执行吗？','先确认适用系统、权限和文档示例目标。本文以只读检查和说明为主，示例域名与保留IP需换为自己的资源，不要对第三方目标执行操作。']];
export const knowledgePaths=['/catagory/vps/','/vps/guides/',...knowledgeArticles.map(a=>a.path),'/vps/providers/','/vps/providers/digitalocean/','/vps/providers/hetzner/'];

export const knowledgeDecisions={
'what-is-vps':['先确定你真正需要的交付','如果要运行网站或学习Linux，继续按应用选择资源。如果只需要日常网络连接、并不打算管理服务器，可以先比较现成代理服务与自建环境的差别。','机场和VPS有什么区别？'],
'how-to-choose-vps':['确认需求后，再决定是否自管','资源清单适用于运行自己的应用。若清单中的软件部署和恢复工作并不是你的目标，只想获得现成连接，可先比较维护责任，避免为不需要的服务器资源付费。','不想维护VPS，有什么选择？'],
'regions-and-routing':['地区选择解决不了所有需求差异','多地区服务器需要独立的部署、数据与恢复安排。若只是想在客户端选择连接地区，而不需要运行应用，可以比较现成服务的地区范围与自建的工作量。','比较自建多地区与机场服务'],
'ssh-connection':['能登录，是管理工作的开始','SSH教程帮助你管理自己的机器。后续仍有系统更新、备份与服务维护；如果只需要网络连接而不想承担这些工作，可以先理解现成服务能减少什么、又有哪些新风险。','了解服务器维护与成品服务的差别'],
'vps-vs-web-hosting':['确定部署方式后，再选择资源','如果决定使用VPS，先按应用负载检查CPU、内存、磁盘与网络配额；不要只看最低价。','阅读VPS配置选择清单'],
'cheap-vps':['低预算，也要算维护负担','若你确实要运行应用，保留备份和恢复预算。若目的是网络连接而不是服务器管理，可先比较自建的完整工作量与成品套餐的条件，再判断哪种支出有意义。','按用途比较VPS与机场'],
'hong-kong-vps':['香港机房，不等于现成的香港连接服务','运行网站需要实例与应用维护；只想在客户端使用某地区节点的人，还要考虑配置和服务支持。先看两种交付的区别，再判断是否需要租服务器。','香港VPS自建与机场有什么区别？'],
'japan-vps':['日本业务与日常连接，是两类任务','本地数据库与API依赖需要适合的服务器布局。若并无运行应用的需求，只想减少网络连接维护，可以了解现成多地区服务的限制，避免仅因“日本IP”而租用实例。','没有日本建站需求，还需要自建吗？'],
'vps-network-lines':['线路标签之外，还要看谁来维护','不论选哪种上游，自管VPS都需要服务配置、更新与排障。只关心现成网络连接的读者，可以比较自建与服务商维护的责任，而不是只围绕ASN选择产品。','从线路选择走到方案比较'],
'reverse-proxy':['网站连接失败，按阶段继续检查','先分清入口、后端和应用依赖，保留日志与配置，再按错误阶段定位问题。','阅读VPS连接超时排查']
};

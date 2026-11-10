export function analyzeEnvironment(v){
 const tips=[];let title='信息不足，先补充基础测试';
 if(v.policy==='restricted'){title='已知存在管理员接入限制';tips.push('你填写的公告说明禁止代理或需要授权。先联系管理员确认允许的接入方式；网页响应正常不能覆盖这项规定。');}
 const environments={institution:'内部网络可能有外网权限或白名单。先确认是否允许当前用途，不从单位名称推断所有连接都被阻断。',isolated:'隔离或专用网络不应默认能访问公网。请通过管理员确认接入边界。',office:'办公网络可能有企业防火墙或批准的远程接入方式。核对网络规定，再对照个人有权使用的网络。',industrial:'园区或工业网络可能有专门的出口与协议策略，先向管理方确认。',campus:'校园网先检查认证、账号余额与校方接入规定；不能仅凭校园网名称判断节点一定不可用。',public:'公共Wi-Fi先打开普通网页确认认证网关和会话没有过期；共享带宽也会影响体验。',shared:'共享宽带先核对上游出口与路由。额外NAT或共享IP并不是代理被禁止的证明。',home:'家庭宽带也受本地设备、运营商路由、跨境路径与目标服务器状态影响。',mobile:'手机流量需留意运营商、信号与跨境路径；4G/5G不是节点可用的保证。'};
 if(environments[v.kind])tips.push(environments[v.kind]);
 if(v.direct==='bad'){if(v.policy!=='restricted')title='先排查基础网络与认证';tips.push('你填写普通国内网页也异常：先处理Wi-Fi认证、账号、路由器、信号和普通DNS解析，再判断代理。当前还不能确定是访问路径还是节点本身的问题。');}
 if(v.compare==='mobile-ok'){if(v.policy!=='restricted'&&v.direct!=='bad')title='问题更可能与当前Wi-Fi路径有关';tips.push('同一设备、同一配置在手机流量成功而Wi-Fi失败，优先检查Wi-Fi认证、网络策略、DNS和宽带出口。这是对照线索，不是管理员封禁的证明；请尽量在接近的时间复测。');}
 if(v.compare==='wifi-ok'){if(v.policy!=='restricted'&&v.direct!=='bad')title='优先检查移动数据这条路径';tips.push('Wi-Fi成功而手机流量失败，先比较运营商路径、信号、客户端移动数据权限与节点在该网络下的状态，不能直接归因为地区封锁。');}
 if(v.compare==='both-bad'){if(v.policy!=='restricted'&&v.direct!=='bad')title='两条路径都失败，继续检查共同环节';tips.push('Wi-Fi和手机流量都失败时，检查套餐有效期、流量、配置更新时间、节点服务状态和客户端/协议兼容性；不同网络也可能共享部分上游，仍不能只凭这一点确定封锁来源。');}
 if(v.nodes==='all'){if(v.policy!=='restricted'&&v.direct!=='bad'&&v.compare==='unknown')title='全部节点超时，原因尚不能确定';tips.push(v.direct==='ok'?'DIRECT或国内网页正常，只确认那个直连目标有响应，不能证明实际代理节点的服务器、端口或协议可达。':'请先测试普通国内网页，再对照另一条有权使用的网络，避免把基础网络故障当成节点故障。');}
 if(v.nodes==='some')tips.push('部分节点可用说明本次并非所有连接都失败。比较异常节点的地区、服务器与协议，并向服务商提供具体错误，不把单节点问题扩大为整个网络不能使用。');
 if(v.nodes==='ok'||v.compare==='both-ok'){if(v.policy!=='restricted'&&v.direct!=='bad')title='你填写的观察中已有成功连接';tips.push('当前观察存在可用连接，但不保证其他节点、协议、应用或时段同样可用。记录本次网络和时段，避免把一次成功当作长期保证。');}
 if(v.nodes==='all'&&v.compare==='both-ok')tips.push('填写存在时间或状态差异：“全部节点超时”和“两种网络都成功”不一致。请按同一时段、同一配置重新确认后再分析。');
 if(v.subscription==='ok')tips.push('订阅更新或账号登录与实际节点可能访问不同服务器和端口。API成功不代表节点通；向客服分别说明更新成功和连接失败的现象。');
 if(v.subscription==='bad')tips.push('更新或登录也失败时，先检查服务商页面、账号状态和配置来源；不要公开完整订阅令牌，也不要把凭据交给陌生转换站。');
 if(!tips.length)tips.push('先选择网络类型，在直连状态打开普通国内网页，然后记录客户端节点现象。未测试的项目保留“不确定”，再使用下方网页检查。');
 tips.push('本结果是按你填写的观察给出的排查顺序。网页检测不能确认具体的网络限制来源，也无法代替客户端节点测试；结果只作排查参考，不保证连接一定成功。');
 return{title,tips};
}

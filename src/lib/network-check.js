// Browser-only probes; no server proxy, credentials, subscriptions or location lookup.
export const probeTargets=[
{id:'site',name:'本站基础连接',group:'local',url:'/favicon.svg'},
{id:'baidu',name:'百度',group:'domestic',url:'https://www.baidu.com/favicon.ico'},
{id:'qq',name:'腾讯',group:'domestic',url:'https://www.qq.com/favicon.ico'},
{id:'google',name:'Google',group:'international',url:'https://www.google.com/favicon.ico'},
{id:'youtube',name:'YouTube',group:'international',url:'https://www.youtube.com/favicon.ico'},
{id:'wikipedia',name:'Wikipedia',group:'international',url:'https://www.wikipedia.org/static/favicon/wikipedia.ico'}
];
export async function probe(target,{signal,timeoutMs=8000,fetcher=globalThis.fetch,now=()=>performance.now()}={}){
 const controller=new AbortController();let timedOut=false;
 const cancel=()=>controller.abort();if(signal?.aborted)return{state:'cancelled'};
 signal?.addEventListener('abort',cancel,{once:true});
 const timer=setTimeout(()=>{timedOut=true;controller.abort();},timeoutMs);
 const start=now();
 try{
  const response=await fetcher(target.url,{method:'GET',mode:target.group==='local'?'same-origin':'no-cors',credentials:'omit',cache:'no-store',referrerPolicy:'no-referrer',signal:controller.signal});
  if(signal?.aborted)return{state:'cancelled'};
  if(target.group==='local'&&!response.ok)return{state:'failed'};
  return{state:'response',duration:Math.round(Math.max(0,now()-start))};
 }catch{
  return{state:signal?.aborted?'cancelled':timedOut?'timeout':'failed'};
 }finally{clearTimeout(timer);signal?.removeEventListener('abort',cancel);}
}
export function summarizeNetwork(rows){
 const answered=group=>rows.filter(r=>r.group===group&&r.samples.some(s=>s.state==='response')).length;
 if(rows.some(r=>r.samples.some(s=>s.state==='cancelled')))return{title:'检测已停止',body:'结果不完整，请在网络稳定后重新检测。'};
 if(!answered('local'))return{title:'基础检测未完成',body:'本站请求也未能正常完成，先检查当前连接或浏览器限制，再重试。无法据此判断具体机场是否可用。'};
 if(!answered('domestic'))return{title:'国内参照访问未确认',body:'国内参照站点未收到可确认的响应。站点异常、浏览器拦截或当前链路都可能影响结果，请切换网络或稍后复测。'};
 const international=answered('international');
 if(international===0)return{title:'跨境参照访问未确认',body:'国内参照有响应，跨境参照均未完成。可能与当前路由、网络限制、站点或浏览器策略有关；这不代表机场一定能用或一定不能用，具体线路需用官方试用或短周期套餐验证。'};
 return{title:international===3?'跨境参照均收到响应':'部分跨境参照收到响应',body:'当前连接已取得部分或全部跨境参照响应。若你已经开启代理，检测反映的是代理后的链路。响应不等于网页内容、登录、视频或机场节点可用，也不是解锁或速度保证。'};
}

const start=document.querySelector<HTMLButtonElement>('#start-speed')!;
const stop=document.querySelector<HTMLButtonElement>('#stop-speed')!;
const size=document.querySelector<HTMLSelectElement>('#speed-size')!;
const status=document.querySelector<HTMLElement>('#speed-status')!;
const mbps=document.querySelector<HTMLElement>('#speed-mbps')!;
const mbytes=document.querySelector<HTMLElement>('#speed-mbytes')!;
const received=document.querySelector<HTMLElement>('#speed-received')!;
const elapsed=document.querySelector<HTMLElement>('#speed-elapsed')!;
const progress=document.querySelector<HTMLProgressElement>('#speed-progress')!;
let active:AbortController|null=null;
start.addEventListener('click',async()=>{
 if(active)return;
 const bytes=Number(size.value);if(![5000000,20000000].includes(bytes))return;
 const controller=new AbortController();active=controller;let timedOut=false;let total=0;
 const timer=setTimeout(()=>{timedOut=true;controller.abort();},30000);
 const began=performance.now();start.disabled=true;stop.disabled=false;size.disabled=true;mbps.textContent='—';mbytes.textContent='—';received.textContent='0 MB';progress.value=0;elapsed.textContent='正在连接';status.textContent='正在连接测试节点…';
 try{
  const response=await fetch('https://speed.cloudflare.com/__down?bytes='+bytes+'&t='+Date.now(),{cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer',signal:controller.signal});
  if(!response.ok||!response.body)throw new Error('response');
  const reader=response.body.getReader();status.textContent='正在接收测速数据，请保持页面打开…';
  try{while(true){const part=await reader.read();if(part.done)break;total+=part.value.byteLength;received.textContent=(total/1e6).toFixed(2)+' MB';progress.value=Math.min(100,total/bytes*100);elapsed.textContent=((performance.now()-began)/1000).toFixed(1)+' 秒';if(total>bytes){await reader.cancel();throw new Error('size');}}}finally{reader.releaseLock();}
  if(total!==bytes||controller.signal.aborted)throw new Error('incomplete');
  const seconds=(performance.now()-began)/1000;
  if(seconds<=0)throw new Error('duration');
  mbps.textContent=(total*8/seconds/1e6).toFixed(2);mbytes.textContent=(total/seconds/1e6).toFixed(2);progress.value=100;elapsed.textContent=seconds.toFixed(2)+' 秒';status.textContent='测速完成 · '+new Date().toLocaleString('zh-CN')+'。结果仅代表本次到测试节点的下载连接。';
 }catch{mbps.textContent='—';mbytes.textContent='—';status.textContent=controller.signal.aborted?(timedOut?'测速超时，未生成成绩。可换网络或较小样本重试。':'测速已停止，未生成成绩。已接收的数据仍会消耗流量。'):'测速未完成：测试节点、浏览器策略或当前网络可能限制请求。未生成成绩，可稍后重试；这不代表你的网络没有速度。';}
 finally{clearTimeout(timer);active=null;start.disabled=false;stop.disabled=true;size.disabled=false;start.textContent='重新测速';}
});
stop.addEventListener('click',()=>{stop.disabled=true;active?.abort();});
window.addEventListener('pagehide',()=>active?.abort());

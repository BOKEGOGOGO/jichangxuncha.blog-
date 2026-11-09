// 翻牌字：一格翻一次 = 上半片倒下、下半片落下。
const parts = (el) => {
  const [top, bottom, flapTop, flapBottom] = el.children;
  return { top, bottom, flapTop, flapBottom };
};
const setChar = (part, c) => { part.firstElementChild.textContent = c; };

export function flipTo(el, next, dur = 45) {
  const { top, bottom, flapTop, flapBottom } = parts(el);
  const current = top.firstElementChild.textContent;
  setChar(flapTop, current);
  setChar(top, next);
  setChar(flapBottom, next);
  const down = flapTop.animate(
    [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-90deg)' }],
    { duration: dur, easing: 'ease-in', fill: 'forwards' },
  );
  const land = flapBottom.animate(
    [{ transform: 'rotateX(90deg)' }, { transform: 'rotateX(0deg)' }],
    { duration: dur, delay: dur, easing: 'ease-out', fill: 'forwards' },
  );
  return land.finished.catch(() => {}).then(() => {
    if (el.dataset.stop) return; // 已被 settle 定格，别再覆盖
    setChar(bottom, next);
    setChar(flapTop, next);
    down.cancel();
    land.cancel();
  });
}

// 先乱翻 flips 次，最后停在 final。
export async function spin(el, final, flips, pool, dur = 45) {
  // 设备慢、掉帧时也要按时停下，不能停在乱字上。
  const deadline = performance.now() + flips * dur * 2 * 1.4 + 200;
  for (let i = 0; i < flips; i++) {
    if (el.dataset.stop) return;
    if (performance.now() > deadline) { settle(el, final); return; }
    await flipTo(el, pool[Math.floor(Math.random() * pool.length)], dur);
  }
  if (!el.dataset.stop) await flipTo(el, final, dur);
  if (el.firstElementChild.textContent !== final) settle(el, final);
}

// 立刻停在最终字上，正在跑的 spin 也会随之结束。
export function settle(el, final) {
  el.dataset.stop = '1';
  el.getAnimations({ subtree: true }).forEach((a) => a.cancel());
  el.querySelectorAll('i').forEach((i) => { i.textContent = final; });
}

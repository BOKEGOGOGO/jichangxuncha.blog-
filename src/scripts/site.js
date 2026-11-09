import { spin } from './flap.js';

const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

// 滚动进入视口时显现
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    revealer.unobserve(e.target);
  });
}, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));

// 翻牌屏的航班号进入视口时翻一次
const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789'.split('');
const boardWatcher = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    boardWatcher.unobserve(e.target);
    if (calm) return;
    e.target.querySelectorAll('.flap').forEach((f, i) => spin(f, f.dataset.c, 3 + i * 2, CHARS, 38));
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-board-flap]').forEach((el) => boardWatcher.observe(el));

// 翻牌屏上的本地时钟
const clock = document.getElementById('board-clock');
if (clock) {
  const fmt = () => {
    const d = new Date();
    clock.textContent = [d.getHours(), d.getMinutes(), d.getSeconds()].map((n) => String(n).padStart(2, '0')).join(':');
  };
  fmt();
  setInterval(fmt, 1000);
}

// 文章页：滑行线阅读进度
const taxi = document.getElementById('taxi');
if (taxi) {
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    taxi.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1) : 1);
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

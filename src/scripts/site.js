// 滚动进入视口时显现
const revealer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    revealer.unobserve(e.target);
  });
}, { threshold: 0.08 });
document.querySelectorAll('[data-reveal]').forEach((el) => revealer.observe(el));

// 文章页阅读进度
const progress = document.getElementById('progress');
if (progress) {
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty('--p', max > 0 ? Math.min(scrollY / max, 1) : 1);
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
}

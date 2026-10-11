// ====== 데이터 (실제 내용으로 교체하세요) ======
const EMAIL = 'chaejun.im98@gmail.com';

// c1/c2: 카드 그라데이션 색 (초록 계열)
const projects = [
  { title: '공식몰 리뉴얼 & 신규 카테고리 기획', category: '공식몰 운영', role: 'MD / 기획', period: '2025', metric: '+00%', metricLabel: '공식몰 매출 성장률', c1: '#d3efdd', c2: '#a8dfbc', link: 'https://chaejunimmd.notion.site/202606' },
  { title: '시즌 프로모션 기획 (예시)', category: '프로모션', role: '프로모션 기획', period: '2025', metric: '00배', metricLabel: '목표 대비 달성', c1: '#eaf7ef', c2: '#74c995', link: 'https://chaejunimmd.notion.site/202606' },
  { title: '신제품 런칭 MD 전략 (예시)', category: '상품 기획', role: '런칭 MD', period: '2024', metric: 'TOP 3', metricLabel: '런칭 첫 달 카테고리 순위', c1: '#c4e8d1', c2: '#e9f6ee', link: 'https://chaejunimmd.notion.site/202606' },
  { title: '멤버십·CRM 개편 (예시)', category: '공식몰 운영', role: '운영 / 데이터', period: '2024', metric: '+00%', metricLabel: '재구매율', c1: '#e3f4ea', c2: '#8fd3a9', link: 'https://chaejunimmd.notion.site/202606' },
  { title: '브랜드 콜라보 상품 기획 (예시)', category: '상품 기획', role: '협업 / 기획', period: '2023', metric: 'SOLD OUT', metricLabel: '오픈 당일', c1: '#b9e3c9', c2: '#eaf7ef', link: 'https://chaejunimmd.notion.site/202606' },
  { title: '데이터 기반 가격·재고 운영 (예시)', category: '데이터', role: 'MD / 분석', period: '2023', metric: '-00%', metricLabel: '재고 회전 기간', c1: '#eaf7ef', c2: '#a8dfbc', link: 'https://chaejunimmd.notion.site/202606' },
];

const experience = [
  { period: '2025 – 현재', title: '뷰티 브랜드 국내 MD', desc: '공식몰 운영 및 기획 총괄, 프로모션·상품 구성 전략 수립 (예시)' },
  { period: '2023 – 2025', title: '뷰티 브랜드 MD', desc: '카테고리 운영, 신제품 런칭, 채널 협업 (예시)' },
  { period: '2021 – 2023', title: 'MD (커리어 시작)', desc: '상품 소싱, 판매 데이터 분석, 온라인몰 운영 (예시)' },
];

// ====== 유틸 ======
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (t) => String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// 예시 이미지: 제품 일러스트(SVG). 실제 사진은 art 대신 <img>로 교체하세요.
const ART = [
  '<rect x="150" y="30" width="60" height="22" rx="6" fill="#0c3320"/><rect x="162" y="52" width="36" height="14" fill="#135f37"/><rect x="130" y="66" width="100" height="120" rx="22" fill="#fff"/><rect x="146" y="102" width="68" height="44" rx="8" fill="#1f9556" opacity=".85"/><circle cx="60" cy="150" r="26" fill="#fff" opacity=".6"/><circle cx="300" cy="60" r="18" fill="#fff" opacity=".7"/>',
  '<ellipse cx="180" cy="168" rx="86" ry="14" fill="#0c3320" opacity=".12"/><rect x="104" y="70" width="152" height="46" rx="14" fill="#0c3320"/><rect x="110" y="112" width="140" height="62" rx="18" fill="#fff"/><rect x="140" y="130" width="80" height="12" rx="6" fill="#1f9556"/><circle cx="300" cy="50" r="22" fill="#fff" opacity=".6"/><circle cx="56" cy="64" r="12" fill="#fff" opacity=".7"/>',
  '<path d="M120 150 170 40h80l28 110z" fill="#fff" transform="rotate(-18 200 100)"/><rect x="168" y="22" width="56" height="26" rx="6" fill="#0c3320" transform="rotate(-18 200 100)"/><rect x="150" y="96" width="92" height="14" rx="7" fill="#1f9556" transform="rotate(-18 200 100)"/><circle cx="302" cy="140" r="24" fill="#fff" opacity=".6"/>',
  '<rect x="164" y="18" width="32" height="46" rx="14" fill="#0c3320"/><rect x="172" y="62" width="16" height="30" fill="#135f37"/><rect x="128" y="92" width="104" height="92" rx="20" fill="#fff"/><rect x="128" y="132" width="104" height="52" rx="16" fill="#1f9556" opacity=".8"/><circle cx="56" cy="56" r="18" fill="#fff" opacity=".7"/><circle cx="304" cy="120" r="28" fill="#fff" opacity=".5"/>',
  '<rect x="110" y="84" width="140" height="96" rx="12" fill="#fff"/><rect x="100" y="64" width="160" height="30" rx="10" fill="#0c3320"/><rect x="170" y="64" width="20" height="116" fill="#1f9556"/><path d="M180 64c-30-34-62-10-30 0zM180 64c30-34 62-10 30 0z" fill="#1f9556"/><circle cx="64" cy="48" r="14" fill="#fff" opacity=".7"/><circle cx="302" cy="148" r="20" fill="#fff" opacity=".6"/>',
  '<rect x="80" y="130" width="34" height="50" rx="8" fill="#fff"/><rect x="130" y="100" width="34" height="80" rx="8" fill="#fff"/><rect x="180" y="70" width="34" height="110" rx="8" fill="#1f9556"/><rect x="230" y="40" width="34" height="140" rx="8" fill="#0c3320"/><path d="M90 120 150 86 200 56 250 28" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-dasharray="2 9"/>',
];
const art = (i) => `<svg viewBox="0 0 360 200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">${ART[i % ART.length]}</svg>`;

// ====== 프로젝트 렌더링 + 필터 ======
const grid = $('#projectGrid');
const filters = $('#filters');
const categories = ['전체', ...new Set(projects.map((p) => p.category))];

grid.innerHTML = projects.map((p, i) => `
  <a class="project reveal" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer"
     data-category="${esc(p.category)}" style="--c1:${p.c1};--c2:${p.c2};color:#0c3320">
    <div class="art relative">
      ${art(i)}
      <span class="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-bold">${esc(p.category)}</span>
      <svg class="arrow absolute right-3 top-3 h-8 w-8 rounded-full bg-white/80 p-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M7 17 17 7M8 7h9v9"/></svg>
    </div>
    <div>
      <p class="metric">${esc(p.metric)}</p>
      <p class="mt-1 text-sm opacity-70">${esc(p.metricLabel)}</p>
      <h3 class="mt-5 text-xl font-bold leading-snug">${esc(p.title)}</h3>
      <p class="mt-1 text-sm opacity-70">${esc(p.role)} · ${esc(p.period)}</p>
    </div>
  </a>`).join('');

filters.innerHTML = categories.map((c, i) =>
  `<button class="filter-btn" role="tab" aria-selected="${i === 0}" data-filter="${esc(c)}">${esc(c)}</button>`).join('');

filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  $$('.filter-btn', filters).forEach((b) => b.setAttribute('aria-selected', b === btn));
  const f = btn.dataset.filter;
  $$('.project', grid).forEach((card) => {
    card.hidden = !(f === '전체' || card.dataset.category === f);
  });
});

// ====== 타임라인 ======
$('#timeline').innerHTML = experience.map((x) => `
  <li class="tl-item reveal">
    <p class="text-sm font-semibold text-brand-500">${esc(x.period)}</p>
    <h3 class="mt-1 text-xl font-bold">${esc(x.title)}</h3>
    <p class="mt-1 text-ink/65 dark:text-white/60">${esc(x.desc)}</p>
  </li>`).join('');

// ====== 스크롤 reveal + 카운트업 ======
function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1200;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    $$('[data-count]', en.target).forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold: 0.15 });
$$('.reveal').forEach((el) => io.observe(el));

// ====== 활성 섹션 하이라이트 ======
const links = $$('.nav-link');
const sectionIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) {
      links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach((s) => sectionIO.observe(s));

// ====== 모바일 메뉴 ======
const menuBtn = $('#menuToggle');
const menu = $('#mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', open);
});
$$('.mobile-link', menu).forEach((a) => a.addEventListener('click', () => {
  menu.classList.add('hidden');
  menuBtn.setAttribute('aria-expanded', false);
}));

// ====== 다크모드 ======
$('#themeToggle').addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

// ====== 이메일 복사 + 토스트 ======
const toast = $('#toast');
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
$('#copyEmail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast('이메일 주소가 복사되었어요 ✓');
  } catch (e) {
    showToast(EMAIL);
  }
});

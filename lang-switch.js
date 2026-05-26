// lang-switch.js
(function() {
  const PATH = window.location.pathname;
  const IS_EN = PATH.includes('/en/');
  const RU_URL = `https://${window.location.host}/li-wei-breathing/`;
  const EN_URL = `https://${window.location.host}/li-wei-breathing/en/`;

  const savedLang = localStorage.getItem('liwei_lang');
  if (savedLang === 'en' && !IS_EN) { window.location.replace(EN_URL); return; }
  if (savedLang === 'ru' && IS_EN) { window.location.replace(RU_URL); return; }

  if (!savedLang && navigator.language.toLowerCase().startsWith('en') && !IS_EN) {
    window.location.replace(EN_URL); return;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.innerHTML = IS_EN ? '🇺 RU' : '🇺 EN';
    btn.style.cssText = `position:fixed;top:15px;right:15px;z-index:9999;background:rgba(26,31,58,0.9);color:#ffd700;border:1px solid rgba(255,215,0,0.4);padding:8px 14px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:600;backdrop-filter:blur(6px);box-shadow:0 4px 12px rgba(0,0,0,0.3);transition:all 0.2s;`;
    btn.onclick = () => {
      localStorage.setItem('liwei_lang', IS_EN ? 'ru' : 'en');
      window.location.replace(IS_EN ? RU_URL : EN_URL);
    };
    document.body.appendChild(btn);
  });
})();

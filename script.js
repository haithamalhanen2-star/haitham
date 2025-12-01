// ===== الترجمات =====
const translations = {
  ar: {
    name: "هيثم النعيمي",
    role: "مصمم واجهات أمامية • كاتب إعلانات • ميديا باير",
    service1: "تصميم واجهات احترافية",
    service2: "مواقع متجاوبة بالكامل",
    service3: "دعم 4 لغات (عربي، فارسي، إنجليزي، كردي)",
    portfolioTitle: "أعمالي",
    proj1Title: "موقع تجميل – واجهة أمامية",
    proj1Desc: "تصميم وتطوير واجهة متجاوبة بلغات متعددة",
    proj2Title: "حملة إعلانية – ROAS 8.4x",
    proj2Desc: "كتابة إعلانات + استهداف دقيق + تحسين أداء",
    proj3Title: "منصة تعليمية – متعددة اللغات",
    proj3Desc: "دعم عربي، فارسی، إنجليزي، كردي في نظام واحد",
    footer: "تصميم هيثم النعيمي © 2025"
  },
  fa: {
    name: "هیثم نعیمی",
    role: "طراح UI • نویسنده تبلیغات • مدیر تبلیغات",
    service1: "طراحی رابط کاربری حرفه‌ای",
    service2: "وب‌سایت‌های واکنش‌گرا",
    service3: "پشتیبانی از ۴ زبان (عربی، فارسی، انگلیسی، کردی)",
    portfolioTitle: "نمونه کارها",
    proj1Title: "سایت زیبایی – رابط کاربری",
    proj1Desc: "طراحی و توسعه رابط چندزبانه",
    proj2Title: "کمپین تبلیغاتی – ROAS 8.4x",
    proj2Desc: "نوشتن تبلیغات + هدف‌گیری دقیق + بهینه‌سازی",
    proj3Title: "پلتفرم آموزشی – چندزبانه",
    proj3Desc: "پشتیبانی از عربی، فارسی، انگلیسی، کردی",
    footer: "طراحی هیثم نعیمی © 2025"
  },
  en: {
    name: "Haitham Al-Nuaimi",
    role: "Front-End Designer • Copywriter • Media Buyer",
    service1: "Professional UI Design",
    service2: "Fully Responsive Websites",
    service3: "4-Language Support (Arabic, Persian, English, Kurdish)",
    portfolioTitle: "My Work",
    proj1Title: "Beauty Website – Front-End",
    proj1Desc: "Responsive multi-language UI design & development",
    proj2Title: "Ad Campaign – ROAS 8.4x",
    proj2Desc: "Ad copy + precise targeting + performance optimization",
    proj3Title: "E-Learning Platform – Multi-Language",
    proj3Desc: "Support for Arabic, Persian, English, and Kurdish",
    footer: "Designed by Haitham Al-Nuaimi © 2025"
  },
  ku: {
    name: "هەیثەم النعیمی",
    role: "دیزاینەری فرۆنت-ئێند • نووسەری کۆپی • میدیا بایەر",
    service1: "دیزاینی ئینتەرفەیسی پیشەگەر",
    service2: "ماڵپەڕی وەرگر",
    service3: "پشتگیری لە ٤ زمان (عەرەبی، فارسی، ئینگلیزی، کوردی)",
    portfolioTitle: "کارەکانم",
    proj1Title: "ماڵپەڕی جوانکاری – فرۆنت-ئێند",
    proj1Desc: "دیزاین و پەرەپێدانی ئینتەرفەیسی چەند زمانی",
    proj2Title: "کمپینی ریکلام – ROAS 8.4x",
    proj2Desc: "نووسینی ریکلام + هەدفگیری ورد + باشترکردنی ئەنجام",
    proj3Title: "پلاتفۆرمی فێربوون – چەند زمانی",
    proj3Desc: "پشتگیری لە عەرەبی، فارسی، ئینگلیزی، کوردی",
    footer: "دیزاین لەلایەن هەیثەم © ٢٠٢٥"
  }
};

// ===== تطبيق اللغة =====
function applyLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
      // داخل دالة applyLanguage(lang) — أضف في نهايتها:
localStorage.setItem('lang', lang);
    }
  });

  const isRTL = (lang === 'ar' || lang === 'fa' || lang === 'ku');
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  document.body.classList.toggle('en', lang === 'en');

  document.querySelectorAll('.lang-item').forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-lang') === lang);
  });
}

// ===== التهيئة العامة =====
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. تطبيق اللغة الافتراضية ---
  applyLanguage('ar');

  // --- 2. ربط أزرار اللغة ---
  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', () => {
      applyLanguage(item.getAttribute('data-lang'));
    });
  });

  // --- 3. تهيئة زر الوضع الليلي/النهاري ---
  const themeToggle = document.getElementById('themeToggle');
  const progressBar = document.getElementById('progressBar');

  if (themeToggle) {
    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // تبديل عند النقر
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
  }

  // --- 4. شريط التقدم ---
  if (progressBar) {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = percent + '%';
    };
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // عند التحميل
  }
});
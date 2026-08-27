// ==========================================================================
// СЛОВАРЬ МУЛЬТИЯЗЫЧНОСТИ (RU, UA, EN)
// ==========================================================================
const translations = {
  ru: {
    nav_logo: "QWERTY_OZZI",
    status_online: "SYSTEM ONLINE",
    nav_services: "Спецификация",
    nav_projects: "Проекты",
    nav_stack: "Стек",
    nav_contact: "Связаться",
    hero_meta_1: "[CREATIVE ENGINEERING]",
    hero_meta_2: "[DIGITAL MODDING & SCRIPTS]",
    hero_title_1: "ИНЖЕНЕРИЯ",
    hero_badge: "PROD READY",
    hero_title_2: "ИНТЕРФЕЙСОВ",
    hero_title_3: "& МОДДИНГ.",
    hero_lead: "Проектирование функциональных систем, высокоскоростных Lua/C++ скриптов, кастомных 3D-моделей и оптимизированных игровых сред с безупречной архитектурой.",
    stat_1: "Отказоустойчивость скриптов",
    stat_2: "Задержка выполнения логики",
    hero_btn: "Исследовать проекты",
    services_heading: "КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ",
    s1_title: "Скрипты и системная логика",
    s1_desc: "Разработка отказоустойчивых скриптовых модулей с кастомными GUI на mimgui, перехватом сетевых пакетов, парсингом и автоматизацией процессов.",
    s2_title: "3D Модели и ретекстур",
    s2_desc: "Создание высокоточных замен оружия, транспорта и персонажей. Чистая полигональная сетка, текстурирование высокого разрешения, настройка дамми и костей.",
    s3_title: "Кастомные сборки клиентов",
    s3_desc: "Комплексный тюнинг игровых сборок под ключ: устранение конфликтов библиотек, очистка лишних ресурсов и достижение максимального стабильного фреймрейта.",
    projects_heading: "ИЗБРАННЫЕ РАБОТЫ",
    projects_sub: "Интерактивный просмотр медиа-архива. Кликните по превью для зума.",
    p1_title: "NexusCore UI & Assistant",
    p1_desc: "Многофункциональный комплекс инструментов автоматизации с модульной архитектурой окон, биндером, кастомными индикаторами и системой тем оформления.",
    p2_title: "Custom 3D Vehicles & Weapons",
    p2_desc: "Высокодетализированные заменки моделей авто и оружия. Авторский шейдинг, оптимизированный вес моделей и качественные карты отражений.",
    p3_title: "Performance Client Setup",
    p3_desc: "Оптимизированный пакет клиентской сборки с интегрированными фиксами памяти, кастомным визуальным стилем и плавной отрисовкой дистанции.",
    stack_heading: "ТЕХНОЛОГИЧЕСКИЙ СТЕК",
    st1_desc: "Разработка клиентских интерфейсов, хуков памяти и скриптовых утилит.",
    st2_desc: "3D моделирование, UV-развертка, скиннинг и экспорт через DragonFF.",
    st3_desc: "Автоматизация задач, парсинг данных, боты и серверная интеграция.",
    st4_desc: "Программирование контроллеров, ШИМ-управление и аппаратная логика.",
    st5_desc: "HTML5, CSS3, ES6+, GSAP, Canvas API и адаптивные веб-приложения.",
    st6_desc: "Конвертация и оптимизация текстурных архивов, дизайн интерфейсов.",
    contact_heading: "ГОТОВЫ ОБСУДИТЬ ПРОЕКТ?",
    contact_speed: "[RESPONSE TIME: FAST]",
    contact_hint: "ЛКМ — открыть ссылку • ПКМ — мгновенно скопировать контакт в буфер",
    footer_rights: "© 2026 QWERTY_OZZI. ВСЕ ПРАВА ЗАЩИЩЕНЫ.",
    toast_copied: "Скопировано в буфер"
  },
  ua: {
    nav_logo: "QWERTY_OZZI",
    status_online: "СИСТЕМА ОНЛАЙН",
    nav_services: "Специфікація",
    nav_projects: "Проєкти",
    nav_stack: "Стек",
    nav_contact: "Зв'язатися",
    hero_meta_1: "[КРЕАТИВНА ІНЖЕНЕРІЯ]",
    hero_meta_2: "[ЦИФРОВИЙ МОДДІНГ ТА СКРИПТИ]",
    hero_title_1: "ІНЖЕНЕРІЯ",
    hero_badge: "PROD READY",
    hero_title_2: "ІНТЕРФЕЙСІВ",
    hero_title_3: "ТА МОДДІНГ.",
    hero_lead: "Проєктування функціональних систем, високошвидкісних Lua/C++ скриптів, кастомних 3D-моделей та оптимізованих ігрових середовищ із бездоганною архітектурою.",
    stat_1: "Відмовостійкість скриптів",
    stat_2: "Затримка виконання логіки",
    hero_btn: "Дослідити проєкти",
    services_heading: "КЛЮЧОВІ НАПРЯМКИ",
    s1_title: "Скрипти та системна логіка",
    s1_desc: "Розробка відмовостійких скриптових модулів із кастомними GUI на mimgui, перехопленням мережевих пакетів, парсингом та автоматизацією процесів.",
    s2_title: "3D Моделі та ретекстур",
    s2_desc: "Створення високоточних замін зброї, транспорту та персонажів. Чиста полігональна сітка, текстурування високої роздільної здатності, налаштування дамі та кісток.",
    s3_title: "Кастомні збірки клієнтів",
    s3_desc: "Комплексний тюнінг ігрових збірок під ключ: усунення конфліктів бібліотек, очищення зайвих ресурсів та досягнення максимального стабільного фреймрейту.",
    projects_heading: "ОБРАНІ РОБОТИ",
    projects_sub: "Інтерактивний перегляд медіа-архіву. Клікніть по прев'ю для зуму.",
    p1_title: "NexusCore UI & Assistant",
    p1_desc: "Багатофункціональний комплекс інструментів автоматизації з модульною архітектурою вікон, біндером, кастомними індикаторами та системою тем оформлення.",
    p2_title: "Custom 3D Vehicles & Weapons",
    p2_desc: "Високодеталізовані замінники моделей авто та зброї. Авторський шейдинг, оптимізована вага моделей та якісні карти відображень.",
    p3_title: "Performance Client Setup",
    p3_desc: "Оптимізований пакет клієнтської збірки з інтегрованими фіксами пам'яті, кастомним візуальним стилем та плавним промальовуванням дистанції.",
    stack_heading: "ТЕХНОЛОГІЧНИЙ СТЕК",
    st1_desc: "Розробка клієнтських інтерфейсів, хуків пам'яті та скриптових утиліт.",
    st2_desc: "3D моделювання, UV-розгортка, скінінг та експорт через DragonFF.",
    st3_desc: "Автоматизація завдань, парсинг даних, боти та серверна інтеграція.",
    st4_desc: "Програмування контролерів, ШІМ-керування та апаратна логіка.",
    st5_desc: "HTML5, CSS3, ES6+, GSAP, Canvas API та адаптивні веб-застосунки.",
    st6_desc: "Конвертація та оптимізація текстурних архівів, дизайн інтерфейсів.",
    contact_heading: "ГОТОВІ ОБГОВОРИТИ ПРОЄКТ?",
    contact_speed: "[ЧАС ВІДПОВІДІ: ШВИДКО]",
    contact_hint: "ЛКМ — відкрити посилання • ПКМ — миттєво скопіювати контакт у буфер",
    footer_rights: "© 2026 QWERTY_OZZI. ВСІ ПРАВА ЗАХИЩЕНІ.",
    toast_copied: "Скопійовано в буфер"
  },
  en: {
    nav_logo: "QWERTY_OZZI",
    status_online: "SYSTEM ONLINE",
    nav_services: "Specifications",
    nav_projects: "Projects",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_meta_1: "[CREATIVE ENGINEERING]",
    hero_meta_2: "[DIGITAL MODDING & SCRIPTS]",
    hero_title_1: "ENGINEERING",
    hero_badge: "PROD READY",
    hero_title_2: "INTERFACES",
    hero_title_3: "& MODDING.",
    hero_lead: "Architecting high-performance systems, low-latency Lua/C++ scripts, custom 3D assets, and optimized client environments with uncompromising precision.",
    stat_1: "Script Fault Tolerance",
    stat_2: "Execution Logic Latency",
    hero_btn: "Explore Archive",
    services_heading: "CORE DISCIPLINES",
    s1_title: "Scripts & Core Logic",
    s1_desc: "Engineering fault-tolerant script architectures, custom mimgui GUIs, network packet interceptors, scraping pipelines, and task automation.",
    s2_title: "3D Models & Retexturing",
    s2_desc: "Crafting precision replacement assets for weapons, vehicles, and characters. Optimized topology, high-res texture maps, dummy alignment, and bone rigging.",
    s3_title: "Custom Client Builds",
    s3_desc: "End-to-end client engine tuning: dependency conflict resolution, redundant asset stripping, memory optimization, and stable high-FPS delivery.",
    projects_heading: "FEATURED ARCHIVE",
    projects_sub: "Interactive media showcase. Click preview frames for deep zoom inspection.",
    p1_title: "NexusCore UI & Assistant",
    p1_desc: "Modular automated workflow suite featuring dynamic dockable window nodes, keybinder hooks, custom performance HUDs, and real-time palette engines.",
    p2_title: "Custom 3D Vehicles & Weapons",
    p2_desc: "High-fidelity weapon and automotive asset replacements with custom shader workflows, ultra-light poly distribution, and precise specular passes.",
    p3_title: "Performance Client Setup",
    p3_desc: "Stripped and fortified game runtime configuration equipped with memory management fixes, refined draw distance, and custom aesthetic mods.",
    stack_heading: "TECHNOLOGY MATRIX",
    st1_desc: "Custom client UI engineering, memory hook injections, and automation toolsets.",
    st2_desc: "3D asset design, clean UV unwrapping, bone rigging, and DragonFF compilation.",
    st3_desc: "Task automation pipelines, parsing engines, automated bots, and REST API integration.",
    st4_desc: "Microcontroller logic, PWM signal routing, and hardware interface design.",
    st5_desc: "HTML5, CSS3, ES6+, GSAP timelines, Canvas 2D, and reactive frontends.",
    st6_desc: "Texture compression, archive compilation, and user interface asset styling.",
    contact_heading: "READY TO INITIALIZE?",
    contact_speed: "[RESPONSE TIME: FAST]",
    contact_hint: "LMB — Open link • RMB — Copy handle instantly to clipboard",
    footer_rights: "© 2026 QWERTY_OZZI. ALL RIGHTS RESERVED.",
    toast_copied: "Copied to clipboard"
  }
};

// Smooth Scroll (Lenis)
let lenis;
try {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
} catch (e) {
  console.warn("Lenis initialization skipped:", e);
}

// Глобальный скролл барабана
window.scrollDrum = function(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const frame = drum.querySelector(".drum-frame");
    const height = frame ? frame.offsetHeight : drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
};

window.switchAdminTab = function(tabName) {
  const tabAdd = document.getElementById("tabAdd");
  const tabEdit = document.getElementById("tabEdit");
  const btns = document.querySelectorAll(".tab-btn");

  if (tabName === "add") {
    tabAdd.classList.remove("hidden");
    tabEdit.classList.add("hidden");
    btns[0].classList.add("active");
    btns[1].classList.remove("active");
  } else {
    tabAdd.classList.add("hidden");
    tabEdit.classList.remove("hidden");
    btns[0].classList.remove("active");
    btns[1].classList.add("active");
  }
};

document.addEventListener("DOMContentLoaded", () => {

  // ========================================================================
  // 1. ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ (DARK / LIGHT) — ПО УМОЛЧАНИЮ DARK
  // ========================================================================
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeLabel = document.getElementById("themeLabel");

  function updateThemeUI(theme) {
    if (themeLabel) themeLabel.textContent = theme.toUpperCase();
  }
  updateThemeUI(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio_theme", nextTheme);
      updateThemeUI(nextTheme);
    });
  }

  // ========================================================================
  // 2. ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ (RU, UA, EN)
  // ========================================================================
  let currentLang = localStorage.getItem("portfolio_lang") || "ru";

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  applyLanguage(currentLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyLanguage(lang);
    });
  });

  // ========================================================================
  // 3. КАСТОМНЫЙ КУРСОР С ИНТЕРПОЛЯЦИЕЙ
  // ========================================================================
  const dot = document.getElementById("cursorDot");
  const follower = document.getElementById("cursorFollower");
  const cursorLabel = document.getElementById("cursorLabel");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  if (window.innerWidth > 900) {
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    });

    function animateCursor() {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (follower) {
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll("[data-cursor]").forEach(el => {
      el.addEventListener("mouseenter", () => {
        const label = el.getAttribute("data-cursor");
        follower.classList.add("is-active");
        if (cursorLabel) cursorLabel.innerText = label;
      });
      el.addEventListener("mouseleave", () => {
        follower.classList.remove("is-active");
        if (cursorLabel) cursorLabel.innerText = "";
      });
    });

    document.querySelectorAll(".magnetic").forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0px, 0px)";
      });
    });
  }

  // ========================================================================
  // 4. GSAP АНИМАЦИИ
  // ========================================================================
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", {
      y: 120,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out"
    });

    gsap.from(".hero-footer-grid > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-editorial-grid",
        start: "top 80%"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.from(".project-row", {
      scrollTrigger: {
        trigger: ".projects-spatial-list",
        start: "top 75%"
      },
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.2,
      ease: "power3.out"
    });
  }

  // ========================================================================
  // 5. ЧАСЫ И ДИНАМИЧЕСКИЙ ЗАГОЛОВОК
  // ========================================================================
  function updateClock() {
    const clockEl = document.getElementById("devClock");
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("ru-RU", { hour12: false });
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  const originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "✦ [WAITING_RESPONSE] | QwertyOzzi" : originalTitle;
  });

  // ========================================================================
  // 6. TOAST УВЕДОМЛЕНИЕ И КОПИРОВАНИЕ
  // ========================================================================
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  let toastTimer = null;

  function triggerToast(msg) {
    if (!toast || !toastText) return;
    toastText.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  }

  document.querySelectorAll(".copy-action").forEach(btn => {
    const textToCopy = btn.getAttribute("data-copy");
    const directLink = btn.getAttribute("data-link");

    btn.addEventListener("click", () => {
      if (directLink && directLink.trim() !== "") {
        window.open(directLink, "_blank");
      } else if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const tCopied = (translations[currentLang] && translations[currentLang].toast_copied) || "Скопировано в буфер";
          triggerToast(`${tCopied}: ${textToCopy}`);
        });
      }
    });

    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const tCopied = (translations[currentLang] && translations[currentLang].toast_copied) || "Скопировано в буфер";
          triggerToast(`${tCopied}: ${textToCopy}`);
        });
      }
    });
  });

  // ========================================================================
  // 7. LIGHTBOX ЗУМ
  // ========================================================================
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");
  let hoverTimer = null;

  function openModal(src) {
    if (!modal || !modalImg) return;
    clearTimeout(hoverTimer);
    modalImg.src = src;
    modal.classList.add("active");
  }

  function closeModal() {
    if (!modal || !modalImg) return;
    modal.classList.remove("active");
    setTimeout(() => { modalImg.src = ""; }, 300);
  }

  function bindMediaZoom() {
    document.querySelectorAll(".media-zoomable").forEach(img => {
      img.onclick = (e) => {
        e.stopPropagation();
        openModal(img.src);
      };

      img.onmouseenter = () => {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => openModal(img.src), 3000);
      };

      img.onmousemove = () => {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => openModal(img.src), 3000);
      };

      img.onmouseleave = () => clearTimeout(hoverTimer);
    });
  }
  bindMediaZoom();

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // ========================================================================
  // 8. АДМИН-ПАНЕЛЬ (F2 / Тройной клик / admin())
  // ========================================================================
  const ADMIN_PASS = "1234";
  const adminModal = document.getElementById("adminModal");
  const adminCloseBtn = document.getElementById("adminCloseBtn");
  const secretLogo = document.getElementById("secretLogoTrigger");

  window.openAdmin = function() {
    const pass = prompt("Введите PIN администратора:");
    if (pass === ADMIN_PASS) {
      if (adminModal) adminModal.classList.add("active");
    } else if (pass !== null) {
      alert("Неверный PIN");
    }
  };
  window.admin = window.openAdmin;

  let logoClicks = 0;
  let clickTimer = null;
  if (secretLogo) {
    secretLogo.addEventListener("click", () => {
      logoClicks++;
      clearTimeout(clickTimer);
      if (logoClicks >= 3) {
        logoClicks = 0;
        window.openAdmin();
      } else {
        clickTimer = setTimeout(() => { logoClicks = 0; }, 700);
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "F2" || (e.ctrlKey && e.shiftKey && (e.code === "KeyA" || e.key === "A" || e.key === "a" || e.key === "Ф" || e.key === "ф"))) {
      e.preventDefault();
      window.openAdmin();
    }
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("active")) closeModal();
      if (adminModal && adminModal.classList.contains("active")) adminModal.classList.remove("active");
    }
  });

  if (adminCloseBtn) {
    adminCloseBtn.addEventListener("click", () => adminModal.classList.remove("active"));
  }

  // ========================================================================
  // 9. ЗАГРУЗКА И СОЗДАНИЕ ПРОЕКТОВ (LOCALSTORAGE)
  // ========================================================================
  const savedCards = JSON.parse(localStorage.getItem("portfolio_custom_cards") || "[]");
  const container = document.getElementById("projectsContainer");

  function renderProjectRow(data, idx) {
    const drumId = `custom-drum-${idx}`;
    const imagesArray = data.images.split(",").map(s => s.trim()).filter(Boolean);
    const slidesHtml = imagesArray.map(img => `<div class="drum-frame"><img src="${img}" alt="Preview" class="media-zoomable"></div>`).join("");

    const row = document.createElement("article");
    row.className = "project-row";
    row.setAttribute("data-cursor", "DRUM");
    row.innerHTML = `
      <div class="project-row-left">
        <div class="project-index-badge">PRJ_0${idx + 4}</div>
        <div class="project-tags-row">
          ${(data.category || 'PROJECT').split(",").map(t => `<span class="ptag">${t.trim()}</span>`).join("")}
        </div>
        <h3 class="project-heading">${data.title || 'Новый проект'}</h3>
        <p class="project-summary">${data.desc || ''}</p>
      </div>
      <div class="project-row-right">
        <div class="editorial-drum-wrap">
          <div class="editorial-drum" id="${drumId}">
            ${slidesHtml || '<div class="drum-frame"><img src="3d1.jpg" class="media-zoomable"></div>'}
          </div>
          ${imagesArray.length > 1 ? `
          <div class="drum-nav-overlay">
            <button class="drum-nav-btn magnetic" onclick="scrollDrum('${drumId}', -1)">↑</button>
            <button class="drum-nav-btn magnetic" onclick="scrollDrum('${drumId}', 1)">↓</button>
          </div>` : ''}
        </div>
      </div>
    `;
    container.appendChild(row);
  }

  savedCards.forEach((c, idx) => renderProjectRow(c, idx));

  const createBtn = document.getElementById("createProjectBtn");
  if (createBtn) {
    createBtn.addEventListener("click", () => {
      const category = document.getElementById("pCategory").value;
      const title = document.getElementById("pTitle").value;
      const desc = document.getElementById("pDesc").value;
      const images = document.getElementById("pImages").value;

      if (!title) {
        alert("Укажите название проекта!");
        return;
      }

      const newCard = { category, title, desc, images };
      savedCards.push(newCard);
      localStorage.setItem("portfolio_custom_cards", JSON.stringify(savedCards));
      renderProjectRow(newCard, savedCards.length - 1);
      bindMediaZoom();

      document.getElementById("pCategory").value = "";
      document.getElementById("pTitle").value = "";
      document.getElementById("pDesc").value = "";
      document.getElementById("pImages").value = "";
      adminModal.classList.remove("active");
      triggerToast("Проект добавлен в архив");
    });
  }

  // Inline-редактирование
  const toggleInlineBtn = document.getElementById("toggleInlineEditBtn");
  const saveInlineBtn = document.getElementById("saveInlineEditBtn");
  let isInline = false;

  if (toggleInlineBtn && saveInlineBtn) {
    toggleInlineBtn.addEventListener("click", () => {
      isInline = !isInline;
      document.querySelectorAll("[data-i18n]").forEach(el => {
        el.setAttribute("contenteditable", isInline ? "true" : "false");
      });
      toggleInlineBtn.innerText = isInline ? "Отключить подсветку" : "Включить подсветку текста";
      adminModal.classList.remove("active");
      triggerToast(isInline ? "Режим правки включен" : "Режим правки выключен");
    });

    saveInlineBtn.addEventListener("click", () => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        el.removeAttribute("contenteditable");
      });
      isInline = false;
      toggleInlineBtn.innerText = "Включить подсветку текста";
      adminModal.classList.remove("active");
      triggerToast("Изменения сохранены!");
    });
  }

  // ========================================================================
  // 10. АНИМИРОВАННЫЙ ЗВЕЗДНЫЙ FAVICON
  // ========================================================================
  const favicon = document.getElementById("dynamic-favicon");
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  let t = 0;

  function draw4PointStar(cx, cy, rOuter, rInner) {
    ctx.beginPath();
    ctx.moveTo(cx, cy - rOuter);
    ctx.quadraticCurveTo(cx, cy, cx + rInner, cy);
    ctx.lineTo(cx + rOuter, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy + rInner);
    ctx.lineTo(cx + rOuter, cy);
    ctx.quadraticCurveTo(cx, cy, cx - rInner, cy);
    ctx.lineTo(cx - rOuter, cy);
    ctx.quadraticCurveTo(cx, cy, cx, cy - rInner);
    ctx.closePath();
    ctx.fill();
  }

  function renderFavicon() {
    ctx.clearRect(0, 0, 32, 32);

    ctx.save();
    ctx.translate(14, 18);
    ctx.rotate(-0.15);
    const gradMain = ctx.createLinearGradient(-10, -10, 10, 10);
    gradMain.addColorStop(0, "#ffffff");
    gradMain.addColorStop(0.6, "#2997ff");
    gradMain.addColorStop(1, "#a855f7");
    ctx.fillStyle = gradMain;
    draw4PointStar(0, 0, 13, 2.5);
    ctx.restore();

    const scale = 0.7 + 0.55 * Math.sin(t * 3);
    const alpha = 0.35 + 0.65 * (Math.sin(t * 3) * 0.5 + 0.5);

    ctx.save();
    ctx.translate(24 + Math.sin(t * 2) * 0.5, 7 + Math.cos(t * 2) * 0.5);
    ctx.rotate(t * 1.5);
    ctx.scale(scale, scale);
    ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));

    const gradMini = ctx.createLinearGradient(-4, -4, 4, 4);
    gradMini.addColorStop(0, "#60a5fa");
    gradMini.addColorStop(1, "#c084fc");
    ctx.fillStyle = gradMini;
    draw4PointStar(0, 0, 6, 1.2);
    ctx.restore();

    favicon.href = canvas.toDataURL("image/png");
    t += 0.035;
    requestAnimationFrame(renderFavicon);
  }
  renderFavicon();
});

// Инициализация Lenis (Smooth Scroll)
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

  // 1. Кастомный кинетический курсор с lerp
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

    // Hover состояния для курсора
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

    // Магнитные элементы
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

  // 2. GSAP ScrollTrigger Анимации появления
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero кинетическая типографика
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

    // Карточки спецификаций
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

    // Ряды проектов
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

  // 3. Часы и часовой пояс
  function updateClock() {
    const clockEl = document.getElementById("devClock");
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("ru-RU", { hour12: false });
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 4. Dynamic Page Title
  const originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    document.title = document.hidden ? "✦ [WAITING_RESPONSE] | QwertyOzzi" : originalTitle;
  });

  // 5. Toast уведомление
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

  // 6. Клик по контактам (ЛКМ переход / ПКМ копирование)
  document.querySelectorAll(".copy-action").forEach(btn => {
    const textToCopy = btn.getAttribute("data-copy");
    const directLink = btn.getAttribute("data-link");

    btn.addEventListener("click", () => {
      if (directLink && directLink.trim() !== "") {
        window.open(directLink, "_blank");
      } else if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          triggerToast(`Скопировано: ${textToCopy}`);
        });
      }
    });

    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          triggerToast(`Скопировано в буфер: ${textToCopy}`);
        });
      }
    });
  });

  // 7. Lightbox Zoom
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

  // 8. Админ-панель (F2 / Тройной клик / admin())
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

  // 9. Загрузка данных из localStorage
  const editables = document.querySelectorAll("[data-key]");
  editables.forEach(el => {
    const key = el.getAttribute("data-key");
    const saved = localStorage.getItem("portfolio_" + key);
    if (saved) el.innerHTML = saved;
  });

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

  // Создание проекта
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
      document.querySelectorAll("[data-key]").forEach(el => {
        el.setAttribute("contenteditable", isInline ? "true" : "false");
      });
      toggleInlineBtn.innerText = isInline ? "Отключить подсветку" : "Включить подсветку текста";
      adminModal.classList.remove("active");
      triggerToast(isInline ? "Режим правки включен" : "Режим правки выключен");
    });

    saveInlineBtn.addEventListener("click", () => {
      document.querySelectorAll("[data-key]").forEach(el => {
        el.removeAttribute("contenteditable");
        const key = el.getAttribute("data-key");
        localStorage.setItem("portfolio_" + key, el.innerHTML);
      });
      isInline = false;
      toggleInlineBtn.innerText = "Включить подсветку текста";
      adminModal.classList.remove("active");
      triggerToast("Изменения сохранены!");
    });
  }

  // 10. Favicon
  const favicon = document.getElementById("dynamic-favicon");
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  let t = 0;

  function renderFavicon() {
    ctx.clearRect(0, 0, 32, 32);
    ctx.save();
    ctx.translate(16, 16);
    ctx.rotate(t);
    ctx.fillStyle = "#111215";
    ctx.fillRect(-10, -10, 20, 20);
    ctx.fillStyle = "#1d4ed8";
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    favicon.href = canvas.toDataURL("image/png");
    t += 0.03;
    requestAnimationFrame(renderFavicon);
  }
  renderFavicon();
});

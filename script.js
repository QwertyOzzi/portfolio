// Глобальный вызов прокрутки барабана
window.scrollDrum = function(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const slide = drum.querySelector(".v-drum-slide");
    const height = slide ? slide.offsetHeight : drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
};

// Переключение вкладок в панели
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

  const ADMIN_PASS = "1234";
  const adminModal = document.getElementById("adminModal");
  const adminCloseBtn = document.getElementById("adminCloseBtn");
  const secretLogo = document.getElementById("secretLogoTrigger");

  // Функция авторизации и открытия панели
  window.openAdmin = function() {
    const pass = prompt("Введите PIN администратора:");
    if (pass === ADMIN_PASS) {
      if (adminModal) adminModal.classList.add("active");
    } else if (pass !== null) {
      alert("Неверный PIN!");
    }
  };

  // Команда в консоли (F12 -> admin())
  window.admin = window.openAdmin;

  // 1. Тройной клик по логотипу
  let logoClicks = 0;
  let clickTimer = null;
  if (secretLogo) {
    secretLogo.addEventListener("click", (e) => {
      e.preventDefault();
      logoClicks++;
      clearTimeout(clickTimer);
      if (logoClicks >= 3) {
        logoClicks = 0;
        window.openAdmin();
      } else {
        clickTimer = setTimeout(() => { logoClicks = 0; }, 800);
      }
    });
  }

  // 2. Горячие клавиши: F2 или Ctrl+Shift+A
  document.addEventListener("keydown", (e) => {
    if (e.key === "F2" || (e.ctrlKey && e.shiftKey && (e.code === "KeyA" || e.key === "A" || e.key === "a" || e.key === "Ф" || e.key === "ф"))) {
      e.preventDefault();
      window.openAdmin();
    }
  });

  if (adminCloseBtn) {
    adminCloseBtn.addEventListener("click", () => {
      adminModal.classList.remove("active");
    });
  }

  // 3. Динамический заголовок вкладки
  const originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "✦ Жду возвращения... | Portfolio";
    } else {
      document.title = originalTitle;
    }
  });

  // 4. Часы в навигации
  function updateClock() {
    const clockEl = document.getElementById("devClock");
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("ru-RU", { hour12: false });
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // 5. Toast Уведомление
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toastText");
  let toastTimer = null;

  function triggerToast(msg) {
    if (!toast || !toastText) return;
    toastText.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }

  // 6. Клик по контактам
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

  // 7. 3D Tilt эффект для экранов шире 768px
  if (window.innerWidth > 768) {
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -9;
        const rotY = ((x - centerX) / centerX) * 9;

        card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.025, 1.025, 1.025)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      });
    });
  }

  // 8. Физические фоновые частицы
  const pCanvas = document.getElementById("particles-canvas");
  if (pCanvas) {
    const pCtx = pCanvas.getContext("2d");
    let width = (pCanvas.width = window.innerWidth);
    let height = (pCanvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = pCanvas.width = window.innerWidth;
      height = pCanvas.height = window.innerHeight;
    });

    const particles = [];
    const count = Math.floor(Math.min(width, 1400) / (window.innerWidth < 768 ? 25 : 18));
    const mouse = { x: null, y: null, radius: 120 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.8,
        baseAlpha: Math.random() * 0.5 + 0.2
      });
    }

    function animateParticles() {
      pCtx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 3;
            p.y -= (dy / dist) * force * 3;
          }
        }

        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fillStyle = `rgba(168, 195, 255, ${p.baseAlpha})`;
        pCtx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 90) {
            pCtx.beginPath();
            pCtx.moveTo(p.x, p.y);
            pCtx.lineTo(p2.x, p2.y);
            pCtx.strokeStyle = `rgba(41, 151, 255, ${(1 - distNodes / 90) * 0.15})`;
            pCtx.lineWidth = 0.8;
            pCtx.stroke();
          }
        }
      });

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // 9. Динамический Favicon
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

  function renderDynamicFavicon() {
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
    requestAnimationFrame(renderDynamicFavicon);
  }
  renderDynamicFavicon();

  // 10. Появление при скролле
  const animatedElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  animatedElements.forEach(el => observer.observe(el));

  // 11. Загрузка сохраненных текстов
  const editables = document.querySelectorAll("[data-key]");
  editables.forEach(el => {
    const key = el.getAttribute("data-key");
    const saved = localStorage.getItem("portfolio_" + key);
    if (saved) el.innerHTML = saved;
  });

  // Загрузка кастомных карточек
  const savedCards = JSON.parse(localStorage.getItem("portfolio_custom_cards") || "[]");
  const container = document.getElementById("projectsContainer");
  
  function renderCard(data, idx) {
    const drumId = `custom-drum-${idx}`;
    const imagesArray = data.images.split(",").map(s => s.trim()).filter(Boolean);
    const slidesHtml = imagesArray.map(img => `<div class="v-drum-slide"><img src="${img}" alt="Preview" class="drum-img zoomable"></div>`).join("");

    const card = document.createElement("article");
    card.className = "project-card tilt-card fade-in visible";
    card.innerHTML = `
      <div class="v-drum-container">
        <div class="v-drum" id="${drumId}">
          ${slidesHtml || '<div class="v-drum-slide"><img src="3d1.jpg" class="drum-img zoomable"></div>'}
        </div>
        ${imagesArray.length > 1 ? `
        <div class="drum-controls">
          <button class="drum-btn" onclick="scrollDrum('${drumId}', -1)">▲</button>
          <button class="drum-btn" onclick="scrollDrum('${drumId}', 1)">▼</button>
        </div>` : ''}
      </div>
      <div class="project-info">
        <div class="project-meta">${data.category || 'Проект'}</div>
        <h3 class="project-title">${data.title || 'Новый проект'}</h3>
        <p class="project-desc">${data.desc || ''}</p>
      </div>
    `;
    container.appendChild(card);
  }

  savedCards.forEach((c, idx) => renderCard(c, idx));

  // Добавление карточки из админки
  const createBtn = document.getElementById("createProjectBtn");
  if (createBtn) {
    createBtn.addEventListener("click", () => {
      const category = document.getElementById("pCategory").value;
      const title = document.getElementById("pTitle").value;
      const desc = document.getElementById("pDesc").value;
      const images = document.getElementById("pImages").value;

      if (!title) {
        alert("Заполните название проекта!");
        return;
      }

      const newCardData = { category, title, desc, images };
      savedCards.push(newCardData);
      localStorage.setItem("portfolio_custom_cards", JSON.stringify(savedCards));
      renderCard(newCardData, savedCards.length);
      bindImageEvents();

      document.getElementById("pCategory").value = "";
      document.getElementById("pTitle").value = "";
      document.getElementById("pDesc").value = "";
      document.getElementById("pImages").value = "";
      adminModal.classList.remove("active");
      triggerToast("Проект добавлен!");
    });
  }

  // Режим Inline-редактирования
  const toggleInlineBtn = document.getElementById("toggleInlineEditBtn");
  const saveInlineBtn = document.getElementById("saveInlineEditBtn");
  let isInlineMode = false;

  if (toggleInlineBtn && saveInlineBtn) {
    toggleInlineBtn.addEventListener("click", () => {
      isInlineMode = !isInlineMode;
      document.querySelectorAll("[data-key]").forEach(el => {
        el.setAttribute("contenteditable", isInlineMode ? "true" : "false");
      });
      toggleInlineBtn.innerText = isInlineMode ? "Отключить подсветку" : "Включить правку текстов";
      adminModal.classList.remove("active");
      triggerToast(isInlineMode ? "Режим правки включен" : "Режим правки выключен");
    });

    saveInlineBtn.addEventListener("click", () => {
      document.querySelectorAll("[data-key]").forEach(el => {
        el.removeAttribute("contenteditable");
        const key = el.getAttribute("data-key");
        localStorage.setItem("portfolio_" + key, el.innerHTML);
      });
      isInlineMode = false;
      toggleInlineBtn.innerText = "Включить правку текстов";
      adminModal.classList.remove("active");
      triggerToast("Тексты успешно сохранены!");
    });
  }

  // 12. Lightbox Модалка
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
    setTimeout(() => { modalImg.src = ""; }, 350);
  }

  function bindImageEvents() {
    document.querySelectorAll(".drum-img").forEach(img => {
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

  bindImageEvents();

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("active")) closeModal();
      if (adminModal && adminModal.classList.contains("active")) adminModal.classList.remove("active");
    }
  });
});

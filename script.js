// Скролл барабана
window.scrollDrum = function(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const slide = drum.querySelector(".v-drum-slide");
    const height = slide ? slide.offsetHeight : drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
};

// Функция открытия ссылки или копирования
window.handleContactClick = function(e, url) {
  if (url) {
    window.open(url, "_blank");
  }
};

document.addEventListener("DOMContentLoaded", () => {

  // 1. Динамический заголовок при смене вкладки (Page Visibility API)
  const originalTitle = document.title;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      document.title = "✦ Жду возвращения... | Portfolio";
    } else {
      document.title = originalTitle;
    }
  });

  // 2. Отображение локального времени разработчика (UTC+3)
  function updateDevClock() {
    const clockEl = document.getElementById("devClock");
    if (clockEl) {
      const now = new Date();
      const options = {
        timeZone: "Europe/Kyiv", // или "Europe/Moscow" (UTC+3)
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      clockEl.textContent = new Intl.DateTimeFormat("ru-RU", options).format(now);
    }
  }
  updateDevClock();
  setInterval(updateDevClock, 1000);

  // 3. Копирование в буфер обмена по клику (Clipboard API) + Toast уведомление
  const toast = document.getElementById("toast");
  let toastTimer = null;

  function showToast(text) {
    if (!toast) return;
    toast.innerText = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }

  document.querySelectorAll(".copyable").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Скопировано: ${textToCopy}`);
        }).catch(() => {
          showToast("Не удалось скопировать");
        });
      }
    });
  });

  // 4. 3D Tilt-эффект карточек за курсором мыши
  const tiltElements = document.querySelectorAll(".tilt-element");
  tiltElements.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });

  // 5. Интерактивные физические частицы звездного неба на Canvas
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
    const count = Math.floor(Math.min(width, 1400) / 18);
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

        // Физическое отталкивание от курсора
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

        // Отрисовка звезды
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        pCtx.fillStyle = `rgba(168, 195, 255, ${p.baseAlpha})`;
        pCtx.fill();

        // Соединение линий между близкими частицами
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

  // 6. Отрисовка динамического Favicon
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

  // 7. Появление элементов при скролле
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

  // 8. Режим администратора (localStorage)
  const editables = document.querySelectorAll("[data-key]");
  editables.forEach(el => {
    const key = el.getAttribute("data-key");
    const saved = localStorage.getItem("portfolio_" + key);
    if (saved) el.innerHTML = saved;
  });

  const ADMIN_PASS = "1234";
  let isEditing = false;
  const adminBtn = document.getElementById("adminBtn");
  const adminStatus = document.getElementById("adminStatus");

  if (adminBtn) {
    adminBtn.addEventListener("click", () => {
      if (!isEditing) {
        const pass = prompt("Введите PIN для редактирования:");
        if (pass === ADMIN_PASS) {
          isEditing = true;
          adminStatus.innerText = "Режим правки";
          adminBtn.innerText = "Сохранить";
          editables.forEach(el => el.setAttribute("contenteditable", "true"));
        } else if (pass !== null) {
          alert("Неверный PIN");
        }
      } else {
        editables.forEach(el => {
          el.removeAttribute("contenteditable");
          const key = el.getAttribute("data-key");
          localStorage.setItem("portfolio_" + key, el.innerHTML);
        });
        isEditing = false;
        adminStatus.innerText = "Сохранено";
        adminBtn.innerText = "Войти";
        setTimeout(() => { adminStatus.innerText = "Режим просмотра"; }, 2000);
      }
    });
  }

  // 9. Модальное окно и таймер 3 сек.
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");
  const zoomableImages = document.querySelectorAll(".drum-img");

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

  zoomableImages.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(img.src);
    });

    img.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        openModal(img.src);
      }, 3000);
    });

    img.addEventListener("mousemove", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        openModal(img.src);
      }, 3000);
    });

    img.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

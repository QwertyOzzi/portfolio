// Скролл барабана
window.scrollDrum = function(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const slide = drum.querySelector(".v-drum-slide");
    const height = slide ? slide.offsetHeight : drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Динамический Favicon в табе браузера
  const favicon = document.getElementById("dynamic-favicon");
  const canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext("2d");
  let angle = 0;

  function renderDynamicFavicon() {
    ctx.clearRect(0, 0, 32, 32);

    ctx.save();
    ctx.translate(16, 16);
    ctx.rotate(angle);

    // Внешнее кольцо с градиентом
    const grad = ctx.createLinearGradient(-14, -14, 14, 14);
    grad.addColorStop(0, "#2997ff");
    grad.addColorStop(1, "#9d4edd");

    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Внутренний треугольник
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(6, 6);
    ctx.lineTo(-6, 6);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.restore();

    favicon.href = canvas.toDataURL("image/png");
    angle += 0.04;
    requestAnimationFrame(renderDynamicFavicon);
  }

  renderDynamicFavicon();

  // 2. Анимация появления блоков при скролле
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

  // 3. Загрузка сохраненного контента (Admin Panel)
  const editables = document.querySelectorAll("[data-key]");
  editables.forEach(el => {
    const key = el.getAttribute("data-key");
    const saved = localStorage.getItem("portfolio_" + key);
    if (saved) el.innerHTML = saved;
  });

  const ADMIN_PASS = "eff31a14-f8b5-4b34-828b-4d47d565de29";
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

  // 4. Логика модального окна и Hover-таймера на 3 секунды
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

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

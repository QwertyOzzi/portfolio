// Глобальная функция скролла барабана для вызова из onclick
window.scrollDrum = function(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const slide = drum.querySelector(".v-drum-slide");
    const height = slide ? slide.offsetHeight : drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Анимация появления блоков при скролле
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

  // 2. Загрузка сохраненного контента (Режим администратора)
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

  // 3. Логика модального окна и Hover-таймера на 3 секунды
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
    // Открытие кликом
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(img.src);
    });

    // Открытие удержанием курсора без движения 3 секунды
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

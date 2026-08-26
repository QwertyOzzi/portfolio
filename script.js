document.addEventListener("DOMContentLoaded", () => {
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
          adminStatus.innerText = "Режим правки включен";
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

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalClose = document.getElementById("modalClose");
  const zoomableImages = document.querySelectorAll(".zoomable");

  let hoverTimer = null;

  function openImage(src) {
    clearTimeout(hoverTimer);
    modalImg.src = src;
    modal.classList.add("active");
  }

  function closeImage() {
    modal.classList.remove("active");
    setTimeout(() => { modalImg.src = ""; }, 350);
  }

  zoomableImages.forEach(img => {
    img.addEventListener("click", () => openImage(img.src));

    img.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        openImage(img.src);
      }, 3000);
    });

    img.addEventListener("mousemove", () => {
      clearTimeout(hoverTimer);
      hoverTimer = setTimeout(() => {
        openImage(img.src);
      }, 3000);
    });

    img.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeImage);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeImage();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeImage();
    }
  });
});

function scrollDrum(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const height = drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
}

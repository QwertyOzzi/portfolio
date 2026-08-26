document.addEventListener("DOMContentLoaded", () => {
  // Анимация при скролле
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

  // Загрузка сохраненного контента
  const editables = document.querySelectorAll("[data-key]");
  editables.forEach(el => {
    const key = el.getAttribute("data-key");
    const saved = localStorage.getItem("portfolio_" + key);
    if (saved) el.innerHTML = saved;
  });

  // Логика режима администратора
  const ADMIN_PASS = "1234"; // Задайте свой PIN-код
  let isEditing = false;
  const adminBtn = document.getElementById("adminBtn");
  const adminStatus = document.getElementById("adminStatus");

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
      // Сохранение изменений
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
});

// Функция прокрутки барабана
function scrollDrum(drumId, direction) {
  const drum = document.getElementById(drumId);
  if (drum) {
    const height = drum.clientHeight;
    drum.scrollBy({ top: direction * height, behavior: "smooth" });
  }
}

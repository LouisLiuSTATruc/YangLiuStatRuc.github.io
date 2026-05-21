const year = document.querySelector("[data-year]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const currentPage = document.body.dataset.page;

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

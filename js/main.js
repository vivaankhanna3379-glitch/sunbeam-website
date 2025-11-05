
// mobile nav toggle
const toggle = document.getElementById("mobileNavToggle");
const mobileNav = document.getElementById("mobileNav");

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);
    mobileNav.setAttribute("aria-hidden", expanded);
    mobileNav.classList.toggle("open");
  });
}

// update year in footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// basic contact form handler – prevents blank submit
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! We'll get back to you within 1 business day.");
  });
}

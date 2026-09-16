// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("is-open"));
    });
  }

  // Pre-select a service on the booking form when arriving via
  // services.html?service=... links.
  const serviceSelect = document.querySelector("#service");
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("service");
    if (requested) {
      const match = Array.from(serviceSelect.options).find(
        (opt) => opt.value === requested
      );
      if (match) serviceSelect.value = requested;
    }
  }

  // Footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

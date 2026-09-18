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

  // Starfields — scattered, individually twinkling stars
  function buildStarfield(el, count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      const size = (Math.random() * 2 + 1).toFixed(1);
      star.style.setProperty("--x", `${(Math.random() * 100).toFixed(2)}%`);
      star.style.setProperty("--y", `${(Math.random() * 100).toFixed(2)}%`);
      star.style.setProperty("--s", `${size}px`);
      star.style.setProperty("--dur", `${(Math.random() * 2.5 + 1.8).toFixed(2)}s`);
      star.style.setProperty("--delay", `${(Math.random() * 4).toFixed(2)}s`);
      frag.appendChild(star);
    }
    el.appendChild(frag);
  }

  document.querySelectorAll("[data-starfield]").forEach((el) => {
    const count = parseInt(el.dataset.starfield, 10) || 60;
    buildStarfield(el, count);
  });

  // Hero photo changer — crossfades through real Santa photos
  const changer = document.querySelector("#photo-changer");
  if (changer) {
    const slides = changer.querySelectorAll(".photo-changer__img");
    if (slides.length > 1) {
      let current = 0;
      setInterval(() => {
        slides[current].classList.remove("is-active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("is-active");
      }, 4500);
    }
  }
});

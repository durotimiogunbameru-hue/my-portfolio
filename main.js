// ===== Current year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Nav: shadow on scroll =====
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// ===== Mobile menu toggle =====
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
const closeMenu = () => {
  links.classList.remove("open");
  toggle.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
};
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

// ===== Scroll-reveal =====
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// ===== Active nav link on scroll (scroll spy) =====
const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = new Map(
  [...document.querySelectorAll('.nav__links a[href^="#"]')].map((a) => [
    a.getAttribute("href").slice(1),
    a,
  ])
);
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navAnchors.forEach((a) => a.classList.remove("active"));
          navAnchors.get(e.target.id)?.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

// モバイルメニュー
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-open");
    nav.classList.toggle("is-open");
  });
}

// FAQ アコーディオン
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  if (question) {
    question.addEventListener("click", () => {
      item.classList.toggle("is-open");
    });
  }
});

// スクロール時のフェードイン（IntersectionObserver）
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-up");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".feature-card, .price-card, .work-card, .flow-step, .contact-card").forEach((el) => {
  observer.observe(el);
});

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Swiper === "undefined") return;

  const swiperEl = document.querySelector(".mySwiper");
  if (!swiperEl) return;

  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 600,
    loop: true,

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
});

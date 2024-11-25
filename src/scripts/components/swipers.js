import Swiper from "swiper/bundle";

const partnersIndexSwiper = new Swiper(".index .partners__swiper", {
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: ".partners__slider-button--next",
    prevEl: ".partners__slider-button--prev",
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    769: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

const partnersConferenceSwiper = new Swiper(".conference .partners__swiper", {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".partners__swiper-button--next",
    prevEl: ".partners__swiper-button--prev",
  },
});

const headerReportSwiper = new Swiper(".header__swiper", {
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".header__swiper-pagination",
  },

  navigation: {
    nextEl: ".header__swiper-button--next",
    prevEl: ".header__swiper-button--prev",
  },
});

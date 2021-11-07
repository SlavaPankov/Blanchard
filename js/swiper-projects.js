'use strict';
document.addEventListener('DOMContentLoaded', () => {
  var swiper = new Swiper('.mySwiper-3', {
    navigation: {
      nextEl: '.projects-btn-next',
      prevEl: '.projects-btn-prev',
    },

    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints: {

      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },

      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },

      580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      }
    }
  });
});

'use strict';
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.gallery .swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
  },
  grid: {
    rows: 2,
    fill: 'row',
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  breakpoints: {
    1440 : {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 0
    }
  },

  a11y: false
});


'use strict';
document.addEventListener('DOMContentLoaded', () => {

//   let swiper = new Swiper('.mySwiper-5', {
//     pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//   },

//   slidesPerView: 1,
//   spaceBetween: 0,

//   breakpoints: {
//     1440: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//       spaceBetween: 50,
//       // grid: {
//       //   rows: 2,
//       //   fill: 'row',
//       // }
//     },

//     1024: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//       spaceBetween: 27,
//       grid: {
//         rows: 2,
//         fill: 'row'
//       },
//     },

//     1000: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//       spaceBetween: 27,
//       grid: {
//         rows: 3,
//         fill: 'row'
//       },
//     },

//     768: {
//       grid: {
//         rows: 3,
//         fill: 'row'
//       },

//       slidesPerView: 2,
//       slidesPerGroup: 2,
//       spaceBetween: 34,
//     },

//     580: {
//       grid: {
//         rows: 1,
//         fill: 'row'
//       },

//       slidesPerView: 1,
//       slidesPerGroup: 1,
//       spaceBetween: 0,
//     },

//     320: {
//       slidesPerView: 1,
//       spaceBetween: 0
//     }
//   }
//   });

    const MAX_MOBILE_WIDTH = 580;

    const sliderMobileParams = {
      cardsContainerName: 'events__slider',
      cardsWrapName: 'events__slides-wrap',
      card: 'events__slide'
    };

    function getWindowWidth () {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateMobileSlider (params) {
      const pagination = document.createElement("div");
      pagination.classList.add(params.paginationClassName);
      params.cardsContainer.append(pagination);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");


      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.events__swiper-pagination'
        },

        on: {
          beforeInit() {
            document
              .querySelectorAll(`.${params.card}`)
              .forEach((el) => {
                el.classList.add("swiper-slide");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

          }
        }
      });
    }

    function destroyMobileSlider (params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidthMobile (params) {
      const currentWidth = getWindowWidth();
      params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (currentWidth <= MAX_MOBILE_WIDTH && (!params.cardsSlider || params.cardsSlider.destroyed)) {
        activateMobileSlider(params);
      } else if (
        currentWidth >= MAX_MOBILE_WIDTH &&
        params.cardsSlider
      ) {
        destroyMobileSlider(params);
      }
    }

    checkWindowWidthMobile(sliderMobileParams);

    window.addEventListener('resize', function () {
      checkWindowWidthMobile(sliderMobileParams);
    });

  });

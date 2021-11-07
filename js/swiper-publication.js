'use strict';

const MOBILE_WIDTH = 580;

    const sliderParamsNotMobile = {
      sliderWrap: 'js-slider-main',
      cardsContainerName: "js-slider",
      cardsWrapName: "js-slides-wrap",
      card: "publication__slide",
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateSlider(params) {


      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 3,
        spaceBetween: 50,
        grid: {
          rows: 1,
          fill: 'row',
        },

        breakpoints: {

              1440: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },

              1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 49,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },

              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
                grid: {
                  rows: 1,
                  fill: 'row',
                },
              },

              580: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
              },

              320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 30,
              }
            },

        pagination: {
          el: '.publication__swiper-pagination',
          type: 'fraction',
        },
        navigation: {
          nextEl: '.publication-btn-next',
          prevEl: '.publication-btn-prev',
        },



        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
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

    function destroySlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function checkWindowWidth(params) {
      const currentWidth = getWindowWidth();
      params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth > MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateSlider(params);
      } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
        destroySlider(params);
      }
    }

    checkWindowWidth(sliderParamsNotMobile);

    window.addEventListener("resize", function () {
      checkWindowWidth(sliderParamsNotMobile);
    });

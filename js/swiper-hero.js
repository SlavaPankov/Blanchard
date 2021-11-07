'use strict';
document.addEventListener('DOMContentLoaded', () => {
  let heroSlider = new Swiper('.hero__swiper-container', {
    loop: true,
    effect: 'slide',
    noSwiping: false,
    grabCursor: true,
    IOSEdgeSwipeDetection: true,
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: true,
    simulateTouch: true,
    speed: 1000,
    observer: true,
    observeParents: true,
    parallax: true,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
  });
});

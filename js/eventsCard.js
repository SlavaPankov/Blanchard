'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // events card

  let cards = document.querySelectorAll('.events__card');

  for (let i = 0; i < cards.length; ++i) {
    if (i > 2) {
      cards[i].classList.add('events__card-hide');
    }
    if (document.documentElement.clientWidth <= 1000) {
      cards[2].classList.add('events__card-hide');
    }
    if (document.documentElement.clientWidth > 1000) {
      cards[2].classList.remove('events__card-hide');
    }
    if (document.documentElement.clientWidth <= 580) {
      cards[i].classList.remove('events__card-hide');
      cards[2].classList.remove('events__card-hide');
    }
  }

  window.addEventListener('resize', () => {
    cards.forEach((item, index) => {
      if (index > 2) {
        cards[index].classList.add('events__card-hide');
      }
      if (document.documentElement.clientWidth <= 1000) {
        cards[2].classList.add('events__card-hide');
      }
      if (document.documentElement.clientWidth > 1000) {
        cards[2].classList.remove('events__card-hide');
      }
      if (document.documentElement.clientWidth <= 580) {
        cards[index].classList.remove('events__card-hide');
        cards[2].classList.remove('events__card-hide');
      }
    });
  });

  let uncoverBtn = document.querySelector('.events__uncover-btn');

  uncoverBtn.addEventListener('click', ()=>{
    for (let i = 0; i < cards.length; ++i) {
      if (i > 2) {
        cards[i].classList.remove('events__card-hide');
        cards[2].classList.remove('events__card-hide');
      }
    }
    uncoverBtn.remove();
  });
});


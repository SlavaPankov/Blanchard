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

  // checkbox

  const check = document.querySelectorAll('.custom-checkbox');
  const checkInput = document.querySelectorAll('.check');

  for (let i = 0; i < check.length; ++i) {
    check[i].addEventListener('click', (e) => {
      e.target.classList.toggle('custom-checkbox__checked');
    });
  }

  for (let i = 0; i < checkInput.length; ++i) {
    checkInput[i].addEventListener('focus', (e) => {
      check[i].classList.add('custom-checkbox__checked');
    });
    checkInput[i].addEventListener('blur', (e) => {
      check[i].classList.remove('custom-checkbox__checked');
    });
  }

  check.forEach(item => {
    item.addEventListener('click', () => {
      console.log(item.children[0]);
      if (item.children[0].classList.contains('custom-checkbox__checked')) {
        item.style.color = '#c283f3';
      } else {
        item.style.color = '#fff';
      }
    });
  });

  // publication categories 580px, 320px

  const listHeading = document.querySelector('.publication__list-heading');
  const checkList = document.querySelector('.publication__list');
  const checkListItem = document.querySelectorAll('.publication__item');
  const checkBox = document.querySelectorAll('.check');
  const cross = document.querySelectorAll('.cross');



  function openList() {
    listHeading.classList.add('is-open');
    checkListItem.forEach(item => {
      item.classList.add('publication__item-active');
      item.removeEventListener('click', clickInputItem);
    });
    checkBox.forEach(elem => {
      elem.addEventListener('click', () => {
        if (elem.checked) {
          elem.parentNode.parentNode.classList.add('is-check');
        } else {
          elem.parentNode.parentNode.classList.remove('is-check');
        }
      });
    });
    listHeading.removeEventListener('click', openList);
    listHeading.addEventListener('click', closeList);
  }

  function clickInputItem() {
    checkListItem.forEach( item => {
      if (item.classList.contains('is-check')) {
        item.classList.add('publication__item-active');
      } else {
        item.classList.remove('publication__item-active');
      }
    });
  }

  function closeList() {
    listHeading.classList.remove('is-open');
    checkListItem.forEach(item => {
      if (!item.classList.contains('is-check')) {
        item.classList.remove('publication__item-active');
      } else {
        console.log('asd')
      }
      item.addEventListener('click', clickInputItem);
    });
    listHeading.removeEventListener('click', closeList);
    listHeading.addEventListener('click', openList);
  }

  listHeading.addEventListener('click', openList);
  listHeading.addEventListener('keydown', (e) => {
    if (e.which === 32 || e.which === 13) {
      openList();
    }
  });


  checkBox.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      if (checkBox[index].checked) {
        cross[index].classList.add('cross-active');
      } else {
        cross[index].classList.remove('cross-active');
      }
    });
  });
});


'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const catalogBtn = document.querySelectorAll('.catalog__tab-btn');
  const painterLists = document.querySelectorAll('.painter-list');
  const painterNames = document.querySelectorAll('.painter-list__item');
  const painetLink = document.querySelectorAll('.painter-list__name');
  const painter = document.querySelectorAll('.painter');
  const painterUnknow = document.querySelector('.painter-unknow');
  const painterLink = document.querySelectorAll('.painter-list__name');
  const accordion = document.querySelectorAll('.catalog__accordion');

  painterLink.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

    });
    item.addEventListener('keydown', e => {
      console.log(e);
    });
  });

  catalogBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.path;
      catalogBtn.forEach(i => {
        i.classList.remove('catalog__tab-btn_active');
      })
      accordion.forEach(elem => {
        elem.classList.remove('catalog__accordion-active');
        if (elem.dataset.target === e.currentTarget.dataset.path) {
          e.currentTarget.classList.add('catalog__tab-btn_active');
          elem.classList.add('catalog__accordion-active');
        }
      });
      painterLists.forEach(list => {
        list.children.forEach(child => {
          child.children[0].classList.remove('painter-list__item-active');
        });
        list.children[0].children[0].classList.add('painter-list__item-active')
        if (e.currentTarget.dataset.path === list.dataset.target) {
          painter.forEach(name => {
            name.classList.remove('catalog__painter-active');
            if(list.children[0].dataset.path === name.dataset.target) {
              list.children[0].classList.add('painter-list__item-active');
              painterUnknow.classList.remove('painter-unknow-active');
              name.classList.add('catalog__painter-active');
            } else {
              list.children[0].classList.add('painter-list__item-active');
              painterUnknow.classList.add('painter-unknow-active');
            }
          });
        }
      });
    });
  });

  painterNames.forEach(name => {
    name.addEventListener('click', e => {
      const namePath = e.currentTarget.dataset.path;
      painterNames.forEach(item => {
        item.classList.remove('painter-list__item-active');
      });
      painetLink.forEach(link => {
        link.classList.remove('painter-list__item-active');
      });
      name.children[0].classList.add('painter-list__item-active')
      painter.forEach(item => {
        item.classList.remove('catalog__painter-active');
        if (item.dataset.target === name.dataset.path) {
          painterUnknow.classList.remove('painter-unknow-active');
          item.classList.add('catalog__painter-active');
        } else {
          painterUnknow.classList.add('painter-unknow-active');
        }
      });
    });
  });
});


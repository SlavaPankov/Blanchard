'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Бургер
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger-menu');
  const line1 = document.querySelector('.line-1');
  const line2 = document.querySelector('.line-2');
  const line3 = document.querySelector('.line-3');

  burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active');
    line1.classList.toggle('line-1--active');
    line2.classList.toggle('line-2--active');
    line3.classList.toggle('line-3--active');
  });

  // Поиск
  const searchBlock = document.querySelector('.header__search-loupe');
  const searchLoupe = document.querySelector('.loupe');
  const searchInput = document.querySelector('.header__search--1024px');
  const crosss = document.querySelector('.header__search-cross');
  const logo = document.querySelector('.header__top-link');
  const contain = document.querySelector('.header__search-contain');

  if (document.documentElement.clientWidth > 768) {
    searchLoupe.addEventListener('click', () => {
      searchInput.classList.toggle('header__search-active');
      searchLoupe.classList.toggle('header__search-loupe--1024px--active');
      searchBlock.classList.toggle('header__search-background');
    });
  }

  if (document.documentElement.clientWidth <= 768) {
    searchLoupe.addEventListener('click', () => {
      searchInput.classList.add('header__search-active');
      searchBlock.classList.add('header__search-768px');
      burgerBtn.classList.add('burger-btn-none');
      logo.classList.add('header__top-link-none');
      crosss.classList.add('search__cross--320px-active');
      contain.classList.add('header__search-contain-active');
    });
    crosss.addEventListener('click', () => {
      searchInput.classList.remove('header__search-active');
      searchBlock.classList.remove('header__search-768px');
      burgerBtn.classList.remove('burger-btn-none');
      logo.classList.remove('header__top-link-none');
      crosss.classList.remove('search__cross--320px-active');
      contain.classList.remove('header__search-contain-active');
    });
  }

  window.addEventListener('resize', () => {
    if(document.documentElement.clientWidth <= 768) {
      console.log('<768')
      searchLoupe.addEventListener('click', () => {
        searchInput.classList.add('header__search-active');
        searchBlock.classList.add('header__search-768px');
        burgerBtn.classList.add('burger-btn-none');
        logo.classList.add('header__top-link-none');
        crosss.classList.add('search__cross--320px-active');
        contain.classList.add('header__search-contain-active');
      });
      crosss.addEventListener('click', () => {
        searchInput.classList.remove('header__search-active');
        searchBlock.classList.remove('header__search-768px');
        burgerBtn.classList.remove('burger-btn-none');
        logo.classList.remove('header__top-link-none');
        crosss.classList.remove('search__cross--320px-active');
        contain.classList.remove('header__search-contain-active');
      });
    }
  });

});

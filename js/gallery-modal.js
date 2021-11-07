'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Модалка

   const close = document.querySelector('.gallery__modal-close');
   const fade = document.querySelector('.modal-background');
   let slide = document.querySelectorAll('.gallery__swiper-slide');
   let modal = document.querySelectorAll('.gallery__modal');


   close.addEventListener('click', () => {
     for (let item of modal) {
       item.classList.toggle('gallery__modal-active');
       fade.classList.toggle('modal-background-active');
     }
   });

   fade.addEventListener('click', () => {
     for (let item of modal) {
       item.classList.toggle('gallery__modal-active');
       fade.classList.toggle('modal-background-active');
     }
   });

  slide.forEach((item, index) => {
     item.addEventListener('click', () => {
       modal.forEach(modal => {
         if (item.dataset.target === modal.dataset.path) {
           modal.classList.add('gallery__modal-active');
           fade.classList.add('modal-background-active');
         }
       });
     });
     item.addEventListener('keydown', (e) => {
      if (e.which === 13) {
        modal.forEach(modal => {
          if (item.dataset.target === modal.dataset.path) {
            modal.classList.add('gallery__modal-active');
            fade.classList.add('modal-background-active');
          }
        });
      }
     });
  });

  modal.forEach(item => {
    document.addEventListener('keydown', (e) => {
      if (e.which === 27) {
        item.classList.remove('gallery__modal-active');
        fade.classList.remove('modal-background-active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const listItem = document.querySelectorAll('.painter-list__item');
  const painter = document.querySelector('.painter');
  const painterUnknow = document.querySelector('.painter-unknow');

  listItem.forEach(item => {
    item.addEventListener('click', () => {
      painter.scrollIntoView();
      painterUnknow.scrollIntoView();
    });
  });

});

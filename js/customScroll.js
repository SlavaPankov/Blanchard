document.addEventListener('DOMContentLoaded', () => {
  let list = document.querySelectorAll('.choices__list--dropdown')
    for (let i = 0; i < list.length; ++i) {
      if (i <= 4) {
      new SimpleBar(list[i]);
      }
      list[list.length - 1].id = 'gallery__list--dropdown'
    }

    let choicesList = document.querySelectorAll('.choices__inner');
    for (let i = 0; i < choicesList.length; ++i) {
      choicesList[i].id = 'choices__inner-' + i;
    }
    let choices = document.querySelectorAll('.choices');
    for (let i = 0; i < choices.length; ++i) {
      choices[i].id = 'choices-' + i;
    }
});

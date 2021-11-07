'use strict';



document.addEventListener('DOMContentLoaded', () => {


  //  Кастомный скролл

  let list = document.querySelectorAll('.choices__list--dropdown');
    for (let i = 0; i < list.length; ++i) {
      if (i <= 4) {
      new SimpleBar(list[i]);
      }
      list[list.length - 1].id = 'gallery__list--dropdown';
    }

    let choicesList = document.querySelectorAll('.choices__inner');
    for (let i = 0; i < choicesList.length; ++i) {
      choicesList[i].id = 'choices__inner-' + i;
    }
    let choices = document.querySelectorAll('.choices');
    for (let i = 0; i < choices.length; ++i) {
      choices[i].id = 'choices-' + i;
    }


  // Аккордион
  $( function() {
    $('#accordion-italy').accordion({
      active: 0,
      heightStyle: 'content',
      icons: false,
      collapsible: true
    });
    $('#accordion-france').accordion({
      active: 0,
      heightStyle: 'content',
      icons: false,
      collapsible: true
    });
    $('#accordion-germany').accordion({
      active: 0,
      heightStyle: 'content',
      icons: false,
      collapsible: true
    });
    $('#accordion-russia').accordion({
      active: 0,
      heightStyle: 'content',
      icons: false,
      collapsible: true
    });
    $('#accordion-belgium').accordion({
      active: 0,
      heightStyle: 'content',
      icons: false,
      collapsible: true
    });
  });

  // Валидация формы

  let selector = document.querySelector('input[type="tel"]');
  let im = new Inputmask('+7 (999)-999-99-99');

  im.mask(selector);

  new JustValidate('.form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
        strength: {
          custom: '^([a-zA-Z]{2,}\s[a-zA-Z]{1,}\'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)'
        }
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        }
      },
    },
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Слишком короткое имя',
        strength: 'Недопустимый формат',
      },
      tel: 'Укажите ваш телефон',
    },
    colorWrong: '#d11616'
  });


  // Яндекс карты

  // Функция ymaps.ready() будет вызвана, когда
    // [48.872185073737896,2.354223999999991]е когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
      // Создание карты.
      var myMap = new ymaps.Map('map', {
          center: [55.75537131586001,37.60131429218525],
          zoom: 14,
          controls: ['geolocationControl', 'zoomControl']
        },
        {
          suppressMapOpenBlock: true,
          geolocationControlSize: "large",
          geolocationControlPosition:  { top: "450px", right: "20px" },
          geolocationControlFloat: 'none',
          zoomControlSize: "small",
          zoomControlFloat: "none",
          zoomControlPosition: { top: "350px", right: "20px" }
        });

        const myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
          iconContent: '12'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/1920/mark.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [0, 0],
        });

        myMap.geoObjects
        .add(myPlacemark);

        }



  // Плавный скролл галерея

  const listItem = document.querySelectorAll('.painter-list__item');
  const painter = document.querySelector('.painter');
  const painterUnknow = document.querySelector('.painter-unknow');

  listItem.forEach(item => {
    item.addEventListener('click', () => {
      painter.scrollIntoView();
      painterUnknow.scrollIntoView();
    });
  });

// TOOLTIPS

  tippy('#tooltip-1', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'purple',
  });
  tippy('#tooltip-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'purple',
  });
  tippy('#tooltip-3', {
    content: 'В стремлении повысить качество',
    theme: 'purple',
  });

});

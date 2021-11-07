'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
});

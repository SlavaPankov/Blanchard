document.addEventListener('DOMContentLoaded', () => {
  var selector = document.querySelector('input[type="tel"]');
    var im = new Inputmask('+7 (999)-999-99-99');

    im.mask(selector);

    new JustValidate('.form', {
      rules: {
        name: {
          custom: 'Слава',
          required: true,
          minLength: 2,
          maxLength: 30,
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10;
          }
        },
      },
      messages: {
        name: {
          // required: "Как вас зовут?",
          minLength: 'Ввелите больше 2-х символов',
          custom: 'Недопустимый формат'
        },
        tel: "Укажите ваш телефон",
      },
      colorWrong: '#d11616'
    });
})

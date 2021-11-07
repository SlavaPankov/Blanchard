document.addEventListener('DOMContentLoaded', () => {
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
})

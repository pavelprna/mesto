const initialElements = [
  {
    name: 'Каир',
    link: './images/element-cairo.jpg',
  },
  {
    name: 'Острова Гили Траванган',
    link: './images/element-gili-trawangan.jpg',
  },
  {
    name: 'Голд-Кост',
    link: './images/element-gold-coast.jpg',
  },
  {
    name: 'Гуанахуанто',
    link: './images/element-guanajuato.jpg',
  },
  {
    name: 'Сан-Франциско',
    link: './images/element-san-francisco.jpg',
  },
  {
    name: 'Венеция',
    link: './images/element-venice.jpg',
  },
];

const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible'
};

export { initialElements, formConfig };

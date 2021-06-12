import cairoImage from '../images/element-cairo.jpg';
import giliImage from '../images/element-gili-trawangan.jpg';
import coastImage from '../images/element-gold-coast.jpg';
import guanajuantoImage from '../images/element-guanajuato.jpg';
import sanFranciscoImage from '../images/element-san-francisco.jpg';
import veniceImage from '../images/element-venice.jpg';

export const initialElements = [
  {
    name: 'Каир',
    link: cairoImage,
  },
  {
    name: 'Острова Гили Траванган',
    link: giliImage,
  },
  {
    name: 'Голд-Кост',
    link: coastImage,
  },
  {
    name: 'Гуанахуанто',
    link: guanajuantoImage,
  },
  {
    name: 'Сан-Франциско',
    link: sanFranciscoImage,
  },
  {
    name: 'Венеция',
    link: veniceImage,
  },
];

export const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};

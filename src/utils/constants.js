export const formConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_visible',
};

export const cardConfig = {
  cardSelector: '#card-element',
  cardListSection: '.elements__list',
  imageSelector: '.element__image',
  titleSelector: '.element__title',
  listItemSelector: '.elements__list-item',
  removeButtonSelector: '.element__remove-button',
  likeSelector: '.like__button',
  likeCounterSelector: '.like__counter',
  activeLikeClass: 'like__button_active'
};

export const popupWithImageConfig = {
  imagePopupSelector: '.popup_content_place-image',
  imageSelector: '.view-fullscreen__image',
  captionSelector: '.view-fullscreen__caption',
}

export const profilePopupConfig = {
  profilePopupSelector: '.popup_content_edit-profile',
  profileForm: document.querySelector('.form[name = edit-profile-form]'),
  userNameInput: document.querySelector('.form__input[name = name]'),
  userAboutInput: document.querySelector('.form__input[name = about]'),
}

export const newCardPopupConfig = {
  newCardPopupSelector: '.popup_content_new-card',
  newCardForm: document.querySelector('.form[name = add-card-form]')
}

export const popupConfig = {
  openedClass: 'popup_opened',
  closeButtonSelector: '.popup__close',
}

export const profileConfig = {
  userNameSelector: '.profile__title',
  userAboutSelector: '.profile__subtitle',
}

export const profileButton = document.querySelector('.profile__edit-button');
export const newCardButton = document.querySelector('.profile__add-button');

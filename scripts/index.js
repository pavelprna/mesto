import Section from "./Section.js";
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const cardListSection = '.elements__list';
const imagePopupSelector = '.popup_content_place-image';
const profilePopupSelector = '.popup_content_edit-profile';
const userInfoSelector = '.profile';

// -------------------------------------- //

import { formConfig, initialElements } from "./constants.js";
import FormValidator from "./FormValidator.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileForm = document.querySelector('.form[name = edit-profile-form]')
const userNameSelector = '.profile__title';
const userAboutSelector = '.profile__subtitle';
const userNameInput = document.querySelector('.form__input[name = name]')
const userAboutInput = document.querySelector('.form__input[name = about]')

const addNewCardButton = document.querySelector('.profile__add-button');
const newCardPopupSelector = '.popup_content_new-card';
const newCardForm = document.querySelector('.form[name = add-card-form]')
const placeNameInput = document.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = document.querySelector('.form__input[name = place-link-input]');

// enable validation for all forms:
const editProfileValidator = new FormValidator(formConfig, editProfileForm);
editProfileValidator.enableValidation();
const addNewCardValidator = new FormValidator(formConfig, newCardForm);
addNewCardValidator.enableValidation();


// render card list:
const cardList = new Section({
  items: initialElements,
  renderer: (item) => {
    const card = new Card(item, '#card-element', (item) => {
      const imagePopup = new PopupWithImage(item, imagePopupSelector);
      imagePopup.setEventListeners();
      imagePopup.open();
    });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardListSection);

cardList.renderItems();

// user info:
const userInfo = new UserInfo(userNameSelector, userAboutSelector);


// profile popup:
const profilePopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  userInfo.setUserInfo(inputValues);

  profilePopup.close();
});

profilePopup.setEventListeners();

editProfileButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();

  userNameInput.value = name;
  userAboutInput.value = about;

  editProfileValidator.clearInputErrors();
  profilePopup.open();
});

// new card popup:
const newCardPopup = new PopupWithForm(newCardPopupSelector, (inputValues) => {
  const card = new Card(inputValues, '#card-element')
})
function handleNewCardSubmit(evt) {
  evt.preventDefault();
  renderCard({
    name: placeNameInput.value,
    link: placeLinkInput.value,
  });
  closePopup(newCardPopup);
}

addNewCardButton.addEventListener('click', () => {
  newCardForm.reset();
  addNewCardValidator.clearInputErrors();
  openPopup(newCardPopup);
});

// newCardPopup.addEventListener('submit', handleNewCardSubmit);


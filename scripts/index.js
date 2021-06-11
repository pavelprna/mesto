import Section from "./Section.js";
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const cardListSection = '.elements__list';
const imagePopupSelector = '.popup_content_place-image';
const profilePopupSelector = '.popup_content_edit-profile';

// -------------------------------------- //

import { formConfig, initialElements } from "./constants.js";
import FormValidator from "./FormValidator.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileForm = document.querySelector('.form[name = edit-profile-form]')
// const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
// const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_content_new-card');
const newCardForm = document.querySelector('.form[name = add-card-form]')
const placeNameInput = newCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = newCardPopup.querySelector('.form__input[name = place-link-input]');

// enable validation for all forms:
const editProfileValidator = new FormValidator(formConfig, editProfileForm);
editProfileValidator.enableValidation();
const addNewCardValidator = new FormValidator(formConfig, newCardForm);
addNewCardValidator.enableValidation();

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



function handleNewCardSubmit(evt) {
  evt.preventDefault();
  renderCard({
    name: placeNameInput.value,
    link: placeLinkInput.value,
  });
  closePopup(newCardPopup);
}

const profilePopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  const { name, job } = inputValues;

  // TODO: send data to UserInfo

  profilePopup.close();
});

profilePopup.setEventListeners();

editProfileButton.addEventListener('click', () => {

  // TODO: accept data from UserInfo

  editProfileValidator.clearInputErrors();
  profilePopup.open();
});


addNewCardButton.addEventListener('click', () => {
  newCardForm.reset();
  addNewCardValidator.clearInputErrors();
  openPopup(newCardPopup);
});

newCardPopup.addEventListener('submit', handleNewCardSubmit);


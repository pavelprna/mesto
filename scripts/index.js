import Section from "./Section.js";
import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

const cardListSection = '.elements__list';
const imagePopupSelector = '.popup_content_place-image';

// -------------------------------------- //

import {formConfig, initialElements} from "./constants.js";
import FormValidator from "./FormValidator.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_content_edit-profile');
const editProfileForm = document.querySelector('.form[name = edit-profile-form]')
const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const newCardPopup = document.querySelector('.popup_content_new-card');
const newCardForm = document.querySelector('.form[name = add-card-form]')
const placeNameInput = newCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = newCardPopup.querySelector('.form__input[name = place-link-input]');

const editProfileValidator = new FormValidator(formConfig, editProfileForm);
editProfileValidator.enableValidation();
const addNewCardValidator = new FormValidator(formConfig, newCardForm);
addNewCardValidator.enableValidation();

const cardList = new Section({
  items: initialElements,
  renderer: (item) => {
    const card = new Card(item, '#card-element', (item) => {
      const imagePopup = new PopupWithImage(item, imagePopupSelector);
      imagePopup.open();
    });
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, cardListSection);

cardList.renderItems();



// function openPopup(popup) {
//   document.addEventListener('keydown', closePopupByEsc);
//   popup.classList.add('popup_opened');
// }

// function closePopup(popup) {
//   document.removeEventListener('keydown', closePopupByEsc);
//   popup.classList.remove('popup_opened');
// }

// function closeOpenedPopup() {
//   const openedPopup = document.querySelector('.popup_opened');
//   closePopup(openedPopup);
// }

// function closePopupByEsc(evt) {
//   if (evt.key === 'Escape') closeOpenedPopup();
// }

// function closePopupByOverlay(evt) {
//   if (evt.target === evt.currentTarget) closeOpenedPopup();
// }

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function handleNewCardSubmit(evt) {
  evt.preventDefault();
  renderCard({
    name: placeNameInput.value,
    link: placeLinkInput.value,
  });
  closePopup(newCardPopup);
}

// function viewElementImage() {
//   const imagePopup = new PopupWithImage(imagePopupSelector);
//
//   imagePopup.open()
  // fullScreenImage.src = link;
  // fullScreenImage.alt = name;
  // imagePopup.querySelector('.view-fullscreen__caption').textContent = name;
  // openPopup(imagePopup);
// }

// function setClosePopupEventListeners(popupList) {
//   popupList.forEach((popup) => {
//     const closePopupButton = popup.querySelector('.popup__close')
//     closePopupButton.addEventListener('click', () => {
//       closePopup(popup);
//     });
//     popup.addEventListener('click', closePopupByOverlay);
//   });
// }

editProfileButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  editProfileValidator.clearInputErrors();
  openPopup(editProfilePopup);
});

editProfilePopup.addEventListener('submit', handleEditProfileSubmit);

addNewCardButton.addEventListener('click', () => {
  newCardForm.reset();
  addNewCardValidator.clearInputErrors();
  openPopup(newCardPopup);
});

newCardPopup.addEventListener('submit', handleNewCardSubmit);

// setClosePopupEventListeners(popupList);

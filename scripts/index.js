import Card from "./Card.js";
import { initialElements, formConfig } from "./constants.js";
import FormValidator from "./FormValidator.js";

const popupList = Array.from(document.querySelectorAll('.popup'));

const elementsList = document.querySelector('.elements__list');

const viewFullImagePopup = document.querySelector('.popup_content_place-image');

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_content_edit-profile');
const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_content_new-card');
const placeNameInput = addNewCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = addNewCardPopup.querySelector('.form__input[name = place-link-input]');

initialElements.forEach((element) => {
  const card = new Card(element, '#card-element', viewElementImage);
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
});

function openPopup(popup) {
  document.addEventListener('keydown', closePopupByEsc);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupByEsc);
  popup.classList.remove('popup_opened');
}

function closeOpenedPopup() {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
}

function closePopupByEsc(evt) {
  if (evt.key === 'Escape') closeOpenedPopup();
}

function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) closeOpenedPopup();
}

function handleEditProfileSubmitButton(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(editProfilePopup);
}

function handleNewCardSubmitButton(evt) {
  evt.preventDefault();
  const card = new Card({
    name: placeNameInput.value,
    link: placeLinkInput.value,
  }, '#card-element');
  const cardElement = card.generateCard();
  elementsList.prepend(cardElement);
  closePopup(addNewCardPopup);
}

function viewElementImage(name, link) {
  const fullScreenImage = viewFullImagePopup.querySelector('.view-fullscreen__image');
  fullScreenImage.src = link;
  fullScreenImage.alt = name;
  viewFullImagePopup.querySelector('.view-fullscreen__caption').textContent = name;
  openPopup(viewFullImagePopup);
}

function setClosePopupEventListeners(popupList) {
  popupList.forEach((popup) => {
    const closePopupButton = popup.querySelector('.popup__close')
    closePopupButton.addEventListener('click', () => {
      closePopup(popup);
    });
    popup.addEventListener('click', closePopupByOverlay);
  });
}

editProfileButton.addEventListener('click', () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(editProfilePopup);
});

editProfilePopup.addEventListener('submit', handleEditProfileSubmitButton);

addNewCardButton.addEventListener('click', () => {
  placeNameInput.value = '';
  placeLinkInput.value = '';
  openPopup(addNewCardPopup);
});

addNewCardPopup.addEventListener('submit', handleNewCardSubmitButton);

setClosePopupEventListeners(popupList);

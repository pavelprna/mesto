import './index.css';
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { formConfig, initialElements } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";

const cardListSection = '.elements__list';
const imagePopupSelector = '.popup_content_place-image';
const profilePopupSelector = '.popup_content_edit-profile';
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileForm = document.querySelector('.form[name = edit-profile-form]')
const userNameSelector = '.profile__title';
const userAboutSelector = '.profile__subtitle';
const userNameInput = document.querySelector('.form__input[name = name]')
const userAboutInput = document.querySelector('.form__input[name = about]')
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopupSelector = '.popup_content_new-card';
const newCardForm = document.querySelector('.form[name = add-card-form]');

// enable validation for all forms:
const editProfileValidator = new FormValidator(formConfig, editProfileForm);
editProfileValidator.enableValidation();
const addNewCardValidator = new FormValidator(formConfig, newCardForm);
addNewCardValidator.enableValidation();

// image popup:
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

// render card list:
const cardList = new Section({
  items: initialElements,
  renderer: (item) => {
    const card = new Card(item, '#card-element', item => imagePopup.open(item));
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
  const card = new Card(inputValues, '#card-element', item => imagePopup.open(item));

  cardList.addItem(card.generateCard());
  newCardPopup.close();
});

newCardPopup.setEventListeners();

newCardButton.addEventListener('click', () => {
  addNewCardValidator.clearInputErrors()
  newCardPopup.open();
})

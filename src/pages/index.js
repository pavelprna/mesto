import './index.css';
import {
  formConfig,
  initialElements,
  cardConfig,
  popupWithImageConfig
} from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

const profilePopupSelector = '.popup_content_edit-profile';
const profileButton = document.querySelector('.profile__edit-button');
const profileForm = document.querySelector('.form[name = edit-profile-form]')
const userNameSelector = '.profile__title';
const userAboutSelector = '.profile__subtitle';
const userNameInput = document.querySelector('.form__input[name = name]')
const userAboutInput = document.querySelector('.form__input[name = about]')
const newCardButton = document.querySelector('.profile__add-button');
const newCardPopupSelector = '.popup_content_new-card';
const newCardForm = document.querySelector('.form[name = add-card-form]');

// enable validation for all forms:
const profileValidator = new FormValidator(formConfig, profileForm);
profileValidator.enableValidation();
const newCardValidator = new FormValidator(formConfig, newCardForm);
newCardValidator.enableValidation();

// image popup:
const { imagePopupSelector } = popupWithImageConfig;
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

// render card list:
const { cardSelector, cardListSection } = cardConfig;

const cardList = new Section({
  items: initialElements,
  renderer: (item) => {
    const card = new Card(item, cardSelector, item => imagePopup.open(item));
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

profileButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();

  userNameInput.value = name;
  userAboutInput.value = about;

  profileValidator.clearInputErrors();
  profilePopup.open();
});

// new card popup:
const newCardPopup = new PopupWithForm(newCardPopupSelector, (inputValues) => {
  const card = new Card(inputValues, cardSelector, item => imagePopup.open(item));

  cardList.addItem(card.generateCard());
  newCardPopup.close();
});

newCardPopup.setEventListeners();

newCardButton.addEventListener('click', () => {
  newCardValidator.clearInputErrors()
  newCardPopup.open();
});

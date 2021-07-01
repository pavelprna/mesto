import './index.css';
import {
  formConfig,
  cardConfig,
  popupWithImageConfig,
  newCardPopupConfig,
  profilePopupConfig,
  profileConfig,
  profileButton,
  newCardButton
} from "../utils/constants.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import {api} from "../utils/Api";

// enable validation for all forms:
const profileValidator = new FormValidator(formConfig, profilePopupConfig.profileForm);
profileValidator.enableValidation();
const newCardValidator = new FormValidator(formConfig, newCardPopupConfig.newCardForm);
newCardValidator.enableValidation();

// image popup:
const { imagePopupSelector } = popupWithImageConfig;
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

api.getInitialCards().then(data => {
  const { cardSelector, cardListSection } = cardConfig;

  const cardList = new Section({
    items: data,
    renderer: (item) => {
      const card = new Card(item, cardSelector, item => imagePopup.open(item));
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  }, cardListSection);

  cardList.renderItems();
})


// user info:
const { userNameSelector, userAboutSelector } = profileConfig;
const userInfo = new UserInfo(userNameSelector, userAboutSelector);
api.getUserInfo().then(user => {
  userInfo.setUserInfo(user);
})


// profile popup:
const { profilePopupSelector } = profilePopupConfig;
const profilePopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  userInfo.setUserInfo(inputValues);

  profilePopup.close();
});

profilePopup.setEventListeners();

profileButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  const { userNameInput, userAboutInput } = profilePopupConfig;

  userNameInput.value = name;
  userAboutInput.value = about;

  profileValidator.clearInputErrors();
  profilePopup.open();
});

// new card popup:
const { newCardPopupSelector } = newCardPopupConfig;
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

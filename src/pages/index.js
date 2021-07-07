import './index.css';
import {
  formConfig,
  cardConfig,
  popupWithImageConfig,
  newCardPopupConfig,
  profilePopupConfig,
  confirmPopupConfig,
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
import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";

// enable validation for all forms:
const profileValidator = new FormValidator(formConfig, profilePopupConfig.profileForm);
profileValidator.enableValidation();
const newCardValidator = new FormValidator(formConfig, newCardPopupConfig.newCardForm);
newCardValidator.enableValidation();

// user info:
const { userNameSelector, userAboutSelector } = profileConfig;
const userInfo = new UserInfo(userNameSelector, userAboutSelector);
api.getUser().then(user => {
  userInfo.setUserInfo(user);
});

// get initial cards
const { cardSelector, cardListSection } = cardConfig;
const cardList = api.getInitialCards().then(data => {
  const cardSection = new Section({
    items: data,
    renderer: (item) => {
      const card = new Card(item, cardSelector, {
        viewImage: item => imagePopup.open(item),
        confirmDelete: item => {
          confirmPopup.setSubmitAction(item => {

          })
          confirmPopup.open();
        }
      });
      const cardElement = card.generateCard();
      cardSection.addItem(cardElement);
    }
  }, cardListSection);

  cardSection.renderItems();

  return cardSection;
});

// profile popup:
const { profilePopupSelector } = profilePopupConfig;
const profilePopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  api.updateUser(inputValues)
    .then(user => {
      userInfo.setUserInfo(user);
      profilePopup.close();
    });
});

profilePopup.setEventListeners();

// image popup:
const { imagePopupSelector } = popupWithImageConfig;
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

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
  api.createCard(inputValues)
    .then(json => {
      return new Card(json, cardSelector, item => imagePopup.open(item));
    })
    .then(card => {
      cardList.then((section) => {
        section.addItem(card.generateCard());
      })
    })

  newCardPopup.close();
});

newCardPopup.setEventListeners();

newCardButton.addEventListener('click', () => {
  newCardValidator.clearInputErrors()
  newCardPopup.open();
});

// confirm popup:
const { confirmPopupSelector } = confirmPopupConfig;
const confirmPopup = new PopupWithFormSubmit(confirmPopupSelector);
confirmPopup.setEventListeners()

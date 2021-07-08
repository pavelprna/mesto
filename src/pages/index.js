import './index.css';
import {
  avatarButton,
  avatarPopupConfig,
  cardConfig,
  confirmPopupConfig,
  formConfig,
  newCardButton,
  newCardPopupConfig,
  popupWithImageConfig,
  profileButton,
  profileConfig,
  profilePopupConfig
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
const avatarValidator = new FormValidator(formConfig, avatarPopupConfig.form);
avatarValidator.enableValidation();
const newCardValidator = new FormValidator(formConfig, newCardPopupConfig.newCardForm);
newCardValidator.enableValidation();

function createCard(cardData, currentUserId) {
  const card =  new Card(cardData, cardSelector, {
    viewImage: item => imagePopup.open(item),
    confirmDelete: () => {
      confirmPopup.setSubmitAction((evt) => {
        evt.preventDefault()
        api.deleteCard(cardData._id)
          .then(() => {
            card.remove();
            confirmPopup.close();
          })
          .catch(err => console.error(err));
      });
      confirmPopup.open();
    },
    likeHandler: () => {
      if (card.liked) {
        api.unlikeCard(cardData._id)
          .then(json => {
            card.setLikes(json.likes)
          })
          .catch(err => console.error(err));
      } else {
        api.likeCard(cardData._id)
          .then(json => {
            card.setLikes(json.likes)
          })
          .catch(err => console.error(err));
      }
    }
  });
  card.setCurrentUser(currentUserId)
  return card;
}

// user info:
const userInfo = new UserInfo(profileConfig);

// get initial cards:
let cardSection;
const {cardSelector, cardListSection} = cardConfig;

Promise.all([
  api.getUser(),
  api.getInitialCards()
])
  .then(([user, data]) => {
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user);
    cardSection = new Section({
      items: data,
      renderer: (item) => {
        const card = createCard(item, userInfo.getId());
        const cardElement = card.generateCard();
        cardSection.addItem(cardElement);
      }
    }, cardListSection);

    cardSection.renderItems();
  })
  .catch(err => console.error(err));

// profile popup:
const {profilePopupSelector} = profilePopupConfig;
const profilePopup = new PopupWithForm(profilePopupSelector, (inputValues) => {
  profilePopup.renderLoading(true);
  api.updateUser(inputValues)
    .then(user => {
      userInfo.setUserInfo(user);
      profilePopup.close();
      profilePopup.renderLoading(false);
    })
    .catch(err => console.error(err));
});

profilePopup.setEventListeners();

// image popup:
const imagePopup = new PopupWithImage(popupWithImageConfig);
imagePopup.setEventListeners();

// avatar popup:
const avatarPopup = new PopupWithForm(avatarPopupConfig.popupSelector, (inputValue) => {
  avatarPopup.renderLoading(true);
  api.changeAvatar(inputValue)
    .then(user => {
      userInfo.setAvatar(user);
      avatarPopup.close();
      avatarPopup.renderLoading(false);
    })
    .catch(err => console.error(err));
});
avatarPopup.setEventListeners();

// edit profile button:
profileButton.addEventListener('click', () => {
  const {name, about} = userInfo.getUserInfo();
  const {userNameInput, userAboutInput} = profilePopupConfig;

  userNameInput.value = name;
  userAboutInput.value = about;

  profileValidator.clearInputErrors();
  profilePopup.open();
});

// change avatar button:
avatarButton.addEventListener('click', () => {
  avatarPopupConfig.urlInput.value = '';
  avatarValidator.clearInputErrors();
  avatarPopup.open()
})

// new card popup:
const {newCardPopupSelector} = newCardPopupConfig;
const newCardPopup = new PopupWithForm(newCardPopupSelector, (inputValues) => {
  newCardPopup.renderLoading(true);
  api.createCard(inputValues)
    .then(json => {
      return createCard(json, userInfo.getId())
    })
    .then(card => {
      cardSection.addItem(card.generateCard(), 'prepend');
      newCardPopup.close();
      newCardPopup.renderLoading(false)
    })
    .catch(err => console.error(err))
});

newCardPopup.setEventListeners();

newCardButton.addEventListener('click', () => {
  newCardValidator.clearInputErrors()
  newCardPopup.open();
});

// confirm popup:
const {confirmPopupSelector} = confirmPopupConfig;
const confirmPopup = new PopupWithFormSubmit(confirmPopupSelector);
confirmPopup.setEventListeners();

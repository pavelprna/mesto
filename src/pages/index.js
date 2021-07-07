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

// user info:
const userInfo = new UserInfo(profileConfig);
api.getUser().then(user => {
  userInfo.setUserInfo(user);
  userInfo.setAvatar(user);
  console.log(user)
  return user;
});

// get initial cards
const { cardSelector, cardListSection } = cardConfig;
const cardList = api.getInitialCards().then(data => {
  const cardSection = new Section({
    items: data,
    renderer: (item) => {
      const card = new Card(item, cardSelector, {
        viewImage: item => imagePopup.open(item),
        confirmDelete: () => {
          confirmPopup.setSubmitAction((evt) => {
            evt.preventDefault()
            api.deleteCard(item._id)
              .then(() => {
                card.remove();
                confirmPopup.close();
              })
          });
          confirmPopup.setEventListeners();
          confirmPopup.open();
        },
        likeHandler: () => {
          if (card.liked) {
            api.unlikeCard(item._id)
              .then(json => {
                card.setLikes(json.likes)
              })
          } else {
            api.likeCard(item._id)
              .then(json => {
                card.setLikes(json.likes)
              })
          }
        }
      });
      card.isOwner = userInfo.getId() === item.owner._id;
      card.checkIsLiked(userInfo.getId());
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

// avatar popup:
const avatarPopup = new PopupWithForm(avatarPopupConfig.popupSelector, (inputValue) => {
  console.log(inputValue)
  api.changeAvatar(inputValue)
    .then(user => {
      userInfo.setAvatar(user);
      avatarPopup.close();
    })
});
avatarPopup.setEventListeners();

// edit profile button:
profileButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  const { userNameInput, userAboutInput } = profilePopupConfig;

  userNameInput.value = name;
  userAboutInput.value = about;

  profileValidator.clearInputErrors();
  profilePopup.open();
});

// change avatar button:
avatarButton.addEventListener('click', () => {
  avatarPopupConfig.urlInput.value = userInfo.getAvatar();
  avatarValidator.clearInputErrors();
  avatarPopup.open()
})

// new card popup:
const { newCardPopupSelector } = newCardPopupConfig;
const newCardPopup = new PopupWithForm(newCardPopupSelector, (inputValues) => {
  api.createCard(inputValues)
    .then(json => {
      const card = new Card(json, cardSelector, {
        viewImage: json => imagePopup.open(json),
        confirmDelete: () => {
          confirmPopup.setSubmitAction((evt) => {
            evt.preventDefault()
            api.deleteCard(json._id)
              .then(() => {
                card.remove();
                confirmPopup.close();
              })
          });
          confirmPopup.setEventListeners();
          confirmPopup.open();
        },
        likeHandler: () => {
          if (card.liked) {
            api.unlikeCard(json._id)
              .then(likes => {
                card.setLikes(likes)
              })
          } else {
            api.likeCard(json._id)
              .then(likes => {
                card.setLikes(likes)
              })
          }
        }
      });
      return card;
    })
    .then(card => {
      cardList.then((section) => {
        card.isOwner = true;
        section.addItem(card.generateCard(), 'prepend');
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
